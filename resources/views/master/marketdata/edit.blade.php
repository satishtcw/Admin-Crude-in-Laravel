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
							<h3 class="card-label">Market data details ({{$marketdata->market}})</h3>
						</div>
					</div>
					{!! Form::open(array('url' => route('marketdata.update',$marketdata->id),'method'=>'PUT', 'class'=>'form-horizontal','role'=>'form','id'=>'edit_marketdata')) !!}
					<div class="card-body">
						<div class="form-group row">
							<label class="col-2 col-form-label">Market:</label>
							<div class="col-10">
								<input class="form-control" name="market" type="text" value="{{$marketdata->markets->market}}" id="market" disabled>
							</div>
						</div>
						<div class="form-group row">
							<label class="col-2 col-form-label">Date:</label>
							<div class="col-10">
								<input class="form-control" name="date" type="text" value="{{$marketdata->date}}" id="date" disabled>
							</div>
						</div>
						<div class="form-group row">
							<label class="col-2 col-form-label">Noncommercial positions long:</label>
							<div class="col-10">
								<input class="form-control" name="noncommercial_positions_long" type="text" value="{{$marketdata->noncommercial_positions_long}}" id="noncommercial_positions_long">
							</div>
						</div>
						<div class="form-group row">
							<label class="col-2 col-form-label">Noncommercial positions short:</label>
							<div class="col-10">
								<input class="form-control" name="noncommercial_positions_short" type="text" value="{{$marketdata->noncommercial_positions_short}}" id="noncommercial_positions_short">
							</div>
						</div>
						<div class="form-group row">
							<label class="col-2 col-form-label">Noncommercial positions spreading:</label>
							<div class="col-10">
								<input class="form-control" name="noncommercial_positions_spreading" type="text" value="{{$marketdata->noncommercial_positions_spreading}}" id="noncommercial_positions_spreading">
							</div>
						</div>
						<div class="form-group row">
							<label class="col-2 col-form-label">Commercial positions long:</label>
							<div class="col-10">
								<input class="form-control" name="commercial_positions_long" type="text" value="{{$marketdata->commercial_positions_long}}" id="commercial_positions_long">
							</div>
						</div>
						<div class="form-group row">
							<label class="col-2 col-form-label">Commercial positions short:</label>
							<div class="col-10">
								<input class="form-control" name="commercial_positions_short" type="text" value="{{$marketdata->commercial_positions_short}}" id="commercial_positions_short">
							</div>
						</div>
						<div class="form-group row">
							<label class="col-2 col-form-label">Nonreportable positions short:</label>
							<div class="col-10">
								<input class="form-control" name="nonreportable_positions_short" type="text" value="{{$marketdata->nonreportable_positions_short}}" id="nonreportable_positions_short">
							</div>
						</div>
						<div class="form-group row">
							<label class="col-2 col-form-label">Nonreportable positions long:</label>
							<div class="col-10">
								<input class="form-control" name="nonreportable_positions_long" type="text" value="{{$marketdata->nonreportable_positions_long}}" id="nonreportable_positions_long">
							</div>
						</div>
						<div class="form-group row">
							<label class="col-2 col-form-label">Open intrest:</label>
							<div class="col-10">
								<input class="form-control" name="open_intrest" type="text" value="{{$marketdata->open_intrest}}" id="open_intrest">
							</div>
						</div>
						<div class="form-group row">
							<label class="col-2 col-form-label">Total reportable poitions long:</label>
							<div class="col-10">
								<input class="form-control" name="total_reportable_poitions_long" type="text" value="{{$marketdata->total_reportable_poitions_long}}" id="total_reportable_poitions_long">
							</div>
						</div>
						<div class="form-group row">
							<label class="col-2 col-form-label">Total reportable poitions short:</label>
							<div class="col-10">
								<input class="form-control" name="total_reportable_poitions_short" type="text" value="{{$marketdata->total_reportable_poitions_short}}" id="total_reportable_poitions_short">
							</div>
						</div>
						<div class="form-group row">
							<label class="col-2 col-form-label">Channge in open intrest:</label>
							<div class="col-10">
								<input class="form-control" name="channge_in_open_intrest" type="text" value="{{$marketdata->channge_in_open_intrest}}" id="channge_in_open_intrest">
							</div>
						</div>
						<div class="form-group row">
							<label class="col-2 col-form-label">Change in noncommercial long:</label>
							<div class="col-10">
								<input class="form-control" name="change_in_noncommercial_long" type="text" value="{{$marketdata->change_in_noncommercial_long}}" id="change_in_noncommercial_long">
							</div>
						</div>
						<div class="form-group row">
							<label class="col-2 col-form-label">Change in noncommercial short:</label>
							<div class="col-10">
								<input class="form-control" name="change_in_noncommercial_short" type="text" value="{{$marketdata->change_in_noncommercial_short}}" id="change_in_noncommercial_short">
							</div>
						</div>
						<div class="form-group row">
							<label class="col-2 col-form-label">Change in noncommercial spreading:</label>
							<div class="col-10">
								<input class="form-control" name="change_in_noncommercial_spreading" type="text" value="{{$marketdata->change_in_noncommercial_spreading}}" id="change_in_noncommercial_spreading">
							</div>
						</div>
						<div class="form-group row">
							<label class="col-2 col-form-label">Change in commercial long:</label>
							<div class="col-10">
								<input class="form-control" name="change_in_commercial_long" type="text" value="{{$marketdata->change_in_commercial_long}}" id="change_in_commercial_long">
							</div>
						</div>
						<div class="form-group row">
							<label class="col-2 col-form-label">Change in commercial short:</label>
							<div class="col-10">
								<input class="form-control" name="change_in_commercial_short" type="text" value="{{$marketdata->change_in_commercial_short}}" id="change_in_commercial_short">
							</div>
						</div>
						<div class="form-group row">
							<label class="col-2 col-form-label">Change in total reportable long:</label>
							<div class="col-10">
								<input class="form-control" name="change_in_totalreportable_long" type="text" value="{{$marketdata->change_in_totalreportable_long}}" id="change_in_totalreportable_long">
							</div>
						</div>
						<div class="form-group row">
							<label class="col-2 col-form-label">Change in total reportable short:</label>
							<div class="col-10">
								<input class="form-control" name="change_in_totalreportable_short" type="text" value="{{$marketdata->change_in_totalreportable_short}}" id="change_in_totalreportable_short">
							</div>
						</div>
						<div class="form-group row">
							<label class="col-2 col-form-label">Change in non total reportable long:</label>
							<div class="col-10">
								<input class="form-control" name="change_in_non_totalreportable_long" type="text" value="{{$marketdata->change_in_non_totalreportable_long}}" id="change_in_non_totalreportable_long">
							</div>
						</div>
						<div class="form-group row">
							<label class="col-2 col-form-label">Change in non totalreportable short:</label>
							<div class="col-10">
								<input class="form-control" name="change_in_non_totalreportable_short" type="text" value="{{$marketdata->change_in_non_totalreportable_short}}" id="change_in_non_totalreportable_short">
							</div>
						</div>
						<div class="form-group row">
							<label class="col-2 col-form-label">Per of open intrest all:</label>
							<div class="col-10">
								<input class="form-control" name="per_of_open_intrest_all" type="text" value="{{$marketdata->per_of_open_intrest_all}}" id="per_of_open_intrest_all">
							</div>
						</div>
						<div class="form-group row">
							<label class="col-2 col-form-label">Per of noncommercial long:</label>
							<div class="col-10">
								<input class="form-control" name="per_of_noncommercial_long" type="text" value="{{$marketdata->per_of_noncommercial_long}}" id="per_of_noncommercial_long">
							</div>
						</div>
						<div class="form-group row">
							<label class="col-2 col-form-label">Per of noncommercial short:</label>
							<div class="col-10">
								<input class="form-control" name="per_of_noncommercial_short" type="text" value="{{$marketdata->per_of_noncommercial_short}}" id="per_of_noncommercial_short">
							</div>
						</div>
						<div class="form-group row">
							<label class="col-2 col-form-label">Per of noncommercial spreading:</label>
							<div class="col-10">
								<input class="form-control" name="per_of_noncommercial_spreading" type="text" value="{{$marketdata->per_of_noncommercial_spreading}}" id="per_of_noncommercial_spreading">
							</div>
						</div>
					</div>
					<div class="card-footer">
						<div class="row">
							<div class="col-2">
							</div>
							<div class="col-10">
								<button type="submit" class="btn btn-success mr-2">Update</button>
								<a type="button" class="btn btn-secondary font-weight-bold" href="{{route('marketdata.index')}}"><i class="la la-arrow-left"></i>Back to list</a>
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
$( "#edit_marketdata" ).validate({
		rules: {
			market: "required",
			date: "required",
			noncommercial_positions_long: "required",
			noncommercial_positions_short: "required",
			noncommercial_positions_spreading: "required",
			commercial_positions_long: "required",
			commercial_positions_short: "required",
			nonreportable_positions_short: "required",
			nonreportable_positions_long: "required",
			open_intrest: "required",
			total_reportable_poitions_long: "required",
			total_reportable_poitions_short: "required",
			channge_in_open_intrest: "required",
			change_in_noncommercial_long: "required",
			change_in_noncommercial_short: "required",
			change_in_noncommercial_spreading: "required",
			change_in_commercial_long: "required",
			change_in_commercial_short: "required",
			change_in_totalreportable_long: "required",
			change_in_totalreportable_short: "required",
			change_in_non_totalreportable_long: "required",
			change_in_non_totalreportable_short: "required",
			per_of_open_intrest_all: "required",
			per_of_noncommercial_long: "required",
			per_of_noncommercial_short: "required",
			per_of_noncommercial_spreading: "required",
		},
		messages: {
			market: "Please enter market name.",
			date: "Please enter date.",
			noncommercial_positions_long: "Please enter value.",
			noncommercial_positions_short: "Please enter value.",
			noncommercial_positions_spreading: "Please enter value.",
			commercial_positions_long: "Please enter value.",
			commercial_positions_short: "Please enter value.",
			nonreportable_positions_short: "Please enter value.",
			nonreportable_positions_long: "Please enter value.",
			open_intrest: "Please enter value.",
			total_reportable_poitions_long: "Please enter value.",
			total_reportable_poitions_short: "Please enter value.",
			channge_in_open_intrest: "Please enter value.",
			change_in_noncommercial_long: "Please enter value.",
			change_in_noncommercial_short: "Please enter value.",
			change_in_noncommercial_spreading: "Please enter value.",
			change_in_commercial_long: "Please enter value.",
			change_in_commercial_short: "Please enter value.",
			change_in_totalreportable_long: "Please enter value.",
			change_in_totalreportable_short: "Please enter value.",
			change_in_non_totalreportable_long: "Please enter value.",
			change_in_non_totalreportable_short: "Please enter value.",
			per_of_open_intrest_all: "Please enter value.",
			per_of_noncommercial_long: "Please enter value.",
			per_of_noncommercial_short: "Please enter value.",
			per_of_noncommercial_spreading: "Please enter value.",
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