import {
  router
} from "../../routes";

var allRoutes = router.getRoutes()

export var menuItems = [{
    id: 1,
    itemUrl: "./index.html",
    sub: false,
    text: "خانه",
    store: "",
  },
  {
    id: 2,
    itemUrl: "",
    sub: true,
    text: "فروشگاه ها",
    store: "main",
  },
  {
    id: 3,
    itemUrl: "",
    sub: true,
    text: "تخفیف ها",
    store: "off",
  },
  {
    id: 4,
    itemUrl: "./aboutUs.html",
    sub: false,
    text: "تماس با ما",
    store: "",
  },
  {
    id: 5,
    itemUrl: "./aboutUs.html",
    sub: false,
    text: "درباره ما",
    store: "",
  },
]

export var menuIcons = [{
    id: 1,
    url: null,
  },
  {
    id: 2,
    url: "#",
  },
  {
    id: 3,
    url: "#",
  }
]

export var footerTop = [{
  id: 0,
  h1: "تحویل کالا در محل",
  h2: "تحویل کالا در سریع ترین زمان",
}, {
  id: 1,
  h1: "پرداخت امن",
  h2: "پرداخت امن و آسان با استفاده از شبکه های بانکی",
}, {
  id: 2,
  h1: "پشتیبانی آنلاین",
  h2: "پشتیبانی آنلاین 24 ساعته",
}, {
  id: 3,
  h1: "تضمین ضمانت محصول",
  h2: "تحویل و یا تعویض محصول خریداری شده در 24 ساعت پس از خرید",
}]

export var footerBottom = [{
  id: 0,
  title: "راهنمای خرید",
  items: [{
    id: 0,
    url: "#",
    h2: "راهنمای ارسال"
  }, {
    id: 1,
    url: "#",
    h2: "راهنمای پرداخت"
  }]
}, {
  id: 1,
  title: "خدمات مشتریان",
  items: [{
    id: 0,
    url: "#",
    h2: "پشتیبانی : 071-33200000"
  }, {
    id: 1,
    url: "#",
    h2: "سوالات متداول"
  }, {
    id: 2,
    url: "#",
    h2: "حریم خصوصی کاربران"
  }]
}, {
  id: 2,
  title: "درباره بوتیک من",
  items: [{
    id: 0,
    url: "./aboutUs.html",
    h2: "درباره ما"
  }, {
    id: 1,
    url: "#",
    h2: "ارتباط با ما"
  }]
}, {
  id: 3,
  title: "ثبت ایمیل در خبرنامه",
  items: [{
    id: 0,
    url: "#",
    h2: "راهنمای ارسال"
  }, {
    id: 1,
    url: null,
    h2: "از جدیدترین محصولات و تخفیف ها باخبر شوید"
  }]
}]

