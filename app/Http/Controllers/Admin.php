<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth; // Add this to use Auth

class Admin extends Controller
{
    public function index() {
        // Fetch the inbox contacts
        $data = DB::table('contacts')->get();
        
        // Get the name of the currently logged-in user
        // This pulls from the 'username' column in your 'users' table
        $userName = Auth::user()->username; 

        return view('dashboard', [
            'contacts' => $data,
            'userName' => $userName
        ]);
    }
}