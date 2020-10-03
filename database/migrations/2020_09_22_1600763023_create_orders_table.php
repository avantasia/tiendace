<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {

            ;
            $table->bigInteger('user_id',)->unsigned();
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrent();
            $table->bigIncrements('id');
            $table->foreign('user_id')->references('id')->on('users');

            $table->timestamp('paid_date')->useCurrent();
            $table->dateTime('sent_date')->nullable();
            $table->dateTime('received_date')->nullable();
            $table->integer('payment_method')->default(1);
            $table->integer('shipping_method')->default(1);


        });
    }

    public function down()
    {
        Schema::dropIfExists('orders');
    }
}
