<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\FileController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin'       => Route::has('login'),
        'canRegister'    => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion'     => PHP_VERSION,
    ]);
});

Route::get('/dashboard', DashboardController::class)->middleware([
    'auth',
    'verified'
])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [
        ProfileController::class,
        'edit'
    ])->name('profile.edit');
    Route::patch('/profile', [
        ProfileController::class,
        'update'
    ])->name('profile.update');
    Route::delete('/profile', [
        ProfileController::class,
        'destroy'
    ])->name('profile.destroy');

    Route::controller(FileController::class)->prefix('/file')->group(function () {
        Route::get('/', 'index')->name('file.index');

        Route::get('/create', 'create')->name('file.create');
        Route::post('/create', 'store')->name('file.store');

        Route::delete('/{file}/delete', 'destroy')->name('file.destroy');
    });
});

require __DIR__ . '/auth.php';
