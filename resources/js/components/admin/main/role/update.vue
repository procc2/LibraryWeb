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
                <h1 class="page-header">Thêm mới Quyền</h1>
            </div>
        </div>
        <!--/.row-->

        <div class="row">
            <div class="col-lg-12">
                <div class="panel panel-default">
                    <div class="panel-heading">Thêm mới Quyền</div>
                    <div class="panel-body">
                        <div class="col-md-12">
                            <form role="form" v-on:submit="saveForm()">
                                <div class="form-group">
                                    <label>Tên Quyền</label>
                                    <input
                                        v-model="role.name"
                                        class="form-control"
                                        type="text"
                                        required=""
                                    />
                                </div>
                                <div class="form-group">
                                    <label>Slug</label>
                                    <input
                                        v-model="role.slug"
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
            app.id = id;
            axios
                .get("/api/v1/roles/" + id)
                .then(function(resp) {
                    app.role = resp.data;
                })
                .catch(function() {
                    alert("Could not load your role");
                });
        }
    },
    data: function() {
        return {
            role: {
                name: "",
                slug: ""
            }
        };
    },
    methods: {
        saveForm() {
            event.preventDefault();
            var app = this;
            var role = app.role;
            console.log(role);
            if (typeof app.$route.params.id !== "undefined") {
                axios
                    .put(
                        "/api/v1/roles/" + app.$route.params.id,
                        role
                    )
                    .then(function(resp) {
                        console.log(resp);
                        app.$router.push({ path: "/role" });
                    })
                    .catch(function(e) {
                        throw e;
                        alert("Could not create new role");
                    });
            } else {
                axios
                    .post("/api/v1/roles", role)
                    .then(function(resp) {
                        console.log(resp);
                        app.$router.push({ path: "/role" });
                    })
                    .catch(function(e) {
                        throw e;
                        alert("Could not create new role");
                    });
            }
        }
    }
};
</script>
