<template>
    <!-- <div>
    <div class="products">
        <h2 class="h2-bar">Ấn phẩm đặc biệt</h2>
        <div class="row">
            <div class="col-md-3 col-sm-6 product-item text-center" v-for="book in specialProducts" :key="book.book_id">
                <router-link :to="{ name : 'detailProduct', params : {bookId: book.book_id}}" v-if="book.images[0]"><img width="80" height="144" :src="'/dist/book/image/'  + book.images[0].name"></router-link>
                <h3><router-link :to="{ name : 'detailProduct', params : {bookId: book.book_id}}">{{book.book_name}}</router-link></h3>
                <p>Tác giả: {{book.author.author_name}}</p>
                <p>Tình trạng: {{book.is_on_loan}}</p>
            </div>   
           
        </div>
    </div>
    
    <div class="products">
        <h2 class="h2-bar">Ấn phẩm mới</h2>
        <div class="row">
            
            <div class="col-md-3 col-sm-6 product-item text-center" v-for="book in newProducts" :key="book.book_id">
                <router-link :to="{ name : 'detailProduct', params : {bookId: book.book_id}}" v-if="book.images[0]"><img width="80" height="144" :src="'/dist/book/image/'  + book.images[0].name"></router-link>
                <h3><router-link :to="{ name : 'detailProduct', params : {bookId: book.book_id}}">{{book.book_name}}</router-link></h3>
                <p>Tác giả: {{book.author.author_name}}</p>
                <p>Tình trạng: {{book.is_on_loan}}</p>
            </div>
        </div>
    </div>
