<template>
  <div class="header-section" ref="headerSec">

    <div class="header-title">
      <p class="header-parag">فروشگاه مجازی بوتیک من | پوشاک مردانه</p>
    </div>

    <div class="header-menu" ref="headerMenu">
      <div class="menu-container">
        <div class="menu-container-item">
          <div v-for="item in data.menuItems" :key="item.id" class="menu-right-item">
            <a class="menu-right-link" :href="item.itemUrl" @mouseover="item.sub == true ? showSubMenu(item.id) : ''" @mouseleave="
                item.sub == true ? hiddenSubMenu($event, item.id) : ''
              ">{{ item.text }}</a>

            <div v-if="item.sub == true" :class="pointerClass(item.id)" @mouseover="showSubMenu(item.id)"></div>

            <div v-if="item.sub == true" :class="item.store == 'main' ? 'stores' : `stores second-stores`" @mouseleave="hiddenSubMenu($event, item.id)" :ref="(el)=>{refrences.storesElement[`store_${item.id}`] = el}">
              <template v-if="item.store == 'main'">
                <div v-for="storeItem in data.stores" :key="storeItem.id" class="stores-item">
                  <a :href="storeItem.url" class="stores-link">
                    <h2>{{ storeItem.text }}</h2>
                  </a>
                </div>
              </template>
              <template v-if="item.store == 'off'">
                <div v-for="offItem in data.offs" :key="offItem.id" class="stores-item">
                  <a :href="offItem.url" class="stores-link">
                    <h2>{{ offItem.text }}</h2>
                  </a>
                </div>
              </template>
            </div>
          </div>

          <div class="compact-icon" @click="CompMenu()" :style="compIconStyle">
            <i class="bi bi-list"></i>
            <h2>فهرست</h2>
          </div>

          <div class="compactMenu-container" :style="compMenuContainerStyle">
            <div v-for="compItem in data.menuItems" :key="compItem.id" class="compactMenu-item">
              <a class="compactMenu-link" :href="compItem.sub ? null : compItem.itemUrl" @click="compItem.sub == true ? SubCompMenu(compItem.id) : ''">
                <h2>{{ compItem.text }}</h2>
                <i v-if="compItem.sub == true" class="bi bi-plus" :style="{display:data.biPlusDisplay[compItem.id]}"></i>
                <i v-if="compItem.sub == true" class="bi bi-dash" :style="{display:data.biDashDisplay[compItem.id]}"></i>
              </a>

              <div v-if="compItem.sub == true" class="subCompMenu-container" :style="{height:data.subCompMenuHeight[compItem.id]}">
                <template v-if="compItem.store == 'main'">
                  <a v-for="CompStoreItem in data.stores" :key="CompStoreItem.id" class="subCompMenu-link" :href="CompStoreItem.url">
                    <h2>{{ CompStoreItem.text }}</h2>
                  </a>
                </template>
                <template v-if="compItem.store == 'off'">
                  <a v-for="CompOffItem in data.offs" :key="CompOffItem.id" class="subCompMenu-link" :href="CompOffItem.url">
                    <h2>{{ CompOffItem.text }}</h2>
                  </a>
                </template>
              </div>
            </div>
          </div>
        </div>

        <div class="menu-container-item">
          <!-- ---------------------Search SVG -------------------------- -->
          <div v-for="icon in data.menuIcons" :key="icon.id" class="menu-icon">
            <a :href="icon.url" :class="icon.id == 1 ? 'search-icon' : ''">
              <span v-if="icon.id == 3" class="show-num">
                {{data.cartProductNumber}}
              </span>
              <i class="ws-svg-icon">
                <svg v-if="icon.id == 1" width="24" height="24" id="searchSVG" v-on:click="displaySearchBox()" :style="{ display: data.searchIconDisplay }">
                  <path fill-rule="evenodd" d="M10.875 3.75a7.125 7.125 0 100 14.25 7.125 7.125 0 000-14.25zM2.25 10.875a8.625 8.625 0 1117.25 0 8.625 8.625 0 01-17.25 0z" />
                  <path fill-rule="evenodd" d="M15.913 15.914a.75.75 0 011.06 0l4.557 4.556a.75.75 0 01-1.06 1.06l-4.557-4.556a.75.75 0 010-1.06z" />
                  <!-- --------------------------Exit SVG-----------------   -->
                </svg>
                <svg v-if="icon.id == 1" width="24" height="24" id="exitSVG" v-on:click="hiddenSearchBox()" :style="{ display: data.exitIconDisplay }">
                  <path d="M2.219.781L.78 2.22 9.562 11l-8.78 8.781 1.437 1.438L11 12.437l8.781 8.782 1.438-1.438L12.437 11l8.782-8.781L19.78.78 11 9.562 2.219.783z" />
                </svg>

                <svg v-if="icon.id == 2" width="24" height="24">
                  <path fill-rule="evenodd" d="M12 3.75a5.25 5.25 0 100 10.5 5.25 5.25 0 000-10.5zM5.25 9a6.75 6.75 0 1113.5 0 6.75 6.75 0 01-13.5 0z" />
                  <path fill-rule="evenodd" d="M12 15.75a9.754 9.754 0 00-8.445 4.874.75.75 0 11-1.3-.75 11.254 11.254 0 0119.49 0 .75.75 0 01-1.3.75A9.754 9.754 0 0012 15.75z" />
                </svg>

                <svg v-if="icon.id == 3" width="24" height="24">
                  <path d="M7.5 21.75a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM17.25 21.75a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  <path fill-rule="evenodd" d="M0 3a.75.75 0 01.75-.75h1.577A1.5 1.5 0 013.77 3.338L4.53 6h16.256a.75.75 0 01.72.956l-2.474 8.662a2.25 2.25 0 01-2.163 1.632H7.88a2.25 2.25 0 01-2.163-1.632l-2.47-8.645a.738.738 0 01-.01-.033l-.91-3.19H.75A.75.75 0 010 3zm4.959 4.5l2.201 7.706a.75.75 0 00.721.544h8.988a.75.75 0 00.72-.544L19.792 7.5H4.96z" />
                </svg>
              </i>
            </a>
          </div>
        </div>
      </div>

      <div class="searchBox" :style="searchBoxStyle" ref="searchBox">
        <form class="search-form" action method="get">
          <input class="search-input" type="text" name="search" id placeholder="جستجو محصول ..." />
          <!-- --------------------------- SVG -------------------------------- -->
          <button class="search-submit" type="submit" value="search">
            <a href="#">
              <i class="ws-svg-icon search">
                <svg width="24" height="24">
                  <path stroke="#ffffff" stroke-width="0.5" fill="#ffffff" d="M10.875 3.75a7.125 7.125 0 100 14.25 7.125 7.125 0 000-14.25zM2.25 10.875a8.625 8.625 0 1117.25 0 8.625 8.625 0 01-17.25 0z" />
                  <path stroke="#ffffff" stroke-width="0.5" fill="#ffffff" d="M15.913 15.914a.75.75 0 011.06 0l4.557 4.556a.75.75 0 01-1.06 1.06l-4.557-4.556a.75.75 0 010-1.06z" />
                </svg>
              </i>
            </a>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted, ref, computed, defineProps } from "vue";
