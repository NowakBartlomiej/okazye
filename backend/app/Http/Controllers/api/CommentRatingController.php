<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Comment;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class CommentRatingController extends Controller
{
    public function rateComment(Request $request) {
        // Dopisac occaaion id tutaj a nie z frontu
        // Zmienic na attach
        
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
