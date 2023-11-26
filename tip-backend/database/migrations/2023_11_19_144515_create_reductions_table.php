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
        Schema::create('reductions', function (Blueprint $table) {
            $table->id('id_code');
            $table->text('codereduc');
            $table->text('motif');
            $table->bigInteger('attrib');
            $table->integer('etat');
            $table->bigInteger('createur');
            $table->text('datecrea');
            $table->text('montant');
            $table->text('dateusage');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reductions');
    }
};
