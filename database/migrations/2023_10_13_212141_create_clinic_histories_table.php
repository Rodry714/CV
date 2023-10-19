<?php

use App\Models\Clinic_history;
use App\Models\Illnesses;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('clinic_histories', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Clinic_history::class)->constrained();
            $table->foreignIdFor(Illnesses::class)->constrained();
            $table->string('details');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('clinic_histories');
    }
};
