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
        Schema::create('R_auth', function (Blueprint $table) {
            $table->id('id_user');
            $table->string('nom');
            $table->string('prenom');
            $table->string('email');
            $table->string('ddn');
            $table->string('pays');
            $table->string('nation');
            $table->string('password');
            $table->integer('validation');
            $table->string('datecrea');
            $table->string('lastco');
            $table->string('lastip');
            $table->integer('sendmail');
            $table->string('clef');
            $table->string('session');
            $table->integer('etape');
            $table->string('tokenresetpwd');
            $table->string('dateresetpwd');
            $table->integer('lockaccount');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('R_auth');
    }
};
