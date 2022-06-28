<template>
  <div>
    <header-part :transferElement="indexBody"></header-part>
    <div class="index-body" ref="indexBody">
      <slider></slider>
      <last-products></last-products>
      <off></off>
      <popular-products></popular-products>
      <footer-part></footer-part>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import headerPart from "../../../global/header.vue";
import slider from "../secondary/slider.vue";
import lastProducts from "../secondary/lastProducts.vue";
import popularProducts from "../secondary/popularProducts.vue";
import off from "../secondary/off.vue";
import footerPart from "../../../global/footer.vue";

var indexBody = ref([]);
</script>

<style>
.index-body {
  position: relative;
  z-index: 0;
}
</style>