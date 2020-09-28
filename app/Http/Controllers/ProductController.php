<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Create a new product
     *
     * @param Request $request
     * @return JsonResponse
     */

    public function createProduct(Request $request)
    {

        $product = Product::create($request->all());

        return response()->json($product)->setCallback($request->input('callback'));;
    }

    /**
     * Change any field of an existing product
     *
     * @param Request $request
     * @param $id
     * @return JsonResponse
     */

    public function updateProduct(Request $request, $id)
    {
        $product = Product::find($id);
        $product->name = $request->input('name');
        $product->description = $request->input('description');
        $product->price = $request->input('price');
        $product->image = $request->input('image');

        $product->save();

        return response()->json($product)->setCallback($request->input('callback'));;
    }

    /**
     * Delete the product given its id
     *
     * @param Request $request
     * @param $id
     * @return JsonResponse
     */

    public function deleteProduct(Request $request, $id)
    {
        $product = Product::find($id);
        $product->delete();

        return response()->json('Removed successfully.')->setCallback($request->input('callback'));;
    }

    /**
     * Return the complete list of products
     *
     * @param Request $request
     * @return JsonResponse
     */

    public function index(Request $request)
    {

        $products = Product::all();

        return response()->json($products)->setCallback($request->input('callback'));

    }

    /**
     * Return a fixed number of products given the number
     *
     * @param Request $request
     * @param $number
     * @return JsonResponse
     */

    public function indexNumber(Request $request, $number)
    {

        $products = Product::all()->first($number);

        return response()->json($products)->setCallback($request->input('callback'));

    }

    /**
     * Return the related categories given a product id
     *
     * @param Request $request
     * @param $id
     * @return JsonResponse
     */

    public function categories(Request $request, $id)
    {

        $categories = Product::findOrFail($id)->categories;

        return response()->json($categories)->setCallback($request->input('callback'));

    }


    //
}
