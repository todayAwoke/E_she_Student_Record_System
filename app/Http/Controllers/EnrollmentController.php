<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class EnrollmentController extends Controller
{
        public function getEnrollmentData()
    {
        $enrollments = DB::table('students')
            ->join('enrollment', 'students.enrollment_id', '=', 'enrollment.id')
            ->select(
                'enrollment.enrollment_type', // Get the enrollment type
                DB::raw('SUM(CASE WHEN students.gender = "Male" THEN 1 ELSE 0 END) as Male'),
                DB::raw('SUM(CASE WHEN students.gender = "Female" THEN 1 ELSE 0 END) as Female')
            )
            ->groupBy('enrollment.enrollment_type')
            ->get();

        return response()->json($enrollments);
    }


        public function getGenderDistribution()
        {
            $genderCounts = DB::table('students')
                ->select(
                    DB::raw("CASE
                                WHEN gender IS NULL OR gender = '' THEN 'No Data'
                                ELSE gender
                            END as gender"), 
                    DB::raw('COUNT(*) as count'))
                ->groupBy('gender')
                ->get();

            return response()->json($genderCounts);
        }


}
