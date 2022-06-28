<template>
  <div v-for=" (subStoreItem,index) in polyWearShop" :key="index" class="products-container">
    <div v-for=" n2 in (subStoreItem.products.length % data.respNum ==0 ? subStoreItem.products.length / data.respNum : Math.floor(subStoreItem.products.length / data.respNum)+1)" :key="n2" class="sub-products-container">
      <article v-for="n3 in (subStoreItem.products.length-(n2-1)*data.respNum>=data.respNum ? data.respNum : subStoreItem.products.length-(n2-1)*respNum)" :key="subStoreItem.products[data.respNum*(n2-1)+n3-1].id" class="products-item" style=" top: 0; opacity: 1; ">
        <div class="fig-container" @mouseover=overFigure(index,subStoreItem.products[data.respNum*(n2-1)+n3-1].id) @mouseout=outFigure(index,subStoreItem.products[data.respNum*(n2-1)+n3-1].id)>
          <a :href="subStoreItem.products[data.respNum*(n2-1)+n3-1].url" class="link1">
            <figure :style="{backgroundColor:data.figureBackColor[`${index}_${subStoreItem.products[data.respNum*(n2-1)+n3-1].id}`]}">
              <img :src="subStoreItem.products[data.respNum*(n2-1)+n3-1].picture" alt="" />
            </figure>
          </a>
          <div class="view-more-container" :style="{opacity:data.viewMoreOpacity[`${index}_${subStoreItem.products[data.respNum*(n2-1)+n3-1].id}`],top:data.viewMoreTop[`${index}_${subStoreItem.products[data.respNum*(n2-1)+n3-1].id}`]}">
            <a :href="subStoreItem.products[data.respNum*(n2-1)+n3-1].url" class="view-more-link">
              <h2>مشاهده بیشتر</h2>
            </a>
          </div>
        </div>
        <figcaption>
          <a :href="subStoreItem.products[data.respNum*(n2-1)+n3-1].url" class="link2" @mouseover=overFigure(subStoreItem.id,subStoreItem.products[respNum*(n2-1)+n3-1].id) @mouseout=outFigure(index,subStoreItem.products[data.respNum*(n2-1)+n3-1].id)>
            {{subStoreItem.products[data.respNum*(n2-1)+n3-1].productName}}
          </a>
          <h2>{{subStoreItem.products[data.respNum*(n2-1)+n3-1].productPrice}}</h2>
          <a href="#" class="link3">
            افزودن به سبد خرید
          </a>
        </figcaption>
      </article>
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps, reactive } from "vue";

var props = defineProps({
  subShopFromParent: Object,
});

var data = reactive({
  viewMoreOpacity: {},
  viewMoreTop: {},
  figureBackColor: {},
  respNum: 3,
});
var polyWearShop = computed(() => {
  return props.subShopFromParent;
});
if (window.innerWidth >= 960) {
  data.respNum = 3;
} else if (window.innerWidth >= 630 && window.innerWidth < 960) {
  data.respNum = 2;
} else {
  data.respNum = 1;
}

visualViewport.addEventListener("resize", () => {
  if (window.innerWidth >= 960) {
    data.respNum = 3;
  } else if (window.innerWidth >= 630 && window.innerWidth < 960) {
    data.respNum = 2;
  } else {
    data.respNum = 1;
  }
});

var overFigure = () => {
  return (index, productId) => {
    data.figureBackColor[`${index}_${productId}`] = "rgba(33,33,33,0.3)";
    data.viewMoreOpacity[`${index}_${productId}`] = "1";
    data.viewMoreTop[`${index}_${productId}`] = "47%";
  };
};
var outFigure = () => {
  return (index, productId) => {
    data.figureBackColor[`${index}_${productId}`] = "#f0f0f000";
    data.viewMoreOpacity[`${index}_${productId}`] = "0";
    data.viewMoreTop[`${index}_${productId}`] = "48%";
  };
};
</script>

<style>
.products-container {
  width: 80%;
  display: none;
  flex-flow: column;
  opacity: 0;
  -webkit-transition: all 0.6s ease-out;
  -moz-transition: all 0.6s ease-out;
  -ms-transition: all 0.6s ease-out;
  -o-transition: all 0.6s ease-out;
  transition: all 0.6s ease-out;
}

.products-container:nth-child(2) {
  display: inline-flex;
  opacity: 1;
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

.sub-products-container:first-child {
  box-shadow: 0px -2px #ccc;
}
</style>