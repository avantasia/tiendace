<?php


namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Product;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    /**
     * Store a new user.
     *
     * @param Request $request
     * @return JsonResponse
     * @throws ValidationException
     */

    public function register(Request $request)
    {
        //Validate data
        $this->validate($request, [
            'name' => 'required|string',
            'email' => 'required|email|unique:users',
            'password' => 'required|confirmed',
        ]);

        try {

            $user = new User;
            $user->name = $request->input('name');
            $user->email = $request->input('email');
            $plainPassword = $request->input('password');
            $user->password = app('hash')->make($plainPassword);

            $user->save();

            $user = User::query()->where('email','=',$user->email)->first();

            $credentials = $request->only(['email', 'password']);
            $token = Auth::attempt($credentials);

            $cart = Cart::create( array('user_id'=>$user->id));
            $cart->save();


            $cart=Cart::query()->where('user_id','=',$user->id)->first();

            $products = $request->input('currentCart');
            foreach ($products as $p){
                $id = $p['id'];
                $cart->products()->attach(Product::find($id));
            }



            //Return if success
            return response()->json(['user' => $user, 'message' => 'User created', 'token' => $token], 201);

        } catch (\Exception $e) {
            //Return if failure
            //Careful with printing whole $e when not in production
            return response()->json(['message' => 'Creation failed ' . $e], 409);
        }

    }

    /**
     * User login with email/password
     *
     * @param Request $request
     * @return JsonResponse
     * @throws ValidationException
     */
    public function login(Request $request)
    {
        //validate incoming request
        $this->validate($request, [
            'email' => 'required|string',
            'password' => 'required|string',
        ]);

        $credentials = $request->only(['email', 'password']);

        if (!$token = Auth::attempt($credentials)) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        return $this->respondWithToken($token);
    }


}
