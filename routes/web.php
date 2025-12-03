<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;


Route::get('/', function () {
    return view('main');
});

Route::get('/welcome', function () {
    return view('welcome');
});


Route::post('/contact', [ContactController::class, 'store']);
Route::get('/admin', [App\Http\Controllers\Admin::class, 'index']);
Route::delete('/delete/{id}', [ContactController::class, 'delete'])->name('delete');