import { useStore } from "vuex";

const store = useStore();

var data = reactive({
  menuItems: store.state.menuItems,
  menuIcons: store.state.menuIcons,
  stores: store.state.stores,
  offs: store.state.offs,
  body: document.body,
  cartProductNumber: 0,
  searchIconDisplay: "inline-block",
  exitIconDisplay: "none",
  isDisplaySearchBoxRun: false,
  isSearchBoxDisplay: false,
  searchBoxDisplay: "none",
  searchBoxOpacity: "0",
  compIconHeight: "46px",
  iconBorderRadi: "5px 5px 5px 5px",
  compMenuHeight: 0,
  preCompMenuHeight: 255,
  compMenuPadding: "0px",
  showCompMenu: false,
  bodyScroll: 0,
  refSlider: {}, // this.refOfSliderComp,
  showSubCom: {
    subCompMenu_2: false,
    subCompMenu_3: false,
  },
  option1: {
    threshold: [1],
  },
  option2: {
    threshold: [0],
  },
  hiddenPointer: { 2: true, 3: true },
  showPointer: { 2: false, 3: false },
  biPlusDisplay: {
    2: "inline-block",
    3: "inline-block",
  },
  biDashDisplay: {
    2: "none",
    3: "none",
  },
  subCompMenuHeight: {
    2: "0px",
    3: "0px",
  },
  observer_1: new Object(),
  observer_2: new Object(),
});

var refrences = reactive({
  storesElement: {},
});

var headerMenu = ref([]);
var searchBox = ref([]);
var headerSec = ref([]);

