/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
import vSelect from "vue-select";
// import BootstrapVue from 'bootstrap-vue'
// Vue.component('example-component', require('./components/ExampleComponent.vue'));

console.log( window.location.pathname == "/backend");
window.Vue.use(VueRouter);
// window.Vue.use(BootstrapVue);

import Book from './components/admin/main/Book.vue';
import UpdateBook from './components/admin/main/book/update.vue';
import Loan from './components/admin/main/Loan.vue';
import UpdateLoan from './components/admin/main/loan/update.vue';
import Category from './components/admin/main/Category.vue';
import UpdateCategory from './components/admin/main/category/update.vue';
import Author from './components/admin/main/Author.vue';
import UpdateAuthor from './components/admin/main/author/update.vue';
import Publisher from './components/admin/main/Publisher.vue';
import UpdatePublisher from './components/admin/main/publisher/update.vue';
import User from './components/admin/main/User.vue';
import UpdateUser from './components/admin/main/user/update.vue';
import Introduction from "./components/admin/main/Introduction.vue";

let routes = []
const backendRoutes = [
    {
        path: '/',
        component: Introduction 
    },
    {path: '/user', component: User, name: 'user'},
    {path: '/user/insert', component: UpdateUser, name: 'updateUser'},
    {path: '/category', component: Category, name: 'category'},
    {path: '/category/insert', component: UpdateCategory, name: 'updateCategory'},
    {path: '/loan', component: Loan, name: 'loan'},
    {path: '/loan/insert', component: UpdateLoan, name: 'updateLoan'},
    {path: '/book', component: Book, name: 'book'},
    {path: '/book/:bookId', component: UpdateBook, name: 'updateBook'},
    {path: '/book/insert', component: UpdateBook, name: 'insertBook'},
    {path: '/publisher', component: Publisher, name: 'publisher'},
    {path: '/publisher/insert', component: UpdatePublisher, name: 'updatePublisher'},
    {path: '/author', component: Author, name: 'author'},
    {path: '/author/insert', component: UpdateAuthor, name: 'updateAuthor'},
    {path: ''}

]

import Home from './components/main/Home.vue';
import ProductFilter from './components/main/ProductFilter.vue';
import DetailProduct from './components/main/DetailProduct.vue';

const mainRoutes = [
    {
        path: '/',
        component: Home
    },
    {path: '/products/:categoryId', component: ProductFilter, name: 'productFilter'},
    {path: '/detail/:bookId', component: DetailProduct, name: 'detailProduct'},
]

if(window.location.pathname == "/backend")
    routes = backendRoutes;
else
    routes = mainRoutes;

const router = new VueRouter({routes});

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

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('category-sidebar', require('./components/main/CategorySideBar.vue').default);
Vue.component('infor', require('./components/main/Information.vue').default);
Vue.component('analysis', require('./components/main/Analysis.vue').default);
Vue.component('search-bar', require('./components/main/SearchBar.vue').default);
Vue.component("v-select",vSelect);
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
const app = new Vue({
    router
}).$mount('#app');