export var stores = [{
    id: 1,
    url: "./coolShirt.html",
    text: "پوشاک بهاره و تابستانه",
    products: [{
      picture: "images/caption.jpg",
      url: "#",
      productName: "نام محصول",
      productPrice: "قیمت محصول"
    }, {
      picture: "images/caption.jpg",
      url: "#",
      productName: "نام محصول",
      productPrice: "قیمت محصول"
    }, {
      picture: "images/caption.jpg",
      url: "#",
      productName: "نام محصول",
      productPrice: "قیمت محصول"
    }, {
      picture: "images/caption.jpg",
      url: "#",
      productName: "نام محصول",
      productPrice: "قیمت محصول"
    }, {
      picture: "images/caption.jpg",
      url: "#",
      productName: "نام محصول",
      productPrice: "قیمت محصول"
    }, {
      picture: "images/caption.jpg",
      url: "#",
      productName: "نام محصول",
      productPrice: "قیمت محصول"
    }, {
      picture: "images/caption.jpg",
      url: "#",
      productName: "نام محصول",
      productPrice: "قیمت محصول"
    }]
  },
  {
    id: 2,
    url: "./coolShirt.html",
    text: "پوشاک پاییزه و زمستانه",
    products: [{
      picture: "images/caption.jpg",
      url: "#",
      productName: "نام محصول",
      productPrice: "قیمت محصول"
    }, {
      picture: "images/caption.jpg",
      url: "#",
      productName: "نام محصول",
      productPrice: "قیمت محصول"
    }, {
      picture: "images/caption.jpg",
      url: "#",
      productName: "نام محصول",
      productPrice: "قیمت محصول"
    }, {
      picture: "images/caption.jpg",
      url: "#",
      productName: "نام محصول",
      productPrice: "قیمت محصول"
    }, {
      picture: "images/caption.jpg",
      url: "#",
      productName: "نام محصول",
      productPrice: "قیمت محصول"
    }, {
      picture: "images/caption.jpg",
      url: "#",
      productName: "نام محصول",
      productPrice: "قیمت محصول"
    }, {
      picture: "images/caption.jpg",
      url: "#",
      productName: "نام محصول",
      productPrice: "قیمت محصول"
    }]
  },
  {
    id: 3,
    url: "./coolShirt.html",
    text: "جلیقه",
    products: [{
      picture: "images/caption.jpg",
      url: "#",
      productName: "نام محصول",
      productPrice: "قیمت محصول"
    }, {
      picture: "images/caption.jpg",
      url: "#",
      productName: "نام محصول",
      productPrice: "قیمت محصول"
    }, {
      picture: "images/caption.jpg",
      url: "#",
      productName: "نام محصول",
      productPrice: "قیمت محصول"
    }, {
      picture: "images/caption.jpg",
      url: "#",
      productName: "نام محصول",
      productPrice: "قیمت محصول"
    }, {
      picture: "images/caption.jpg",
      url: "#",
      productName: "نام محصول",
      productPrice: "قیمت محصول"
    }, {
      picture: "images/caption.jpg",
      url: "#",
      productName: "نام محصول",
      productPrice: "قیمت محصول"
    }, {
      picture: "images/caption.jpg",
      url: "#",
      productName: "نام محصول",
      productPrice: "قیمت محصول"
    }]
  },
  {
    id: 4,
    url: "./coolShirt.html",
    text: "شلوار",
    products: [{
      picture: "images/caption.jpg",
      url: "#",
      productName: "نام محصول",
      productPrice: "قیمت محصول"
    }, {
      picture: "images/caption.jpg",
      url: "#",
      productName: "نام محصول",
      productPrice: "قیمت محصول"
    }, {
      picture: "images/caption.jpg",
      url: "#",
      productName: "نام محصول",
      productPrice: "قیمت محصول"
    }, {
      picture: "images/caption.jpg",
      url: "#",
      productName: "نام محصول",
      productPrice: "قیمت محصول"
    }, {
      picture: "images/caption.jpg",
      url: "#",
      productName: "نام محصول",
      productPrice: "قیمت محصول"
    }, {
      picture: "images/caption.jpg",
      url: "#",
      productName: "نام محصول",
      productPrice: "قیمت محصول"
    }, {
      picture: "images/caption.jpg",
      url: "#",
      productName: "نام محصول",
      productPrice: "قیمت محصول"
    }]
  },
  {
    id: 5,
    url: "./coolShirt.html",
    text: "کفش",
    products: [{
      picture: "images/caption.jpg",
      url: "#",
      productName: "نام محصول",
      productPrice: "قیمت محصول"
    }, {
      picture: "images/caption.jpg",
      url: "#",
      productName: "نام محصول",
      productPrice: "قیمت محصول"
    }, {
      picture: "images/caption.jpg",
      url: "#",
      productName: "نام محصول",
      productPrice: "قیمت محصول"
    }, {
      picture: "images/caption.jpg",
      url: "#",
      productName: "نام محصول",
      productPrice: "قیمت محصول"
    }, {
      picture: "images/caption.jpg",
      url: "#",
      productName: "نام محصول",
      productPrice: "قیمت محصول"
    }, {
      picture: "images/caption.jpg",
      url: "#",
      productName: "نام محصول",
      productPrice: "قیمت محصول"
    }, {
      picture: "images/caption.jpg",
      url: "#",
      productName: "نام محصول",
      productPrice: "قیمت محصول"
    }]
  },
]

