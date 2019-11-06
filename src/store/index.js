import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 1,
    items: [
      {
        id: 1,
        pic: "",
        name: "RANGYAL ISLAND",
        price: "USD:200,000,000"
      },
      {
        id: 2,
        name: "RANGYAL ISLAND",
        price: "USD:200,000,000"
      }
    ]
  },
  mutations: {
    plus(state, payload) {
      state.count += payload;
    },
    addItem(state, payload) {
      state.items.push(payload);
    },
    deleteItem(state, payload) {
      state.items = state.items.filter(item => {
        return payload != item.id;
      });
    }
  },
  actions: {
    plus(state, payload) {
      state.commit("plus", payload);
    },
    addItem(state, payload) {
      state.commit("addItem", payload);
    },
    deleteItem(state, payload) {
      state.commit("deleteItem", payload);
    }
  },
  modules: {},
  getters: {
    count(state) {
      return state.count;
    },
    getItem(state) {
      return state.items;
    }
  }
});
