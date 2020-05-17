<template>
 
<div>
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
</div>
</template>

<script>
export default {
data: function() {
    return {
      specialProducts: [],
      newProducts: []
    };
  },
  mounted() {
    var app = this;
    axios
      .get("/api/v1/filterBooks?new")
      .then(function(res) {
        // console.log(res.data);
        app.newProducts = res.data;
      })
      .catch(function(e) {
        throw e;
      });
    axios
      .get("/api/v1/filterBooks?special")
      .then(function(res) {
        // console.log(res.data);
        app.specialProducts = res.data;
      })
      .catch(function(e) {
        throw e;
      });
  },
}
</script>

<style>

</style>