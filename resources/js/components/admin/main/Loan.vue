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
                        <b-col lg="6" class="my-1">
                            <b-form-group
                                label="Filter"
                                label-cols-md="3"
                                label-align-md="right"
                                label-size="md"
                                label-for="filterInput"
                                class="mb-0"
                            >
                                <b-input-group size="md">
                                    <b-form-input
                                        v-model="filter"
                                        type="search"
                                        id="filterInput"
                                        placeholder="Type to Search"
                                    ></b-form-input>
                                    <b-input-group-append>
                                        <b-button
                                            :disabled="!filter"
                                            @click="filter = ''"
                                            >Clear</b-button
                                        >
                                    </b-input-group-append>
                                </b-input-group>
                            </b-form-group>
                        </b-col>
                        <b-table
                            :items="loans"
                            :fields="fields"
                            :sort-by.sync="sortBy"
                            :sort-desc.sync="sortDesc"
                            :current-page="currentPage"
                            :per-page="perPage"
                            sort-icon-left
                            striped
                            responsive="sm"
                            :filter="filter"
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
                                            <use xlink:href="#stroked-cancel" />
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
                                <b-card
                                    v-for="(detail, index) in row.item.details"
                                    :key="index"
                                >
                                    <b-row class="mb-2">
                                        <b-col sm="3" class="text-sm-right"
                                            ><b>Sách:</b></b-col
                                        >
                                        <b-col class="text-sm-left">{{
                                            detail.book.book_name
                                        }}</b-col>
                                    </b-row>

                                    <b-row
                                        class="mb-2"
                                        v-if="detail.book.is_special"
                                    >
                                        <b-col sm="3" class="text-sm-right"
                                            ><b>Sản phẩm đặc biệt</b></b-col
                                        >
                                    </b-row>
                                </b-card>
                                <b-button size="sm" @click="row.toggleDetails"
                                    >Hide Details</b-button
                                >
                            </template>
                        </b-table>
                        <div>
                            Sorting By: <b>{{ sortBy }}</b
                            >, Sort Direction:
                            <b>{{ sortDesc ? "Descending" : "Ascending" }}</b>
                        </div>
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
import {
    BTable,
    BCard,
    BRow,
    BButton,
    BCol,
    BFormGroup,
    BInputGroup,
    BFormInput,
    BInputGroupAppend,
    BPagination
} from "bootstrap-vue";
export default {
    components: {
        BTable,
        BCard,
        BRow,
        BButton,
        BCol,
        BFormGroup,
        BInputGroup,
        BFormInput,
        BInputGroupAppend,
        BPagination
    },
    data: function() {
        return {
            totalRows: 1,
            currentPage: 1,
            perPage: 10,
            sortBy: "loan_date",
            sortDesc: true,
            filter: null,
            filterOn: [],
            fields: [
                { key: "index", label: "#" },
                { key: "user.name", label: "Tên người mượn", sortable: true },
                { key: "loan_date", label: "Ngày mượn", sortable: true },
                { key: "loan_is_active", label: "Trạng thái", sortable: true },
                { key: "approve", label: "Phê duyệt" },
                { key: "return_book", label: "Trả sách" },
                { key: "show_details", label: "Xem thông tin đơn mượn" }
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
                    app.totalRows = app.loans.length
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