export var offs = [{
    id: 1,
    url: "./coolShirt.html",
    text: "تخفیف های پوشاک بهاره و تابستانه",
    products: [{
      picture: "images/caption.jpg",
      url: "#",
      productName: "نام محصول",
      productPrice: "قیمت محصول"
    }, {
      picture: "images/caption.jpg",
      url: "#",
      productName: "نام محصول",
      productPrice: "قیمت محصول"
    }, {
      picture: "images/caption.jpg",
      url: "#",
      productName: "نام محصول",
      productPrice: "قیمت محصول"
    }, {
      picture: "images/caption.jpg",
      url: "#",
      productName: "نام محصول",
      productPrice: "قیمت محصول"
    }, {
      picture: "images/caption.jpg",
      url: "#",
      productName: "نام محصول",
      productPrice: "قیمت محصول"
    }, {
      picture: "images/caption.jpg",
      url: "#",
      productName: "نام محصول",
      productPrice: "قیمت محصول"
    }, {
      picture: "images/caption.jpg",
      url: "#",
      productName: "نام محصول",
      productPrice: "قیمت محصول"
    }]
  },
  {
    id: 2,
    url: "./coolShirt.html",
    text: "تخفیف های پوشاک پاییزه و زمستانه",
    products: [{
      picture: "images/caption.jpg",
      url: "#",
      productName: "نام محصول",
      productPrice: "قیمت محصول"
    }, {
      picture: "images/caption.jpg",
      url: "#",
      productName: "نام محصول",
      productPrice: "قیمت محصول"
    }, {
      picture: "images/caption.jpg",
      url: "#",
      productName: "نام محصول",
      productPrice: "قیمت محصول"
    }, {
      picture: "images/caption.jpg",
      url: "#",
      productName: "نام محصول",
      productPrice: "قیمت محصول"
    }, {
      picture: "images/caption.jpg",
      url: "#",
      productName: "نام محصول",
      productPrice: "قیمت محصول"
    }, {
      picture: "images/caption.jpg",
      url: "#",
      productName: "نام محصول",
      productPrice: "قیمت محصول"
    }, {
      picture: "images/caption.jpg",
      url: "#",
      productName: "نام محصول",
      productPrice: "قیمت محصول"
    }]
  },
  {
    id: 3,
    url: "./coolShirt.html",
    text: "تخفیف های جلیقه",
    products: [{
      picture: "images/caption.jpg",
      url: "#",
      productName: "نام محصول",
      productPrice: "قیمت محصول"
    }, {
      picture: "images/caption.jpg",
      url: "#",
      productName: "نام محصول",
      productPrice: "قیمت محصول"
    }, {
      picture: "images/caption.jpg",
      url: "#",
      productName: "نام محصول",
      productPrice: "قیمت محصول"
    }, {
      picture: "images/caption.jpg",
      url: "#",
      productName: "نام محصول",
      productPrice: "قیمت محصول"
    }, {
      picture: "images/caption.jpg",
      url: "#",
      productName: "نام محصول",
      productPrice: "قیمت محصول"
    }, {
      picture: "images/caption.jpg",
      url: "#",
      productName: "نام محصول",
      productPrice: "قیمت محصول"
    }, {
      picture: "images/caption.jpg",
      url: "#",
      productName: "نام محصول",
      productPrice: "قیمت محصول"
    }]
  },
  {
    id: 4,
    url: "./coolShirt.html",
    text: "تخفیف های شلوار",
    products: [{
      picture: "images/caption.jpg",
      url: "#",
      productName: "نام محصول",
      productPrice: "قیمت محصول"
    }, {
      picture: "images/caption.jpg",
      url: "#",
      productName: "نام محصول",
      productPrice: "قیمت محصول"
    }, {
      picture: "images/caption.jpg",
      url: "#",
      productName: "نام محصول",
      productPrice: "قیمت محصول"
    }, {
      picture: "images/caption.jpg",
      url: "#",
      productName: "نام محصول",
      productPrice: "قیمت محصول"
    }, {
      picture: "images/caption.jpg",
      url: "#",
      productName: "نام محصول",
      productPrice: "قیمت محصول"
    }, {
      picture: "images/caption.jpg",
      url: "#",
      productName: "نام محصول",
      productPrice: "قیمت محصول"
    }, {
      picture: "images/caption.jpg",
      url: "#",
      productName: "نام محصول",
      productPrice: "قیمت محصول"
    }]
  },
  {
    id: 5,
    url: "./coolShirt.html",
    text: "تخفیف های کفش",
    products: [{
      picture: "images/caption.jpg",
      url: "#",
      productName: "نام محصول",
      productPrice: "قیمت محصول"
    }, {
      picture: "images/caption.jpg",
      url: "#",
      productName: "نام محصول",
      productPrice: "قیمت محصول"
    }, {
      picture: "images/caption.jpg",
      url: "#",
      productName: "نام محصول",
      productPrice: "قیمت محصول"
    }, {
      picture: "images/caption.jpg",
      url: "#",
      productName: "نام محصول",
      productPrice: "قیمت محصول"
    }, {
      picture: "images/caption.jpg",
      url: "#",
      productName: "نام محصول",
      productPrice: "قیمت محصول"
    }, {
      picture: "images/caption.jpg",
      url: "#",
      productName: "نام محصول",
      productPrice: "قیمت محصول"
    }, {
      picture: "images/caption.jpg",
      url: "#",
      productName: "نام محصول",
      productPrice: "قیمت محصول"
    }]
  },
]
export var categories = [{
  id: 0,
  name: "جدیدترین",
  url: null,
}, {
  id: 1,
  name: "ارزان ترین",
  url: null,
}, {
  id: 2,
  name: "پرفروش ترین",
  url: null,
}, ]

