<template>
  <div>
    <div class="topPic"></div>
    <div class="shop">
      <ul>
        <Item name="house" price="100" />
        <Item name="car" price="10" />
        <Item name="boat" price="50" />
        <Item name="house2" price="200" />
        <Item name="car2" price="200" />
        <Item name="boat2" price="200" />
        <Item name="boat2" price="200" />
      </ul>
      <div class="circle">{{count}}</div>
      <el-button type="primary" @click="plus">++</el-button>
    </div>
    <Footer />
  </div>
</template>
<script>
import Item from "../components/ShopItem";
import Footer from "../components/Footer";
import store from "../store/index";
export default {
  name: "shop",
  components: {
    Item,
    Footer
  },
  computed: {
    count() {
      return store.getters.count;
    }
  },
  methods: {
    plus() {
      store.commit("plus");
    }
  }
};
</script>

<style lang="scss" scoped>
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
  display: flex;
  flex-direction: column;
  ul {
    width: 100vw;
    height: 100%;
    display: grid;
    list-style: none;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0.5rem;
    grid-auto-rows: 45vh;
  }
  .circle {
    position: fixed;
    top: 13%;
    left: 50%;
    width: 2rem;
    height: 2rem;
    display: flex;
    font-size: 1.5rem;
    color: white;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 2px solid black;
  }
}
</style>