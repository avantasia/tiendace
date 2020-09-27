<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCartTable extends Migration
{
    public function up()
    {
        Schema::create('cart', function (Blueprint $table) {

            ;
            $table->bigInteger('userid',)->unsigned();
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrent();
            $table->bigIncrements('id');
            $table->foreign('userid')->references('id')->on('users');
        });
    }

    public function down()
    {
        Schema::dropIfExists('cart');
    }
}
