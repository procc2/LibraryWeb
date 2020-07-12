<template>
  <modal
    name="login"
    width="800"
    height="400"
  >
    <div
      v-if="!forgotPass"
      class="my__account__wrapper"
    >
      <h3 class="account__title">
        Login
      </h3>
      <form @submit.prevent="handleSubmit()">
        <div class="account__form">
          <div class="input__box">
            <label>Username or email address <span>*</span></label>
            <input
              v-model="user.email"
              type="text"
              :class="{ 'is-invalid': !user.email }"
            >
            <div
              v-show="!user.email"
              class="invalid-feedback"
            >
              Username is required
            </div>
          </div>
          <div class="input__box">
            <label>Password<span>*</span></label>
            <input
              v-model="user.password"
              type="password"
              :class="{
                'is-invalid': !user.password
              }"
            >
            <div
              v-show="!user.password"
              class="invalid-feedback"
            >
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
                v-model="user.remember_me"
                class="input-checkbox"
                type="checkbox"
                :disabled="status.loggingIn"
              >
              <span>Remember me</span>
            </label>
          </div>
          <a
            class="forget_pass"
            href="javascript:void(0)"
            @click="forgotPass = !forgotPass"
          >Lost your password?</a>
        </div>
      </form>
      <div
        v-if="alert.message"
        :class="`alert ${alert.type}`"
      >
        {{ alert.message }}
      </div>
    </div>

    <div
      v-if="forgotPass"
      class="my__account__wrapper"
    >
      <h3 class="account__title">
        Reset Password
      </h3>
      <form @submit.prevent="resetRequest()">
        <div class="account__form">
          <div class="input__box">
            <label>Username or email address <span>*</span></label>
            <input
              v-model="resetEmail"
              type="text"
              :class="{ 'is-invalid': !user.email }"
            >
            <div
              v-show="!user.email"
              class="invalid-feedback"
            >
              Username is required
            </div>
          </div>
          <div class="form__btn">
            <button
              type="submit"
              class="btn btn-primary"
              name="submit"
              style="color:grey"
              @click="forgotPass = !forgotPass"
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
    data() {
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
        // This.logout();
    },
    methods: {
        ...mapActions("account", ["login",
"logout",
"resetPasswordRequest"]),
        ...mapActions("cart", ["getUserCart"]),
        handleSubmit() {
            const { email, password } = this.user;
            if (email && password) {
                this.login({ email, password }).then(() => {
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
                    } else {
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