var props = defineProps({
  transferElement: Object,
});

var takenElement = computed(() => {
  return props.transferElement;
});

data.observer_1 = new IntersectionObserver((entry) => {
  if (entry[0].isIntersecting) return;
  console.log(data.bodyScroll);
  entry[0].target.style.top = "0px";
  entry[0].target.style.position = "fixed";

  takenElement.value.style.top = "86px";
}, data.option1);

data.observer_2 = new IntersectionObserver((entry) => {
  if (!entry[0].isIntersecting) return;

  headerMenu.value.style.position = "relative";

  takenElement.value.style.top = "0";
}, data.option2);

document.addEventListener(
  "click",
  (event) => {
    if (data.isDisplaySearchBoxRun) {
      data.isDisplaySearchBoxRun = false;
      return;
    }

    if (!data.isSearchBoxDisplay) return;

    var rect = searchBox.value.getBoundingClientRect();
    var y = rect.top;
    var my = event.clientY;
    var diff = my - y;

    if (diff < 0 || diff > 160) {
      data.searchBoxOpacity = "0";
      data.searchBoxDisplay = "none";

      data.searchIconDisplay = "inline-block";
      data.exitIconDisplay = "none";

      data.body.style.position = "relative";
      data.body.style.top = "0";

      window.scrollBy(0, data.bodyScroll);

      // coverPart.$refs["cover"].style.overflow = "visible";
      // coverPart.$refs["cover"].style.position = "absolute";
      // coverPart.$refs["cover"].style.top = "0";
      // coverPart.$refs["cover"].style.height = "0px";

      // coverPart.coverVisibility = "hidden";
      // coverPart.coverOpacity = "0";
      // coverPart.coverBackColor = "transparent";

      data.isSearchBoxDisplay = false;
    } else {
      return;
    }
  },
  false
);
onMounted(() => {
  // data.observer_1.observe(headerMenu.value);
  // data.observer_2.observe(headerSec.value.children[0]);
});

var pointerClass = computed(() => {
  return (itemId) => {
    return {
      "pointer-hidden": data.hiddenPointer[itemId],
      "pointer-show": data.showPointer[itemId],
    };
  };
});
var compIconStyle = computed(() => {
  return { height: data.compIconHeight, borderRadius: data.iconBorderRadi };
});
var compMenuContainerStyle = computed(() => {
  return { height: `${data.compMenuHeight}px`, padding: data.compMenuPadding };
});
var searchBoxStyle = computed(() => {
  return { display: data.searchBoxDisplay, opacity: data.searchBoxOpacity };
});

var showSubMenu = (itemId) => {
  var element_2 = refrences.storesElement[`store_${itemId}`];

  element_2.style.visibility = "visible";
  element_2.style.opacity = "1";
  element_2.style.top = "86px";

  data.hiddenPointer[itemId] = false;
  data.showPointer[itemId] = true;
};

var hiddenSubMenu = (event, itemId) => {
  var element_2 = refrences.storesElement[`store_${itemId}`];

  var rect = element_2.getBoundingClientRect();

  var y = rect.top;
  var x = rect.left;
  var h = rect.height;
  var w = rect.width;
  var my = event.clientY;
  var mx = event.clientX;
  var diffY = my - y;
  var diffX = mx - x;
  var condition1 = diffX >= 0 && diffX <= w;
  var condition2 = diffY >= 0 && diffY < h;

  if (condition1 && condition2) return;

  element_2.style.visibility = "hidden";
  element_2.style.opacity = "0";
  element_2.style.top = "76px";

  data.hiddenPointer[itemId] = true;
  data.showPointer[itemId] = false;
};

var displaySearchBox = () => {
  data.isDisplaySearchBoxRun = true;
  data.isSearchBoxDisplay = true;

  data.searchBoxDisplay = "block";

  data.searchIconDisplay = "none";
  data.exitIconDisplay = "inline-block";

  data.bodyScroll = window.scrollY;

  data.body.style.top = `${data.body.getBoundingClientRect().top}px`;
  data.body.style.position = "fixed";
  data.body.style.overflow = "scroll";

  setTimeout(() => {
    data.searchBoxOpacity = "1";
  }, 0);

  // coverPart.$refs["cover"].style.overflow = "hidden";
  // coverPart.$refs["cover"].style.height = `${window.innerHeight}px`;
  // coverPart.$refs["cover"].style.position = "fixed";
  // coverPart.$refs["cover"].style.top = "0";
  // coverPart.coverVisibility = "visible";
  // coverPart.coverOpacity = "1";
  // coverPart.coverBackColor = "rgba(0,0,0,0.5)";
};

