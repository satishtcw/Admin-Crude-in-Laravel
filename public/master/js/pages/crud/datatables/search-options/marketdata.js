"use strict";
var KTDatatablesSearchOptionsColumnSearch = function() {
	
    $.fn.dataTable.Api.register('column().title()', function() {
        return $(this.header()).text().trim();
    });

    var initTable1 = function() {

        // begin first table
        var table = $('#kt_datatable').DataTable({
            //responsive: true,
			scrollX: true,
            // Pagination settings
            dom: `<'row'<'col-sm-12'tr>>
			<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>`,
            // read more: https://datatables.net/examples/basic_init/dom.html

            lengthMenu: [5, 10, 25, 50],

            pageLength: 10,

            language: {
                'lengthMenu': 'Display _MENU_',
            },

            searchDelay: 500,
            processing: true,
            serverSide: true,
            ajax: {
                url: list,
                type: 'POST',
				headers: {
				  'X-CSRF-Token': $('meta[name="_token"]').attr('content')
				},
                data: {
                    columnsDef: [
						'Actions',
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
						'per_of_noncommercial_spreading', 
						
                    ],
                },
            },
			columns: [
				{data: 'Actions', responsivePriority: -1 },
				{data: 'market' }, 
				{data: 'date' }, 
				{data: 'noncommercial_positions_long' }, 
				{data: 'noncommercial_positions_short' }, 
				{data: 'noncommercial_positions_spreading' }, 
				{data: 'commercial_positions_long' }, 
				{data: 'commercial_positions_short' }, 
				{data: 'nonreportable_positions_short' }, 
				{data: 'nonreportable_positions_long' }, 
				{data: 'open_intrest' }, 
				{data: 'total_reportable_poitions_long' }, 
				{data: 'total_reportable_poitions_short' }, 
				{data: 'channge_in_open_intrest' }, 
				{data: 'change_in_noncommercial_long' }, 
				{data: 'change_in_noncommercial_short' }, 
				{data: 'change_in_noncommercial_spreading' }, 
				{data: 'change_in_commercial_long' }, 
				{data: 'change_in_commercial_short' }, 
				{data: 'change_in_totalreportable_long' }, 
				{data: 'change_in_totalreportable_short' }, 
				{data: 'change_in_non_totalreportable_long' }, 
				{data: 'change_in_non_totalreportable_short' }, 
				{data: 'per_of_open_intrest_all' }, 
				{data: 'per_of_noncommercial_long' }, 
				{data: 'per_of_noncommercial_short' }, 
				{data: 'per_of_noncommercial_spreading' }, 
            ],
            initComplete: function() {
                var thisTable = this;
                var rowFilter = $('<tr class="filter"></tr>').appendTo($(table.table().header()));

                this.api().columns().every(function() {
                    var column = this;
                    var input;

                    switch (column.title()) {
                        case 'Market':	
							input = $(`<input type="text" class="form-control form-control-sm form-filter datatable-input" data-col-index="` + column.index() + `"/>`); 
						break;
						case 'Date':	
							input = $(`<input type="text" class="form-control form-control-sm form-filter datatable-input" data-col-index="` + column.index() + `"/>`); 
						break;
						case 'Noncommercial positions long':	
							input = $(`<input type="text" class="form-control form-control-sm form-filter datatable-input" data-col-index="` + column.index() + `"/>`);
						break;
						case 'Noncommercial positions short':	
							input = $(`<input type="text" class="form-control form-control-sm form-filter datatable-input" data-col-index="` + column.index() + `"/>`);
						break;
						case 'Noncommercial positions spreading':	
							input = $(`<input type="text" class="form-control form-control-sm form-filter datatable-input" data-col-index="` + column.index() + `"/>`);
						break;
						case 'Commercial positions long':	
							input = $(`<input type="text" class="form-control form-control-sm form-filter datatable-input" data-col-index="` + column.index() + `"/>`); 
						break;
						case 'Commercial positions short':	
							input = $(`<input type="text" class="form-control form-control-sm form-filter datatable-input" data-col-index="` + column.index() + `"/>`); 
						break;
						case 'Nonreportable positions short':	
							input = $(`<input type="text" class="form-control form-control-sm form-filter datatable-input" data-col-index="` + column.index() + `"/>`);
						break;
						case 'Nonreportable positions long':	
							input = $(`<input type="text" class="form-control form-control-sm form-filter datatable-input" data-col-index="` + column.index() + `"/>`); 
						break;
						case 'Open intrest':	
							input = $(`<input type="text" class="form-control form-control-sm form-filter datatable-input" data-col-index="` + column.index() + `"/>`); 
						break;
						case 'Total reportable poitions long':	
							input = $(`<input type="text" class="form-control form-control-sm form-filter datatable-input" data-col-index="` + column.index() + `"/>`); 
						break;
						case 'Total reportable poitions short':	
							input = $(`<input type="text" class="form-control form-control-sm form-filter datatable-input" data-col-index="` + column.index() + `"/>`); 
						break;
						case 'Channge in open intrest':	
							input = $(`<input type="text" class="form-control form-control-sm form-filter datatable-input" data-col-index="` + column.index() + `"/>`); 
						break;
						case 'Change in noncommercial long':	
							input = $(`<input type="text" class="form-control form-control-sm form-filter datatable-input" data-col-index="` + column.index() + `"/>`);
						 break;
						case 'Change in noncommercial short':	
							input = $(`<input type="text" class="form-control form-control-sm form-filter datatable-input" data-col-index="` + column.index() + `"/>`);
						 break;
						case 'Change in noncommercial spreading':	
							input = $(`<input type="text" class="form-control form-control-sm form-filter datatable-input" data-col-index="` + column.index() + `"/>`); 
						break;
						case 'Change in commercial long':	
							input = $(`<input type="text" class="form-control form-control-sm form-filter datatable-input" data-col-index="` + column.index() + `"/>`);
						 break;
						case 'Change in commercial short':	
							input = $(`<input type="text" class="form-control form-control-sm form-filter datatable-input" data-col-index="` + column.index() + `"/>`); 
						break;
						case 'Change in totalreportable long':	
							input = $(`<input type="text" class="form-control form-control-sm form-filter datatable-input" data-col-index="` + column.index() + `"/>`); 
						break;
						case 'Change in totalreportable short':	
							input = $(`<input type="text" class="form-control form-control-sm form-filter datatable-input" data-col-index="` + column.index() + `"/>`); 
						break;
						case 'Change in non totalreportable long':	
							input = $(`<input type="text" class="form-control form-control-sm form-filter datatable-input" data-col-index="` + column.index() + `"/>`); 
						break;
						case 'Change in non totalreportable short':	
							input = $(`<input type="text" class="form-control form-control-sm form-filter datatable-input" data-col-index="` + column.index() + `"/>`); 
						break;
						case 'Per of open intrest all':	
							input = $(`<input type="text" class="form-control form-control-sm form-filter datatable-input" data-col-index="` + column.index() + `"/>`); 
						break;
						case 'Per of noncommercial long':	
							input = $(`<input type="text" class="form-control form-control-sm form-filter datatable-input" data-col-index="` + column.index() + `"/>`); 
						break;
						case 'Per of noncommercial short':	
							input = $(`<input type="text" class="form-control form-control-sm form-filter datatable-input" data-col-index="` + column.index() + `"/>`); 
						break;
						case 'Per of noncommercial spreading':	
							input = $(`<input type="text" class="form-control form-control-sm form-filter datatable-input" data-col-index="` + column.index() + `"/>`); 
						break;
                        case 'Actions':
                            var search = $(`
                                <button class="btn btn-primary kt-btn btn-sm kt-btn--icon d-block">
							        <span>
							            <i class="la la-search"></i>
							            <span>Search</span>
							        </span>
							    </button>`);

                            var reset = $(`
                                <button class="btn btn-secondary kt-btn btn-sm kt-btn--icon">
							        <span>
							           <i class="la la-close"></i>
							           <span>Reset</span>
							        </span>
							    </button>`);

                            $('<th>').append(search).append(reset).appendTo(rowFilter);

                            $(search).on('click', function(e) {
                                e.preventDefault();
                                var params = {};
                                $(rowFilter).find('.datatable-input').each(function() {
                                    var i = $(this).data('col-index');
                                    if (params[i]) {
                                        params[i] += '|' + $(this).val();
                                    } else {
                                        params[i] = $(this).val();
                                    }
                                });
                                $.each(params, function(i, val) {
                                    // apply search params to datatable
                                    table.column(i).search(val ? val : '', false, false);
                                });
                                table.table().draw();
                            });

                            $(reset).on('click', function(e) {
                                e.preventDefault();
                                $(rowFilter).find('.datatable-input').each(function(i) {
                                    $(this).val('');
                                    table.column($(this).data('col-index')).search('', false, false);
                                });
                                table.table().draw();
                            });
                            break;
                    }

                    if (column.title() !== 'Actions') {
                        $(input).appendTo($('<th>').appendTo(rowFilter));
                    }
                });

                // hide search column for responsive table
                var hideSearchColumnResponsive = function() {
                    thisTable.api().columns().every(function() {
                        var column = this
                        if (column.responsiveHidden()) {
                            $(rowFilter).find('th').eq(column.index()).show();
                        } else {
                            $(rowFilter).find('th').eq(column.index()).hide();
                        }
                    })
                };

                // init on datatable load
                //hideSearchColumnResponsive();
                // recheck on window resize
                //window.onresize = hideSearchColumnResponsive;

                $('#kt_datepicker_1,#kt_datepicker_2').datepicker();
            },
            columnDefs: [
						'Actions',
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
						'per_of_noncommercial_spreading', 
						
            ],
        });

    };

    return {

        //main function to initiate the module
        init: function() {
            initTable1();
        },

    };

}();

jQuery(document).ready(function() {
    KTDatatablesSearchOptionsColumnSearch.init();
	
});

