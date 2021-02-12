<template>
  <div id="app">
    <div id="nav">
      <NavbarComponent />
    </div>
    <main class="mt-24">
      <router-view />
    </main>
    <footer>
      <FooterComponent />
    </footer>
  </div>
</template>
<script>
import NavbarComponent from "@/components/NavbarComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
export default {
  components: {
    NavbarComponent,
    FooterComponent
  }
};
</script>
<style lang="scss"></style>
