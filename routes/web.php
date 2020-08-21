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

Route::get('/', 'HomeController@index')->name('home');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::group(['middleware' => ['auth','master']], function() {
	Route::get('master/dashboard', 'Master\DashboardController@index')->name('master.dashboard');
	
	Route::resource('master/marketdata', 'Master\MarketdataController');
	Route::any('master/marketdata/list', 'Master\MarketdataController@list')->name('marketdata.list');
	
	Route::resource('master/types', 'Master\TypesController');
	Route::any('master/types/list', 'Master\TypesController@list')->name('types.list');
	
	Route::resource('master/markets', 'Master\MarketsController');
	Route::any('master/markets/list', 'Master\MarketsController@list')->name('markets.list');
});