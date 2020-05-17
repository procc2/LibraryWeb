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
    <script src="{{ asset('js/app.js') }}" defer></script>
    <script src="{{ asset('main/js/main.min.js') }}"></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('main/css/main.min.css') }}" rel="stylesheet">
</head>

<body>
    <div id="app">
        <div class="container">
        @yield('nav_bar')

            <!-- Header -->
            <div id="header">
                <div class="row">
                    <!-- search -->
                    @yield('search_bar')
                    <!-- end search -->

                    <!-- y-cart -->
                    @yield('y-cart')
                    <!-- end y-cart -->
                </div>
            </div>
            <!-- End Header -->

            <!-- Banner  -->
            <div id="banner">
                <div class="row">
                    <div id="logo" class="col-md-4 col-sm-12 col-xs-12">
                        <h1>
                            <a href="index.php">
                                <img src="images/lg.jpg" height="110px">
                            </a>
                        </h1>
                    </div>

                </div>
            </div>
            <!-- End Banner -->

            <!-- Body -->
            <div id="body">
                <div class="row">
                    <div class="col-md-3 col-sm-12 col-xs-12">
                        @yield('category_sidebar')
                        <div id="banner-l">
                            <h2 class="h2-bar">Đối tác</h2>
                            <a href="#">
                                <img class="img-thumbnail" src="images/quangcao.png">
                            </a>
                        </div>
                        @yield('analysis_chart')
                    </div>
                    <div class="col-md-9 col-sm-12 col-xs-12">
                        <div id="slider">
                            <div id="myCarousel" class="carousel slide" data-ride="carousel">
                                <!-- Indicators -->
                                <ol class="carousel-indicators">
                                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                                    <li data-target="#myCarousel" data-slide-to="1"></li>
                                    <li data-target="#myCarousel" data-slide-to="2"></li>


                                </ol>

                                <!-- Wrapper for slides -->
                                <div class="carousel-inner" role="listbox">
                                    <div class="item active">
                                        <img src="images/sl11.jpg" alt="Chania">
                                    </div>

                                    <div class="item">
                                        <img src="images/sl21.png" alt="Chania">
                                    </div>

                                    <div class="item">
                                        <img src="images/sl31.png" alt="Flower">
                                    </div>


                                </div>

                                <!-- Left and right controls -->
                                <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                                    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                                    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>
                        </div>

                        <div id="main">
                            @yield('content')
                        </div>


                    </div>
                </div>
            </div>
            <!-- End Body -->

            <div id="brand">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <img class="img-thumbnail" src="">
                    </div>
                </div>
            </div>

            <!-- Footer -->
            <div id="footer">
                <div class="row">
                    <div id="footer-main" class="col-md-12 col-sm-12 col-xs-12">
                        <h4>Thư Viện Điện Tử</h4>
                        <p><b>Trụ sở chính:</b> 141 Đường chiến thắng, Hà Đông, Hà Nội | <b>Hotline</b> 0983010597</p>


                    </div>
                </div>
            </div>
            <!-- End Footer -->
        </div>
    </div>
</body>

</html>