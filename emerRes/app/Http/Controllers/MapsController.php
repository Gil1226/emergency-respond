<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Report;
use Inertia\Inertia;

class MapsController extends Controller
{
    public function index($reportId = null) {

        $report = Report::all();

        return Inertia::render('Map',[
            'reports' => $report,
            'reportId' => $reportId
        ]);

    }
}
