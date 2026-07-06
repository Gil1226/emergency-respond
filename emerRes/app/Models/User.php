<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Database\Factories\UserFactory;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Attributes\Hidden;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    /** @use HasFactory<UserFactory> */
    use HasFactory, Notifiable;
    protected $table = 'user';

    protected $fillable = [
        'name',
        'email',
        'password',
        'contact_number',
        'otp',
        'otpExpiration',
        'is_verified',
        'role',
        'hospital_id'
    ];

    protected $hidden = [
        'password',
        'otp',
        'otpExpiration',
    ];
    /**
     * Get the attributes that should be cast.
     *
     
     * 
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'password' => 'hashed',
        ];
    }

    public function reports(){
        return $this->hasMany(Report::class);
    }

    public function hospital(){
         return $this->belongsTo(Hospital::class);
    }
}
