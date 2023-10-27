<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/' , function () {
    return Inertia::render('Welcome');
})->name('welcome');

Route::get('/recipes',function (){
    return Inertia::render('Recipes');
})->middleware(['auth', 'verified'])->name('recipes');

Route::get('/recipe/{recipe}',function (){
    return Inertia::render('RecipeDetails');
})->middleware(['auth', 'verified'])->name('recipe');;

Route::get('routines', function () {
    //
})->name('routines');

Route::get('/subscription',function (){
    return Inertia::render('Subscription');
})->name('subscription');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
