<template>
  <div class="shopitem">
    <ul>
      <li v-bind:key="good.id" v-for="good in getGoods">
        <div class="pic" @click="drawer = true">
          <img :src="good.pic" @load="loadImage" alt="good.pic" />
        </div>
        <div class="des">
          <p class="name">{{ good.name }}</p>
          <p class="price">{{ good.price }}</p>
          <el-button
            class="plus"
            @click="addtoCar"
            :name="good.name"
            :price="good.price"
            type="success"
            icon="el-icon-check"
            circle
          ></el-button>
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
      </li>
    </ul>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import Iteminfo from "./Iteminfo.vue";
import store from "../store/index.js";

export default {
  name: "item",
  components: {
    Iteminfo
  },
  data() {
    return {
      name: "商品介绍页",
      drawer: false,
      direction: "btt",
      size: "90%",
      imageShow: false
    };
  },
  methods: {
    handleClose(done) {
      done();
    },
    ...mapActions(["fetchGoods"]),
    loadImage() {
      let _this = this;
      _this.show = true;
    },
    addtoCar(e) {
      store.dispatch("addItem", {
        name: e.target.getAttribute("name"),
        price: e.target.getAttribute("price")
      });
    }
  },
  computed: {
    ...mapGetters(["getGoods"])
  },
  created: function() {
    this.fetchGoods();
  }
};
</script>
<style lang="scss" scoped>
.shopitem {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  ul {
    width: 92vw;
    margin: 0 auto;
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
    .pic {
      width: 100%;
      height: 80%;
      overflow: hidden;
      cursor: pointer;
      img {
        width: 120%;
      }
    }
    .des {
      width: 100%;
      height: 20%;
      display: flex;
      flex-direction: column;
      position: relative;
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
      .plus {
        position: absolute;
        top: 20%;
        left: 80%;
      }
    }
    .drawer {
      height: 100%;
    }
  }
}
</style>
