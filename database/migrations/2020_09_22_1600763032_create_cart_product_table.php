<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCartProductTable extends Migration
{
    public function up()
    {
        Schema::create('cart_product', function (Blueprint $table) {

            ;
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrent();
            $table->bigInteger('product_id',)->unsigned();
            $table->bigInteger('cart_id',)->unsigned();
            $table->bigIncrements('id');
            $table->foreign('product_id')->references('id')->on('products');
            $table->foreign('cart_id')->references('id')->on('carts');
        });
    }

    public function down()
    {
        Schema::dropIfExists('carts_products');
    }
}
