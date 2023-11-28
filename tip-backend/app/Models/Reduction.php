<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Reduction extends Model
{
    use HasFactory;

    protected $table = 'R_codereduc';
    protected $primaryKey = 'id_code';

}
