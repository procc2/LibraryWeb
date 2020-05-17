<template>
    <div class="clearfix">
        <ul class="secondary_menu">
            <li>
                <router-link :to="{ name: 'login' }" v-if="!status.loggedIn"
                    >Đăng nhập</router-link
                >
                <a v-if="status.loggedIn" href="#" v-on:click="logout()"
                    >Đăng xuất</a
                >
            </li>
        </ul>
        <div class="phone-top">
            Hotline: <a href="tel:0983010597">0983010597</a
            ><span v-if="status.loggedIn"> Xin chào {{ user.name }}</span>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
    created() {
        this.getLoginState();
    },
    computed: {
        ...mapState("account", ["status", "user"])
    },
    methods: {
        ...mapActions("account",['getLoginState','logout'])
    }
};
</script>

<style></style>
