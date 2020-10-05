<?php
namespace Database\Seeders;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductsCategoriesSeeder extends Seeder
{
    public function run()
    {
        Product::query()->where('name','=','Pimienta Negra')->first()->categories()->attach(
            Category::query()->where('name','=','especias')->first()
        );
        Product::query()->where('name','=','Pimienta Blanca')->first()->categories()->attach(
            Category::query()->where('name','=','especias')->first()
        );
        Product::query()->where('name','=','Pimienta Rosa')->first()->categories()->attach(
            Category::query()->where('name','=','especias')->first()
        );
        Product::query()->where('name','=','Albahaca')->first()->categories()->attach(
            Category::query()->where('name','=','especias')->first()
        );
        Product::query()->where('name','=','Oregano')->first()->categories()->attach(
            Category::query()->where('name','=','especias')->first()
        );

        Product::query()->where('name','=','Cayena')->first()->categories()->attach(
            Category::query()->where('name','=','frescos')->first()
        );
        Product::query()->where('name','=','Chiles')->first()->categories()->attach(
            Category::query()->where('name','=','frescos')->first()
        );
        Product::query()->where('name','=','Jalapeño')->first()->categories()->attach(
            Category::query()->where('name','=','frescos')->first()
        );
        Product::query()->where('name','=','Habanero')->first()->categories()->attach(
            Category::query()->where('name','=','frescos')->first()
        );
        Product::query()->where('name','=','Pimiento fantasma')->first()->categories()->attach(
            Category::query()->where('name','=','frescos')->first()
        );

        Product::query()->where('name','=','Salsa Amarillin')->first()->categories()->attach(
            Category::query()->where('name','=','salsas')->first()
        );
        Product::query()->where('name','=','Chile con Ajo')->first()->categories()->attach(
            Category::query()->where('name','=','salsas')->first()
        );
        Product::query()->where('name','=','Miel con Mostaza')->first()->categories()->attach(
            Category::query()->where('name','=','salsas')->first()
        );
        Product::query()->where('name','=','Mostaza inglesa')->first()->categories()->attach(
            Category::query()->where('name','=','salsas')->first()
        );
        Product::query()->where('name','=','Salsa de trufa picante')->first()->categories()->attach(
            Category::query()->where('name','=','salsas')->first()
        );


    }

}
