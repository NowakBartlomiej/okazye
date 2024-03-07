<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Resources\FollowerResource;
use App\Http\Resources\UserResource;
use App\Models\Follower;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FollowerController extends Controller
{
    public function index()
    {
        return FollowerResource::collection(Follower::all());
    }

    public function followers()
    {
        $usersId = Follower::where('follower_id', Auth::user()->id)->pluck('user_id');
        $followers = User::whereIn('id', $usersId)->get();
        
        return UserResource::collection($followers);
    }

    public function followUnfollow(Request $request)
    {
        $request->validate([
            'userId' => 'required'
        ]);

        $follower = Follower::where('user_id', $request->userId)
            ->where('follower_id', Auth::user()->id)
            ->first();

        $userName = User::find($request->userId)->name;

        if (!$follower) {
            $follower = new Follower();

            $follower->user_id = $request->userId;
            $follower->follower_id = Auth::user()->id;

            if ($follower->save()) {
                return response()->json([
                    'message' => 'Obserwujesz użytkownika: ' . $userName
                ], 200);
            } else {
                return response()->json([
                    'message' => 'Coś poszło nie tak'
                ], 500);
            }
        } else {
            if ($follower->delete()) {
                return response()->json([
                    'message' => 'Nie obserwujesz już użytkownika: ' . $userName
                ], 200);
            } else {
                return response()->json([
                    'message' => 'Coś poszło nie tak'
                ], 500);
            }
        }
    }
}
