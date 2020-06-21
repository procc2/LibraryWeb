<template>
  <div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
    <!-- <?php
if (isset($_GET['page'])){
    $page=$_GET['page'];
}else{$page=1;}
$rowsPerPage=5;
$perRow = $page*$rowsPerPage-$rowsPerPage;
$sql="SELECT * FROM thanhvien ORDER BY id_thanhvien ASC LIMIT $perRow,$rowsPerPage";
$query=mysqli_query($conn,$sql);
$totalRows=mysqli_num_rows(mysqli_query($conn,"SELECT * FROM thanhvien"));
$totalPages=ceil($totalRows/$rowsPerPage);
$listPage="";
for ($i=1;$i<=$totalPages;$i++) {
    if ($page == $i) {
        $listPage .= '<li class="active"><a href="quantri.php?page_layout=danhsachtv&page=' . $i . '">' . $i . '</a></li>';
    } else {
        $listPage .= '<li><a href="quantri.php?page_layout=danhsachtv&page=' . $i . '">' . $i . '</a></li>';
    }
}
    ?>-->

    <div class="row">
      <ol class="breadcrumb">
        <li>
          <a href="quantri.php">
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
        <h1 class="page-header">Quản lý thành viên</h1>
      </div>
    </div>
    <!--/.row-->

    <div class="row">
      <div class="col-lg-12">
        <div class="panel panel-default">
          <div class="panel-body" style="position: relative;">
            <a 
              href="register"
              class="btn btn-primary"
              style="margin: 10px 0 20px 0"
            >Thêm thành viên</a>
            <table class="table table-bordered table-hover">
              <thead class="thead-light">
                <tr>
                  <th data-sortable="true">#</th>
                  <th data-sortable="true">Email</th>
                  <th data-sortable="true">Tên người dùng</th>
                  <th data-sortable="true">Vị trí</th>
                  <th data-sortable="true">Quyền truy nhập</th>
                  <th data-sortable="true">Sửa thông tin</th>
                  <th data-sortable="true">Xóa</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(user, index) in users" :key="index">
                  <th scope="row">{{index + 1}}</th>
                  <td>{{user.email}}</td>
                  <td>{{user.name}}</td>
                  <td>{{user.roles.length ? user.roles[0].name : null}}</td>
                  <td><router-link :to="{ name: 'updatePermisson', params: {user}}">
                        <span>
                          <svg class="glyph stroked key" style="width: 20px;height: 20px;">
                            <use xlink:href="#stroked-key" />
                          </svg>
                        </span>
                    </router-link></td>
                  <td><router-link :to="{ name: 'updateUser', params: {id : user.user_id}}">
                        <span>
                          <svg class="glyph stroked brush" style="width: 20px;height: 20px;">
                            <use xlink:href="#stroked-brush" />
                          </svg>
                        </span>
                    </router-link></td>
                  <td>
                    <a href="#/user" v-on:click="deleteEntry(user.user_id, index)">
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
            <!-- <tbody> -->
            <!-- <?php
                    while ($row = mysqli_fetch_array($query)){
                    ?>
                        <tr style="height: 300px;">
                            <td data-checkbox="true"><?php echo $row['id_thanhvien'];?></td>
                            <td data-checkbox="true"><a href="quantri.php?page_layout=suatv&id_thanhvien=<?php echo $row['id_thanhvien'];?>"><?php echo $row['email'];?></a></td>
                            <td data-checkbox="true"><?php echo $row['mat_khau'];?></td>
                            <td data-sortable="true"><?php echo $row['quyen_truy_cap'];?></td>
                            <td>
                                <a href="quantri.php?page_layout=suatv&id_thanhvien=<?php echo $row['id_thanhvien'];?>"><span><svg class="glyph stroked brush" style="width: 20px;height: 20px;"><use xlink:href="#stroked-brush"/></svg></span></a>
                            </td>

                            <td>
                                <a onclick="return xoatv();" href="xoatv.php?id_thanhvien=<?php echo $row['id_thanhvien'];?>"><span><svg class="glyph stroked cancel" style="width: 20px;height: 20px;"><use xlink:href="#stroked-cancel"/></svg></span></a>
                            </td>
                        </tr>
<?php
}
            ?>-->
            <!-- </tbody> -->
            <!-- </table> -->
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
      users: []
    };
  },
  mounted() {
    var app = this;
    axios
      .get("/api/v1/users")
      .then(function(res) {
        app.users = res.data;
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
          .delete("/api/v1/users/" + id)
          .then(function(resp) {
            app.users.splice(index, 1);
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