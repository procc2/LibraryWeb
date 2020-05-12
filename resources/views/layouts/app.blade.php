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
    <script src="{{ asset('admin/lte/js/library.min.js') }}"></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('admin/lte/css/library.min.css') }}" rel="stylesheet">
</head>

<body class="hold-transition skin-blue sidebar-mini">
    <div id="app">

        @if(auth()->user())
        <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#sidebar-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="{{ url('/') }}"><span>THUVIEN</span>Admin</a>
                    <ul class="user-menu">
                        <li class="dropdown pull-right">

                            <a href="#" class="dropdown-toggle" data-toggle="dropdown"><svg class="glyph stroked male-user">
                                    <use xlink:href="#stroked-male-user"></use>
                                </svg><span style="color: white;">{{ Auth::user()->name }}</span> <span class="caret"></span></a>
                            <ul class="dropdown-menu" role="menu">
                                <li><a class="dropdown-item" href="{{ route('logout') }}" onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                        {{ __('Logout') }}
                                    </a>
                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                        @csrf
                                    </form>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>

            </div><!-- /.container-fluid -->
        </nav>
        <!-- SideBar -->
        <div id="sidebar-collapse" class="col-sm-3 col-lg-2 sidebar">
            <form role="search">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Tìm kiếm" />
                </div>
            </form>
            <ul class="nav menu">
                <li class="active">
                    <router-link to="/">
                        <a>
                            <svg class="glyph stroked dashboard-dial">
                                <use xlink:href="#stroked-dashboard-dial" />
                            </svg> Trang chủ quản trị
                        </a>
                    </router-link>
                </li>
                <li class="parent">
                    <router-link to="/user">
                        <a>
                            <span data-toggle="collapse" href="#sub-item-1">
                                <svg class="glyph stroked chevron-down">
                                    <use xlink:href="#stroked-chevron-down" />
                                </svg>
                            </span> Quản lý thành viên
                        </a>
                    </router-link>
                    <ul class="children collapse" id="sub-item-1">
                        <li>
                            <a href="register">
                                <svg class="glyph stroked plus sign">
                                    <use xlink:href="#stroked-plus-sign" />
                                </svg>
                                Thêm mới
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="parent">
                    <router-link to="/category">
                        <a>
                            <span data-toggle="collapse" href="#sub-item-2">
                                <svg class="glyph stroked chevron-down">
                                    <use xlink:href="#stroked-chevron-down" />
                                </svg>
                            </span> Quản lý danh mục thể loại
                        </a>
                    </router-link>
                    <ul class="children collapse" id="sub-item-2">
                        <li>
                            <router-link :to="{ name: 'updateCategory'}">
                                <svg class="glyph stroked plus sign">
                                    <use xlink:href="#stroked-plus-sign" />
                                </svg> Thêm mới
                            </router-link>
                        </li>
                    </ul>
                </li>
                <li class="parent">
                    <router-link to="/book">
                        <a>
                            <span data-toggle="collapse" href="#sub-item-3">
                                <svg class="glyph stroked chevron-down">
                                    <use xlink:href="#stroked-chevron-down" />
                                </svg>
                            </span> Quản lý ấn phẩm
                        </a>
                    </router-link>
                    <ul class="children collapse" id="sub-item-3">
                        <li>
                            <router-link :to="{ name: 'updateBook'}">
                                <svg class="glyph stroked plus sign">
                                    <use xlink:href="#stroked-plus-sign" />
                                </svg> Thêm mới
                                <router-link>
                        </li>
                    </ul>
                </li>
                <li class="parent">
                    <router-link to="/publisher">
                        <a>
                            <span data-toggle="collapse" href="#sub-item-4">
                                <svg class="glyph stroked chevron-down">
                                    <use xlink:href="#stroked-chevron-down" />
                                </svg>
                            </span> Quản lý danh mục nhà xuất bản
                        </a>
                    </router-link>
                    <ul class="children collapse" id="sub-item-4">
                        <li>
                            <router-link :to="{ name: 'updatePublisher'}">
                                <svg class="glyph stroked plus sign">
                                    <use xlink:href="#stroked-plus-sign" />
                                </svg> Thêm mới
                            </router-link>
                        </li>
                    </ul>
                </li>
                <li class="parent">
                    <router-link to="/author">
                        <a>
                            <span data-toggle="collapse" href="#sub-item-5">
                                <svg class="glyph stroked chevron-down">
                                    <use xlink:href="#stroked-chevron-down" />
                                </svg>
                            </span> Quản lý danh mục tác giả
                        </a>
                    </router-link>
                    <ul class="children collapse" id="sub-item-5">
                        <li>
                            <router-link :to="{ name: 'updateAuthor'}">
                                <svg class="glyph stroked plus sign">
                                    <use xlink:href="#stroked-plus-sign" />
                                </svg> Thêm mới
                            </router-link>
                        </li>
                    </ul>
                </li>

                <li class="parent">
                    <router-link to="/loan">
                        <a>
                            <span data-toggle="collapse" href="#sub-item-6">
                                <svg class="glyph stroked app window with content">
                                    <use xlink:href="#stroked-app-window-with-content" />
                                </svg>
                            </span> Quản lý ấn phẩm thuê
                        </a>
                    </router-link>
                </li>

            </ul>
        </div>
        @endif
        <!-- Sidebar -->
        @yield('content')
    </div>
</body>

</html>