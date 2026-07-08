<?php
namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Report;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Models\Hospital;

class ReportController extends Controller
{
    public function addReport(Request $request){

        $data = $request->validate([
            'location' => "required",
            'relationship' => "required",
            'severity' => "required",
            'picture' => 'required|image|mimes:jpeg,png,jpg,gif,webp|max:2048',
            'description' => "nullable|string",
            'lat' => "required",
            'long' => "required",
            'status' => "required"
        ]);
        
        $data['user_id'] = auth()->id();

        $imagePath = null;
        if ($request->hasFile("picture")) {
            $imagePath = $request->file('picture')->store('uploads', "public");
        }
        $data['picture'] = $imagePath;

        Report::create($data);
        
    }

    public function index(Request $request){
        $reports = Report::with('user');

        if ($request->filled('status')) {
            $reports->where('status', $request->status);
        }
        return Inertia::render('Respond', [
           'reports' =>  $reports->get()
        ]);
    }

    public function updateStatus(Request $request, Report $report){
        $hospital = auth()->user()->hospital;

        if ($request->status == "ongoing") {
            if ($hospital->availableAmbulance <= 0) {
                return back()->with('error', 'No available ambulances.');
            }
            $report->status = $request->status;
            $report->respond_by = auth()->user()->name;
            $report->responded_at = now();
            $report->save();

            $hospital->decrement('availableAmbulance');
        }elseif ($request->status == "rescued") {
            $report->status = $request->status;
            $report->rescued_at = now();
            $report->save();

            $hospital->increment('availableAmbulance');
        }
        
    }

}
