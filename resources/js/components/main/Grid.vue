<template>
    <!-- Start Shop Page -->
    <div class="page-shop-sidebar left--sidebar bg--white section-padding--lg">
        <div class="container">
            <div class="row">
                <div
                    class="col-lg-3 col-12 order-2 order-lg-1 md-mt-40 sm-mt-40"
                >
                    <div class="shop__sidebar">
                        <aside class="wedget__categories poroduct--cat">
                            <h3 class="wedget__title">Các thể loại sách</h3>
                            <ul>
                                <li
                                    v-for="category in categories"
                                    :key="category.category_id"
                                >
                                    <a
                                        href="javascript:void(0)"
                                        v-on:click="
                                            filter(category.category_id)
                                        "
                                        >{{ category.category_name }}
                                        <span
                                            >({{
                                                Math.floor(Math.random() * 11)
                                            }})</span
                                        ></a
                                    >
                                </li>
                            </ul>
                        </aside>
                        <aside class="wedget__categories pro--range">
                            <h3 class="wedget__title">Filter by price</h3>
                            <div class="content-shopby">
                                <div class="price_filter s-filter clear">
                                    <form action="#" method="GET">
                                        <div id="slider-range"></div>
                                        <div class="slider__range--output">
                                            <div class="price__output--wrap">
                                                <div class="price--output">
                                                    <span>Price :</span
                                                    ><input
                                                        type="text"
                                                        id="amount"
                                                        readonly=""
                                                    />
                                                </div>
                                                <div class="price--filter">
                                                    <a href="#">Filter</a>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </aside>
                        <aside class="wedget__categories poroduct--tag">
                            <h3 class="wedget__title">Product Tags</h3>
                            <ul>
                                <li><a href="#">Biography</a></li>
                                <li><a href="#">Business</a></li>
                                <li><a href="#">Cookbooks</a></li>
                                <li><a href="#">Health & Fitness</a></li>
                                <li><a href="#">History</a></li>
                                <li><a href="#">Mystery</a></li>
                                <li><a href="#">Inspiration</a></li>
                                <li><a href="#">Religion</a></li>
                                <li><a href="#">Fiction</a></li>
                                <li><a href="#">Fantasy</a></li>
                                <li><a href="#">Music</a></li>
                                <li><a href="#">Toys</a></li>
                                <li><a href="#">Hoodies</a></li>
                            </ul>
                        </aside>
                        <aside class="wedget__categories sidebar--banner">
                            <img
                                src="images/others/banner_left.jpg"
                                alt="banner images"
                            />
                            <div class="text">
                                <h2>new products</h2>
                                <h6>
                                    save up to <br />
                                    <strong>40%</strong>off
                                </h6>
                            </div>
                        </aside>
                    </div>
                </div>
                <div class="col-lg-9 col-12 order-1 order-lg-2">
                    <div class="row">
                        <div class="col-lg-12">
                            <div
                                class="shop__list__wrapper d-flex flex-wrap flex-md-nowrap justify-content-between"
                            >
                                <div
                                    class="shop__list nav justify-content-center"
                                    role="tablist"
                                >
                                    <a
                                        class="nav-item nav-link active"
                                        data-toggle="tab"
                                        href="#nav-grid"
                                        role="tab"
                                        ><i class="fa fa-th"></i
                                    ></a>
                                    <a
                                        class="nav-item nav-link"
                                        data-toggle="tab"
                                        href="#nav-list"
                                        role="tab"
                                        ><i class="fa fa-list"></i
                                    ></a>
                                </div>
                                <p>Hiển thị 1–12 trong 40 kết quả</p>
                                <div class="orderby__wrapper">
                                    <span>Sắp xếp </span>
                                    <select class="shot__byselect">
                                        <option>Default sorting</option>
                                        <option>Sorting1</option>
                                        <option>Sorting2</option>
                                        <option>Sorting3</option>
                                        <option>Sorting4</option>
                                        <option>Sorting5</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab__container">
                        <div
                            class="shop-grid tab-pane fade show active"
                            id="nav-grid"
                            role="tabpanel"
                        >
                            <div class="row">
                                <!-- Start Single Product -->
                                <div
                                    class="product product__style--3 col-lg-4 col-md-4 col-sm-6 col-12"
                                    v-for="book in paginationProducts"
                                    :key="book.book_id"
                                >
                                    <div class="product__thumb">
                                        <router-link
                                            :to="{
                                                name: 'detailProduct',
                                                params: { bookId: book.book_id }
                                            }"
                                            class="first__img"
                                            v-if="book.images[0]"
                                            ><img
                                                :src="
                                                    '/dist/book/image/' +
                                                        book.images[0].name
                                                "
                                                alt="product image"
                                        /></router-link>
                                        <!-- <a
                                            class="second__img animation1"
                                            href="single-product.html"
                                            ><img
                                                src="images/books/2.jpg"
                                                alt="product image"
                                        /></a> -->
                                        <div class="hot__box">
                                            <span class="hot-label"
                                                >BEST SALLER</span
                                            >
                                        </div>
                                    </div>
                                    <div
                                        class="product__content content--center"
                                    >
                                        <h4>
                                            <router-link
                                                :to="{
                                                    name: 'detailProduct',
                                                    params: {
                                                        bookId: book.book_id
                                                    }
                                                }"
                                                >{{
                                                    book.book_name
                                                }}</router-link
                                            >
                                        </h4>
                                        
                                        <div class="action">
                                            <div class="actions_inner">
                                                <ul class="add_to_links">
                                                    <li>
                                                        <a
                                                            class="cart"
                                                            href="cart.html"
                                                            ><i
                                                                class="bi bi-shopping-bag4"
                                                            ></i
                                                        ></a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            class="wishlist"
                                                            href="wishlist.html"
                                                            ><i
                                                                class="bi bi-shopping-cart-full"
                                                            ></i
                                                        ></a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            class="compare"
                                                            href="#"
                                                            ><i
                                                                class="bi bi-heart-beat"
                                                            ></i
                                                        ></a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            data-toggle="modal"
                                                            title="Quick View"
                                                            class="quickview modal-view detail-link"
                                                            href="#productmodal"
                                                            ><i
                                                                class="bi bi-search"
                                                            ></i
                                                        ></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="product__hover--content">
                                            <ul class="rating d-flex">
                                                <li class="on">
                                                    <i class="fa fa-star-o"></i>
                                                </li>
                                                <li class="on">
                                                    <i class="fa fa-star-o"></i>
                                                </li>
                                                <li class="on">
                                                    <i class="fa fa-star-o"></i>
                                                </li>
                                                <li>
                                                    <i class="fa fa-star-o"></i>
                                                </li>
                                                <li>
                                                    <i class="fa fa-star-o"></i>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <!-- End Single Product -->
                            </div>
                            <!-- <ul class="wn__pagination">
                                <li class="active"><a href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li>
                                    <a href="#"
                                        ><i class="zmdi zmdi-chevron-right"></i
                                    ></a>
                                </li>
                            </ul> -->
                            <sliding-pagination
                                v-if="products != null"
                                :current="currentPage"
                                :total="totalPages"
                                @page-change="pageChangeHandler"
                            ></sliding-pagination>
                        </div>
                        <div
                            class="shop-grid tab-pane fade"
                            id="nav-list"
                            role="tabpanel"
                        >
                            <div class="list__view__wrapper">
                                <!-- Start Single Product -->
                                <div class="list__view" v-if="paginationProducts != null">
                                    <div class="thumb">
                                        <router-link :to="{ name : 'detailProduct', params : {bookId: paginationProducts[0].book_id}}" class="first__img"  v-if="paginationProducts[0].images[0]"><img :src="'/dist/book/image/'  + paginationProducts[0].images[0].name" alt="product image"></router-link>
                                        <!-- <a
                                            class="second__img animation1"
                                            href="single-product.html"
                                            ><img
                                                src="images/product/2.jpg"
                                                alt="product images"
                                        /></a> -->
                                    </div>
                                    <div class="content">
                                        <h2>
                                            <router-link :to="{ name : 'detailProduct', params : {bookId: products[0].book_id}}"
                                                    >{{products[0].book_name}}</router-link
                                                >
                                        </h2>
                                        <ul class="rating d-flex">
                                            <li class="on">
                                                <i class="fa fa-star-o"></i>
                                            </li>
                                            <li class="on">
                                                <i class="fa fa-star-o"></i>
                                            </li>
                                            <li class="on">
                                                <i class="fa fa-star-o"></i>
                                            </li>
                                            <li class="on">
                                                <i class="fa fa-star-o"></i>
                                            </li>
                                            <li>
                                                <i class="fa fa-star-o"></i>
                                            </li>
                                            <li>
                                                <i class="fa fa-star-o"></i>
                                            </li>
                                        </ul>
                                        
                                        <p>
                                            {{products[0].book_description}}.
                                        </p>
                                        <ul class="cart__action d-flex">
                                            <li class="cart">
                                                <a href="cart.html"
                                                    >Thêm vào giỏ</a
                                                >
                                            </li>
                                            <li class="wishlist">
                                                <a href="cart.html"></a>
                                            </li>
                                            <li class="compare">
                                                <a href="cart.html"></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <!-- End Single Product -->
                                <!-- Start Single Product -->
                                <div class="list__view mt--40" v-for="(book,index) in paginationProducts.slice(1)" :key="index">
                                    <div class="thumb">
                                        <router-link :to="{ name : 'detailProduct', params : {bookId: book.book_id}}" class="first__img"  v-if="book.images[0]"><img :src="'/dist/book/image/'  + book.images[0].name" alt="product image"></router-link>
                                        <!-- <a
                                            class="second__img animation1"
                                            href="single-product.html"
                                            ><img
                                                src="images/product/4.jpg"
                                                alt="product images"
                                        /></a> -->
                                    </div>
                                    <div class="content">
                                        <h2>
                                            <router-link :to="{ name : 'detailProduct', params : {bookId: book.book_id}}">{{book.book_name}}</router-link>
                                        </h2>
                                        <ul class="rating d-flex">
                                            <li class="on">
                                                <i class="fa fa-star-o"></i>
                                            </li>
                                            <li class="on">
                                                <i class="fa fa-star-o"></i>
                                            </li>
                                            <li class="on">
                                                <i class="fa fa-star-o"></i>
                                            </li>
                                            <li class="on">
                                                <i class="fa fa-star-o"></i>
                                            </li>
                                            <li>
                                                <i class="fa fa-star-o"></i>
                                            </li>
                                            <li>
                                                <i class="fa fa-star-o"></i>
                                            </li>
                                        </ul>
                                        
                                        <p>
                                            {{products[0].book_description}}
                                        </p>
                                        <ul class="cart__action d-flex">
                                            <li class="cart">
                                                <a href="cart.html"
                                                    >Thêm vào giỏ</a
                                                >
                                            </li>
                                            <li class="wishlist">
                                                <a href="cart.html"></a>
                                            </li>
                                            <li class="compare">
                                                <a href="cart.html"></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <!-- End Single Product -->
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Shop Page -->
</template>

