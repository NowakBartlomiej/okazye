<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreOccasionRequest;
use App\Http\Resources\OccasionResource;
use App\Models\Occasion;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class OccasionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return OccasionResource::collection(Occasion::all());
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
