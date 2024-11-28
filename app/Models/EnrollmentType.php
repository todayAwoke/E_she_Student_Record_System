<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EnrollmentType extends Model
{
    use HasFactory;

    protected $fillable = [
        'type',
    ];

    public function students()
    {
        return $this->hasMany(Student::class);
    }
}