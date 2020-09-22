<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsCategoriesTable extends Migration
{
    public function up()
    {
        Schema::create('products_categories', function (Blueprint $table) {

		;
		$table->bigInteger('productid',)->unsigned();
		$table->bigInteger('categoryid',)->unsigned();
            $table->bigIncrements('id');
            $table->foreign('productid')->references('id')->on('products');
            $table->foreign('categoryid')->references('id')->on('categories');
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrent();
        });
    }

    public function down()
    {
        Schema::dropIfExists('product_categories');
    }
}
