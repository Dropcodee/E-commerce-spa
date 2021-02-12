<template>
  <div class="home">
    <div class="flex justify-between items-center px-8 py-4 lg:hidden">
      <div>
        <div class="space-x-1 text-gray-900 font-medium">
          <router-link :to="{ name: 'Home' }" class="underline"
            >Home</router-link
          >
          <span>/</span>
        </div>
        <div><p class="font-bold text-gray-900 text-lg">Women's Shoes</p></div>
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
    <div class="px-8 py-16">
      <ProductCard :products="getProducts" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Home",
  components: {
    ProductCard: () => import("@/components/ProductCardComponent")
  },
  data: () => {
    return {};
  },
  computed: {
    ...mapGetters("products", ["getProducts"])
  }
};
</script>
