<template>
  <div v-for=" (subStoreItem,index) in data.goalProducts" :key="index" class="products-container">
    <div v-for=" n2 in (subStoreItem.products.length % data.respNum ==0 ? subStoreItem.products.length / data.respNum : Math.floor(subStoreItem.products.length / data.respNum)+1)" :key="n2" class="sub-products-container">
      <article v-for="n3 in (subStoreItem.products.length-(n2-1)*data.respNum>=data.respNum ? data.respNum : subStoreItem.products.length-(n2-1)*data.respNum)" :key="subStoreItem.products[data.respNum*(n2-1)+n3-1].id" class="products-item" style=" top: 0; opacity: 1; ">
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
          <a :href="subStoreItem.products[data.respNum*(n2-1)+n3-1].url" class="link2" @mouseover=overFigure(index,subStoreItem.products[data.respNum*(n2-1)+n3-1].id) @mouseout=outFigure(index,subStoreItem.products[data.respNum*(n2-1)+n3-1].id)>
            {{subStoreItem.products[data.respNum*(n2-1)+n3-1].productName}}
          </a>
          <h2>{{subStoreItem.products[data.respNum*(n2-1)+n3-1].productPrice}}</h2>
          <a href="#" class="link3">
            افزودن به سبد خرید
          </a>
        </figcaption>
      </article>
    </div>
    <!-- <slot name="default" :propCmponent="data.sentComponent"></slot> -->
  </div>
</template>

<script setup >
// import slotComponent from "./slotComponent.vue";

import { reactive } from "vue";
import { useStore } from "vuex";

var store = useStore();

var data = reactive({
  viewMoreOpacity: {},
  viewMoreTop: {},
  figureBackColor: {},
  goalProducts: [],
  respNum: 3,
  // sentComponent: slotComponent,
});

data.goalProducts.push(store.state.fallAndWinterClothes[2]);

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

var overFigure = (index, productId) => {
  data.figureBackColor[`${index}_${productId}`] = "rgba(33,33,33,0.3)";
  data.viewMoreOpacity[`${index}_${productId}`] = "1";
  data.viewMoreTop[`${index}_${productId}`] = "47%";
};
var outFigure = (index, productId) => {
  data.figureBackColor[`${index}_${productId}`] = "#f0f0f000";
  data.viewMoreOpacity[`${index}_${productId}`] = "0";
  data.viewMoreTop[`${index}_${productId}`] = "48%";
};
</script>
