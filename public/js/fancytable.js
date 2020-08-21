var Table = (function(){
  
  var config = []

  function initTable(tableColumns) {
    new FancyGrid({
      renderTo: 'container',
      theme: 'gray',
      exporter: true,
      tbar: [{
        text: '&nbsp;<b> Data Size:</b> ',
        type: 'text'
      }, {
        type: 'combo',
        width: 100,
        data: [{
          value: 100,
          text: '100 rows'
        },{
          value: 1000,
          text: '1,000 rows'
        },{
          value: 10000,
          text: '10,000 rows'
        },{
          value: 100000,
          text: '100,000 rows'
        },{
          value: 500000,
          text: '500,000 rows'
        }],
        displayKey: 'text',
        valueKey: 'value',
        value: 10000,
        events: [{
          change: function(combo, value) {
            var grid = FancyGrid.get('container');

            grid.update();
          }
        }]
      }, {
        text: 'Export to Excel',
        handler: function() {
            this.exportToExcel();
        }
      }],
      data: {
        proxy: {
          url: './data.json',
          reader: {
            root: 'items'
          }
        }  
      },
      paging: {
        pageSize: 30
      },
      selModel: {
        type: 'rows',
        memory: true
      },
      trackOver: true,
      filter: true,
      searching: true,
      defaults: {
        type: 'string',
        width: 100,
        sortable: true,
        draggable: true,
        resizable: true,
        filter: {
          header: true
        }
      },
      columns: tableColumns,
      events: [{
        init: function(grid) {
          grid.showLoadMask('Initializing');
          // grid.setData([]);
          grid.update();
          grid.hideLoadMask();
        }
      }]
    });
  }

  function setTableColumns() {
    var columns = []
    columns = [{
      // rowdrag: true,
      index: 'date',
      title: 'Date',
      locked: true,
    }, {
      index: 'non_commercial',
      title: 'Non Commercial',
      columns: [{
        index: 'non_commercial_positions_long',
        title: 'Position - Long',
        height: 90,
        align: 'right',
        cellAlign: 'right',         
        headerCls: 'header-color-blue',
      }, 
      {
        title: 'Short',
        index: 'non_commercial_positions_short',
        headerCls: 'header-color-blue',
      }, {
        title: 'Spreading',
        index: 'non_commercial_positions_spreading',
        headerCls: 'header-color-blue',
      }, {
        title: 'Chng In - Long',
        index: 'non_commercial_changed_in_long',
        headerCls: 'header-color-green',
      }, {
        title: 'Short',
        index: 'non_commercial_changed_in_short',
        headerCls: 'header-color-green',
      }, {
        title: 'Spreading',
        index: 'non_commercial_changed_in_spreading',
        headerCls: 'header-color-green',
      }, {
        title: 'Long (%)',
        index: 'non_commercial_percent_long',
        type: 'grossloss',
        width: 70,
        locked: true,
        ellipsis: true,
        resizable: false,
        headerCls: 'header-cell-gross-loss',
        sparkConfig: {
          grossColor: '#6fb270',
          lossColor: '#dc6b67',
          showOnMax: true,
          percents: true
        }
      }, {
        title: 'Short (%)',
        index: 'non_commercial_percent_short',
        width: 70,
        type: 'grossloss',
        locked: true,
        ellipsis: true,
        resizable: false,
        headerCls: 'header-cell-gross-loss',
        sparkConfig: {
          grossColor: '#6fb270',
          lossColor: '#dc6b67',
          showOnMax: true,
          percents: true
        }
      }]
    }, {
      index: 'commercial',
      title: 'Commercial',
      columns: [{
        title: 'Position - Long',
        height: 90,
        index: 'commercial_positions_long'
      }, 
      {
        title: 'Short',
        index: 'commercial_positions_short'
      }, {
        title: 'Spreading',
        index: 'commercial_positions_spreading'
      }, {
        title: 'Chng In - Long',
        index: 'commercial_changed_in_long'
      }, {
        title: 'Short',
        index: 'commercial_changed_in_short'
      }, {
        title: 'Spreading',
        index: 'commercial_changed_in_spreading'
      }]
    }, {
      index: 'total_reportable',
      title: 'Total Reportable',
      columns: [{
        title: 'Position - Long',
        height: 90,
        index: 'total_reportable_positions_long'
      }, 
      {
        title: 'Short',
        index: 'total_reportable_positions_short'
      }, {
        title: 'Chng In - Long',
        index: 'total_reportable_changed_in_long'
      }, {
        title: 'Short',
        index: 'total_reportable_changed_in_short'
      }]
    }, {
      index: 'non_total_reportable',
      title: 'Non Total Reportable',
      columns: [{
        title: 'Position - Long',
        height: 90,
        index: 'non_total_reportable_positions_long'
      }, 
      {
        title: 'Short',
        index: 'non_total_reportable_positions_short'
      }, {
        title: 'Chng In - Long',
        index: 'non_total_reportable_changed_in_long'
      }, {
        title: 'Position Short',
        index: 'non_total_reportable_changed_in_short'
      }]
    }, {
      index: 'open_interesting',
      title: 'Open Interesting',
      columns: [{
        title: 'Normal',
        index: 'open_interesting_normal'
      }, {
        title: 'Chng In - Long',
        index: 'open_interesting_changed_in'
      }]
    }]

    return columns;
  }

  return {
    init: function() {
      initTable(setTableColumns())
    }, 

    setNonComercial: function(isNoCommercial) {

    },

    setCommercial: function(isCommercial) {

    },

    setTotalReport: function(isTotalReport) {

    },

    setTotalReport: function(isTotalReport) {

    }
  }
})();