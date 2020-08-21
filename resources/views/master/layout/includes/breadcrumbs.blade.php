@php
$route = Route::current();

$name = $route->getName();

$actionName = $route->getActionName();
@endphp

<div class="subheader py-2 py-lg-4  subheader-solid " id="kt_subheader">
	<div class=" container-fluid  d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
		<ul class="breadcrumb breadcrumb-transparent breadcrumb-dot font-weight-bold p-0 my-2 font-size-sm">
			@foreach(Request::segments() as $segment)
				
					@if (is_numeric($segment))
						@if (strpos(Route::currentRouteName(), '.show') !== false) 
							<li class="breadcrumb-item">
								<a href="#" class="text-muted">	
									Show
								</a>
							</li> 
						@endif	
					@else
						<li class="breadcrumb-item">
							<a href="#" class="text-muted">
								{{ucfirst($segment)}}
							</a>
						</li> 
					@endif	
					
			@endforeach
		</ul>
	</div>
</div>
