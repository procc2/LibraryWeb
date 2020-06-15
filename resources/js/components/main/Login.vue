<template>
    <!-- <div class="panel panel-default">
            <div class="panel-heading">Đăng nhập tài khoản</div>
            <div class="panel-body">
                <div class="col-md-12">
                    <form role="form" v-on:submit="handleSubmit()">
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
                            @click="$modal.hide('login')"
                        >
                            Đăng nhập
                        </button>
                        <button type="reset" class="btn btn-default">
                            Làm mới
                        </button>
                    </form>
                </div>
            </div>
        </div> -->
    <modal name="login" width="800" height="400">
        <div class="my__account__wrapper" v-if="!forgotPass">
            <h3 class="account__title">Login</h3>
            <form v-on:submit.prevent="handleSubmit()">
                <div class="account__form">
                    <div class="input__box">
                        <label>Username or email address <span>*</span></label>
                        <input
                            type="text"
                            v-model="user.email"
                            :class="{ 'is-invalid': !user.email }"
                        />
                        <div v-show="!user.email" class="invalid-feedback">
                            Username is required
                        </div>
                    </div>
                    <div class="input__box">
                        <label>Password<span>*</span></label>
                        <input
                            type="password"
                            v-model="user.password"
                            :class="{
                                'is-invalid': !user.password
                            }"
                        />
                        <div v-show="!user.password" class="invalid-feedback">
                            Password is required
                        </div>
                    </div>
                    <div class="form__btn">
                        <button
                            type="submit"
                            class="btn btn-primary"
                            name="submit"
                        >
                            Login
                        </button>
                        <label class="label-for-checkbox">
                            <input
                                id="rememberme"
                                class="input-checkbox"
                                v-model="user.remember_me"
                                type="checkbox"
                                :disabled="status.loggingIn"
                            />
                            <span>Remember me</span>
                        </label>
                    </div>
                    <a
                        class="forget_pass"
                        href="javascript:void(0)"
                        v-on:click="forgotPass = !forgotPass"
                        >Lost your password?</a
                    >
                </div>
            </form>
            <div v-if="alert.message" :class="`alert ${alert.type}`">
                {{ alert.message }}
            </div>
        </div>

        <div class="my__account__wrapper" v-if="forgotPass">
            <h3 class="account__title">Reset Password</h3>
            <form v-on:submit.prevent="resetRequest()">
                <div class="account__form">
                    <div class="input__box">
                        <label>Username or email address <span>*</span></label>
                        <input
                            type="text"
                            v-model="resetEmail"
                            :class="{ 'is-invalid': !user.email }"
                        />
                        <div v-show="!user.email" class="invalid-feedback">
                            Username is required
                        </div>
                    </div>
                    <div class="form__btn">
                        <button
                            type="submit"
                            class="btn btn-primary"
                            name="submit"
                            style="color:grey"
                            v-on:click="forgotPass = !forgotPass"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            class="btn btn-primary"
                            name="submit"
                        >
                            Reset Password
                        </button>
                    </div>
                </div>
            </form>
        </div>

        <!-- /.col-->
    </modal>
    <!-- /.row -->
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
    data: function() {
        return {
            user: {
                email: "",
                password: "",
                remember_me: false
            },
            resetEmail: "",
            forgotPass: false
        };
    },
    computed: {
        ...mapState("account", ["status"]),
        ...mapState({
            alert: state => state.alert
        })
    },
    created() {
        // this.logout();
    },
    methods: {
        ...mapActions("account", ["login", "logout", "resetPasswordRequest"]),
        ...mapActions("cart", ["getUserCart"]),
        handleSubmit(e) {
            const { email, password } = this.user;
            if (email && password) {
                this.login({ email, password }).then(res => {
                    if (this.status.loggedIn) {
                        this.$modal.hide("login");
                        this.getUserCart();
                    }
                });
            }
        },
        resetRequest() {
            if (this.resetEmail) {
                this.resetPasswordRequest({
                    email: this.resetEmail
                }).then(res => {
                    let options = {
                            okText: "Đóng",
                            animation: "zoom"
                        };
                    if (res.status == "200") {
                        this.$dialog.alert("Gửi reset email thành công ! Bạn có thể kiểm tra email để hoàn thành việc reset mật khẩu ", options);
                    }else{
                        this.$dialog.alert("Yêu cầu thất bại! Email không tồn tại trong hệ thống", options);
                    }
                });
            }
        },
        ...mapActions({
            clearAlert: "alert/clear"
        })
    },
    watch: {
        $route(to, from) {
            this.clearAlert();
        }
    }
};
</script>

<style></style>
