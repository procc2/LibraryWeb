<template>
  <div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
    <!-- <script>
    function xoaDanhMuc(){
        var conf=confirm("Bạn có chắc chắn muốn xóa danh mục này hay không?");
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
$sql="SELECT * FROM dmanpham ORDER BY id_dm ASC LIMIT $perRow,$rowsPerPage";
$query=mysqli_query($conn,$sql);
$totalRows=mysqli_num_rows(mysqli_query($conn, "SELECT * FROM dmanpham"));
$totalPages=ceil($totalRows/$rowsPerPage);

$listPage="";
for($i=1;$i<=$totalPages;$i++){
    if($page==$i){
        $listPage.='<li class="active"><a href="quantri.php?page_layout=danhsachdm&page='.$i.'">'.$i.'</a></li>';
    }
    else{
        $listPage.='<li><a href="quantri.php?page_layout=danhsachdm&page='.$i.'">'.$i.'</a></li>';
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
        <h1 class="page-header">Quản lý danh mục</h1>
      </div>
    </div>
    <!--/.row-->

    <div class="row">
      <div class="col-lg-12">
        <div class="panel panel-default">
          <div class="panel-body" style="position: relative;">
            <router-link
              :to="{ name: 'updateCategory'}"
              class="btn btn-primary"
              style="margin: 10px 0 20px 0;"
            >Thêm danh mục mới</router-link>
            <table class="table table-bordered table-hover">
              <thead>
                <tr>
                  <th data-sortable="true">#</th>
                  <th data-sortable="true">Tên danh mục</th>
                  <th data-sortable="true">Sửa</th>
                  <th data-sortable="true">Xóa</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(category, index) in categories" :key="index">
                  <th scope="row">{{index+1}}</th>
                  <td>{{category.category_name}}</td>
                  <td>
                    <router-link :to="{ name: 'updateCategory', params: {id : category.category_id}}">
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
                    <a href="#" v-on:click="deleteEntry(category.category_id, index)">
                      <span>
                        <svg class="glyph stroked cancel" style="width: 20px;height: 20px;">
                          <use xlink:href="#stroked-cancel" />
                        </svg>
                      </span>
                    </a>
                  </td>
                </tr>
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
      categories: []
    };
  },
  mounted() {
    var app = this;
    axios
      .get("/api/v1/categories")
      .then(function(res) {
        app.categories = res.data;
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
          .delete("/api/v1/categories/" + id)
          .then(function(resp) {
            app.categories.splice(index, 1);
          })
          .catch(function(resp) {
            alert("Could not delete company");
          });
      }
    }
  }
};
</script>

<style>
</style>