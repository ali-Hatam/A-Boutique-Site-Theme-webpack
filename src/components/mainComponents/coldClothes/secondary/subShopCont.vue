<template>
  <div class="sub-shop-container">
    <div class="sub-shop-list">
      <router-link v-for="subShopItem in data.fallAndWinterClothes" :key="subShopItem.id" :to="subShopItem.url" custom v-slot="{href,isExactActive }">
        <div class="sub-shop-list-item" :class="{listActive:isExactActive}">
          <router-link :to="href" :class="{activeClassInSubShop:isExactActive}">
            {{ subShopItem.category }}
          </router-link>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useStore } from "vuex";

var store = useStore();

var data = reactive({
  fallAndWinterClothes: store.state.fallAndWinterClothes,
  prevStoreId: 0,
});
</script>

<style>
.sub-shop-container {
  background-color: #1d2547;
}

.sub-shop-container {
  width: 100%;
  text-align: left;
  z-index: 99;
  position: relative;
  box-shadow: 0px 3px #1d2547;
}

.sub-shop-list {
  display: inline-flex;
  justify-content: center;
  width: 80%;
}

.sub-shop-list-item {
  padding: 30px 25px;
  box-shadow: 0px 3px #1d2547;
  -webkit-transition: box-shadow 0.4s ease-out;
  -moz-transition: box-shadow 0.4s ease-out;
  -ms-transition: box-shadow 0.4s ease-out;
  -o-transition: box-shadow 0.4s ease-out;
  transition: box-shadow 0.4s ease-out;
}
.sub-shop-list-item a {
  cursor: pointer;
  font-weight: 600;
  color: #fff;
  -webkit-transition: color 0.3s ease-out;
  -moz-transition: color 0.3s ease-out;
  -ms-transition: color 0.3s ease-out;
  -o-transition: color 0.3s ease-out;
  transition: color 0.3s ease-out;
}

.activeClassInSubShop {
  color: rgb(240, 122, 75) !important;
}

.listActive {
  box-shadow: 0px 3px rgb(240, 122, 75) !important;
}
/* .sub-shop-list-item:first-child {
  box-shadow: 0px 3px rgb(240, 122, 75);
} */
</style>