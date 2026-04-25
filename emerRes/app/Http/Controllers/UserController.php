<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use SebastianBergmann\CodeCoverage\Report\Html\Dashboard;

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

        $data['password'] = Hash::make($data['password']);

        $user = User::create($data);

        auth()->login($user);

        return redirect('/dashboard');
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
        if (!auth()->attempt($data)) {
            return back()->withErrors([
                'general' => 'Invalid Username or Password'
            ]);
        }

        //if (auth()->attempt($data)) {
            $request->session()->regenerate();
            return redirect('/dashboard');
        //};

    }

    public function Logout(Request $request){
        auth()->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/');
    }
}
