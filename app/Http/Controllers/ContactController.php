<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'message' => 'required',
        ]);

        DB::table('contacts')->insert($data);

        return response()->json([
            "message" => "saved",
            "data" => $data
        ]);
    }

    public function delete($id)
    {
        DB::table('contacts')->where('id', $id)->delete();
        return redirect('/admin')->with('success', 'Contact deleted successfully.');
    }
}
