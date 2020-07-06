<template>
    <div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
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
                <h1 class="page-header">Quản lý danh mục nhà xuất bản</h1>
            </div>
        </div>
        <!--/.row-->

        <div class="row">
            <div class="col-lg-12">
                <div class="panel panel-default">
                    <div class="panel-body" style="position: relative;">
                        <router-link
                            :to="{ name: 'updatePublisher' }"
                            class="btn btn-primary"
                            style="margin: 10px 0 20px 0"
                            >Thêm ấn phẩm mới</router-link
                        >
                        <b-table
                            :items="publishers"
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
                            <template v-slot:cell(publisher_name)="row">
                                {{ row.item.publisher_name }}
                            </template>
                            <template v-slot:cell(edit)="row">
                                <router-link
                                    :to="{
                                        name: 'updatePublisher',
                                        params: { id: row.item.publisher_id }
                                    }"
                                >
                                    <a>
                                        <span>
                                            <svg
                                                class="glyph stroked brush"
                                                style="width: 20px;height: 20px;"
                                            >
                                                <use
                                                    xlink:href="#stroked-brush"
                                                />
                                            </svg>
                                        </span>
                                    </a>
                                </router-link>
                            </template>
                            <template v-slot:cell(delete)="row">
                                <a
                                    href="javascript:void(0)"
                                    v-on:click="
                                        deleteEntry(
                                            row.item.publisher_id
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
            fields: [
                { key: "index", label: "#" },
                { key: "publisher_name", label: "Tên nhà xuất bản" },
                { key: "edit", label: "Sửa" },
                { key: "delete", label: "Xóa" }
            ],
            publishers: [],
            totalRows: 1,
            currentPage: 1,
            perPage: 10,
            sortDesc: true,
        };
    },
    mounted() {
        var app = this;
        axios
            .get("/api/v1/publishers")
            .then(function(res) {
                app.publishers = res.data;
                app.totalRows = app.publishers.length;
                console.log(app.publishers);
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
                    .delete("/api/v1/publishers/" + id)
                    .then(function(resp) {
                        const index = app.publishers.findIndex(publisher => publisher.publisher_id === id)
                        if(~index)
                        app.publishers.splice(index, 1);
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
