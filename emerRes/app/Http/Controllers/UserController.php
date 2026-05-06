<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\Mail;
use SebastianBergmann\CodeCoverage\Report\Html\Dashboard;
use Inertia\Inertia;

use function PHPUnit\Framework\isEmpty;

class UserController extends Controller
{
    public function signUp(Request $request){
        $data = $request->validate([
            'name' => 'required',
            'password' => 'required|min:6',
            'contact_number' => 'required',
            'email' => 'required|email|unique:users,email'
        ]);

        $otp = rand(100000, 999999);

        $data['password'] = Hash::make($data['password']);
        $data['otp'] = $otp;
        $data['otpExpiration'] = Carbon::now()->addMinute(5);
        $data['is_verified'] = false;
        $user = User::create($data);

        Mail::raw("Your OTP is: $otp", function ($msg) use ($user){
            $msg->to($user->email)->subject('Account Verification');
        });
        return Inertia::render('OtpConfirmation', [
            'email' => $user->email
        ]);
        
    }

    public function Otp(Request $request){
        $data = $request->validate([
            'guess' => 'required|max:6',
            'email' => 'required'
        ]);

        $user = User::where('email', $data['email'])->first();

        if ((string)$user->otp !== (string)trim($data['guess'])) {
            return redirect('/otp')->withErrors([
               'general' => 'incorrect OTP'
            ])->withInput();
        }

        if ($user->otp == $data['guess']) {
            $user->update([
                'is_verified' => true
            ]);

        return redirect('/'); 
        }
    }

    public function Login(Request $request){
        $data = $request->validate([
            'email' => 'required',
            'password' => 'required'
        ],
        [
            'email.required' => 'Email is Empty',
            'password.required' => 'Password is Empty'
        ]);

        $user = User::where('email', $data['email'])->first();
        
        if (!$user->is_verified) {
            return back()->withErrors([
                'notVerify' => 'Account is not Verified'
            ]);
        }

        if (!auth()->attempt($data)) {
            return back()->withErrors([
                'general' => 'Invalid Username or Password'
            ]);
        }
        
    }

    public function Logout(Request $request){
        auth()->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/');
    }
}