<script>
import SlidingPagination from "vue-sliding-pagination";
export default {
    components: {
        SlidingPagination
    },
    data: function() {
        return {
            categories: [],
            products: [],
            paginationProducts: [],
            currentPage: 1,
            totalPages: 10
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
        axios
            .get("/api/v1/books")
            .then(function(res) {
                app.products = res.data;
                if(app.$route.query.keyWord != null){
                    app.filterBy(app.$route.query.keyWord);
                }
                if(app.$route.params.categoryId != null){
                    app.filter(app.$route.params.categoryId);
                    // return;
                }else {
                app.totalPages = Math.ceil(app.products.length / 12);
                app.pageChangeHandler(app.currentPage);
                }
            })
            .catch(function(e) {
                throw e;
            });
    },
    methods: {
        pageChangeHandler(selectedPage) {
            this.currentPage = selectedPage;
            this.paginationProducts = this.products.slice(
                (this.currentPage - 1) * 12,
                this.currentPage * 12
            );
        },
        filter(categoryId) {
            var app = this;
            axios
                .get("/api/v1/filterBooks?categoryId=" + categoryId)
                .then(function(res) {
                    console.log(this);
                    app.products = res.data;
                    app.totalPages = Math.ceil(app.products.length / 12);
                    app.pageChangeHandler(app.currentPage);
                })
                .catch(function(e) {
                    throw e;
                });
        },
        filterBy(keyWord){
            var app = this;
            app.products = app.products.filter(book=>{
                return book.book_name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").indexOf(keyWord.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")) != -1;
            });

        }
    }
};
</script>

<style></style>
