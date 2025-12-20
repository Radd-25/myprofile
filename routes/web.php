<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\Auth\LoginController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

// --- PUBLIC ROUTES ---
Route::get('/', function () {
    return view('main');
});

Route::get('/login', function () {
    return view('login');
})->name('login')->middleware('guest');

Route::post('/login', [LoginController::class, 'login']);
Route::post('/contact', [ContactController::class, 'store']); // Public contact form


// --- PROTECTED ROUTES (Admin Only) ---
Route::middleware('auth')->group(function () {
    
    // This route handles fetching the contacts AND showing the view
    Route::get('/dashboard', [App\Http\Controllers\Admin::class, 'index']);
    
    Route::delete('/delete/{id}', [ContactController::class, 'delete'])->name('delete');

    Route::post('/logout', function (Request $request) {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return response()->json(['message' => 'Logged out']);
    });
});