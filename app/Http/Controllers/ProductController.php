<?php

namespace App\Http\Controllers;

use App\Models\Product;
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

    public function createProduct(Request $request){

        $product = Product::create($request->all());

        return response()->json($product)->setCallback($request->input('callback'));;
    }

    public function updateProduct(Request $request, $id){
        $product  = Product::find($id);
        $product->name = $request->input('name');
        $product->description = $request->input('description');
        $product->price = $request->input('price');
        $product->image = $request->input('image');

        $product->save();

        return response()->json($product)->setCallback($request->input('callback'));;
    }
    public function deleteProduct(Request $request,$id){
        $product  = Product::find($id);
        $product->delete();

        return response()->json('Removed successfully.')->setCallback($request->input('callback'));;
    }
    public function index(Request $request){

        $products  = Product::all();

        return response()->json($products)->setCallback($request->input('callback'));

    }

    //
}
