<?php

namespace Database\Seeders;

use App\Models\Comment;
use App\Models\Occasion;
use App\Models\Stat;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class StatSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Stat::create([
            'occasion_count' => Occasion::where('deleted_at', null)->count(),
            'comment_count' => Comment::where('deleted_at', null)->count(),
            'users_count' => User::count(),
        ]);
    }
}
