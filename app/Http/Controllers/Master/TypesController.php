<?php

namespace App\Http\Controllers\Master;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Redirect;
use App\Model\Atypes;
use Carbon\Carbon;

class TypesController extends Controller
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
        return view('master/types/index',$view);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $view=array();
		return view('master.types.create',$view);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
		$type = new Atypes;
		$type->type_name  =$request->input('type_name');
		$type->date_added =Carbon::now()->toDateTimeString();
		$type->save();
		
		return Redirect::route('types.index')->with(["success" => "Market type has been added successfully."]); 
		
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
        $view['types'] = Atypes::find($id);
		return view('master/types/show',$view);
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
        $view['types'] = Atypes::find($id);
		return view('master/types/edit',$view);
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
        $type= Atypes::find($id);
		$type->type_name = $request->input('type_name');
		$type->save();
		
		return Redirect::route('types.index')->with(["success" => "Market type details has been updated successfully"])->withInput();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $types = Atypes::find($id);
        $types->delete();

        return Redirect::route('types.index')->with(["success" => "Market type has been deleted successfully"])->withInput();
    }
	
	public function list(Request $request){
		
		$types = new Atypes();
		$list= $types->getList($request,$request->input('length'),$request->input('start')); 
		$data = array();	
		$no = $_REQUEST['start']; 
		foreach ($list['result'] as $res) {   
			$no++; 
		
			$row = array(); 
			$html="";
			$showurl = route('types.show', ['id' =>$res->id]); 
			$editurl = route('types.edit', ['id' =>$res->id]); 
			$deleteurl = route('types.destroy', ['id' =>$res->id]); 
			$row['type_name'] =$res->type_name; 			
			$row['date_added'] = $res->date_added; 
			
			$html.= '<a href="'.$showurl.'" class="btn btn-sm btn-clean btn-icon float-left" title="Show details">
						<i class="la la-eye"></i>
					<a href="'.$editurl.'" class="btn btn-sm btn-clean btn-icon float-left" title="Edit details">
						<i class="la la-edit"></i>
					</a>
					<form method="POST" calss="delete_form float-right" action="'.$deleteurl.'">
						<input name="_token" type="hidden" value="'.csrf_token().'">
						<input name="_method" type="hidden" value="DELETE">
						<button type="submit" class="delete btn btn-sm btn-clean btn-icon">
						<i class="la la-trash"></i>
						</button>	
					</form>';
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
