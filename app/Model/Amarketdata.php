<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model; 

class Amarketdata extends Model
{
	protected $table ='tbl_market_data';		
	public function getList($request,$limit=NUll,$offset=NULL){		
		$result=array();						
		$col= isset($request['order'][0]['column'])?$request['order'][0]['column']:'0';				
		$dir= isset($request['order'][0]['dir'])?$request['order'][0]['dir']:'asc';						
		$columns_valid = array(	
			'',
			'market', 
			'date', 
			'noncommercial_positions_long', 
			'noncommercial_positions_short', 
			'noncommercial_positions_spreading', 
			'commercial_positions_long', 
			'commercial_positions_short', 
			'nonreportable_positions_short', 
			'nonreportable_positions_long', 
			'open_intrest', 
			'total_reportable_poitions_long', 
			'total_reportable_poitions_short', 
			'channge_in_open_intrest', 
			'change_in_noncommercial_long', 
			'change_in_noncommercial_short', 
			'change_in_noncommercial_spreading', 
			'change_in_commercial_long', 
			'change_in_commercial_short', 
			'change_in_totalreportable_long', 
			'change_in_totalreportable_short', 
			'change_in_non_totalreportable_long', 
			'change_in_non_totalreportable_short', 
			'per_of_open_intrest_all', 
			'per_of_noncommercial_long', 
			'per_of_noncommercial_short', 
			'per_of_noncommercial_spreading'
		);         				
		if(!isset($columns_valid[$col])) {            			
			$order = null;        		
		} else {            			
			$order = $columns_valid[$col];        		
		}						
		$query = Amarketdata::select("tbl_market_data.*","t_market.market as market")				 
			->leftJoin('tbl_markets as t_market', 'tbl_market_data.market_id', '=', 't_market.id');
			
			foreach($request['columns'] as $column){			
				if (!empty($column['search']['value'])) {					
					$query->where($column["data"], 'like', "%".$column['search']['value']."%");					
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

	public function markets(){        
		return $this->hasOne('App\Model\Amarkets', 'id','market_id');    
	}
}



