<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Report extends Model
{
    protected $fillable = [
        'user_id',
        'location',
        'relationship',
        'severity',
        'picture',
        'description',
        'lat',
        'long'
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }
}
