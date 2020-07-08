<?php

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

// Route::get('/', function () {
//     return view('welcome');
// });

    Route::get('/{path}', function () {
         return view('welcome');
    })->where('path','.*');
    



// Route::get('/posts', 'API\PostController@index')->name('posts');

// Route::post('add/post', 'API\PostController@add');

// Route::get('edit/post/{id}', 'API\PostController@edit');

// Route::delete('delete/post/{id}', 'API\PostController@delete');

// Route::put('update/post/{id}', 'API\PostController@update');


// Route::resource('items', 'ItemController');

