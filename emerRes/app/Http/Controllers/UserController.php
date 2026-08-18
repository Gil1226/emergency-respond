<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Carbon\Carbon;
use Inertia\Inertia;
use Resend\Laravel\Facades\Resend;

class UserController extends Controller
{
    public function signUp(Request $request)
    {
        $data = $request->validate([
            'name' => 'required',
            'password' => 'required|min:6',
            'contact_number' => 'required',
            'email' => 'required|email',
            'role' => 'required'
        ]);

        $emailChecker = User::where('email', $data['email'])->first();

        /*
        |--------------------------------------------------------------------------
        | Existing but unverified account
        |--------------------------------------------------------------------------
        */
        if ($emailChecker && !$emailChecker->is_verified) {

            if (
                $emailChecker->name == $data['name'] &&
                Hash::check($data['password'], $emailChecker->password) &&
                $emailChecker->contact_number == $data['contact_number']
            ) {

                $otp = rand(100000, 999999);

                Resend::emails()->send([
                    'from' => 'onboarding@resend.dev',
                    'to' => [$emailChecker->email],
                    'subject' => 'Account Verification',
                    'html' => "
                        <h2>Account Verification</h2>
                        <p>Your OTP is:</p>
                        <h1>{$otp}</h1>
                        <p>This code expires in 5 minutes.</p>
                    ",
                ]);

                $emailChecker->update([
                    'otp' => $otp,
                    'otpExpiration' => Carbon::now()->addMinutes(5)
                ]);

                return Inertia::render('OtpConfirmation', [
                    'email' => $emailChecker->email
                ]);
            }

            return back()->withErrors([
                'exist' => 'Email is already used and not Verified'
            ]);
        }

        /*
        |--------------------------------------------------------------------------
        | Existing verified account
        |--------------------------------------------------------------------------
        */
        if ($emailChecker) {
            return back()->withErrors([
                'exist' => 'Email already Exist'
            ]);
        }

        /*
        |--------------------------------------------------------------------------
        | Create new account
        |--------------------------------------------------------------------------
        */
        $otp = rand(100000, 999999);

        $data['password'] = Hash::make($data['password']);
        $data['otp'] = $otp;
        $data['otpExpiration'] = Carbon::now()->addMinutes(5);
        $data['is_verified'] = false;

        $user = User::create($data);

        /*
        |--------------------------------------------------------------------------
        | Send OTP using Resend
        |--------------------------------------------------------------------------
        */
        Resend::emails()->send([
            'from' => 'onboarding@resend.dev',
            'to' => [$user->email],
            'subject' => 'Account Verification',
            'html' => "
                <h2>Account Verification</h2>
                <p>Your OTP is:</p>
                <h1>{$otp}</h1>
                <p>This code expires in 5 minutes.</p>
            ",
        ]);

        return Inertia::render('OtpConfirmation', [
            'email' => $user->email
        ]);
    }


    /*
    |--------------------------------------------------------------------------
    | OTP Verification
    |--------------------------------------------------------------------------
    */
    public function Otp(Request $request)
    {
        $data = $request->validate([
            'guess' => 'required|max:6',
            'email' => 'required|email'
        ]);

        $user = User::where('email', $data['email'])->first();

        /*
        |--------------------------------------------------------------------------
        | Check if user exists
        |--------------------------------------------------------------------------
        */
        if (!$user) {
            return redirect('/otp')->withErrors([
                'general' => 'User not found'
            ])->withInput();
        }

        /*
        |--------------------------------------------------------------------------
        | Check if OTP has expired
        |--------------------------------------------------------------------------
        */
        if (!$user->otpExpiration || Carbon::now()->gt($user->otpExpiration)) {
            return redirect('/otp')->withErrors([
                'general' => 'Code Expired'
            ])->withInput();
        }

        /*
        |--------------------------------------------------------------------------
        | Check OTP
        |--------------------------------------------------------------------------
        */
        if ((string) $user->otp !== (string) trim($data['guess'])) {
            return redirect('/otp')->withErrors([
                'general' => 'Incorrect OTP'
            ])->withInput();
        }

        /*
        |--------------------------------------------------------------------------
        | Verify account
        |--------------------------------------------------------------------------
        */
        $user->update([
            'is_verified' => true,
            'otp' => null,
            'otpExpiration' => null
        ]);

        return redirect('/');
    }


    /*
    |--------------------------------------------------------------------------
    | Login
    |--------------------------------------------------------------------------
    */
    public function Login(Request $request)
    {
        $data = $request->validate(
            [
                'email' => 'required|email',
                'password' => 'required'
            ],
            [
                'email.required' => 'Email is Empty',
                'password.required' => 'Password is Empty'
            ]
        );

        /*
        |--------------------------------------------------------------------------
        | Attempt login once
        |--------------------------------------------------------------------------
        */
        if (!auth()->attempt($data)) {
            return back()->withErrors([
                'general' => 'Incorrect Password'
            ]);
        }

        $user = auth()->user();

        /*
        |--------------------------------------------------------------------------
        | Check account verification
        |--------------------------------------------------------------------------
        */
        if (!$user->is_verified) {

            auth()->logout();

            return back()->withErrors([
                'notVerify' => 'Account is not Verified'
            ]);
        }

        return redirect('/');
    }


    /*
    |--------------------------------------------------------------------------
    | Logout
    |--------------------------------------------------------------------------
    */
    public function Logout(Request $request)
    {
        auth()->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/login');
    }


    /*
    |--------------------------------------------------------------------------
    | Resend OTP
    |--------------------------------------------------------------------------
    */
    public function verify(Request $request)
    {
        $data = $request->validate([
            'email' => 'required|email'
        ]);

        $email = $data['email'];

        $emailChecker = User::where('email', $email)->first();

        /*
        |--------------------------------------------------------------------------
        | Check if email exists
        |--------------------------------------------------------------------------
        */
        if (!$emailChecker) {
            return back()->withErrors([
                'email' => 'Email not found.'
            ]);
        }

        /*
        |--------------------------------------------------------------------------
        | Check if already verified
        |--------------------------------------------------------------------------
        */
        if ($emailChecker->is_verified) {
            return back()->withErrors([
                'email' => 'Account is already verified.'
            ]);
        }

        /*
        |--------------------------------------------------------------------------
        | Generate new OTP
        |--------------------------------------------------------------------------
        */
        $otp = rand(100000, 999999);

        /*
        |--------------------------------------------------------------------------
        | Send OTP using Resend
        |--------------------------------------------------------------------------
        */
        Resend::emails()->send([
            'from' => 'onboarding@resend.dev',
            'to' => [$emailChecker->email],
            'subject' => 'Account Verification',
            'html' => "
                <h2>Account Verification</h2>
                <p>Your new OTP is:</p>
                <h1>{$otp}</h1>
                <p>This code expires in 5 minutes.</p>
            ",
        ]);

        /*
        |--------------------------------------------------------------------------
        | Save OTP
        |--------------------------------------------------------------------------
        */
        $emailChecker->update([
            'otp' => $otp,
            'otpExpiration' => Carbon::now()->addMinutes(5)
        ]);

        return Inertia::render('OtpConfirmation', [
            'email' => $emailChecker->email
        ]);
    }
}