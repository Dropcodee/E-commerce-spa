<template>
  <div>
    <div class="block w-10/12 mt-20">
      <div>
        <h2 class="my-6 font-semibold text-3xl text-gray-800">Filter By:</h2>
        <hr />
        <div class="my-3">
          <h3 class="font-medium text-gray-600 text-xl">Category</h3>
          <div class="ml-4">
            <label class="inline-flex items-center mt-3">
              <input
                type="checkbox"
                class="form-checkbox h-5 w-5 text-gray-800"
                v-model="category.mens"
              /><span class="ml-2 text-gray-700">Men's Shoes</span>
            </label>
          </div>
          <div class="ml-4">
            <label class="inline-flex items-center mt-3">
              <input
                type="checkbox"
                class="form-checkbox h-5 w-5 text-gray-800"
                v-model="category.womens"
              /><span class="ml-2 text-gray-700">Women's Shoes</span>
            </label>
          </div>
        </div>
      </div>
      <div>
        <hr />
        <h2 class="my-6 text-gray-800 font-semibold text-3xl">Sort by:</h2>
        <hr />
        <div>
          <p class="my-3 text-gray-600 font-medium text-lg">
            Alphabetical Order
          </p>
          <div class="ml-4">
            <div>
              <label class="inline-flex items-center mt-3">
                <input
                  type="checkbox"
                  class="form-checkbox h-5 w-5 text-gray-800"
                  v-model="ascending"
                /><span class="ml-2 text-gray-700">A-Z</span>
              </label>
            </div>
            <div>
              <label class="inline-flex items-center mt-3">
                <input
                  type="checkbox"
                  class="form-checkbox h-5 w-5 text-gray-800"
                  v-model="descending"
                /><span class="ml-2 text-gray-700">Z-A</span>
              </label>
            </div>
          </div>
          <div class="">
            <p class="mt-8 text-gray-600 font-medium text-lg">Price:</p>
            <div
              class="flex items-center justify-between w-10/12 space-x-4 ml-4"
            >
              <div>
                <label class="block mt-3">
                  <span class="ml-2 text-gray-700">From: </span>
                </label>
                <input
                  type="input"
                  class="border-2 w-10/12 py-3 focus:border-gray-800 px-3 focus:outline-none focus:ring-0"
                  v-model="price.from"
                />
              </div>
              <div>
                <label class="block mt-3">
                  <span class="ml-2 text-gray-700">To: </span>
                </label>
                <input
                  type="input"
                  class="border-2 w-10/12 py-3 focus:border-gray-800 px-3 focus:outline-none focus:ring-0"
                  v-model="price.to"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      category: {
        mens: false,
        womens: false
      },
      ascending: false,
      descending: false,
      price: {
        to: "",
        from: 0
      },
      material: ""
    };
  },
  methods: {
    filterBy(payload) {
      console.log("we got here");
      this.$emit("filterProducts", payload);
    },
    sortByAbc(payload) {
      this.$emit("sortByAlpha", payload);
    },
    sortByPrice(payload) {
      this.$emit("priceSort", payload);
    }
  },
  watch: {
    "category.mens": function() {
      let payload = this.category;
      this.filterBy(payload);
    },
    "category.womens": function() {
      let payload = this.category;
      this.filterBy(payload);
    },
    ascending: function(ascending) {
      const payload = {
        ascending,
        descending: false
      };
      this.descending = false;
      this.sortByAbc(payload);
    },
    descending: function(descending) {
      const payload = {
        ascending: false,
        descending
      };
      this.ascending = false;
      this.sortByAbc(payload);
    },
    "price.to": function(priceRange) {
      const payload = {
        from: this.price.from,
        to: priceRange
      };
      this.sortByPrice(payload);
    },
    "price.from": function(priceRange) {
      if (priceRange > 0) {
        const payload = {
          from: this.price.from,
          to: priceRange
        };
        this.sortByPrice(payload);
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
