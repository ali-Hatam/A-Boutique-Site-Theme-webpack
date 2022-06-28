<template>
  <section class="product-details">
    <div class="product-states">
      <div class="product-magnify">
        <figure>
          <div class="moving-magnify" :style="{left:data.movingMagnifyLeft}">
            <img v-for="(img,index) in data.productDetails.images" :key="index" :src="img.url" alt="" />
          </div>
        </figure>
      </div>
      <div class="product-states-list">
        <div v-for="(fig,index) in data.productDetails.images" :key="index" class="product-states-item">
          <figure @click="moveMagnify(index)" @mouseover="onFigure(index)" @mouseout="outFigure(index)" :style="{border: data.magnifyFigureBorder[index]}">
            <img :src="fig.url" alt="" />
          </figure>
        </div>
      </div>
    </div>
    <div class="product-features">
      <div class="product-name">
        <h2>{{data.productDetails.name}}</h2>
      </div>
      <div class="product-price">
        <h2>{{data.productDetails.price}}</h2>
      </div>
      <div class="product-colors">
        <h2>
          رنگ انتخابی شما :
          <h2>{{data.productDetails.colors[data.colorNum].name}}</h2>
        </h2>
        <div class="color-box">
          <a v-for="(color,index) in data.productDetails.colors" :key="index" class="color" :style="{border:data.colorElementBorder[index]}" @mouseover="onColor(index)" @mouseout="outColor(index)" @click="clickColor(index)">
            <span :style="{backgroundColor:color.code}"></span>
          </a>
        </div>
      </div>
      <div class="product-sizes">
        <h2>انتخاب سایز</h2>
        <span v-for="(size,index) in data.productDetails.sizes" :key="index" :style="{backgroundColor:data.sizeElementBackColor[index],color:data.sizeElementColor[index]}" @mouseover="onSize(index)" @mouseout="outSize(index)" @click="clickSize(index)">{{size}}</span>
      </div>
      <div class="product-order">
        <h2>ارسال رایگان برای خریدهای بالای 500,000 تومان</h2>
        <a @click="goToCart()" ref="cartLink">ارسال به سبد خرید</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useStore } from "vuex";

var store = useStore();

var data = reactive({
  productDetails: store.state.productDetails,
  magnifyNum: 0,
  left: [0, 450, 900, 1350],
  magnifyFigureBorder: [
    "solid 2px #212121",
    "solid 2px transparent",
    "solid 2px transparent",
    "solid 2px transparent",
  ],
  colorElementBorder: [
    "solid 2px #212121",
    "solid 1px #dadada",
    "solid 1px #dadada",
    "solid 1px #dadada",
  ],
  colorNum: 0,
  sizeElementBackColor: ["#ffffff", "#ffffff", "#ffffff", "#ffffff"],
  sizeElementColor: ["#3f3f3f", "#3f3f3f", "#3f3f3f", "#3f3f3f"],
  sizeNum: undefined,
  isSizeSet: false,
});

var cartLink = ref([]);

var moveMagnify = (index) => {
  var diff, dist;

  if (index == data.magnifyNum) return;

  data.magnifyFigureBorder[data.magnifyNum] = "solid 2px transparent";

  if (index < data.magnifyNum) {
    diff = data.magnifyNum - index;
    dist = diff * 450;
    data.movingMagnifyLeft = `${data.left[data.magnifyNum] - dist}px`;
  }

  if (index > data.magnifyNum) {
    diff = index - data.magnifyNum;
    dist = diff * 450;
    data.movingMagnifyLeft = `${data.left[data.magnifyNum] + dist}px`;
  }
  data.magnifyNum = index;
  data.magnifyFigureBorder[index] = "solid 2px #212121";
};

var onFigure = (index) => {
  if (index === data.magnifyNum) return;
  data.magnifyFigureBorder[index] = "solid 2px #a5a5a5";
};

var outFigure = (index) => {
  if (index === data.magnifyNum) return;
  data.magnifyFigureBorder[index] = "solid 2px transparent";
};

var onColor = (index) => {
  if (index == data.colorNum) return;
  data.colorElementBorder[index] = "solid 2px #212121";
};

var outColor = (index) => {
  if (index == data.colorNum) return;
  data.colorElementBorder[index] = "solid 1px #dadada";
};

var clickColor = (index) => {
  data.colorElementBorder[data.colorNum] = "solid 1px #dadada";
  data.colorElementBorder[index] = "solid 2px #212121";

  data.colorNum = index;
};

var onSize = (index) => {
  if (index == data.sizeNum) return;
  data.sizeElementBackColor[index] = "#696969";
  data.sizeElementColor[index] = "#ffffff";
};

var outSize = (index) => {
  if (index == data.sizeNum) return;
  data.sizeElementBackColor[index] = "#ffffff";
  data.sizeElementColor[index] = "#3f3f3f";
};

