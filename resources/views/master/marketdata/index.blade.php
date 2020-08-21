{{-- Extends layout --}}
@extends('master.layout.default')
@section('css')
	<link href="{{ asset('master/plugins/custom/datatables/datatables.bundle.css') }}" rel="stylesheet" type="text/css"/>
@endsection
{{-- Content --}}
@section('content')

		<!--begin::Entry-->
		<div class="d-flex flex-column-fluid">
			<!--begin::Container-->
			<div class=" container ">
				
				
				
				<!--begin::Card-->
				<div class="card card-custom">
					<div class="card-header">
						<div class="card-title">
							<span class="card-icon"><i class="flaticon2-layers text-primary"></i></span>
							<h3 class="card-label">Market Data list</h3>
						</div>
						<div class="card-toolbar">
							<!--begin::Dropdown-->
							<div class="dropdown dropdown-inline mr-2">
								<a type="button" class="btn btn-light-primary font-weight-bolder" href="{{route('marketdata.create')}}">
									<i class="la la-plus"></i> Add new
								</a>
							</div>
							<!--end::Dropdown-->
						</div>
					</div>
					<div class="card-body">
						<!--begin: Datatable-->
						@if(Session::has('success'))
							<div class="alert alert-success text-center"><span class="glyphicon glyphicon-ok"></span><em> {!! session('success') !!}</em></div>
						@endif
						@if(Session::has('error'))
							<div class="alert alert-danger text-center"><span class="glyphicon glyphicon-remove"></span><em> {!! session('error') !!}</em></div>
						@endif
						<table class="table table-separate table-head-custom table-checkable" id="kt_datatable">
							<thead>
								<tr>
								<th>Actions</th>
								  <th>Market</th> 
								  <th>Date</th>
								  <th>Noncommercial positions long</th>
								  <th>Noncommercial positions short</th>
								  <th>Noncommercial positions spreading</th>
								  <th>Commercial positions long</th>
								  <th>Commercial positions short</th>
								  <th>Nonreportable positions short</th>
								  <th>Nonreportable positions long</th>
								  <th>Open intrest</th>
								  <th>Total reportable poitions long</th>
								  <th>Total reportable poitions short</th>
								  <th>Channge in open intrest</th>
								  <th>Change in noncommercial long</th>
								  <th>Change in noncommercial short</th>
								  <th>Change in noncommercial spreading</th>
								  <th>Change in commercial long</th>
								  <th>Change in commercial short</th>
								  <th>Change in totalreportable long</th>
								  <th>Change in totalreportable short</th>
								  <th>Change in non totalreportable long</th>
								  <th>Change in non totalreportable short</th>
								  <th>Per of open intrest all</th>
								  <th>Per of noncommercial long</th>
								  <th>Per of noncommercial short</th>
								  <th>Per of noncommercial spreading</th>
								  
								</tr>
							</thead>
							<tfoot>
								<tr>
									<th>Actions</th>
								  <th>Market</th>
								  <th>Date</th>
								  <th>Noncommercial positions long</th>
								  <th>Noncommercial positions short</th>
								  <th>Noncommercial positions spreading</th>
								  <th>Commercial positions long</th>
								  <th>Commercial positions short</th>
								  <th>Nonreportable positions short</th>
								  <th>Nonreportable positions long</th>
								  <th>Open intrest</th>
								  <th>Total reportable poitions long</th>
								  <th>Total reportable poitions short</th>
								  <th>Channge in open intrest</th>
								  <th>Change in noncommercial long</th>
								  <th>Change in noncommercial short</th>
								  <th>Change in noncommercial spreading</th>
								  <th>Change in commercial long</th>
								  <th>Change in commercial short</th>
								  <th>Change in totalreportable long</th>
								  <th>Change in totalreportable short</th>
								  <th>Change in non totalreportable long</th>
								  <th>Change in non totalreportable short</th>
								  <th>Per of open intrest all</th>
								  <th>Per of noncommercial long</th>
								  <th>Per of noncommercial short</th>
								  <th>Per of noncommercial spreading</th>
								  
								</tr>
						   </tfoot>
						</table>
						<!--end: Datatable-->
					</div>
				</div>
				<!--end::Card-->

			</div>
			<!--end::Container-->
		</div>
		<!--end::Entry-->
@endsection

{{-- Scripts Section --}}
@section('scripts')
		<script type="text/javascript">
			var list = "{!!route('marketdata.list')!!}";
			var csrf_token=  $('meta[name="csrf-token"]').attr('content');
		</script>
		<script src="{{ asset('master/js/pages/features/miscellaneous/sweetalert2.js') }}"></script>
		<script src="{{ asset('master/plugins/custom/datatables/datatables.bundle.js') }}"></script>
		<script src="{{ asset('master/js/pages/crud/datatables/search-options/marketdata.js?'.uniqid()) }}"></script>
		<script>
		$(document.body).on('click', '.delete', function(e){
				var form = $(this).closest('form');
				e.preventDefault();  
				Swal.fire({
					title: "Are you sure?",
					text: "You won\"t be able to revert this!",
					icon: "warning",
					showCancelButton: true,
					confirmButtonText: "Yes, delete it!"
				}).then(function(result) {
					if (result.value) {
						form.submit();
					}
				});
			
		});
		</script>
@endsection
