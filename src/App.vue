<template>
  <div class="">
    <Header />
    <router-view />
    <Footer class="mt-10" />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");

body {
  font-family: "Open Sans", sans-serif;
}

nav a.router-link-exact-active {
  color: rgb(176, 176, 235);
}
</style>
