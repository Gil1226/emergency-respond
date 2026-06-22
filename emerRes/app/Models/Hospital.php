<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Hospital extends Model
{
    protected $fillable = [
        "hospitalName",
        "hospitalAddress", 
        "availableERBed",
        "availableICUBed",
        "availableAmbulance"
    ];
}
