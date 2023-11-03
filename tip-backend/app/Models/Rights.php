<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Rights extends Model
{
    use HasFactory;

    protected $table = 'R_auth';
    protected $primaryKey = 'id_user';

}
