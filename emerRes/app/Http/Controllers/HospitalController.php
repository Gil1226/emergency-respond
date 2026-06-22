<?php

namespace App\Http\Controllers;

use App\Models\Hospital;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HospitalController extends Controller
{
    public function addHospital(Request $request){
        $data = $request->validate([
            "hospitalName" => "required",
            "hospitalAddress" => "required", 
            "availableERBed" => "required",
            "availableICUBed" => "required",
            "availableAmbulance"=> "required"
        ]);

        Hospital::create($data);
        
    }

    public function index(){
        $hospital = Hospital::all();

        return Inertia::render("Hospital", [
            'hospitals' => $hospital
        ]);
    }
}
