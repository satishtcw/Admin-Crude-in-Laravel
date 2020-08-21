<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Auth;
class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
		// User role
		$role = Auth::user()->role; 
		if($role == 1){
			return Redirect::route('analytics.index'); 
		}elseif($role == 2){
			return Redirect::route('master.dashboard'); 
		}
        return view('home');
    }
}
