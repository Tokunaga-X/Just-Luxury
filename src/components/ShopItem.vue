<template>
  <div class="shopitem">
    <div class="pic" @click="drawer = true"></div>
    <div class="des">
      <p class="name">{{ name }}</p>
      <p class="price">{{ price }}</p>
    </div>
    <el-drawer
      v-bind:title="name"
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose"
      :size="size"
      class="drawer"
    >
      <Iteminfo />
    </el-drawer>
  </div>
</template>
<script>
import Iteminfo from "./Iteminfo.vue";
export default {
  components: {
    Iteminfo
  },
  data() {
    return {
      drawer: false,
      direction: "btt",
      size: "90%"
    };
  },
  name: "item",
  props: ["price", "name"]
};
</script>
<style lang="scss" scoped>
.shopitem {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  // border: 2px solid black;
}
.pic {
  width: 100%;
  height: 80%;
  background-image: url("../assets/item-house1.jpg");
  background-size: cover;
  background-position: center;
  cursor: pointer;
}
.des {
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
}
.name {
  margin-left: 1rem;
  margin-top: 1rem;
  width: 60%;
  font-size: 1.5rem;
  text-align: left;
  flex: 1;
  cursor: pointer;
  // background: black;
}
.price {
  height: 100%;
  flex: 1;
  width: 100%;
  cursor: default;
  text-align: left;
  margin-left: 1rem;
  margin-top: 0.5rem;
}
.drawer {
  height: 100%;
}
</style>
