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
                                            <th class="product-thumbnail"></th>
                                            <th class="product-name">
                                                <span class="nobr"
                                                    >Tên sách</span
                                                >
                                            </th>
                                            <th class="product-price">
                                                <span class="nobr">
                                                    Số lượng
                                                </span>
                                            </th>
                                            <th class="product-stock-stauts">
                                                <span class="nobr">
                                                    Trạng thái mượn
                                                </span>
                                            </th>
                                            <th
                                                class="product-add-to-cart"
                                            ></th>
                                        </tr>
                                    </thead>
                                    <tbody v-if="loanDetails">
                                        <tr
                                            v-for="detail in loanDetails"
                                            :key="detail.id"
                                        >
                                            <td
                                                class="product-thumbnail"
                                                v-if="detail.book.images"
                                            >
                                                <router-link
                                                    :to="{
                                                        name: 'detailProduct',
                                                        params: {
                                                            bookId:
                                                                detail.book
                                                                    .book_id
                                                        }
                                                    }"
                                                    class="first__img"
                                                    v-if="detail.book.images[0]"
                                                    ><img
                                                        :src="
                                                            '/dist/book/image/' +
                                                                detail.book
                                                                    .images[0]
                                                                    .name
                                                        "
                                                        alt="product image"
                                                        style="max-width: 100px;
    max-height: 100px;"
                                                /></router-link>
                                            </td>
                                            <td class="product-name">
                                                <router-link
                                                    :to="{
                                                        name: 'detailProduct',
                                                        params: {
                                                            bookId:
                                                                detail.book
                                                                    .book_id
                                                        }
                                                    }"
                                                    >{{
                                                        detail.book.book_name
                                                    }}</router-link
                                                >
                                            </td>
                                            <td class="product-price">
                                                <span class="amount"
                                                    >1</span
                                                >
                                            </td>
                                            <td class="product-stock-status">
                                                <span class="wishlist-in-stock"
                                                    >In Stock</span
                                                >
                                            </td>
                                            <td class="product-add-to-cart">
                                                <a href="#"> Add to Cart</a>
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
export default {
    data : function () {
        return {
            loanDetails:[]
        };
    },
    mounted() {
        var app = this;
        axios
            .get("/api/v1/loanDetails/" + this.$route.params.loanId)
            .then(function(res) {
                console.log(res.data);
                app.loanDetails = res.data;
            })
            .catch(function(e) {
                throw e;
            });
    }
};
</script>

<style></style>
