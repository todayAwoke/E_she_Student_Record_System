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

}
