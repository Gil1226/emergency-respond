<?php

use App\Http\Controllers\HospitalController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ReportController;
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
    Route::get('/otp', function () {
        return Inertia::render('OtpConfirmation', [
            'email' => old('email')
        ]);
    });
});

Route::middleware('auth')->group(function(){
    Route::get('/dashboard', fn () => Inertia::render('Dashboard'));
    Route::get('/hospital', fn () => Inertia::render('Hospital'));
    Route::get('/respond', fn () => Inertia::render('Respond'));
    Route::get('/map', fn () => Inertia::render('Map'));

    Route::post('/addHospital', [HospitalController::class, "addHospital"]);
    Route::get('/hospital', [HospitalController::class, 'index']);

    Route::post('/addReport', [ReportController::class, "addReport"]);
    Route::get('/respond', [ReportController::class, "index"]);
});

Route::post('/sign-up', [UserController::class, "signUp"]);
Route::post('/login', [UserController::class, "Login"]);
Route::post('/logout', [UserController::class, "Logout"]); 
Route::post('/otp', [UserController::class, "Otp"]);
Route::post('/verify', [UserController::class, "verify"]);