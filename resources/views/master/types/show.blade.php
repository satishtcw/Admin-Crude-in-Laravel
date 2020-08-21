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
							<h3 class="card-label">Market type details ({{$types->type_name}})</h3>
						</div>
					</div>
					<div class="card-body">
						<div class="d-flex justify-content-between flex-column flex-md-row font-size-lg">
							<div class="d-flex flex-column mb-10 mb-md-0">
								<div class="font-weight-bolder font-size-lg mb-3">Details</div>

								<div class="d-flex justify-content-between mb-3">
									<span class="mr-15 font-weight-bold">Type name:</span>
									<span class="text-right">{{$types->type_name}}</span>
								</div>

								<div class="d-flex justify-content-between mb-3">
									<span class="mr-15 font-weight-bold">Date added:</span>
									<span class="text-right">{{$types->date_added}}</span>
								</div>
							</div>
						</div>
						<div class="row justify-content-center py-8 px-8 py-md-10 px-md-0">
							<div class="col-md-12">
								<div class="d-flex justify-content-between"> 
									<a type="button" class="btn btn-primary font-weight-bold" href="{{route('types.index')}}"><i class="la la-arrow-left"></i>Back to list</a>
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