export var fallAndWinterClothes = [{
  id: 0,
  category: "پلیور",
  url: '/coldClothes/poly',
  products: [{
    id: 0,
    picture: "../images/caption.jpg",
    url: "#",
    productName: "نام محصول",
    productPrice: "قیمت محصول"
  }, {
    id: 1,
    picture: "../images/caption.jpg",
    url: "#",
    productName: "نام محصول",
    productPrice: "قیمت محصول"
  }, {
    id: 2,
    picture: "../images/caption.jpg",
    url: "#",
    productName: "نام محصول",
    productPrice: "قیمت محصول"
  }, {
    id: 3,
    picture: "../images/caption.jpg",
    url: "#",
    productName: "نام محصول",
    productPrice: "قیمت محصول"
  }, {
    id: 4,
    picture: "../images/caption.jpg",
    url: "#",
    productName: "نام محصول",
    productPrice: "قیمت محصول"
  }, {
    id: 5,
    picture: "../images/caption.jpg",
    url: "#",
    productName: "نام محصول",
    productPrice: "قیمت محصول"
  }, {
    id: 6,
    picture: "../images/caption.jpg",
    url: "#",
    productName: "نام محصول",
    productPrice: "قیمت محصول"
  }, {
    id: 7,
    picture: "../images/caption.jpg",
    url: "#",
    productName: "نام محصول",
    productPrice: "قیمت محصول"
  }, {
    id: 8,
    picture: "../images/caption.jpg",
    url: "#",
    productName: "نام محصول",
    productPrice: "قیمت محصول"
  }, {
    id: 9,
    picture: "../images/caption.jpg",
    url: "#",
    productName: "نام محصول",
    productPrice: "قیمت محصول"
  }, {
    id: 10,
    picture: "../images/caption.jpg",
    url: "#",
    productName: "نام محصول",
    productPrice: "قیمت محصول"
  }, {
    id: 11,
    picture: "../images/caption.jpg",
    url: "#",
    productName: "نام محصول",
    productPrice: "قیمت محصول"
  }, ]
}, {
  id: 1,
  category: "سویشرت و هودی",
  url: '/coldClothes/sweet',
  products: [{
    id: 0,
    picture: "../images/caption.jpg",
    url: "#",
    productName: "نام محصول",
    productPrice: "قیمت محصول"
  }, {
    id: 1,
    picture: "../images/caption.jpg",
    url: "#",
    productName: "نام محصول",
    productPrice: "قیمت محصول"
  }, {
    id: 2,
    picture: "../images/caption.jpg",
    url: "#",
    productName: "نام محصول",
    productPrice: "قیمت محصول"
  }, {
    id: 3,
    picture: "../images/caption.jpg",
    url: "#",
    productName: "نام محصول",
    productPrice: "قیمت محصول"
  }, {
    id: 4,
    picture: "../images/caption.jpg",
    url: "#",
    productName: "نام محصول",
    productPrice: "قیمت محصول"
  }, {
    id: 5,
    picture: "../images/caption.jpg",
    url: "#",
    productName: "نام محصول",
    productPrice: "قیمت محصول"
  }, {
    id: 6,
    picture: "../images/caption.jpg",
    url: "#",
    productName: "نام محصول",
    productPrice: "قیمت محصول"
  }, {
    id: 7,
    picture: "../images/caption.jpg",
    url: "#",
    productName: "نام محصول",
    productPrice: "قیمت محصول"
  }, ]
}, {
  id: 2,
  category: "کاپشن و پالتو",
  url: '/coldClothes/caption',
  products: [{
    id: 0,
    picture: "../images/caption.jpg",
    url: "#",
    productName: "نام محصول",
    productPrice: "قیمت محصول"
  }, {
    id: 1,
    picture: "../images/caption.jpg",
    url: "#",
    productName: "نام محصول",
    productPrice: "قیمت محصول"
  }, {
    id: 2,
    picture: "../images/caption.jpg",
    url: "#",
    productName: "نام محصول",
    productPrice: "قیمت محصول"
  }, {
    id: 3,
    picture: "../images/caption.jpg",
    url: "#",
    productName: "نام محصول",
    productPrice: "قیمت محصول"
  }, {
    id: 4,
    picture: "../images/caption.jpg",
    url: "#",
    productName: "نام محصول",
    productPrice: "قیمت محصول"
  }, {
    id: 5,
    picture: "../images/caption.jpg",
    url: "#",
    productName: "نام محصول",
    productPrice: "قیمت محصول"
  }, {
    id: 6,
    picture: "../images/caption.jpg",
    url: "#",
    productName: "نام محصول",
    productPrice: "قیمت محصول"
  }, {
    id: 7,
    picture: "../images/caption.jpg",
    url: "#",
    productName: "نام محصول",
    productPrice: "قیمت محصول"
  }, {
    id: 8,
    picture: "../images/caption.jpg",
    url: "#",
    productName: "نام محصول",
    productPrice: "قیمت محصول"
  }, {
    id: 9,
    picture: "../images/caption.jpg",
    url: "#",
    productName: "نام محصول",
    productPrice: "قیمت محصول"
  }, ]
}, {
  id: 3,
  category: "تیشرت آستین بلند",
  url: '/coldClothes/Tshirt',
  products: [{
    id: 0,
    picture: "../images/caption.jpg",
    url: "#",
    productName: "نام محصول",
    productPrice: "قیمت محصول"
  }, {
    id: 1,
    picture: "../images/caption.jpg",
    url: "#",
    productName: "نام محصول",
    productPrice: "قیمت محصول"
  }, {
    id: 2,
    picture: "../images/caption.jpg",
    url: "#",
    productName: "نام محصول",
    productPrice: "قیمت محصول"
  }, {
    id: 3,
    picture: "../images/caption.jpg",
    url: "#",
    productName: "نام محصول",
    productPrice: "قیمت محصول"
  }, {
    id: 4,
    picture: "../images/caption.jpg",
    url: "#",
    productName: "نام محصول",
    productPrice: "قیمت محصول"
  }, {
    id: 5,
    picture: "../images/caption.jpg",
    url: "#",
    productName: "نام محصول",
    productPrice: "قیمت محصول"
  }, {
    id: 6,
    picture: "../images/caption.jpg",
    url: "#",
    productName: "نام محصول",
    productPrice: "قیمت محصول"
  }, {
    id: 7,
    picture: "../images/caption.jpg",
    url: "#",
    productName: "نام محصول",
    productPrice: "قیمت محصول"
  }, {
    id: 8,
    picture: "../images/caption.jpg",
    url: "#",
    productName: "نام محصول",
    productPrice: "قیمت محصول"
  }, {
    id: 9,
    picture: "../images/caption.jpg",
    url: "#",
    productName: "نام محصول",
    productPrice: "قیمت محصول"
  }, {
    id: 10,
    picture: "../images/caption.jpg",
    url: "#",
    productName: "نام محصول",
    productPrice: "قیمت محصول"
  }, ]
}, ]

