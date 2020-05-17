<template>
<div>
    <div class="products">
        <h2 class="h2-bar"></h2>    
        <div class="row">
           
            <div class="col-md-3 col-sm-6 product-item text-center" v-for="book in products" :key="book.id">
               <router-link :to="{ name : 'detailProduct', params : {bookId: book.book_id}}" v-if="book.images[0]"><img width="80" height="144" :src="'/dist/book/image/'  + book.images[0].name"></router-link>
                <h3><router-link :to="{ name : 'detailProduct', params : {bookId: book.book_id}}">{{book.book_name}}</router-link></h3>
                <p>Tác giả: {{book.author.author_name}}</p>
                <p>Tình trạng: {{book.is_on_loan}}</p>
            </div>
            
        </div>
    </div>
    <!-- Pagination -->
    <div id="pagination">
        <nav aria-label="Page navigation">
            <ul class="pagination">
                
            </ul>
        </nav>
    </div>            
    <!-- End Pagination -->    
</div>

</template>

<script>
export default {
data: function() {
    return {
      products: []
    };
  },
  mounted() {
    var app = this;
    // console.log(app.$route.params);
    axios
      .get("/api/v1/filterBooks?categoryId="+app.$route.params.categoryId)
      .then(function(res) {
        // console.log(res.data);
        app.products = res.data;
      })
      .catch(function(e) {
        throw e;
      });
  },
}
</script>

<style>

</style>