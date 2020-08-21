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
							<h3 class="card-label">Market Data details ({{$marketdata->markets->market}})</h3>
						</div>
					</div>
					<div class="card-body">
						<div class="d-flex justify-content-between flex-column flex-md-row font-size-lg">
							<div class="d-flex flex-column mb-10 mb-md-0">
								<div class="font-weight-bolder font-size-lg mb-3">Details</div>

								<div class="d-flex justify-content-between mb-3">
									<span class="mr-15 font-weight-bold">Market:</span>
									<span class="text-right">{{$marketdata->markets->market}}</span>
								</div>

								<div class="d-flex justify-content-between mb-3">
									<span class="mr-15 font-weight-bold">Date:</span>
									<span class="text-right">{{$marketdata->date}}</span>
								</div>
								
								<div class="d-flex justify-content-between mb-3">
									<span class="mr-15 font-weight-bold">Noncommercial positions long:</span>
									<span class="text-right">{{$marketdata->noncommercial_positions_long}}</span>
								</div>
								
								<div class="d-flex justify-content-between mb-3">
									<span class="mr-15 font-weight-bold">Noncommercial positions short:</span>
									<span class="text-right">{{$marketdata->noncommercial_positions_short}}</span>
								</div>
								
								<div class="d-flex justify-content-between mb-3">
									<span class="mr-15 font-weight-bold">Noncommercial positions spreading:</span>
									<span class="text-right">{{$marketdata->noncommercial_positions_spreading}}</span>
								</div>
								
								<div class="d-flex justify-content-between mb-3">
									<span class="mr-15 font-weight-bold">Commercial positions long:</span>
									<span class="text-right">{{$marketdata->commercial_positions_long}}</span>
								</div>
								
								<div class="d-flex justify-content-between mb-3">
									<span class="mr-15 font-weight-bold">Commercial positions short:</span>
									<span class="text-right">{{$marketdata->commercial_positions_short}}</span>
								</div>
								
								<div class="d-flex justify-content-between mb-3">
									<span class="mr-15 font-weight-bold">Nonreportable positions short:</span>
									<span class="text-right">{{$marketdata->nonreportable_positions_short}}</span>
								</div>
								
								<div class="d-flex justify-content-between mb-3">
									<span class="mr-15 font-weight-bold">Nonreportable positions long:</span>
									<span class="text-right">{{$marketdata->nonreportable_positions_long}}</span>
								</div>
								
								<div class="d-flex justify-content-between mb-3">
									<span class="mr-15 font-weight-bold">Open intrest:</span>
									<span class="text-right">{{$marketdata->open_intrest}}</span>
								</div>
								<div class="d-flex justify-content-between mb-3">
									<span class="mr-15 font-weight-bold">Total reportable poitions long:</span>
									<span class="text-right">{{$marketdata->total_reportable_poitions_long}}</span>
								</div>
								<div class="d-flex justify-content-between mb-3">
									<span class="mr-15 font-weight-bold">Total reportable poitions short:</span>
									<span class="text-right">{{$marketdata->total_reportable_poitions_short}}</span>
								</div>
								<div class="d-flex justify-content-between mb-3">
									<span class="mr-15 font-weight-bold">Channge in open intrest:</span>
									<span class="text-right">{{$marketdata->channge_in_open_intrest}}</span>
								</div>
								<div class="d-flex justify-content-between mb-3">
									<span class="mr-15 font-weight-bold">Change in noncommercial long:</span>
									<span class="text-right">{{$marketdata->change_in_noncommercial_long}}</span>
								</div>
								<div class="d-flex justify-content-between mb-3">
									<span class="mr-15 font-weight-bold">Change in noncommercial short:</span>
									<span class="text-right">{{$marketdata->change_in_noncommercial_short}}</span>
								</div>
								<div class="d-flex justify-content-between mb-3">
									<span class="mr-15 font-weight-bold">Change in noncommercial spreading:</span>
									<span class="text-right">{{$marketdata->change_in_noncommercial_spreading}}</span>
								</div>
								<div class="d-flex justify-content-between mb-3">
									<span class="mr-15 font-weight-bold">Change in commercial long:</span>
									<span class="text-right">{{$marketdata->change_in_commercial_long}}</span>
								</div>
								<div class="d-flex justify-content-between mb-3">
									<span class="mr-15 font-weight-bold">Change in commercial short:</span>
									<span class="text-right">{{$marketdata->change_in_commercial_short}}</span>
								</div>
								<div class="d-flex justify-content-between mb-3">
									<span class="mr-15 font-weight-bold">Change in total reportable long:</span>
									<span class="text-right">{{$marketdata->change_in_totalreportable_long}}</span>
								</div>
								<div class="d-flex justify-content-between mb-3">
									<span class="mr-15 font-weight-bold">Change in totalreportable short:</span>
									<span class="text-right">{{$marketdata->change_in_totalreportable_short}}</span>
								</div>
								<div class="d-flex justify-content-between mb-3">
									<span class="mr-15 font-weight-bold">Change in non totalreportable long:</span>
									<span class="text-right">{{$marketdata->change_in_non_totalreportable_long}}</span>
								</div>
								<div class="d-flex justify-content-between mb-3">
									<span class="mr-15 font-weight-bold">Change in non totalreportable short:</span>
									<span class="text-right">{{$marketdata->change_in_non_totalreportable_short}}</span>
								</div>
								<div class="d-flex justify-content-between mb-3">
									<span class="mr-15 font-weight-bold">Per of open intrest all:</span>
									<span class="text-right">{{$marketdata->per_of_open_intrest_all}}</span>
								</div>
								<div class="d-flex justify-content-between mb-3">
									<span class="mr-15 font-weight-bold">Per of noncommercial long:</span>
									<span class="text-right">{{$marketdata->per_of_noncommercial_long}}</span>
								</div>
								<div class="d-flex justify-content-between mb-3">
									<span class="mr-15 font-weight-bold">Per of noncommercial short:</span>
									<span class="text-right">{{$marketdata->per_of_noncommercial_short}}</span>
								</div>
								<div class="d-flex justify-content-between mb-3"> 
									<span class="mr-15 font-weight-bold">Per of noncommercial spreading:</span>
									<span class="text-right">{{$marketdata->per_of_noncommercial_spreading}}</span>
								</div>
							</div>
						</div>
						<div class="row justify-content-center py-8 px-8 py-md-10 px-md-0">
							<div class="col-md-12">
								<div class="d-flex justify-content-between"> 
									<a type="button" class="btn btn-primary font-weight-bold" href="{{route('marketdata.index')}}"><i class="la la-arrow-left"></i>Back to list</a>
								</div>
							</div>
						</div>
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
@endsection
