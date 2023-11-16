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
        Schema::create('R_droits', function (Blueprint $table) {
            $table->bigInteger('id_user');
            $table->integer('superadmin');
            $table->integer('admin');
            $table->integer('finance');
            $table->integer('benevoles');
            $table->integer('outreach');
            $table->integer('host');
            $table->integer('soiree');
            $table->integer('pass');
            $table->integer('bar');
            $table->integer('sports');
            $table->integer('stats');
            $table->integer('s01');
            $table->integer('s02');
            $table->integer('s03');
            $table->integer('s04');
            $table->integer('s05');
            $table->integer('s06');
            $table->integer('s07');
            $table->integer('s08');
            $table->integer('s09');
            $table->integer('s10');
            $table->integer('s11');
            $table->integer('s12');
            $table->integer('s13');
            $table->integer('s15');
            $table->integer('s18');
            $table->integer('s19');
            $table->integer('s20');
            $table->integer('s21');
            $table->integer('s22');
            $table->integer('s23');
            $table->integer('s24');
            $table->integer('s25');
            $table->integer('s26');
            $table->integer('s27');
            $table->integer('s28');
            $table->integer('s29');
            $table->integer('s30');
            $table->integer('s31');
            $table->integer('s32');
            $table->integer('s33');
            $table->integer('s34');
            $table->integer('s35');
            $table->integer('s36');
            $table->integer('s37');
            $table->integer('s38');
            $table->integer('s39');
            $table->integer('s40');
            $table->text('maj');
            $table->text('kimaj');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('R_droits');
    }
};
