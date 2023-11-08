<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreOccasionRequest;
use App\Http\Resources\OccasionResource;
use App\Models\Category;
use App\Models\Occasion;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class OccasionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return OccasionResource::collection(Occasion::paginate(5));
    }

    public function latest() {
        return OccasionResource::collection(Occasion::latest()->paginate(5));
    }

    public function mostPopular() {
        return OccasionResource::collection(Occasion::orderBy('rating', 'desc')->paginate(5));
    }

    public function occasionsByCategory($categoryId) {
        return OccasionResource::collection(Occasion::where('category_id', $categoryId)->orderBy('rating', 'desc')->paginate(5));
    }

    public function forMe() {
        $categories = DB::table('category_user')->where('user_id', Auth::user()->id)->pluck('category_id')->toArray();
        $occasion = Occasion::whereIn('category_id', $categories)->latest()->paginate(5);

        return OccasionResource::collection($occasion);
    }

    public function followedOccasions() {
        $users = DB::table("followers")->where('follower_id', 11)->pluck('user_id')->toArray();
        $occasion = Occasion::whereIn('user_id', $users)->latest()->paginate(5);

        return OccasionResource::collection($occasion);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $occasion = new Occasion();

        $occasion->title = $request->input('title');
        $occasion->description = $request->input('description');
        $occasion->new_price = $request->input('newPrice');
        $occasion->old_price = $request->input('oldPrice');
        $occasion->url = $request->input('url');
        $occasion->category_id = $request->input('categoryId');
        $occasion->user_id = Auth::user()->id;

        $occasion->save();

        return response(new OccasionResource($occasion), 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Occasion $occasion)
    {
        return new OccasionResource($occasion);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Occasion $occasion)
    {
        $occasion->title = $request->input('title');
        $occasion->title = $request->input('title');
        $occasion->description = $request->input('description');
        $occasion->new_price = $request->input('newPrice');
        $occasion->old_price = $request->input('oldPrice');
        $occasion->url = $request->input('url');
        $occasion->category_id = $request->input('categoryId');
        $occasion->user_id = Auth::user()->id;

        $occasion->save();

        return new OccasionResource($occasion);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Occasion $occasion)
    {
        $occasion->delete();

        return response("", 204);
    }
}
