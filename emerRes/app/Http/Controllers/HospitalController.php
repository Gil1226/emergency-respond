<?php

namespace App\Http\Controllers;

use App\Models\Hospital;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Validation\Rules\Password;

class HospitalController extends Controller
{
    public function addHospital(Request $request){
        $data = $request->validate([
            "hospitalName" => "required",
            "hospitalAddress" => "required", 
            "availableAmbulance"=> "required",
            "contact_number" => "required"
        ]);

        Hospital::create($data);
        
    }

    public function index(){
        $hospital = Hospital::all();

        return Inertia::render("Hospital", [
            'hospitals' => $hospital
        ]);
    }

    public function createAcc(Request $request){
        $data = $request->validate([
            'name' => 'required',
            'email' => 'required',
            'contact_number' => 'required',
            'password' => [
                'required',
                'confirmed',
                Password::defaults(),
            ],
            'is_verified' => 'required',
            'role' => 'required',
            'hospital_id' => 'required'
        ]);

        User::create($data);
    }

    public function editHospital(Request $request, Hospital $hospital){
        $hospital->update([
            "hospitalName" => $request->hospitalName,
            "hospitalAddress" => $request->hospitalAddress, 
            "availableAmbulance"=> $request->availableAmbulance,
            "contact_number" => $request->contact_number,
        ]);
    }
}