export var springAndSummerClothes = [{
  id: 0,
  category: "پیراهن",
  url: '/coldClothes/poly',
  products: []
}, {
  id: 1,
  category: "تیشرت",
  url: '/coldClothes/sweet',
  products: []
}, {
  id: 2,
  category: "پلوشرت",
  url: '/coldClothes/caption',
  products: []
}]

export var pants = [{
  id: 0,
  category: "جین",
  url: '/coldClothes/poly',
  products: []
}, {
  id: 1,
  category: "کتان",
  url: '/coldClothes/sweet',
  products: []
}, {
  id: 2,
  category: "پارچه ای",
  url: '/coldClothes/caption',
  products: []
}, {
  id: 3,
  category: "اسلش",
  url: '/coldClothes/caption',
  products: []
}]

export var shoots = [{
  id: 0,
  category: "روزمره",
  url: '/coldClothes/poly',
  products: []
}, {
  id: 1,
  category: "رسمی",
  url: '/coldClothes/sweet',
  products: []
}, {
  id: 2,
  category: "نیم بوت و بوت",
  url: '/coldClothes/caption',
  products: []
}, {
  id: 3,
  category: "ورزشی",
  url: '/coldClothes/caption',
  products: []
}]

export var vestsAndCoats = [{
  id: 0,
  category: "جلیقه",
  url: '/coldClothes/poly',
  products: []
}, {
  id: 1,
  category: "کت تک",
  url: '/coldClothes/sweet',
  products: []
}]

