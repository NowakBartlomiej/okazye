<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserStat extends Model
{
    use HasFactory;

    protected $fillable = [
        'occasions-created',
        'occasions-rated',
        'comments-created',
        'users-followers',
        'user-occasion-rate'
    ];
}
