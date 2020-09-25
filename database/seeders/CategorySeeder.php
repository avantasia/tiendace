<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->insert([
            'name' => 'especias',
            'coverimage' => 'TODO'
        ]);

        DB::table('categories')->insert([
            'name' => 'frescos',
            'coverimage' => 'TODO'
        ]);

        DB::table('categories')->insert([
            'name' => 'conservas',
            'coverimage' => 'TODO'
        ]);
        DB::table('categories')->insert([
            'name' => 'pastas',
            'coverimage' => 'TODO'
        ]);
        DB::table('categories')->insert([
            'name' => 'temporada',
            'coverimage' => 'TODO'
        ]);


    }
}
