<template>
  <div class="myAddress-body">
    <div class="add-adrress">
      <a @click="showInsertAddress()">
        <i>
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="body_1" width="80" height="60">
            <g transform="matrix(0.88888896 0 0 0.882353 0 0)">
              <g transform="matrix(0.23257643 0 0 0.23257643 11 -0)">
                <g>
                  <path d="M146.188 0C 65.576 0 0 65.582 0 146.188C 0 226.794 65.576 292.376 146.188 292.376C 226.80002 292.376 292.376 226.794 292.376 146.188C 292.376 65.582 226.801 0 146.188 0zM194.962 152.155L152.156 152.155L152.156 194.955C 152.156 198.255 149.489 200.922 146.18901 200.922C 142.889 200.922 140.22202 198.25499 140.22202 194.955L140.22202 194.955L140.22202 152.155L97.415 152.155C 94.121 152.155 91.448 149.482 91.448 146.188C 91.448 142.89401 94.120995 140.22101 97.415 140.22101L97.415 140.22101L140.22101 140.22101L140.22101 97.415C 140.22101 94.121 142.88802 91.448 146.188 91.448C 149.488 91.448 152.155 94.120995 152.155 97.415L152.155 97.415L152.155 140.22101L194.961 140.22101C 198.261 140.22101 200.928 142.89401 200.928 146.188C 200.928 149.482 198.261 152.155 194.962 152.155z" stroke="none" fill="#a5a5a5" fill-rule="nonzero" />
                </g>
              </g>
            </g>
          </svg>
        </i>
        <div class="addAddress-button">
          <h2>افزودن آدرس جدید</h2>
        </div>
      </a>
    </div>

    <div class="address-place">
      <span>1</span>
      <div class="address-item">
        <h2>نام و نام خانوادگی گیرنده :</h2>
        <h2>نام شخص</h2>
      </div>
      <div class="address-item">
        <h2>آدرس پستی :</h2>
        <h2>آدرس شخص</h2>
      </div>
      <div class="address-item">
        <h2>کد پستی :</h2>
        <h2>7100000000</h2>
      </div>
      <div class="address-item">
        <h2>شماره تماس :</h2>
        <h2>09000000000</h2>
      </div>
    </div>
  </div>

</template>

<script setup>
import { reactive } from "vue";
import { useStore } from "vuex";

var store = useStore();

var data = reactive({
  // body: store.state.body,
  bodyScroll: undefined,
});

var showInsertAddress = () => {
  var bodyCoor = store.state.body.getBoundingClientRect();
  var bodyY = bodyCoor.top;
  store.state.body.style.overflowY = "scroll";
  data.bodyScroll = window.scrollY;

  store.state.body.style.position = "fixed";
  store.state.body.style.top = `${bodyY}px`;

  var windowHeight = window.innerHeight;

  store.state.coverZIndex = "10000";
  store.state.coverHeight = `${windowHeight}px`;
  store.state.coverPosition = "fixed";
  store.state.coverTop = "0px";

  store.state.coverVisible = "visible";
  store.state.coverBackColor = "rgba(0,0,0,0.6)";

  store.state.insertAddrDisplay = "block";

  setTimeout(() => {
    store.state.insertAddrVisible = "visible";
    store.state.insertAddrOpacity = "1";
    store.state.insertAddrTop = "0px";
    // setTimeout(() => {
    //   //   localfocusInput.value.focus();
    // }, 50);
  }, 100);
};
</script>

<style>
.myAddress-body {
  width: 80%;
  display: block;
  opacity: 1;
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  -ms-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}

.add-adrress {
  margin: 40px 15% 30px 0px;
}

.add-adrress a {
  display: inline-flex;
  flex-flow: row;
  cursor: pointer;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  -ms-transition: all 0.2s ease-out;
  -o-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}

.add-adrress a:hover {
  transform: scale(1.03, 1.03);
}

.add-adrress i {
  display: inline-block;
}

.add-adrress i svg {
  position: relative;
  top: 2px;
}

.addAddress-button {
  border: dashed 4px #a5a5a5;
  display: inline-block;
}

.addAddress-button h2 {
  padding: 20px 50px;
  color: #a5a5a5;
}

.address-place {
  width: 70%;
  display: inline-flex;
  flex-flow: column;
  margin: 40px 10% 20px 0px;
  border: dashed 4px #a5a5a5;
  position: relative;
}

.address-place span {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  position: absolute;
  top: -27px;
  right: -27px;
  border-radius: 50%;
  background-color: #212121;
  color: #ccc;
  font-size: large;
  box-shadow: 2px 1px 5px #a5a5a5;
}

.address-item {
  display: inline-flex;
  flex-flow: row;
  margin: 5px 10px;
}

.address-item h2 {
  display: inline-block;
  padding: 10px;
}

.insertAddress-body {
  width: 80%;
  margin: 15px auto;
  background-color: #e8e8e8;
  padding: 30px;
  opacity: 0;
  position: relative;
  visibility: hidden;
  top: -60px;
  display: none;
  -webkit-transition: all 0.4s ease-out;
  -moz-transition: all 0.4s ease-out;
  -ms-transition: all 0.4s ease-out;
  -o-transition: all 0.4s ease-out;
  transition: all 0.4s ease-out;
}

.coverBody-close {
  display: inline-block;
  position: absolute;
  text-align: center;
  background-color: #a5a5a5;
  border: solid 1px #a5a5a5;
}

.coverBody-close h2 {
  width: 25px;
  height: 25px;
  display: inline-block;
  font-size: 20px;
  transform: rotateZ(45deg);
  cursor: pointer;
}

.cover-header {
  text-align: center;
}

.cover-header h2 {
  padding: 30px;
  font-size: 20px;
  color: #3f3f3f;
  font-weight: bold;
}

.insertAddress-form {
  width: 80%;
  display: flex;
  flex-flow: column;
  margin: 0 auto;
}

.cover-item {
  display: inline-flex;
  flex-flow: column;
  width: 100%;
  margin: 5px 0px;
}

/* .cover-item-address:nth-child(2),
.cover-item-address:nth-child(3),
.cover-item-address:nth-child(5) {
  flex-flow: row;
} */

label {
  display: block;
  padding: 15px 0px;
  color: #3f3f3f;
}

.insert-input {
  height: 40px;
  width: 90%;
  border: solid 1px #ccc;
  padding: 10px;
  font-size: 14px;
  color: #3f3f3f;
  font-family: "tipographer", "academy", "Myriad Pro", Tahoma;
}

.insert-input:focus {
  border: solid 2px #3f3f3f;
}
</style>