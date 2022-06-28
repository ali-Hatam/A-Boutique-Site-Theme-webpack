<template>
  <div>

    <!-- <div class="cover" :ref="'cover'" :style="{backgroundColor: coverBackColor, visibility: coverVisibility, opacity: coverOpacity, height: coverHeight, overflow: coverOverflow,zIndex:100}">
    </div> -->

    <header-part :transferElement="bodyAndFooter"></header-part>

    <shoplist-part></shoplist-part>

    <section class="body-and-footer" ref="bodyAndFooter">
      <!-- =========================================Body Container======================================== -->
      <section class="body-container" :ref="'bodyContainer'">
        <navbar-part></navbar-part>
        <router-view></router-view>
        <!-- <router-view>
          <template #item="{propCmponent}">
            <component :is="propCmponent" :subShopFromParent="polywear()"></component>
          </template>
        </router-view> -->

      </section>
      <!-- =============================================== Footer ============================================ -->

      <footer-part></footer-part>
    </section>

  </div>
</template>

<script setup>
import { ref } from "vue";

import headerPart from "../../global/header.vue";
import footerPart from "../../global/footer.vue";
import navbarPart from "./secondary/clothesNavbar.vue";
import shoplistPart from "./secondary/subShopCont.vue";
// import polywearPart from "./secondary/subStores/secondary/polywears.vue";

var bodyAndFooter = ref([]);
</script>

<style>
.body-and-footer {
  position: relative;
}

.body-container {
  width: 100%;
  display: inline-flex;
  flex-flow: row;
  justify-content: left;
}

.products-container {
  width: 80%;
  flex-flow: column;
  display: inline-flex;
  opacity: 1;
  -webkit-transition: all 0.6s ease-out;
  -moz-transition: all 0.6s ease-out;
  -ms-transition: all 0.6s ease-out;
  -o-transition: all 0.6s ease-out;
  transition: all 0.6s ease-out;
}

.sub-products-container {
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
  width: 100%;
  position: relative;
  z-index: 15;
  -webkit-transition: all 0.5s ease-out;
  -moz-transition: all 0.5s ease-out;
  -ms-transition: all 0.5s ease-out;
  -o-transition: all 0.5s ease-out;
  transition: all 0.5s ease-out;
}

/* .sub-products-container:first-child {
  box-shadow: 0px -2px #ccc;
} */
</style>