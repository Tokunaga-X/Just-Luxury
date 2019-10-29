<template>
  <div id="app">
    <Nav />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Nav from "./views/Nav";
export default {
  components: {
    Nav
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "ZCOOL XiaoWei", serif;
  text-align: center;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}
</style>
