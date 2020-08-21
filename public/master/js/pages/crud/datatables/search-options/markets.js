"use strict";
var KTDatatablesSearchOptionsColumnSearch = function() {
	
    $.fn.dataTable.Api.register('column().title()', function() {
        return $(this.header()).text().trim();
    });

    var initTable1 = function() {

        // begin first table
        var table = $('#kt_datatable').DataTable({
            responsive: true,

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
                        'type_name', 'market', 'name', 'Actions',
                    ],
                },
            },
			columns: [
				{
                    data: 'type_name'
                },
                {
                    data: 'market'
                },
				{
                    data: 'name'
                },
                {
                    data: 'Actions',
                    responsivePriority: -1
                },
            ],
            initComplete: function() {
                var thisTable = this;
                var rowFilter = $('<tr class="filter"></tr>').appendTo($(table.table().header()));

                this.api().columns().every(function() {
                    var column = this;
                    var input;

                    switch (column.title()) {
                        case 'Market Type':
								input = $(`<input type="text" class="form-control form-control-sm form-filter datatable-input" data-col-index="` + column.index() + `"/>`);
                            break;
                        case 'Market':
								input = $(`<input type="text" class="form-control form-control-sm form-filter datatable-input" data-col-index="` + column.index() + `"/>`);
                            break;
						case 'Name':
								input = $(`<input type="text" class="form-control form-control-sm form-filter datatable-input" data-col-index="` + column.index() + `"/>`);
                            break;	
                        case 'Actions':
                            var search = $(`
                                <button class="btn btn-primary kt-btn btn-sm kt-btn--icon d-block float-left">
							        <span>
							            <i class="la la-search"></i>
							            <span>Search</span>
							        </span>
							    </button>`);

                            var reset = $(`
                                <button class="btn btn-secondary kt-btn btn-sm kt-btn--icon  float-right my-0">
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
                hideSearchColumnResponsive();
                // recheck on window resize
                window.onresize = hideSearchColumnResponsive;

                $('#kt_datepicker_1,#kt_datepicker_2').datepicker();
            },
            columnDefs: [
			{
				targets: -1,
				width: '180px',
			}
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

