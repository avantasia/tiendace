<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStockTable extends Migration
{
    public function up()
    {
        Schema::create('stock', function (Blueprint $table) {

            ;
            $table->bigInteger('productid',)->unsigned();
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrent();;
            $table->string('location', 45);
            $table->bigIncrements('id');
            $table->foreign('productid')->references('id')->on('products');
        });
    }

    public function down()
    {
        Schema::dropIfExists('stock');
    }
}
