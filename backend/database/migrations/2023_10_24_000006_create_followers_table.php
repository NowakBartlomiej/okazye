<?php

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
        Schema::create('followers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->references('id')->on('users')->constrained()->onUpdate('cascade')->cascadeOnDelete('cascade');
            $table->foreignId('follower_id')->references('id')->on('users')->constrained()->onUpdate('cascade')->cascadeOnDelete('cascade');
            $table->timestamps();
            // $table->id();
            // $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            // $table->foreignId('follower_id')->constrained('users')->cascadeOnDelete();
            
            // $table->id();
            // $table->foreignId('follower_id')->references('id')->on('users');
            // $table->foreignId('following_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('followers');
    }
};