var hiddenSearchBox = () => {
  data.searchBoxOpacity = "0";
  data.searchBoxDisplay = "none";

  data.searchIconDisplay = "inline-block";
  data.exitIconDisplay = "none";

  data.body.style.position = "relative";
  data.body.style.top = "0";

  window.scrollBy(0, data.bodyScroll);

  // coverPart.$refs["cover"].style.overflow = "visible";
  // coverPart.$refs["cover"].style.position = "absolute";
  // coverPart.$refs["cover"].style.top = "0";
  // coverPart.$refs["cover"].style.height = "0px";

  // coverPart.coverVisibility = "hidden";
  // coverPart.coverOpacity = "0";
  // coverPart.coverBackColor = "transparent";

  data.isSearchBoxDisplay = false;
};

var CompMenu = () => {
  // if (this.SubCompMenuRun) {
  //     this.SubCompMenuRun = false
  //     return
  // }
  if (data.showCompMenu) {
    data.compMenuHeight = 0;
    data.compMenuPadding = "0px";
    data.compIconHeight = "46px";
    data.iconBorderRadi = "5px 5px 5px 5px";
    data.showCompMenu = false;
  } else {
    data.compMenuHeight = data.preCompMenuHeight;
    data.compMenuPadding = "20px";
    data.compIconHeight = "61px";
    data.iconBorderRadi = "5px 5px 0px 0px";
    data.showCompMenu = true;
  }
};

var SubCompMenu = (compItemId) => {
  // this.SubCompMenuRun = true

  if (!data.showSubCom[`subCompMenu_${compItemId}`]) {
    data.biPlusDisplay[compItemId] = "none";
    data.biDashDisplay[compItemId] = "inline-block";
    data.subCompMenuHeight[compItemId] = "180px";
    data.compMenuHeight = data.compMenuHeight + 180;
    data.preCompMenuHeight = data.compMenuHeight;
    data.showSubCom[`subCompMenu_${compItemId}`] = true;
  } else {
    data.biPlusDisplay[compItemId] = "inline-block";
    data.biDashDisplay[compItemId] = "none";
    data.subCompMenuHeight[compItemId] = "0px";
    data.compMenuHeight = data.compMenuHeight - 180;
    data.preCompMenuHeight = data.compMenuHeight;
    data.showSubCom[`subCompMenu_${compItemId}`] = false;
  }
};

// watch: {
//   searchBoxDisplay() {
//     if (this.searchBoxDisplay == "block") {
//       setTimeout(() => {
//         this.searchBoxOpacity = "1";
//       }, 0);
//     }
//   },
// },
</script>

<style>
.header-title {
  text-align: center;
  background-color: #1d2547;
  border-bottom: 1px solid #21212154;
}

.header-parag {
  padding: 5px;
  font-size: 13px;
  color: #fff;
}

.header-section {
  width: 100%;
  position: relative;
  z-index: 200;
}

.header-menu {
  width: 100%;
  background-color: #f2e1d9;
  position: relative;
}

.header-menu .menu-container {
  width: 90%;
  margin: 0 auto;
  display: flex;
}

.header-menu .menu-container-item {
  flex-grow: 1;
  display: flex;
}

.header-menu .menu-container-item:nth-child(1) {
  flex-grow: 3;
}

#menu-container-item3 {
  justify-content: end;
}

.menu-right-item {
  display: none;
}

.compact-icon {
  display: inline-flex;
  flex-flow: row;
  width: 60%;
  justify-content: center;
  padding: 10px;
  background-color: #3f3f3f;
  height: 46px;
  margin-top: 15px;
  cursor: pointer;
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  -ms-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}

.bi-list {
  display: inline-flex;
  align-items: center;
  color: #ccc;
  font-size: 25px;
  font-weight: bold;
  margin: 0px 5px;
}

.compact-icon h2 {
  display: inline-flex;
  align-items: center;
  color: #ccc;
}

.compactMenu-container {
  position: absolute;
  top: 76px;
  background-color: #3f3f3f;
  border-radius: 5px 0px 5px 5px;
  overflow: hidden;
  z-index: 10;
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  -ms-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}

.compactMenu-link {
  display: block;
  padding: 12px 20px;
  cursor: pointer;
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  -ms-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}

