<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\Auth\LoginController;


Route::get('/', function () {
    return view('main');
});

Route::get('/welcome', function () {
    return view('welcome');
});

Route::get('/login', function () {
    return view('login');
});


Route::post('/login', [LoginController::class, 'login']);
Route::post('/contact', [ContactController::class, 'store']);
Route::get('/admin', [App\Http\Controllers\Admin::class, 'index']);
Route::delete('/delete/{id}', [ContactController::class, 'delete'])->name('delete');