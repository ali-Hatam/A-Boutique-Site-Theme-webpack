<template>
  <div class="account-body">
    <div class="accound-header">
      <h1>پروفایل</h1>
    </div>
    <div class="accound-info">
      <div class="accound-info-header">
        <div class="accound-title">
          <h2 @click="showAccount(0)">اطلاعات شخصی</h2>
        </div>
        <div class="accound-show first-accound-show">
          <span @click="showAccount(0)">
            <i class="fa fa-angle-down" :style="{display:data.faAngleDownDisplay[0]}"></i>
            <i class="fa fa-angle-up" :style="{display:data.faAngleUpDisplay[0]}"></i>
          </span>
        </div>
      </div>
      <div class="accound-info-body" :style="{height:data.accoundInfoBodyHeight[0]}">
        <form action="" class="account-form">
          <div v-for="(item,index) in data.personalInfoBody " :key="index" class="form-row">
            <div v-for="n1 in 2 " :key="n1" class="form-row-list">
              <label :for="item[n1-1].for">{{ item[n1-1].name }}</label>
              <div class="form-row-item">
                <input type="text" :id="item[n1-1].for" class="account-form-input" :value="item[n1-1].value" :ref="(el)=>{inputElement[`${index}_${n1}_0`] = el}" disabled />
                <a class="edit" @click="Edit(index,n1,0)">ویرایش</a>
              </div>
            </div>
          </div>
        </form>
        <div class="save-section">
          <a class="save" :ref="(el)=>{saveButton[0] = el}">ذخیره</a>
        </div>
      </div>
    </div>

    <div class="accound-info">
      <div class="accound-info-header">
        <div class="accound-title">
          <h2 @click="showAccount(1)">اطلاعات بانکی</h2>
        </div>
        <div class="accound-show second-accound-show">
          <span @click="showAccount(1)">
            <i class="fa fa-angle-down" :style="{display:data.faAngleDownDisplay[1]}"></i>
            <i class="fa fa-angle-up" :style="{display:data.faAngleUpDisplay[1]}"></i>
          </span>
        </div>
      </div>
      <div class="accound-info-body" :style="{height:data.accoundInfoBodyHeight[1]}">
        <form action="" class="form-grid">

          <div v-for="(infoItem,index) in data.accountInfoBody " :key="index" class="form-row-list">
            <label :for="infoItem.for"> {{ infoItem.name }}</label>
            <div class="form-row-item">
              <input v-if="infoItem.id == 0" type="text" id="fund-name" class="account-form-input" :value="infoItem.value" :ref="(el)=>{inputElement[`${infoItem.id}_0_1`] = el}" disabled />

              <select v-if="infoItem.id == 1" id="select-bank" class="account-form-select" value="انتخاب بانک">
                <option v-for="(opt,index) in infoItem.options" :key="index" :value="opt.value">
                  {{ opt.name }}
                </option>
              </select>

              <template v-if="infoItem.id == 2">
                <input v-for="n1 in 4" :key="n1" type="text" :id="n1==1 ? 'cart-num' : null" class="account-form-cart" :value="infoItem.value" ref="cartNumberElements" disabled>
              </template>

              <template v-if="infoItem.id == 3">
                <input type="text" id="shaba-num" class="account-form-input-shaba1" :value="infoItem.value" :ref="(el)=>{inputElement[`${infoItem.id}_0_1`] = el}" disabled />
                <span class="shaba-ir">- IR </span>
              </template>
              <a v-if="infoItem.id!=1" class="edit" @click="infoItem.id == 2 ? EditCart() : Edit(infoItem.id,0, 1) ">ویرایش</a>
            </div>
          </div>
        </form>
        <div class="save-section">
          <a class="save" :ref="(el)=>{saveButton[1] = el}">ذخیره</a>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import { ref, reactive } from "vue";
import { useStore } from "vuex";

var store = useStore();