export var addUserAddress = [{
    text: "نام و نام خانوادگی",
    for: "insertName",
    options: undefined
  },
  [{
      text: "شماره همراه",
      for: "insertMobile",
      options: undefined
    },
    {
      text: "کد پستی",
      for: "insertPostCode",
      options: undefined
    }
  ],
  [{
      text: "نام استان",
      for: "provinece",
      options: ["استان 1", "استان 2", "استان 3", "استان 4"],
    },
    {
      text: "نام شهر",
      for: "city",
      options: ["شهر 1", "شهر 2", "شهر 3", "شهر 4", "شهر 5"]
    }
  ],
  {
    text: "آدرس پستی",
    for: "insertAddress",
    options: undefined
  }
]

export var changePass = [{
  text: "کلمه عبور فعلی",
  for: "insertCurrentPassword",
}, {
  text: "کلمه عبور جدید",
  for: "insertNewPassword",
}, {
  text: "تکرار کلمه عبور جدید",
  for: "repeatNewPassword",
}]

var SVGs = {
  managment: `
        <i>
         <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="body_1" width="25" height="19">

           <g transform="matrix(0.5102041 0 0 0.5135135 0 0)">
              <g transform="matrix(0.037 0 0 0.037 6.000001 -0)">
                <g>
                 <path d="M990 882.8C 990 899.7 976.3 913.39996 959.4 913.39996C 942.5 913.39996 928.80005 899.69995 928.80005 882.8C 928.80005 737.4 827.30005 616.4 691.50006 585L691.50006 585L691.50006 583.5C 673.30005 577.9 659.9001 561.6 659.9001 541.6C 659.9001 519.8 675.9001 502.49997 696.50006 498.69998C 760.9001 470.09998 806.30005 406.5 806.30005 331.5C 806.30005 230 724.00006 147.8 622.50006 147.8L622.50006 147.8L622.50006 147.40001C 606.50006 146.40001 593.80005 133.40001 593.80005 117.20001C 593.80005 101.000015 606.50006 88.000015 622.50006 87.000015L622.50006 87.000015L622.50006 86.60001C 622.9001 86.60001 623.30005 86.70001 623.80005 86.70001C 624.00006 86.70001 624.2001 86.60001 624.4 86.60001C 625.10004 86.60001 625.60004 86.90002 626.30005 87.000015C 759.8 89 867.5 197.6 867.5 331.6C 867.5 419.8 820.5 496.40002 750.6 539.6C 890.1 591.7 990 725.1 990 882.8zM505.6 539.6C 645.1 591.7 745 725.1 745 882.8C 745 899.7 731.3 913.39996 714.4 913.39996C 697.5 913.39996 683.80005 899.69995 683.80005 882.8C 683.80005 713.69995 546.7001 576.5 377.50006 576.5C 208.40005 576.5 71.30005 713.6 71.30005 882.8C 71.30005 899.7 57.600048 913.39996 40.70005 913.39996C 23.80005 913.39996 10.10005 899.69995 10.10005 882.8C 10.10005 725.1 110.00005 591.69995 249.50005 539.5C 179.60004 496.3 132.60004 419.7 132.60004 331.5C 132.60004 196.2 242.30003 86.5 377.60004 86.5C 512.9 86.5 622.60004 196.2 622.60004 331.5C 622.5 419.7 575.5 496.4 505.6 539.6zM377.5 147.8C 276 147.8 193.8 230.1 193.8 331.6C 193.8 433.1 276.1 515.3 377.5 515.3C 479 515.3 561.3 433 561.3 331.59998C 561.3 230.19995 479 147.8 377.5 147.8z" stroke="none" fill="#000000" fill-rule="nonzero"/>
                 </g>
              </g>
             </g>
         </svg>
        </i>`,
  adresses: `
        <i>
          <svg id="body_1" width="25" height="19">
            <g transform="matrix(0.037109375 0 0 0.037109375 1.8124999 -0)">
              <path d="M408 120C 408 174.6 334.9 271.9 302.8 311.1C 295.1 321.6 280.9 321.6 273.2 311.1C 241.1 271.9 168 174.6 168 120C 168 53.73 221.7 0 288 0C 354.3 0 408 53.73 408 120zM288 152C 310.1 152 328 134.1 328 112C 328 89.91 310.1 72 288 72C 265.9 72 248 89.91 248 112C 248 134.1 265.9 152 288 152zM425.6 179.8C 426.1 178.6 426.6 177.4 427.1 176.1L427.1 176.1L543.1 129.7C 558.9 123.4 576 135 576 152L576 152L576 422.8C 576 432.6 570 441.4 560.9 445.1L560.9 445.1L416 503L416 200.4C 419.5 193.5 422.7 186.7 425.6 179.8zM150.4 179.8C 153.3 186.7 156.5 193.5 160 200.4L160 200.4L160 451.8L32.91 502.7C 17.15 508.1 0 497.4 0 480.4L0 480.4L0 209.6C 0 199.8 5.975 190.1 15.09 187.3L15.09 187.3L137.6 138.3C 140 152.5 144.9 166.6 150.4 179.8zM327.8 331.1C 341.7 314.6 363.5 286.3 384 255L384 255L384 504.3L192 449.4L192 255C 212.5 286.3 234.3 314.6 248.2 331.1C 268.7 357.6 307.3 357.6 327.8 331.1z" stroke="none" fill="#3f3f3f" fill-rule="nonzero" />
            </g>
          </svg>
        </i>`,

  orders: `
        <i>
          <svg id="body_1" width="25" height="19">
            <g transform="matrix(0.8064517 0 0 0.82608694 0 0)">
              <g transform="matrix(0.044921875 0 0 0.044921875 2.5625005 -0)">
                <path d="M171.7 191.1L404.3 191.1L322.7 35.07C 316.6 23.31 321.2 8.821 332.9 2.706C 344.7 -3.409 359.2 1.167 365.3 12.93L365.3 12.93L458.4 191.1L544 191.1C 561.7 191.1 576 206.3 576 223.1C 576 241.7 561.7 255.1 544 255.1L544 255.1L492.1 463.5C 484.1 492 459.4 512 430 512L430 512L145.1 512C 116.6 512 91 492 83.88 463.5L83.88 463.5L32 255.1C 14.33 255.1 0 241.7 0 223.1C 0 206.3 14.33 191.1 32 191.1L32 191.1L117.6 191.1L210.7 12.93C 216.8 1.167 231.3 -3.409 243.1 2.706C 254.8 8.821 259.4 23.31 253.3 35.07L253.3 35.07L171.7 191.1zM191.1 303.1C 191.1 295.1 184.8 287.1 175.1 287.1C 167.2 287.1 159.1 295.1 159.1 303.1L159.1 303.1L159.1 399.1C 159.1 408.8 167.2 415.1 175.1 415.1C 184.8 415.1 191.1 408.8 191.1 399.1L191.1 399.1L191.1 303.1zM271.1 303.1L271.1 399.1C 271.1 408.8 279.2 415.1 287.1 415.1C 296.8 415.1 304 408.8 304 399.1L304 399.1L304 303.1C 304 295.1 296.8 287.1 287.1 287.1C 279.2 287.1 271.1 295.1 271.1 303.1zM416 303.1C 416 295.1 408.8 287.1 400 287.1C 391.2 287.1 384 295.1 384 303.1L384 303.1L384 399.1C 384 408.8 391.2 415.1 400 415.1C 408.8 415.1 416 408.8 416 399.1L416 399.1L416 303.1z" stroke="none" fill="#3f3f3f" fill-rule="nonzero" />
              </g>
            </g>
          </svg>
        </i>`,

  changePassword: ` 
        <i>         
          <svg id="body_1" width="25" height="19">
            <g transform="matrix(0.037109375 0 0 0.037109375 4.1875 -0)">
              <path d="M224 64C 179.8 64 144 99.82 144 144L144 144L144 192L384 192C 419.3 192 448 220.7 448 256L448 256L448 448C 448 483.3 419.3 512 384 512L384 512L64 512C 28.65 512 0 483.3 0 448L0 448L0 256C 0 220.7 28.65 192 64 192L64 192L80 192L80 144C 80 64.47 144.5 0 224 0C 281.5 0 331 33.69 354.1 82.27C 361.7 98.23 354.9 117.3 338.1 124.9C 322.1 132.5 303.9 125.7 296.3 109.7C 283.4 82.63 255.9 64 224 64zM256 384C 273.7 384 288 369.7 288 352C 288 334.3 273.7 320 256 320L256 320L192 320C 174.3 320 160 334.3 160 352C 160 369.7 174.3 384 192 384L192 384L256 384z" stroke="none" fill="#3f3f3f" fill-rule="nonzero" />
            </g>
          </svg>
        </i>`,

  exit: ` 
        <i> 
          <svg id="body_1" width="25" height="19">
            <g transform="matrix(0.037109375 0 0 0.037109375 3 -0)">
              <path d="M160 416L96 416C 78.33 416 64 401.67 64 384L64 384L64 128C 64 110.33 78.33 96 96 96L96 96L160 96C 177.67 96 192 81.67 192 64C 192 46.33 177.7 32 160 32L160 32L96 32C 42.98 32 0 74.98 0 128L0 128L0 384C 0 437.02 42.98 480 96 480L96 480L160 480C 177.67 480 192 465.67 192 448C 192 430.33 177.7 416 160 416zM502.6 233.4L374.6 105.399994C 362.09 92.88999 341.84 92.909996 329.35 105.399994C 316.85 117.899994 316.85 138.15 329.35 150.65L329.35 150.65L402.8 224L192 224C 174.3 224 160 238.3 160 256C 160 273.7 174.31 288 192 288L192 288L402.8 288L329.41998 361.38C 316.91998 373.88 316.91998 394.13 329.41998 406.63C 341.91998 419.13 362.16998 419.13 374.66998 406.63L374.66998 406.63L502.66998 278.63C 515.1 266.1 515.1 245.9 502.6 233.4z" stroke="none" fill="#3f3f3f" fill-rule="nonzero" />
            </g>
          </svg>
        </i>`,

}

