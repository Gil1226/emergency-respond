<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*Route::get('/', function () {
    return Inertia::render('Login');
});

Route::get('/sign-up', function(){
    return Inertia::render('Signup');
});*/
Route::middleware('guest')->group(function(){
    Route::get('/', fn () => Inertia::render('Login'));
    Route::get('/sign-up', fn () => Inertia::render('Signup'));
    Route::get('/otp', fn () => Inertia::render('OtpConfirmation'));
});

Route::middleware('auth')->group(function(){
    Route::get('/dashboard', fn () => Inertia::render('Dashboard'));
});

Route::post('/sign-up', [UserController::class, "signUp"]);
Route::post('/login', [UserController::class, "Login"]);
Route::post('/logout', [UserController::class, "Logout"]); 
Route::post('/otp', [UserController::class, "Otp"]);