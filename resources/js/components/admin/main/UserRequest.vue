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
                        <b-table
                            :items="userRequests"
                            :fields="fields"
                            :current-page="currentPage"
                            :per-page="perPage"
                            ref="table"
                            striped
                            responsive="sm"
                        >
                            <template v-slot:cell(index)="row">
                                {{ row.index + 1 }}
                            </template>
                            <template v-slot:cell(status)="row">
                                {{ status[row.item.status] }}
                            </template>
                            <template v-slot:cell(request_type)="row">
                                {{ requestType[row.item.request_type] }}
                            </template>

                            <template v-slot:cell(description)="row">
                                {{
                                    row.item.description
                                        ? row.item.description
                                        : "Không"
                                }}
                            </template>

                            <template v-slot:cell(approve)="row">
                                <a
                                    href="javascript:void(0)"
                                    v-on:click="
                                        approve(
                                            row.item.user_id,
                                            row.item.id,
                                            1
                                        )
                                    "
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
                                <a
                                    href="javascript:void(0)"
                                    v-on:click="
                                        approve(
                                            row.item.user_id,
                                            row.item.id,
                                            2
                                        )
                                    "
                                >
                                    <span>
                                        <svg
                                            class="glyph stroked cancel"
                                            style="width: 20px;height: 20px;"
                                        >
                                            <use xlink:href="#stroked-cancel" />
                                        </svg>
                                    </span>
                                </a>
                            </template>
                            <template v-slot:cell(delete)="row">
                                <a
                                    href="javascript:void(0)"
                                    v-on:click="
                                        deleteEntry(row.item.id)
                                    "
                                >
                                    <span>
                                        <svg
                                            class="glyph stroked cancel"
                                            style="width: 20px;height: 20px;"
                                        >
                                            <use xlink:href="#stroked-cancel" />
                                        </svg>
                                    </span>
                                </a>
                            </template>
                        </b-table>

                        <b-col sm="7" md="6" class="my-1">
                            <b-pagination
                                v-model="currentPage"
                                :total-rows="totalRows"
                                :per-page="perPage"
                                size="md"
                                class="my-0"
                            ></b-pagination>
                        </b-col>
                    </div>
                </div>
            </div>
        </div>
        <!--/.row-->
    </div>
</template>

<script>
import { BTable, BCard, BRow, BButton, BCol, BPagination } from "bootstrap-vue";
export default {
    components: {
        BTable,
        BCard,
        BRow,
        BButton,
        BCol,
        BPagination
    },
    data: function() {
        return {
            totalRows: 1,
            currentPage: 1,
            perPage: 10,
            sortDesc: true,
            fields: [
                { key: "index", label: "#" },
                { key: "request_type", label: "Loại yêu cầu" },
                { key: "user.name", label: "Tên người dùng" },
                { key: "description", label: "Chi tiết" },
                { key: "status", label: "Trạng thái" },
                { key: "approve", label: "Phê duyệt" },
                { key: "delete", label: "Xóa" }
            ],
            userRequests: [],
            requestType: {
                "create-card": "Yêu cầu tạo thẻ"
            },
            status: {
                0: "Chờ duyệt",
                1: "Đã duyệt",
                2: "Từ chối"
            }
        };
    },
    mounted() {
        var app = this;
        axios
            .get("/api/v1/userRequests")
            .then(function(res) {
                app.userRequests = res.data;
                app.totalRows = app.userRequests.length;
            })
            .catch(function(e) {
                throw e;
            });
    },
    methods: {
        deleteEntry(id) {
            if (confirm("Do you really want to delete it?")) {
                var app = this;
                axios
                    .delete("/api/v1/userRequests/" + id)
                    .then(function(resp) {
                        const index = app.userRequests.findIndex(userReq => userReq.id === id)
                        if(~index)
                        app.userRequests.splice(index, 1);
                    })
                    .catch(function(resp) {
                        alert("Could not delete company");
                    });
            }
        },
        approve(user_id, id, status) {
            var app = this;
            if (confirm("Do you really want to do it?")) {
                axios
                    .put("/api/v1/userRequests/" + id, {
                        status
                    })
                    .then(function(resp) {
                        axios
                            .post("/api/v1/cards/", { user_id })
                            .then(function(resp) {
                                console.log(resp);
                            })
                            .catch(function(resp) {
                                alert("Could not delete card");
                            });
                    })
                    .catch(function(resp) {
                        alert("Could not delete company");
                    });
            }
        }
    }
};
</script>

<style></style>
