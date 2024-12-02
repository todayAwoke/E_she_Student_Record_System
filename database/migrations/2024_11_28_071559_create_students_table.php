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
        Schema::create('students', function (Blueprint $table) {
            $table->id();
            $table->foreignId('university_id')->constrained()->onDelete('cascade'); // Foreign key for university
            $table->foreignId('enrollment_id')->constrained()->onDelete('cascade'); // Foreign key for enrollment type
            $table->string('first_name');
            $table->string('father_name');
            $table->string('grand_father_name');
            $table->string('department');
            $table->integer('year');
            $table->integer('semester');
            $table->string('institutional_email')->unique();
            $table->string('sso_email')->unique();
            $table->string('preferred_email')->unique();
            $table->string('gender');
            $table->string('personal_email')->nullable(); // Optional
            $table->string('phone_number')->nullable(); // Optional
            $table->boolean('is_blind')->default(false);
            $table->boolean('is_deaf')->default(false);
            $table->string('program');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('students');
    }
};