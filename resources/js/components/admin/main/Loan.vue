<template>
    <div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
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
                        <!-- <table class="table table-bordered table-hover">
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
                                <tr
                                v-for="(loan, index) in loans" :key="index"
                                class="clickable" data-toggle="collapse" data-target="#group-of-rows-1" aria-expanded="false" aria-controls="group-of-rows-1"
                                >
                                    <th scope="row">{{ index + 1 }}</th>
                                    <td><i class="fa fa-plus" aria-hidden="true"></i></td>
                                    <td>{{ loan.user.name }}</td>
                                    <td>{{ loan.loan_date }}</td>
                                    <td>{{ status[loan.loan_is_active] }}</td>
                                    <td>
                                        <a
                                            href="javascript:void(0)"
                                            v-on:click="
                                                approve(
                                                    loan.id,
                                                    loan.loan_is_active,
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
                                            v-on:click="
                                                approve(
                                                    loan.id,
                                                    loan.loan_is_active,
                                                    2
                                                )
                                            "
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
                            </tbody>
                            <b-table></b-table>
                            <tbody id="group-of-rows-1" class="collapse">
                                <tr>
                                    <td>- child row</td>
                                    <td>data 1</td>
                                    <td>data 1</td>
                                    <td>data 1</td>
                                </tr>
                                <tr>
                                    <td>- child row</td>
                                    <td>data 1</td>
                                    <td>data 1</td>
                                    <td>data 1</td>
                                </tr>
                            </tbody>
                        </table> -->
                        <b-table
                            :items="loans"
                            :fields="fields"
                            striped
                            responsive="sm"
                        >
                            <template v-slot:cell(index)="row">
                                {{ row.index + 1 }}
                            </template>
                            <template v-slot:cell(loan_is_active)="row">
                                {{ status[row.item.loan_is_active] }}
                            </template>
                            <template v-slot:cell(show_details)="row">
                                <b-button
                                    size="sm"
                                    @click="row.toggleDetails"
                                    class="mr-2"
                                >
                                    {{ row.detailsShowing ? "Hide" : "Show" }}
                                    Details
                                </b-button>

                            </template>

                            <template v-slot:cell(approve)="row">
                                <a
                                            href="javascript:void(0)"
                                            v-on:click="
                                                approve(
                                                    row.item.id,
                                                    row.item.loan_is_active,
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
                            </template>
                            <template v-slot:cell(return_book)="row">
                                <a
                                            href="javascript:void(0)"
                                            v-on:click="
                                                approve(
                                                    row.item.id,
                                                    row.item.loan_is_active,
                                                    2
                                                )
                                            "
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
                            </template>

                            <template v-slot:row-details="row">
                                <b-card v-for="(detail,index) in row.item.details" :key="index">
                                    <b-row class="mb-2">
                                        <b-col sm="3" class="text-sm-right"
                                            ><b>Sách:</b></b-col
                                        >
                                        <b-col class="text-sm-left">{{ detail.book.book_name }}</b-col>
                                    </b-row>

                                    <b-row class="mb-2"  v-if="detail.book.is_special">
                                        <b-col sm="3" class="text-sm-right"
                                            ><b>Sản phẩm đặc biệt</b></b-col
                                        >
                                    </b-row>

                                    
                                </b-card>
                                <b-button
                                        size="sm"
                                        @click="row.toggleDetails"
                                        >Hide Details</b-button
                                    >
                            </template>
                        </b-table>
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
import { BTable,BCard,BRow,BButton,BCol } from "bootstrap-vue";
export default {
    components: {
        BTable,BCard,BRow,BButton,BCol
    },
    data: function() {
        return {
            fields: [
                {key: "index",label: "#"},
                {key:"user.name", label: "Tên người mượn"},
                {key:"loan_date", label: "Ngày mượn"},
                {key:"loan_is_active", label: "Trạng thái"},
                {key:"approve", label: "Phê duyệt"},
                {key:"return_book", label: "Trả sách"},
                {key:"show_details", label: "Xem thông tin đơn mượn"}
            ],
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
        approve(loanId, currentStatus, status) {
            var app = this;
            if (currentStatus != 2)
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
