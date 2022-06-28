import {
  createStore
} from "vuex"

import {
  menuItems,
  menuIcons,
  footerTop,
  footerBottom,
  stores,
  offs,
  addUserAddress,
  changePass,
  accountNavbarList,
  personalInfoBody,
  accountInfoBody,
  fallAndWinterClothes,
  springAndSummerClothes,
  shoots,
  pants,
  vestsAndCoats,
  body,
  categories,
  productDetails,
  addProductForm
} from "./data"


export const store = createStore({
  state() {
    return {
      menuItems,
      menuIcons,
      footerTop,
      footerBottom,
      stores,
      offs,
      categories,
      fallAndWinterClothes,
      springAndSummerClothes,
      shoots,
      pants,
      vestsAndCoats,
      addUserAddress,
      changePass,
      accountNavbarList,
      personalInfoBody,
      accountInfoBody,
      body,
      productDetails,
      coverVisible: "hidden",
      coverBackColor: "transparent",
      coverPosition: "absolute",
      coverTop: "0px",
      coverZIndex: undefined,
      coverHeight: undefined,
      changePassDisplay: "none",
      changePassVisible: "hidden",
      changePassOpacity: "0",
      changePassTop: "-60px",
      insertAddrDisplay: "none",
      insertAddrVisible: "hidden",
      insertAddrOpacity: "0",
      insertAddrTop: "-60px",
      addProductForm

    }
  }
})