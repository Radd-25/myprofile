<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable;

    // This array tells Laravel which columns are allowed to be filled
    protected $fillable = [
        'username', // Make sure this is exactly 'username'
        'password',
    ];
}
