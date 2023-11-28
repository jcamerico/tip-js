<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class RegistrationStep extends Model
{
    use HasFactory;

    protected $table = 'R_step';
    public $incrementing = false;

    public static function create($id) {
        $step = new RegistrationStep();
        $step->id = $id;
        $step->compte = 0;
        $step->profil = 0;
        $step->benevole = 0;
        $step->solidarite = 0;
        $step->communication = 0;
        $step->choosesport = 0;
        $step->sport1 = 0;
        $step->sport2 = 0;
        $step->host = 0;
        $step->outreach = '';
        $step->outreachtarif = 0;
        $step->outreachstate = '';
        $step->paiement = 0;
        $step->sport1tarif = 0;
        $step->sport1state = '';
        $step->sport2tarif = 0;
        $step->sport2state = '';
        $step->soiree = 0;
        $step->soireetarif = 0;
        $step->soireestate = '';
        $step->soireevip = 0;
        $step->soireeviptarif = 0;
        $step->soireevipstate = '';
        $step->pass = 0;
        $step->passtarif = '';
        $step->passstate = '';
        $step->bar = 0;
        $step->bartarif = 0;
        $step->barstate = '';
        $step->option1 = 0;
        $step->option1tarif = 0;
        $step->option1state = '';
        $step->option2 = 0;
        $step->option2tarif = 0;
        $step->option2state = '';
        $step->save();
    }
}
