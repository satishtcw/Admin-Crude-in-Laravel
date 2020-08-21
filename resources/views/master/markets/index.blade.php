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
							<h3 class="card-label">Markets list</h3>
						</div>
						<div class="card-toolbar">
							
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
								  <th>Market Type</th>
								  <th>Market</th>
								  <th>Name</th>
								  <th>Actions</th>
								</tr>
							</thead>
							<tfoot>
								<tr>
								  <th>Type name</th>
								  <th>Date added</th>
								  <th>Name</th>
								  <th>Actions</th>
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
			var list = "{!!route('markets.list')!!}";
			var csrf_token=  $('meta[name="csrf-token"]').attr('content');
		</script>
		<script src="{{ asset('master/js/pages/features/miscellaneous/sweetalert2.js') }}"></script>
		<script src="{{ asset('master/plugins/custom/datatables/datatables.bundle.js') }}"></script>
		<script src="{{ asset('master/js/pages/crud/datatables/search-options/markets.js?'.uniqid()) }}"></script>
		
@endsection
