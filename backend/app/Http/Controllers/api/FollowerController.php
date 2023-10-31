<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Follower;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FollowerController extends Controller
{
    public function followUnfollow(Request $request) {
        $request->validate([
            'user_id' => 'required'
        ]);

        $follower = Follower::where('user_id', $request->user_id)
                                ->where('follower_id', Auth::user()->id)
                                ->first();

        if (!$follower) {
            $follower = new Follower();

            $follower->user_id = $request->user_id;
            $follower->follower_id = Auth::user()->id;
            $follower->follower_id = 11;

            if ($follower->save()) {
                return response()->json([
                    'message' => 'You are now following this user'
                ], 200);
            } else {
                return response()->json([
                    'message' => 'Something went wrong following this user, try again'
                ], 500);
            }
        } else {
            if ($follower->delete()) {
                return response()->json([
                    'message' => 'You unfollowed this user'
                ], 200);
            } else {
                return response()->json([
                    'message' => 'Something went wrong, please try again'
                ], 500);
            }
        }                   
    }
}
