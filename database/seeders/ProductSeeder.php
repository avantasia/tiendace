<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /**
         * This block generates random items, use for stress testing
         *
         */
        /*
        Product::factory()
            ->times(100)
            ->create();
        */
        DB::table('products')->insert([
            'name' => 'Pimienta Negra',
            'description' => 'Piper nigrum es una especie de la familia de las piperáceas, cultivada por su fruto, que se emplea seco como especia. El fruto es una drupa (aproximadamente 5 mm) que se puede usar entera o en polvo obteniendo variedades como la negra, blanca o verde, con la única diferencia del grado de maduración del grano.',
            'image' => 'img/products/pimientanegra.jpg',
            'price' => 4
        ]);

        DB::table('products')->insert([
            'name' => 'Pimienta Blanca',
            'description' => 'A diferencia de la pimienta negra, las bayas se recogen maduras, se secan y se pelan. Se la somete a un proceso de maceración con agua, a partir del cual pierde la piel y queda el grano blanco que conocemos. El resultado es una pimienta más picante que la negra pero con aromas menos intensos..',
            'image' => 'img/products/pimientablanca.jpg',
            'price' => 4.5
        ]);
        DB::table('products')->insert([
            'name' => 'Pimienta Rosa',
            'description' => 'Las bayas se recogen muy maduras, es bastante más suave que la negra y con un sabor que recuerda al del pimiento con algunos toques cítricos; se consigue en diferentes tonalidades pero la más llamativa es la de color rojo.',
            'image' => 'img/products/pimientarosa.jpg',
            'price' => 5.5
        ]);
        DB::table('products')->insert([
            'name' => 'Albahaca',
            'description' => 'Ocimum basilicum llamada popularmente albahaca o alhábega, es una hierba aromática anual de la familia de las lamiáceas nativa de las regiones tropicales de África central y el sudeste asiático, se cultiva desde hace milenios.',
            'image' => 'img/products/albahaca.jpg',
            'price' => 2.2
        ]);
        DB::table('products')->insert([
            'name' => 'Oregano',
            'description' => 'Origanum vulgare, comúnmente conocida como orégano, es una especie de la familia Lamiaceae (antes llamada Labiaceae), nativa del oeste o suroeste de Eurasia y la región mediterránea.',
            'image' => 'img/products/oregano.jpg',
            'price' => 3.2
        ]);


    }
}
