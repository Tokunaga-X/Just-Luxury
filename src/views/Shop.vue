<template>
  <div class="container">
    <div class="topPic"></div>
    <div class="shop">
      <ul>
        <Item name="RANGYAL ISLAND" price="USD:200,000,000" />
        <Item name="RANGYAL ISLAND" price="USD:200,000,000" />
        <Item name="RANGYAL ISLAND" price="USD:200,000,000" />
        <Item name="RANGYAL ISLAND" price="USD:200,000,000" />
        <Item name="RANGYAL ISLAND" price="USD:200,000,000" />
        <Item name="RANGYAL ISLAND" price="USD:200,000,000" />
        <Item name="RANGYAL ISLAND" price="USD:200,000,000" />
      </ul>
    </div>
    <Info />
    <Footer />
  </div>
</template>
<script>
import Item from "../components/ShopItem";
import Footer from "../components/Footer";
import Info from "../components/Info";
// import store from "../store/index";
export default {
  name: "shop",
  components: {
    Item,
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
  ul {
    width: 92vw;
    margin-right: 2vh;
    height: 100%;
    display: grid;
    list-style: none;
    grid-template-columns: repeat(3, 1fr);
    @media screen and (max-width: 1200px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 600px) {
      grid-template-columns: repeat(1, 1fr);
    }
    grid-gap: 2vw;
    grid-auto-rows: 46vh;
  }
}
</style>