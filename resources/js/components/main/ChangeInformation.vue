<template>
    <div class="container" style="padding-top:5%;">
        <div class="row">
            <div class="col-lg-3 col-12 order-2 order-lg-1 md-mt-40 sm-mt-40">
                <div class="shop__sidebar">
                    <aside class="wedget__categories poroduct--cat">
                        <h3 class="wedget__title">Tài khoản</h3>
                        <ul>
                            <li>
                                <a
                                    href="javascript:void(0)"
                                    v-on:click="screen = 0"
                                    >Thay đổi thông tin người đọc
                                </a>
                            </li>
                            <li>
                                <a
                                    href="javascript:void(0)"
                                    v-on:click="screen = 1"
                                    >Đổi password
                                </a>
                            </li>
                            <li>
                                <a
                                    href="javascript:void(0)"
                                    v-on:click="initCardView()"
                                    >Thẻ
                                </a>
                            </li>
                            <li><a href="javascript:void(0)">... </a></li>
                        </ul>
                    </aside>
                </div>
            </div>
            <div class="col-lg-9 col-12 order-1 order-lg-2" v-if="screen == 0">
                <div class="contact-form-wrap">
                    <h2 class="contact__title">Chỉnh sửa tên</h2>
                    <p>
                        Bạn có thể thay đổi tên của mình bao nhiêu lần tùy ý. Tuy nhiên, bạn không được đổi tên quá 3 lần trong một phút.
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
                    <h2 class="contact__title">Thay đổi mật khẩu</h2>
                    <p>
                        Bạn có thể thay đổi mật khẩu của bạn vì lý do bảo mật của chính bạn.
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
            <div class="col-lg-9 col-12 order-1 order-lg-2" v-if="screen == 2">
                <div class="contact-form-wrap">
                    <h2 class="contact__title">Thẻ của bạn</h2>
                    <div v-if="!card && typeof createStatus === 'undefined' ">
                    <p >
                        Bạn chưa có thẻ để mượn sách thư viện. Bạn có muốn tạo
                        mới thẻ không ?
                    </p>
                    <div class="contact-btn" >
                        <button v-on:click="createCard()">Tạo thẻ</button>
                    </div>
                    </div>
                    <div class="checkout_info" v-if="!card && createStatus !== undefined && createStatus != 1">
                        <span>{{createStatus == 0 ? "Đang tiến trình tạo thẻ" : "Không tạo được thẻ"}} </span>
                        <a class="showcoupon" href="#"
                            >{{createStatus == 0 ? "Vui lòng chờ thư viện tạo thẻ cho bạn" : "Có vấn đề khi tạo thẻ cho bạn hoặc bạn không được cho phép tạo thẻ !!!"}}</a
                        >
                    </div>
                    <div class="col-lg-4 col-12 md-mt-40 sm-mt-40" v-if="card">
                        <div class="wn__address">
                            <div class="wn__addres__wreapper">
                                <div class="single__address">
                                    <i class="icon-credit-card icons"></i>
                                    <div class="content">
                                        <span>Số thẻ:</span>
                                        <p>{{ card.id }}</p>
                                    </div>
                                </div>

                                <div class="single__address">
                                    <i class="icon-user icons"></i>
                                    <div class="content">
                                        <span>Tên:</span>
                                        <p>{{ user.name }}</p>
                                    </div>
                                </div>

                                <div class="single__address">
                                    <i class="icon-envelope icons"></i>
                                    <div class="content">
                                        <span>Địa chỉ Email:</span>
                                        <p>{{ user.email }}</p>
                                    </div>
                                </div>

                                <div class="single__address">
                                    <i class="icon-globe icons"></i>
                                    <div class="content">
                                        <span>Loại thẻ:</span>
                                        <p>Thẻ mượn sách</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
            card: "",
            createStatus: ""
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
                this.$dialog.alert(res.status == 200 ? "Bạn đã sửa thành công " : "Không có quyền sửa", options);
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
                    this.$dialog.alert(
                        "Sửa thất bại !! Sai thông tin cần thay đổi",
                        options
                    );
                }
            });
        },
        initCardView() {
            var app = this;
            axios.get("api/v1/userRequests/" + this.user.user_id).then(res => {
                console.log(res);
                app.createStatus = res.data.status;
                app.screen = 2;
            }).catch(function(e) {
                if(e.response.status == 404){
                    app.screen = 2;
                    app.createStatus = undefined;
                }
                throw e;
            });

            axios.get("api/v1/cards/" + this.user.user_id).then(res => {
                app.card = res.data;
            });
        },
        createCard() {
            var app = this;
            let options = {
                okText: "Xác nhận",
                cancelText: "Hủy",
                animation: "fade" // Available: "zoom", "bounce", "fade"
            };
            app.$dialog
                .confirm("Bạn xác nhận muốn tạo thẻ ?", options)
                .then(function(dialog) {
                    var userReq = {
                        user_id: app.user.user_id,
                        request_type: "create-card",
                        status : 0
                    };
                    axios.post("api/v1/userRequests", userReq).then(res => {
                        app.initCardView();
                    });
                })
                .catch(function(e) {
                    console.log(e);
                    console.log("Clicked on cancel");
                });
        }
    }
};
</script>

<style></style>
