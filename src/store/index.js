import Vue from "vue";
import Vuex from "vuex";
import carItems from "./modules/carItems.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    carItems
  }
});
