<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Amarkets extends Model
{
	protected $table ='tbl_markets';		public function getList($request,$limit=NUll,$offset=NULL){		$result=array();						$col= isset($request['order'][0]['column'])?$request['order'][0]['column']:'0';				$dir= isset($request['order'][0]['dir'])?$request['order'][0]['dir']:'asc';						$columns_valid = array(			"type_name",     			"market",             			"name",   		);         				if(!isset($columns_valid[$col])) {            			$order = null;        		} else {            			$order = $columns_valid[$col];        		}						$query = Amarkets::select("tbl_markets.*","m_type.type_name as type_name")				/*->join('tbl_types as m_type', function($join){					$join->on('m_type.id', '=', 'tbl_markets.type');				});		*/					 ->leftJoin('tbl_types as m_type', 'tbl_markets.type', '=', 'm_type.id');				 		foreach($request['columns'] as $column){			if (!empty($column['search']['value'])) {					$query->where($column["data"], 'like', "%".$column['search']['value']."%");					}		}					if($order !=null) {            			$query->orderBy($order, $dir);        		}				$result['num'] =  count($query->get());				if(!empty($limit)){						$query->take($limit)->skip($offset);				}				$result['result'] =  $query->get();				return $result;			} 		public function types()    {        return $this->hasOne('App\Model\Atypes', 'id','type');    }
}



