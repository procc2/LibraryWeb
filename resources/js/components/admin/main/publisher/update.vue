<template>
    <div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
        <div class="row">
            <ol class="breadcrumb">
                <li>
                    <a href="#"
                        ><svg class="glyph stroked home">
                            <use xlink:href="#stroked-home"></use></svg
                    ></a>
                </li>
                <li class="active"></li>
            </ol>
        </div>
        <!--/.row-->

        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header">Thêm mới danh mục</h1>
            </div>
        </div>
        <!--/.row-->

        <div class="row">
            <div class="col-lg-12">
                <div class="panel panel-default">
                    <div class="panel-heading">Thêm mới danh mục</div>
                    <div class="panel-body">
                        <div class="col-md-12">
                            <form role="form" v-on:submit="saveForm()">
                                <div class="form-group">
                                    <label>Tên danh mục</label>
                                    <input
                                        v-model="publisher.publisher_name"
                                        class="form-control"
                                        type="text"
                                        required=""
                                    />
                                </div>
                                <button
                                    type="submit"
                                    class="btn btn-primary"
                                    name="submit"
                                >
                                    Thêm mới
                                </button>
                                <button type="reset" class="btn btn-default">
                                    Làm mới
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /.col-->
        </div>
        <!-- /.row -->
    </div>
</template>
<script>
export default {
    mounted() {
        let app = this;
        let id = app.$route.params.id;
        console.log(app.$route.params.id);
        if (typeof id !== "undefined") {
            app.publisher_id = id;
            axios
                .get("/api/v1/publishers/" + id)
                .then(function(resp) {
                    app.publisher = resp.data;
                })
                .catch(function() {
                    alert("Could not load your company");
                });
        }
    },
    data: function() {
        return {
            publisher: {
                publisher_name: ""
            }
        };
    },
    methods: {
        saveForm() {
            event.preventDefault();
            var app = this;
            var publisher = app.publisher;
            console.log(publisher);
            if (typeof app.$route.params.id !== "undefined") {
                axios
                    .put(
                        "/api/v1/publishers/" + app.$route.params.id,
                        publisher
                    )
                    .then(function(resp) {
                        console.log(resp);
                        app.$router.push({ path: "/publisher" });
                    })
                    .catch(function(e) {
                        throw e;
                        alert("Could not create new publisher");
                    });
            } else {
                axios
                    .post("/api/v1/publishers", publisher)
                    .then(function(resp) {
                        console.log(resp);
                        app.$router.push({ path: "/publisher" });
                    })
                    .catch(function(e) {
                        throw e;
                        alert("Could not create new publisher");
                    });
            }
        }
    }
};
</script>
