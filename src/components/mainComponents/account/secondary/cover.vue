<template>

  <div class="cover" :style="coverStyle">
    <!-- ===== Insert Address Part ================= -->
    <div class="insertAddress-body" :style="insertAddressStyles">
      <span class="coverBody-close" @click="closeInsertAddress()">
        <h2>+</h2>
      </span>
      <header class="cover-header">
        <h2>افزودن آدرس جدید</h2>
      </header>
      <form class="insertAddress-form" action="" method="post">
        <div v-for="(item,index) in data.addUserAddress" :key="index" class="cover-item" :style="index==1||index==2 ? {'flex-flow': 'row'} : null">
          <label :for="item.for">{{item.text}}</label>
          <input v-if="index==0" class="insert-input" type="text" name="" :id="item.for" />
          <template v-if="index==1">
            <div v-for="n1 in 2" :key="n1" class="coverItem-item">
              <label :for="item[n1-1].for">{{item[n1-1].text}}</label>
              <input class="insert-input" type="text" name="" :id="item[n1-1].for" />
            </div>
          </template>
          <template v-if="index==2">
            <div v-for="n1 in 2" :key="n1" class="coverItem-item">
              <label :for="item[n1-1].for">{{item[n1-1].text}}</label>
              <select name="" :id="item[n1-1].for">
                <option v-for="(option,optIndex) in item.options" :key="optIndex" value="">{{option}}</option>
              </select>
            </div>
          </template>

          <textarea v-if="index==3" name="" :id="item.for" placeholder="آدرس"> </textarea>
          <div v-if="index==3">
            <button class="account-button" type="button" @click="closeInsertAddress()">
              انصراف
            </button>
            <button class="account-button" type="submit">ذخیره</button>
          </div>
        </div>
      </form>
    </div>

    <!-- ====== Change Password Part ============== -->
    <div class="changePassword-body" :style="changePassStyle">
      <span class="coverBody-close" @click="closeChangePassword()">
        <h2>+</h2>
      </span>

      <header class="cover-header">
        <h2>تغییر کلمه عبور</h2>
      </header>

      <form class="changePassword-form">
        <div v-for="(item,index) in data.changePass" :key="index" :class="index==data.changePass.length-1 ? `cover-item-button` : 'cover-item' ">
          <template v-if="index==data.changePass.length-1">
            <button class="account-button" type="button" @click="closeChangePassword()">
              انصراف
            </button>
            <button class="account-button" type="submit">ذخیره</button>
          </template>
          <template v-else>
            <label :for="item.for">{{item.text}}</label>
            <input class="insert-input" type="text" name="" :id="item.for" />
          </template>
        </div>
      </form>
    </div>
  </div>

</template>

<script setup>
import { reactive, computed, onMounted } from "vue";
import { useStore } from "vuex";

var store = useStore();

var data = reactive({
  addUserAddress: store.state.addUserAddress,
  changePass: store.state.changePass,
  formPart: 0,
});

onMounted(() => {
  visualViewport.addEventListener("resize", () => {
    if (window.innerWidth >= 820) {
      data.formPart = 2;
    } else {
      data.formPart = 0;
    }
  });
});

var coverStyle = computed({
  get() {
    return {
      visibility: store.state.coverVisible,
      backgroundColor: store.state.coverBackColor,
      position: store.state.coverPosition,
      top: store.state.coverTop,
      zIndex: store.state.coverZIndex,
      height: store.state.coverHeight,
    };
  },
});
var changePassStyle = computed({
  get() {
    return {
      display: store.state.changePassDisplay,
      top: store.state.changePassTop,
      opacity: store.state.changePassOpacity,
      visibility: store.state.changePassVisible,
    };
  },
});
var insertAddressStyles = computed({
  get() {
    return {
      display: store.state.insertAddrDisplay,
      top: store.state.insertAddrTop,
      opacity: store.state.insertAddrOpacity,
      visibility: store.state.insertAddrVisible,
    };
  },
});
var closeInsertAddress = () => {
  store.state.body.style.position = "relative";
  store.state.body.style.top = `0px`;

  store.state.coverVisible = "hidden";
  store.state.coverBackColor = "transparent";

  store.state.insertAddrTop = "-60px";
  store.state.insertAddrOpacity = "0";
  store.state.insertAddrVisible = "hidden";

  window.scrollBy(0, data.bodyScroll);

  setTimeout(() => {
    store.state.coverPosition = `absolute`;
    store.state.coverTop = `0px`;
    store.state.insertAddrDisplay = "none";
  }, 400);
};

var closeChangePassword = () => {
  store.state.body.style.position = "relative";
  store.state.body.style.top = `0px`;

  store.state.coverVisible = "hidden";
  store.state.coverBackColor = "transparent";

  store.state.changePassTop = "-60px";
  store.state.changePassOpacity = "0";
  store.state.changePassVisible = "hidden";

  window.scrollBy(0, data.bodyScroll);

  setTimeout(() => {
    store.state.coverPosition = `absolute`;
    store.state.coverTop = `0px`;
    store.state.changePassDisplay = "none";
  }, 400);
};
</script>

<style>
.coverItem-item {
  display: inline-flex;
  flex-flow: column;
  width: 50%;
}

.coverItem-item select {
  height: 40px;
  width: 80%;
  border: solid 1px #ccc;
  padding: 10px;
  font-size: 14px;
  color: #3f3f3f;
  font-family: "tipographer", "academy", "Myriad Pro", Tahoma;
  line-height: 1.5;
}

.coverItem-item select:focus {
  border: solid 2px #3f3f3f;
}

.coverItem-item .insert-input {
  width: 80%;
}

.cover-item textarea {
  height: 80px;
  width: 90%;
  border: solid 1px #ccc;
  padding: 10px;
  font-size: 14px;
  color: #3f3f3f;
  font-family: "tipographer", "academy", "Myriad Pro", Tahoma;
  line-height: 1.5;
}

.cover-item textarea:focus {
  border: solid 2px #3f3f3f;
}

.cover-item-address:nth-child(5) {
  justify-content: left;
  width: 90%;
  gap: 20px;
  margin-top: 20px;
}

.account-button {
  display: inline-block;
  padding: 8px 40px;
  margin: 20px 10px;
  border: none;
  font-size: 14px;
  font-weight: bold;
  background-color: #f07a4b;
  color: #1d2547;
  cursor: pointer;
  font-family: "tipographer", "academy", "Myriad Pro", Tahoma;
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  -ms-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}

.changePassword-body {
  width: 60%;
  margin: 15px auto;
  padding: 30px;
  opacity: 0;
  position: relative;
  visibility: hidden;
  top: -60px;
  background-color: #e8e8e8;
  -webkit-transition: all 0.4s ease-out;
  -moz-transition: all 0.4s ease-out;
  -ms-transition: all 0.4s ease-out;
  -o-transition: all 0.4s ease-out;
  transition: all 0.4s ease-out;
}

.changePassword-form {
  width: 50%;
  display: flex;
  flex-flow: column;
  margin: 0 auto;
  /* background-color: #e8e8e8; */
}

.cover-item-button {
  display: inline-flex;
  flex-flow: row;
  /* width: 100%; */
  /* justify-content: left; */
  /* width: 90%; */
  /* gap: 20px; */
  /* margin-top: 20px; */
}
</style>