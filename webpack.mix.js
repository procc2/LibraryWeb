const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .copyDirectory('resources/images', 'public/images')
    .copyDirectory('resources/fonts', 'public/main/fonts')
    .styles([
        'node_modules/bootstrap/dist/css/bootstrap.min.css',
        'node_modules/vue-select/dist/vue-select.css',
        'resources/sass/admin/*'
    ], 'public/admin/lte/css/library.min.css')
    .styles([
        'node_modules/bootstrap/dist/css/bootstrap.min.css',
        'resources/sass/main/*'
    ], 'public/main/css/main.min.css')
    .scripts([
        'resources/js/admin/*'
    ], 'public/admin/lte/js/library.min.js')
    .scripts([
        'resources/js/admin/*'
    ], 'public/main/js/main.min.js');