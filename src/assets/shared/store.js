import {
  createStore
} from "vuex"

import {
  menuItems,
  menuIcons,
  footerTop,
  footerBottom,
  stores,
  offs
} from "./data"


export const store = createStore({
  state() {
    return {
      menuItems,
      menuIcons,
      footerTop,
      footerBottom,
      stores,
      offs
    }
  }
})