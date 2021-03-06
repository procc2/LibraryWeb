/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import vSelect from "vue-select";
// import BootstrapVue from 'bootstrap-vue'
// Vue.component('example-component', require('./components/ExampleComponent.vue'));


// router.beforeEach((to, from, next) => {
//     document.title = to.meta.title;
//     next()
//   })

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
// Vue.component('category-sidebar', require('./components/main/CategorySideBar.vue').default);
// Vue.component('infor', require('./components/main/Information.vue').default);
// Vue.component('analysis', require('./components/main/Analysis.vue').default);
// Vue.component('search-bar', require('./components/main/SearchBar.vue').default);
// Vue.component('nav-bar', require('./components/main/NavBar.vue').default);
Vue.component('app', require('./App.vue').default);
Vue.component("v-select",vSelect);
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vuejs-dialog/dist/vuejs-dialog.min.css';
import { store } from './components/main/store';
import router from './router'
import VModal from 'vue-js-modal'
import VuejsDialog from 'vuejs-dialog';
Vue.use(VModal);
Vue.use(VuejsDialog);

const app = new Vue({
    router,
    store,
}).$mount('#app');
