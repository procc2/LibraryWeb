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
                <h1 class="page-header">Cập nhật quyền</h1>
            </div>
        </div>
        <!--/.row-->

        <div class="row">
            <div class="col-lg">
                <div class="panel panel-default">
                    <div class="panel-heading">Cập nhật quyền</div>
                    <div class="panel-body">
                        <div class="col-md-12">
                            <form v-on:submit.prevent="updatePermission()" role="form">
                                <div class="form-group">
                                    <label>Danh sách quyền hệ thống</label>
                                    
                                </div>
                                <div class="checkbox" v-for="(permission,
                                        index) in permissons"
                                        :key="index">
                                    <input
                                        class="form-check-input"
                                        type="checkbox"
                                        
                                        v-model="checkedPermissions"
                                        v-bind:value="permission.id"
                                    />
                                    <label
                                        class="form-check-label"
                                        >{{permission.name}}</label
                                    >
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
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            permissons: [],
            checkedPermissions: []
        };
    },
    mounted() {
        var app = this;
        if(app.$route.params.user)
        app.checkedPermissions = app.$route.params.user.permissions.map(function(permission) {
                return permission.id;
            });
        axios
            .get("/api/v1/permissions")
            .then(function(res) {
                app.permissons = res.data;
            })
            .catch(function(e) {
                throw e;
            });
    },
    methods: {
        updatePermission(){
            var app = this;
            var data = {
                'userId' : app.$route.params.user.user_id,
                'permissions' : app.checkedPermissions
            }
            axios.post("/api/v1/permissions",data)
            .then(function(res) {
                console.log(res);
            })
            .catch(function(e) {
                throw e;
            });
        }
    }
};
</script>

<style></style>
