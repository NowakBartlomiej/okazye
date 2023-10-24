<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Occasion>
 */
class OccasionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => $this->faker->title(10),
            'description' => $this->faker->text(50),
            'new_price' => $this->faker->numberBetween(1, 100),
            'old_price'	=> $this->faker->numberBetween(101, 120),
            'url' => "https://www.google.com/",
            'rating' => $this->faker->numberBetween(0, 12),
            'duration_date' => $this->faker->dateTimeBetween('now', '+1 month'),
            'status' => true,
            'category_id' => Category::select('id')->orderByRaw('RAND()')->first()->id,
            'comment_id' => null,	
            'user_id' => User::select('id')->orderByRaw('RAND()')->first()->id,
            'created_at' => Carbon::now(),
            'updated_at' => null
        ];
    }
}
