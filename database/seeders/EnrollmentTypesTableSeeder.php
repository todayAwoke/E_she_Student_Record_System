<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

class EnrollmentTypesTableSeeder extends Seeder
{
    public function run()
    {
        $path = database_path('data/enrollment_types.csv');
        $data = array_map('str_getcsv', file($path));
        foreach ($data as $index => $row) {
            if ($index === 0) continue; // Skip header
            DB::table('enrollment_types')->insert([
                'id' => $row[0],
                'type' => $row[1],
            ]);
        }
    }
}