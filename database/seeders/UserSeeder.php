<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /**
         * Fill the users table with a sample user for every role
         * TODO Seller account
         *
         */
        DB::table('users')->insert([
            'name' => 'admin',
            'email' => 'admin@gmail.com',
            'password' => Hash::make('abc123'),
            'username' => 'admin',

        ]);

        DB::table('users')->insert([
            'name' => 'visitante',
            'email' => 'visitante@gmail.com',
            'password' => Hash::make('abc123'),
            'username' => 'visitante',
        ]);

    }
}
