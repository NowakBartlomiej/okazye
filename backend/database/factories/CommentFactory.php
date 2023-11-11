<?php

namespace Database\Factories;

use App\Models\Occasion;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Comment>
 */
class CommentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'occasion_id' => Occasion::select('id')->orderByRaw('RAND()')->first()->id,
            'user_id' => User::select('id')->orderByRaw('RAND()')->first()->id,
            'content' => $this->faker->text(15),
            'parent_id' => null,
            'reaction_id' => null,
            'created_at' => Carbon::now(),
            'updated_at' => null
        ];
    }
}
