import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    plus(state) {
      state.count++;
    }
  },
  actions: {},
  modules: {},
  getters: {
    count(state) {
      return state.count;
    }
  }
});
