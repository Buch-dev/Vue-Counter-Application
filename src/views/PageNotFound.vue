<template>
  <div class="container flex flex-col items-center mt-10">
    <h1 class="text-3xl mb-3">Sorry, this page does not exit</h1>
    <router-link
      class="btn bg-blue-500 hover:bg-blue-400 text-white py-2 px-3 rounded mb-80"
      :to="{ name: 'home' }"
      >Back to Home</router-link
    >
  </div>
</template>
