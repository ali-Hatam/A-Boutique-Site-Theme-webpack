<template>
  <section class="last-products-container">
    <i class="fa fa-chevron-right" @click="moveRight()" :style="{opacity:data.chevRightOpac}"></i>
    <i class="fa fa-chevron-left" @click="moveLeft()" :style="{opacity:data.chevLeftOpac}"></i>

    <header class="main-header" ref="mainHeader">
      <div class="header-container" :style="{opacity:data.headerOpacity, top:data.headerTop}">
        <h1>آخرین محصولات</h1>
        <h2>در این بخش آخرین محصولات ارائه شده در هر فروشگاه نمایش داده شده است</h2>
      </div>
    </header>

    <div class="shop-container">
      <div class="shop-list">
        <div v-for="storeItem in products" :key="storeItem.id" class="shop-list-item" :style="{boxShadow:data.shopBoxShadow[storeItem.id]}">
          <h2 @click="showShop(storeItem.id)" :style="{color:data.shopNameColor[storeItem.id]}">{{ storeItem.text }}</h2>
        </div>
      </div>
    </div>

    <div v-for="shop in products" :key="shop.id" class="flex-container" :ref="(el)=>{refrences.flexContRef[shop.id] = el}" :style="flexContainerStyle(shop)">
      <div v-for="n1 in moveContainerItemNum(shop)" :key="n1" class="moving-container">
        <article v-for="n2 in articleNum(shop,n1)" :key="n2" class="products-item" :style="{opacity:productOpacity(n2), top: productTop(n2)}">
          <div class="fig-container" @mouseover="overFigure(shop.id,data.moveConPart*(n1-1)+(n2-1))" @mouseout="outFigure(shop.id,data.moveConPart*(n1-1)+(n2-1))">
            <a :href="shop.products[data.moveConPart*(n1-1)+(n2-1)].url" class="link1">
              <figure :style="figureStyle(shop.id,n1,n2)">
                <img :src="shop.products[data.moveConPart*(n1-1)+(n2-1)].picture" alt="" />
              </figure>
            </a>
            <div class="view-more-container" :style="viewMoreStyle(shop.id,n1,n2)">
              <a :href="shop.products[data.moveConPart*(n1-1)+(n2-1)].url" class="view-more-link">
                <h2>مشاهده بیشتر</h2>
              </a>
            </div>
          </div>
          <figcaption>
            <a :href="shop.products[data.moveConPart*(n1-1)+(n2-1)].url" class="link2" @mouseover="overFigure(shop.id,data.moveConPart*(n1-1)+(n2-1))" @mouseout="outFigure(shop.id,data.moveConPart*(n1-1)+(n2-1))">
              {{ shop.products[data.moveConPart*(n1-1)+(n2-1)].productName }}
            </a>
            <h2>{{ shop.products[data.moveConPart*(n1-1)+(n2-1)].productPrice }}</h2>
            <a href="#" class="link3">افزودن به سبد خرید</a>
          </figcaption>
        </article>
      </div>
    </div>
  </section>

</template>

<script setup >
import { useProducts } from "../../../../assets/shared/reused";
import { useStore } from "vuex";
import { ref } from "vue";

var store = useStore();

var products = ref(store.state.stores);

var {
  data,
  refrences,
  mainHeader,
  flexContainerStyle,
  articleNum,
  productOpacity,
  moveContainerItemNum,
  productTop,
  figureStyle,
  viewMoreStyle,
  overFigure,
  outFigure,
  showShop,
  moveRight,
  moveLeft,
} = useProducts(products);
</script>


<style>
.last-products-container,
.popular-products-container {
  width: 100%;
  overflow: hidden;
  text-align: center;
  position: relative;
}

.last-products-container .fa-chevron-right,
.popular-products-container .fa-chevron-right {
  position: absolute;
  font-size: 85px;
  right: 5%;
  top: 50%;
  cursor: pointer;
  opacity: 1;
  z-index: 100;
}

.last-products-container .fa-chevron-left,
.popular-products-container .fa-chevron-left {
  position: absolute;
  font-size: 85px;
  left: 5%;
  top: 50%;
  cursor: pointer;
  opacity: 0.5;
  z-index: 100;
}

.main-header {
  height: 208px;
  background-color: #1d2547;
  box-shadow: 0px 181px 0px -103px #1d2547;
}

.header-container {
  padding: 60px 0px 15px;
  width: 100%;
  margin-top: 20px;
  text-align: center;
  font-size: 45px;
  position: relative;
  top: 30%;
  opacity: 0;
  -webkit-transition: all 1s ease-out;
  -moz-transition: all 1s ease-out;
  -ms-transition: all 1s ease-out;
  -o-transition: all 1s ease-out;
  transition: all 1s ease-out;
}

