<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Lumen\Routing\Controller as BaseController;

class Controller extends BaseController
{
    /**
     * Check if user is in a group
     *
     * @param Request $request
     * @param String $group
     * @return JsonResponse
     */
    public function checkGroup(Request $request, string $group)
    {

        $roles = Auth::user()->roles;
        $isMember = false;
        foreach ($roles as $role) {
            if ($role['name'] == $group) {
                $isMember = true;
            }
        }
        return $isMember;
    }

    /**
     * Respond with JWT token
     *
     * @param $token
     * @return JsonResponse
     */
    protected function respondWithToken($token)
    {
        Auth::factory()->setTTL(60000);
        return response()->json([
            'token' => $token,
            'token_type' => 'bearer',
            'expires_in' => Auth::factory()->getTTL() * 60
        ], 200);
    }
}
