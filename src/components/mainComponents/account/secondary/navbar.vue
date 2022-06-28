<template>
  <div class="account-navbar">
    <div class="account-items">
      <router-link v-for="accountItem in data.accountNavbarList" :key="accountItem.id" :to="accountItem.url" @click="accountItem.name=='تغییر رمز عبور' ? showChangePassword() : ''" v-html="`${accountItem.icon}<h2> ${accountItem.name} </h2>` ">
      </router-link>
    </div>
  </div>

</template>

<script setup>
import { reactive } from "vue";
import { useStore } from "vuex";

var store = useStore();

var data = reactive({
  accountNavbarList: store.state.accountNavbarList,
  bodyScroll: undefined,
});

var showChangePassword = () => {
  var bodyCoor = store.state.body.getBoundingClientRect();
  var bodyY = bodyCoor.top;
  store.state.body.style.overflowY = "scroll";
  data.bodyScroll = window.scrollY;

  store.state.body.style.position = "fixed";
  store.state.body.style.top = `${bodyY}px`;

  var windowHeight = window.innerHeight;

  store.state.coverVisible = "visible";
  store.state.coverBackColor = "rgba(0,0,0,0.6)";
  store.state.coverPosition = "fixed";
  store.state.coverTop = "0px";
  store.state.coverZIndex = "10000";
  store.state.coverHeight = `${windowHeight}px`;

  store.state.changePassDisplay = "block";
  setTimeout(() => {
    store.state.changePassVisible = "visible";
    store.state.changePassOpacity = "1";
    store.state.changePassTop = "50px";
    // setTimeout(() => {
    //   activeInput.focus();
    // }, 50);
  }, 100);
};
</script>

<style>
.account-navbar {
  width: 20%;
  height: 450px;
  float: right;
  display: inline-flex;
  flex-flow: column;
  background-color: #f2e1d9;
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  -ms-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}

.account-navbar .account-items {
  display: inline-flex;
  flex-flow: column;
}

.account-navbar .account-items a {
  display: inline-flex;
  cursor: pointer;
}

.account-navbar .account-items a:nth-child(1) {
  background-color: #717fac;
  color: #3f3f3f;
}

.account-navbar .account-items a i {
  font-size: 21px;
  padding: 12px 0px 10px;
  color: #3f3f3f;
  width: 49px;
  height: 49px;
  text-align: center;
}

.account-navbar .account-items a h2 {
  padding: 17px 0px;
  display: inline-block;
  flex-grow: 1;
  font-weight: bold;
  /* margin-right: 25px; */
  color: #3f3f3f;
  font-size: 14px;
  -webkit-transition: transform 0.2s ease-out, color 0.2s ease-out;
  -moz-transition: transform 0.2s ease-out, color 0.2s ease-out;
  -ms-transition: transform 0.2s ease-out, color 0.2s ease-out;
  -o-transition: transform 0.2s ease-out, color 0.2s ease-out;
  transition: transform 0.2s ease-out, color 0.2s ease-out;
}

.account-navbar .account-items a h2:hover {
  color: #f07a4b;
  transform: translateX(-5px);
}
</style>