</div> -->
    <!-- Start BEst Seller Area -->
    <div>
        <section class="wn__product__area brown--color pt--80  pb--30">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section__title text-center">
                            <h2 class="title__be--2">
                                New <span class="color--theme">Products</span>
                            </h2>
                            <p>
                                There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                lebmid alteration in some ledmid form
                            </p>
                        </div>
                    </div>
                </div>
                <!-- Start Single Tab Content -->
                <carousel
                    :loop="true"
					:navText = navText
                    :autoplay="false"
                    :margin="0"
                    :autoplayTimeout="10000"
                    :dots="false"
                    :items="4"
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
                        992: {
                            items: 4
                        },
                        1920: {
                            items: 4
                        }
                    }"
                    :key="refresh"
                    class="furniture--4 border--round arrows_style row mt--50"
                >
                    <!-- Start Single Product -->
                    <div
                        class="product product__style--3"
                        v-for="book in newProducts"
                        :key="book.book_id"
                    >
                        <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                            <div class="product__thumb">
                                <router-link :to="{ name : 'detailProduct', params : {bookId: book.book_id}}" class="first__img"  v-if="book.images[0]"><img :src="'/dist/book/image/'  + book.images[0].name" alt="product image"></router-link>
                                <a
                                    class="second__img animation1"
                                    href="single-product.html"
                                    ><img
                                        src="images/books/2.jpg"
                                        alt="product image"
                                /></a>
                                <div class="hot__box">
                                    <span class="hot-label">BEST SALLER</span>
                                </div>
                            </div>
                            <div class="product__content content--center">
                                <h4><router-link :to="{ name : 'detailProduct', params : {bookId: book.book_id}}">{{book.book_name}}</router-link></h4>
                                <ul class="prize d-flex">
                                    <li>$35.00</li>
                                    <li class="old_prize">$35.00</li>
                                </ul>
                                <div class="action">
                                    <div class="actions_inner">
                                        <ul class="add_to_links">
                                            <li>
                                                <a class="cart" href="cart.html"
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
                                                    ><i class="bi bi-search"></i
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
                                        <li><i class="fa fa-star-o"></i></li>
                                        <li><i class="fa fa-star-o"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Start Single Product -->
                </carousel>
                <!-- End Single Tab Content -->
            </div>
        </section>
        <!-- Start NEwsletter Area -->
        <section class="wn__newsletter__area bg-image--2">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7 offset-lg-5 col-md-12 col-12 ptb--150">
                        <div class="section__title text-center">
                            <h2>Stay With Us</h2>
                        </div>
                        <div class="newsletter__block text-center">
                            <p>
                                Subscribe to our newsletters now and stay
                                up-to-date with new collections, the latest
                                lookbooks and exclusive offers.
                            </p>
                            <form action="#">
                                <div class="newsletter__box">
                                    <input
                                        type="email"
                                        placeholder="Enter your e-mail"
                                    />
                                    <button>Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End NEwsletter Area -->
        <!-- Start Best Seller Area -->
        <section class="wn__bestseller__area bg--white pt--80  pb--30">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section__title text-center">
                            <h2 class="title__be--2">
                                All <span class="color--theme">Products</span>
                            </h2>
                            <p>
                                There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                lebmid alteration in some ledmid form
                            </p>
                        </div>
                    </div>
                </div>
                <div class="row mt--50">
                    <div class="col-md-12 col-lg-12 col-sm-12">
                        <div
                            class="product__nav nav justify-content-center"
                            role="tablist"
                        >
                            <!-- <a
                                class="nav-item nav-link active"
                                data-toggle="tab"
                                href="#nav-all"
                                role="tab"
                                >ALL</a
                            > -->
                             <a
                                class="nav-item nav-link"
                                data-toggle="tab"
                                href="#nav-all"
                                role="tab"
								v-for="category in categories" :key="category.category_id"
                                v-on:click = "getDetail(category.category_id)"
                                >{{ category.category_name }}</a
                            >
                           <!-- <a
                                class="nav-item nav-link"
                                data-toggle="tab"
                                href="#nav-adventure"
                                role="tab"
                                >ADVENTURE</a
                            >
                            <a
                                class="nav-item nav-link"
                                data-toggle="tab"
                                href="#nav-children"
                                role="tab"
                                >CHILDREN</a
                            >
                            <a
                                class="nav-item nav-link"
                                data-toggle="tab"
                                href="#nav-cook"
                                role="tab"
                                >COOK</a
                            > -->
                        </div>
                    </div>
                </div>
                <div class="tab__container mt--60">
                    <!-- Start Single Tab Content -->
                    <div
                        class="single__tab tab-pane fade show active"
                        id="nav-all"
                        role="tabpanel"
                    >
                        <carousel
                                :loop="true"
								:navText = navText
								:margin="0"
								:nav="true"
								:autoplay="false"
								:autoplayTimeout="10000"
								:items="1"
								:dots="false"
								:lazyLoad="true"
								:responsive="{
									0:{
									items:1
									},
									576:{
									items:2
									},
									768:{
									items:3
									},
									992:{
										items:4
									},
									1920:{
									items:4
									}
								}"
								:key="refreshProductNav"
                            class="product__indicator--4 arrows_style"
                        >
                            <div class="single__product" v-for="(key,index) in Math.ceil(products.length/2)" :key="index">
                                <!-- Start Single Product -->
                                <div class="col-lg-3 col-md-4 col-sm-6 col-12" v-if="products[2 * index] != null">
                                    <div class="product product__style--3">
                                        <div class="product__thumb">
                                            
                                            <router-link :to="{ name : 'detailProduct', params : {bookId: products[2*index].book_id}}" class="first__img"  v-if="products[2*index].images[0]"><img :src="'/dist/book/image/'  + products[2*index].images[0].name" alt="product image"></router-link>
                                            <router-link
                                                class="second__img animation1"
                                                :to="{ name : 'detailProduct', params : {bookId: products[2*index].book_id}}"
                                                ><img
                                                    src="images/books/2.jpg"
                                                    alt="product image"
                                            /></router-link>
                                            <div class="hot__box">
                                                <span class="hot-label"
                                                    >BEST SALER</span
                                                >
                                            </div>
                                        </div>
                                        <div
                                            class="product__content content--center content--center"
                                        >
                                            <h4>
                                                <router-link :to="{ name : 'detailProduct', params : {bookId: products[2*index].book_id}}"
                                                    >{{products[2*index].book_name}}</router-link
                                                >
                                            </h4>
                                            <ul class="prize d-flex">
                                                <li>$50.00</li>
                                                <li class="old_prize">
                                                    $35.00
                                                </li>
                                            </ul>
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
                                            <div
                                                class="product__hover--content"
                                            >
                                                <ul class="rating d-flex">
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Start Single Product -->
                                <!-- Start Single Product -->
                                <div class="col-lg-3 col-md-4 col-sm-6 col-12" v-if="products[2 * index + 1] != null">
                                    <div class="product product__style--3">
                                        <div class="product__thumb">
                                            <router-link :to="{ name : 'detailProduct', params : {bookId: products[2*index + 1].book_id}}" class="first__img"  v-if="products[2*index + 1].images[0]"><img :src="'/dist/book/image/'  + products[2*index + 1].images[0].name" alt="product image"></router-link>
                                            <router-link
                                                class="second__img animation1"
                                                :to="{ name : 'detailProduct', params : {bookId: products[2*index + 1].book_id}}"
                                                ><img
                                                    src="images/books/9.jpg"
                                                    alt="product image"
                                            /></router-link>
                                            <div class="hot__box">
                                                <span class="hot-label"
                                                    >BEST SALER</span
                                                >
                                            </div>
                                        </div>
                                        <div
                                            class="product__content content--center content--center"
                                        >
                                            <h4>
                                                <router-link :to="{ name : 'detailProduct', params : {bookId: products[2*index + 1].book_id}}"
                                                    >{{products[2*index + 1].book_name}}</router-link
                                                >
                                            </h4>
                                            <ul class="prize d-flex">
                                                <li>$50.00</li>
                                                <li class="old_prize">
                                                    $35.00
                                                </li>
                                            </ul>
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
                                            <div
                                                class="product__hover--content"
                                            >
                                                <ul class="rating d-flex">
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Start Single Product -->
                            </div>
                            
                        </carousel>
                    </div>
                    <!-- End Single Tab Content -->
                    <!-- Start Single Tab Content -->
                    <div
                        class="row single__tab tab-pane fade"
                        id="nav-all2"
                        role="tabpanel"
                    >
                        <carousel
						        :loop="true"
								:navText = navText
								:margin="0"
								:nav="true"
								:autoplay= "false"
								:autoplayTimeout= "10000"
								:items="4"
								:dots= "false"
								:lazyLoad= "true"
								:responsive="{
									0:{
									items:1
									},
									576:{
									items:2
									},
									768:{
									items:3
									},
									992:{
										items:4
									},
									1920:{
									items:4
									}
								}"
                            class="product__indicator--4 arrows_style"
                        >
                            <div class="single__product">
                                <!-- Start Single Product -->
                                <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div class="product product__style--3">
                                        <div class="product__thumb">
                                            <a
                                                class="first__img"
                                                href="single-product.html"
                                                ><img
                                                    src="images/books/9.jpg"
                                                    alt="product image"
                                            /></a>
                                            <a
                                                class="second__img animation1"
                                                href="single-product.html"
                                                ><img
                                                    src="images/books/1.jpg"
                                                    alt="product image"
                                            /></a>
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
                                                <a href="single-product.html"
                                                    >Bowen Greenwood</a
                                                >
                                            </h4>
                                            <ul class="prize d-flex">
                                                <li>$40.00</li>
                                                <li class="old_prize">
                                                    $35.00
                                                </li>
                                            </ul>
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
                                            <div
                                                class="product__hover--content"
                                            >
                                                <ul class="rating d-flex">
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Start Single Product -->
                                <!-- Start Single Product -->
                                <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div class="product product__style--3">
                                        <div class="product__thumb">
                                            <a
                                                class="first__img"
                                                href="single-product.html"
                                                ><img
                                                    src="images/books/10.jpg"
                                                    alt="product image"
                                            /></a>
                                            <a
                                                class="second__img animation1"
                                                href="single-product.html"
                                                ><img
                                                    src="images/books/8.jpg"
                                                    alt="product image"
                                            /></a>
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
                                                <a href="single-product.html"
                                                    >Bowen Greenwood</a
                                                >
                                            </h4>
                                            <ul class="prize d-flex">
                                                <li>$40.00</li>
                                                <li class="old_prize">
                                                    $35.00
                                                </li>
                                            </ul>
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
                                            <div
                                                class="product__hover--content"
                                            >
                                                <ul class="rating d-flex">
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Start Single Product -->
                            </div>
                            
                        </carousel>
                    </div>
                    <!-- End Single Tab Content -->
                    <!-- Start Single Tab Content -->
                    <div
                        class="row single__tab tab-pane fade"
                        id="nav-adventure"
                        role="tabpanel"
                    >
                        <div
                            class="product__indicator--4 arrows_style owl-carousel owl-theme"
                        >
                            <div class="single__product">
                                <!-- Start Single Product -->
                                <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div class="product product__style--3">
                                        <div class="product__thumb">
                                            <a
                                                class="first__img"
                                                href="single-product.html"
                                                ><img
                                                    src="images/books/8.jpg"
                                                    alt="product image"
                                            /></a>
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
                                        <div
                                            class="product__content content--center"
                                        >
                                            <h4>
                                                <a href="single-product.html"
                                                    >Bowen Greenwood</a
                                                >
                                            </h4>
                                            <ul class="prize d-flex">
                                                <li>$40.00</li>
                                                <li class="old_prize">
                                                    $35.00
                                                </li>
                                            </ul>
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
                                            <div
                                                class="product__hover--content"
                                            >
                                                <ul class="rating d-flex">
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Start Single Product -->
                                <!-- Start Single Product -->
                                <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div class="product product__style--3">
                                        <div class="product__thumb">
                                            <a
                                                class="first__img"
                                                href="single-product.html"
                                                ><img
                                                    src="images/books/12.jpg"
                                                    alt="product image"
                                            /></a>
                                            <a
                                                class="second__img animation1"
                                                href="single-product.html"
                                                ><img
                                                    src="images/books/6.jpg"
                                                    alt="product image"
                                            /></a>
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
                                                <a href="single-product.html"
                                                    >Bowen Greenwood</a
                                                >
                                            </h4>
                                            <ul class="prize d-flex">
                                                <li>$40.00</li>
                                                <li class="old_prize">
                                                    $35.00
                                                </li>
                                            </ul>
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
                                            <div
                                                class="product__hover--content"
                                            >
                                                <ul class="rating d-flex">
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Start Single Product -->
                            </div>
                            <div class="single__product">
                                <!-- Start Single Product -->
                                <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div class="product product__style--3">
                                        <div class="product__thumb">
                                            <a
                                                class="first__img"
                                                href="single-product.html"
                                                ><img
                                                    src="images/books/11.jpg"
                                                    alt="product image"
                                            /></a>
                                            <a
                                                class="second__img animation1"
                                                href="single-product.html"
                                                ><img
                                                    src="images/books/1.jpg"
                                                    alt="product image"
                                            /></a>
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
                                                <a href="single-product.html"
                                                    >Bowen Greenwood</a
                                                >
                                            </h4>
                                            <ul class="prize d-flex">
                                                <li>$40.00</li>
                                                <li class="old_prize">
                                                    $35.00
                                                </li>
                                            </ul>
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
                                            <div
                                                class="product__hover--content"
                                            >
                                                <ul class="rating d-flex">
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Start Single Product -->
                                <!-- Start Single Product -->
                                <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div class="product product__style--3">
                                        <div class="product__thumb">
                                            <a
                                                class="first__img"
                                                href="single-product.html"
                                                ><img
                                                    src="images/books/5.jpg"
                                                    alt="product image"
                                            /></a>
                                            <a
                                                class="second__img animation1"
                                                href="single-product.html"
                                                ><img
                                                    src="images/books/11.jpg"
                                                    alt="product image"
                                            /></a>
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
                                                <a href="single-product.html"
                                                    >Bowen Greenwood</a
                                                >
                                            </h4>
                                            <ul class="prize d-flex">
                                                <li>$40.00</li>
                                                <li class="old_prize">
                                                    $35.00
                                                </li>
                                            </ul>
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
                                            <div
                                                class="product__hover--content"
                                            >
                                                <ul class="rating d-flex">
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Start Single Product -->
                            </div>
                            <div class="single__product">
                                <!-- Start Single Product -->
                                <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div class="product product__style--3">
                                        <div class="product__thumb">
                                            <a
                                                class="first__img"
                                                href="single-product.html"
                                                ><img
                                                    src="images/books/4.jpg"
                                                    alt="product image"
                                            /></a>
                                            <a
                                                class="second__img animation1"
                                                href="single-product.html"
                                                ><img
                                                    src="images/books/10.jpg"
                                                    alt="product image"
                                            /></a>
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
                                                <a href="single-product.html"
                                                    >Bowen Greenwood</a
                                                >
                                            </h4>
                                            <ul class="prize d-flex">
                                                <li>$40.00</li>
                                                <li class="old_prize">
                                                    $35.00
                                                </li>
                                            </ul>
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
                                            <div
                                                class="product__hover--content"
                                            >
                                                <ul class="rating d-flex">
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Start Single Product -->
                                <!-- Start Single Product -->
                                <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div class="product product__style--3">
                                        <div class="product__thumb">
                                            <a
                                                class="first__img"
                                                href="single-product.html"
                                                ><img
                                                    src="images/books/3.jpg"
                                                    alt="product image"
                                            /></a>
                                            <a
                                                class="second__img animation1"
                                                href="single-product.html"
                                                ><img
                                                    src="images/books/1.jpg"
                                                    alt="product image"
                                            /></a>
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
                                                <a href="single-product.html"
                                                    >Bowen Greenwood</a
                                                >
                                            </h4>
                                            <ul class="prize d-flex">
                                                <li>$40.00</li>
                                                <li class="old_prize">
                                                    $35.00
                                                </li>
                                            </ul>
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
                                            <div
                                                class="product__hover--content"
                                            >
                                                <ul class="rating d-flex">
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Start Single Product -->
                            </div>
                            <div class="single__product">
                                <!-- Start Single Product -->
                                <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div class="product product__style--3">
                                        <div class="product__thumb">
                                            <a
                                                class="first__img"
                                                href="single-product.html"
                                                ><img
                                                    src="images/books/9.jpg"
                                                    alt="product image"
                                            /></a>
                                            <a
                                                class="second__img animation1"
                                                href="single-product.html"
                                                ><img
                                                    src="images/books/4.jpg"
                                                    alt="product image"
                                            /></a>
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
                                                <a href="single-product.html"
                                                    >Bowen Greenwood</a
                                                >
                                            </h4>
                                            <ul class="prize d-flex">
                                                <li>$40.00</li>
                                                <li class="old_prize">
                                                    $35.00
                                                </li>
                                            </ul>
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
                                            <div
                                                class="product__hover--content"
                                            >
                                                <ul class="rating d-flex">
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Start Single Product -->
                                <!-- Start Single Product -->
                                <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div class="product product__style--3">
                                        <div class="product__thumb">
                                            <a
                                                class="first__img"
                                                href="single-product.html"
                                                ><img
                                                    src="images/books/7.jpg"
                                                    alt="product image"
                                            /></a>
                                            <a
                                                class="second__img animation1"
                                                href="single-product.html"
                                                ><img
                                                    src="images/books/3.jpg"
                                                    alt="product image"
                                            /></a>
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
                                                <a href="single-product.html"
                                                    >Bowen Greenwood</a
                                                >
                                            </h4>
                                            <ul class="prize d-flex">
                                                <li>$40.00</li>
                                                <li class="old_prize">
                                                    $35.00
                                                </li>
                                            </ul>
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
                                            <div
                                                class="product__hover--content"
                                            >
                                                <ul class="rating d-flex">
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Start Single Product -->
                            </div>
                            <div class="single__product">
                                <!-- Start Single Product -->
                                <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div class="product product__style--3">
                                        <div class="product__thumb">
                                            <a
                                                class="first__img"
                                                href="single-product.html"
                                                ><img
                                                    src="images/books/6.jpg"
                                                    alt="product image"
                                            /></a>
                                            <a
                                                class="second__img animation1"
                                                href="single-product.html"
                                                ><img
                                                    src="images/books/4.jpg"
                                                    alt="product image"
                                            /></a>
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
                                                <a href="single-product.html"
                                                    >Bowen Greenwood</a
                                                >
                                            </h4>
                                            <ul class="prize d-flex">
                                                <li>$40.00</li>
                                                <li class="old_prize">
                                                    $35.00
                                                </li>
                                            </ul>
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
                                            <div
                                                class="product__hover--content"
                                            >
                                                <ul class="rating d-flex">
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Start Single Product -->
                                <!-- Start Single Product -->
                                <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div class="product product__style--3">
                                        <div class="product__thumb">
                                            <a
                                                class="first__img"
                                                href="single-product.html"
                                                ><img
                                                    src="images/books/4.jpg"
                                                    alt="product image"
                                            /></a>
                                            <a
                                                class="second__img animation1"
                                                href="single-product.html"
                                                ><img
                                                    src="images/books/10.jpg"
                                                    alt="product image"
                                            /></a>
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
                                                <a href="single-product.html"
                                                    >Bowen Greenwood</a
                                                >
                                            </h4>
                                            <ul class="prize d-flex">
                                                <li>$40.00</li>
                                                <li class="old_prize">
                                                    $35.00
                                                </li>
                                            </ul>
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
                                            <div
                                                class="product__hover--content"
                                            >
                                                <ul class="rating d-flex">
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Start Single Product -->
                            </div>
                        </div>
                    </div>
                    <!-- End Single Tab Content -->
                    <!-- Start Single Tab Content -->
                    <div
                        class="row single__tab tab-pane fade"
                        id="nav-children"
                        role="tabpanel"
                    >
                        <div
                            class="product__indicator--4 arrows_style owl-carousel owl-theme"
                        >
                            <div class="single__product">
                                <!-- Start Single Product -->
                                <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div class="product product__style--3">
                                        <div class="product__thumb">
                                            <a
                                                class="first__img"
                                                href="single-product.html"
                                                ><img
                                                    src="images/books/3.jpg"
                                                    alt="product image"
                                            /></a>
                                            <a
                                                class="second__img animation1"
                                                href="single-product.html"
                                                ><img
                                                    src="images/books/1.jpg"
                                                    alt="product image"
                                            /></a>
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
                                                <a href="single-product.html"
                                                    >Bowen Greenwood</a
                                                >
                                            </h4>
                                            <ul class="prize d-flex">
                                                <li>$40.00</li>
                                                <li class="old_prize">
                                                    $35.00
                                                </li>
                                            </ul>
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
                                            <div
                                                class="product__hover--content"
                                            >
                                                <ul class="rating d-flex">
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Start Single Product -->
                                <!-- Start Single Product -->
                                <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div class="product product__style--3">
                                        <div class="product__thumb">
                                            <a
                                                class="first__img"
                                                href="single-product.html"
                                                ><img
                                                    src="images/books/6.jpg"
                                                    alt="product image"
                                            /></a>
                                            <a
                                                class="second__img animation1"
                                                href="single-product.html"
                                                ><img
                                                    src="images/books/4.jpg"
                                                    alt="product image"
                                            /></a>
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
                                                <a href="single-product.html"
                                                    >Bowen Greenwood</a
                                                >
                                            </h4>
                                            <ul class="prize d-flex">
                                                <li>$40.00</li>
                                                <li class="old_prize">
                                                    $35.00
                                                </li>
                                            </ul>
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
                                            <div
                                                class="product__hover--content"
                                            >
                                                <ul class="rating d-flex">
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Start Single Product -->
                            </div>
                            <div class="single__product">
                                <!-- Start Single Product -->
                                <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div class="product product__style--3">
                                        <div class="product__thumb">
                                            <a
                                                class="first__img"
                                                href="single-product.html"
                                                ><img
                                                    src="images/books/10.jpg"
                                                    alt="product image"
                                            /></a>
                                            <a
                                                class="second__img animation1"
                                                href="single-product.html"
                                                ><img
                                                    src="images/books/12.jpg"
                                                    alt="product image"
                                            /></a>
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
                                                <a href="single-product.html"
                                                    >Bowen Greenwood</a
                                                >
                                            </h4>
                                            <ul class="prize d-flex">
                                                <li>$40.00</li>
                                                <li class="old_prize">
                                                    $35.00
                                                </li>
                                            </ul>
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
                                            <div
                                                class="product__hover--content"
                                            >
                                                <ul class="rating d-flex">
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Start Single Product -->
                                <!-- Start Single Product -->
                                <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div class="product product__style--3">
                                        <div class="product__thumb">
                                            <a
                                                class="first__img"
                                                href="single-product.html"
                                                ><img
                                                    src="images/books/7.jpg"
                                                    alt="product image"
                                            /></a>
                                            <a
                                                class="second__img animation1"
                                                href="single-product.html"
                                                ><img
                                                    src="images/books/9.jpg"
                                                    alt="product image"
                                            /></a>
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
                                                <a href="single-product.html"
                                                    >Bowen Greenwood</a
                                                >
                                            </h4>
                                            <ul class="prize d-flex">
                                                <li>$40.00</li>
                                                <li class="old_prize">
                                                    $35.00
                                                </li>
                                            </ul>
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
                                            <div
                                                class="product__hover--content"
                                            >
                                                <ul class="rating d-flex">
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Start Single Product -->
                            </div>
                            <div class="single__product">
                                <!-- Start Single Product -->
                                <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div class="product product__style--3">
                                        <div class="product__thumb">
                                            <a
                                                class="first__img"
                                                href="single-product.html"
                                                ><img
                                                    src="images/books/2.jpg"
                                                    alt="product image"
                                            /></a>
                                            <a
                                                class="second__img animation1"
                                                href="single-product.html"
                                                ><img
                                                    src="images/books/5.jpg"
                                                    alt="product image"
                                            /></a>
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
                                                <a href="single-product.html"
                                                    >Bowen Greenwood</a
                                                >
                                            </h4>
                                            <ul class="prize d-flex">
                                                <li>$40.00</li>
                                                <li class="old_prize">
                                                    $35.00
                                                </li>
                                            </ul>
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
                                            <div
                                                class="product__hover--content"
                                            >
                                                <ul class="rating d-flex">
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Start Single Product -->
                                <!-- Start Single Product -->
                                <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div class="product product__style--3">
                                        <div class="product__thumb">
                                            <a
                                                class="first__img"
                                                href="single-product.html"
                                                ><img
                                                    src="images/books/4.jpg"
                                                    alt="product image"
                                            /></a>
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
                                        <div
                                            class="product__content content--center"
                                        >
                                            <h4>
                                                <a href="single-product.html"
                                                    >Bowen Greenwood</a
                                                >
                                            </h4>
                                            <ul class="prize d-flex">
                                                <li>$40.00</li>
                                                <li class="old_prize">
                                                    $35.00
                                                </li>
                                            </ul>
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
                                            <div
                                                class="product__hover--content"
                                            >
                                                <ul class="rating d-flex">
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Start Single Product -->
                            </div>
                            <div class="single__product">
                                <!-- Start Single Product -->
                                <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div class="product product__style--3">
                                        <div class="product__thumb">
                                            <a
                                                class="first__img"
                                                href="single-product.html"
                                                ><img
                                                    src="images/books/12.jpg"
                                                    alt="product image"
                                            /></a>
                                            <a
                                                class="second__img animation1"
                                                href="single-product.html"
                                                ><img
                                                    src="images/books/6.jpg"
                                                    alt="product image"
                                            /></a>
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
                                                <a href="single-product.html"
                                                    >Bowen Greenwood</a
                                                >
                                            </h4>
                                            <ul class="prize d-flex">
                                                <li>$40.00</li>
                                                <li class="old_prize">
                                                    $35.00
                                                </li>
                                            </ul>
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
                                            <div
                                                class="product__hover--content"
                                            >
                                                <ul class="rating d-flex">
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Start Single Product -->
                                <!-- Start Single Product -->
                                <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div class="product product__style--3">
                                        <div class="product__thumb">
                                            <a
                                                class="first__img"
                                                href="single-product.html"
                                                ><img
                                                    src="images/books/9.jpg"
                                                    alt="product image"
                                            /></a>
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
                                        <div
                                            class="product__content content--center"
                                        >
                                            <h4>
                                                <a href="single-product.html"
                                                    >Bowen Greenwood</a
                                                >
                                            </h4>
                                            <ul class="prize d-flex">
                                                <li>$40.00</li>
                                                <li class="old_prize">
                                                    $35.00
                                                </li>
                                            </ul>
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
                                            <div
                                                class="product__hover--content"
                                            >
                                                <ul class="rating d-flex">
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Start Single Product -->
                            </div>
                            <div class="single__product">
                                <!-- Start Single Product -->
                                <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div class="product product__style--3">
                                        <div class="product__thumb">
                                            <a
                                                class="first__img"
                                                href="single-product.html"
                                                ><img
                                                    src="images/books/8.jpg"
                                                    alt="product image"
                                            /></a>
                                            <a
                                                class="second__img animation1"
                                                href="single-product.html"
                                                ><img
                                                    src="images/books/4.jpg"
                                                    alt="product image"
                                            /></a>
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
                                                <a href="single-product.html"
                                                    >Bowen Greenwood</a
                                                >
                                            </h4>
                                            <ul class="prize d-flex">
                                                <li>$40.00</li>
                                                <li class="old_prize">
                                                    $35.00
                                                </li>
                                            </ul>
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
                                            <div
                                                class="product__hover--content"
                                            >
                                                <ul class="rating d-flex">
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Start Single Product -->
                                <!-- Start Single Product -->
                                <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div class="product product__style--3">
                                        <div class="product__thumb">
                                            <a
                                                class="first__img"
                                                href="single-product.html"
                                                ><img
                                                    src="images/books/1.jpg"
                                                    alt="product image"
                                            /></a>
                                            <a
                                                class="second__img animation1"
                                                href="single-product.html"
                                                ><img
                                                    src="images/books/7.jpg"
                                                    alt="product image"
                                            /></a>
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
                                                <a href="single-product.html"
                                                    >Bowen Greenwood</a
                                                >
                                            </h4>
                                            <ul class="prize d-flex">
                                                <li>$40.00</li>
                                                <li class="old_prize">
                                                    $35.00
                                                </li>
                                            </ul>
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
                                            <div
                                                class="product__hover--content"
                                            >
                                                <ul class="rating d-flex">
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Start Single Product -->
                            </div>
                        </div>
                    </div>
                    <!-- End Single Tab Content -->
                    <!-- Start Single Tab Content -->
                    <div
                        class="row single__tab tab-pane fade"
                        id="nav-cook"
                        role="tabpanel"
                    >
                        <div
                            class="product__indicator--4 arrows_style owl-carousel owl-theme"
                        >
                            <div class="single__product">
                                <!-- Start Single Product -->
                                <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div class="product product__style--3">
                                        <div class="product__thumb">
                                            <a
                                                class="first__img"
                                                href="single-product.html"
                                                ><img
                                                    src="images/books/6.jpg"
                                                    alt="product image"
                                            /></a>
                                            <a
                                                class="second__img animation1"
                                                href="single-product.html"
                                                ><img
                                                    src="images/books/3.jpg"
                                                    alt="product image"
                                            /></a>
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
                                                <a href="single-product.html"
                                                    >Bowen Greenwood</a
                                                >
                                            </h4>
                                            <ul class="prize d-flex">
                                                <li>$40.00</li>
                                                <li class="old_prize">
                                                    $35.00
                                                </li>
                                            </ul>
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
                                            <div
                                                class="product__hover--content"
                                            >
                                                <ul class="rating d-flex">
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Start Single Product -->
                                <!-- Start Single Product -->
                                <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div class="product product__style--3">
                                        <div class="product__thumb">
                                            <a
                                                class="first__img"
                                                href="single-product.html"
                                                ><img
                                                    src="images/books/10.jpg"
                                                    alt="product image"
                                            /></a>
                                            <a
                                                class="second__img animation1"
                                                href="single-product.html"
                                                ><img
                                                    src="images/books/9.jpg"
                                                    alt="product image"
                                            /></a>
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
                                                <a href="single-product.html"
                                                    >Bowen Greenwood</a
                                                >
                                            </h4>
                                            <ul class="prize d-flex">
                                                <li>$40.00</li>
                                                <li class="old_prize">
                                                    $35.00
                                                </li>
                                            </ul>
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
                                            <div
                                                class="product__hover--content"
                                            >
                                                <ul class="rating d-flex">
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Start Single Product -->
                            </div>
                            <div class="single__product">
                                <!-- Start Single Product -->
                                <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div class="product product__style--3">
                                        <div class="product__thumb">
                                            <a
                                                class="first__img"
                                                href="single-product.html"
                                                ><img
                                                    src="images/books/9.jpg"
                                                    alt="product image"
                                            /></a>
                                            <a
                                                class="second__img animation1"
                                                href="single-product.html"
                                                ><img
                                                    src="images/books/6.jpg"
                                                    alt="product image"
                                            /></a>
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
                                                <a href="single-product.html"
                                                    >Bowen Greenwood</a
                                                >
                                            </h4>
                                            <ul class="prize d-flex">
                                                <li>$40.00</li>
                                                <li class="old_prize">
                                                    $35.00
                                                </li>
                                            </ul>
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
                                            <div
                                                class="product__hover--content"
                                            >
                                                <ul class="rating d-flex">
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Start Single Product -->
                                <!-- Start Single Product -->
                                <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div class="product product__style--3">
                                        <div class="product__thumb">
                                            <a
                                                class="first__img"
                                                href="single-product.html"
                                                ><img
                                                    src="images/books/8.jpg"
                                                    alt="product image"
                                            /></a>
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
                                        <div
                                            class="product__content content--center"
                                        >
                                            <h4>
                                                <a href="single-product.html"
                                                    >Bowen Greenwood</a
                                                >
                                            </h4>
                                            <ul class="prize d-flex">
                                                <li>$40.00</li>
                                                <li class="old_prize">
                                                    $35.00
                                                </li>
                                            </ul>
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
                                            <div
                                                class="product__hover--content"
                                            >
                                                <ul class="rating d-flex">
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Start Single Product -->
                            </div>
                            <div class="single__product">
                                <!-- Start Single Product -->
                                <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div class="product product__style--3">
                                        <div class="product__thumb">
                                            <a
                                                class="first__img"
                                                href="single-product.html"
                                                ><img
                                                    src="images/books/3.jpg"
                                                    alt="product image"
                                            /></a>
                                            <a
                                                class="second__img animation1"
                                                href="single-product.html"
                                                ><img
                                                    src="images/books/7.jpg"
                                                    alt="product image"
                                            /></a>
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
                                                <a href="single-product.html"
                                                    >Bowen Greenwood</a
                                                >
                                            </h4>
                                            <ul class="prize d-flex">
                                                <li>$40.00</li>
                                                <li class="old_prize">
                                                    $35.00
                                                </li>
                                            </ul>
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
                                            <div
                                                class="product__hover--content"
                                            >
                                                <ul class="rating d-flex">
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Start Single Product -->
                                <!-- Start Single Product -->
                                <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div class="product product__style--3">
                                        <div class="product__thumb">
                                            <a
                                                class="first__img"
                                                href="single-product.html"
                                                ><img
                                                    src="images/books/9.jpg"
                                                    alt="product image"
                                            /></a>
                                            <a
                                                class="second__img animation1"
                                                href="single-product.html"
                                                ><img
                                                    src="images/books/4.jpg"
                                                    alt="product image"
                                            /></a>
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
                                                <a href="single-product.html"
                                                    >Bowen Greenwood</a
                                                >
                                            </h4>
                                            <ul class="prize d-flex">
                                                <li>$40.00</li>
                                                <li class="old_prize">
                                                    $35.00
                                                </li>
                                            </ul>
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
                                            <div
                                                class="product__hover--content"
                                            >
                                                <ul class="rating d-flex">
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Start Single Product -->
                            </div>
                            <div class="single__product">
                                <!-- Start Single Product -->
                                <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div class="product product__style--3">
                                        <div class="product__thumb">
                                            <a
                                                class="first__img"
                                                href="single-product.html"
                                                ><img
                                                    src="images/books/2.jpg"
                                                    alt="product image"
                                            /></a>
                                            <a
                                                class="second__img animation1"
                                                href="single-product.html"
                                                ><img
                                                    src="images/books/7.jpg"
                                                    alt="product image"
                                            /></a>
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
                                                <a href="single-product.html"
                                                    >Bowen Greenwood</a
                                                >
                                            </h4>
                                            <ul class="prize d-flex">
                                                <li>$40.00</li>
                                                <li class="old_prize">
                                                    $35.00
                                                </li>
                                            </ul>
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
                                            <div
                                                class="product__hover--content"
                                            >
                                                <ul class="rating d-flex">
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Start Single Product -->
                                <!-- Start Single Product -->
                                <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div class="product product__style--3">
                                        <div class="product__thumb">
                                            <a
                                                class="first__img"
                                                href="single-product.html"
                                                ><img
                                                    src="images/books/6.jpg"
                                                    alt="product image"
                                            /></a>
                                            <a
                                                class="second__img animation1"
                                                href="single-product.html"
                                                ><img
                                                    src="images/books/4.jpg"
                                                    alt="product image"
                                            /></a>
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
                                                <a href="single-product.html"
                                                    >Bowen Greenwood</a
                                                >
                                            </h4>
                                            <ul class="prize d-flex">
                                                <li>$40.00</li>
                                                <li class="old_prize">
                                                    $35.00
                                                </li>
                                            </ul>
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
                                            <div
                                                class="product__hover--content"
                                            >
                                                <ul class="rating d-flex">
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Start Single Product -->
                            </div>
                            <div class="single__product">
                                <!-- Start Single Product -->
                                <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div class="product product__style--3">
                                        <div class="product__thumb">
                                            <a
                                                class="first__img"
                                                href="single-product.html"
                                                ><img
                                                    src="images/books/8.jpg"
                                                    alt="product image"
                                            /></a>
                                            <a
                                                class="second__img animation1"
                                                href="single-product.html"
                                                ><img
                                                    src="images/books/3.jpg"
                                                    alt="product image"
                                            /></a>
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
                                                <a href="single-product.html"
                                                    >Bowen Greenwood</a
                                                >
                                            </h4>
                                            <ul class="prize d-flex">
                                                <li>$40.00</li>
                                                <li class="old_prize">
                                                    $35.00
                                                </li>
                                            </ul>
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
                                            <div
                                                class="product__hover--content"
                                            >
                                                <ul class="rating d-flex">
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Start Single Product -->
                                <!-- Start Single Product -->
                                <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div class="product product__style--3">
                                        <div class="product__thumb">
                                            <a
                                                class="first__img"
                                                href="single-product.html"
                                                ><img
                                                    src="images/books/2.jpg"
                                                    alt="product image"
                                            /></a>
                                            <a
                                                class="second__img animation1"
                                                href="single-product.html"
                                                ><img
                                                    src="images/books/6.jpg"
                                                    alt="product image"
                                            /></a>
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
                                                <a href="single-product.html"
                                                    >Bowen Greenwood</a
                                                >
                                            </h4>
                                            <ul class="prize d-flex">
                                                <li>$40.00</li>
                                                <li class="old_prize">
                                                    $35.00
                                                </li>
                                            </ul>
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
                                            <div
                                                class="product__hover--content"
                                            >
                                                <ul class="rating d-flex">
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li class="on">
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Start Single Product -->
                            </div>
                        </div>
                    </div>
                    <!-- End Single Tab Content -->
                </div>
            </div>
        </section>
        <!-- Start BEst Seller Area -->
        <!-- Start Recent Post Area -->
        <section class="wn__recent__post bg--gray ptb--80">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section__title text-center">
                            <h2 class="title__be--2">
                                Our <span class="color--theme">Blog</span>
                            </h2>
                            <p>
                                There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                lebmid alteration in some ledmid form
                            </p>
                        </div>
                    </div>
                </div>
                <div class="row mt--50">
                    <div class="col-md-6 col-lg-4 col-sm-12">
                        <div class="post__itam">
                            <div class="content">
                                <h3>
                                    <a href="blog-details.html"
                                        >International activities of the
                                        Frankfurt Book
                                    </a>
                                </h3>
                                <p>
                                    We are proud to announce the very first the
                                    edition of the frankfurt news.We are proud
                                    to announce the very first of edition of the
                                    fault frankfurt news for us.
                                </p>
                                <div class="post__time">
                                    <span class="day">Dec 06, 18</span>
                                    <div class="post-meta">
                                        <ul>
                                            <li>
                                                <a href="#"
                                                    ><i class="bi bi-love"></i
                                                    >72</a
                                                >
                                            </li>
                                            <li>
                                                <a href="#"
                                                    ><i
                                                        class="bi bi-chat-bubble"
                                                    ></i
                                                    >27</a
                                                >
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 col-sm-12">
                        <div class="post__itam">
                            <div class="content">
                                <h3>
                                    <a href="blog-details.html"
                                        >Reading has a signficant info number of
                                        benefits</a
                                    >
                                </h3>
                                <p>
                                    Find all the information you need to ensure
                                    your experience.Find all the information you
                                    need to ensure your experience . Find all
                                    the information you of.
                                </p>
                                <div class="post__time">
                                    <span class="day">Mar 08, 18</span>
                                    <div class="post-meta">
                                        <ul>
                                            <li>
                                                <a href="#"
                                                    ><i class="bi bi-love"></i
                                                    >72</a
                                                >
                                            </li>
                                            <li>
                                                <a href="#"
                                                    ><i
                                                        class="bi bi-chat-bubble"
                                                    ></i
                                                    >27</a
                                                >
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 col-sm-12">
                        <div class="post__itam">
                            <div class="content">
                                <h3>
                                    <a href="blog-details.html"
                                        >The London Book Fair is to be packed
                                        with exciting
                                    </a>
                                </h3>
                                <p>
                                    The London Book Fair is the global area inon
                                    marketplace for rights negotiation.The year
                                    London Book Fair is the global area inon
                                    forg marketplace for rights.
                                </p>
                                <div class="post__time">
                                    <span class="day">Nov 11, 18</span>
                                    <div class="post-meta">
                                        <ul>
                                            <li>
                                                <a href="#"
                                                    ><i class="bi bi-love"></i
                                                    >72</a
                                                >
                                            </li>
                                            <li>
                                                <a href="#"
                                                    ><i
                                                        class="bi bi-chat-bubble"
                                                    ></i
                                                    >27</a
                                                >
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End Recent Post Area -->
        <!-- Best Sale Area -->
        <section class="best-seel-area pt--80 pb--60">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section__title text-center pb--50">
                            <h2 class="title__be--2">
                                Best <span class="color--theme">Seller </span>
                            </h2>
                            <p>
                                There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                lebmid alteration in some ledmid form
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <slick 
			ref="slick"
  			:options="slickOptions"
			class="slider center">
                <!-- Single product start -->
                <div class="product product__style--3" v-for="book in specialProducts" :key="book.book_id">
                    <div class="product__thumb">
                        <router-link :to="{ name : 'detailProduct', params : {bookId: book.book_id}}" class="first__img" 
                            ><img
                                :src="'/dist/book/image/'  + book.images[0].name"
                                alt="product image"
                        /></router-link>
                    </div>
                    <div class="product__content content--center">
                        <div class="action">
                            <div class="actions_inner">
                                <ul class="add_to_links">
                                    <li>
                                        <a class="cart" href="cart.html"
                                            ><i class="bi bi-shopping-bag4"></i
                                        ></a>
                                    </li>
                                    <li>
                                        <a class="wishlist" href="wishlist.html"
                                            ><i
                                                class="bi bi-shopping-cart-full"
                                            ></i
                                        ></a>
                                    </li>
                                    <li>
                                        <a class="compare" href="#"
                                            ><i class="bi bi-heart-beat"></i
                                        ></a>
                                    </li>
                                    <li>
                                        <a
                                            data-toggle="modal"
                                            title="Quick View"
                                            class="quickview modal-view detail-link"
                                            href="#productmodal"
                                            ><i class="bi bi-search"></i
                                        ></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="product__hover--content">
                            <ul class="rating d-flex">
                                <li class="on"><i class="fa fa-star-o"></i></li>
                                <li class="on"><i class="fa fa-star-o"></i></li>
                                <li class="on"><i class="fa fa-star-o"></i></li>
                                <li><i class="fa fa-star-o"></i></li>
                                <li><i class="fa fa-star-o"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- Single product end -->
                
            </slick>
        </section>
        <!-- Best Sale Area Area -->
    </div>

    <!-- Start BEst Seller Area -->
