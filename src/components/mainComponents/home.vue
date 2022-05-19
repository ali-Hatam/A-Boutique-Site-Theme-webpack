<template>
  <div>
    <!-- :refOfSliderComp="takedRef" -->
    <app-header></app-header>
    <app-slider @sendSliderRef="declareRef()"></app-slider>
  </div>
</template>

<script>
import header from "../secondaryComponents/global/header.vue";
import slider from "../secondaryComponents/local/slider.vue";
export default {
  data() {
    return {
      takedRef: {},
    };
  },
  computed: {
    declareRef() {
      return (event) => {
        this.takedRef = event;
      };
    },
  },
  components: {
    "app-header": header,
    "app-slider": slider,
  },
};
</script>

<style>
</style>