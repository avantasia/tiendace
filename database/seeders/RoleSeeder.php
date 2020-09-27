<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('roles')->insert([
            'name' => 'admin',
            'description' => 'Administrator accounts with full access'
        ]);

        DB::table('roles')->insert([
            'name' => 'user',
            'description' => 'Normal user account'
        ]);

        DB::table('roles')->insert([
            'name' => 'seller',
            'description' => 'Seller account'
        ]);


    }
}
