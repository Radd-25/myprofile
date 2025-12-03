<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class Admin extends Controller
{
    public function index() {
        $data = DB::table('contacts')->get();
        // dd($data);
        return view('admin', ['contacts' => $data]);
    }

}
