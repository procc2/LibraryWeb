
import VueRouter from 'vue-router';
import Vue from 'vue';
Vue.use(VueRouter);
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
import Login from './components/main/Login.vue';

const mainRoutes = [
    {
        path: '/',
        component: Home
    },
    {path: '/products/:categoryId', component: ProductFilter, name: 'productFilter'},
    {path: '/detail/:bookId', component: DetailProduct, name: 'detailProduct'},
    {path: '/login', component: Login, name: 'login'},
    { path: '*', redirect: '/' }
]

if(window.location.pathname == "/backend")
    routes = backendRoutes;
else
    routes = mainRoutes;

export const router = new VueRouter({routes});