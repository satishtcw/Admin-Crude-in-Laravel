<?php

namespace App\Http\Controllers\Master;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Redirect;
use App\Model\Amarkets;
use Carbon\Carbon;

class MarketsController extends Controller
{
	/**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
       $this->middleware('master');
    }
	
     /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
		$view=array();
        return view('master/markets/index',$view);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
		
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
		$view=array();
        $view['markets'] = Amarkets::find($id);
		return view('master/markets/show',$view);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $view=array(); 
        $view['markets'] = Amarkets::find($id);
		return view('master/markets/edit',$view);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $market= Amarkets::find($id);
		$market->type = $request->input('type');
		$market->name = $request->input('name');
		$market->save();
		
		return Redirect::route('markets.index')->with(["success" => "Market details has been updated successfully"])->withInput();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
    }
	
	public function list(Request $request){
		
		$types = new Amarkets();
		$list= $types->getList($request,$request->input('length'),$request->input('start')); 
		$data = array();	
		$no = $_REQUEST['start']; 
		foreach ($list['result'] as $res) {   
			$no++; 
		
			$row = array(); 
			$html="";
			$showurl = route('markets.show', ['id' =>$res->id]); 
			$editurl = route('markets.edit', ['id' =>$res->id]); 
			$deleteurl = route('markets.destroy', ['id' =>$res->id]); 
			$row['type_name'] =$res->type_name; 			
			$row['market'] = $res->market; 
			$row['name'] = $res->name; 
			
			$html.= '<a href="'.$showurl.'" class="btn btn-sm btn-clean btn-icon" title="Show details">
						<i class="la la-eye"></i>
					<a href="'.$editurl.'" class="btn btn-sm btn-clean btn-icon" title="Edit details">
						<i class="la la-edit"></i>
					</a>';
			$row['Actions'] =$html;	
			
			$data[] = $row;    
		}      
		 
		$output = array(      
			"draw" => isset($_REQUEST['draw'])?intval($_REQUEST['draw']):'',     
			"recordsTotal" => intval($list['num']),    
			"recordsFiltered" => intval($list['num']),     
			"data" => $data,  
		);      
		echo json_encode($output); 	
	}
}
