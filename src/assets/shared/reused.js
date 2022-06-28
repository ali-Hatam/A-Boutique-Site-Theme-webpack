import {
    ref,
    reactive,
    onUpdated,
    computed,
    onMounted,
} from "vue";

export function useProducts(products) {

    var localProducts = ref(products)
    var data = reactive({

        previousStoreId: 1,
        storesLeft: [0, 0, 0, 0, 0],
        storesLeftLimit: [0, 0, 0, 0, 0],
        shopBoxShadow: [], //"0px 2px #1d2547",
        shopNameColor: [],
        flexConDisplay: ["inline-flex", "none", "none", "none", "none"],
        chevRightOpac: "1",
        chevLeftOpac: "0.5",
        moveConPart: 2,
        prevMoveConPart: 2,
        headerOpacity: "0",
        headerTop: "30%",
        productOpacity_1: "0",
        productOpacity_2: "0",
        productOpacity_3: "0",
        productTop_1: "200px",
        productTop_2: "200px",
        productTop_3: "200px",
        figureBackColor: {},
        viewMoreOpacity: {},
        viewMoreTop: {},
        isHeaderShow: false,
        isProductShow: false,
        observer_1: new Object(),
        observer_2: new Object(),
        observer_3: new Object(),
        observer_4: new Object(),
        option1: {
            threshold: [0.06],
        },
        option2: {
            threshold: [0],
        },
    });
    var refrences = reactive({
        flexContRef: {},
    });
    var mainHeader = ref([]);

    onMounted(() => {
        if (window.innerWidth >= 960) {
            data.moveConPart = 3;
            data.storesLeftLimit = [200, 200, 200, 200, 200];
        } else if (window.innerWidth >= 630 && window.innerWidth < 960) {
            data.moveConPart = 2;
            data.storesLeftLimit = [300, 300, 300, 300, 300];
        } else {
            data.moveConPart = 1;
            data.storesLeftLimit = [600, 600, 600, 600, 600];
        }

        data.prevMoveConPart = data.moveConPart;
    })
    onMounted(() => {
        visualViewport.addEventListener("resize", () => {
            if (window.innerWidth >= 960) {
                data.moveConPart = 3;
            } else if (window.innerWidth >= 630 && window.innerWidth < 960) {
                data.moveConPart = 2;
            } else {
                data.moveConPart = 1;
            }
        });
    })
    onMounted(() => {
        data.observer_1 = new IntersectionObserver((entry) => {
            if (entry.length > 1) return;
            if (!entry[0].isIntersecting) return;
            if (data.isProductShow) return;

            setTimeout(() => {
                data.productOpacity_1 = "1";
                data.productTop_1 = "0";
            }, 0);

            setTimeout(() => {
                data.productOpacity_2 = "1";
                data.productTop_2 = "0";
            }, 250);

            setTimeout(() => {
                data.productOpacity_3 = "1";
                data.productTop_3 = "0";
            }, 500);

            data.isProductShow = true;
        }, data.option1);

        data.observer_2 = new IntersectionObserver((entry) => {
            if (entry.length > 1) return;
            if (entry[0].isIntersecting) return;
            if (entry[0].boundingClientRect.top < 0) return;
            if (!data.isProductShow) return;

            data.productOpacity_1 = "0";
            data.productTop_1 = "200px";

            data.productOpacity_2 = "0";
            data.productTop_2 = "200px";

            data.productOpacity_3 = "0";
            data.productTop_3 = "200px";

            data.isProductShow = false;
        }, data.option2);

        data.observer_3 = new IntersectionObserver((entry) => {
            if (!entry[0].isIntersecting) return;
            if (data.isHeaderShow) return;

            data.headerOpacity = "1";
            data.headerTop = "0";

            data.isHeaderShow = true;
        }, data.option1);

        data.observer_4 = new IntersectionObserver((entry) => {
            if (entry[0].isIntersecting) return;
            if (!data.isHeaderShow) return;
            if (entry[0].boundingClientRect.top < 0) return;

            data.headerOpacity = "0";
            data.headerTop = "30%";

            data.isHeaderShow = false;
        }, data.option2);

        for (let index = 0; index < 5; index++) {
            data.observer_1.observe(refrences.flexContRef[index + 1]);
            data.observer_2.observe(refrences.flexContRef[index + 1]);
        }

        data.observer_3.observe(mainHeader.value);
        data.observer_4.observe(mainHeader.value);
    });

    onUpdated(() => {
        for (let index = 0; index < 5; index++) {
            data.storesLeftLimit[index] =
                (refrences.flexContRef[index + 1].children.length - 1) * 100;

            var productInd =
                (data.storesLeft[index] / 100 + 1) * data.prevMoveConPart -
                (data.prevMoveConPart - 1);

            data.storesLeft[index] =
                productInd % data.moveConPart == 0 ?
                (productInd / data.moveConPart - 1) * 100 :
                Math.floor(productInd / data.moveConPart) * 100;

            refrences.flexContRef[index + 1].style.left = `${data.storesLeft[index]}%`;
        }
        data.prevMoveConPart = data.moveConPart;
    });

    var flexContainerStyle = computed(() => {
        return (shop) => {
            return {
                width: `${
        (shop.products.length % data.moveConPart == 0
          ? shop.products.length / data.moveConPart
          : Math.floor(shop.products.length / data.moveConPart) + 1) * 100
      }%`,
                display: data.flexConDisplay[shop.id - 1],
            };
        };
    });
    var moveContainerItemNum = computed(() => {
        return (shop) => {
            return shop.products.length % data.moveConPart == 0 ?
                shop.products.length / data.moveConPart :
                Math.floor(shop.products.length / data.moveConPart) + 1;
        };
    });
    var articleNum = computed(() => {
        return (shop, n1) => {
            return shop.products.length - data.moveConPart * (n1 - 1) >=
                data.moveConPart ?
                data.moveConPart :
                shop.products.length - data.moveConPart * (n1 - 1);
        };
    });
    var productOpacity = computed(() => {
        return (ind) => {
            if (ind == 1) {
                return data.productOpacity_1;
            } else if (ind == 2) {
                return data.productOpacity_2;
            } else {
                return data.productOpacity_3;
            }
        };
    });
    var productTop = computed(() => {
        return (ind) => {
            if (ind == 1) {
                return data.productTop_1;
            } else if (ind == 2) {
                return data.productTop_2;
            } else {
                return data.productTop_3;
            }
        };
    });
    var figureStyle = computed(() => {
        return (shopId, n1, n2) => {
            return {
                backgroundColor: data.figureBackColor[
                    `${shopId}_${data.moveConPart * (n1 - 1) + (n2 - 1)}`
                ],
            };
        };
    });
    var viewMoreStyle = computed(() => {
        return (shopId, n1, n2) => {
            return {
                opacity: data.viewMoreOpacity[
                    `${shopId}_${data.moveConPart * (n1 - 1) + (n2 - 1)}`
                ],
                top: data.viewMoreTop[
                    `${shopId}_${data.moveConPart * (n1 - 1) + (n2 - 1)}`
                ],
            };
        };
    });

    var overFigure = (shopId, productIndex) => {
        data.figureBackColor[`${shopId}_${productIndex}`] = "rgba(33,33,33,0.3)";
        data.viewMoreOpacity[`${shopId}_${productIndex}`] = "1";
        data.viewMoreTop[`${shopId}_${productIndex}`] = "47%";
    };
    var outFigure = (shopId, productIndex) => {
        data.figureBackColor[`${shopId}_${productIndex}`] = "#f0f0f000";
        data.viewMoreOpacity[`${shopId}_${productIndex}`] = "0";
        data.viewMoreTop[`${shopId}_${productIndex}`] = "48%";
    };
    var showShop = (shopId) => {
        if (shopId == data.previousStoreId) return;

        data.flexConDisplay[data.previousStoreId - 1] = "none";
        refrences.flexContRef[data.previousStoreId].style.opacity = "0";
        data.shopNameColor[data.previousStoreId] = "#1d2547";
        data.shopBoxShadow[data.previousStoreId] = " 0px 2px #1d2547 ";

        data.flexConDisplay[shopId - 1] = "inline-flex";
        data.shopNameColor[shopId] = "rgb(240, 122, 75)";
        data.shopBoxShadow[shopId] = " 0px 2px rgb(240, 122, 75) ";

        setTimeout(() => {
            refrences.flexContRef[shopId].style.opacity = "1";
        }, 0);

        if (data.storesLeft[shopId - 1] == data.storesLeftLimit[shopId - 1]) {
            data.chevRightOpac = "0.5";
            data.chevLeftOpac = "1";
        } else if (data.storesLeft[shopId - 1] == 0) {
            data.chevRightOpac = "1";
            data.chevLeftOpac = "0.5";
        } else {
            data.chevRightOpac = "1";
            data.chevLeftOpac = "1";
        }

        data.previousStoreId = shopId;
    };
    var moveRight = () => {
        for (let index = 0; index <= localProducts.value.length - 1; index++) {
            if (data.flexConDisplay[index] == "inline-flex") {
                if (data.storesLeft[index] == data.storesLeftLimit[index]) return;

                data.storesLeft[index] += 100;
                refrences.flexContRef[
                    index + 1
                ].style.left = `${data.storesLeft[index]}%`;

                if (data.storesLeft[index] == data.storesLeftLimit[index]) {
                    data.chevRightOpac = "0.5";
                    data.chevLeftOpac = "1";
                } else {
                    data.chevRightOpac = "1";
                    data.chevLeftOpac = "1";
                }
            }
        }
    };
    var moveLeft = () => {
        for (let index = 0; index <= localProducts.value.length - 1; index++) {
            if (data.flexConDisplay[index] == "inline-flex") {
                if (data.storesLeft[index] == 0) return;

                data.storesLeft[index] -= 100;
                refrences.flexContRef[
                    index + 1
                ].style.left = `${data.storesLeft[index]}%`;

                if (data.storesLeft[index] == 0) {
                    data.chevRightOpac = "1";
                    data.chevLeftOpac = "0.5";
                } else {
                    data.chevRightOpac = "1";
                    data.chevLeftOpac = "1";
                }
            }
        }
    };

    return {
        data,
        refrences,
        mainHeader,
        flexContainerStyle,
        articleNum,
        productOpacity,
        moveContainerItemNum,
        productTop,
        figureStyle,
        viewMoreStyle,
        overFigure,
        outFigure,
        showShop,
        moveRight,
        moveLeft
    }
}