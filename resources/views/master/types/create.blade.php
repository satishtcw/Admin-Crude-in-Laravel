{{-- Extends layout --}}
@extends('master.layout.default')
@section('css')
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
							<h3 class="card-label">Add new market type</h3>
						</div>
					</div>
					{!! Form::open(array('url' => route('types.store'),'method'=>'POST', 'class'=>'form-horizontal','role'=>'form','id'=>'add_types')) !!}
					<div class="card-body">
						<div class="form-group row">
							<label class="col-2 col-form-label">Type name:</label>
							<div class="col-10">
								<input class="form-control" name="type_name" type="text" value="" id="type_name">
							</div>
						</div>
					</div>
					<div class="card-footer">
						<div class="row">
							<div class="col-2">
							</div>
							<div class="col-10">
								<button type="submit" class="btn btn-success mr-2">Add</button>
								<a type="button" class="btn btn-secondary font-weight-bold" href="{{route('types.index')}}"><i class="la la-arrow-left"></i>Back to list</a>
							</div>
						</div>
					</div>
					{!! Form::close() !!}
				</div>
				<!--end::Card-->

			</div>
			<!--end::Container-->
		</div>
		<!--end::Entry-->
@endsection

{{-- Scripts Section --}}	
@section('scripts')
<script src="{{ asset('master/js/jquery.validate.min.js') }}"></script>
<script>
$(document).ready( function (){
$( "#add_types" ).validate({
		rules: {
			type_name: "required",
		},
		messages: {
			type_name: "Please enter market type name",
		},
		errorElement: "em",
		errorPlacement: function ( error, element ) {
			// Add the `help-block` class to the error element
			error.addClass( "help-block" );

			if ( element.prop( "type" ) === "checkbox" ) {
				error.insertAfter( element.parent( "label" ) );
			} else {
				error.insertAfter( element );
			}
		},
		highlight: function ( element, errorClass, validClass ) {
			$( element ).parents( ".col-sm-12" ).addClass( "has-error" ).removeClass( "has-success" );
		},
		unhighlight: function (element, errorClass, validClass) {
			$( element ).parents( ".col-sm-12" ).addClass( "has-success" ).removeClass( "has-error" );
		},submitHandler: function(form) {
			form.submit();
		},
	});
});
</script>
@endsection
