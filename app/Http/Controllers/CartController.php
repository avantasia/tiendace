<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use App\Models\Product;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CartController extends Controller
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
     * Create a new cart
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function createCart(Request $request)
    {
        $existingcart = Cart::query()->where('user_id','=',Auth::user()->id)->count();

        if($existingcart==0){
            $cart = Cart::create($request->all());
            $cart->save();
            return response()->json($cart)->setCallback($request->input('callback'));;
        }else{
            $error="{'error':'Already has one cart'}";
            return  response()->json($error);
        }

    }

    /**
     * Add an item to shopping cart
     *
     * @param Request $request
     * @param $id
     * @return JsonResponse
     */
    // TODO Implement stock and quantity management
    public function addToCart(Request $request)
    {
        $id = $request->input('id');

        $existingcart = Cart::query()->where('user_id','=',Auth::user()->id)->count();

        if($existingcart==0) {
            $cart = Cart::create($request->all());
            $cart->save();
        }

        $cart=Cart::query()->where('user_id','=',Auth::user()->id)->first();


        $cart->products()->attach(Product::find($id));


        return response()->json($cart)->setCallback($request->input('callback'));;
    }

    /**
     * Remove an item from cart
     *
     * @param Request $request
     * @param $id
     * @return JsonResponse
     */
    public function removeFromCart(Request $request)
    {

        $id = $request->input('id');

        $cart=Cart::query()->where('user_id','=',Auth::user()->id)->first();
        $cart->products()->detach(Product::find($id));

        return response()->json($cart)->setCallback($request->input('callback'));;
    }

    /**
     * Delete cart
     *
     * @param Request $request
     * @param $id
     * @return JsonResponse
     */
    public function deleteCart(Request $request)
    {

        $cart=Cart::query()->where('user_id','=',Auth::user()->id)->first();

        $cart->delete();

        return response()->json('Removed successfully.')->setCallback($request->input('callback'));;
    }

    /**
     * Get all carts
     * TODO check if user is admin and show all active carts, else show own cart
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function index(Request $request)
    {


        $cart=Cart::query()->where('user_id','=',Auth::user()->id)->first();

        return response()->json($cart)->setCallback($request->input('callback'));

    }

    /**
     * Get all products for a given cart
     * TODO check if user is admin and show products of any cart, else show own cart
     *
     * @param Request $request
     * @param $id
     * @return JsonResponse
     */
    public function products(Request $request)
    {

        $cart=Cart::query()->where('user_id','=',Auth::user()->id)->first();

        $products = $cart->products;

        return response()->json($products)->setCallback($request->input('callback'));

    }

    /**
     * Get all products for a given cart
     *
     * @param Request $request
     * @param $id
     * @return JsonResponse
     */
    public function myProducts(Request $request)
    {
        $cart=Cart::query()->where('user_id','=',Auth::user()->id)->first();
        if($cart!=null){
            $products = $cart->products;
            return response()->json($products)->setCallback($request->input('callback'));
        }else{
            return response()->json(["error"=>'Cart is empty'], 500)->setCallback($request->input('callback'));
        }
    }

}
