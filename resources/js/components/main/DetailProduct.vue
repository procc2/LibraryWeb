<template>
    <!-- Start main Content -->
    <div class="maincontent bg--white pt--80 pb--55">
        <div class="container">
            <div class="row">
                <div class="col-lg-9 col-12">
                    <div class="wn__single__product">
                        <div class="row">
                            <div class="col-lg-6 col-12">
                                <div class="wn__fotorama__wrapper">
                                    <div
                                        class="fotorama wn__fotorama__action"
                                        data-nav="thumbs"
                                        v-if="book.images"
                                    >
                                        <a href="1.jpg"
                                            ><img
                                                :src="
                                                    '/dist/book/image/' +
                                                        book.images[0].name
                                                "
                                                alt=""
                                        /></a>
                                        <a href="2.jpg"
                                            ><img
                                                src="images/product/2.jpg"
                                                alt=""
                                        /></a>
                                        <a href="3.jpg"
                                            ><img
                                                src="images/product/3.jpg"
                                                alt=""
                                        /></a>
                                        <a href="4.jpg"
                                            ><img
                                                src="images/product/4.jpg"
                                                alt=""
                                        /></a>
                                        <a href="5.jpg"
                                            ><img
                                                src="images/product/5.jpg"
                                                alt=""
                                        /></a>
                                        <a href="6.jpg"
                                            ><img
                                                src="images/product/6.jpg"
                                                alt=""
                                        /></a>
                                        <a href="7.jpg"
                                            ><img
                                                src="images/product/7.jpg"
                                                alt=""
                                        /></a>
                                        <a href="8.jpg"
                                            ><img
                                                src="images/product/8.jpg"
                                                alt=""
                                        /></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-12">
                                <div class="product__info__main">
                                    <h1>{{ book.book_name }}</h1>
                                    <div class="product-reviews-summary d-flex">
                                        <ul class="rating-summary d-flex">
                                            <li>
                                                <i
                                                    class="zmdi zmdi-star-outline"
                                                ></i>
                                            </li>
                                            <li>
                                                <i
                                                    class="zmdi zmdi-star-outline"
                                                ></i>
                                            </li>
                                            <li>
                                                <i
                                                    class="zmdi zmdi-star-outline"
                                                ></i>
                                            </li>
                                            <li class="off">
                                                <i
                                                    class="zmdi zmdi-star-outline"
                                                ></i>
                                            </li>
                                            <li class="off">
                                                <i
                                                    class="zmdi zmdi-star-outline"
                                                ></i>
                                            </li>
                                        </ul>
                                    </div>
                                    <!-- <div class="price-box">
        									<span>$52.00</span>
        								</div> -->
                                    <div class="product__overview">
                                        <p>{{ book.book_description }}</p>
                                    </div>
                                    <div class="box-tocart d-flex">
                                        <!-- <span>Qty</span>
        									<input id="qty" class="input-text qty" name="qty" min="1" value="1" title="Qty" type="number"> -->
                                        <div
                                            v-if="book.ebooks"
                                            class="addtocart__actions"
                                        >
                                            <button
                                                class="tocart"
                                                style="background: #8f85e5 none repeat scroll 0 0;"
                                                v-on:click="read()"
                                            >
                                                Đọc Trực Tuyến
                                            </button>
                                        </div>
                                        <div class="addtocart__actions">
                                            <button
                                                class="tocart"
                                                type="submit"
                                                title="Add to Cart"
                                                v-on:click="addItemToCart()"
                                            >
                                                Thêm vào giỏ
                                            </button>
                                        </div>
                                        <div
                                            class="product-addto-links clearfix"
                                        >
                                            <a
                                                class="wishlist"
                                                href="javascript:void(0)"
                                                v-bind:class="{
                                                    active: isFavorite
                                                }"
                                                v-on:click="toggleLike()"
                                            ></a>
                                            <!-- <a class="compare" href="#"></a> -->
                                        </div>
                                    </div>
                                    <div class="product_meta">
                                        <span class="posted_in"
                                            >Categories:
                                            <router-link
                                                v-for="category in book.categories"
                                                :key="category.category_name"
                                                :to="{
                                                    name: 'grid',
                                                    params: {
                                                        categoryId:
                                                            category.category_id
                                                    }
                                                }"
                                            >
                                                {{ category.category_name }},
                                            </router-link>
                                            <!-- <a href="#">Kids' Music</a> -->
                                        </span>
                                    </div>
                                    <div class="product-share">
                                        <ul>
                                            <li class="categories-title">
                                                Share :
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i
                                                        class="icon-social-twitter icons"
                                                    ></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i
                                                        class="icon-social-tumblr icons"
                                                    ></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i
                                                        class="icon-social-facebook icons"
                                                    ></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i
                                                        class="icon-social-linkedin icons"
                                                    ></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="product__info__detailed">
                        <div
                            class="pro_details_nav nav justify-content-start"
                            role="tablist"
                        >
                            <a
                                class="nav-item nav-link active"
                                data-toggle="tab"
                                href="#nav-details"
                                role="tab"
                                >Details</a
                            >
                            <a
                                class="nav-item nav-link"
                                data-toggle="tab"
                                href="#nav-review"
                                role="tab"
                                >Reviews</a
                            >
                        </div>
                        <div class="tab__container">
                            <!-- Start Single Tab Content -->
                            <div
                                class="pro__tab_label tab-pane fade show active"
                                id="nav-details"
                                role="tabpanel"
                            >
                                <div class="description__attribute">
                                    <p>
                                        Ideal for cold-weather training or work
                                        outdoors, the Chaz Hoodie promises
                                        superior warmth with every wear. Thick
                                        material blocks out the wind as ribbed
                                        cuffs and bottom band seal in body
                                        heat.Ideal for cold-weather training or
                                        work outdoors, the Chaz Hoodie promises
                                        superior warmth with every wear. Thick
                                        material blocks out the wind as ribbed
                                        cuffs and bottom band seal in body
                                        heat.Ideal for cold-weather training or
                                        work outdoors, the Chaz Hoodie promises
                                        superior warmth with every wear. Thick
                                        material blocks out the wind as ribbed
                                        cuffs and bottom band seal in body
                                        heat.Ideal for cold-weather training or
                                        work outdoors, the Chaz Hoodie promises
                                        superior warmth with every wear. Thick
                                        material blocks out the wind as ribbed
                                        cuffs and bottom band seal in body heat.
                                    </p>
                                    <ul>
                                        <li>• Two-tone gray heather hoodie.</li>
                                        <li>• Drawstring-adjustable hood.</li>
                                        <li>• Machine wash/dry.</li>
                                    </ul>
                                </div>
                            </div>
                            <!-- End Single Tab Content -->
                            <!-- Start Single Tab Content -->
                            <div
                                class="pro__tab_label tab-pane fade"
                                id="nav-review"
                                role="tabpanel"
                            >
                                <div class="review__attribute">
                                    <h1>Nhận xét thành viên</h1>
                                    <div
                                        v-for="comment in book.comments"
                                        :key="comment.id"
                                    >
                                        <h2>{{ comment.user.name }}</h2>
                                        <div
                                            class="review__ratings__type d-flex"
                                        >
                                            <div class="review-ratings">
                                                <div
                                                    class="rating-summary d-flex"
                                                >
                                                    <span>Quality</span>
                                                    <ul class="rating d-flex">
                                                        <li>
                                                            <i
                                                                class="zmdi zmdi-star"
                                                            ></i>
                                                        </li>
                                                        <li>
                                                            <i
                                                                class="zmdi zmdi-star"
                                                            ></i>
                                                        </li>
                                                        <li>
                                                            <i
                                                                class="zmdi zmdi-star"
                                                            ></i>
                                                        </li>
                                                        <li class="off">
                                                            <i
                                                                class="zmdi zmdi-star"
                                                            ></i>
                                                        </li>
                                                        <li class="off">
                                                            <i
                                                                class="zmdi zmdi-star"
                                                            ></i>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div
                                                    class="rating-summary d-flex"
                                                >
                                                    <span>Price</span>
                                                    <ul class="rating d-flex">
                                                        <li>
                                                            <i
                                                                class="zmdi zmdi-star"
                                                            ></i>
                                                        </li>
                                                        <li>
                                                            <i
                                                                class="zmdi zmdi-star"
                                                            ></i>
                                                        </li>
                                                        <li>
                                                            <i
                                                                class="zmdi zmdi-star"
                                                            ></i>
                                                        </li>
                                                        <li class="off">
                                                            <i
                                                                class="zmdi zmdi-star"
                                                            ></i>
                                                        </li>
                                                        <li class="off">
                                                            <i
                                                                class="zmdi zmdi-star"
                                                            ></i>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div
                                                    class="rating-summary d-flex"
                                                >
                                                    <span>value</span>
                                                    <ul class="rating d-flex">
                                                        <li>
                                                            <i
                                                                class="zmdi zmdi-star"
                                                            ></i>
                                                        </li>
                                                        <li>
                                                            <i
                                                                class="zmdi zmdi-star"
                                                            ></i>
                                                        </li>
                                                        <li>
                                                            <i
                                                                class="zmdi zmdi-star"
                                                            ></i>
                                                        </li>
                                                        <li class="off">
                                                            <i
                                                                class="zmdi zmdi-star"
                                                            ></i>
                                                        </li>
                                                        <li class="off">
                                                            <i
                                                                class="zmdi zmdi-star"
                                                            ></i>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="review-content">
                                                <p>{{ comment.overview }}</p>
                                                <p>{{ comment.content }}</p>
                                                <p>
                                                    Đăng vào lúc
                                                    {{ comment.updated_at }}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="review-fieldset">
                                    <h2>
                                        Bạn đang review cho mọi người về quyển
                                        sách:
                                    </h2>
                                    <h3>{{ book.book_name }}</h3>
                                    <div class="review-field-ratings">
                                        <div class="product-review-table">
                                            <div
                                                class="review-field-rating d-flex"
                                            >
                                                <span>Quality</span>
                                                <ul class="rating d-flex">
                                                    <li class="off">
                                                        <i
                                                            class="zmdi zmdi-star"
                                                        ></i>
                                                    </li>
                                                    <li class="off">
                                                        <i
                                                            class="zmdi zmdi-star"
                                                        ></i>
                                                    </li>
                                                    <li class="off">
                                                        <i
                                                            class="zmdi zmdi-star"
                                                        ></i>
                                                    </li>
                                                    <li class="off">
                                                        <i
                                                            class="zmdi zmdi-star"
                                                        ></i>
                                                    </li>
                                                    <li class="off">
                                                        <i
                                                            class="zmdi zmdi-star"
                                                        ></i>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div
                                                class="review-field-rating d-flex"
                                            >
                                                <span>Price</span>
                                                <ul class="rating d-flex">
                                                    <li class="off">
                                                        <i
                                                            class="zmdi zmdi-star"
                                                        ></i>
                                                    </li>
                                                    <li class="off">
                                                        <i
                                                            class="zmdi zmdi-star"
                                                        ></i>
                                                    </li>
                                                    <li class="off">
                                                        <i
                                                            class="zmdi zmdi-star"
                                                        ></i>
                                                    </li>
                                                    <li class="off">
                                                        <i
                                                            class="zmdi zmdi-star"
                                                        ></i>
                                                    </li>
                                                    <li class="off">
                                                        <i
                                                            class="zmdi zmdi-star"
                                                        ></i>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div
                                                class="review-field-rating d-flex"
                                            >
                                                <span>Value</span>
                                                <ul class="rating d-flex">
                                                    <li class="off">
                                                        <i
                                                            class="zmdi zmdi-star"
                                                        ></i>
                                                    </li>
                                                    <li class="off">
                                                        <i
                                                            class="zmdi zmdi-star"
                                                        ></i>
                                                    </li>
                                                    <li class="off">
                                                        <i
                                                            class="zmdi zmdi-star"
                                                        ></i>
                                                    </li>
                                                    <li class="off">
                                                        <i
                                                            class="zmdi zmdi-star"
                                                        ></i>
                                                    </li>
                                                    <li class="off">
                                                        <i
                                                            class="zmdi zmdi-star"
                                                        ></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="review_form_field" v-if="user">
                                        <div class="input__box">
                                            <span>Tên</span>
                                            <input
                                                id="nickname_field"
                                                v-model="user.name"
                                                type="text"
                                                name="nickname"
                                                disabled
                                            />
                                        </div>
                                        <div class="input__box">
                                            <span>Đánh giá</span>
                                            <input
                                                id="summery_field"
                                                type="text"
                                                v-model="comment.overview"
                                                name="summery"
                                            />
                                        </div>
                                        <div class="input__box">
                                            <span>Chi tiết hơn ?</span>
                                            <textarea
                                                name="review"
                                                v-model="comment.content"
                                            ></textarea>
                                        </div>
                                        <div class="review-form-actions">
                                            <button v-on:click="addComment()">
                                                Đăng
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- End Single Tab Content -->
                        </div>
                    </div>
                    <div class="wn__related__product pt--80 pb--50">
                        <div class="section__title text-center">
                            <h2 class="title__be--2">Related Products</h2>
                        </div>
                        <carousel
                            :loop="true"
                            :navText="navText"
                            :margin="0"
                            :nav="true"
                            :autoplay="false"
                            :autoplayTimeout="10000"
                            :items="3"
                            :dots="false"
                            :lazyLoad="true"
                            :responsive="{
                                0: {
                                    items: 1
                                },
                                576: {
                                    items: 2
                                },
                                768: {
                                    items: 3
                                },
                                1920: {
                                    items: 3
                                }
                            }"
                            :key="refreshKey"
                            class="productcategory__slide--2 arrows_style row mt--60"
                        >
                            <!-- Start Single Product -->
                            <div
                                class="product product__style--3 col-lg-4 col-md-4 col-sm-6 col-12"
                                v-for="(book, index) in relatedBooks"
                                :key="index"
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
                                    <a
                                        class="second__img animation1"
                                        href="single-product.html"
                                        ><img
                                            src="images/books/2.jpg"
                                            alt="product image"
                                    /></a>
                                    <div class="hot__box">
                                        <span class="hot-label"
                                            >BEST SALLER</span
                                        >
                                    </div>
                                </div>
                                <div class="product__content content--center">
                                    <h4>
                                        <router-link
                                            :to="{
                                                name: 'detailProduct',
                                                params: { bookId: book.book_id }
                                            }"
                                            >{{ book.book_name }}</router-link
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
                                                    <a class="compare" href="#"
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
                            <!-- Start Single Product -->
                        </carousel>
                    </div>
                </div>
                <div class="col-lg-3 col-12 md-mt-40 sm-mt-40">
                    <div class="shop__sidebar">
                        <aside class="wedget__categories poroduct--cat">
                            <h3 class="wedget__title">Product Categories</h3>
                            <ul>
                                <li
                                    v-for="category in categories"
                                    :key="category.category_id"
                                >
                                    <router-link
                                        :to="{
                                            name: 'grid',
                                            params: {
                                                categoryId: category.category_id
                                            }
                                        }"
                                        >{{ category.category_name }}
                                        <span
                                            >({{
                                                Math.floor(Math.random() * 11)
                                            }})</span
                                        ></router-link
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
                        <aside class="wedget__categories poroduct--compare">
                            <h3 class="wedget__title">Compare</h3>
                            <ul>
                                <li>
                                    <a href="#">x</a
                                    ><a href="#">Condimentum posuere</a>
                                </li>
                                <li>
                                    <a href="#">x</a
                                    ><a href="#">Condimentum posuere</a>
                                </li>
                                <li>
                                    <a href="#">x</a
                                    ><a href="#">Dignissim venenatis</a>
                                </li>
                            </ul>
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
            </div>
        </div>
        <BookViewer
            v-if="book.ebooks"
            v-bind:ebook="book.ebooks"
            :key="book.book_id"
        />
    </div>
    <!-- End main Content -->
