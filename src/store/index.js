import Vue from "vue";
import Vuex from "vuex";
import shopcar from "./modules/shopcar";
import goods from "./modules/goods";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    shopcar,
    goods
  }
});
