<template>
  <header class="bg-blue-800">
    <div class="container text-white text-center p-4 flex flex-col md:flex-row justify-between">
      <div class="text-2xl font-bold">BuchCOUNTER</div>

      <nav class="mt-3 md:mt-0">
        <router-link to="/" class="uppercase font-bold hover:text-blue-300"
          >Home</router-link
        >
        |
        <router-link to="/about" class="uppercase font-bold hover:text-blue-300"
          >About</router-link
        >
        |
        <router-link
          to="/counter"
          class="uppercase font-bold hover:text-blue-300"
          >Counter</router-link
        >
      </nav>
    </div>
  </header>
</template>

<script>
export default {
    name: "Header"
}
</script>