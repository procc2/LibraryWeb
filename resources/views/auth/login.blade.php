@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <b-colxx xxs="10" md="8" class="mx-auto my-auto">
            <div class="card card-signin my-5">
                <div class="card-body">
                    <h5 class="card-title text-center">{{ __('Đăng nhập hệ thống quản trị') }}</h5>
                    <h6 class="mb-4">Đăng nhập</h6>

                    <form method="POST" action="{{ route('login') }}">
                        @csrf
                        <fieldset>
                            <div class="form-group">
                                <input id="email" placeholder="Tài khoản E-mail" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>

                                @error('email')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                                @enderror
                            </div>
                            <div class="form-group">
                                <input id="password" placeholder="Mật khẩu" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">

                                @error('password')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                                @enderror
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>
                                <label class="form-check-label" for="remember">{{ __('Remember Me') }}</label>
                            </div>
                            <br />
                            <input type="submit" name="submit" value="Đăng nhập" class="btn btn-primary">
                            @if (Route::has('password.request'))
                            <a class="btn btn-link" href="{{ route('password.request') }}">
                                {{ __('Quên Mật Khẩu ?') }}
                            </a>
                            @endif
                        </fieldset>
                    </form>

                </div>
            </div>
        </b-colxx>
    </div>
</div>
@endsection