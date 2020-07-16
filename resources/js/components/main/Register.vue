<template>
  <modal
    name="register"
    width="900"
    height="600"
  >
    <div class="my__account__wrapper">
      <h3 class="account__title">
        Register
      </h3>
      <ValidationObserver v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(submit)">
          <div class="account__form">
            <div class="input__box">
              <label>Name <span>*</span></label>
              <ValidationProvider
                v-slot="{ errors }"
                name="name"
                rules="required"
              >
                <input
                  v-model="user.name"
                  type="text"
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
              <label>Email address <span>*</span></label>
              <ValidationProvider
                v-slot="{ errors }"
                name="email"
                rules="required"
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
                <div
                  v-if="alert.message"
                  :class="`alert ${alert.type}`"
                >
                  {{ alert.message }}
                </div>
              </ValidationProvider>
            </div>
            <div class="input__box">
              <label>Password<span>*</span></label>
              <ValidationProvider
                v-slot="{ errors }"
                name="password"
                rules="required|min:8|verify_password"
                vid="password"
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
            <div class="input__box">
              <label>Nhập lại Password<span>*</span></label>
              <ValidationProvider
                v-slot="{ errors }"
                name="password confirmation"
                rules="required|min:8|confirmed:password"
              >
                <input
                  v-model="user.password_confirmation"
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
              <img v-show="status.registering">
              <button>Register</button>
            </div>
          </div>
        </form>
      </ValidationObserver>
    </div>
  </modal>
</template>

<script>
import {
    ValidationProvider,
    ValidationObserver,
    extend
} from "vee-validate/dist/vee-validate.full";
import { confirmed } from 'vee-validate/dist/rules';
extend('confirmed', confirmed);
extend('verify_password', value => {
        var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        if (strongRegex.test(value)) {
            return true;
        }
        return `The password must contain at least: 1 uppercase letter, 1 lowercase letter, 1 number, and one special character (E.g. , . _ & ? etc)`;
}
);
import { mapState, mapActions } from "vuex";
export default {
    components: {
        ValidationProvider, ValidationObserver
    },
    data() {
        return {
            user: {
                name: "",
                email: "",
                password: "",
                password_confirmation: "",
                roles: [3]
            },
        };
    },
    computed: {
        ...mapState("account", ["status"]),
        ...mapState({
            alert: state => state.alert
        })
    },
    methods: {
        ...mapActions("account", ["register"]),
        submit() {
            this.register(this.user).then(() => {
                if (this.status.registered) {
                    this.$modal.hide('register');
                    // SetTimeout()
                }
            });
        }
    }
};
</script>

<style></style>
