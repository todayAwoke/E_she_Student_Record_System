<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

class UniversitiesTableSeeder extends Seeder
{
    public function run()
    {
        $path = database_path('data/universities.csv');
        $data = array_map('str_getcsv', file($path));
        foreach ($data as $index => $row) {
            if ($index === 0) continue; // Skip header
            DB::table('universities')->insert([
                'id' => $row[0],
                'UniversityName' => $row[1],
            ]);
        }
    }
}