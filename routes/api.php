<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\UniversityController;
use App\Http\Controllers\EnrollmentController;
use App\Models\University;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/students', [StudentController::class, 'index']);

Route::get('/students/count', [StudentController::class, 'getTotalStudents']);
Route::get('/university/count', [UniversityController::class, 'getTotalUniversities']);
Route::get('/students/count/male', [StudentController::class, 'getMaleStudentsCount']);
Route::get('/students/count/female', [StudentController::class, 'getFemaleStudentsCount']);
Route::get('/enrollments', [EnrollmentController::class, 'getEnrollmentData']);