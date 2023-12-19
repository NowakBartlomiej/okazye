<?php

namespace Database\Seeders;

use App\Models\Badge;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BadgeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // occasions-created
        Badge::create([
            'name' => 'Początkujący',
            'type' => 'occasions-created',
            'criterion' => 1,
        ]);

        Badge::create([
            'name' => 'Mam coś dla was',
            'type' => 'occasions-created',
            'criterion' => 5,
        ]);

        Badge::create([
            'name' => 'Archeolog',
            'type' => 'occasions-created',
            'criterion' => 10,
        ]);

        Badge::create([
            'name' => 'Poszukiwacz',
            'type' => 'occasions-created',
            'criterion' => 20,
        ]);

        Badge::create([
            'name' => 'Myśliwy',
            'type' => 'occasions-created',
            'criterion' => 30,
        ]);

        Badge::create([
            'name' => 'Snajper okazji',
            'type' => 'occasions-created',
            'criterion' => 40,
        ]);

        Badge::create([
            'name' => 'Łowca okazji',
            'type' => 'occasions-created',
            'criterion' => 50,
        ]);

        // occasions-rated
        Badge::create([
            'name' => 'Juror',
            'type' => 'occasions-rated',
            'criterion' => 5,
        ]);

        Badge::create([
            'name' => 'Arbiter',
            'type' => 'occasions-rated',
            'criterion' => 20,
        ]);

        Badge::create([
            'name' => 'Sędzia',
            'type' => 'occasions-rated',
            'criterion' => 40,
        ]);

        Badge::create([
            'name' => 'Recenzent',
            'type' => 'occasions-rated',
            'criterion' => 80,
        ]);

        Badge::create([
            'name' => 'Jury',
            'type' => 'occasions-rated',
            'criterion' => 100,
        ]);

        Badge::create([
            'name' => 'Krytyk',
            'type' => 'occasions-rated',
            'criterion' => 120,
        ]);

        Badge::create([
            'name' => 'Znawca',
            'type' => 'occasions-rated',
            'criterion' => 150,
        ]);

        //comments-created
        Badge::create([
            'name' => 'Pierwsze słowo',
            'type' => 'comments-created',
            'criterion' => 1,
        ]);

        Badge::create([
            'name' => 'Dyskutant',
            'type' => 'comments-created',
            'criterion' => 10,
        ]);

        Badge::create([
            'name' => 'Plotkarz',
            'type' => 'comments-created',
            'criterion' => 25,
        ]);

        Badge::create([
            'name' => 'Komentator',
            'type' => 'comments-created',
            'criterion' => 50,
        ]);

        Badge::create([
            'name' => 'Mówca',
            'type' => 'comments-created',
            'criterion' => 75,
        ]);

        Badge::create([
            'name' => 'Gawędziarz',
            'type' => 'comments-created',
            'criterion' => 100,
        ]);

        Badge::create([
            'name' => 'Gaduła',
            'type' => 'comments-created',
            'criterion' => 150,
        ]);

        //users-followers
        Badge::create([
            'name' => 'Mało znany',
            'type' => 'users-followers',
            'criterion' => 5,
        ]);

        Badge::create([
            'name' => 'Rozpoznawalny',
            'type' => 'users-followers',
            'criterion' => 10,
        ]);

        Badge::create([
            'name' => 'Wschodząca gwiazda',
            'type' => 'users-followers',
            'criterion' => 25,
        ]);

        Badge::create([
            'name' => 'Popularny',
            'type' => 'users-followers',
            'criterion' => 50,
        ]);

        Badge::create([
            'name' => 'Znany i lubiany',
            'type' => 'users-followers',
            'criterion' => 60,
        ]);

        Badge::create([
            'name' => 'Celebryta',
            'type' => 'users-followers',
            'criterion' => 100,
        ]);

        Badge::create([
            'name' => 'Gwiazda',
            'type' => 'users-followers',
            'criterion' => 200,
        ]);

        //user-occasion-rate
        Badge::create([
            'name' => 'Drewniana okazja',
            'type' => 'user-occasion-rate',
            'criterion' => 10,
        ]);

        Badge::create([
            'name' => 'Kamienna okazja',
            'type' => 'user-occasion-rate',
            'criterion' => 50,
        ]);

        Badge::create([
            'name' => 'Brązowa okazja',
            'type' => 'user-occasion-rate',
            'criterion' => 100,
        ]);

        Badge::create([
            'name' => 'Srebrna okazja',
            'type' => 'user-occasion-rate',
            'criterion' => 250,
        ]);

        Badge::create([
            'name' => 'Złota okazja',
            'type' => 'user-occasion-rate',
            'criterion' => 500,
        ]);

        Badge::create([
            'name' => 'Platynowa okazja',
            'type' => 'user-occasion-rate',
            'criterion' => 1000,
        ]);
        
        Badge::create([
            'name' => 'Diamentowa okazja',
            'type' => 'user-occasion-rate',
            'criterion' => 2000,
        ]);
    }
}
