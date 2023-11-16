<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Rights;
use STS\JWT\Facades\JWT;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    
    public function login(Request $request) {
        $username = $request->input('username');
        $password = sha1($request->input('password'));        
        $user = User::where('email', $username)->first();
        if ($user) {
            if ($user->validation == 0) {
                return response('ERROR.EMAIL-VALIDATION', 400);
            } else if ($user->lockaccount == 1) {
                return response('ERROR.ACCOUNT-LOCK', 400);
            } else if ($user->password != $password) {
                return response('ERROR.LOGIN', 401); 
            } else {
                $user->updateConnection($request);
                $admin = Rights::where('id_user', $user->id)->first();
                $jwt = JWT::get('', [
                    'email' => $user->email,
                    'name' => $user->prenom.' '.$user->nom,
                    'admin' => ($admin != null),
                ]);
                return response(['accessToken' => $jwt], 200);
            }
        } else {
            return response('ERROR.LOGIN', 401);
        }
    }
}
