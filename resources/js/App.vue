<template>
    <div>
        <top />
        <search-bar/>
        <slider v-if="$router.currentRoute.path == '/'" />
        <bread-crumb v-if="$router.currentRoute.path != '/'"/>
        <router-view :key="$route.fullPath"></router-view>
        <foot />
        <login/>
        <register/>
    </div>
</template>

<script>
import Slider from "./components/main/Slider.vue";
import BreadCrumb from "./components/main/BreadCrumb";
import SearchBar from "./components/main/SearchBar.vue";
import Header from "./components/main/Header.vue";
import Footer from "./components/main/Footer.vue";
import Login from "./components/main/Login.vue";
import Register from "./components/main/Register.vue";

import { mapState, mapActions } from "vuex";
export default {
    name: "App",
    components: {
        'top': Header,
        'slider': Slider,
        'foot': Footer,
        "search-bar": SearchBar,
        "bread-crumb": BreadCrumb,
        "login" : Login,
        "register" : Register,
    },
    created() {
        this.getLoginState().then(()=>{
            this.getUserCart();
        })
        
    },
    methods: {
        ...mapActions("account", ["getLoginState"]),
        ...mapActions("cart", ["getUserCart"])
    }
};
</script>
