<template>
  <div class="wrapper" style="position: relative">
    <nav-bar></nav-bar>
    <side-bar></side-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "./components/admin/NavBar";
import SideBar from "./components/admin/SideBar";
import Introduction from "./components/admin/main/Introduction";

export default {
  name: "App",
  components: {
    NavBar,
    SideBar,
    Introduction
  },
};
</script>