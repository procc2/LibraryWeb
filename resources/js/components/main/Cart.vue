<template>
    <!-- cart-main-area start -->
    <div class="cart-main-area section-padding--lg bg--white">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-sm-12 ol-lg-12">
                    <form action="#">
                        <div class="table-content wnro__table table-responsive">
                            <table>
                                <thead>
                                    <tr class="title-top">
                                        <th class="product-thumbnail">
                                            Hình ảnh
                                        </th>
                                        <th class="product-name">Sách</th>
                                        <th class="product-price">Đặc biệt</th>
                                        <th class="product-quantity">
                                            Số lượng
                                        </th>
                                        <th class="product-remove">Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in items" :key="item.id">
                                        <td class="product-thumbnail">
                                            <router-link
                                                :to="{
                                                    name: 'detailProduct',
                                                    params: {
                                                        bookId: item.book_id
                                                    }
                                                }"
                                                v-if="item.images[0]"
                                                ><img
                                                    :src="
                                                        '/dist/book/image/' +
                                                            item.images[0].name
                                                    "
                                                    alt="product image"
                                            /></router-link>
                                        </td>
                                        <td class="product-name">
                                            <router-link
                                                :to="{
                                                    name: 'detailProduct',
                                                    params: {
                                                        bookId: item.book_id
                                                    }
                                                }"
                                                >{{
                                                    item.book_name
                                                }}</router-link
                                            >
                                        </td>
                                        <td class="product-price">
                                            <span class="amount">
                                                {{
                                                    item.is_special
                                                        ? "Đúng"
                                                        : "Không"
                                                }}
                                            </span>
                                        </td>
                                        <td class="product-quantity">
                                            <input
                                                type="number"
                                                value="1"
                                                disabled
                                            />
                                        </td>
                                        <td class="product-remove">
                                            <a
                                                href="javascript:void(0)"
                                                v-on:click="removeProduct(item)"
                                                >X</a
                                            >
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </form>
                    <div class="cartbox__btn">
                        <ul
                            class="cart__btn__list d-flex flex-wrap flex-md-nowrap flex-lg-nowrap justify-content-between"
                        >
                            <!-- <li><a href="#">Coupon Code</a></li>
                            <li><a href="#">Apply Code</a></li> -->
                            <!-- <li><a href="#">Update Cart</a></li> -->
                            <li>
                                <a
                                    href="javascript:void(0)"
                                    v-on:click="addBorrowRequest()"
                                    >Check Out</a
                                >
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6 offset-lg-6">
                    <div class="cartbox__total__area">
                        <div
                            class="cartbox-total d-flex justify-content-between"
                        >
                            <ul class="cart__total__list">
                                <li>Tổng số sách</li>
                                <li>Thời gian mượn</li>
                            </ul>
                            <ul class="cart__total__tk">
                                <li>{{ items.length }}</li>
                                <li>60 ngày</li>
                            </ul>
                        </div>
                        <div class="cart__total__amount">
                            <span>Hạn đến lấy </span>
                            <span>{{ deadLine }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- cart-main-area end -->
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
    computed: {
        ...mapState("cart", ["items"]),
        ...mapState("account", ["user"])
    },
    data: function() {
        return {
            deadLine: ""
        };
    },
    created() {
        this.getNow();
    },
    methods: {
        ...mapActions("cart", ["removeProduct", "removeAllProduct"]),
        addBorrowRequest() {
            var app = this;
            let options = {
                okText: "Xác nhận",
                cancelText: "Hủy",
                animation: "zoom" // Available: "zoom", "bounce", "fade"
            };
            this.$dialog
                .confirm("Bạn chắc chắn muốn mượn ?", options)
                .then(function(dialog) {
                    console.log("Clicked on proceed");
                    app.requestLoan();
                })
                .catch(function(e) {
                    console.log(e);
                    console.log("Clicked on cancel");
                });
        },
        requestLoan() {
            var app = this;
            var loan = {
                loan_is_active: "0",
                user_id: app.user.user_id
            };
            var bookIds = app.items.map(function(item) {
                return item.book_id;
            });
            app.removeAllProduct();

            axios
                .post("/api/v1/loans", loan)
                .then(function(resp) {
                    console.log(resp.data);
                    var loan_id = resp.data.id;
                    axios
                        .post("/api/v1/loanDetails", {
                            loan_id,
                            bookIds
                        })
                        .then(function(resp) {
                            console.log(resp.data);
                            // app.$modal.show("borrowRequestSuccess");
                        })
                        .catch(function(e) {
                            console.log(e.response);
                            if (e.response.status == 409) {
                                // app.$modal.show("error");
                            }
                        });
                    // app.$modal.show("borrowRequestSuccess");
                })
                .catch(function(e) {
                    console.log(e.response);
                    if (e.response.status == 409) {
                        // app.$modal.show("error");
                    }
                });
        },
        getNow: function() {
            const today = new Date();
            const date =
                today.getFullYear() +
                "-" +
                (today.getMonth() + 1) +
                "-" +
                (today.getDate() + 3);
            this.deadLine = date;
        }
    }
};
</script>

<style></style>
