<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Profile extends Model
{
    use HasFactory;

    protected $table = 'R_profile';
    protected $primaryKey = 'id_user';


    public static function create($id) {
        $profile = new Profile();
        $profile->id_user = $id;
        $profile->save();
    }
}
