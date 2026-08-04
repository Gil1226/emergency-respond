<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Report;
use Inertia\Inertia;


class DashboardController extends Controller
{
    public function index(){
        $report = Report::with('user');

        return Inertia::render('Dashboard', [
            "reports" => $report->get()
        ]);
    }
}
