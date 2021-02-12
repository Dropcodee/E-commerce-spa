<template>
  <div id="product-card" class="w-10/12 mx-auto">
    <div class="lg:grid lg:grid-cols-3 lg:gap-10 items-start">
      <div class="hidden lg:block col-span-1">
        <div class="flex justify-between items-center">
          <div>
            <div class="space-x-1 text-gray-900 font-medium">
              <router-link :to="{ name: 'Home' }" class="underline"
                >Home</router-link
              >
              <span>/</span>
            </div>
            <div>
              <p class="font-bold text-gray-900 text-lg">Women's Shoes</p>
            </div>
          </div>
          <div class="flex lg:hidden">
            <button>
              <svg
                class="h-8 w-8 transform rotate-90"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.3"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </button>
          </div>
        </div>
        <SidePanel
          @filterProducts="FilterBy"
          @sortByAlpha="SortByAbc"
          @priceSort="SortByPrice"
        />
      </div>
      <div class="col-span-2">
        <div v-if="showFilter && filteredProducts.length">
          <SingleProduct :products="filteredProducts" />
        </div>
        <div v-else-if="showFilter && !filteredProducts.length">
          <p>Filtered Products Not Currently Available</p>
        </div>
        <div v-else-if="showSorted && sortedProducts.length">
          <SingleProduct :products="sortedProducts" />
        </div>
        <div v-else-if="showSorted && !sortedProducts.length">
          <p>Products Not Currently Available</p>
        </div>
        <div v-else-if="!showFilter">
          <SingleProduct :products="products" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ash from "lodash";
export default {
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  components: {
    SidePanel: () => import("@/components/SidePanelComponent"),
    SingleProduct: () => import("@/components/SingleProductComponent")
  },
  data: () => {
    return {
      filteredProducts: [],
      showFilter: false,
      showSorted: false,
      sortedProducts: []
    };
  },
  computed: {},
  methods: {
    FilterBy(payload) {
      // console.log(payload);
      if (!payload.mens && !payload.womens) {
        this.filteredProducts = [];
        return (this.showFilter = false);
      }
      this.showFilter = true;
      let newProducts = [];
      if (payload.mens) {
        this.products.forEach(product => {
          if (product.category === "men") {
            newProducts.push(product);
          }
        });
      }
      if (payload.womens) {
        console.error("got here");
        this.products.forEach(product => {
          if (product.category === "women") {
            newProducts.push(product);
          }
        });
      }
      console.log(newProducts);
      this.filteredProducts = newProducts;
    },
    SortByAbc(payload) {
      console.log("got to sortby func");
      if (this.filteredProducts.length) {
        let sortedList = [];
        if (payload.ascending) {
          sortedList = ash.sortBy(this.filteredProducts, ["name"], ["asc"]);
          return (this.sortedProducts = sortedList);
        } else if (payload.descending) {
          sortedList = ash.sortBy(this.filteredProducts, ["name"], ["desc"]);
          return (this.sortedProducts = sortedList);
        } else {
          this.showSorted = false;
          this.sortedProducts = [];
        }
      } else {
        let sortedList = [];
        this.showSorted = true;
        if (payload.ascending) {
          sortedList = ash.sortBy(this.products, ["name"], ["asc"]);
          return (this.sortedProducts = sortedList);
        } else if (payload.descending) {
          sortedList = ash.sortBy(this.products, ["name"], ["desc"]);
          return (this.sortedProducts = sortedList);
        } else {
          this.showSorted = false;
          this.sortedProducts = [];
        }
      }
    },
    SortByPrice(payload) {
      console.log("got to price func");
      let sortedProducts = [];
      this.showSorted = true;
      if (this.filteredProducts.length) {
        this.filteredProducts.forEach(product => {
          if (ash.inRange(Number(product.price), payload.from, payload.to)) {
            sortedProducts.push(product);
          }
        });
        return (this.sortedProducts = sortedProducts);
      } else {
        this.products.forEach(product => {
          if (ash.inRange(Number(product.price), payload.from, payload.to)) {
            sortedProducts.push(product);
          }
        });
        return (this.sortedProducts = sortedProducts);
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
