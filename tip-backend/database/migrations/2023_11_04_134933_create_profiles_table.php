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
        Schema::create('R_profile', function (Blueprint $table) {
            $table->bigInteger('id_user');
            $table->string('pronom');
            $table->string('genre');
            $table->string('tel');
            $table->string('handicap');
            $table->text('handicap_prec');
            $table->string('benevole');
            $table->string('benevoleS');
            $table->string('host');
            $table->string('outreach');
            $table->string('ORmontant');
            $table->string('soiree');
            $table->string('soireevip');
            $table->string('passtransport');
            $table->string('bar');
            $table->string('option1');
            $table->string('option2');
            $table->string('partacc');
            $table->bigInteger('acctarif');
            $table->string('newsletters');
            $table->string('photovideo');
            $table->string('maj');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('R_profile');
    }
};
