<template>
  <div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
    <!-- <script>
    function xoaanPham(){
        var conf=confirm("Bạn có chắc chắn muốn xóa ấn phẩm này hay không?");
        return conf;
    }
    </script>-->
    <!-- <?php 
if(isset($_GET['page'])){
    $page=$_GET['page'];
}
else{
    $page=1;
}

$rowsPerPage=5;
$perRow=$page*$rowsPerPage-$rowsPerPage;

$sql="SELECT * FROM anpham INNER JOIN dmanpham ON anpham.id_dm=dmanpham.id_dm ORDER BY id_ap DESC LIMIT $perRow,$rowsPerPage";
$query= mysqli_query($conn, $sql);

$totalRows= mysqli_num_rows(mysqli_query($conn, "SELECT * FROM anpham"));
$totalPages= ceil($totalRows/$rowsPerPage);

$listPage="";
for($i=1;$i<=$totalPages;$i++){
    if($page==$i){
        $listPage.='<li class="active"><a href="quantri.php?page_layout=danhsachap&page='.$i.'">'.$i.'</a></li>';
    }
    else{
        $listPage.='<li><a href="quantri.php?page_layout=danhsachap&page='.$i.'">'.$i.'</a></li>';
    }
}
    ?>-->
    <div class="row">
      <ol class="breadcrumb">
        <li>
          <a href="#">
            <svg class="glyph stroked home">
              <use xlink:href="#stroked-home" />
            </svg>
          </a>
        </li>
        <li class="active"></li>
      </ol>
    </div>
    <!--/.row-->

    <div class="row">
      <div class="col-lg-12">
        <h1 class="page-header">Quản lý ấn phẩm</h1>
      </div>
    </div>
    <!--/.row-->

    <div class="row">
      <div class="col-lg-12">
        <div class="panel panel-default">
          <div class="panel-body" style="position: relative;">
            <router-link
              :to="{ name: 'insertBook'}"
              class="btn btn-primary"
              style="margin: 10px 0 20px 0"
            >Thêm ấn phẩm mới</router-link>
            <table class="table table-bordered table-hover">
              <thead>
                <tr>
                  <th data-sortable="true">#</th>
                  <th data-sortable="true">Tên ấn phẩm</th>
                  <th data-sortable="true">Tác giả</th>
                  <th data-sortable="true">Nhà xuất bản</th>
                  <th data-sortable="true">Ảnh mô tả</th>
                  <th data-sortable="true">Sửa</th>
                  <th data-sortable="true">Xóa</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(book, index) in books" :key="index">
                  <th scope="row">{{index+1}}</th>
                  <td>{{book.book_name}}</td>
                  <td>{{book.author.author_name}}</td>
                  <td>{{book.publisher.publisher_name}}</td>
                  <td>
                    <span class="thumb" v-if="book.images[0]"><img width="80px" height="150px" :src="'/dist/book/image/'  + book.images[0].name" /></span>
                  </td>
                  <td>
                    <router-link :to="{ name: 'updateBook', params: {bookId : book.book_id}}">
                      <a>
                        <span>
                          <svg class="glyph stroked brush" style="width: 20px;height: 20px;">
                            <use xlink:href="#stroked-brush" />
                          </svg>
                        </span>
                      </a>
                    </router-link>
                  </td>

                  <td>
                    <a href="#" v-on:click="deleteEntry(book.book_id, index)">
                      <span>
                        <svg class="glyph stroked cancel" style="width: 20px;height: 20px;">
                          <use xlink:href="#stroked-cancel" />
                        </svg>
                      </span>
                    </a>
                  </td>
                </tr>
                <!-- <?php
                        while($row= mysqli_fetch_array($query)){
                        ?>
                        <tr style="height: 300px;">
                            <td data-checkbox="true"><?php echo $row['id_ap']; ?></td>
                            <td data-checkbox="true"><a href="quantri.php?page_layout=suaap&id_ap=<?php echo $row['id_ap']; ?>"><?php echo $row['ten_ap']; ?></a></td>
                            <td data-checkbox="true"><?php echo $row['gia_ap']; ?></td>
                            <td data-sortable="true"><?php echo $row['ten_dm']; ?></td>
                            <td data-sortable="true">
                                <span class="thumb"><img width="80px" height="150px" src="anh/<?php echo $row['anh_ap']; ?>" /></span>

                            </td>						        
                            <td>
                                <a href="quantri.php?page_layout=suaap&id_ap=<?php echo $row['id_ap']; ?>"><span><svg class="glyph stroked brush" style="width: 20px;height: 20px;"><use xlink:href="#stroked-brush"/></svg></span></a>
                            </td>

                            <td>
                                <a onclick="return xoaanPham();" href="xoaap.php?id_ap=<?php echo $row['id_ap']; ?>"><span><svg class="glyph stroked cancel" style="width: 20px;height: 20px;"><use xlink:href="#stroked-cancel"/></svg></span></a>
                            </td>
                        </tr>
                        <?php
                        }
                ?>-->
              </tbody>
            </table>
            <ul class="pagination" style="float: right;">
              <!-- <?php 
                    echo $listPage;
              ?>-->
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!--/.row-->
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      books: []
    };
  },
  mounted() {
    var app = this;
    axios
      .get("/api/v1/books")
      .then(function(res) {
        app.books = res.data;
        console.log(app.books);
      })
      .catch(function(e) {
        throw e;
      });
  },
  methods: {
    deleteEntry(id, index) {
      if (confirm("Do you really want to delete it?")) {
        var app = this;
        axios
          .delete("/api/v1/books/" + id)
          .then(function(resp) {
            app.books.splice(index, 1);
          })
          .catch(function(resp) {
            alert("Could not delete book");
          });
      }
    }
  }
};
</script>

<style>
</style>