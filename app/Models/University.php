<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class University extends Model
{
    use HasFactory;

    protected $fillable = [
        'UniversityName',
    ];

    public function students()
    {
        return $this->hasMany(Student::class);
    }
}