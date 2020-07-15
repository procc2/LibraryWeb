<template>
  <!-- Start BEst Seller Area -->
  <div>
    <section class="wn__product__area brown--color pt--80  pb--30">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section__title text-center">
              <h2 class="title__be--2">
                Sách <span class="color--theme">Mới</span>
              </h2>
              <p>
                Tất cả các đầu sách mới nhất
              </p>
            </div>
          </div>
        </div>
        <!-- Start Single Tab Content -->
        <carousel
          :key="refresh"
          :loop="true"
          :nav-text="navText"
          :autoplay="false"
          :margin="0"
          :autoplay-timeout="10000"
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
          class="furniture--4 border--round arrows_style row mt--50"
        >
          <!-- Start Single Product -->
          <div
            v-for="book in newProducts"
            :key="book.book_id"
            class="product product__style--3"
          >
            <div class="col-lg-3 col-md-4 col-sm-6 col-12">
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
                  <span class="hot-label">{{ $t('book.new-book') }}</span>
                </div>
              </div>
              <div class="product__content content--center">
                <h4>
                  <router-link
                    :to="{
                      name: 'detailProduct',
                      params: { bookId: book.book_id }
                    }"
                  >
                    {{ book.book_name }}
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
                          @click="sendData(book)"
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
                    <li><i class="fa fa-star-o" /></li>
                    <li><i class="fa fa-star-o" /></li>
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
              <h2>Kết nối với chúng tôi</h2>
            </div>
            <div class="newsletter__block text-center">
              <p>
                Luôn cập nhật thông tin nóng hổi, đầu sách mới
                nhất bằng cách nhận thông báo của chúng tôi qua
                mail
              </p>
              <form action="#">
                <div class="newsletter__box">
                  <input
                    type="email"
                    placeholder="Nhập email của bạn"
                  >
                  <button>Theo dõi</button>
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
                Toàn bộ <span class="color--theme">sách</span>
              </h2>
              <p>
                Toàn bộ sách tiêu biểu theo chủ đề
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
              <a
                v-for="category in categories"
                :key="category.category_id"
                class="nav-item nav-link"
                data-toggle="tab"
                href="#nav-all"
                role="tab"
                @click="getDetail(category.category_id)"
              >{{ category.category_name }}</a>
            </div>
          </div>
        </div>
        <div class="tab__container mt--60">
          <!-- Start Single Tab Content -->
          <div
            id="nav-all"
            class="single__tab tab-pane fade show active"
            role="tabpanel"
          >
            <carousel
              :key="refreshProductNav"
              :loop="true"
              :nav-text="navText"
              :margin="0"
              :nav="true"
              :autoplay="false"
              :autoplay-timeout="10000"
              :items="1"
              :dots="false"
              :lazy-load="true"
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
              class="product__indicator--4 arrows_style"
            >
              <div
                v-for="(key, index) in Math.ceil(
                  products.length / 2
                )"
                :key="index"
                class="single__product"
              >
                <!-- Start Single Product -->
                <div
                  v-if="products[2 * index] != null"
                  class="col-lg-3 col-md-4 col-sm-6 col-12"
                >
                  <div class="product product__style--3">
                    <div class="product__thumb">
                      <router-link
                        v-if="
                          products[2 * index]
                            .images[0]
                        "
                        :to="{
                          name: 'detailProduct',
                          params: {
                            bookId:
                              products[2 * index]
                                .book_id
                          }
                        }"
                        class="first__img"
                      >
                        <img
                          :src="
                            $parent.imageUrl +
                              products[2 * index]
                                .images[0].name
                          "
                          width="270"
                          height="340"
                          alt="product image"
                        >
                      </router-link>
                      <div class="hot__box">
                        <span
                          class="hot-label"
                        >Đặc biệt</span>
                      </div>
                    </div>
                    <div
                      class="product__content content--center content--center"
                    >
                      <h4>
                        <router-link
                          :to="{
                            name: 'detailProduct',
                            params: {
                              bookId:
                                products[
                                  2 * index
                                ].book_id
                            }
                          }"
                        >
                          {{
                            products[2 * index]
                              .book_name
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
                                    bookId:
                                      products[
                                        2 *
                                        index
                                      ]
                                        .book_id
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
                                  sendData(
                                    products[
                                      2 *
                                      index
                                    ]
                                  )
                                "
                              ><i
                                class="bi bi-search"
                              /></a>
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
                            />
                          </li>
                          <li class="on">
                            <i
                              class="fa fa-star-o"
                            />
                          </li>
                          <li class="on">
                            <i
                              class="fa fa-star-o"
                            />
                          </li>
                          <li>
                            <i
                              class="fa fa-star-o"
                            />
                          </li>
                          <li>
                            <i
                              class="fa fa-star-o"
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Start Single Product -->
                <!-- Start Single Product -->
                <div
                  v-if="products[2 * index + 1] != null"
                  class="col-lg-3 col-md-4 col-sm-6 col-12"
                >
                  <div class="product product__style--3">
                    <div class="product__thumb">
                      <router-link
                        v-if="
                          products[2 * index + 1]
                            .images[0]
                        "
                        :to="{
                          name: 'detailProduct',
                          params: {
                            bookId:
                              products[
                                2 * index + 1
                              ].book_id
                          }
                        }"
                        class="first__img"
                      >
                        <img
                          :src="
                            $parent.imageUrl +
                              products[
                                2 * index + 1
                              ].images[0].name
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
                      class="product__content content--center content--center"
                    >
                      <h4>
                        <router-link
                          :to="{
                            name: 'detailProduct',
                            params: {
                              bookId:
                                products[
                                  2 * index +
                                  1
                                ].book_id
                            }
                          }"
                        >
                          {{
                            products[2 * index + 1]
                              .book_name
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
                                    bookId:
                                      products[
                                        2 *
                                        index +
                                        1
                                      ]
                                        .book_id
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
                                  sendData(
                                    products[
                                      2 *
                                      index +
                                      1
                                    ]
                                  )
                                "
                              ><i
                                class="bi bi-search"
                              /></a>
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
                            />
                          </li>
                          <li class="on">
                            <i
                              class="fa fa-star-o"
                            />
                          </li>
                          <li class="on">
                            <i
                              class="fa fa-star-o"
                            />
                          </li>
                          <li>
                            <i
                              class="fa fa-star-o"
                            />
                          </li>
                          <li>
                            <i
                              class="fa fa-star-o"
                            />
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
                Thuê <span class="color--theme">Sách</span>
              </h2>
              <p>
                Có 3 bước để thuê sách
              </p>
            </div>
          </div>
        </div>
        <div class="row mt--50">
          <div class="col-md-6 col-lg-4 col-sm-12">
            <div class="post__itam">
              <div class="content">
                <h3>
                  <a
                    href="javascript:void(0)"
                  >Tạo tài khoản
                  </a>
                </h3>
                <p>
                  Sử dụng chức năng đăng ký của hệ thống để
                  tạo mới tài khoản (Nếu là sinh viên bỏ qua
                  bước này)
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 col-sm-12">
            <div class="post__itam">
              <div class="content">
                <h3>
                  <a href="javascript:void(0)">
                    Thuê sách online
                  </a>
                </h3>
                <p>
                  Thêm sách vào giỏ hàng và thực hiện thuê
                  sách online
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 col-sm-12">
            <div class="post__itam">
              <div class="content">
                <h3>
                  <a
                    href="javascript:void(0)"
                  >Đến thư viện lấy sách
                  </a>
                </h3>
                <p>
                  Sau khi đặt mượn online, bạn có thể đến
                  trung tâm thư viện để lấy sách mượn
                </p>
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
                Đặc <span class="color--theme">Biệt </span>
              </h2>
              <p>
                Các sách đặc biệt hot trong tháng
              </p>
            </div>
          </div>
        </div>
      </div>
      <slick
        ref="slick"
        :options="slickOptions"
        class="slider center"
      >
        <!-- Single product start -->
        <div
          v-for="book in specialProducts"
          :key="book.book_id"
          class="product product__style--3"
        >
          <div class="product__thumb">
            <router-link
              :to="{
                name: 'detailProduct',
                params: { bookId: book.book_id }
              }"
              class="first__img"
            >
              <img
                :src="$parent.imageUrl + book.images[0].name"
                alt="product image"
                width="304"
                height="384"
              >
            </router-link>
          </div>
          <div class="product__content content--center">
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
                      @click="sendData(book)"
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
                <li><i class="fa fa-star-o" /></li>
                <li><i class="fa fa-star-o" /></li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Single product end -->
      </slick>
    </section>
    <!-- Best Sale Area Area -->
    <!-- QUICKVIEW PRODUCT -->
    <div id="quickview-wrapper">
      <!-- Modal -->
      <b-modal
        id="productmodal"
        :hide-footer="true"
        :hide-header="true"
        class="modal fade"
        tabindex="-1"
        role="dialog"
        size="xl"
        body-class="p-0"
      >
        <div
          v-if="selectedBook"
          class="modal-dialog modal__container"
          role="document"
        >
          <div class="modal-content">
            <div class="modal-header modal__header">
              <button
                type="button"
                class="close"
                aria-label="Close"
                @click="$bvModal.hide('productmodal')"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="modal-product">
                <!-- Start product images -->
                <div class="product-images">
                  <div class="main-image images">
                    <img
                      :src="$parent.imageUrl + selectedBook.images[0].name"
                      alt="product image"
                    >
                  </div>
                </div>
                <!-- end product images -->
                <div class="product-info">
                  <h1>{{ selectedBook.book_name }}</h1>
                  <div class="rating__and__review">
                    <ul class="rating">
                      <li><span class="ti-star" /></li>
                      <li><span class="ti-star" /></li>
                      <li><span class="ti-star" /></li>
                      <li><span class="ti-star" /></li>
                      <li><span class="ti-star" /></li>
                    </ul>
                    <div class="review">
                      <a href="#">{{ selectedBook.book_summary }}</a>
                    </div>
                  </div>
                  <div class="price-box-3">
                    <div class="s-price-box">
                      <span
                        class="new-price"
                      >{{ selectedBook.authors.length ? selectedBook.authors[0].name : null }}</span>
                    </div>
                  </div>
                  <div class="quick-desc">
                    {{ selectedBook.book_description }}
                  </div>
                  <div class="social-sharing">
                    <div
                      class="widget widget_socialsharing_widget"
                    >
                      <h3 class="widget-title-modal">
                        Share this product
                      </h3>
                      <ul
                        class="social__net social__net--2 d-flex justify-content-start"
                      >
                        <li class="facebook">
                          <a
                            href="#"
                            class="rss social-icon"
                          ><i
                            class="zmdi zmdi-rss"
                          /></a>
                        </li>
                        <li class="linkedin">
                          <a
                            href="#"
                            class="linkedin social-icon"
                          ><i
                            class="zmdi zmdi-linkedin"
                          /></a>
                        </li>
                        <li class="pinterest">
                          <a
                            href="#"
                            class="pinterest social-icon"
                          ><i
                            class="zmdi zmdi-pinterest"
                          /></a>
                        </li>
                        <li class="tumblr">
                          <a
                            href="#"
                            class="tumblr social-icon"
                          ><i
                            class="zmdi zmdi-tumblr"
                          /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="addtocart-btn">
                    <router-link
                      :to="{
                        name: 'detailProduct',
                        params: { bookId: selectedBook.book_id }
                      }"
                      class="first__img"
                    >
                      {{ $t('book.go-detail') }}
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-modal>
    </div>
    <!-- END QUICKVIEW PRODUCT -->
  </div>

  <!-- Start BEst Seller Area -->
