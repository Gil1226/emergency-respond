<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Hospital extends Model
{
    protected $fillable = [
        "hospitalName",
        "hospitalAddress", 
        "availableAmbulance",
        "contact_number"
    ];

    public function user() {
        return $this->hasMany(User::class);
    }

}