var clickSize = (index) => {
  data.isSizeSet = true;

  if (data.sizeNum != undefined) {
    data.sizeElementBackColor[data.sizeNum] = "#ffffff";
    data.sizeElementColor[data.sizeNum] = "#3f3f3f";
  }

  data.sizeElementBackColor[index] = "#696969";
  data.sizeElementColor[index] = "#ffffff";

  data.sizeNum = index;
};

var goToCart = () => {
  if (!data.isSizeSet) {
    alert("لطفا سایز مورد نظر خود را انتخاب کنید.");
  } else {
    cartLink.value.setAttribute("href", "#");
  }
};
</script>

<style>
.product-details {
  display: flex;
  flex-flow: row;
  justify-content: center;
  margin: 60px 0px;
}

.product-states {
  display: inline-flex;
  flex-flow: row;
  flex-direction: row-reverse;
}

.product-states-list {
  display: inline-flex;
  flex-flow: column;
}

.product-states-item {
  padding: 15px 30px;
}

.product-states-item figure {
  cursor: pointer;
  border: solid 2px transparent;
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  -ms-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}

.product-states-item:nth-child(1) figure {
  border: solid 2px #212121;
}

/* .product-states-item figure:hover {
  border: solid 2px #a5a5a5;
} */

.product-states-list img {
  width: 70px;
}

.moving-magnify {
  display: inline-flex;
  flex-flow: row;
  position: relative;
  left: 0px;
  -webkit-transition: all 0.5s ease-out;
  -moz-transition: all 0.5s ease-out;
  -ms-transition: all 0.5s ease-out;
  -o-transition: all 0.5s ease-out;
  transition: all 0.5s ease-out;
}

.product-magnify .moving-magnify img {
  width: 450px;
}

.product-magnify figure {
  overflow: hidden;
  width: 450px;
}

.product-features {
  display: inline-flex;
  flex-flow: column;
  padding: 20px 40px;
}

.product-features .product-name {
  padding: 20px;
}

.product-features .product-name h2 {
  font-size: large;
  font-weight: bold;
}

.product-features .product-price {
  padding: 20px 20px 40px;
  border-bottom: solid 1px #1d2547;
}

.product-features .product-price h2 {
  font-size: medium;
}

.product-features .product-colors {
  padding: 20px;
}

.product-features .product-colors h2 {
  font-size: 14px;
  margin: 0px 10px 30px;
  display: inline-block;
}

.product-colors .color-box {
  display: block;
}

.product-features .product-colors .color {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border: solid 1px #dadada;
  border-radius: 50%;
  margin: 0px 5px;
  cursor: pointer;
}

/* .product-colors .color:hover {
  border: solid 2px #212121;
} */

.product-colors .color span {
  display: inline-block;
  /* background-color: #212121; */
  border-radius: 50%;
  width: 27px;
  height: 27px;
}

.product-features .product-sizes {
  padding: 20px;
}

.product-features .product-sizes span {
  margin: 0px 2px;
  padding: 5px;
  border: solid 1px #696969;
  cursor: pointer;
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  -ms-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}

/* .product-features .product-sizes span:hover {
  background-color: #696969;
  color: #ffffff;
} */

.product-features .product-sizes h2 {
  font-size: 14px;
  margin: 0px 10px 30px;
}

.product-features .product-order {
  padding: 20px;
}

.product-features .product-order h2 {
  font-size: 14px;
  margin: 20px 10px 30px;
}

.product-features .product-order a {
  display: inline-block;
  margin: 10px;
  padding: 20px 60px;
  background-color: #f07a4b;
  color: #1d2547;
  font-weight: bold;
  cursor: pointer;
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  -ms-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}

.product-features .product-order a:hover {
  background-color: #f07a4bad;
}

.command-part {
  padding: 50px 80px;
  margin: 50px auto;
  width: 80%;
  background-color: #f2e1d9;
  border-radius: 5px;
  position: relative;
}

.command-part figure {
  display: inline-block;
  position: absolute;
  top: -59px;
  left: 45%;
}

.command-part figure img {
  width: 110px;
  height: 110px;
  box-shadow: -10px 10px 20px #a5a5a5;
  border-radius: 50%;
}

.form-container form {
  display: flex;
  flex-flow: column;
}

.form-container label {
  margin: 10px 0px;
  padding: 10px;
  font-size: 15px;
}

.form-container .command-place {
  width: 100%;
  padding: 10px;
  border: solid 1px #dddddd;
  font-size: 15px;
  font-family: "tipographer", "academy", "Myriad Pro", Tahoma;
}

.form-container .send-command {
  width: fit-content;
  margin: 20px 0px;
  padding: 10px 30px;
  background-color: #f07a4b;
  color: #1d2547;
  border: none;
  font-weight: bold;
  font-family: "tipographer", "academy", "Myriad Pro", Tahoma;
  cursor: pointer;
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  -ms-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}

.form-container .send-command:hover {
  background-color: #f07a4bad;
}
</style>