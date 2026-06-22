<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('hospitals', function (Blueprint $table) {
            $table->string("hospitalName");
            $table->string("hospitalAddress"); 
            $table->string("availableERBed");
            $table->integer("availableICUBed");
            $table->integer("availableAmbulance");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('_hospitals', function (Blueprint $table) {
            //
        });
    }
};
