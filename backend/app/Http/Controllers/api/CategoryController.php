<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreCategoryRequest;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\CategoryUserResource;
use App\Models\Category;
use App\Models\Follower;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class CategoryController extends Controller
{
    public function followedCategories() {
        return CategoryUserResource::collection(DB::table('category_user')->get());
    }
    
    public function followUnfollowCategory(Request $request) {
        $request->validate([
            'categoryId' => 'required'
        ]);

        $follower = DB::table('category_user')
                        ->where('category_id', $request->categoryId)
                        ->where('user_id', Auth::user()->id)
                        ->first();

        $user = User::find(Auth::user()->id);                

        $categoryName = Category::find($request->categoryId)->name;            

        if (!$follower) {
            if ($user->categories()->attach($request->categoryId)) {
                return response()->json([
                    'message' => 'Coś poszło nie tak'
                ], 500);
            } else {
                return response()->json([
                    'message' => 'Obserwujesz kategorię: ' . $categoryName
                ], 200);
            }
        } else {
            if($user->categories()->detach($request->categoryId)) {
                return response()->json([
                    'message' => 'Nie obserwujesz już kategorii: ' . $categoryName
                ], 200);
            } else {
                return response()->json([
                    'message' => 'Coś poszło nie tak'
                ], 500);
            }
        }
    }
    
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return CategoryResource::collection(Category::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCategoryRequest $storeCategoryRequest)
    {
        $data = $storeCategoryRequest->validated();

        

        try {
            $category = Category::create($data);

            return response()->json([
                'message' => "Dodano kategorię: " . $storeCategoryRequest->name 
            ],200);
        } catch(Exception $e) {
            return response()->json([
                'message' => "Coś poszło nie tak"
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Category $category)
    {  
       return new CategoryResource($category); 
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Category $category)
    {
        try {
            $category->name = $request->name;
            $category->save();

            if ($category->save()) {
                return response()->json([
                    'message' => "Kategorię edytowano pomyślnie"
                ], 201);
            } else {
                return response()->json([
                    'message' => "Nie udało się edytować kategorii"
                ], 500);
            }
        } catch(Exception $e) {
            return response()->json([
                'message' => "Coś poszło nie tak"
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category)
    {
        if ($category->delete()) {
            return response()->json([
                'message' => "Usunięto kategorię"
            ], 201);
        } else {
            return response()->json([
                'message' => "Coś poszło nie tak"
            ], 500);
        }
    }
}
