<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        /**
         * Table seeding
         * Call all individual seeders for each table
         *
         */
        //Table seeding
        $this->call([
                UserSeeder::class,
                RoleSeeder::class,
                RoleUserSeeder::class,
                ProductSeeder::class,
                CategorySeeder::class,
                ProductsCategoriesSeeder::class
            ]
        );

        /**
         * Many to many seeding
         * After table seeding attach many-to-many relations here
         *
         *

         Products and categories
        $categories = Category::all();
        Product::all()->each(function ($product) use ($categories) {
            $product->categories()->attach(
                $categories->random(rand(1, 5))->pluck('id')->toArray()
            );
        });
         */

    }
}
