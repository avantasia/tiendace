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

        // Especias
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

        //Frescos
        DB::table('products')->insert([
            'name' => 'Cayena',
            'description' => 'La pimienta de cayena es un tipo de Capsicum annuum. Normalmente es un chile moderadamente picante, utilizado para sazonar platos.',
            'image' => 'img/products/cayena.png',
            'price' => 2
        ]);

        DB::table('products')->insert([
            'name' => 'Chiles',
            'description' => 'El chile (del náhuatl: chīlli, Acerca de este sonido ˈt͡ʃiːlli (?·i)), ají (del taíno haxí) o guindilla en España, es una variedad de pimiento picante. Es el fruto (baya) de diversas especies de plantas del género Capsicum, de la familia de las solanáceas.',
            'image' => 'img/products/chiles.jpg',
            'price' => 2.3
        ]);
        DB::table('products')->insert([
            'name' => 'Jalapeño',
            'description' => 'El chile jalapeño —así llamado por su centro tradicional de producción, la ciudad mexicana de Xalapa, en Estado de Veracruz— o chile cuaresmeño es una de las verduras más picantes de Capsicum annuum más extensamente cultivadas y consumidas en América. ',
            'image' => 'img/products/jalapeño.jpg',
            'price' => 3.4
        ]);
        DB::table('products')->insert([
            'name' => 'Habanero',
            'description' => 'Capsicum chinense es una de las cinco especies domesticadas de chiles o ajíes.1​ Variedades importantes de Capsicum chinense incluyen el chile habanero, la más común, el ají panca y el ají limo. Las variedades de ají panca y ají limo se cultivan en Perú y México. ',
            'image' => 'img/products/habanero.jpg',
            'price' => 2.2
        ]);
        DB::table('products')->insert([
            'name' => 'Pimiento fantasma',
            'description' => 'El Naga Jolokia (también conocido como Bhut Jolokia, Bih Jolokia, Ghost Chili, Ghost Pepper, Naga Morich) es uno de los cinco cultivares de Capsicum frutescens que crecen en el estado de Assam (India) y otras regiones del noroeste del país. También se cultiva en Bangladés y Sri Lanka. ',
            'image' => 'img/products/fantasma.jpg',
            'price' => 3.2
        ]);

        //Salsas
        DB::table('products')->insert([
            'name' => 'Salsa Amarillin',
            'description' => 'Salsa picante basada en chile amarillo molido de primera calidad.',
            'image' => 'img/products/amarillin.jpg',
            'price' => 3
        ]);

        DB::table('products')->insert([
            'name' => 'Chile con Ajo',
            'description' => 'Se trata de una salsa de chile verde muy versátil con un toque especial a ajo. Se puede utilizar como salsa picante o también para cocinar, especialmente platos asiáticos.',
            'image' => 'img/products/chileajo.jpg',
            'price' => 2.3
        ]);
        DB::table('products')->insert([
            'name' => 'Miel con Mostaza',
            'description' => 'La mejor salsa de miel y mostaza, para ensaladas, pescados o carnes. Si te gusta la mostaza esta salsa al ensalza al fusionarla con la miel ',
            'image' => 'img/products/mielmostaza.jpg',
            'price' => 3.4
        ]);
        DB::table('products')->insert([
            'name' => 'Mostaza inglesa',
            'description' => ' La salsa de mostaza inglesa es una salsa deliciosa que se prepara con especias aromáticas y con mostaza blanca',
            'image' => 'img/products/mostazainglesa.jpg',
            'price' => 2.2
        ]);
        DB::table('products')->insert([
            'name' => 'Salsa de trufa picante',
            'description' => 'Bienvenido a la familia de los amantes de la trufa. La mezcla de trufa negra y chiles , con un toque de agave crea un gusto único',
            'image' => 'img/products/salsatrufa.jpg',
            'price' => 3.2
        ]);



    }
}
