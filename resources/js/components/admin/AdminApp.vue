<template>
  <div
    id="app-container"
    :class="getMenuType"
  >
    <TopNav />
    <side-bar />
    <main>
      <div class="container-fluid">
        <router-view :key="$route.fullPath" />
      </div>
    </main>
  </div>
</template>

<script>
import {
    mapGetters,
    mapActions
} from 'vuex';
import SideBar from "./containers/SideBar";
import TopNav from "./containers/TopNav";
export default {
    name: "App",
    components: {
        TopNav,
        SideBar,
    },
    data() {
        return {
            imageUrl: []
        };
    },
    computed: {
        ...mapGetters(['getMenuType'])
    },
    created() {
        this.getLoginState();
        this.imageUrl = this.$parent.imageUrl;
    },
    methods: {
        ...mapActions("account", ["getLoginState"]),
    }
    
};
</script>
