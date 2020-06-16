<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-12 order-2 order-lg-1 md-mt-40 sm-mt-40">
                <div class="shop__sidebar">
                    <aside class="wedget__categories poroduct--cat">
                        <h3 class="wedget__title">Tài khoản</h3>
                        <ul>
                            <li>
                                <a href="javascript:void(0)" v-on:click="screen = 0">Thay đổi thông tin người đọc </a>
                            </li>
                            <li><a href="javascript:void(0)" v-on:click="screen = 1" >Đổi password </a></li>
                            <li><a href="javascript:void(0)">... </a></li>
                        </ul>
                    </aside>
                </div>
            </div>
            <div class="col-lg-9 col-12 order-1 order-lg-2" v-if="screen == 0">
                <div class="contact-form-wrap">
                    <h2 class="contact__title">Get in touch</h2>
                    <p>
                        Nam liber tempor cum soluta nobis eleifend option congue
                        nihil imperdiet doming id quod mazim placerat facer
                        possim assum.
                    </p>
                    <form v-on:submit.prevent="updateUser()">
                        <!-- <div class="single-contact-form space-between">
                                    <input type="text" name="firstname" placeholder="First Name*">
                                    <input type="text" name="lastname" placeholder="Last Name*">
                                </div> -->
                        <div class="single-contact-form space-between">
                            <label> Name</label>
                            <input
                                type="text"
                                v-if="user != null"
                                v-model="user.name"
                            />
                        </div>
                        <!-- <div class="single-contact-form">
                                    <input type="text" name="subject" placeholder="Subject*">
                                </div>
                                <div class="single-contact-form message">
                                    <textarea name="message" placeholder="Type your message here.."></textarea>
                                </div> -->
                        <div class="contact-btn">
                            <button>Change</button>
                        </div>
                    </form>
                </div>
                <div class="form-output">
                    <p class="form-messege" />
                </div>
            </div>
            <div class="col-lg-9 col-12 order-1 order-lg-2" v-if="screen == 1">
                <div class="contact-form-wrap">
                    <h2 class="contact__title">Get in touch</h2>
                    <p>
                        Nam liber tempor cum soluta nobis eleifend option congue
                        nihil imperdiet doming id quod mazim placerat facer
                        possim assum.
                    </p>
                    <form v-on:submit.prevent="updatePass()">
                        <div class="single-contact-form space-between">
                            <label>Password cũ</label>
                            <input
                                type="password"
                                v-if="user != null"
                                v-model="oldPassword"
                            />
                        </div>
                        <div class="single-contact-form space-between">
                            <label> Password mới</label>
                            <input
                                type="password"
                                v-if="user != null"
                                v-model="newPassword"
                            />
                        </div>
                        <div class="single-contact-form space-between">
                            <label> Xác nhận Password mới</label>
                            <input
                                type="password"
                                v-if="user != null"
                                v-model="passwordConfirm"
                            />
                        </div>

                        <div class="contact-btn">
                            <button>Change</button>
                        </div>
                    </form>
                </div>
                <div class="form-output">
                    <p class="form-messege" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
    data: function() {
        return {
            oldPassword: "",
            newPassword: "",
            passwordConfirm: "",
            screen: 0,
        };
    },
    computed: {
        ...mapState("account", ["status", "user"])
    },
    methods: {
        ...mapActions("account", ["update", "updatePassword"]),
        updateUser() {
            this.update(this.user).then(res => {
                let options = {
                    okText: "Đóng",
                    animation: "zoom"
                };
                this.$dialog.alert("Bạn đã sửa thành công ", options);
            });
        },
        updatePass() {
            this.updatePassword({
                id: this.user.user_id,
                currentPassword: this.oldPassword,
                newPassword: this.newPassword,
                newPassword_confirmation: this.passwordConfirm
            }).then(res => {
                console.log(res.status);
                let options = {
                    okText: "Đóng",
                    animation: "zoom"
                };
                if (res.status == "200") {
                    this.$dialog.alert("Bạn đã sửa thành công ", options);
                } else {
                    this.$dialog.alert("Sửa thất bại !! Sai thông tin cần thay đổi", options);
                }
            });
        }
    }
};
</script>

<style></style>
