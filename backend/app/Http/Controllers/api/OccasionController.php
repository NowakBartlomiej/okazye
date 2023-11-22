<?php

namespace App\Http\Controllers\api;

use Exception;
use App\Models\Category;
use App\Models\Occasion;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\OccasionResource;
use App\Http\Requests\StoreOccasionRequest;
use App\Http\Requests\UpdateOccasionRequest;
use Illuminate\Support\Facades\Storage;

class OccasionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return OccasionResource::collection(Occasion::paginate(5));
    }

    public function myOccasions() {
        return OccasionResource::collection(Occasion::with('user', 'category')->where('user_id', Auth::user()->id)->latest()->paginate(5));
    }

    public function latest()
    {
        return OccasionResource::collection(Occasion::with('user', 'category')->latest()->paginate(5));
    }

    public function mostPopular()
    {
        return OccasionResource::collection(Occasion::with('user', 'category')->orderBy('rating', 'desc')->paginate(5));
    }

    public function occasionsByCategory($categoryId)
    {
        return OccasionResource::collection(Occasion::with('user', 'category')->where('category_id', $categoryId)->orderBy('rating', 'desc')->paginate(5));
    }

    public function forMe()
    {
        $categories = DB::table('category_user')->where('user_id', Auth::user()->id)->pluck('category_id')->toArray();
        $occasion = Occasion::whereIn('category_id', $categories)->latest()->paginate(5);

        return OccasionResource::collection($occasion);
    }

    public function followedOccasions()
    {
        $users = DB::table("followers")->where('follower_id', 11)->pluck('user_id')->toArray();
        $occasion = Occasion::whereIn('user_id', $users)->latest()->paginate(5);

        return OccasionResource::collection($occasion);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreOccasionRequest $request)
    {
        try {
            if ($request->hasFile('image')) {
                $imageName = Str::random(32) . "." . $request->image->getClientOriginalExtension();
                Storage::disk('public')->put($imageName, file_get_contents($request->image));
            }

            // dd($request);
            $occasion = Occasion::create([
                'title' => $request->title,
                'description' => $request->description,
                'image' => $request->hasFile('image') ? $imageName : null,
                'new_price' => $request->newPrice,
                'old_price' => $request->oldPrice,
                'url' => $request->url,
                'category_id' => $request->categoryId,
                'user_id' => Auth::user()->id
            ]);

            if ($occasion) {
                return response()->json([
                    'message' => "Okazję dodano pomyślnie"
                ], 201);
            } else {
                return response()->json([
                    'message' => "Nie udało się dodać okazji"
                ], 500);
            }
        } catch (Exception $e) {
            return response()->json([
                'message' => "Coś poszło nie tak"
            ], 500);
        }
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
    public function update(UpdateOccasionRequest $request, Occasion $occasion)
    {
        try {
            $storage = Storage::disk('public');
            if ($request->hasFile('image')) {
                

                // Delete old image
                if ($occasion->image != null) {
                    if ($storage->exists($occasion->image)) {
                        $storage->delete($occasion->image);
                    }
                }
                
                // New image
                $imageName = Str::random(32) . "." . $request->image->getClientOriginalExtension();

                $occasion->image = $imageName;
                
                Storage::disk('public')->put($imageName, file_get_contents($request->image));
            }

            if($request->image == null) {
                if ($occasion->image != null) {
                    if($storage->exists($occasion->image)) {
                        $storage->delete($occasion->image);
                    }
                }

                $occasion->image = null;
            }

            $occasion->title = $request->input('title');
            $occasion->description = $request->input('description');
            $occasion->new_price = $request->input('newPrice');
            $occasion->old_price = $request->input('oldPrice');
            $occasion->url = $request->input('url');
            $occasion->category_id = $request->input('categoryId');
            
            if ($occasion->save()) {
                return response()->json([
                    'message' => "Okazję edytowano pomyślnie"
                ], 201);
            } else {
                return response()->json([
                    'message' => "Nie udało się edytować okazji"
                ], 500);
            }


        } catch (Exception $e) {
            return response()->json([
                'message' => "Coś poszło nie tak"
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Occasion $occasion)
    {
        // It is for force delte   
        // if ($occasion->image != null) {
        //     $storage = Storage::disk('public');
        //     if($storage->exists($occasion->image)) {
        //         $storage->delete($occasion->image);
        //     }
        // }
        if (Auth::user()->id == $occasion->user_id) {
            if ($occasion->delete()) {
                response()->json([
                    'message' => "Usunięto okazję"
                ], 201);
            } else {
                return response()->json([
                    'message' => "Coś poszło nie tak"
                ], 500);
            }
        } else {
            return response()->json([
                'message' => "Nie można edytować nieswojej okazji"
            ], 500);
        }
    }
}
