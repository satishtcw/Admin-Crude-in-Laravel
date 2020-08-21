var SubcategoryTable = (function(){
  
    var config = []
    var newdata = [];
	function removeCommas(str) {
		str = (str + "").replace(',', '');
		str = (str + "").replace('%', '');
		return str;
	};
	var SetTextColorFn = function(x) {
		console.log(x);
		if (Array.isArray(newdata) && x.column) {
			if (Array.isArray(newdata[x.column.index]) && newdata[x.column.index].length) {
				var columndata = newdata[x.column.index];
				
				var max_of_array = Math.max.apply(Array, columndata);
				var min_of_array = Math.min.apply(Array, columndata);
				
				var current_col_value = removeCommas(x.data[x.column.index]);
				
				var f_value = ((Number(current_col_value)-min_of_array)/(max_of_array-min_of_array))
				
				if(x.column.index == 'noncommercial_positions_long' || x.column.index == 'commercial_positions_long'){
					x.style = {
					  'background-color': 'rgba(255, 153, 102, ' + Math.abs( f_value ) + ')'
					};
				}
				if(x.column.index == 'noncommercial_positions_short' || x.column.index == 'commercial_positions_short'){
					x.style = {
					  'background-color': 'rgba(153, 194, 255, ' + Math.abs( f_value ) + ')'
					};
				}
				if(x.column.index == 'noncommercial_positions_Net' || x.column.index == 'commercial_positions_Net'){
					
					x.style = {
					  'background-color': 'rgba(194, 194, 163, ' + Math.abs( f_value ) + ')'
					};
				}
				
				if(x.column.index == 'open_intrest'){
					
					x.style = {
					  'background-color': 'rgba(153, 255, 204, ' + Math.abs( f_value ) + ')'
					};
				}
				if(x.column.index == 'five_year_percentile_Non_Commercial'){
					
					x.style = {
					  'background-color': 'rgba(255, 77, 77, ' + Math.abs( f_value ) + ')'
					};
				}
				if(x.column.index == 'noncommercial_52_week_change_Long' || x.column.index == 'commercial_52_week_change_Long'){
					
					x.style = {
					  'background-color': 'rgba(255, 83, 26, ' + Math.abs( f_value ) + ')'
					};
				}
				if(x.column.index == 'noncommercial_52_week_change_Short' || x.column.index == 'commercial_52_week_change_Short'){
					
					x.style = {
					  'background-color': 'rgba(255, 121, 77, ' + Math.abs( f_value ) + ')'
					};
				}
				if(x.column.index == 'noncommercial_52_week_change_total' || x.column.index == 'commercial_52_week_change_total'){
					
					x.style = {
					  'background-color': 'rgba(255, 159, 128, ' + Math.abs( f_value ) + ')'
					};
				}
				
				
			}
		}
	    return x; 
	};
    function initTable(tableColumns,id) {
		
      var grid = new FancyGrid({
        renderTo: 'container',
        theme: {
		  name: 'gray',
		  config: {
			cellHeaderHeight: 37,
		  }
		},
        exporter: true,
        tbar: [{
          text: 'Export to Excel',
		  id: 'exportToExcelhide',
          handler: function() {
              this.exportToExcel({
				  ignoreRender: true,
				  header: true,
				  fileName: 'cotmarkets Excel'
			  });
          }
        },{
          text: 'Commercial Summary',
          handler: function() {
              SubcategoryTable.setCommercial();
          }
        },{
          text: 'Complete',
          handler: function() {
              SubcategoryTable.setTotalReport();
          }
        },{
          text: 'Compressed',
          handler: function() {
              SubcategoryTable.setCompressed();
          }
        },{
          text: 'Non-Commercials Summary',
          handler: function() {
              SubcategoryTable.setNonComercial();
          }
        },{
          text: 'Regular',
          handler: function() {
              SubcategoryTable.setRegular();
          }
        },{
          text: 'Small Speculators Summary',
          handler: function() {
              SubcategoryTable.setSmallSpaculators();
          }
        },{
          text: 'Summary',
          handler: function() {
              SubcategoryTable.setSummary();
          }
        }],
		events: [
		{
			changepagesize: function(grid, pageSize){
			  grid.firstPage();
			}
		},
		{
			changepage: function(grid, page){
			  if(page == 0){
				 $('body').addClass('summary');
			  }else{
				 $('body').removeClass('summary');
			  }
			}
		 },
		 {
			 load: function(grid){
				var grid = FancyGrid.get('container');
				data = grid.getData();
				var i = 0;
				
				data.forEach(function(nextdata) {
					 if(i < 29){
						for (var key in nextdata) {
						  if(i == 0){
							  newdata[key] = [];
						  }	
						  var bbb = removeCommas(nextdata[key]);
						  newdata[key].push(Number(bbb)); 
						}
					 }
					i++;
				});
				grid.update();
			 }
		 }
		 ],
        data: {
		  remoteSort: false,
		  remotePage: true,
          proxy: {
            url: 'analytics/subcategory/'+id,
            reader: {
              root: 'items'
            }
          }  
        },
		multiSort: true,
		paging: {
			  pageSize: 30,
			  pageSizeData: [30, 52, 100, 500]
		},
        trackOver: true,
        filter: true,
        searching: true,
		selModel: {
			type: 'cells',
		  },
        defaults: {
          type: 'string',
          sortable: true,
          resizable: true,
          align: 'center',
          cellAlign: 'center',
        },
        columns: tableColumns,
      });
	   
    }
	
    function setTableColumns() {
      var columns = []
      columns = [{
        index: 'date',
        title: 'Date',
        locked: true,
        cellAlign: 'left',
        minWidth: 180,
        cls: 'fancy-customized-column-cls',
		summary: function() {
			return '<div style="font-weight: bold;">Avrage</div>';
		  },
      }, {
        index: 'Non_Commercial',
        title: 'Non - Commercial',
        columns: [{
            index: 'noncommercial_positions_long',
            title: 'Long',
            height: 90,
			render: SetTextColorFn,
        }, 
        {
            title: 'Short',
            index: 'noncommercial_positions_short',
			render: SetTextColorFn,
        },{
			title: 'Total',
            index: 'noncommercial_positions_total',
		},{
			title: 'Long (%)',
            index: 'noncommercial_positions_percantage_Long_Exposure',
		},{
			title: 'Short (%)',
            index: 'noncommercial_positions_percantage_Short_Exposure',
		},{
			title: 'Net (Non-Commercial)',
            index: 'noncommercial_positions_Net',
			render: SetTextColorFn,
		}]
      }, {
        index: 'Commercial',
        title: 'Commercial',
        columns: [{
            index: 'commercial_positions_long',
            title: 'Long',
            height: 90,
			render: SetTextColorFn,
        }, 
        {
            title: 'Short',
            index: 'commercial_positions_short',
			render: SetTextColorFn,
        },{
			title: 'Total',
            index: 'commercial_positions_total',
		},{
			title: 'Long (%)',
            index: 'commercial_positions_percantage_Long_Exposure',
		},{
			title: 'Short (%)',
            index: 'commercial_positions_percantage_Short_Exposure',
		},{
			title: 'Net (Commercial)',
            index: 'commercial_positions_Net',
			render: SetTextColorFn,
		}]
      }, {
        index: 'Open_Interest',
        title: 'Open Interest (OI)',
        columns: [{
            index: 'open_intrest',
            title: 'Total OI',
			render: SetTextColorFn,
        },{
            index: 'channge_in_open_intrest',
            title: 'Change in OI'
        }]
      }, {
        index: 'noncommercial_positions',
        title: 'Non-Commercial Positions',
        columns: [{
            index: 'change_in_noncommercial_long',
            title: 'Change in Long'
        },{
            index: 'change_in_noncommercial_short',
            title: 'Change in Short'
        },{
            index: 'channge_in_total',
            title: 'Change in Total'
        },{
            index: 'per_of_noncommercial_long',
            title: 'Long over OI (%)'
        },{
            index: 'per_of_noncommercial_short',
            title: 'Short over OI (%)'
        },{
            index: 'per_of_noncommercial_flip',
            title: 'FLIP*'
        }]
      }, {
        index: 'commercial_positions',
        title: 'Commercial Positions',
        columns: [{
            index: 'change_in_commercial_long',
            title: 'Change in Long'
        },{
            index: 'change_in_commercial_short',
            title: 'Change in Short'
        },{
            index: 'channge_in_commercial_total',
            title: 'Change in Total'
        },{
            index: 'per_of_commercial_long',
            title: 'Long over OI (%)'
        },{
            index: 'per_of_commercial_short',
            title: 'Short over OI (%)'
        },{
            index: 'per_of_commercial_flip',
            title: 'FLIP*'
        }]
      }, {
        index: 'Net_over_OI',
        title: 'Change in positions over OI',
        columns: [{
            index: 'Net_over_OI_Non_Commercial',
            title: 'Non-Commercial change over OI'
        },{
            index: 'Net_over_OI_Commercial',
            title: 'Commercial change over OI'
        }]
      }, {
        index: 'five_year_percentile',
        title: '5 Year Percentile',
        columns: [{
            index: 'five_year_percentile_Non_Commercial',
            title: 'Non-Commercial',
			render: SetTextColorFn,
        },{
            index: 'five_year_percentile_Commercial',
            title: 'Commercials'
        }]
      }, {
        index: 'Long_of_OI',
        title: 'Long of OI',
        columns: [{
            index: 'Long_of_OI_Non_Commercial',
            title: 'Non-Commercial'
        },{
            index: 'Long_of_OI_Commercial',
            title: 'Commercials'
        }]
      }, {
        index: 'Short_of_OI',
        title: 'Short of OI',
        columns: [{
            index: 'Short_of_OI_Non_Commercial',
            title: 'Non-Commercial'
        },{
            index: 'Short_of_OI_Commercial',
            title: 'Commercials (WILLCO)'
        }]
      }, {
        index: 'Relative_Long_Position',
        title: 'Relative Long Position',
        columns: [{
            index: 'Relative_Long_Position_Non_Commercial',
            title: 'Non-Commercial'
        },{
            index: 'Relative_Long_Position_Commercial',
            title: 'Commercials'
        }]
      }, {
        index: 'noncommercial_52_week_change',
        title: 'Non-Commercials 52-Week Change',
        columns: [{
            index: 'noncommercial_52_week_change_Long',
            title: 'Long',
			render: SetTextColorFn,
        },{
            index: 'noncommercial_52_week_change_Short',
            title: 'Short',
			render: SetTextColorFn,
        },{
            index: 'noncommercial_52_week_change_total',
            title: 'Total',
			render: SetTextColorFn,
        }]
      }, {
        index: 'commercial_52_week_change',
        title: 'Commercials 52-Week Change',
        columns: [{
            index: 'commercial_52_week_change_Long',
            title: 'Long',
			render: SetTextColorFn,
        },{
            index: 'commercial_52_week_change_Short',
            title: 'Short',
			render: SetTextColorFn,
        },{
            index: 'commercial_52_week_change_total',
            title: 'Total',
			render: SetTextColorFn,
        }]
      }, {
        index: 'Noncommercial_percentile_Rank',
        title: 'Non-Commercial percentile Rank',
        columns: [{
            index: 'Noncommercial_percentile_Rank_long',
            title: 'Long'
        },{
            index: 'Noncommercial_percentile_Rank_short',
            title: 'Short'
        },{
            index: 'Noncommercial_percentile_Rank_total',
            title: 'Total'
        }]
      },{
        index: 'commercial_percentile_Rank',
        title: 'Commercial percentile Rank',
        columns: [{
            index: 'commercial_percentile_Rank_long',
            title: 'Long'
        },{
            index: 'commercial_percentile_Rank_short',
            title: 'Short'
        },{
            index: 'commercial_percentile_Rank_total',
            title: 'Total'
        }]
      }, {
        index: 'Small_Speculators',
        title: 'Small Speculators',
        columns: [{
            index: 'Small_Speculators_Long',
            title: 'Long'
        },{
            index: 'Small_Speculators_Short',
            title: 'Short'
        },{
            index: 'Small_Speculators_Net',
            title: 'Net (Small Speculators)'
        }]
      }, {
        index: 'Small_Speculators_52_week_change',
        title: 'Small Speculators 52-Week Change',
        columns: [{
            index: 'Small_Speculators_52_week_change_total',
            title: 'Total'
        }]
      }, {
        index: 'Small_Speculators_Percentile_Rank',
        title: 'Small Speculators Percentile Rank',
        columns: [{
            index: 'Small_Speculators_Percentile_Rank_total',
            title: 'Total'
        }]
      }]
      return columns;
    }
  
    return {
      init: function(id) {
        initTable(setTableColumns(),id)
      }, 
      setNonComercial: function() {
		 var grid = FancyGrid.get('container');
		 grid.hideColumn([
'noncommercial_positions_total',
'noncommercial_positions_percantage_Long_Exposure',
'noncommercial_positions_percantage_Short_Exposure',
'commercial_positions_long',
'commercial_positions_short',
'commercial_positions_total',
'commercial_positions_percantage_Long_Exposure',
'commercial_positions_percantage_Short_Exposure',
'commercial_positions_Net',
'open_intrest',
'channge_in_open_intrest',
'change_in_noncommercial_long',
'change_in_noncommercial_short',
'channge_in_total',
'per_of_noncommercial_long',
'per_of_noncommercial_short',
'per_of_noncommercial_flip',
'change_in_commercial_long',
'change_in_commercial_short',
'channge_in_commercial_total',
'per_of_commercial_long',
'per_of_commercial_short',
'per_of_commercial_flip',
'Net_over_OI_Non_Commercial',
'Net_over_OI_Commercial',
'five_year_percentile_Non_Commercial',
'five_year_percentile_Commercial',
'Long_of_OI_Non_Commercial',
'Long_of_OI_Commercial',
'Short_of_OI_Non_Commercial',
'Short_of_OI_Commercial',
'Relative_Long_Position_Non_Commercial',
'Relative_Long_Position_Commercial',
'Small_Speculators_Long',
'Small_Speculators_Short',
'Small_Speculators_Net',

'five_year_percentile_Non_Commercial',
'five_year_percentile_Commercial',
'noncommercial_52_week_change_Long',
'noncommercial_52_week_change_Short',
'commercial_52_week_change_Long',
'commercial_52_week_change_Short',
'commercial_52_week_change_total',
'Noncommercial_percentile_Rank_long',
'Noncommercial_percentile_Rank_short',
'commercial_percentile_Rank_long',
'commercial_percentile_Rank_short',
'commercial_percentile_Rank_total',
'Small_Speculators_52_week_change_total',
'Small_Speculators_Percentile_Rank_total',
]);
		 grid.showColumn(['date',
'noncommercial_positions_long',
'noncommercial_positions_short',
'noncommercial_positions_Net',
'noncommercial_52_week_change_total',
'Noncommercial_percentile_Rank_total',]);
      },
  
      setCommercial: function(isCommercial) {
			var grid = FancyGrid.get('container');
		 grid.hideColumn([
		 'noncommercial_positions_long',
'noncommercial_positions_short',
'noncommercial_positions_Net',
'noncommercial_positions_total',
'noncommercial_positions_percantage_Long_Exposure',
'noncommercial_positions_percantage_Short_Exposure',
'commercial_positions_total',
'commercial_positions_percantage_Long_Exposure',
'commercial_positions_percantage_Short_Exposure',
'open_intrest',
'channge_in_open_intrest',
'change_in_noncommercial_long',
'change_in_noncommercial_short',
'channge_in_total',
'per_of_noncommercial_long',
'per_of_noncommercial_short',
'per_of_noncommercial_flip',
'change_in_commercial_long',
'change_in_commercial_short',
'channge_in_commercial_total',
'per_of_commercial_long',
'per_of_commercial_short',
'per_of_commercial_flip',
'Net_over_OI_Non_Commercial',
'Net_over_OI_Commercial',
'five_year_percentile_Non_Commercial',
'five_year_percentile_Commercial',
'Long_of_OI_Non_Commercial',
'Long_of_OI_Commercial',
'Short_of_OI_Non_Commercial',
'Short_of_OI_Commercial',
'Relative_Long_Position_Non_Commercial',
'Relative_Long_Position_Commercial',
'Small_Speculators_Long',
'Small_Speculators_Short',
'Small_Speculators_Net',
'five_year_percentile_Non_Commercial',
'five_year_percentile_Commercial',
'noncommercial_52_week_change_Long',
'noncommercial_52_week_change_Short',
'noncommercial_52_week_change_total',
'commercial_52_week_change_Long',
'commercial_52_week_change_Short',
'Noncommercial_percentile_Rank_long',
'Noncommercial_percentile_Rank_short',
'Noncommercial_percentile_Rank_total',
'commercial_percentile_Rank_long',
'commercial_percentile_Rank_short',
'Small_Speculators_52_week_change_total',
'Small_Speculators_Percentile_Rank_total',
]);
		 grid.showColumn(['date','commercial_positions_long',
'commercial_positions_short',
'commercial_positions_Net',
'commercial_52_week_change_total',
'commercial_percentile_Rank_total'
]);
      },
  
      setTotalReport: function(isTotalReport) {
			var grid = FancyGrid.get('container');
			grid.showColumn([
			'date',
'noncommercial_positions_long',
'noncommercial_positions_short',
'noncommercial_positions_total',
'noncommercial_positions_percantage_Long_Exposure',
'noncommercial_positions_percantage_Short_Exposure',
'noncommercial_positions_Net',
'commercial_positions_long',
'commercial_positions_short',
'commercial_positions_total',
'commercial_positions_percantage_Long_Exposure',
'commercial_positions_percantage_Short_Exposure',
'commercial_positions_Net',
'open_intrest',
'channge_in_open_intrest',
'change_in_noncommercial_long',
'change_in_noncommercial_short',
'channge_in_total',
'per_of_noncommercial_long',
'per_of_noncommercial_short',
'per_of_noncommercial_flip',
'change_in_commercial_long',
'change_in_commercial_short',
'channge_in_commercial_total',
'per_of_commercial_long',
'per_of_commercial_short',
'per_of_commercial_flip',
'Net_over_OI_Non_Commercial',
'Net_over_OI_Commercial',
'five_year_percentile_Non_Commercial',
'five_year_percentile_Commercial',
'Long_of_OI_Non_Commercial',
'Long_of_OI_Commercial',
'Short_of_OI_Non_Commercial',
'Short_of_OI_Commercial',
'Relative_Long_Position_Non_Commercial',
'Relative_Long_Position_Commercial',
'Small_Speculators_Long',
'Small_Speculators_Short',
'Small_Speculators_Net',
'five_year_percentile_Non_Commercial',
'five_year_percentile_Commercial',
'noncommercial_52_week_change_Long',
'noncommercial_52_week_change_Short',
'noncommercial_52_week_change_total',
'commercial_52_week_change_Long',
'commercial_52_week_change_Short',
'commercial_52_week_change_total',
'Noncommercial_percentile_Rank_long',
'Noncommercial_percentile_Rank_short',
'Noncommercial_percentile_Rank_total',
'commercial_percentile_Rank_long',
'commercial_percentile_Rank_short',
'commercial_percentile_Rank_total',
'Small_Speculators_52_week_change_total',
'Small_Speculators_Percentile_Rank_total',
]);
      },
	  setSmallSpaculators: function(isTotalReport) {
			var grid = FancyGrid.get('container');
			grid.hideColumn([
'noncommercial_positions_long',
'noncommercial_positions_short',
'noncommercial_positions_total',
'noncommercial_positions_percantage_Long_Exposure',
'noncommercial_positions_percantage_Short_Exposure',
'noncommercial_positions_Net',
'commercial_positions_long',
'commercial_positions_short',
'commercial_positions_total',
'commercial_positions_percantage_Long_Exposure',
'commercial_positions_percantage_Short_Exposure',
'commercial_positions_Net',
'open_intrest',
'channge_in_open_intrest',
'change_in_noncommercial_long',
'change_in_noncommercial_short',
'channge_in_total',
'per_of_noncommercial_long',
'per_of_noncommercial_short',
'per_of_noncommercial_flip',
'change_in_commercial_long',
'change_in_commercial_short',
'channge_in_commercial_total',
'per_of_commercial_long',
'per_of_commercial_short',
'per_of_commercial_flip',
'Net_over_OI_Non_Commercial',
'Net_over_OI_Commercial',
'five_year_percentile_Non_Commercial',
'five_year_percentile_Commercial',
'Long_of_OI_Non_Commercial',
'Long_of_OI_Commercial',
'Short_of_OI_Non_Commercial',
'Short_of_OI_Commercial',
'Relative_Long_Position_Non_Commercial',
'Relative_Long_Position_Commercial',
'five_year_percentile_Non_Commercial',
'five_year_percentile_Commercial',
'noncommercial_52_week_change_Long',
'noncommercial_52_week_change_Short',
'noncommercial_52_week_change_total',
'commercial_52_week_change_Long',
'commercial_52_week_change_Short',
'commercial_52_week_change_total',
'Noncommercial_percentile_Rank_long',
'Noncommercial_percentile_Rank_short',
'Noncommercial_percentile_Rank_total',
'commercial_percentile_Rank_long',
'commercial_percentile_Rank_short',
'commercial_percentile_Rank_total',

]);
grid.showColumn(['Small_Speculators_Long',
'Small_Speculators_Short',
'Small_Speculators_Net',
'Small_Speculators_52_week_change_total',
'Small_Speculators_Percentile_Rank_total',]);
      },
	  setSummary: function(isTotalReport) {
			var grid = FancyGrid.get('container');
			grid.hideColumn([
'noncommercial_positions_percantage_Long_Exposure',
'noncommercial_positions_percantage_Short_Exposure',
'noncommercial_positions_Net',
'commercial_positions_long',
'commercial_positions_short',
'commercial_positions_total',
'commercial_positions_percantage_Long_Exposure',
'commercial_positions_percantage_Short_Exposure',
'commercial_positions_Net',
'open_intrest',
'change_in_noncommercial_long',
'change_in_noncommercial_short',
'channge_in_total',
'per_of_noncommercial_long',
'per_of_noncommercial_short',
'per_of_noncommercial_flip',
'change_in_commercial_long',
'change_in_commercial_short',
'channge_in_commercial_total',
'per_of_commercial_long',
'per_of_commercial_short',
'per_of_commercial_flip',
'Net_over_OI_Non_Commercial',
'Net_over_OI_Commercial',
'five_year_percentile_Non_Commercial',
'five_year_percentile_Commercial',
'Long_of_OI_Non_Commercial',
'Long_of_OI_Commercial',
'Short_of_OI_Non_Commercial',
'Short_of_OI_Commercial',
'Relative_Long_Position_Non_Commercial',
'Relative_Long_Position_Commercial',
'Small_Speculators_Long',
'Small_Speculators_Short',
'Small_Speculators_Net',
'noncommercial_52_week_change_Long',
'noncommercial_52_week_change_Short',

'commercial_52_week_change_Long',
'commercial_52_week_change_Short',

'Noncommercial_percentile_Rank_long',
'Noncommercial_percentile_Rank_short',

'commercial_percentile_Rank_long',
'commercial_percentile_Rank_short',

'Small_Speculators_52_week_change_total',
'Small_Speculators_Percentile_Rank_total',
]);
grid.showColumn([
'date',
'noncommercial_positions_long',
'noncommercial_positions_short',
'noncommercial_positions_total',
'commercial_positions_long',
'commercial_positions_short',
'commercial_positions_total',
'channge_in_open_intrest',
'five_year_percentile_Non_Commercial',
'five_year_percentile_Commercial',
'noncommercial_52_week_change_total',
'commercial_52_week_change_total',
'Noncommercial_percentile_Rank_total',
'commercial_percentile_Rank_total',]);
      },
	  setRegular: function(isTotalReport) {
			var grid = FancyGrid.get('container');
			grid.hideColumn([
				'channge_in_open_intrest',
				'change_in_noncommercial_long',
				'change_in_noncommercial_short',
				'channge_in_total',
				'per_of_noncommercial_long',
				'per_of_noncommercial_short',
				'per_of_noncommercial_flip',
				'change_in_commercial_long',
				'change_in_commercial_short',
				'channge_in_commercial_total',
				'per_of_commercial_long',
				'per_of_commercial_short',
				'per_of_commercial_flip',
				'Net_over_OI_Non_Commercial',
				'Net_over_OI_Commercial',
				'five_year_percentile_Non_Commercial',
				'five_year_percentile_Commercial',
				'Long_of_OI_Non_Commercial',
				'Long_of_OI_Commercial',
				'Short_of_OI_Non_Commercial',
				'Short_of_OI_Commercial',
				'Relative_Long_Position_Non_Commercial',
				'Relative_Long_Position_Commercial',
				'Small_Speculators_Long',
				'Small_Speculators_Short',
				'Small_Speculators_Net',
				'noncommercial_52_week_change_Long',
				'noncommercial_52_week_change_Short',
				'commercial_52_week_change_Long',
				'commercial_52_week_change_Short',
				'Noncommercial_percentile_Rank_long',
				'Noncommercial_percentile_Rank_short',
				'commercial_percentile_Rank_long',
				'commercial_percentile_Rank_short',
				'Small_Speculators_52_week_change_total',
				'Small_Speculators_Percentile_Rank_total'
			]);
			grid.showColumn([
			'date',
			'noncommercial_positions_long',
			'noncommercial_positions_short',
			'noncommercial_positions_total',
			'noncommercial_positions_percantage_Long_Exposure',
			'noncommercial_positions_percantage_Short_Exposure',
			'noncommercial_positions_Net',
			'commercial_positions_long',
			'commercial_positions_short',
			'commercial_positions_total',
			'commercial_positions_percantage_Long_Exposure',
			'commercial_positions_percantage_Short_Exposure',
			'commercial_positions_Net',
			'open_intrest',
			'five_year_percentile_Non_Commercial',
			'five_year_percentile_Commercial',
			'noncommercial_52_week_change_total',
			'commercial_52_week_change_total',
			'Noncommercial_percentile_Rank_total',
			'commercial_percentile_Rank_total',
			]);
	  },
	  setCompressed: function(isTotalReport) {
			var grid = FancyGrid.get('container');
			grid.hideColumn([		
'per_of_noncommercial_long',
'per_of_noncommercial_short',
'per_of_noncommercial_flip',
'per_of_commercial_long',
'per_of_commercial_short',
'per_of_commercial_flip',
'Net_over_OI_Non_Commercial',
'Net_over_OI_Commercial',
'five_year_percentile_Non_Commercial',
'five_year_percentile_Commercial',
'Long_of_OI_Non_Commercial',
'Long_of_OI_Commercial',
'Short_of_OI_Non_Commercial',
'Short_of_OI_Commercial',
'Relative_Long_Position_Non_Commercial',
'Relative_Long_Position_Commercial',
'Small_Speculators_Long',
'Small_Speculators_Short',
'Small_Speculators_Net',
'five_year_percentile_Non_Commercial',
'five_year_percentile_Commercial',
'Small_Speculators_52_week_change_total',
'Small_Speculators_Percentile_Rank_total',
			]);
			grid.showColumn([
			'date',
'noncommercial_positions_long',
'noncommercial_positions_short',
'noncommercial_positions_total',
'noncommercial_positions_percantage_Long_Exposure',
'noncommercial_positions_percantage_Short_Exposure',
'noncommercial_positions_Net',
'commercial_positions_long',
'commercial_positions_short',
'commercial_positions_total',
'commercial_positions_percantage_Long_Exposure',
'commercial_positions_percantage_Short_Exposure',
'commercial_positions_Net',
'open_intrest',
'channge_in_open_intrest',
'change_in_noncommercial_long',
'change_in_noncommercial_short',
'channge_in_total',
'change_in_commercial_long',
'change_in_commercial_short',
'channge_in_commercial_total',
'noncommercial_52_week_change_Long',
'noncommercial_52_week_change_Short',
'noncommercial_52_week_change_total',
'commercial_52_week_change_Long',
'commercial_52_week_change_Short',
'commercial_52_week_change_total',
'Noncommercial_percentile_Rank_long',
'Noncommercial_percentile_Rank_short',
'Noncommercial_percentile_Rank_total',
'commercial_percentile_Rank_long',
'commercial_percentile_Rank_short',
'commercial_percentile_Rank_total',
			]);
	  }
	  
    }
  })();