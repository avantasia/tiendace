<?php


namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
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
     * @return JsonResponse
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
     * Check if the user is admin, inherited from Controller but exposed here
     * @param Request $request
     * @return JsonResponse
     */
    public function isAdmin(Request $request){
        if(Auth::user()) {
            $isAdmin = $this->checkGroup($request, 'admin');

            if ($isAdmin) {
                return response()->json(["admin"=>true],200)->setCallback($request->input('callback'));
            } else {
                return response()->json(["admin"=>false],200)->setCallback($request->input('callback'));
            }
        }else{
            return response()->json(["error"=>'Unauthorized'], 400);
        }
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
     * Get self info
     *
     * TODO careful when printin $e response
     *
     * @return Response
     */
    public function myUser()
    {
        try {
            $user = User::findOrFail(Auth::user()->id);

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

    public function updateUser(Request $request){
        try{

        $this->validate($request, [
            'name' => 'required|string'
        ]);

        $user = User::find(Auth::user()->id);
        $user->name = $request->input('name');
        $user->address = $request->input('address');
        $user->city = $request->input('city');
        $user->postal_code = $request->input('postal_code');

        if ($request->file('profile_picture') != null) {
            $picName = Hash("sha256", $user->email);
            $extension = $request->file('profile_picture')->clientExtension();
            $user->picture = $picName . "." . $extension;
            $destinationPath = '..' . DIRECTORY_SEPARATOR . 'frontend' . DIRECTORY_SEPARATOR . 'public' . DIRECTORY_SEPARATOR . 'img' . DIRECTORY_SEPARATOR . 'users';
            $request->file('profile_picture')->move($destinationPath, $user->picture);
        }

        $user->save();

        return response()->json($user);;
        } catch (\Exception $e){
            return response()->json($e,500);;
        }
    }


}
