<?php

namespace App\Http\Controllers\Master;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Redirect;
use App\Model\Amarketdata;
use Carbon\Carbon;

class MarketdataController extends Controller
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
        return view('master/marketdata/index',$view);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $view=array();
		return view('master.marketdata.create',$view);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
		$marketdata = new Amarketdata;
		$marketdata->market = $request->input('market'); 			
		$marketdata->date = $request->input('date'); 
		$marketdata->noncommercial_positions_long = $request->input('noncommercial_positions_long'); 
		$marketdata->noncommercial_positions_short = $request->input('noncommercial_positions_short'); 
		$marketdata->noncommercial_positions_spreading = $request->input('noncommercial_positions_spreading'); 
		$marketdata->commercial_positions_long = $request->input('commercial_positions_long'); 
		$marketdata->commercial_positions_short = $request->input('commercial_positions_short'); 
		$marketdata->nonreportable_positions_short = $request->input('nonreportable_positions_short'); 
		$marketdata->nonreportable_positions_long = $request->input('nonreportable_positions_long'); 
		$marketdata->open_intrest = $request->input('open_intrest'); 
		$marketdata->total_reportable_poitions_long = $request->input('total_reportable_poitions_long'); 
		$marketdata->total_reportable_poitions_short = $request->input('total_reportable_poitions_short'); 
		$marketdata->channge_in_open_intrest = $request->input('channge_in_open_intrest'); 
		$marketdata->change_in_noncommercial_long = $request->input('change_in_noncommercial_long'); 
		$marketdata->change_in_noncommercial_short = $request->input('change_in_noncommercial_short'); 
		$marketdata->change_in_noncommercial_spreading = $request->input('change_in_noncommercial_spreading'); 
		$marketdata->change_in_commercial_long = $request->input('change_in_commercial_long'); 
		$marketdata->change_in_commercial_short = $request->input('change_in_commercial_short'); 
		$marketdata->change_in_totalreportable_long = $request->input('change_in_totalreportable_long'); 
		$marketdata->change_in_totalreportable_short = $request->input('change_in_totalreportable_short'); 
		$marketdata->change_in_non_totalreportable_long = $request->input('change_in_non_totalreportable_long'); 
		$marketdata->change_in_non_totalreportable_short = $request->input('change_in_non_totalreportable_short'); 
		$marketdata->per_of_open_intrest_all = $request->input('per_of_open_intrest_all'); 
		$marketdata->per_of_noncommercial_long = $request->input('per_of_noncommercial_long'); 
		$marketdata->per_of_noncommercial_short = $request->input('per_of_noncommercial_short');  
		$marketdata->per_of_noncommercial_spreading = $request->input('per_of_noncommercial_spreading'); 
		$marketdata->save();
		
		return Redirect::route('marketdata.index')->with(["success" => "Market data has been added successfully."]); 
		
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
        $view['marketdata'] = Amarketdata::find($id);
		return view('master/marketdata/show',$view);
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
        $view['marketdata'] = Amarketdata::find($id);
		return view('master/marketdata/edit',$view);
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
        $marketdata= Amarketdata::find($id);
		$marketdata->noncommercial_positions_long = $request->input('noncommercial_positions_long'); 
		$marketdata->noncommercial_positions_short = $request->input('noncommercial_positions_short'); 
		$marketdata->noncommercial_positions_spreading = $request->input('noncommercial_positions_spreading'); 
		$marketdata->commercial_positions_long = $request->input('commercial_positions_long'); 
		$marketdata->commercial_positions_short = $request->input('commercial_positions_short'); 
		$marketdata->nonreportable_positions_short = $request->input('nonreportable_positions_short'); 
		$marketdata->nonreportable_positions_long = $request->input('nonreportable_positions_long'); 
		$marketdata->open_intrest = $request->input('open_intrest'); 
		$marketdata->total_reportable_poitions_long = $request->input('total_reportable_poitions_long'); 
		$marketdata->total_reportable_poitions_short = $request->input('total_reportable_poitions_short'); 
		$marketdata->channge_in_open_intrest = $request->input('channge_in_open_intrest'); 
		$marketdata->change_in_noncommercial_long = $request->input('change_in_noncommercial_long'); 
		$marketdata->change_in_noncommercial_short = $request->input('change_in_noncommercial_short'); 
		$marketdata->change_in_noncommercial_spreading = $request->input('change_in_noncommercial_spreading'); 
		$marketdata->change_in_commercial_long = $request->input('change_in_commercial_long'); 
		$marketdata->change_in_commercial_short = $request->input('change_in_commercial_short'); 
		$marketdata->change_in_totalreportable_long = $request->input('change_in_totalreportable_long'); 
		$marketdata->change_in_totalreportable_short = $request->input('change_in_totalreportable_short'); 
		$marketdata->change_in_non_totalreportable_long = $request->input('change_in_non_totalreportable_long'); 
		$marketdata->change_in_non_totalreportable_short = $request->input('change_in_non_totalreportable_short'); 
		$marketdata->per_of_open_intrest_all = $request->input('per_of_open_intrest_all'); 
		$marketdata->per_of_noncommercial_long = $request->input('per_of_noncommercial_long'); 
		$marketdata->per_of_noncommercial_short = $request->input('per_of_noncommercial_short');  
		$marketdata->per_of_noncommercial_spreading = $request->input('per_of_noncommercial_spreading'); 
		$marketdata->save();
		
		return Redirect::route('marketdata.index')->with(["success" => "Market data details has been updated successfully"])->withInput();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $types = Amarketdata::find($id);
        $types->delete();

        return Redirect::route('marketdata.index')->with(["success" => "Market data has been deleted successfully"])->withInput();
    }
	
	public function list(Request $request){
		
		$marketdata = new Amarketdata();
		$list= $marketdata->getList($request,$request->input('length'),$request->input('start')); 
		$data = array();	
		$no = $_REQUEST['start']; 
		foreach ($list['result'] as $res) {   
			$no++; 
		
			$row = array(); 
			$html="";
			$showurl = route('marketdata.show', ['id' =>$res->id]); 
			$editurl = route('marketdata.edit', ['id' =>$res->id]); 
			$deleteurl = route('marketdata.destroy', ['id' =>$res->id]); 
			
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
			$row['market'] = $res->market; 			
			$row['date'] = $res->date; 
			$row['noncommercial_positions_long'] = $res->noncommercial_positions_long; 
			$row['noncommercial_positions_short'] = $res->noncommercial_positions_short; 
			$row['noncommercial_positions_spreading'] = $res->noncommercial_positions_spreading; 
			$row['commercial_positions_long'] = $res->commercial_positions_long; 
			$row['commercial_positions_short'] = $res->commercial_positions_short; 
			$row['nonreportable_positions_short'] = $res->nonreportable_positions_short; 
			$row['nonreportable_positions_long'] = $res->nonreportable_positions_long; 
			$row['open_intrest'] = $res->open_intrest; 
			$row['total_reportable_poitions_long'] = $res->total_reportable_poitions_long; 
			$row['total_reportable_poitions_short'] = $res->total_reportable_poitions_short; 
			$row['channge_in_open_intrest'] = $res->channge_in_open_intrest; 
			$row['change_in_noncommercial_long'] = $res->change_in_noncommercial_long; 
			$row['change_in_noncommercial_short'] = $res->change_in_noncommercial_short; 
			$row['change_in_noncommercial_spreading'] = $res->change_in_noncommercial_spreading; 
			$row['change_in_commercial_long'] = $res->change_in_commercial_long; 
			$row['change_in_commercial_short'] = $res->change_in_commercial_short; 
			$row['change_in_totalreportable_long'] = $res->change_in_totalreportable_long; 
			$row['change_in_totalreportable_short'] = $res->change_in_totalreportable_short; 
			$row['change_in_non_totalreportable_long'] = $res->change_in_non_totalreportable_long; 
			$row['change_in_non_totalreportable_short'] = $res->change_in_non_totalreportable_short; 
			$row['per_of_open_intrest_all'] = $res->per_of_open_intrest_all; 
			$row['per_of_noncommercial_long'] = $res->per_of_noncommercial_long; 
			$row['per_of_noncommercial_short'] = $res->per_of_noncommercial_short;  
			$row['per_of_noncommercial_spreading'] = $res->per_of_noncommercial_spreading; 
			
			
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
