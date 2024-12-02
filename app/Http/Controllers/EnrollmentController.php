<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class EnrollmentController extends Controller
{
    public function getEnrollmentData()
    {
        // Query to group by enrollment_type and gender, counting students in each group
        $enrollments = DB::table('students')
            ->select('enrollment_type', 'gender', DB::raw('count(*) as count'))
            ->groupBy('enrollment_type', 'gender')
            ->get();

        // Transforming data into a suitable format for the chart
        $formattedData = [];
        foreach ($enrollments as $enrollment) {
            $type = $enrollment->enrollment_type;
            if (!isset($formattedData[$type])) {
                $formattedData[$type] = ['name' => $type, 'Male' => 0, 'Female' => 0];
            }
            $formattedData[$type][$enrollment->gender] = $enrollment->count;
        }

        // Reset array keys for a clean array output
        $formattedData = array_values($formattedData);

        return response()->json($formattedData);
    }
}
