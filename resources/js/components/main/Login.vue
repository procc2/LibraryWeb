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
        {{ $t('user.login-title') }}
      </h3>
      <ValidationObserver v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(submit)">
          <div class="account__form">
            <div class="input__box">
              <label>{{ $t('user.email') }} <span>*</span></label>
              <ValidationProvider
                v-slot="{ errors }"
                name="email"
                rules="required|email"
              >
                <input
                  v-model="user.email"
                  type="email"
                  class="form-control"
                  :class="{
                    'is-invalid': errors.length
                  }"
                >
                <div class="invalid-feedback">
                  {{ errors[0] }}
                </div>
              </ValidationProvider>
            </div>
            <div class="input__box">
              <label>{{ $t('user.password') }}<span>*</span></label>
              <ValidationProvider
                v-slot="{ errors }"
                name="password"
                rules="required"
              >
                <input
                  v-model="user.password"
                  type="password"
                  class="form-control"
                  :class="{
                    'is-invalid': errors.length
                  }"
                >
                <div
                  class="invalid-feedback"
                >
                  {{ errors[0] }}
                </div>
              </ValidationProvider>
            </div>
            <div class="form__btn">
              <button
                type="submit"
                class="btn btn-primary"
                name="submit"
              >
                {{ $t('user.login-button') }}
              </button>
              <label class="label-for-checkbox">
                <input
                  id="rememberme"
                  v-model="user.remember_me"
                  class="input-checkbox"
                  type="checkbox"
                  :disabled="status.loggingIn"
                >
                <span>{{ $t('user.remember-me') }}</span>
              </label>
            </div>
            <a
              class="forget_pass"
              href="javascript:void(0)"
              @click="forgotPass = !forgotPass"
            >{{ $t('user.forgot-password-question') }}</a>
          </div>
        </form>
        <div
          v-if="alert.message"
          :class="`alert ${alert.type}`"
        >
          {{ alert.message }}
        </div>
      </ValidationObserver>
    </div>

    <div
      v-if="forgotPass"
      class="my__account__wrapper"
    >
      <h3 class="account__title">
        {{ $t('user.reset-password') }}
      </h3>
      <form @submit.prevent="resetRequest()">
        <div class="account__form">
          <div class="input__box">
            <label>{{ $t('user.email') }} <span>*</span></label>
            <input
              v-model="resetEmail"
              type="text"
            >
            <div
              v-show="resetEmail == null"
              class="invalid-feedback"
            >
              Email đang để trống !!
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
              {{ $t('user.reset-password-button') }}
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
import {
    ValidationProvider,
    ValidationObserver,
    extend
} from "vee-validate/dist/vee-validate.full";
import { email } from 'vee-validate/dist/rules';

extend('email', email);

export default {
    components: {
        ValidationProvider, ValidationObserver
    },
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
        submit() {
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
        $route() {
            this.clearAlert();
        }
    }
};
</script>

<style></style>
