<?php

namespace App\Http\Middleware;

use Closure;

class AddAuthTokenHeader
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $cookie_name = 'auth';
        if (!$request->bearerToken()) {
            if ($request->hasCookie($cookie_name)) {
                $token = $request->cookie($cookie_name);
                
                $request->headers->add([
                    'Authorization' => 'Bearer ' . $token
                ]);
            }
        }
        return $next($request);
    }
}
