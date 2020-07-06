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
                <h1 class="page-header">Quản lý ấn phẩm</h1>
            </div>
        </div>
        <!--/.row-->

        <div class="row">
            <div class="col-lg-12">
                <div class="panel panel-default">
                    <div class="panel-body" style="position: relative;">
                        <b-col>
                            <router-link
                                :to="{ name: 'insertBook' }"
                                class="btn btn-primary"
                                style="margin: 10px 0 20px 0"
                                >Thêm ấn phẩm mới</router-link
                            >
                        </b-col>
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
                            :items="books"
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
                            <template v-slot:cell(image)="row">
                                <span class="thumb" v-if="row.item.images[0]"
                                    ><img
                                        width="80px"
                                        height="150px"
                                        :src="
                                            $parent.imageUrl +
                                                row.item.images[0].name
                                        "
                                /></span>
                            </template>
                            <template v-slot:cell(has_ebook)="row">
                                {{ row.item.ebooks.length ? "Có" : "Không" }}
                            </template>
                            <template v-slot:cell(edit)="row">
                                <router-link
                                    :to="{
                                        name: 'updateBook',
                                        params: { bookId: row.item.book_id }
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
                                        deleteEntry(row.item.book_id)
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
            perPage: 5,
            sortBy: "loan_date",
            sortDesc: true,
            filter: null,
            filterOn: [],
            fields: [
                { key: "index", label: "#" },
                { key: "image", label: "Ảnh mô tả" },
                { key: "book_name", label: "Tên sách", sortable: true },
                {
                    key: "author.author_name",
                    label: "Tên tác giả",
                    sortable: true
                },
                {
                    key: "publisher.publisher_name",
                    label: "Tên nhà xuất bản",
                    sortable: true
                },
                {
                    key: "has_ebook",
                    label: "Ebook",
                    sortable: true
                },
                { key: "edit", label: "Sửa" },
                { key: "delete", label: "Xóa" }
            ],
            books: []
        };
    },
    mounted() {
        var app = this;
        axios
            .get("/api/v1/books")
            .then(function(res) {
                app.books = res.data;
                app.totalRows = app.books.length;
                console.log(app.books);
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
                    .delete("/api/v1/books/" + id)
                    .then(function(resp) {
                        const index = app.books.findIndex(book => book.book_id === id)
                        if(~index)
                        app.books.splice(index, 1);
                        axios
                            .delete("/api/files/" + id)
                            .catch(function(resp) {
                                alert("Could not delete book");
                            });
                    })
                    .catch(function(resp) {
                        alert("Could not delete book");
                    });
            }
        }
    }
};
</script>

<style></style>
