<template>
  <div class="navbar-container" :ref="'navbarContainer'">
    <div class="store-category">
      <h2>فروشگاه ها</h2>
      <a v-for="storeItem in data.stores" :key="storeItem.id" :href="storeItem.url">
        <h2>{{ storeItem.text }}</h2>
      </a>
    </div>

    <div class="show-products">
      <h2>بر اساس :</h2>
      <a v-for="item in data.categories" :key="item.id" :href="item.url" @mouseover="hoverRadio(item.id)" @click="activeRadio(item.id)" @mouseout="unhoverRadio(item.id)">
        <span><span :style="{opacity:data.categoryOpacity[item.id]}"></span></span>
        <span>{{ item.name }}</span>
      </a>
    </div>
  </div>

</template>

<script setup>
import { reactive } from "vue";
import { useStore } from "vuex";

var store = useStore();

var data = reactive({
  stores: store.state.stores,
  categories: store.state.categories,
  categoryOpacity: [],
  prevCateg: 0,
});

var hoverRadio = (catId) => {
  if (catId == data.prevCateg) return;

  data.categoryOpacity[catId] = "0.4";
};

var unhoverRadio = (catId) => {
  if (catId == data.prevCateg) return;

  data.categoryOpacity[catId] = "0";
};

var activeRadio = (catId) => {
  data.categoryOpacity[data.prevCateg] = "0";

  data.categoryOpacity[catId] = "1";

  data.prevCateg = catId;
};
</script>

<style>
.navbar-container {
  width: 20%;
  float: right;
  display: inline-flex;
  flex-flow: column;
  background-color: #f2e1d9;
  z-index: 10;
  -webkit-transition: all 0s ease-out;
  -moz-transition: all 0s ease-out;
  -ms-transition: all 0s ease-out;
  -o-transition: all 0s ease-out;
  transition: all 0s ease-out;
}

.navbar-container .store-category {
  display: inline-flex;
  flex-flow: column;
}

.navbar-container .store-category a {
  display: inline-block;
}

.navbar-container .store-category h2 {
  padding: 30px 15px 15px;
  font-weight: bold;
  font-size: 17px;
}

.navbar-container .store-category a h2 {
  padding: 15px 25px;
  color: #3f3f3f;
  font-size: 15px;
  -webkit-transition: transform 0.2s ease-out, color 0.2s ease-out;
  -moz-transition: transform 0.2s ease-out, color 0.2s ease-out;
  -ms-transition: transform 0.2s ease-out, color 0.2s ease-out;
  -o-transition: transform 0.2s ease-out, color 0.2s ease-out;
  transition: transform 0.2s ease-out, color 0.2s ease-out;
}

.navbar-container .store-category a h2:hover {
  color: #f07a4b;
  transform: translateX(-5px);
}

.active {
  background-color: #717fac;
  color: #3f3f3f;
}

.navbar-container .show-products h2 {
  padding: 30px 15px 15px;
  font-weight: bold;
  font-size: 17px;
}

.navbar-container .show-products {
  display: inline-flex;
  flex-flow: column;
}

.navbar-container .show-products a {
  display: inline-block;
  padding: 15px 25px;
  color: #3f3f3f;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
}

.navbar-container .show-products a span:nth-child(1) {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border: solid 1px #3f3f3f;
  border-radius: 50%;
}

.navbar-container .show-products a span:nth-child(1) span {
  display: inline-block;
  width: 8px;
  height: 8px;
  background-color: #3f3f3f;
  border-radius: 50%;
  opacity: 0;
  -webkit-transition: opacity 0.2s ease-out;
  -moz-transition: opacity 0.2s ease-out;
  -ms-transition: opacity 0.2s ease-out;
  -o-transition: opacity 0.2s ease-out;
  transition: opacity 0.2s ease-out;
}

.navbar-container .show-products a:nth-child(2) span:nth-child(1) span {
  opacity: 1;
}
</style>
