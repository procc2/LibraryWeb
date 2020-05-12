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
              :to="{ name: 'updateAuthor'}"
              class="btn btn-primary"
              style="margin: 10px 0 20px 0"
            >Thêm ấn phẩm mới</router-link>
            <table class="table table-bordered table-hover">
              <thead>
                <tr>
                  <th data-sortable="true">#</th>
                  <th data-sortable="true">Tên tác giả</th>
                  <th data-sortable="true">Sửa</th>
                  <th data-sortable="true">Xóa</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(author, index) in authors" :key="index">
                  <th scope="row">{{index+1}}</th>
                  <td>{{author.author_name}}</td>
                  <td>
                    <router-link :to="{ name: 'updateAuthor', params: {id : author.author_id}}">
                      <a>
                        <span>
                          <svg class="glyph stroked brush" style="width: 20px;height: 20px;">
                            <use xlink:href="#stroked-brush" />
                          </svg>
                        </span>
                      </a>
                    </router-link>
                  </td>

                  <td>
                    <a href="#" v-on:click="deleteEntry(author.author_id, index)">
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
      authors: []
    };
  },
  mounted() {
    var app = this;
    axios
      .get("/api/v1/authors")
      .then(function(res) {
        app.authors = res.data;
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

<style>
</style>