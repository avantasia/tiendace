<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {

            ;
            $table->string('name', 45);
            $table->string('username', 45);
            $table->string('password', 100);
            $table->string('email', 45);
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrent();
            $table->bigIncrements('id');

        });
    }

    public function down()
    {
        Schema::dropIfExists('user');
    }
}
