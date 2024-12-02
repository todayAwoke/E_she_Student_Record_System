<?php

namespace App\Http\Controllers;
use App\Models\Student;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    public function getTotalStudents(): JsonResponse
    {
        $total = Student::count(); // Counts the rows in 'students' table
        return response()->json(['total' => $total]);
    }

    public function getMaleStudentsCount(): JsonResponse
    {
        $maleCount = Student::where('gender', 'Male')->count();
        return response()->json(['total' => $maleCount]);
    }

    // Get count of female students
    public function getFemaleStudentsCount(): JsonResponse
    {
        $femaleCount = Student::where('gender', 'Female')->count();
        return response()->json(['total' => $femaleCount]);
    }

}
