import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0,
    inputValue: '',
    colorCode: ''
  },
  // mutations are operations that actually mutate the state.
  mutations: {
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    },
    reset(state) {
      state.count = 0
    },
    setValue(state) {
      state.count = state.inputValue
    }
  },
  // actions are functions that cause side effects and can involve asynchronous operations
  actions: {
    increment: ({ commit }) => commit('increment'),
    decrement: ({ commit }) => commit('decrement'),
    incrementIfOdd({ commit, state }) {
      if ((state.count + 1) % 2 === 0) {
        commit('increment')
      }
    },
    incrementAsync({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('increment')
          resolve()
        }, 1000);
      })
    },
    
  },
  // getters are functions
  getters: {
    evenOrOdd(state) { state.count % 2 === 0 ? 'even' : 'odd' }
  },
  modules: {
  }
})
