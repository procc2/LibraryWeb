import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter);
// window.Vue.use(BootstrapVue);

import Book from "./components/admin/main/Book.vue";
import UpdateBook from "./components/admin/main/book/update.vue";
import Loan from "./components/admin/main/Loan.vue";
import UpdateLoan from "./components/admin/main/loan/update.vue";
import Category from "./components/admin/main/Category.vue";
import UpdateCategory from "./components/admin/main/category/update.vue";
import Author from "./components/admin/main/Author.vue";
import UpdateAuthor from "./components/admin/main/author/update.vue";
import Publisher from "./components/admin/main/Publisher.vue";
import UpdatePublisher from "./components/admin/main/publisher/update.vue";
import User from "./components/admin/main/User.vue";
import UpdateUser from "./components/admin/main/user/update.vue";
import UpdatePermisson from "./components/admin/main/user/permisson.vue";
import Role from "./components/admin/main/Role.vue";
import UpdateRole from "./components/admin/main/role/update.vue";
import Introduction from "./components/admin/main/Introduction.vue";
import UserRequest from "./components/admin/main/UserRequest.vue";

let routes = [];
const backendRoutes = [
    {
        path: "/",
        component: Introduction,
        meta: {
            requiredRoles: ["admin", "developer","staff"]
        }
    },
    {
        path: "/user",
        component: User,
        name: "user",
        meta: {
            requiredRoles: ["admin", "developer"]
        }
    },
    { path: "/user/insert", component: UpdateUser, name: "updateUser" },
    {
        path: "/user/permission",
        component: UpdatePermisson,
        name: "updatePermisson",
        meta: {
            requiredRoles: ["admin", "developer"]
        }
    },
    {
        path: "/role",
        component: Role,
        name: "role",
        meta: {
            requiredRoles: ["admin", "developer"]
        }
    },
    {
        path: "/role/insert",
        component: UpdateRole,
        name: "updateRole",
        meta: {
            requiredRoles: ["admin", "developer"]
        }
    },
    {
        path: "/category",
        component: Category,
        name: "category",
        meta: {
            requiredRoles: ["admin", "developer", "staff"]
        }
    },
    {
        path: "/category/insert",
        component: UpdateCategory,
        name: "updateCategory",
        meta: {
            requiredRoles: ["admin", "developer", "staff"]
        }
    },
    {
        path: "/loan",
        component: Loan,
        name: "loan",
        meta: {
            requiredRoles: ["admin", "developer", "staff"]
        }
    },
    {
        path: "/loan/insert",
        component: UpdateLoan,
        name: "updateLoan",
        meta: {
            requiredRoles: ["admin", "developer", "staff"]
        }
    },
    {
        path: "/book",
        component: Book,
        name: "book",
        meta: {
            requiredRoles: ["admin", "developer", "staff"]
        }
    },
    {
        path: "/book/:bookId",
        component: UpdateBook,
        name: "updateBook",
        meta: {
            requiredRoles: ["admin", "developer", "staff"]
        }
    },
    {
        path: "/book/insert",
        component: UpdateBook,
        name: "insertBook",
        meta: {
            requiredRoles: ["admin", "developer", "staff"]
        }
    },
    {
        path: "/publisher",
        component: Publisher,
        name: "publisher",
        meta: {
            requiredRoles: ["admin", "developer", "staff"]
        }
    },
    {
        path: "/publisher/insert",
        component: UpdatePublisher,
        name: "updatePublisher",
        meta: {
            requiredRoles: ["admin", "developer", "staff"]
        }
    },
    {
        path: "/author",
        component: Author,
        name: "author",
        meta: {
            requiredRoles: ["admin", "developer", "staff"]
        }
    },
    {
        path: "/author/insert",
        component: UpdateAuthor,
        name: "updateAuthor",
        meta: {
            requiredRoles: ["admin", "developer", "staff"]
        }
    },
    {
        path: "/userRequest",
        component: UserRequest,
        name: "userRequest",
        meta: {
            requiredRoles: ["admin", "developer", "staff"]
        }
    },
];

import Home from "./components/main/Home.vue";
import ProductFilter from "./components/main/ProductFilter.vue";
import DetailProduct from "./components/main/DetailProduct.vue";
import Grid from "./components/main/Grid.vue";
import Login from "./components/main/Login.vue";
import ChangeInformation from "./components/main/ChangeInformation.vue";
import WishList from "./components/main/WishList.vue";
import Cart from "./components/main/Cart.vue";
import About from "./components/main/About.vue";
import Blog from "./components/main/Blog.vue";
import Contact from "./components/main/Contact.vue";
import LoanHistory from "./components/main/LoanHistory.vue";

const mainRoutes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/products/:categoryId",
        component: ProductFilter,
        name: "productFilter"
    },
    {
        path: "/detail/:bookId",
        component: DetailProduct,
        name: "detailProduct"
    },
    { path: "/login", component: Login, name: "login" },
    { path: "/grid-view", component: Grid, name: "grid" },
    {
        path: "/change-information",
        component: ChangeInformation,
        name: "changeInformation"
    },
    { path: "/wish-list", component: WishList, name: "wishList" },
    { path: "/cart", component: Cart, name: "cart" },
    { path: "/blog", component: Blog, name: "blog" },
    { path: "/about", component: About, name: "about" },
    { path: "/contact", component: Contact, name: "contact" },
    { path: "/loanHistory/:loanId", component: LoanHistory, name: "loanHistory" },
    { path: "*", redirect: "/" }
];

if (window.location.pathname == "/backend") routes = backendRoutes;
else routes = mainRoutes;

const router = new VueRouter({
    routes
});

if (window.location.pathname == "/backend")
    router.beforeEach((to, from, next) => {
        let roles = window.__roles__;
        var pass = false;
        if (!to.meta.requiredRoles) {
            next();
            return;
        }
        roles.forEach(role => {
            if (to.meta.requiredRoles.includes(role.slug)) {
                next();
                pass = true;
            }
        });
        if (!pass) {
            alert("You don't have permission to access this page.");
            next({
                path: "/"
            });
        }
    });

export default router;