export var accountNavbarList = [{
  id: 0,
  name: "بخش مدیریت",
  icon: SVGs.managment,
  url: allRoutes[0].path,
}, {
  id: 1,
  name: "پروفایل",
  icon: '<i class="fa fa-user"></i>',
  url: allRoutes[7].path,
}, {
  id: 2,
  name: "لیست سفارشات من",
  icon: SVGs.orders,
  url: allRoutes[7].path,
}, {
  id: 3,
  name: "درخواست مرجوعی",
  icon: '<i class="fa fa-rotate-left"></i>',
  url: allRoutes[7].path,
}, {
  id: 4,
  name: "آدرس های من",
  icon: SVGs.adresses,
  url: allRoutes[1].path,
}, {
  id: 5,
  name: "تغییر رمز عبور",
  icon: SVGs.changePassword,
  url: "",
}, {
  id: 6,
  name: "خروج",
  icon: SVGs.exit,
  url: allRoutes[7].path,
}]

export var addProductForm = [
  [{
    name: "انتخاب فروشگاه",
    for: "choose-store",
    // value: "نام شخص",
  }, {
    name: "انتخاب دسته",
    for: "choose-subStore",
    // value: "نام خانوادگی شخص",
  }],
  [{
    name: "نام محصول",
    for: "product-name",
    // value: "",
  }, {
    name: "قیمت محصول",
    for: "product-price",
    // value: "",
  }]
]

