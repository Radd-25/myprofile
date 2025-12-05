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

    public function delete(Request $request, $id)
    {
        $deleted = DB::table('contacts')->where('id', $id)->delete();

        // If this is an AJAX / fetch request, return JSON so frontend can update the UI
        if ($request->expectsJson() || $request->ajax()) {
            if ($deleted) {
                return response()->json([
                    'message' => 'Contact deleted',
                    'id' => (int) $id,
                ], 200);
            }

            return response()->json([
                'message' => 'Contact not found',
            ], 404);
        }

        // Fallback for normal form submissions
        if ($deleted) {
            return redirect('/admin')->with('success', 'Contact deleted successfully.');
        }

        return redirect('/admin')->with('error', 'Contact not found.');
    }
}