<?php

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\RegistrationController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('/login' , [AuthController::class, 'login']);

Route::post('/users/register' , [RegistrationController::class, 'register'])->name('users.register');
Route::post('/users/validation-email', [RegistrationController::class, 'validationEmail'])->name('users.validation-email');
Route::post('/users/reset-password-token', [RegistrationController::class, 'passwordResetEmail'])->name('users.reset-pwd-token');
Route::post('/users/reset-password', [RegistrationController::class, 'resetPassword'])->name('users.reset-pwd');
Route::post('/users/email-validation', [RegistrationController::class, 'validateEmail'])->name('users.email-validation');
Route::post('users/reset-token-validation', [RegistrationController::class, 'validateResetToken'])->name('users.reset-token-validation');

