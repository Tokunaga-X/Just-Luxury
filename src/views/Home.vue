<template>
  <div class="home">
    <Swiper />
    <div class="container">
      <div class="selectContainer">
        <el-select v-model="value1" placeholder="奢侈品类别" class="select">
          <el-option
            v-for="item in options1"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-select v-model="value2" placeholder="心里价位" class="select">
          <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div class="btnContainer">
        <router-link to="/shop">
          <el-button type="success" class="btn">帮我查找</el-button>
        </router-link>
      </div>
    </div>
    <Intro />
  </div>
</template>

<script>
import Swiper from "../components/upSwiper";
import Intro from "../components/Intro";
export default {
  name: "home",
  data() {
    return {
      options1: [
        {
          value: "All",
          label: "All"
        },
        {
          value: "House",
          label: "House"
        },
        {
          value: "Car",
          label: "Car"
        },
        {
          value: "Boat",
          label: "Boat"
        }
      ],
      options2: [
        {
          value: "Whatever",
          label: "Whatever"
        },
        {
          value: "0-10000($)",
          label: "0-10000($)"
        },
        {
          value: "1w-100w($)",
          label: "1w-100w($)"
        },
        {
          value: "100w-1000w($)",
          label: "100w-1000w($)"
        }
      ],
      value1: "",
      value2: ""
    };
  },
  components: {
    Swiper,
    Intro
  }
};
</script>
<style lang="scss" scoped>
.home {
  overflow: hidden;
}
.container {
  width: 70vw;
  height: 30vh;
  background: #222222;
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .selectContainer {
    display: flex;
    .select {
      margin: 1.5rem;
    }
    @media screen and (max-width: 800px) {
      flex-direction: column;
      .select {
        margin: 0.75rem;
      }
    }
  }
  .btnContainer {
    margin: 0.5rem;
    .btn {
      background: transparent;
      letter-spacing: 2px;
      &:hover {
        transition: all 0.25s ease;
        background: green;
        border: none;
      }
    }
  }
}
</style>
