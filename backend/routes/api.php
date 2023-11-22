<?php

use App\Http\Controllers\api\CategoryController;
use App\Http\Controllers\api\CommentController;
use App\Http\Controllers\api\FollowerController;
use App\Http\Controllers\api\OccasionController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('/occasions', OccasionController::class);
Route::get('/latest-occasions', [OccasionController::class, 'latest']);
Route::get('/most-popular-occasions', [OccasionController::class, 'mostPopular']);
Route::get('/for-me', [OccasionController::class, 'forMe']);
Route::get('/followed-occasions', [OccasionController::class, 'followedOccasions']);
Route::get('/my-occasions', [OccasionController::class, 'myOccasions']);

Route::get('/occasions-by-category/{categoryId}', [OccasionController::class, 'occasionsByCategory']);

Route::apiResource('/categories', CategoryController::class);

Route::post('/follow-unfollow-user', [FollowerController::class, 'followUnfollow']);
Route::get('/followers', [FollowerController::class, 'index']);

Route::post('/follow-unfollow-category', [CategoryController::class, 'followUnfollowCategory']);
Route::get('/followed-categories', [CategoryController::class, 'followedCategories']);

Route::apiResource('/comments', CommentController::class);
