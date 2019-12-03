<template>
  <div class="navContainer">
    <nav>
      <img
        src="../assets/logo2.png"
        @load="loadImage"
        alt="logo"
        title="logo"
      />
      <ul>
        <li class="animated fadeInDown delay1">
          <router-link to="/">主页</router-link>
        </li>
        <li class="animated fadeInDown delay2">
          <router-link to="/shop">选购</router-link>
        </li>
        <li class="animated fadeInDown delay3">
          <router-link to="/car">购物车</router-link>
        </li>
        <li class="animated fadeInDown delay4">
          <router-link to="/contact">联系</router-link>
        </li>
      </ul>
    </nav>
    <div class="topPic"></div>
  </div>
</template>
<script>
export default {
  name: "pageNav",
  methods: {
    loadImage() {
      this.imageShow = true;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css";
nav {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(1, 1, 1, 0.3);
  z-index: 5;
  width: 100vw;
  height: 12vh;
  display: flex;
  justify-content: center;
  align-items: center;
  ul {
    width: 100%;
    display: flex;
    justify-content: center;
    list-style: none;
    li {
      flex: 1;
      font-size: 1rem;
      z-index: 3;
      position: relative;
      a {
        text-decoration: none;
        color: white;
        letter-spacing: 2px;
        padding: 0.5rem;
        transition: all 0.5s ease;
        // &::after {
        //   content: "";
        //   width: 100%;
        //   height: 2px;
        //   background-color: crimson;
        //   left: 0;
        //   position: absolute;
        //   transform: scaleX(0);
        //   transition: all 0.5s;
        // }
        // &::before {
        //   top: 0;
        //   transform-origin: left;
        // }
        // &::after {
        //   bottom: 0;
        //   transform-origin: right;
        // }
        // &:hover::before,
        // &:hover::after {
        //   transform: scaleX(1);
        // }
      }
    }
    .delay1 {
      animation-delay: 0.5s;
    }
    .delay2 {
      animation-delay: 1s;
    }
    .delay3 {
      animation-delay: 1.5s;
    }
    .delay4 {
      animation-delay: 2s;
    }
  }
  img {
    flex: 1;
    padding-left: 5vw;
  }
}
.topPic {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
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
</style>
