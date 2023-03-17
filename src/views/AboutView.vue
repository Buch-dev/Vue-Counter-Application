<template>
    <div
      class="container p-11 flex flex-col-reverse md:flex-row justify-between items-center mt-16"
    >
      <!-- flex 1 -->
      <div class="home-text md:w-1/2 p-5">
        <h2
          class="font-bold text-3xl text-center md:text-left mt-5 md:mt-0 md:text-5xl text-blue-900"
        >
          {{ title }}
        </h2>
        <p
          class="leading-relaxed my-3 text-gray-700 text-center md:text-left md:w-4/5"
        >
          I'm
          <span class="font-bold text-2xl text-blue-800">Daniel Okafor,</span>
          <br />
          a Frontend Software Developer, I'm a student of Altschool Africa.
          <br />
          I love learning new technologies and building great stuffs
        </p>
        <div class="buttons mt-8 md:mt-5 text-center md:text-left">
          <router-link
            class="bg-blue-800 hover:bg-blue-900 text-white p-3 rounded shadow-xl"
            :to="{ name: 'counter' }"
          >
            Go to Counter
          </router-link>
          <router-link
            class="bg-blue-900 hover:bg-blue-800 text-white p-3 rounded shadow-xl ml-3"
            :to="{ name: 'not-found' }"
          >
            Page 404
          </router-link>
        </div>
      </div>
      <!-- flex 2 -->
      <div class="img md:w-1/2">
        <img
          src="../assets/undraw_profile_re_4a55.svg"
          alt="exam-img"
          class="mx-auto"
        />
      </div>
    </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "AboutView",
  setup() {
    const title = ref("Hi there! 👋🏿");

    return {
      title,
    };
  },
};
</script>