.compactMenu-link:hover {
  background-color: #2b2b2b;
}

.compactMenu-link h2 {
  display: inline-block;
  font-size: 17px;
}

.bi-plus {
  display: inline-block;
  font-size: 20px;
  position: relative;
  top: 2px;
}

.bi-dash {
  display: none;
  font-size: 20px;
  position: relative;
  top: 2px;
}

.subCompMenu-container {
  height: 0px;
  overflow: hidden;
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  -ms-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}

.subCompMenu-link {
  display: block;
  padding: 10px 35px;
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  -ms-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}

.subCompMenu-link:hover {
  background-color: #2b2b2b;
}

/* --------------- Start Mdia Screen ----------------- */

@media only screen and (min-width: 840px) {
  .compact-icon {
    display: none;
  }

  .compactMenu-container {
    display: none;
  }

  .header-menu .menu-right-item {
    position: relative;
    display: block;
  }

  .header-menu .menu-right-item .menu-right-link {
    display: inline-block;
    color: #212121;
    font-weight: bold;
    font-size: 16px;
    padding: 35px 15px;
  }

  .menu-right-item .menu-right-link:hover {
    color: rgb(240, 122, 75);
  }

  .pointer-hidden {
    position: absolute;
    top: 61px;
    right: 23px;
    width: 0px;
    height: 15px;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 7px solid rgb(240, 122, 75);
    visibility: hidden;
    opacity: 0;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -ms-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
  }

  .pointer-show {
    position: absolute;
    top: 71px;
    right: 23px;
    width: 0px;
    height: 15px;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 7px solid rgb(240, 122, 75);
    visibility: visible;
    opacity: 1;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -ms-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
  }

  .stores {
    width: 200px;
    display: inline-flex;
    flex-flow: column;
    position: absolute;
    top: 76px;
    right: -6px;
    background-color: #f2e1d9;
    border-top: solid 4px rgb(240, 122, 75);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    visibility: hidden;
    opacity: 0;
    z-index: 10;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -ms-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
  }

  .second-stores {
    width: 300px;
  }

  .stores .stores-item .stores-link {
    display: inline-block;
    width: 100%;
  }

  .stores .stores-item .stores-link h2 {
    padding: 15px 10px;
    color: #212121;
    font-size: 15px;
    font-weight: bold;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -ms-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
  }

  .stores .stores-item .stores-link h2:hover {
    color: rgb(240, 122, 75);
    transform: translateX(-5px);
  }
}

/* ----------------- End Media Screen ------------------- */

.header-menu .menu-logo {
  margin: 10px auto;
  padding: 5px;
  color: #212121;
  font-size: 20px;
}

.header-menu .menu-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 33.33%;
  padding: 25px 15px;
  color: #ffffff;
}

.menu-icon a {
  position: relative;
  display: inline-block;
}

.menu-icon .show-num {
  display: inline-block;
  padding: 2px;
  border-radius: 50%;
  background-color: #f07a4b;
  position: absolute;
  bottom: 14px;
  right: -1px;
  text-align: center;
  font-size: 14px;
  font-family: "Times New Roman", Times, serif;
}

.menu-icon .search-icon {
  cursor: pointer;
}

.ws-svg-icon {
  display: inline-block;
  width: 24px;
  height: 24px;
}

#searchSVG {
  display: inline-block;
}

#exitSVG {
  display: none;
}

.searchBox {
  height: 160px;
  width: 100%;
  background-color: #f2e1d9;
  position: absolute;
  padding: 50px 0px;
  text-align: center;
  display: none;
  opacity: 0;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  -ms-transition: all 0.2s ease-out;
  -o-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}

.search-form {
  display: inline-flex;
  flex-direction: row-reverse;
  justify-content: start;
  width: 55%;
  height: 60px;
}

.search-form .search-input {
  border: 1px solid #2121219c;
  flex-grow: 10;
  padding: 10px;
  font-size: 17px;
  font-family: "tipographer", "academy", "Myriad Pro", Tahoma;
}

.search-form .search-input:focus {
  border: 2px solid #212121;
}

.search-form .search-submit {
  border: none;
  flex-grow: 1;
  padding: 0;
  background-color: #212121;
}

.search-form .search-submit a {
  display: inline-block;
  width: 100%;
  height: 100%;
  padding: 0 6px;
  z-index: 1;
}

.search-form .search-submit a:hover {
  background-color: #dfdfdf7c;
}

.search {
  padding: 19px 0;
}
</style>
