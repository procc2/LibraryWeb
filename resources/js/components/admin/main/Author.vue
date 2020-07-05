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
                <h1 class="page-header">Quản lý danh mục tác giả</h1>
            </div>
        </div>
        <!--/.row-->

        <div class="row">
            <div class="col-lg-12">
                <div class="panel panel-default">
                    <div class="panel-body" style="position: relative;">
                        <router-link
                            :to="{ name: 'updateAuthor' }"
                            class="btn btn-primary"
                            style="margin: 10px 0 20px 0"
                            >Thêm ấn phẩm mới</router-link
                        >
                        <b-table
                            :items="authors"
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
                            <template v-slot:cell(author_name)="row">
                                {{ row.item.author_name }}
                            </template>
                            <template v-slot:cell(edit)="row">
                                <router-link
                                    :to="{
                                        name: 'updateAuthor',
                                        params: { id: row.item.author_id }
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
                                        deleteEntry(row.item.author_id, row.index)
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
                { key: "author_name", label: "Tên tác giả" },
                { key: "edit", label: "Sửa" },
                { key: "delete", label: "Xóa" }
            ],
            authors: []
        };
    },
    mounted() {
        var app = this;
        axios
            .get("/api/v1/authors")
            .then(function(res) {
                app.authors = res.data;
                app.totalRows = app.authors.length;
                console.log(app.authors);
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
                    .delete("/api/v1/authors/" + id)
                    .then(function(resp) {
                        app.authors.splice(index, 1);
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
