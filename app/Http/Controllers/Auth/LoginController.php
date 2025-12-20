<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth; // Essential for Auth::attempt

class LoginController extends Controller
{
    public function login(Request $request)
{
    $credentials = $request->validate([
        'username' => 'required|string',
        'password' => 'required',
    ]);

    if (Auth::attempt($credentials)) {
        $request->session()->regenerate();
        return response()->json(['redirect' => '/dashboard'], 200); 
    }

    return response()->json(['message' => 'Invalid account or password'], 401);
}
}
