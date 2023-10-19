<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Recipes>
 */
class RecipesFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'number' => fake()->randomNumber(10, false),
            'ingredients' => fake()->sentence(),
            'time' => fake()->randomNumber(10, false),
            'quantity' => fake()->randomNumber(10, false),
            'process' => fake()->word()
        ];
    }
}
