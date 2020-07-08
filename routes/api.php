<?php

use Illuminate\Http\Request;

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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });




Route::get('/posts', 'API\PostController@index')->name('posts');

Route::post('add/post', 'API\PostController@add');

Route::get('edit/post/{id}', 'API\PostController@edit');

Route::delete('delete/post/{id}', 'API\PostController@delete');

Route::put('update/post/{id}', 'API\PostController@update');