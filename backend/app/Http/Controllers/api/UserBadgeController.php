<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserBadgeResource;
use App\Models\UserStat;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserBadgeController extends Controller
{
    public function index() {
        return UserBadgeResource::collection(UserStat::where('user_id', 1)->get());
    }
}
