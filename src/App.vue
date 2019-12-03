<template>
  <div id="app">
    <Loading v-if="loading" />
    <Nav />
    <div class="content">
      <transition
        name="router-anim"
        mode="out-in"
        enter-active-class="animated fadeIn faster"
        leave-active-class="animated fadeOut faster"
      >
        <router-view />
      </transition>
    </div>
    <Footer />
  </div>
</template>

<script>
import Nav from "./views/Nav";
import Footer from "./views/Footer";
import Loading from "./components/Loading";
export default {
  data() {
    return {
      loading: true
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  },
  components: {
    Nav,
    Footer,
    Loading
  }
};
</script>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css";

* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "ZCOOL XiaoWei", serif;
  font-display: swap;
  text-align: center;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}
</style>