</template>

<script>
import carousel from "vue-owl-carousel";
import Slick from "vue-slick";
export default {
    components: {
        carousel,
        Slick
    },
    data() {
        return {
            refresh: 0,
            refreshProductNav: 0,
            specialProducts: [],
            newProducts: [],
            navText: [
                '<i class="zmdi zmdi-chevron-left"></i>',
                '<i class="zmdi zmdi-chevron-right"></i>'
            ],
            categories: [],
            products: [],
            slickOptions: {
                centerMode: true,
                centerPadding: "0px",
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
            selectedBook: ""
        };
    },
    mounted() {
        var app = this;
        axios
            .get("/api/v1/filterBooks?new")
            .then(res => {
                // Console.log(res.data);
                app.newProducts = res.data;
                app.refresh++;
            })
            .catch(e => {
                throw e;
            });
        axios
            .get("/api/v1/topCategory")
            .then(res => {
                app.categories = res.data;
            })
            .catch(e => {
                throw e;
            });
        axios
            .get("/api/v1/filterBooks?categoryId=3")
            .then(res => {
                app.products = res.data;
                console.log(app.products);
                app.refreshProductNav++;
            })
            .catch(e => {
                throw e;
            });
        axios
            .get("/api/v1/filterBooks?special")
            .then(res => {
                app.specialProducts = res.data;
                app.reInit();
            })
            .catch(e => {
                throw e;
            });
    },
    methods: {
        reInit() {
            this.$refs.slick.destroy();
            this.$nextTick(() => {
                this.$refs.slick.create(this.slickOptions);
            });
        },
        getDetail(categoryId) {
            var app = this;
            axios
                .get("/api/v1/filterBooks?categoryId=" + categoryId)
                .then(res => {
                    console.log(res.data);
                    app.products = res.data;
                    app.refreshProductNav++;
                })
                .catch(e => {
                    throw e;
                });
        },
        sendData(book) {
            this.selectedBook = book;
        }
    }
};
</script>

<style></style>
