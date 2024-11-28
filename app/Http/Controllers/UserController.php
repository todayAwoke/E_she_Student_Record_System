<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
class UserController extends Controller
{
    public function loadUsers(){
        $users =User::all();
        return Inertia::render('users/Users',['users'=>$users]);
    }
}
