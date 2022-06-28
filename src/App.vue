<template>
  <div>
    <!-- <home-page></home-page> -->
    <!-- <account-page></account-page> -->
    <router-view></router-view>
  </div>
</template>

<script setup>
// import homePage from "./components/mainComponents/home/main/home.vue";
// import accountPage from "./components/mainComponents/account/main/account.vue";
</script>

<style>
.cover {
  width: 100%;
  position: absolute;
  z-index: 1;
  background-color: transparent;
  visibility: hidden;
  opacity: 1;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  -ms-transition: all 0.2s ease-out;
  -o-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}
</style>
