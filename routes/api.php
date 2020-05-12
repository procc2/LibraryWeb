<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::group(['prefix' => '/v1', 'namespace' => 'Api\V1', 'as' => 'api.'], function () {
    Route::resource('companies', 'CompaniesController', ['except' => ['create', 'edit']]);
});

Route::group(['prefix' => '/v1', 'namespace' => 'Api\V1', 'as' => 'api.'], function () {
    Route::resource('books', 'BookController', ['except' => ['create', 'edit']]);
    Route::get("/filterBooks",'BookController@getWithFilter');
    Route::resource('categories', 'CategoryController', ['except' => ['create', 'edit']]);
    Route::resource('authors', 'AuthorController', ['except' => ['create', 'edit']]);
    Route::resource('publishers', 'PublisherController', ['except' => ['create', 'edit']]);
    Route::resource('loans', 'LoanController', ['except' => ['create', 'edit']]);
    Route::resource('users', 'UserController', ['except' => ['create', 'edit']]);
});

Route::post('/files', 'FileController@store');
Route::put('/files/{id}', 'FileController@edit');
Route::delete('/files/{id}', 'FileController@destroy');