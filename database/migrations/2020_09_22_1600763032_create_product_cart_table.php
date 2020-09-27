<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductCartTable extends Migration
{
    public function up()
    {
        Schema::create('products_cart', function (Blueprint $table) {

            ;
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrent();
            $table->bigInteger('productid',)->unsigned();
            $table->bigInteger('cartid',)->unsigned();
            $table->bigIncrements('id');
            $table->foreign('productid')->references('id')->on('products');
            $table->foreign('cartid')->references('id')->on('cart');
        });
    }

    public function down()
    {
        Schema::dropIfExists('product_cart');
    }
}
