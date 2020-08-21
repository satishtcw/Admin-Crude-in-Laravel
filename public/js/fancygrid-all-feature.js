var AllFutureTable = (function(){
  
    var config = []
  
    function initTable(tableColumns) {
      new FancyGrid({
        renderTo: 'container',
        theme: 'gray',
        exporter: true,
        tbar: [{
          text: 'Export to Excel',
          handler: function() {
              this.exportToExcel();
          }
        }],
        data: {
          proxy: {
            url: './allfuture.json',
            reader: {
              root: 'items'
            }
          }  
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
          align: 'center',
          cellAlign: 'center',
          filter: {
            header: true
          }
        },
        columns: tableColumns,
      });
    }
  
    function setTableColumns() {
      var columns = []
      columns = [{
        index: 'category',
        locked: true,
        cellAlign: 'left',
        minWidth: 150,
        cls: 'fancy-customized-column-cls',
      }, {
        index: 'commercial',
        title: 'Commercial',
        columns: [{
          index: 'commercial_52w_change',
          title: '52W CHANGE',
          height: 90,
        }, 
        {
          title: 'COT EXTR',
          index: 'commercial_cot_extr',
        }]
      }, {
        index: 'large_speculators',
        title: 'Large Speculators',
        columns: [{
          title: '52W CHANGE',
          index: 'large_speculators_52w_change'
        }, 
        {
          title: 'COT EXTR',
          index: 'large_speculators_cot_extr'
        }]
      }, {
        index: 'small_speculators',
        title: 'Small Speculators',
        columns: [{
          title: '52W CHANGE',
          height: 90,
          index: 'small_speculators_52w_change'
        }, 
        {
          title: 'COT_EXTR',
          index: 'small_speculators_cot_extr'
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