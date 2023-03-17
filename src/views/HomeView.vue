<template>
    <div
      class="container flex flex-col-reverse md:flex-row justify-between items-center mt-10 p-3"
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
          Creating a vue js application using the cli. This project is a Counter
          application, consisting of the decrement, increment, reset and
          setValue functions. Its makes use of vuex for the state management
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
          src="../assets/undraw_online_test_re_kyfx.svg"
          alt="exam-img"
          class="md:w-4/5 mx-auto"
        />
      </div>
    </div>
</template>

<script>
import { ref, reactive } from "vue";

export default {
  name: "HomeView",
  setup() {
    const title = ref("Altschool 3rd Semester Examination");

    const features = reactive([
      "decrement",
      "increment",
      "reset and",
      "setValue functions.",
    ]);

    return {
      title,
      features,
    };
  },
};
</script>

<style></style>
