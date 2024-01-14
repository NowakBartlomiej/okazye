<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserStat extends Model
{
    use HasFactory;

    protected $fillable = [
        'occasions_created',
        'occasions_rated',
        'comments_created',
        'users_followers',
        'user_occasion_rate'
    ];
}
