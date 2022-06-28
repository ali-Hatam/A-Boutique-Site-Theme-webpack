<template>
  <div>

    <!-- ==================================== Apear And Disapear Part ==================================== -->
    <cover-part></cover-part>
    <!-- ======================================= Title And Menu Part =================================== -->
    <header-part :transferElement="accountContainer"></header-part>

    <!-- =========================================Body Container======================================== -->
    <div class="account-underHeader" ref="accountContainer">
      <section class="account-container">
        <!-- =================== Account Navbar ======================= -->
        <navbar-part></navbar-part>
        <!-- =================== Account Body &  My Address Body  ======================= -->
        <!-- <accountbody-part></accountbody-part>
      <myaddress-part></myaddress-part> -->
        <router-view></router-view>
      </section>
      <!-- =============================================== Footer ============================================ -->
      <footer-part></footer-part>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import headerPart from "../../../global/header.vue";
import footerPart from "../../../global/footer.vue";
import coverPart from "../../account/secondary/cover.vue";
import navbarPart from "../../account/secondary/navbar.vue";

var accountContainer = ref([]);
</script>

<style>
.account-container {
  width: 100%;
  display: flex;
  flex-flow: row;
}
.account-underHeader {
  position: relative;
}
</style>