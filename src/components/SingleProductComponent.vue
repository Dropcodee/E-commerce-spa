<template>
  <div>
    <div v-for="product in products" :key="product.id" class="mb-12">
      <div>
        <h2 class="text-lg font-semibold text-gray-900">
          {{ product.name }}
        </h2>
        <p class="text-left text-gray-500 font-medium">
          {{ product.desc }}
        </p>
      </div>
      <div class="mt-4 md:grid md:grid-cols-2 md:gap-6 md:items-start">
        <div class="shadow-xl">
          <div class="shadow-lg">
            <img :src="product.variant[0].image" alt="" class="w-full" />
            <div class="px-4 py-3">
              <h3 class="font-semibold text-sm py-2 text-gray-900">
                {{ product.name }}
              </h3>
              <p class="text-gray-500 py-2 text-semibold text-sm">
                {{ product.variant[0].name }}
              </p>
              <p class="text-sm text-gray-600">${{ product.price }}</p>
              <div class="flex items-center py-4 space-x-4">
                <button
                  v-for="(variant, index) in product.variant"
                  :key="index"
                  class="border-0"
                >
                  <img :src="variant.image" alt="" class="w-8 h-8" />
                </button>
              </div>
            </div>
            <div class="mt-4 pyw-full border-t-2">
              <button
                class="w-full py-3 px-4 flex justify-between items-center text-sm"
              >
                <span>Quick Add</span>
                <span>
                  <svg
                    class="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div class="hidden md:block">
          <div>
            <img :src="product.previewImage" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped></style>
