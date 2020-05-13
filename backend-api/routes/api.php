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


/**
 * Pins
 */
Route::post('/pins', 'PinsController@create');

//Todas
Route::get('/pins', 'PinsController@findAll');

//Una
Route::get('/pins/{id}', 'PinsController@findById');

//Update pin by id
Route::put('/pins/{id}', 'PinsController@update');

//Update pin by id
Route::get('/pins/{id}/board', 'PinsController@findBoard');

//Delete a pin by id
Route::delete('/pins/{id}', 'PinsController@delete');

/**
 * Boards
 */

//Create a board
Route::post('/boards', 'BoardsController@create');

//Todas
Route::get('/boards', 'BoardsController@findAll');

//Una
Route::get('/boards/{id}', 'BoardsController@findById');

//Update pin by id
Route::put('/boards/{id}', 'BoardsController@update');

//Delete a pin by id
Route::delete('/boards/{id}', 'BoardsController@delete');

//Get all the pins of the board
Route::get('/boards/{id}/pins', 'BoardsController@findPins');
