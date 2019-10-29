import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Shop from "../views/Shop";
import Car from "../views/Car";
import Contact from "../views/Contact";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/shop",
    name: "shop",
    component: Shop
  },
  {
    path: "/car",
    name: "car",
    component: Car
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact
  }
];

const router = new VueRouter({
  routes
});

export default router;
