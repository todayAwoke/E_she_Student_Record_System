<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

class StudentsTableSeeder extends Seeder
{
    public function run()
    {
        $path = database_path('data/students.csv');
        $data = array_map('str_getcsv', file($path));
        foreach ($data as $index => $row) {
            if ($index === 0) continue; // Skip header
            DB::table('students')->insert([
                'id' => $row[0],
                'university_id' => $row[1],
                'enrollment_type_id' => $row[2],
                'first_name' => $row[3],
                'father_name' => $row[4],
                'grand_father_name' => $row[5],
                'department' => $row[6],
                'year' => $row[7],
                'semester' => $row[8],
                'institutional_email' => $row[9],
                'sso_email' => $row[10],
                'preferred_email' => $row[11],
                'gender' => $row[12],
                'personal_email' => $row[13],
                'phone_number' => $row[14],
                'is_blind' => $row[15],
                'is_deaf' => $row[16],
                'program' => $row[17],
            ]);
        }
    }
}