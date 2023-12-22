<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Role::create(['name' => 'user']);
        
        Role::create(['name' => 'admin']);
        $admin = User::firstOrCreate([
            'id' => 1,
            'name' => 'Admin',
            'email' => 'admin@localhost',
            'password' => Hash::make('12345678')
        ]);

        $admin->assignRole('admin');

        Role::create(['name' => 'moderator']);
        $moderator = User::firstOrCreate([
            'id' => 2,
            'name' => 'Moderator',
            'email' => 'moderator@localhost',
            'password' => Hash::make('12345678')
        ]);

        $moderator->assignRole('moderator');
    }
}
