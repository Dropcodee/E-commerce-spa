// this file is just a snippet of the vuex store modules
// copy paste into your newly created module for default setup

const state = {
  products: [
    {
      id: 1,
      name: "Women's Wool Runner",
      desc: "Our weather ready sneaker made with merino wool and purple guard.",
      price: "115",
      category: "women",
      currency: "dollars",
      previewImage:
        "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_632,f_auto,q_auto,c_fill,ar_0.635814889336016/https://images.ctfassets.net/9uo1qvvet3xa/37AjznKN1NGlmJfORFahMM/6746b9962e95ba718fda199e78124647/W_PCT_TD.jpg",
      variant: [
        {
          name: "Geyser (Light Blue Sole)",
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/5j8qUlAiAUaUGHhhAwNUEH/1"
        },
        {
          name: "Quartz (Light Gray Sole)",
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/WBGO4zE8Z7uwVaLNzNVwa/1"
        },
        {
          name: "Thunder (Dark Blue Upper / White Sole)",
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/OrbgtJiuAc7M1yL4KvQjw/1"
        }
      ]
    },
    {
      id: 2,
      name: "Women's Nike Air Jordans 1",
      desc: "Our weather ready sneaker made with merino wool and purple guard.",
      price: "250",
      category: "women",
      currency: "dollars",
      previewImage:
        "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_632,f_auto,q_auto,c_fill,ar_0.635814889336016/https://images.ctfassets.net/9uo1qvvet3xa/2uQxW5KGZdfyo0MsfSi3W6/7821933447f0bcd2b053d042f6bae08a/WDM_Parent_Collection_Tile__1_.jpg",
      variant: [
        {
          name: "Meteorite (Gray Sole)",
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/40z9mI7z1Zi33twT9eYS1z/2"
        },
        {
          name: "Nova (White Sole)",
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/7zH6z1ZICqNsobuE3elfMA/2"
        },
        {
          name: "Cosmos (Dark Gray Sole)",
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/1lH9wZG48OOgFaIKqDOr7w/1"
        }
      ]
    },
    {
      id: 3,
      name: "Men's Wool Dasher",
      desc: "Our weather ready sneaker made with merino wool and purdle guard.",
      price: "135",
      category: "men",
      currency: "dollars",
      previewImage:
        "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_834,f_auto,q_auto,c_fill,ar_0.7433155080213903/https://images.ctfassets.net/9uo1qvvet3xa/6s0mLTD6H0uwtXHz5QYm7D/dfe34a367f616eaa5bf6d281b4382c9c/M_PCT_WRUM.jpg",
      variant: [
        {
          name: "Natural Gray (Gray Sole)",
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/4PFTYW37ZWInAYMw3PELE6/1"
        },
        {
          name: "Savana Night (Navy Sole)",
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/2B0h6umoZeNXMXDgtmwZuP/1"
        },
        {
          name: "Mist (Gray Sole)",
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/6KReTwAZk7Nwf31ULaTGhj/2"
        }
      ]
    },
    {
      id: 4,
      name: "Men's Tree Toppers",
      desc: "Our weather ready sneaker made with Breezy escalptus tree",
      price: "115",
      category: "men",
      currency: "dollars",
      previewImage:
        "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_834,f_auto,q_auto,c_fill,ar_0.7433155080213903/https://images.ctfassets.net/9uo1qvvet3xa/6vD9SXRkgxOvJLMUAjJiZ/ba24507a6857bbbb16febbb41ad9cc26/M_PCT_TT.jpg",
      variant: [
        {
          name: "Charcoal (Charcoal Sole)",
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/5eNSOawaC3MAGzBlTEilzM/1"
        },
        {
          name: "Kauli Jo (Charcoal Upper/ White Sole)",
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/1VavP7SU96pr2Nhc0uV2sm/1"
        },
        {
          name: "Kauli Fiddle Leaf (White Sole)",
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/2P5WWtO77wdAkN7pA7lt1r/1"
        }
      ]
    },
    {
      id: 5,
      name: "Men's Wool Lounger",
      desc: "Our casual slip-on made with cozy merino wool.",
      price: "95",
      category: "men",
      currency: "dollars",
      previewImage:
        "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_834,f_auto,q_auto,c_fill,ar_0.7433155080213903/https://images.ctfassets.net/9uo1qvvet3xa/qEWesAsmoseyOns4Jd0g2/846eff2261676499524be963c6e7f3f4/M_PCT_WL.jpg",
      variant: [
        {
          name: "Natural Gray (Dark Gray Sole)",
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/yPsWLzn2hjaCqPQqGQ0oi/1"
        },
        {
          name: "Dapple Gray (Cream Sole)",
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/1jcmaPAulWI5z5dcae7B30/2"
        },
        {
          name: "True Black (Cream Sole)",
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/5pN9lpmGtz6Tq9yL4aoyA/2"
        }
      ]
    }
  ],
  filteredProducts: [],
  sortedProducts: [],
  loader: false
};
const getters = {
  isLoading(state) {
    return state.loader;
  },
  getProducts(state) {
    return state.products;
  }
};
const mutations = {
  SET_FILTERED_PRODUCTS(state, payload) {
    state.filteredProducts = payload;
  },
  SET_PAGE_LOADER(state, status) {
    state.loader = status;
  },
  SET_SORTED_PRODUCTS(state, payload) {
    state.loader = payload;
  }
};
const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
