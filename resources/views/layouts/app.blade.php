<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Thư viện') }}</title>

    <!-- Scripts -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    @if(isset($roles))
    <script>
        window.__roles__ = @json($roles)
    </script>
    @endif
    <script src="{{ asset('js/app.js') }}" defer></script>
    <script src="{{ asset('admin/lte/js/library.min.js') }}"></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <!-- <link href="{{ asset('css/app.css') }}" rel="stylesheet"> -->
    <link href="{{ asset('admin/lte/css/library.min.css') }}" rel="stylesheet">
    <link href="{{ mix('css/piaf.light.orange.css') }}" rel="stylesheet">

</head>

<body class="hold-transition skin-blue sidebar-mini">
    <div id="app">
        @yield('content')
    </div>
</body>

</html>