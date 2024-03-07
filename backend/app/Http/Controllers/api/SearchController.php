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
    public function searchOccasions($searchInput) {
        $occasions = Occasion::where('title', 'like', '%' . $searchInput . '%')->paginate(5);

        return OccasionResource::collection($occasions);
    }

    public function searchCategories($searchInput) {
        $categories = Category::where('name', 'like', '%' . $searchInput . '%')->paginate(5);

        return CategoryResource::collection($categories);
    }

    public function searchUsers($searchInput) {
        $users = User::where('name', 'like', '%' . $searchInput . '%')->paginate(5);

        return UserResource::collection($users);
    }
    
}
