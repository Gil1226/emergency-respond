<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Report;
use Inertia\Inertia;


class DashboardController extends Controller
{
    public function index(){
        $report = Report::with('user')->select('id', 'severity', 'status', 'location', 'user_id', 'respond_by', "responded_at", "rescued_at", "eta");

        return Inertia::render('Dashboard', [
            "reports" => $report->get()
        ]);
    }
}
