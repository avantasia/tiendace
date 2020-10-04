<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\User;
use Exception;
use Illuminate\Support\Facades\Auth;
use App\Models\Product;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Models\Order;
use App\Http\Controllers\AuthController;



class OrderController extends Controller
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
     * Create a new order, copy the current cart's product list then destroy it
     *
     * @param Request $request
     * @return JsonResponse
     * @throws Exception
     */
    public function createOrder(Request $request)
    {
            $order = Order::create($request->all());

            $order->payment_method = $request->input('payment_method');
            $order->shipping_method = $request->input('shipping_method');

            $cart=Cart::query()->where('user_id','=',Auth::user()->id)->first();

            $products = $cart->products;

            foreach ($products as $p){
                $order->products()->attach($p);
            }

            $cart->delete();

            $order->save();
            return response()->json($order)->setCallback($request->input('callback'));;
    }





    /**
     * Get all orders if the user is admin, else show only user's ones
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function index(Request $request)
    {
        if(Auth::user()) {
            $isAdmin = $this->checkGroup($request, 'admin');

            if ($isAdmin) {
                $orders = Order::all();
                return response()->json($orders)->setCallback($request->input('callback'));
            } else {
                $orders = Order::query()->where('user_id','=',Auth::user()->id)->get();
                return response()->json($orders)->setCallback($request->input('callback'));
            }
        }else{
            return response()->json(["error"=>'Unauthorized'], 400);        }

    }

    /**
     * Get pending orders
     * TODO check if user is admin and show products of any cart, else show own cart
     *
     * @param Request $request
     * @param $id
     * @return JsonResponse
     */
    public function pending(Request $request)
    {

        if(Auth::user()) {
            $isAdmin = $this->checkGroup($request, 'admin');

            if ($isAdmin) {
                $orders = Order::query()->where('sent_date','=',null);

                return response()->json($orders)->setCallback($request->input('callback'));
            } else {
                $orders = Order::query()->where('user_id','=',Auth::user()->id)->where('sent_date','=',null)->get();
                return response()->json($orders)->setCallback($request->input('callback'));
            }
        }else{
            return response()->json(["error"=>'Unauthorized'], 400);        }
    }

    /**
     * Get all products for a given cart
     *
     * @param Request $request
     * @param $id
     * @return JsonResponse
     */
    public function products(Request $request)
    {

        if(Auth::user()) {
            $orderid=$request->route()[2]['id'];
            $isAdmin = $this->checkGroup($request, 'admin');

            if ($isAdmin) {
                $products = Order::query()->where('id','=',$orderid)->first()->products;
                return response()->json($products)->setCallback($request->input('callback'));
            } else {
                $products = Order::query()->where('user_id','=',Auth::user()->id)->where('id','=',$orderid)->first()->products;
                return response()->json($products)->setCallback($request->input('callback'));
            }
        }else{
            return response()->json(["error"=>'Unauthorized'], 400);        }

    }


}
