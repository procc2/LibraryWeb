<template>
    <div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
        <!-- <script>
    function () {
        var conf=confirm("bạn có chắc chắn xóa Bình luận này không");
        return conf;
    }
    </script>-->
        <!-- <?php
if (isset($_GET['page'])){
    $page=$_GET['page'];
}else{
    $page=1;
}
$rowPerPage=5;
$perRow=$rowPerPage*$page-$rowPerPage;

$sql = "SELECT * FROM danhsachapdamua INNER JOIN anpham ON danhsachapdamua.id_ap=anpham.id_ap ORDER BY email DESC LIMIT $perRow,$rowPerPage";
$query=mysqli_query($conn,$sql);
$totalRows = mysqli_num_rows(mysqli_query($conn, "SELECT * FROM danhsachapdamua"));
$totalPages=ceil($totalRows/$rowPerPage);
$listPage="";
for ($i=1;$i<=$totalPages;$i++) {
    if ($page == $i) {
        $listPage .= '<li class="active"><a href="quantri.php?page_layout=danhsachapdamua&page=' . $i . '">' . $i . '</a></li>';
    } else {
        $listPage .= '<li><a href="quantri.php?page_layout=danhsachapdamua&page=' . $i . '">' . $i . '</a></li>';
    }
}
    ?>-->

        <div class="row">
            <ol class="breadcrumb">
                <li>
                    <router-link to="/">
                        <svg class="glyph stroked home">
                            <use xlink:href="#stroked-home" />
                        </svg>
                    </router-link>
                </li>
                <li class="active"></li>
            </ol>
        </div>
        <!--/.row-->
        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header">Quản lý sách mượn</h1>
            </div>
        </div>
        <!--/.row-->

        <div class="row">
            <div class="col-lg-12">
                <div class="panel panel-default">
                    <div class="panel-body" style="position: relative;">
                        <table class="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th data-sortable="true">#</th>
                                    <th data-sortable="true">Sách</th>
                                    <th data-sortable="true">Người mượn</th>
                                    <th data-sortable="true">Ngày mượn</th>
                                    <th data-sortable="true">Tình trạng</th>
                                    <th data-sortable="true">Phê duyệt</th>
                                    <th data-sortable="true">Trả sách</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(loan, index) in loans" :key="index">
                                    <th scope="row">{{ index + 1 }}</th>
                                    <td>{{ loan.book_id }}</td>
                                    <td>{{ loan.user_id }}</td>
                                    <td>{{ loan.loan_date }}</td>
                                    <td>{{ status[loan.loan_is_active] }}</td>
                                    <td>
                                        <a
                                            href="javascript:void(0)"
                                            v-on:click="approve(loan.id,loan.loan_is_active,1)"
                                        >
                                            <span>
                                                <svg
                                                    class="glyph stroked checkmark"
                                                    style="width: 20px;height: 20px;"
                                                >
                                                    <use
                                                        xlink:href="#stroked-checkmark"
                                                    />
                                                </svg>
                                            </span>
                                        </a>
                                        <a href="javascript:void(0)">
                                            <span>
                                                <svg
                                                    class="glyph stroked cancel"
                                                    style="width: 20px;height: 20px;"
                                                >
                                                    <use
                                                        xlink:href="#stroked-cancel"
                                                    />
                                                </svg>
                                            </span>
                                        </a>
                                    </td>
                                    <td>
                                        <a
                                            href="javascript:void(0)"
                                            v-on:click="approve(loan.id,loan.loan_is_active,2)"
                                        >
                                            <span>
                                                <svg
                                                    class="glyphicon glyphicon-download"
                                                    style="width: 20px;height: 20px;"
                                                >
                                                    <use
                                                        xlink:href="#stroked-download"
                                                    />
                                                </svg>
                                            </span>
                                        </a>
                                    </td>
                                </tr>
                                <!-- <?php
                    while ($row = mysqli_fetch_array($query)){
                        //$row['trang_thai_bl'] = $_SESSION['trang_thai_bl'];
                    ?>
                    <tr style="height: 300px;">
                        <td data-checkbox="true"><?php echo $row['id_ap'];?></td>
                        <td data-checkbox="true"><a href="quantri.php?page_layout=danhsachapdamua&id_ap=<?php echo $row['id_ap']; ?>"><?php echo $row['email'];?></a></td>
                        <td data-checkbox="true"><?php echo $row['sachdatmua'];?></td>
                       

                        
                        
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
            loans: [],
            status: {
                0: "Pending",
                1: "Running",
                2: "Close"
            }
        };
    },
    mounted() {
      this.loadData();
    },
    methods: {
        loadData() {
            var app = this;
            axios
                .get("/api/v1/loans")
                .then(function(res) {
                    app.loans = res.data;
                })
                .catch(function(e) {
                    throw e;
                });
        },
        approve(loanId,currentStatus,status) {
            var app = this;
            if(currentStatus != 2 )
            axios
                .put("/api/v1/loans/" + loanId, {
                    status
                })
                .then(function(res) {
                    console.log(res);
                    app.loadData();
                })
                .catch(function(e) {
                    throw e;
                });
        }
    }
};
</script>

<style></style>
