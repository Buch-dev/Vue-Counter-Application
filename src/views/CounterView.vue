<template>
  <div class="home container text-center flex flex-col-reverse md:flex-row-reverse justify-between items-center mt-10 p-1 mb-11">
    <div class="counter-app mt-5 md:mt-0 md:w-1/2">
      <div
        :style="{ color: $store.state.colorCode }"
        class="counter font-bold text-7xl md:text-9xl mb-5"
      >
        {{ count }}
      </div>
      <div class="buttons">
        <button
          @click="decrementCount"
          class="bg-blue-900 hover:bg-blue-800 text-white py-3 px-10 mx-2 my-3 rounded font-bold"
        >
          -
        </button>
        <button
          @click="resetValue"
          class="bg-blue-800 hover:bg-blue-900 text-white p-3 mx-2 my-3 rounded font-bold"
        >
          RESET
        </button>
        <button
          @click="incrementCount"
          class="btn bg-blue-900 hover:bg-blue-800 text-white rounded py-3 px-10 mx-2 my-3 focus:outline-none font-bold"
        >
          +
        </button>
      </div>
      <div>
        <input
          class="appearance-none block bg-gray-200 text-gray-700 rounded py-3 px-4 focus:outline-none focus:bg-white border border-gray-200 leading-tight shadow-md sm:w-full md:w-4/5 mx-auto"
          type="text"
          placeholder="Enter color code e.g darkblue"
          v-model="$store.state.colorCode"
        />
        <input type="text" placeholder="Your number" v-model="newValue" class="appearance-none block bg-gray-200 text-gray-700 rounded py-3 px-4 focus:outline-none focus:bg-white border border-gray-200 leading-tight shadow-md sm:w-full md:w-4/5 mx-auto mt-5">
        <button @click="setValue(newValue)" class="bg-blue-800 text-white py-2 px-3 rounded mt-3 hover:bg-blue-900">Set Value</button>
      </div>
    </div>
    <!-- flex 2 -->
    <div class="img md:w-1/2">
        <img
          src="../assets/undraw_in_no_time_-6-igu.svg"
          alt="exam-img"
          class="mx-auto md:w-4/5"
        />
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref } from "vue";

// Reusability with the Composition API
import useCounter from "../composables/useCounter";

export default {
  name: "CounterView",
  setup() {
    const name = ref("");
    const { count, step, incrementCount, decrementCount, resetValue, setValue, newValue } =
      useCounter();

    return {
      name,
      count,
      step,
      incrementCount,
      decrementCount,
      resetValue,
      setValue,
      newValue
    };
  },
};
</script>

<style></style>
