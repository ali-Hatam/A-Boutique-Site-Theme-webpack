<template>
  <div>

    <header-part></header-part>

    <product-detailes-part></product-detailes-part>

    <comment-part></comment-part>

    <footer-part></footer-part>

  </div>
</template>

<script setup>
import headerPart from "../../global/header.vue";
import footerPart from "../../global/footer.vue";
import productDetailesPart from "./secondary/productDetail.vue";
import commentPart from "./secondary/comment.vue";
</script>