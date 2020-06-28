<template>
    <div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
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
                        <b-col>
                            <a
                                href="register"
                                class="btn btn-primary"
                                style="margin: 10px 0 20px 0"
                                >Thêm thành viên</a
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
                            :items="users"
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
                                            '/dist/book/image/' +
                                                row.item.images[0].name
                                        "
                                /></span>
                            </template>
                            <template v-slot:cell(role)="row">
                                {{ row.item.roles.length
                                                ? row.item.roles[0].name
                                                : null }}
                            </template>
                            <template v-slot:cell(edit_permission)="row">
                                <router-link
                                            :to="{
                                                name: 'updatePermisson',
                                                params: { user : row.item }
                                            }"
                                        >
                                            <span>
                                                <svg
                                                    class="glyph stroked key"
                                                    style="width: 20px;height: 20px;"
                                                >
                                                    <use
                                                        xlink:href="#stroked-key"
                                                    />
                                                </svg>
                                            </span>
                                        </router-link>
                            </template>
                            <template v-slot:cell(edit)="row">
                                <router-link
                                            :to="{
                                                name: 'updateUser',
                                                params: { id: row.item.user_id }
                                            }"
                                        >
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
                                        </router-link>
                            </template>
                            <template v-slot:cell(delete)="row">
                                <a
                                    href="javascript:void(0)"
                                    v-on:click="
                                        deleteEntry(row.item.user_id, index)
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
            perPage: 10,
            sortBy: "loan_date",
            sortDesc: true,
            filter: null,
            filterOn: [],
            fields: [
                { key: "index", label: "#" },
                { key: "email", label: "Email", sortable: true },
                { key: "name", label: "Tên người dùng", sortable: true },
                {
                    key: "role",
                    label: "Vị trí",
                    sortable: true
                },
                {
                    key: "edit_permission",
                    label: "Quyền truy cập",
                    sortable: true
                },
                { key: "edit", label: "Sửa" },
                { key: "delete", label: "Xóa" }
            ],
            users: []
        };
    },
    mounted() {
        var app = this;
        axios
            .get("/api/v1/users")
            .then(function(res) {
                app.users = res.data;
                app.totalRows = app.users.length
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

<style></style>
