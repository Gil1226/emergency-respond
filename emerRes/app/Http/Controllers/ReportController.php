<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Report;
use Inertia\Inertia;

class ReportController extends Controller
{
    public function addReport(Request $request){

        $data = $request->validate([
            'location' => "required",
            'relationship' => "required",
            'severity' => "required",
            'picture' => 'required|image|mimes:jpeg,png,jpg,gif,webp|max:2048'
        ]);
        
        $data['user_id'] = auth()->id();

        $imagePath = null;
        if ($request->hasFile("picture")) {
            $imagePath = $request->file('picture')->store('uploads', "public");
        }
        $data['picture'] = $imagePath;

        Report::create($data);
        
    }

    public function index(){
        $reports = Report::with('user')->get();

        return Inertia::render('Respond', [
           'reports' =>  $reports
        ]);
    }
}
