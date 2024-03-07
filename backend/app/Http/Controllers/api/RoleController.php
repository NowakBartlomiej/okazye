<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RoleController extends Controller
{
    public function hasAdminRole() {
        return response()->json([
            'hasRole' => Auth::user()->hasRole('admin')
        ], 201);
    }

    public function hasModeratorRole() {
        return response()->json([
            'hasRole' => Auth::user()->hasRole(['admin', 'moderator'])
        ], 201);
    }

}
