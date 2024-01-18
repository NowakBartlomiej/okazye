<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Resources\CommentRatingResource;
use App\Models\Comment;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class CommentRatingController extends Controller
{
    public function getCommentRatings($commentId) {
        $reaction1 = DB::table('comment_user')
            ->where('comment_id', $commentId)
            ->where('type', 1)
            ->count();

        $reaction2 = DB::table('comment_user')
            ->where('comment_id', $commentId)
            ->where('type', 2)
            ->count();

        $reaction3 = DB::table('comment_user')
            ->where('comment_id', $commentId)
            ->where('type', 3)
            ->count();

        $reaction4 = DB::table('comment_user')
            ->where('comment_id', $commentId)
            ->where('type', 4)
            ->count();

        
        return [
            'reaction1' => $reaction1,
            'reaction2' => $reaction2,
            'reaction3' => $reaction3,
            'reaction4' => $reaction4,
            'userReaction' => Auth::user() ? DB::table('comment_user')->where('comment_id', $commentId)->where('user_id', Auth::user()->id)->value('type') : null
        ];
    }
    
    public function rateComment(Request $request) {
        $request->validate([
            'commentId' => 'required',
            'type' => 'required'
        ]);

        $rating = DB::table('comment_user')
            ->where('comment_id', $request->commentId)
            ->where('user_id', Auth::user()->id)
            ->where('type', $request->type)
            ->first();

        if (!$rating) {
            try {
                DB::table('comment_user')->updateOrInsert([
                    'comment_id' => $request->commentId,
                    'user_id' => Auth::user()->id,
                    'occasion_id' => Comment::where('id', $request->commentId)->pluck('occasion_id')->first(),
                ], ['type' => $request->type]);
                return response()->json([
                    'message' => 'Dodano reakcje'
                ], 200);

            } catch(Exception $e) {
                return response()->json([
                    'message' => 'Coś poszło nie tak'
                ], 500);
            }
        } else {
            try {
                DB::table('comment_user')
                ->where('comment_id', $request->commentId)
                ->where('user_id', Auth::user()->id)
                ->where('type', $request->type)
                ->delete();

                return response()->json([
                    'message' => 'Usunięto reakcje'
                ], 200);


            } catch(Exception $e) {
                return response()->json([
                    'message' => 'Coś poszło nie tak'
                ], 500);
            }
        }

    }
}
