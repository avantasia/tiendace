<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersRolesTable extends Migration
{
    public function up()
    {
        Schema::create('users_roles', function (Blueprint $table) {

		$table->bigInteger('userid',)->unsigned();
		$table->bigInteger('roleid',)->unsigned();
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrent();

            ;
            $table->bigIncrements('id');
            $table->foreign('userid')->references('id')->on('users');
            $table->foreign('roleid')->references('id')->on('roles');
        });
    }

    public function down()
    {
        Schema::dropIfExists('user_roles');
    }
}
