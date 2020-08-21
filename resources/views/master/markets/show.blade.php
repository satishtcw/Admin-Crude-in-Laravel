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
					<div class="card-body">
						<div class="d-flex justify-content-between flex-column flex-md-row font-size-lg">
							<div class="d-flex flex-column mb-10 mb-md-0">
								<div class="font-weight-bolder font-size-lg mb-3">Details</div>
								
								<div class="d-flex justify-content-between mb-3">
									<span class="mr-15 font-weight-bold">Market Type:</span>
									<span class="text-right">@if(!empty($markets->type)) {{$markets->types->type_name}} @endif</span>
								</div>
								
								<div class="d-flex justify-content-between mb-3">
									<span class="mr-15 font-weight-bold">Market:</span>
									<span class="text-right">{{$markets->market}}</span>
								</div>

								<div class="d-flex justify-content-between mb-3">
									<span class="mr-15 font-weight-bold">Market Name:</span>
									<span class="text-right">{{$markets->name}}</span>
								</div>
							</div>
						</div>
						<div class="row justify-content-center py-8 px-8 py-md-10 px-md-0">
							<div class="col-md-12">
								<div class="d-flex justify-content-between"> 
									<a type="button" class="btn btn-primary font-weight-bold" href="{{route('markets.index')}}"><i class="la la-arrow-left"></i>Back to list</a>
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
