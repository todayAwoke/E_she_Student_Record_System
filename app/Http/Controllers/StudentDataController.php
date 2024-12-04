<?php

namespace App\Http\Controllers;
use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class StudentDataController extends Controller
{
    public function getStudentData(Request $request)
    {
        // Fetch the student data with joins to get university name from universities table
        $students = DB::table('students')
            ->join('universities', 'students.university_id', '=', 'universities.university_id') // Join with universities table
            ->select(
                'universities.university_name as university', // University name 
                DB::raw('COUNT(students.student_id) as total_students'),
                DB::raw('SUM(CASE WHEN students.gender = "Male" THEN 1 ELSE 0 END) as male'),
                DB::raw('SUM(CASE WHEN students.gender = "Female" THEN 1 ELSE 0 END) as female'),
                DB::raw('SUM(CASE WHEN students.year = 1 THEN 1 ELSE 0 END) as y1'),
                DB::raw('SUM(CASE WHEN students.year = 2 THEN 1 ELSE 0 END) as y2'),
                DB::raw('SUM(CASE WHEN students.year = 3 THEN 1 ELSE 0 END) as y3'),
                DB::raw('SUM(CASE WHEN students.year = 4 THEN 1 ELSE 0 END) as y4'),
                DB::raw('SUM(CASE WHEN students.year = 5 THEN 1 ELSE 0 END) as y5'),
                DB::raw('SUM(CASE WHEN students.year = 6 THEN 1 ELSE 0 END) as y6'),
                DB::raw('SUM(CASE WHEN students.semester = 1 THEN 1 ELSE 0 END) as semester1'),
                DB::raw('SUM(CASE WHEN students.semester = 2 THEN 1 ELSE 0 END) as semester2')
            )
            ->groupBy('students.university_id', 'universities.university_name')
            ->union(
                DB::table('students')
                    ->join('universities', 'students.university_id', '=', 'universities.university_id')
                    ->select(
                        DB::raw('"Total" as university'), // Label for the total row
                        DB::raw('COUNT(students.student_id) as total_students'),
                        DB::raw('SUM(CASE WHEN students.gender = "Male" THEN 1 ELSE 0 END) as male'),
                        DB::raw('SUM(CASE WHEN students.gender = "Female" THEN 1 ELSE 0 END) as female'),
                        DB::raw('SUM(CASE WHEN students.year = 1 THEN 1 ELSE 0 END) as y1'),
                        DB::raw('SUM(CASE WHEN students.year = 2 THEN 1 ELSE 0 END) as y2'),
                        DB::raw('SUM(CASE WHEN students.year = 3 THEN 1 ELSE 0 END) as y3'),
                        DB::raw('SUM(CASE WHEN students.year = 4 THEN 1 ELSE 0 END) as y4'),
                        DB::raw('SUM(CASE WHEN students.year = 5 THEN 1 ELSE 0 END) as y5'),
                        DB::raw('SUM(CASE WHEN students.year = 6 THEN 1 ELSE 0 END) as y6'),
                        DB::raw('SUM(CASE WHEN students.semester = 1 THEN 1 ELSE 0 END) as semester1'),
                        DB::raw('SUM(CASE WHEN students.semester = 2 THEN 1 ELSE 0 END) as semester2')
                    )
                    ->groupBy(DB::raw('1'))
                    )
            ->get();

        // Return the data as JSON
        return response()->json($students);
    }
}