.main-header h1 {
  font-weight: 600;
  color: #fff;
  text-shadow: -1px 1px #a5a5a5;
}

.main-header h2 {
  padding: 35px 0px;
  font-size: 18px;
  color: #a5a5a5;
}

.shop-container {
  width: 100%;
  background-color: #f2e1d9;
  position: relative;
  border: none;
  z-index: 10;
}

.shop-list {
  display: inline-flex;
  justify-content: center;
  width: 80%;
}

.shop-list-item {
  padding: 30px 25px;
  box-shadow: 0px 2px #1d2547;
  -webkit-transition: border-bottom-color 0.4s ease-out;
  -moz-transition: border-bottom-color 0.4s ease-out;
  -ms-transition: border-bottom-color 0.4s ease-out;
  -o-transition: border-bottom-color 0.4s ease-out;
  transition: border-bottom-color 0.4s ease-out;
}

.shop-list-item h2,
.sub-shop-list-item h2 {
  cursor: pointer;
  font-weight: 600;
  color: #1d2547;
  -webkit-transition: color 0.3s ease-out;
  -moz-transition: color 0.3s ease-out;
  -ms-transition: color 0.3s ease-out;
  -o-transition: color 0.3s ease-out;
  transition: color 0.3s ease-out;
}

.sub-shop-list-item h2 {
  color: #fff;
}

.shop-list-item:first-child {
  box-shadow: 0px 2px rgb(240, 122, 75);
}

.shop-list-item:first-child h2,
.sub-shop-list-item:first-child h2 {
  color: rgb(240, 122, 75);
}

.flex-container {
  width: 200%;
  display: none;
  opacity: 0;
  position: relative;
  left: 0%;
  -webkit-transition: all 0.6s ease-out;
  -moz-transition: all 0.6s ease-out;
  -ms-transition: all 0.6s ease-out;
  -o-transition: all 0.6s ease-out;
  transition: all 0.6s ease-out;
}

.flex-container:nth-child(5) {
  display: inline-flex;
  opacity: 1;
}

.moving-container {
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  justify-content: center;
  position: relative;
  padding: 0px 70px;
  -webkit-transition: all 0.5s ease-out;
  -moz-transition: all 0.5s ease-out;
  -ms-transition: all 0.5s ease-out;
  -o-transition: all 0.5s ease-out;
  transition: all 0.5s ease-out;
}

@media only screen and (min-width: 630px) {
  .moving-container {
    grid-template-columns: 50% 50%;
  }
}

@media only screen and (min-width: 960px) {
  .moving-container {
    grid-template-columns: 33.33% 33.33% 33.33%;
  }
}

.products-item {
  position: relative;
  opacity: 0;
  top: 200px;
  width: 90%;
  margin: 0 auto;
  -webkit-transition: all 1s ease-out;
  -moz-transition: all 1s ease-out;
  -ms-transition: all 1s ease-out;
  -o-transition: all 1s ease-out;
  transition: all 1s ease-out;
}

.products-item .link1 {
  display: inline-block;
  position: relative;
}

.products-item .fig-container {
  display: inline-block;
  position: relative;
  margin: 50px 10px 10px;
}

.products-item .link1 figure {
  position: relative;
  background-color: #f0f0f000;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  -ms-transition: all 0.2s ease-out;
  -o-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}

.products-item .link1 img {
  width: 100%;
  position: relative;
  z-index: -1;
}

.products-item .view-more-container {
  display: inline-block;
  position: absolute;
  top: 48%;
  right: 26%;
  opacity: 0;
  z-index: 10;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  -ms-transition: all 0.2s ease-out;
  -o-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}

.products-item .view-more-link {
  display: inline-block;
  position: relative;
}

.products-item .view-more-link h2 {
  display: inline-block;
  padding: 12px 25px;
  background-color: #212121;
  color: #e8e8e8;
  z-index: -1;
  position: relative;
}

.products-item .view-more-link:hover {
  background-color: #f0f0f048;
}

.products-item figcaption {
  text-align: center;
  width: 100%;
}

.products-item .link2 {
  display: inline-block;
  text-align: center;
  color: #212121;
  margin: 5px 0px;
}

.products-item figcaption h2 {
  margin: 15px 0px;
}

.products-item .link3 {
  display: inline-block;
  padding: 12px 25px;
  margin: 5px 0px 35px;
  background-color: #212121;
}
</style>