<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Profile extends Model
{
    use HasFactory;

    protected $table = 'R_profile';
    protected $primaryKey = 'id_user';

    public $incrementing = false;



    public static function create($id) {
        $profile = new Profile();
        $profile->id_user = $id;
        $profile->pronom = '';
        $profile->genre = '';
        $profile->tel = '';
        $profile->handicap = '';
        $profile->handicap_prec = '';
        $profile->benevole = '';
        $profile->benevoleS = '';
        $profile->host = '';
        $profile->outreach = '';
        $profile->ORmontant = '';
        $profile->soiree = '';
        $profile->soireevip = '';
        $profile->passtransport = '';
        $profile->bar = '';
        $profile->option1 = '';
        $profile->option2 = '';
        $profile->partacc = '';
        $profile->acctarif = 0;
        $profile->newsletters = '';
        $profile->photovideo = '';
        $profile->maj = '';
        $profile->save();
    }
}
