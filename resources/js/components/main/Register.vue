<template>
    <modal name="register" width="900" height="600">
        <div class="my__account__wrapper">
            <h3 class="account__title">Register</h3>
            <ValidationObserver v-slot="{ handleSubmit }">
                <form v-on:submit.prevent="handleSubmit(submit)">
                    <div class="account__form">
                        <div class="input__box">
                            <label>Name <span>*</span></label>
                            <ValidationProvider
                                name="name"
                                rules="required"
                                v-slot="{ errors }"
                            >
                                <input
                                    type="text"
                                    v-model="user.name"
                                    class="form-control"
                                    :class="{
                                        'is-invalid': errors.length
                                    }"
                                />
                                <div class="invalid-feedback">
                                    {{ errors[0] }}
                                </div>
                            </ValidationProvider>
                        </div>
                        <div class="input__box">
                            <label>Email address <span>*</span></label>
                            <ValidationProvider
                                name="email"
                                rules="required"
                                v-slot="{ errors }"
                            >
                                <input
                                    type="email"
                                    v-model="user.email"
                                    class="form-control"
                                    :class="{
                                        'is-invalid': errors.length
                                    }"
                                />
                                <div class="invalid-feedback">
                                    {{ errors[0] }}
                                </div>
                            </ValidationProvider>
                        </div>
                        <div class="input__box">
                            <label>Password Verify<span>*</span></label>
                            <ValidationProvider
                                name="password"
                                rules="required|min:8|verify_password"
                                v-slot="{ errors }"
                            >
                                <input
                                    type="password"
                                    v-model="user.password_confirmation"
                                    class="form-control"
                                    :class="{
                                        'is-invalid': errors.length
                                    }"
                                />
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
                                name="password"
                                rules="required|min:8|verify_password"
                                v-slot="{ errors }"
                            >
                                <input
                                    type="password"
                                    v-model="user.password"
                                    class="form-control"
                                    :class="{
                                        'is-invalid': errors.length
                                    }"
                                />
                                <div
                                    class="invalid-feedback"
                                >
                                    {{ errors[0] }}
                                </div>
                            </ValidationProvider>
                        </div>
                        <div class="form__btn">
                            <img v-show="status.registering" />
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

extend('verify_password', value => {
        var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        if(strongRegex.test(value)){
            return true;
        };
        return `The password must contain at least: 1 uppercase letter, 1 lowercase letter, 1 number, and one special character (E.g. , . _ & ? etc)`;
}
);
import { mapState, mapActions } from "vuex";
export default {
    components: {
        ValidationProvider,ValidationObserver
    },
    data() {
        return {
            user: {
                name: "",
                email: "",
                password: "",
                password_confirmation: ""
            },
        };
    },
    computed: {
        ...mapState("account", ["status"])
    },
    methods: {
        ...mapActions("account", ["register"]),
        submit() {
            this.register(this.user).then((res) => {
                debugger;
                if(this.status.registered){
                    this.$modal.hide('register');
                    // setTimeout()
                }
            });
        }
    }
};
</script>

<style></style>
