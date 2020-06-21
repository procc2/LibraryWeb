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
                <h1 class="page-header">Cập nhật thành viên</h1>
            </div>
        </div>
        <!--/.row-->

        <div class="row">
            <div class="col-lg-6">
                <div class="panel panel-default">
                    <div class="panel-heading">Cập nhật thành viên</div>
                    <div class="panel-body">
                        <div class="col-md-12">
                            <form role="form" v-on:submit="saveForm()">
                                <div class="form-group">
                                    <label>Email đăng nhập</label>
                                    <input
                                        class="form-control"
                                        type="email"
                                        required=""
                                        v-model="user.email"
                                    />
                                    <label>Tên</label>
                                    <input
                                        class="form-control"
                                        type="text"
                                        required=""
                                        v-model="user.name"
                                    />
                                    <label>Quyền sử dụng hệ thống</label>
                                    <div class="radio" v-for="(role,index) in allRoles" :key="index">
                                        <label>
                                            <input
                                                type="radio"
                                                v-model="currentRole"
                                                id="optionsRadios1"
                                                :value="role.id"
                                            />{{role.name}}
                                        </label>
                                    </div>
                                    <!-- <div class="radio">
                                        <label>
                                            <input
                                                type="radio"
                                                v-model="user.roles"
                                                id="optionsRadios2"
                                                value="1"
                                            />1: Quyền admin giao diện
                                        </label>
                                    </div>
                                    <div class="radio">
                                        <label>
                                            <input
                                                type="radio"
                                                v-model="user.roles"
                                                id="optionsRadios3"
                                                value="2"
                                            />2: Quyền admin hệ thống
                                        </label>
                                    </div> -->
                                </div>
                                <button type="submit" class="btn btn-primary">
                                    Cập nhật | Thêm Mới
                                </button>
                                <button type="reset" class="btn btn-default">
                                    Làm mới
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <!-- /.col-->
            </div>
            <!-- /.row -->
            <div class="col-lg-6">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        Hướng dẫn thêm thành viên quản trị mới
                    </div>
                    <div class="panel-body">
                        <p>
                            Quyền quản trị phân cấp từ 0 -> 1 -> 2 tùy theo
                            thành viên hay admin
                        </p>
                    </div>
                </div>
            </div>
        </div>
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
                .get("/api/v1/users/" + id)
                .then(function(resp) {
                    app.user = resp.data;
                    app.currentRole = app.user.roles[0].id;
                })
                .catch(function(e) {
                    throw(e);
                    alert("Could not load your user");
                });
        }
        axios
            .get("/api/v1/roles")
            .then(function(res) {
                app.allRoles = res.data;
            })
            .catch(function(e) {
                throw e;
            });
    },
    data: function() {
        return {
            user: {
                name: "",
                email: "",
                roles: []
            },
            currentRole:"",
            allRoles:[]
        };
    },
    methods: {
        saveForm() {
            event.preventDefault();
            var app = this;
            var user = app.user;
            console.log(user);
            user.roles = [app.currentRole];
            axios
                .put("/api/v1/users/" + app.$route.params.id, user)
                .then(function(resp) {
                    console.log(resp);
                    app.$router.push({ path: "/user" });
                })
                .catch(function(e) {
                    throw e;
                    alert("Could not create new user");
                });
        }
    }
};
</script>
