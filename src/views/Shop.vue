<template>
  <div class="container page">
    <div class="shop">
      <Goods />
    </div>
    <Info />
  </div>
</template>
<script>
import Goods from "../components/Goods";
import Info from "../components/Info";

export default {
  name: "shop",
  components: {
    Goods,
    Info
  }
};
</script>

<style lang="scss" scoped>
.container {
  overflow: hidden;
  margin-top: 35vh;
}

.shop {
  width: 100vw;
  min-height: 43vh;
  margin-top: 5vh;
  margin-bottom: 5vh;
  display: flex;
  justify-content: center;
}
</style>
