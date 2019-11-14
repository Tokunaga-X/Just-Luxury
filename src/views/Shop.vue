<template>
  <div class="container">
    <div class="topPic"></div>
    <div class="shop">
      <Goods />
    </div>
    <Info />
    <Footer />
  </div>
</template>
<script>
import Goods from "../components/Goods";
import Footer from "../components/Footer";
import Info from "../components/Info";

export default {
  name: "shop",
  components: {
    Goods,
    Footer,
    Info
  }
};
</script>

<style lang="scss" scoped>
.container {
  overflow: hidden;
}
.topPic {
  width: 100vw;
  height: 35vh;
  background: url("../assets/japanstreet.jpg");
  background-size: cover;
  background-position: top;
}
.topPic::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 35vh;
  background: rgba(0, 0, 0, 0.4);
}
.shop {
  width: 100vw;
  height: 100%;
  margin-top: 5vh;
  margin-bottom: 5vh;
  display: flex;
  justify-content: center;
}
</style>