export var personalInfoBody = [
  [{
    name: "نام",
    for: "first-name",
    value: "نام شخص",
  }, {
    name: "نام خانوادگی",
    for: "last-name",
    value: "نام خانوادگی شخص",
  }],
  [{
    name: "شماره موبایل",
    for: "mobile-num",
    value: "شماره شخص",
  }, {
    name: "آدرس ایمیل",
    for: "email-addr",
    value: "ایمیل شخص",
  }]
]

export var accountInfoBody = [{
  id: 0,
  name: "نام صاحب حساب",
  for: "fund-name",
  value: "نام شخص",
  options: null
}, {
  id: 1,
  name: "نام بانک",
  for: "select-bank",
  value: "انتخاب بانک",
  options: [{
    id: 0,
    name: "بانک 1"
  }, {
    id: 1,
    name: "بانک 2"
  }, {
    id: 2,
    name: "بانک 3"
  }, {
    id: 3,
    name: "بانک 4"
  }, {
    id: 4,
    name: "بانک 5"
  }, ]
}, {
  id: 2,
  name: "شماره کارت",
  for: "cart-num",
  value: "1000000000000000",
  options: null
}, {
  id: 3,
  name: "شماره شبا",
  for: "shaba-num",
  value: "1000000000000000",
  options: null
}, ]

export var productDetails = {
  name: "نام محصول",
  price: "قیمت محصول",
  images: [{
    url: "../images/caption.jpg"
  }, {
    url: "../images/caption.jpg"
  }, {
    url: "../images/caption.jpg"
  }, {
    url: "../images/caption.jpg"
  }],
  colors: [{
    name: "مشکی",
    code: "#212121"
  }, {
    name: "زرد",
    code: "yellow"
  }, {
    name: "قرمز",
    code: "red",
  }, {
    name: "آبی",
    code: "blue",
  }],
  sizes: ["M - 50", "L - 52 ", " XL - 54", "2XL - 56"]
}

export var body = document.body