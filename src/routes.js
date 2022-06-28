import homePage from "./components/mainComponents/home/main/home.vue";
import accountPage from "./components/mainComponents/account/main/account.vue";
import coldClothesPage from "./components/mainComponents/coldClothes/coldClothes.vue";
import account_myAddress from "./components/mainComponents/account/secondary/myAddress.vue";
import account_accountBody from "./components/mainComponents/account/secondary/accountBody.vue";
import account_managment from "./components/mainComponents/account/secondary/managment.vue";
import coldClothes_polywears from "./components/mainComponents/coldClothes/secondary/subStores/secondary/polywears.vue";
import coldClothes_sweatHoodyShirts from "./components/mainComponents/coldClothes/secondary/subStores/secondary/sweatHoodyShirts.vue";
import coldClothes_captions from "./components/mainComponents/coldClothes/secondary/subStores/secondary/captions.vue";
import coldClothes_coldTShirts from "./components/mainComponents/coldClothes/secondary/subStores/secondary/coldTShirts.vue";
import productDetailesPage from "./components/mainComponents/productDetailes/productDetailPage.vue";

import {
    createRouter,
    createWebHistory
} from "vue-router";

var routes = [{
        path: "/",
        component: homePage,
    },
    {
        path: "/account",
        component: accountPage,
        children: [{
            path: "manage",
            component: account_managment
        }, {
            path: "",
            component: account_accountBody
        }, {
            path: "addresses",
            component: account_myAddress
        }]
    },
    {
        path: "/coldClothes",
        component: coldClothesPage,
        children: [{
            path: "poly",
            component: coldClothes_polywears
        }, {
            path: "sweet",
            component: coldClothes_sweatHoodyShirts
        }, {
            path: "caption",
            component: coldClothes_captions
        }, {
            path: "Tshirt",
            component: coldClothes_coldTShirts
        }]
    },
    {
        path: "/productDetails",
        component: productDetailesPage
    }
]

export var router = createRouter({
    history: createWebHistory(),
    routes,
})

console.log(router.getRoutes())