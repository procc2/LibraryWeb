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
        <h1 class="page-header">Quản lý Quyền người dùng</h1>
      </div>
    </div>
    <!--/.row-->

    <div class="row">
      <div class="col-lg-12">
        <div class="panel panel-default">
          <div class="panel-body" style="position: relative;">
            <router-link
              :to="{ name: 'updateRole'}"
              class="btn btn-primary"
              style="margin: 10px 0 20px 0"
            >Thêm quyền mới</router-link>
            <b-table
                            :items="roles"
                            :fields="fields"
                            ref="table"
                            striped
                            responsive="sm"
                        >
                            <template v-slot:cell(index)="row">
                                {{ row.index + 1 }}
                            </template>
                            <template v-slot:cell(name)="row">
                                {{ row.item.name }}
                            </template>
                            <template v-slot:cell(edit)="row">
                                <router-link :to="{ name: 'updateRole', params: {id : row.item.id}}">
                      <a>
                        <span>
                          <svg class="glyph stroked brush" style="width: 20px;height: 20px;">
                            <use xlink:href="#stroked-brush" />
                          </svg>
                        </span>
                      </a>
                    </router-link>
                            </template>
                            <template v-slot:cell(delete)="row">
                                <a href="javascript:void(0)" v-on:click="deleteEntry(row.item.id, index)">
                      <span>
                        <svg class="glyph stroked cancel" style="width: 20px;height: 20px;">
                          <use xlink:href="#stroked-cancel" />
                        </svg>
                      </span>
                    </a>
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
import { BTable, BCard, BRow, BButton, BCol } from "bootstrap-vue";
export default {
    components: {
        BTable,
        BCard,
        BRow,
        BButton,
        BCol
    },
  data: function() {
    return {
      fields: [
                { key: "index", label: "#" },
                { key: "name", label: "Tên Quyền" },
                { key: "edit", label: "Sửa" },
                { key: "delete", label: "Xóa" }
            ],
      roles: []
    };
  },
  mounted() {
    var app = this;
    axios
      .get("/api/v1/roles")
      .then(function(res) {
        app.roles = res.data;
        console.log(app.roles);
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
          .delete("/api/v1/roles/" + id)
          .then(function(resp) {
            app.roles.splice(index, 1);
          })
          .catch(function(resp) {
            alert("Could not delete role");
          });
      }
    }
  }
};
</script>

<style>
</style>