</template>

<script>
import carousel from "vue-owl-carousel";
import Slick from 'vue-slick';
export default {
    components: {
		carousel,
		Slick
    },
    data: function() {
        return {
            refresh: 0,
            refreshProductNav: 0,
            specialProducts: [],
			newProducts: [],
			navText: ['<i class="zmdi zmdi-chevron-left"></i>', '<i class="zmdi zmdi-chevron-right"></i>' ],
			categories: [],
			products : [],
            slickOptions: {
                centerMode: true,
	  centerPadding: '0px',
	  slidesToShow: 7,
	  responsive: [
		 {
		  breakpoint: 1366,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 3,
			infinite: true,
			dots: false
		  }
		},
		{
		  breakpoint: 1100,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 3,
			infinite: true,
			dots: false
		  }
		},
		{
			breakpoint: 970,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: false
			  }
		},
		{
		  breakpoint: 768,
		  settings: {
			arrows: false,
			centerMode: true,
			slidesToShow: 3
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			arrows: false,
			centerMode: true,
			slidesToShow: 1
		  }
		}
	  ]
            },
        };
	},
	methods : {
		reInit() {
    	this.$refs.slick.destroy()
    	this.$nextTick(() => {
        	this.$refs.slick.create(this.slickOptions)
    	})
		},
	getDetail(categoryId){
        var app = this;
		axios
      .get("/api/v1/filterBooks?categoryId=" + categoryId)
      .then(function(res) {
          console.log(res.data);
        app.products = res.data;
        app.refreshProductNav++;
      })
      .catch(function(e) {
        throw e;
      });
	}
	},
    mounted() {
        var app = this;
        axios
            .get("/api/v1/filterBooks?new")
            .then(function(res) {
                // console.log(res.data);
                app.newProducts = res.data;
                app.refresh++;
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
        axios
      .get("/api/v1/filterBooks?categoryId=3")
      .then(function(res) {
        app.products = res.data;
        console.log(app.products);
        app.refreshProductNav++;
      })
      .catch(function(e) {
        throw e;
      });
        axios
            .get("/api/v1/filterBooks?special")
            .then(function(res) {
                app.specialProducts = res.data;
				app.reInit();				
            })
            .catch(function(e) {
                throw e;
            });
    }
};
</script>

<style></style>
