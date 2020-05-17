<template>
    <div
        class="col-xs-12 col-xs-offset-1 col-sm-10 col-sm-offset-1 col-md-6 col-md-offset-3"
    >
        <div class="panel panel-default">
            <div class="panel-heading">Đăng nhập tài khoản</div>
            <div class="panel-body">
                <div class="col-md-12">
                    <form role="form" v-on:submit="handleSubmit">
                        <div class="form-group">
                            <label>Tài khoản hoặc Email</label>
                            <input
                                class="form-control"
                                type="text"
                                required
                                v-model="user.email"
                                :class="{ 'is-invalid': submitted && !user.email }"
                            />
                            <div v-show="submitted && !user.email" class="invalid-feedback">Username is required</div>
                            <label>Mật khẩu</label>
                            <input
                                class="form-control"
                                type="password"
                                required
                                v-model="user.password"
                                :class="{ 'is-invalid': submitted && !user.password }"
                            />
                            <div v-show="submitted && !user.password" class="invalid-feedback">Password is required</div>
                        </div>
                        <div class="clearfix">
                            <div class="pull-left">
                                <input
                                    v-model="user.remember_me"
                                    type="checkbox"
                                    :disabled="status.loggingIn"
                                /><label for="categorymanufacturer1"
                                    >Ghi nhớ</label
                                >
                            </div>
                            <div class="pull-right">
                                <a href="#">Forgot password?</a>
                            </div>
                        </div>
                        <button
                            type="submit"
                            class="btn btn-primary"
                            name="submit"
                        >
                            Đăng nhập
                        </button>
                        <button type="reset" class="btn btn-default">
                            Làm mới
                        </button>
                    </form>
                </div>
            </div>
        </div>
    <div v-if="alert.message" :class="`alert ${alert.type}`">{{alert.message}}</div>

        <!-- /.col-->
    </div>
    <!-- /.row -->
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    data: function() {
        return {
            user: {
                email: "",
                password: "",
                remember_me: false
            },
            submitted : false
        };
    },
    computed: {
        ...mapState('account', ['status']),
        ...mapState({
            alert: state => state.alert
        })
    },
    created () {
        this.logout();
    },
    methods: {
        ...mapActions('account', ['login', 'logout']),
        handleSubmit (e) {
            this.submitted = true;
            const { email, password } = this.user;
            if (email && password) {
                this.login({ email, password })
            }
        },
        ...mapActions({
            clearAlert: 'alert/clear' 
        })
    },
    watch: {
        $route (to, from){
            this.clearAlert();
        }
    } 
};
</script>

<style></style>
