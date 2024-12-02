<?php

namespace App\Http\Controllers;
use App\Models\University;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
class UniversityController extends Controller
{
    public function getTotalUniversities(): JsonResponse
    {
        $total = University::count();
        return response()->json(['total'=> $total]);
    }
}
