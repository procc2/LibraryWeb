<template>
    <!-- <div class="clearfix">
        <ul class="secondary_menu">
            <li>
                <router-link :to="{ name: 'login' }" v-if="!status.loggedIn"
                    >Đăng nhập</router-link
                >
                <a v-if="status.loggedIn" href="#" v-on:click="logout()"
                    >Đăng xuất</a
                >
            </li>
        </ul>
        <div class="phone-top">
            Hotline: <a href="tel:0983010597">0983010597</a
            ><span v-if="status.loggedIn"> Xin chào {{ user.name }}</span>
        </div>
    </div> -->
    <!-- Header -->
    <header
        id="wn__header"
        class="header__area header__absolute sticky__header"
    >
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-6 col-sm-6 col-6 col-lg-2">
                    <div class="logo">
                        <router-link :to="{ path: '\/' }">
                            <img src="images/logo/logo.png" alt="logo images" />
                        </router-link>
                    </div>
                </div>
                <div class="col-lg-8 d-none d-lg-block">
                    <nav class="mainmenu__nav">
                        <ul class="meninmenu d-flex justify-content-start">
                            <li class="drop with--one--item">
                                <router-link :to="{ path: '\/' }"
                                    >Trang chủ</router-link
                                >
                            </li>
                            <!-- <li class="drop">
                                <a href="#">Giới thiệu</a>
                                <div class="megamenu mega03">
                                    <ul class="item item03">
                                        <li class="title">Shop Layout</li>
                                        <li>
                                            <a href="shop-grid.html"
                                                >Shop Grid</a
                                            >
                                        </li>
                                        <li>
                                            <a href="single-product.html"
                                                >Single Product</a
                                            >
                                        </li>
                                    </ul>
                                    <ul class="item item03">
                                        <li class="title">Shop Page</li>
                                        <li>
                                            <a href="my-account.html"
                                                >My Account</a
                                            >
                                        </li>
                                        <li>
                                            <a href="cart.html">Cart Page</a>
                                        </li>
                                        <li>
                                            <a href="checkout.html"
                                                >Checkout Page</a
                                            >
                                        </li>
                                        <li>
                                            <a href="wishlist.html"
                                                >Wishlist Page</a
                                            >
                                        </li>
                                        <li>
                                            <a href="error404.html">404 Page</a>
                                        </li>
                                        <li><a href="faq.html">Faq Page</a></li>
                                    </ul>
                                    <ul class="item item03">
                                        <li class="title">Bargain Books</li>
                                        <li>
                                            <a href="shop-grid.html"
                                                >Bargain Bestsellers</a
                                            >
                                        </li>
                                        <li>
                                            <a href="shop-grid.html"
                                                >Activity Kits</a
                                            >
                                        </li>
                                        <li>
                                            <a href="shop-grid.html"
                                                >B&N Classics</a
                                            >
                                        </li>
                                        <li>
                                            <a href="shop-grid.html"
                                                >Books Under $5</a
                                            >
                                        </li>
                                        <li>
                                            <a href="shop-grid.html"
                                                >Bargain Books</a
                                            >
                                        </li>
                                    </ul>
                                </div>
                            </li> -->
                            <li class="drop">
                                <a href="javascript:void(0)">Sách</a>
                                <div class="megamenu mega03">
                                    <ul class="item item03">
                                        <li class="title">Thể loại</li>
                                        <li
                                            v-for="category in categories"
                                            :key="category.category_id"
                                        >
                                            <router-link
                                                :to="{
                                                    name: 'grid',
                                                    query: {
                                                        categoryId:
                                                            category.category_id
                                                    }
                                                }"
                                                >{{ category.category_name }}
                                            </router-link>
                                        </li>
                                    </ul>
                                    <ul class="item item03">
                                        <li class="title">
                                            Được yêu thích
                                        </li>
                                        <li>
                                            <a href="shop-grid.html">Thần bí</a>
                                        </li>
                                        <li>
                                            <a href="shop-grid.html"
                                                >Self-help & Cảm hứng</a
                                            >
                                        </li>
                                        <li>
                                            <a href="shop-grid.html"
                                                >Tình cảm</a
                                            >
                                        </li>
                                        <li>
                                            <a href="shop-grid.html"
                                                >Tiểu thuyết / Fantasy</a
                                            >
                                        </li>
                                        <li>
                                            <a href="shop-grid.html"
                                                >Giáo dục</a
                                            >
                                        </li>
                                    </ul>
                                    <ul class="item item03">
                                        <li class="title">Collections</li>
                                        <li>
                                            <a href="shop-grid.html"
                                                >Top 10 Sách hay được mượn
                                            </a>
                                        </li>
                                        <li>
                                            <a href="shop-grid.html"
                                                >Top 10 Sách được yêu thích</a
                                            >
                                        </li>
                                        <li>
                                            <a href="shop-grid.html"
                                                >Xu hướng</a
                                            >
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <!-- <li class="drop">
                                <a href="shop-grid.html">Kids</a>
                                <div class="megamenu mega02">
                                    <ul class="item item02">
                                        <li class="title">Top Collections</li>
                                        <li>
                                            <a href="shop-grid.html"
                                                >American Girl</a
                                            >
                                        </li>
                                        <li>
                                            <a href="shop-grid.html"
                                                >Diary Wimpy Kid</a
                                            >
                                        </li>
                                        <li>
                                            <a href="shop-grid.html"
                                                >Finding Dory</a
                                            >
                                        </li>
                                        <li>
                                            <a href="shop-grid.html"
                                                >Harry Potter</a
                                            >
                                        </li>
                                        <li>
                                            <a href="shop-grid.html"
                                                >Land of Stories</a
                                            >
                                        </li>
                                    </ul>
                                    <ul class="item item02">
                                        <li class="title">More For Kids</li>
                                        <li>
                                            <a href="shop-grid.html"
                                                >B&N Educators</a
                                            >
                                        </li>
                                        <li>
                                            <a href="shop-grid.html"
                                                >B&N Kids' Club</a
                                            >
                                        </li>
                                        <li>
                                            <a href="shop-grid.html"
                                                >Kids' Music</a
                                            >
                                        </li>
                                        <li>
                                            <a href="shop-grid.html"
                                                >Toys & Games</a
                                            >
                                        </li>
                                        <li>
                                            <a href="shop-grid.html">Hoodies</a>
                                        </li>
                                    </ul>
                                </div>
                            </li> -->
                            <li class="drop">
                                <router-link :to="{ name: 'about' }"
                                    >Giới thiệu</router-link
                                >
                                <!-- <div class="megamenu dropdown">
                                    <ul class="item item01">
                                        <li>
                                            <a href="about.html">About Page</a>
                                        </li>
                                        <li class="label2">
                                            <a href="portfolio.html"
                                                >Portfolio</a
                                            >
                                            <ul>
                                                <li>
                                                    <a href="portfolio.html"
                                                        >Portfolio</a
                                                    >
                                                </li>
                                                <li>
                                                    <a
                                                        href="portfolio-details.html"
                                                        >Portfolio Details</a
                                                    >
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="my-account.html"
                                                >My Account</a
                                            >
                                        </li>
                                        <li>
                                            <a href="cart.html">Cart Page</a>
                                        </li>
                                        <li>
                                            <a href="checkout.html"
                                                >Checkout Page</a
                                            >
                                        </li>
                                        <li>
                                            <a href="wishlist.html"
                                                >Wishlist Page</a
                                            >
                                        </li>
                                        <li>
                                            <a href="error404.html">404 Page</a>
                                        </li>
                                        <li><a href="faq.html">Faq Page</a></li>
                                        <li>
                                            <a href="team.html">Team Page</a>
                                        </li>
                                    </ul>
                                </div> -->
                            </li>
                            <li class="drop">
                                <router-link :to="{ name: 'blog' }"
                                    >Blog</router-link
                                >
                                <!-- <div class="megamenu dropdown">
                                    <ul class="item item01">
                                        <li>
                                            <a href="blog.html">Blog Page</a>
                                        </li>
                                        <li>
                                            <a href="blog-details.html"
                                                >Blog Details</a
                                            >
                                        </li>
                                    </ul>
                                </div> -->
                            </li>
                            <li>
                                <router-link :to="{ name: 'contact' }"
                                    >Liên hệ</router-link
                                >
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="col-md-6 col-sm-6 col-6 col-lg-2">
                    <ul
                        class="header__sidebar__right d-flex justify-content-end align-items-center"
                    >
                        <li class="shop_search">
                            <a class="search__active" href="#"></a>
                        </li>
                        <li class="wishlist">
                            <router-link
                                :to="{
                                    name: 'wishList'
                                }"
                            ></router-link>
                        </li>
                        <li class="shop_list">
                            <a
                                class="listbox_active"
                                href="javascript:void(0)"
                                v-on:click="getLoanList()"
                            ></a>
                            <!-- Start List -->
                            <div class="block-minicart minilist__active">
                                <div class="minicart-content-wrapper">
                                    <div class="micart__close">
                                        <span>đóng</span>
                                    </div>
                                    <div
                                        class="items-total d-flex justify-content-between"
                                    >
                                        <span>{{ loanList.length }} đơn</span>
                                        <span>Đơn đặt</span>
                                    </div>
                                    <!-- <div class="total_amount text-right">
                                        <span>$66.00</span>
                                    </div> -->
                                    <div class="single__items">
                                        <div
                                            class="miniproduct"
                                            v-if="loanList.length"
                                        >
                                            <div
                                                class="item01 d-flex"
                                                v-for="item in loanList"
                                                :key="item.id"
                                            >
                                                <div class="content">
                                                    <h6>
                                                        <router-link
                                                            :to="{
                                                                name:
                                                                    'loanHistory',
                                                                params: {
                                                                    loanId:
                                                                        item.id
                                                                }
                                                            }"
                                                            >Mã đơn :
                                                            {{
                                                                item.id
                                                            }}</router-link
                                                        >
                                                    </h6>
                                                    <span class="prize">{{
                                                        loanStatus[
                                                            item.loan_is_active
                                                        ]
                                                    }}</span>
                                                    <div
                                                        class="product_prize d-flex justify-content-between"
                                                    >
                                                        <span class="qun"
                                                            >Số sách:
                                                            {{
                                                                item.details
                                                                    .length
                                                            }}</span
                                                        >
                                                        <ul
                                                            class="d-flex justify-content-end"
                                                        >
                                                            <li>
                                                                <a href="#"
                                                                    ><i
                                                                        class="zmdi zmdi-eye"
                                                                    ></i
                                                                ></a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mini_action cart">
                                        <a class="cart__btn" href="cart.html"
                                            >Thay đổi
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <!-- End Shopping Cart -->
                        </li>
                        <li class="shopcart">
                            <a class="cartbox_active" href="#"
                                ><span class="product_qun">{{
                                    items.length
                                }}</span></a
                            >
                            <!-- Start Shopping Cart -->
                            <div class="block-minicart minicart__active">
                                <div class="minicart-content-wrapper">
                                    <div class="micart__close">
                                        <span>đóng</span>
                                    </div>
                                    <div
                                        class="items-total d-flex justify-content-between"
                                    >
                                        <span>{{ items.length }} sản phẩm</span>
                                        <!-- <span>Cart Subtotal</span> -->
                                    </div>
                                    <!-- <div class="total_amount text-right">
                                        <span>$66.00</span>
                                    </div> -->
                                    <div class="mini_action checkout">
                                        <router-link
                                            class="checkout__btn"
                                            :to="{ name: 'cart' }"
                                            >Đi đến checkout</router-link
                                        >
                                    </div>
                                    <div class="single__items">
                                        <div class="miniproduct">
                                            <div
                                                class="item01 d-flex"
                                                v-for="item in items"
                                                :key="item.id"
                                            >
                                                <div class="thumb">
                                                    <router-link
                                                        :to="{
                                                            name:
                                                                'detailProduct',
                                                            params: {
                                                                bookId:
                                                                    item.book_id
                                                            }
                                                        }"
                                                        v-if="item.images[0]"
                                                        ><img
                                                            :src="
                                                                '/dist/book/image/' +
                                                                    item
                                                                        .images[0]
                                                                        .name
                                                            "
                                                            alt="product image"
                                                    /></router-link>
                                                </div>
                                                <div class="content">
                                                    <h6>
                                                        <router-link
                                                            :to="{
                                                                name:
                                                                    'detailProduct',
                                                                params: {
                                                                    bookId:
                                                                        item.book_id
                                                                }
                                                            }"
                                                            >{{
                                                                item.book_name
                                                            }}</router-link
                                                        >
                                                    </h6>
                                                    <span class="prize"
                                                        >$30.00</span
                                                    >
                                                    <div
                                                        class="product_prize d-flex justify-content-between"
                                                    >
                                                        <span class="qun"
                                                            >Qty: 01</span
                                                        >
                                                        <ul
                                                            class="d-flex justify-content-end"
                                                        >
                                                            <li>
                                                                <a href="#"
                                                                    ><i
                                                                        class="zmdi zmdi-settings"
                                                                    ></i
                                                                ></a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="javascript:void(0)"
                                                                    v-on:click="
                                                                        removeProduct(
                                                                            item
                                                                        )
                                                                    "
                                                                    ><i
                                                                        class="zmdi zmdi-delete"
                                                                    ></i
                                                                ></a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mini_action cart">
                                        <a class="cart__btn" href="cart.html"
                                            >Thay đổi
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <!-- End Shopping Cart -->
                        </li>
                        <li class="setting__bar__icon">
                            <a class="setting__active" href="#"></a>
                            <div class="searchbar__content setting__block">
                                <div class="content-inner">
                                    <!-- <div class="switcher-currency">
											<strong class="label switcher-label">
												<span>Currency</span>
											</strong>
											<div class="switcher-options">
												<div class="switcher-currency-trigger">
													<span class="currency-trigger">USD - US Dollar</span>
													<ul class="switcher-dropdown">
														<li>GBP - British Pound Sterling</li>
														<li>EUR - Euro</li>
													</ul>
												</div>
											</div>
										</div> -->
                                    <div class="switcher-currency">
                                        <strong class="label switcher-label">
                                            <span>Ngôn ngữ</span>
                                        </strong>
                                        <div class="switcher-options">
                                            <div
                                                class="switcher-currency-trigger"
                                            >
                                                <span class="currency-trigger"
                                                    >Tiếng Việt</span
                                                >
                                                <ul class="switcher-dropdown">
                                                    <li>English</li>
                                                    <li>日本語</li>
                                                    <li>한국어</li>
                                                    <li>เกาหลี</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- <div class="switcher-currency">
											<strong class="label switcher-label">
												<span>Select Store</span>
											</strong>
											<div class="switcher-options">
												<div class="switcher-currency-trigger">
													<span class="currency-trigger">Fashion Store</span>
													<ul class="switcher-dropdown">
														<li>Furniture</li>
														<li>Shoes</li>
														<li>Speaker Store</li>
														<li>Furniture</li>
													</ul>
												</div>
											</div>
										</div> -->
                                    <div class="switcher-currency">
                                        <strong class="label switcher-label">
                                            <span v-if="!status.loggedIn"
                                                >Tài khoản</span
                                            >
                                            <span v-if="status.loggedIn">{{
                                                user.name
                                            }}</span>
                                        </strong>
                                        <div class="switcher-options">
                                            <div
                                                class="switcher-currency-trigger"
                                            >
                                                <div class="setting__menu">
                                                    <span>
                                                        <router-link
                                                            :to="{
                                                                name:
                                                                    'changeInformation'
                                                            }"
                                                            >Tài khoản của
                                                            tôi</router-link
                                                        ></span
                                                    >
                                                    <span>
                                                        <router-link
                                                            :to="{
                                                                name: 'wishList'
                                                            }"
                                                            >Yêu
                                                            thích</router-link
                                                        ></span
                                                    >
                                                    <span
                                                        ><a
                                                            href="javascript:void(0)"
                                                            v-if="
                                                                !status.loggedIn
                                                            "
                                                            v-on:click="show()"
                                                            >Đăng nhập</a
                                                        ></span
                                                    >
                                                    <span
                                                        ><a
                                                            href="javascript:void(0)"
                                                            v-if="
                                                                status.loggedIn
                                                            "
                                                            v-on:click="
                                                                logout()
                                                            "
                                                            >Đăng xuất</a
                                                        ></span
                                                    >
                                                    <span
                                                        ><a
                                                            href="javascript:void(0)"
                                                            v-if="
                                                                !status.loggedIn
                                                            "
                                                            v-on:click="
                                                                showRegister()
                                                            "
                                                            >Chưa có tài khoản
                                                            ?</a
                                                        ></span
                                                    >
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- Start Mobile Menu -->
            <div class="row d-none">
                <div class="col-lg-12 d-none">
                    <nav class="mobilemenu__nav">
                        <ul class="meninmenu">
                            <li><a href="index.html">Home</a></li>
                            <li>
                                <a href="#">Pages</a>
                                <ul>
                                    <li><a href="about.html">About Page</a></li>
                                    <li>
                                        <a href="portfolio.html">Portfolio</a>
                                        <ul>
                                            <li>
                                                <a href="portfolio.html"
                                                    >Portfolio</a
                                                >
                                            </li>
                                            <li>
                                                <a href="portfolio-details.html"
                                                    >Portfolio Details</a
                                                >
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <router-link
                                            :to="{ name: 'changeInformation' }"
                                            >My Account</router-link
                                        >
                                    </li>
                                    <li><a href="cart.html">Cart Page</a></li>
                                    <li>
                                        <a href="checkout.html"
                                            >Checkout Page</a
                                        >
                                    </li>
                                    <li>
                                        <a href="wishlist.html"
                                            >Wishlist Page</a
                                        >
                                    </li>
                                    <li>
                                        <a href="error404.html">404 Page</a>
                                    </li>
                                    <li><a href="faq.html">Faq Page</a></li>
                                    <li><a href="team.html">Team Page</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="shop-grid.html">Shop</a>
                                <ul>
                                    <li>
                                        <a href="shop-grid.html">Shop Grid</a>
                                    </li>
                                    <li>
                                        <a href="single-product.html"
                                            >Single Product</a
                                        >
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="blog.html">Blog</a>
                                <ul>
                                    <li><a href="blog.html">Blog Page</a></li>
                                    <li>
                                        <a href="blog-details.html"
                                            >Blog Details</a
                                        >
                                    </li>
                                </ul>
                            </li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <!-- End Mobile Menu -->
            <div class="mobile-menu d-block d-lg-none"></div>
            <!-- Mobile Menu -->
        </div>
    </header>
    <!-- //Header -->
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
    data: function() {
        return {
            categories: [],
            loanList: [],
            loanStatus: {
                0: "Chưa mượn",
                1: "Đang tiến hành mượn",
                2: "Đã trả"
            }
        };
    },
    mounted() {
        var app = this;
        axios
            .get("/api/v1/categories")
            .then(function(res) {
                app.categories = res.data;
            })
            .catch(function(e) {
                throw e;
            });
    },
    computed: {
        ...mapState("account", ["status", "user"]),
        ...mapState("cart", ["items"])
    },
    methods: {
        ...mapActions("account", ["logout"]),
        ...mapActions("cart", ["removeProduct"]),
        show() {
            this.$modal.show("login");
        },
        showRegister() {
            console.log(this.$modal);
            this.$modal.show("register");
        },
        getLoanList() {
            var app = this;
            axios
                .get("/api/v1/loans/" + app.user.user_id)
                .then(function(res) {
                    console.log(res);
                    app.loanList = res.data;
                })
                .catch(function(e) {
                    throw e;
                });
        }
    }
};
</script>

<style></style>