var data = reactive({
  accountInfoBody: store.state.accountInfoBody,
  personalInfoBody: store.state.personalInfoBody,
  // formPart: 2,
  faAngleDownDisplay: ["none", "inline-block"],
  faAngleUpDisplay: ["inline-block", "none"],
  accoundInfoBodyHeight: ["353px", "0px"],
});

var inputElement = ref({});
// var accInputElements = ref({});
var saveButton = ref([]);
var cartNumberElements = ref([]);

// onMounted(() => {
//   visualViewport.addEventListener("resize", () => {
//     if (window.innerWidth >= 820) {
//       data.formPart = 2;
//     } else {
//       data.formPart = 0;
//     }
//   });
// });

var showAccount = (num) => {
  if (data.accoundInfoBodyHeight[num] == "353px") {
    data.accoundInfoBodyHeight[num] = "0px";

    data.faAngleDownDisplay[num] = "inline-block";
    data.faAngleUpDisplay[num] = "none";
  } else if (data.accoundInfoBodyHeight[num] == "0px") {
    data.accoundInfoBodyHeight[num] = "353px";

    data.faAngleDownDisplay[num] = "none";
    data.faAngleUpDisplay[num] = "inline-block";
  }
};

var Edit = (InfoIndex, carac, num) => {
  inputElement.value[`${InfoIndex}_${carac}_${num}`].removeAttribute(
    "disabled"
  );
  inputElement.value[`${InfoIndex}_${carac}_${num}`].focus();
  var len = inputElement.value[`${InfoIndex}_${carac}_${num}`].value.length;
  inputElement.value[`${InfoIndex}_${carac}_${num}`].setSelectionRange(
    len,
    len
  );

  if (saveButton.value[num].style.opacity != 1) {
    saveButton.value[num].style.opacity = "1";
    saveButton.value[num].setAttribute("href", "");

    saveButton.value[num].addEventListener("mouseover", (ev) => {
      ev.target.style.backgroundColor = "#f07a4bad";
    });

    saveButton.value[num].addEventListener("mouseout", (ev) => {
      ev.target.style.backgroundColor = "#f07a4b";
    });
  }
};

var EditCart = () => {
  cartNumberElements.value.forEach((element) => {
    element.removeAttribute("disabled");
  });

  cartNumberElements.value[0].focus();

  var len = cartNumberElements.value[0].value.length;
  cartNumberElements.value[0].setSelectionRange(len, len);

  if (saveButton.value[1].style.opacity != 1) {
    saveButton.value[1].style.opacity = "1";
    saveButton.value[1].setAttribute("href", "");

    saveButton.value[1].addEventListener("mouseover", (ev) => {
      ev.target.style.backgroundColor = "#f07a4bad";
    });

    saveButton.value[1].addEventListener("mouseout", (ev) => {
      ev.target.style.backgroundColor = "#f07a4b";
    });
  }
};
</script>

<style>
.account-body {
  width: 80%;
  text-align: center;
  display: block;
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  -ms-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}

.accound-header {
  width: 100%;
  margin: 60px 0px 10px;
}

.accound-header h1 {
  padding: 20px 0px;
  font-size: 30px;
  font-weight: bold;
  color: #3f3f3f;
  text-shadow: -1px 1px #dddddd;
}

.accound-info {
  display: inline-flex;
  flex-flow: column;
  width: 80%;
  margin: 30px 0px;
}

.accound-info-header {
  display: inline-flex;
  flex-flow: row;
}

.accound-title {
  display: inline-block;
  flex-grow: 1;
  text-align: right;
}

.accound-title h2 {
  width: 45%;
  padding: 30px 10px;
  font-size: 20px;
  border-bottom: solid 2px #3f3f3f;
  cursor: pointer;
}

.accound-show {
  text-align: left;
  flex-grow: 1;
  padding: 30px 10px;
}

.accound-show span {
  display: inline-block;
  width: 75px;
  height: 35px;
  border: solid 1px #3f3f3f;
  text-align: center;
  cursor: pointer;
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  -ms-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}

.accound-show span:hover {
  background-color: #1d2547;
  color: #ccc;
}

