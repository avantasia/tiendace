<?php


namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Auth;


class UserController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //Requests to this are authenticated
        $this->middleware('auth');
    }


    /**
     * Get the current authenticated User.
     *
     * @return Response
     */
    public function profile()
    {
        return response()->json(['user' => Auth::user()], 200);
    }

    /**
     * Get the current authenticated User Groups.
     *
     * @return Response
     */
    public function roles()
    {
        return response()->json(['groups' => Auth::user()->roles], 200);
    }

    /**
     * Get all Users
     *
     * TODO restrict to admin role
     *
     * @return Response
     */
    public function allUsers()
    {
        return response()->json(['users' => User::all()], 200);
    }

    /**
     * Get one User by id
     *
     * TODO careful when printin $e response
     *
     * @return Response
     */
    public function singleUser($id)
    {
        try {
            $user = User::findOrFail($id);

            return response()->json(['user' => $user], 200);

        } catch (\Exception $e) {

            return response()->json(['message' => $e], 404);
        }

    }

    /**
     * Get one User groups by id
     *
     * TODO careful when printin $e response
     *
     * @param $id
     * @return Response
     */
    public function singleUserRoles($id)
    {
        try {
            $user = User::findOrFail($id)->roles;

            return response()->json(['user' => $user], 200);

        } catch (\Exception $e) {

            return response()->json(['message' => $e], 404);
        }

    }


}
