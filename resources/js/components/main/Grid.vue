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
              <h3 class="wedget__title">
                Các thể loại sách
              </h3>
              <ul>
                <li
                  v-for="category in categories"
                  :key="category.category_id"
                >
                  <a
                    href="javascript:void(0)"
                    @click="
                      filter(category.category_id)
                    "
                  >{{ category.category_name }}
                    <span>({{
                      Math.floor(Math.random() * 11)
                    }})</span></a>
                </li>
              </ul>
            </aside>
            <aside class="wedget__categories poroduct--tag">
              <h3 class="wedget__title">
                Filter sách
              </h3>
              <ul>
                <li
                  v-for="category in categories"
                  :key="category.category_id"
                >
                  <a
                    href="javascript:void(0)"
                    :class="{
                      active: categoryFilterIds.includes(
                        category.category_id
                      )
                    }"
                    @click="
                      toggleFilter(category.category_id)
                    "
                  >{{ category.category_name }}</a>
                </li>
              </ul>
            </aside>
            <aside class="wedget__categories sidebar--banner">
              <img
                src="images/others/banner_left.jpg"
                alt="banner images"
              >
              <div class="text">
                <h2>Quảng cáo</h2>
                <h6>
                  save up to <br>
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
                  ><i class="fa fa-th" /></a>
                  <a
                    class="nav-item nav-link"
                    data-toggle="tab"
                    href="#nav-list"
                    role="tab"
                  ><i class="fa fa-list" /></a>
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
              id="nav-grid"
              class="shop-grid tab-pane fade show active"
              role="tabpanel"
            >
              <div class="row">
                <!-- Start Single Product -->
                <div
                  v-for="book in paginationProducts"
                  :key="book.book_id"
                  class="product product__style--3 col-lg-4 col-md-4 col-sm-6 col-12"
                >
                  <div class="product__thumb">
                    <router-link
                      v-if="book.images[0]"
                      :to="{
                        name: 'detailProduct',
                        params: { bookId: book.book_id }
                      }"
                      class="first__img"
                    >
                      <img
                        :src="
                          $parent.imageUrl +
                            book.images[0].name
                        "
                        width="270"
                        height="340"
                        alt="product image"
                      >
                    </router-link>
                    <div class="hot__box">
                      <span
                        class="hot-label"
                      >{{ $t('book.best-saler') }}</span>
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
                      >
                        {{
                          book.book_name
                        }}
                      </router-link>
                    </h4>

                    <div class="action">
                      <div class="actions_inner">
                        <ul class="add_to_links">
                          <li>
                            <router-link
                              :to="{
                                name:
                                  'detailProduct',
                                params: {
                                  bookId: book.book_id
                                }
                              }"
                              :title="
                                $t(
                                  'book.view-detail'
                                )
                              "
                            >
                              <i
                                class="bi bi-paper-plane"
                              />
                            </router-link>
                          </li>
                          <li>
                            <a
                              v-b-modal.productmodal
                              data-toggle="modal"
                              title="Quick View"
                              href="javascript:void(0)"
                              @click="
                                sendData(book)
                              "
                            ><i
                              class="bi bi-search"
                            /></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="product__hover--content">
                      <ul class="rating d-flex">
                        <li class="on">
                          <i class="fa fa-star-o" />
                        </li>
                        <li class="on">
                          <i class="fa fa-star-o" />
                        </li>
                        <li class="on">
                          <i class="fa fa-star-o" />
                        </li>
                        <li>
                          <i class="fa fa-star-o" />
                        </li>
                        <li>
                          <i class="fa fa-star-o" />
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
              />
            </div>
            <div
              id="nav-list"
              class="shop-grid tab-pane fade"
              role="tabpanel"
            >
              <div class="list__view__wrapper">
                <!-- Start Single Product -->
                <div
                  v-if="paginationProducts != null"
                  class="list__view"
                >
                  <div class="thumb">
                    <router-link
                      v-if="
                        paginationProducts[0].images[0]
                      "
                      :to="{
                        name: 'detailProduct',
                        params: {
                          bookId:
                            paginationProducts[0]
                              .book_id
                        }
                      }"
                      class="first__img"
                    >
                      <img
                        :src="
                          $parent.imageUrl +
                            paginationProducts[0]
                              .images[0].name
                        "
                        width="450"
                        height="565"
                        alt="product image"
                      >
                    </router-link>
                  </div>
                  <div class="content">
                    <h2>
                      <router-link
                        :to="{
                          name: 'detailProduct',
                          params: {
                            bookId:
                              products[0].book_id
                          }
                        }"
                      >
                        {{
                          products[0].book_name
                        }}
                      </router-link>
                    </h2>
                    <ul class="rating d-flex">
                      <li class="on">
                        <i class="fa fa-star-o" />
                      </li>
                      <li class="on">
                        <i class="fa fa-star-o" />
                      </li>
                      <li class="on">
                        <i class="fa fa-star-o" />
                      </li>
                      <li class="on">
                        <i class="fa fa-star-o" />
                      </li>
                      <li>
                        <i class="fa fa-star-o" />
                      </li>
                      <li>
                        <i class="fa fa-star-o" />
                      </li>
                    </ul>

                    <p>
                      {{ products[0].book_description }}.
                    </p>
                    <ul class="cart__action d-flex">
                      <li class="cart">
                        <a
                          href="cart.html"
                        >Thêm vào giỏ</a>
                      </li>
                      <li class="wishlist">
                        <a href="cart.html" />
                      </li>
                      <li class="compare">
                        <a href="cart.html" />
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- End Single Product -->
                <!-- Start Single Product -->
                <div
                  v-for="(book,
                          index) in paginationProducts.slice(1)"
                  :key="index"
                  class="list__view mt--40"
                >
                  <div class="thumb">
                    <router-link
                      v-if="book.images[0]"
                      :to="{
                        name: 'detailProduct',
                        params: { bookId: book.book_id }
                      }"
                      class="first__img"
                    >
                      <img
                        :src="
                          $parent.imageUrl +
                            book.images[0].name
                        "
                        width="450"
                        height="565"
                        alt="product image"
                      >
                    </router-link>
                  </div>
                  <div class="content">
                    <h2>
                      <router-link
                        :to="{
                          name: 'detailProduct',
                          params: {
                            bookId: book.book_id
                          }
                        }"
                      >
                        {{
                          book.book_name
                        }}
                      </router-link>
                    </h2>
                    <ul class="rating d-flex">
                      <li class="on">
                        <i class="fa fa-star-o" />
                      </li>
                      <li class="on">
                        <i class="fa fa-star-o" />
                      </li>
                      <li class="on">
                        <i class="fa fa-star-o" />
                      </li>
                      <li class="on">
                        <i class="fa fa-star-o" />
                      </li>
                      <li>
                        <i class="fa fa-star-o" />
                      </li>
                      <li>
                        <i class="fa fa-star-o" />
                      </li>
                    </ul>

                    <p>
                      {{ book.book_description }}
                    </p>
                    <ul class="cart__action d-flex">
                      <li class="cart">
                        <a
                          href="cart.html"
                        >Thêm vào giỏ</a>
                      </li>
                      <li class="wishlist">
                        <a href="cart.html" />
                      </li>
                      <li class="compare">
                        <a href="cart.html" />
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
    data() {
        return {
            categories: [],
            products: [],
            paginationProducts: [],
            currentPage: 1,
            totalPages: 10,
            categoryFilterIds: [],
            allProducts: []
        };
    },
    mounted() {
        var app = this;
        axios
            .get("/api/v1/categories")
            .then(res => {
                app.categories = res.data;
            })
            .catch(e => {
                throw e;
            });
        axios
            .get("/api/v1/books")
            .then(res => {
                app.products = app.allProducts = res.data;                 
                if (app.$route.query.keyWord != null) {
                    app.filterBy(app.$route.query.keyWord);
                }
                if (app.$route.query.categoryId != null) {
                    app.filter(app.$route.query.categoryId);
                    // Return;
                } else {
                    app.totalPages = Math.ceil(app.products.length / 12);
                    app.pageChangeHandler(app.currentPage);
                }
            })
            .catch(e => {
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
                .catch(e => {
                    throw e;
                });
        },
        filterBy(keyWord) {
            var app = this;
            app.products = app.products.filter(book => {
                return (
                    book.book_name
                        .toLowerCase()
                        .normalize("NFD")
                        .replace(/[\u0300-\u036f]/g, "")
                        .indexOf(
                            keyWord
                                .toLowerCase()
                                .normalize("NFD")
                                .replace(/[\u0300-\u036f]/g, "")
                        ) != -1
                );
            });
        },
        toggleFilter(id) {
            var app = this;
            if (!app.categoryFilterIds.includes(id)) {
                app.categoryFilterIds.push(id);
            } else {
                app.categoryFilterIds.splice(
                    app.categoryFilterIds.indexOf(id),
                    1
                );
            }
            app.products = app.allProducts.filter(book => book.categories.some(category => app.categoryFilterIds.includes(category.pivot.category_id)
                )
            );
            if (app.$route.query.keyWord != null) {
                app.filterBy(app.$route.query.keyWord);
            }
            app.totalPages = Math.ceil(app.products.length / 12);
            app.pageChangeHandler(app.currentPage);
        }
    }
};
</script>

<style></style>