</template>

<script>
import carousel from "vue-owl-carousel";
import { mapState, mapActions } from "vuex";
import BookViewer from "./BookViewer";
export default {
    components: {
        BookViewer,
        carousel
    },
    data: function() {
        return {
            refreshKey: 0,
            navText: [
                '<i class="zmdi zmdi-chevron-left"></i>',
                '<i class="zmdi zmdi-chevron-right"></i>'
            ],
            book: {
                book_name: "",
                book_image: "",
                author: {
                    author_name: ""
                },
                publisher: {
                    publisher_name: ""
                },
                is_on_load: 1,
                is_special: "",
                categoryIds: [],
                book_description: "",
                comments: []
            },
            categories: [],
            isFavorite: false,
            comment: {
                overview: "",
                content: ""
            },
            relatedBooks: []
        };
    },
    computed: {
        ...mapState("account", ["status", "user"])
    },
    mounted() {
        var app = this;
        axios
            .get("/api/v1/books/" + app.$route.params.bookId)
            .then(function(res) {
                console.log(res);
                app.book = res.data;
                if (app.user)
                    axios
                        .get("/api/v1/favorites", {
                            params: {
                                user_id: app.user.user_id,
                                book_id: app.book.book_id
                            }
                        })
                        .then(function(res) {
                            // console.log(res.data);
                            console.log(res);
                            app.isFavorite = res.data.isFavorite;
                        })
                        .catch(function(e) {
                            throw e;
                        });
                axios
                    .get("/api/v1/filterBooks?authorId=" + app.book.author_id)
                    .then(function(res) {
                        app.relatedBooks = res.data.filter(
                            x => x.book_id != app.book.book_id
                        );
                        app.refreshKey++;
                    })
                    .catch(function(e) {
                        throw e;
                    });
            })
            .catch(function(e) {
                throw e;
            });
        axios
            .get("/api/v1/categories")
            .then(function(res) {
                app.categories = res.data;
            })
            .catch(function(e) {
                throw e;
            });
    },
    methods: {
        ...mapActions("cart", ["addProductToCart"]),
        addItemToCart() {
            var app = this;
            if (!app.status.loggedIn) {
                app.$modal.show("login");
                return null;
            } else {
                let options = {
                    okText: "Đóng",
                    animation: "zoom"
                };
                if (app.book.remaining_stock > 0) {
                    var cartDetail = {
                        user_id: app.user.user_id,
                        book_id: app.book.book_id
                    };
                    var book = app.book;
                    app.addProductToCart({ cartDetail, book }).then(res => {
                        this.$dialog.alert(
                            res
                                ? "Bạn đã thêm vào giỏ hàng thành công !"
                                : "Thêm vào giỏ hàng thất bại ! Bạn đã có sản phẩm này trong giỏ hàng",
                            options
                        );
                    });
                } else {
                    this.$dialog.alert(
                                 "Thêm vào giỏ hàng thất bại ! Hiện tại sách này cho mượn không khả dụng, Bạn hãy thử lại vào 1 khoảng thời gian khác",
                            options
                        );
                }
            }
        },
        toggleLike() {
            var app = this;
            console.log(app.status);
            if (!app.status.loggedIn) {
                app.$modal.show("login");
                return null;
            } else {
                if (!app.isFavorite) {
                    axios
                        .post("/api/v1/favorites", {
                            user_id: app.user.user_id,
                            book_id: app.book.book_id
                        })
                        .then(function(res) {
                            // console.log(res.data);
                            console.log(res);
                        })
                        .catch(function(e) {
                            throw e;
                        });
                } else {
                    axios
                        .delete("/api/v1/favorites", {
                            data: {
                                user_id: app.user.user_id,
                                book_id: app.book.book_id
                            }
                        })
                        .then(function(res) {
                            // console.log(res.data);
                            console.log(res);
                        })
                        .catch(function(e) {
                            throw e;
                        });
                }
                console.log(app.isFavorite);
                app.isFavorite = !app.isFavorite;
            }
        },
        read() {
            if (!this.status.loggedIn) {
                this.$modal.show("login");
            } else {
                this.$modal.show("viewer");
            }
        },
        addComment() {
            var app = this;

            axios
                .post("/api/v1/comments", {
                    user_id: app.user.user_id,
                    book_id: app.book.book_id,
                    overview: app.comment.overview,
                    content: app.comment.content
                })
                .then(function(res) {
                    // console.log(res.data);
                    var newComment = res.data;
                    newComment["user"] = {
                        user_name: app.user.user_name
                    };
                    app.book.comments.push(newComment);
                    scrollTo(0, 900);
                    app.comment.overview = "";
                    app.comment.content = "";
                })
                .catch(function(e) {
                    throw e;
                });
        }
    }
};
</script>

<style></style>
