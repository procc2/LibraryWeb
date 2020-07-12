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
    .sass('resources/js/components/admin/assets/css/sass/themes/piaf.light.orange.scss', 'public/css')
    .copyDirectory('resources/images', 'public/images')
    .copyDirectory('resources/fonts', 'public/fonts')
    .copyDirectory('resources/js/components/admin/assets/fonts/iconsmind-s/font', 'public/admin/lte/font')
    .copyDirectory('resources/js/components/admin/assets/fonts/simple-line-icons/fonts', 'public/admin/lte/fonts')
    .styles([
        "resources/js/components/admin/assets/css/vendor/dropzone.min.css",
        'node_modules/vue-select/dist/vue-select.css',
        'resources/js/components/admin/assets/fonts/iconsmind-s/css/*',
        'resources/js/components/admin/assets/fonts/simple-line-icons/css/simple-line-icons.css'
    ], 'public/admin/lte/css/library.min.css')
    .scripts([
        'resources/js/admin/*'
    ], 'public/admin/lte/js/library.min.js')
    .styles([
        'resources/sass/main/plugins.css',
        'resources/sass/main/style.css',
        // 'resources/sass/main/plugins/*'
    ], 'public/main/css/main.min.css')
    .scripts([
        'resources/js/main/vendor/modernizr-3.5.0.min.js',
        'resources/js/main/popper.min.js',
        'resources/js/main/plugins.js',
        'resources/js/main/active.js'
    ], 'public/main/js/main.min.js');