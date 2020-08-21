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
							<h3 class="card-label">Market details ({{$markets->name}})</h3>
						</div>
					</div>
					{!! Form::open(array('url' => route('markets.update',$markets->id),'method'=>'PUT', 'class'=>'form-horizontal','role'=>'form','id'=>'edit_markets')) !!}
					<div class="card-body">
						<div class="form-group row">
							<label class="col-2 col-form-label">Market Type:</label>
							<div class="col-10">
								<select class="form-control " id="type" name="type">
										<option label="Label"></option>
									 @foreach(  App\Model\Atypes::orderBy('type_name')->get() as $type )
										<option 
											@if($type->id == $markets->type)
												selected="selected"
											@endif 
											value="{{ $type->id }}">{{ $type->type_name }}
										</option>
                                        @endforeach
									
								</select>
							</div>
						</div>
						
						<div class="form-group row">
							<label class="col-2 col-form-label">Market:</label>
							<div class="col-10">
								<input class="form-control" disabled="disabled" name="market" type="text" value="{{$markets->market}}" id="market">
							</div>
						</div>
						<div class="form-group row">
							<label class="col-2 col-form-label">Market Name:</label>
							<div class="col-10">
								<input class="form-control" name="name" type="text" value="{{$markets->name}}" id="name">
							</div>
						</div>
					</div>
					<div class="card-footer">
						<div class="row">
							<div class="col-2">
							</div>
							<div class="col-10">
								<button type="submit" class="btn btn-success mr-2">Update</button>
								<a type="button" class="btn btn-secondary font-weight-bold" href="{{route('markets.index')}}"><i class="la la-arrow-left"></i>Back to list</a>
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
<script src="{{ asset('master/js/pages/crud/forms/widgets/select2.js') }}"></script>
<script src="{{ asset('master/js/jquery.validate.min.js') }}"></script>
<script>
$(document).ready( function (){
	$('#type').select2({
		placeholder: 'Select a Market Type.',
		allowClear: true
	});
$( "#edit_markets" ).validate({
		rules: {
			type: "required",
			market: "required",
			name: "required",
		},
		messages: {
			type: "Please select Market Type name.",
			market: "Market field can\'t be empty.",
			name: "Market Name field can\'t be empty.",
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