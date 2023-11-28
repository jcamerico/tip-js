<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('R_step', function (Blueprint $table) {
            $table->id();
            $table->integer('compte');
            $table->integer('profil');
            $table->integer('benevole');
            $table->integer('solidarite');
            $table->integer('communication');
            $table->integer('choosesport');
            $table->integer('sport1');
            $table->integer('sport2');
            $table->integer('host');
            $table->text('outreach');
            $table->bigInteger('outreachtarif');
            $table->text('outreachstate');
            $table->integer('paiement');
            $table->bigInteger('sport1tarif');
            $table->text('sport1state');
            $table->bigInteger('sport2tarif');
            $table->text('sport2state');
            $table->bigInteger('soiree');
            $table->bigInteger('soireetarif');
            $table->text('soireestate');
            $table->bigInteger('soireevip');
            $table->bigInteger('soireeviptarif');
            $table->text('soireevipstate');
            $table->bigInteger('pass');
            $table->text('passtarif');
            $table->text('passstate');
            $table->bigInteger('bar');
            $table->bigInteger('bartarif');
            $table->text('barstate');            
            $table->bigInteger('option1');
            $table->bigInteger('option1tarif');
            $table->text('option1state');            
            $table->bigInteger('option2');
            $table->bigInteger('option2tarif');
            $table->text('option2state');                        
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('R_step');
    }
};
