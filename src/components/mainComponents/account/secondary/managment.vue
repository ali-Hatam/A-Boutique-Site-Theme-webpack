<template>
  <div class="account-body">
    <div class="accound-header">
      <h1>بخش مدیریت</h1>
    </div>
    <div class="accound-info">
      <div class="accound-info-header">
        <div class="accound-title">
          <h2 @click="showAccount(0)">افزودن محصول جدید</h2>
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
          <div class="form-row">
            <div v-for="n1 in 2 " :key="n1" class="form-row-list">
              <label :for="item[n1-1].for">{{ item[n1-1].name }}</label>
              <div class="form-row-item">

                <select class="account-form-select" v-model="data.choosenStore">
                  <option v-for="(item,index) in data.stores" :key="index" value="">{{item.text}}</option>
                </select>
              </div>
            </div>
            <div v-for="n1 in 2 " :key="n1" class="form-row-list">
              <label :for="item[n1-1].for">{{ item[n1-1].name }}</label>
              <div class="form-row-item">
                <select class="account-form-select">
                  <option v-for="(item,index) in data.stores" :key="index" value="">{{item.text}}</option>
                </select>

              </div>
            </div>
          </div>
        </form>
        <div class="save-section">
          <a class="save" :ref="(el)=>{saveButton[0] = el}">ذخیره</a>
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
  addProductForm: [
    {
      name: "انتخاب فروشگاه",
      for: "choose-store",
      // value: "نام شخص",
    },
    {
      name: "انتخاب دسته",
      for: "choose-subStore",
      // value: "نام خانوادگی شخص",
    },
  ],
  stores: store.state.stores,
  choosenStore: "انتخاب فروشگاه",
  faAngleDownDisplay: ["none", "inline-block"],
  faAngleUpDisplay: ["inline-block", "none"],
  accoundInfoBodyHeight: ["353px", "0px"],
});

var saveButton = ref([]);

// var computeSubStore = computed(()=>{
//     return(choosenStore)=>{
//         if (choosenStore==data.stores[0].){}
//     }
// })

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
</script>