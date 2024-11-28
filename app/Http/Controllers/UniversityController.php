<?php

namespace App\Http\Controllers;
use App\Models\University;
use Illuminate\Http\Request;
use Inertia\Inertia;
class UniversityController extends Controller
{
    public function loadUniversity(){
        $university =University::all();
        return Inertia::render('University',['university'=>$university]);
    }
}
