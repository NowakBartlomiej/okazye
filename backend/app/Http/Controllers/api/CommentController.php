<?php

namespace App\Http\Controllers\api;

use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Services\CommentRatingService;
use App\Http\Resources\CommentResource;
use App\Http\Requests\StoreCommentRequest;
use App\Http\Requests\UpdateCommentRequest;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return CommentResource::collection(Comment::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCommentRequest $storeCommentRequest)
    {
        $data = $storeCommentRequest->validated();
        $data['occasion_id'] = $storeCommentRequest->occasionId;
        $data['user_id'] = Auth::user()->id;
        $data['updated_at'] = null;


        if (Comment::create($data)) {
            return response()->json([
                'message' => "Dodano komentarz"
            ], 201);
        } else {
            return response()->json([
                'message' => "Nie udało się dodać komentarza"
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $occasionId)
    {
        return CommentResource::collection(Comment::where('occasion_id', $occasionId)->oldest()->paginate(5));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCommentRequest $request, Comment $comment)
    {
        $data = $request->validated();
        
        if ($comment->update($data)) {
            return response()->json([
                'message' => "Edytowano komentarz"
            ], 201);
        } else {
            return response()->json([
                'message' => "Nie udało się edytować komentarza"
            ], 500);
        }
        
        // $comment->update($data);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Comment $comment)
    {
        if ($comment->delete()) {
            response()->json([
                'message' => "Usunięto komentarz"
            ], 201);
        } else {
            return response()->json([
                'message' => "Coś poszło nie tak"
            ], 500);
        }
    }
}
