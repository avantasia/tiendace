<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;

class CategoryController extends Controller
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

    public function createCart(Request $request)
    {

        $cart = Category::create($request->all());

        return response()->json($cart)->setCallback($request->input('callback'));;
    }

    // TODO Implement stock and quantity management
    public function addToCart(Request $request, $id)
    {
        $cart = Category::find($id);
        $cart->products()->attach(Product::find($id));
        $cart->save();

        return response()->json($cart)->setCallback($request->input('callback'));;
    }
    public function removeFromCart(Request $request, $id)
    {
        $cart = Category::find($id);
        $cart->products()->detach(Product::find($id));
        $cart->save();

        return response()->json($cart)->setCallback($request->input('callback'));;
    }



    public function deleteCart(Request $request, $id)
    {
        $cart = Category::find($id);
        $cart->delete();

        return response()->json('Removed successfully.')->setCallback($request->input('callback'));;
    }

    public function index(Request $request)
    {

        $cart = Category::all();

        return response()->json($cart)->setCallback($request->input('callback'));

    }

    public function products(Request $request, $id)
    {

        $products = Cart::findOrFail($id)->products;

        return response()->json($products)->setCallback($request->input('callback'));

    }


    //
}
