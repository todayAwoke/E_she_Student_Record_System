<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;

    protected $fillable = [
        'university_id',
        'enrollment_id',
        'first_name',
        'father_name',
        'grand_father_name',
        'department',
        'year',
        'semester',
        'institutional_email',
        'sso_email',
        'preferred_email',
        'gender',
        'personal_email',
        'phone_number',
        'is_blind',
        'is_deaf',
        'program',
    ];

    public function university()
    {
        return $this->belongsTo(University::class);
    }

    public function enrollmentType()
    {
        return $this->belongsTo(EnrollmentType::class);
    }
}