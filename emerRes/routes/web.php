<?php

use App\Http\Controllers\HospitalController;
use App\Http\Controllers\MapsController;
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
    
    Route::controller(MapsController::class)->group(function(){
        Route::get('/map/{reportId?}', 'index');
        Route::post('/eta/{report}', 'storeEta');
    });
   
    Route::controller(ReportController::class)->group(function(){
        Route::post('/addReport', "addReport");
        Route::get('/respond', "index");
        Route::patch('/respond/{report}', "updateStatus");
    });

    Route::controller(HospitalController::class)->group(function(){
        Route::post('/addHospital', "addHospital");
        Route::post("/createAcc", "createAcc");
        Route::get('/hospital', 'index');
        Route::put('/hospital/{hospital}', 'editHospital');
        Route::delete('/hospital/{hospital}', 'deleteHospital');
        Route::get('/hospital/{hospital}', 'viewHospitalAcc');
    });
});

Route::controller(UserController::class)->group(function(){
    Route::post('/sign-up', "signUp");
    Route::post('/login', "Login");
    Route::post('/logout',"Logout"); 
    Route::post('/otp', "Otp");
    Route::post('/verify', "verify");
});

