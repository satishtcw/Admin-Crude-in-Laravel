<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Atypes extends Model
{
	protected $table ='tbl_types';
	
	public function getList($request,$limit=NUll,$offset=NULL){
		$result=array();				
		$col= isset($request['order'][0]['column'])?$request['order'][0]['column']:'0';		
		$dir= isset($request['order'][0]['dir'])?$request['order'][0]['dir']:'asc';		
		
		$columns_valid = array(
			"type_name",             
			"date_added",          
		);         
		
		if(!isset($columns_valid[$col])) {            
			$order = null;        
		} else {            
			$order = $columns_valid[$col];        
		}				
		$query = Atypes::select("tbl_types.*");		
		
		foreach($request['columns'] as $column){
			if (!empty($column['search']['value'])) {	
				$query->where('tbl_types.'.$column["data"], 'like', "%".$column['search']['value']."%");		
			}
		}
			
		if($order !=null) {            
			$query->orderBy($order, $dir);        
		}		
		$result['num'] =  count($query->get());		
		if(!empty($limit)){			
			$query->take($limit)->skip($offset);		
		}		
		$result['result'] =  $query->get();		
		return $result;		
	} 
}



