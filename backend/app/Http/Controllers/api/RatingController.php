<?php

namespace App\Http\Controllers\api;

use App\Events\RatingCreated;
use App\Events\RatingUpdated;
use App\Http\Controllers\Controller;
use App\Models\Occasion;
use Error;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class RatingController extends Controller
{
    public function rate(Request $request) {
        $request->validate([
            'occasionId' => 'required',
            'rating' => 'required'
        ]);

        $rating = DB::table('occasion_user')
                ->where('occasion_id', $request->occasionId)
                ->where('user_id', Auth::user()->id)
                ->first();
        
        return DB::transaction(function() use ($rating, $request) {
            if (!$rating) {
                $value =  DB::table('occasion_user')->insert([
                    'occasion_id' => $request->occasionId,
                    'user_id' => Auth::user()->id,
                    'rating' => $request->rating,
                ]);
                
                if ($value) {
                    RatingCreated::dispatch(
                        Auth::user(), 
                        Occasion::find($request->occasionId),
                        $request->rating
                    );
                    
                    

                    return response()->json([
                        'message' => 'Oceniono okazję'
                    ], 200);
                } else {
                    return response()->json([
                        'message' => 'Coś poszło nie tak'
                    ], 500);
                }
            } else {
                try {
                    DB::table('occasion_user')
                    ->where('occasion_id', $request->occasionId)
                    ->where('user_id', Auth::user()->id)
                    ->update([
                        'rating' => $request->rating
                    ]);
    
                    RatingUpdated::dispatch(
                        Auth::user(), 
                        Occasion::find($request->occasionId),
                        $request->rating
                    );

                    return response()->json([
                        'message' => 'Oceniono okazję'
                    ], 200);
    
                } catch(Error $e) {
                    return response()->json([
                        'message' => 'Coś poszło nie tak'
                    ], 500);
                }
            }
        });
            
    }
}
