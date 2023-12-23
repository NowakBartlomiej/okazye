<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\OccasionResource;
use App\Http\Resources\UserResource;
use App\Models\Category;
use App\Models\Occasion;
use App\Models\User;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function search($searchInput) {
        $occasions = Occasion::where('title', 'like', '%' . $searchInput . '%')->get();
        $categories = Category::where('name', 'like', '%' . $searchInput . '%')->get();
        $users = User::where('name', 'like', '%' . $searchInput . '%')->get();

        return [
            'occasions' => OccasionResource::collection($occasions),
            'categories' => CategoryResource::collection($categories),
            'users' => UserResource::collection($users),
        ];
    }
}
