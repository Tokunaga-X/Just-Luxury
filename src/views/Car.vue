<template>
  <div class="page">
    <div class="car">
      <div class="top">
        <div class="top1">Picture</div>
        <div class="top2">Name</div>
        <div class="top3">Price</div>
        <div class="top4">Options</div>
      </div>
      <div class="items" v-bind:key="item.id" v-for="item in getItems">
        <div class="picture">{{ item.pic }}</div>
        <div class="name">{{ item.name }}</div>
        <div class="price">{{ item.price }}</div>
        <div class="btns">
          <el-button
            @click="deleteItem(item._id)"
            type="danger"
            icon="el-icon-delete"
            circle
          ></el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import store from "../store/index.js";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "car",

  computed: {
    ...mapGetters(["getItems"]),
    count() {
      return store.getters.getCount;
    }
  },
  methods: {
    ...mapActions(["fetchItems"]),
    deleteItem(id) {
      store.dispatch("deleteItem", id);
    }
  },
  created() {
    this.fetchItems();
  }
};
</script>
<style lang="scss" scoped>
.page {
  margin-top: 35vh;
}
.car {
  width: 100vw;
  min-height: 48vh;
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  .top {
    display: flex;
    width: 80vw;
    margin: 1rem auto;

    .top1,
    .top2,
    .top3,
    .top4 {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .items {
    margin: 1rem auto;
    width: 80vw;
    height: 15vh;
    border-top: 2px solid rgba(0, 0, 0, 0.2);
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    .picture,
    .name,
    .price,
    .btns {
      flex: 1;
    }
    .name {
      font-size: 1.2rem;
      font-weight: bold;
    }
  }
}
</style>
