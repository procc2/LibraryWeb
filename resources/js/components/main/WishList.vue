<template>
    <!-- cart-main-area start -->
    <div class="wishlist-area section-padding--lg bg__white">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-sm-12 col-xs-12">
                    <div class="wishlist-content">
                        <form action="#">
                            <div
                                class="wishlist-table wnro__table table-responsive"
                            >
                                <table>
                                    <thead>
                                        <tr>
                                            <th class="product-remove"></th>
                                            <th class="product-thumbnail"></th>
                                            <th class="product-name">
                                                <span class="nobr"
                                                    >Tên sách</span
                                                >
                                            </th>
                                            <th class="product-price">
                                                <span class="nobr">
                                                    Thể loại
                                                </span>
                                            </th>
                                            <th class="product-stock-stauts">
                                                <span class="nobr">
                                                    Tình trạng
                                                </span>
                                            </th>
                                            <th
                                                class="product-add-to-cart"
                                            ></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="book in wishList" :key="book.book_id">
                                            <td class="product-remove">
                                                <a href="#">×</a>
                                            </td>
                                            <td class="product-thumbnail" v-if="book.images">
                                                <router-link :to="{ name : 'detailProduct', params : {bookId: book.book_id}}" class="first__img"  v-if="book.images[0]"><img :src="'/dist/book/image/'  + book.images[0].name" alt="product image" style="max-width: 100px;
    max-height: 100px;"></router-link>
                                            </td>
                                            <td class="product-name">
                                                <router-link :to="{ name : 'detailProduct', params : {bookId: book.book_id}}">{{book.book_name}}</router-link>
                                            </td>
                                            <td class="product-price">
                                                <span class="amount"
                                                    v-for="category in book.categories" :key="category" >{{category.category_name}},</span
                                                >
                                            </td>
                                            <td class="product-stock-status">
                                                <span class="wishlist-in-stock"
                                                    >Có hàng</span
                                                >
                                            </td>
                                            <td class="product-add-to-cart">
                                                <a href="#"> Thêm vào giỏ</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
     data: function() {
         return{
         wishList :[]
         }
     },
    computed: {
        ...mapState("account", ["status", "user"])
    },
    async mounted() {
        var app = this;
        if (!app.status.loggedIn) {
            await app.getLoginState();
        } 
            axios
                .get("/api/v1/favorites", {
                    params: {
                        user_id: app.user.user_id
                    }
                })
                .then(function(res) {
                    console.log(res.data);
                    app.wishList = res.data;
                })
                .catch(function(e) {
                    throw e;
                });
    },
    methods: {
        ...mapActions("account", ["getLoginState"])
    }
};
</script>

<style></style>
