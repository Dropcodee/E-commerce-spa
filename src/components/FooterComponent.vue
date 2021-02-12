<template>
  <div>
    <div class="bg-gray-800 py-12">
      <div class="px-6">
        <form action="">
          <div>
            <label for="email_address" class="text-gray-400"
              >Sign Up For Our Newsletter.</label
            >
            <div class="mt-2 relative">
              <input
                type="text"
                class="block w-full text-white bg-gray-600 py-3 focus:ring-0 transition border-2 border-transparent focus:border-white"
              />
              <div
                class="pointer-events-none absolute inset-0 border-b-2 border-gray-200"
                aria-hidden
              ></div>
            </div>
          </div>
          <div class="mt-6">
            <button
              type="submit"
              class="font-bold bg-gray-600 px-4 py-3 w-full uppercase tracking-widest text-gray-200 block focus:text-gray-900 focus:bg-white hover:bg-white focus:outline-none transition ease-in-out duration-500"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
