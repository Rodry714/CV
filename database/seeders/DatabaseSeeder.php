<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();
        // $this->call();
        \App\Models\Plan::factory()->create([
            'name' => 'Single Orange'
        ]);

        \App\Models\Plan::factory()->create([
            'name' => 'Doctor Orange'
        ]);

        \App\Models\User::factory()->create([
            'firstname' => 'Single Orange',
            'email' => 'single@orange.com',
            'plan_id' => '1',
            'nickname' => 'half-orangi',
        ]);

        \App\Models\User::factory()->create([
            'firstname' => 'Doctor Orange',
            'email' => 'doctor@orange.com',
            'plan_id' => '2',
            'nickname' => 'doc-citric',
        ]);
    }
}