.accound-show span i {
  font-size: 30px;
  height: 35px;
  position: relative;
  top: 2px;
}

.first-accound-show span i:nth-child(1) {
  display: none;
}

.first-accound-show span i:nth-child(2) {
  display: inline-block;
}

.second-accound-show span i:nth-child(1) {
  display: inline-block;
}

.second-accound-show span i:nth-child(2) {
  display: none;
}

.accound-info-body {
  height: 0px;
  overflow: hidden;
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  -ms-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}

.accound-info:nth-child(2) .accound-info-body {
  height: 353px;
}

.account-form {
  display: inline-flex;
  flex-flow: column;
  width: 100%;
}

.form-row {
  display: inline-flex;
  flex-flow: row;
}

.form-row-list {
  flex-grow: 1;
  text-align: right;
  padding: 20px;
}

.form-row-list label {
  display: block;
  padding: 15px 0px;
  color: #3f3f3f;
}

.form-row-list .form-row-item {
  display: inline-flex;
  flex-flow: row;
  width: 100%;
}

.form-row-item .account-form-input {
  height: 40px;
  width: 80%;
  border: solid 1px #ccc;
  padding: 10px;
  font-size: 14px;
  color: #3f3f3f;
  font-family: "tipographer", "academy", "Myriad Pro", Tahoma;
}

.form-row-item .account-form-input:focus {
  border: solid 2px #3f3f3f;
}

.form-row-item .account-form-select {
  height: 40px;
  flex-grow: 1;
  border: solid 1px #ccc;
  padding: 10px;
  font-size: 14px;
  color: #3f3f3f;
  font-family: "tipographer", "academy", "Myriad Pro", Tahoma;
  line-height: 1.5;
}

.form-row-item .edit {
  display: inline-block;
  height: 40px;
  width: 20%;
  border: none;
  text-align: center;
  padding: 10px;
  font-size: 14px;
  background-color: #1d2547;
  color: #ccc;
  cursor: pointer;
  font-family: "tipographer", "academy", "Myriad Pro", Tahoma;
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  -ms-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}

.form-row-item .edit:hover {
  background-color: #2e3a70;
}

.save-section {
  text-align: left;
  padding: 30px 20px;
}

.save-section .save {
  display: inline-block;
  padding: 12px 40px;
  border: none;
  font-size: 14px;
  font-weight: bold;
  background-color: #f07a4b;
  color: #1d2547;
  opacity: 0.4;
  font-family: "tipographer", "academy", "Myriad Pro", Tahoma;
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  -ms-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}

.form-grid {
  display: grid;
  grid-template-columns: 50% 50%;
}

.form-row-item select option {
  background-color: #ffffff;
  font-size: 14px;
}

.account-form-input-shaba1 {
  height: 40px;
  width: 70%;
  border: solid 1px #ccc;
  padding: 10px 10px 10px 39px;
  font-size: 14px;
  color: #3f3f3f;
  direction: ltr;
  letter-spacing: 1px;
  position: relative;
  right: 39px;
  background-color: transparent;
  font-family: "tipographer", "academy", "Myriad Pro", Tahoma;
}

.shaba-ir {
  height: 40px;
  width: 10%;
  border: solid 1px #ccc;
  border-right: none;
  display: inline-flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: bold;
  color: #3f3f3f;
}

.form-row-item .account-form-input-shaba1:focus {
  border: solid 2px #3f3f3f;
}

.account-form-cart {
  height: 40px;
  width: 20%;
  border: solid 1px #ccc;
  padding: 10px;
  margin: 0px 10px;
  font-size: 14px;
  color: #3f3f3f;
  direction: ltr;
  letter-spacing: 1px;
  text-align: center;
  font-family: "tipographer", "academy", "Myriad Pro", Tahoma;
}

.account-form-cart:nth-child(2) {
  margin: 0px 10px 0px 5px;
}

.account-form-cart:focus {
  border: solid 2px #3f3f3f;
}

#reverse {
  flex-direction: row-reverse;
}
</style>