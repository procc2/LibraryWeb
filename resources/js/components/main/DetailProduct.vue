<template>
<div>
    <div id="product">
        <div id="prd-thumb" class="col-md-6 col-sm-12 col-xs-12 text-center" v-if="book.images[0]">
            <img width="160px" :src="'/dist/book/image/' + book.images[0].name">
        </div>
        <div id="prd-intro" class="col-md-6 col-sm-12 col-xs-12">
            <h3></h3>
            <p><span class="sl">Tác giả:</span> {{book.author.author_name}} </p>
            <p><span class="sl">Thông tin phụ:</span> {{book.book_description}} </p>
            <p><span class="sl">Tình trạng:</span> {{book.is_on_loan}} </p>
    
            <router-link to="/orderBook"><button type="button" class="btn btn-danger">Đặt mượn</button></router-link>
        </div>
        <div id="prd-details" class="col-md-12 col-sm-12 col-xs-12 text-justify">
            <p>
                
            </p>
        </div>
    </div>
    
    <!-- <div id="comment" class="col-md-8 col-sm-9 col-xs-12">
        <h3>Bình luận ấn phẩm</h3>
        <form method="post" action="index.php?page_layout=chitietap&id_ap=<?php echo $id_ap; ?>">
            <div class="form-group">
                <label>Tên</label>
                <input type="text" name="ten" required="" class="form-control" placeholder="">
            </div>
            <div class="form-group">
                <label>Điện thoại</label>
                <input type="text" name="dien_thoai" required="" class="form-control" placeholder="">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Nội dung</label>
                <textarea class="form-control" name="binhluan" required="" placeholder="Bình luận của bạn tại đây!!!"></textarea>
            </div>
            <button type="submit" name="submit" class="btn btn-default">Bình luận</button>
        </form>
    </div> -->
    
    
    
    <div id="comments" class="col-md-12 col-sm-12 col-xs-12">
        
        <ul>
            <li class="comm-name"></li>
            <li class="comm-time"></li>
            <li class="comm-details">
                <p>
                   
                </p>
            </li>
        </ul>
       
    </div>
    
    <!-- Pagination -->
    <div id="pagination" class="col-md-12 col-sm-12 col-xs-12">
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
      book :{
        book_name: "",
        book_image: "",
        author: {
            author_name:""
        },
        publisher: {
            publisher_name: ""
        },
        is_on_load: 1,
        is_special: "",
        categoryIds: [],
        book_description: ""
      }
    };
  },
  mounted() {
    var app = this;
    axios
      .get("/api/v1/books/"+app.$route.params.bookId)
      .then(function(res) {
        console.log(res.data);
        app.book = res.data;
      })
      .catch(function(e) {
        throw e;
      });
  },
}
</script>

<style>

</style>