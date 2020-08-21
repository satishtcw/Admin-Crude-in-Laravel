<!DOCTYPE html>
<html lang="en" >
    <!--begin::Head-->
    <head>
		<base href="">
        <meta charset="utf-8"/>
        <title>CotMarkets | Dashboard</title>
        <meta name="description" content="Updates and statistics"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
		<meta name="_token" content="{{ csrf_token() }}">
		@include('master.layout.includes.css')
		@yield('css')
    </head>
    <!--end::Head-->

    <!--begin::Body-->
    <body  id="kt_body"  class="header-fixed header-mobile-fixed subheader-enabled subheader-fixed aside-enabled aside-fixed aside-minimize-hoverable page-loading"  >

		<!--begin::Main-->
		@include('master.layout.includes.headermobile')
		
		<div class="d-flex flex-column flex-root">
		<!--begin::Page-->
		<div class="d-flex flex-row flex-column-fluid page">

			<!--begin::Aside-->
			<div class="aside aside-left  aside-fixed  d-flex flex-column flex-row-auto"  id="kt_aside">
				
				@include('master.layout.includes.headerlogo')
				
				@include('master.layout.includes.sidebar')
			</div>
			<!--end::Aside-->

		<!--begin::Wrapper-->
		<div class="d-flex flex-column flex-row-fluid wrapper" id="kt_wrapper">
			@include('master.layout.includes.header')
			<!--begin::Content-->
			<div class="content  d-flex flex-column flex-column-fluid" id="kt_content">
				@include('master.layout.includes.breadcrumbs')
				@yield('content')
			</div>
			<!--end::Content-->
			@include('master.layout.includes.footer')
			
		</div>
		<!--end::Wrapper-->
		</div>
		<!--end::Page-->
		</div>
		@include('master.layout.includes.modals')
		@include('master.layout.includes.javascript')
		
</body>
    <!--end::Body-->
</html>