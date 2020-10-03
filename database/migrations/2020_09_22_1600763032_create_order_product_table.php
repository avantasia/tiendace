<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrderProductTable extends Migration
{
    public function up()
    {
        Schema::create('order_product', function (Blueprint $table) {

            ;
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrent();
            $table->bigInteger('product_id',)->unsigned();
            $table->bigInteger('order_id',)->unsigned();
            $table->bigIncrements('id');
            $table->foreign('product_id')->references('id')->on('products');
            $table->foreign('order_id')->references('id')->on('orders');
        });
    }

    public function down()
    {
        Schema::dropIfExists('order_product');
    }
}
