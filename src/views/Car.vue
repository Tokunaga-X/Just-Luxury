<template>
  <div>
    <div class="topPic"></div>
    <div class="car"></div>
    <div class="circle">0</div>
    <Footer />
  </div>
</template>
<script>
import Footer from "../components/Footer";

export default {
  data() {
    return {};
  },
  name: "car",
  components: {
    Footer
  }
};
</script>
<style lang="scss" scoped>
.topPic {
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
.car {
  margin-top: 13vh;
  width: 100vw;
  height: 100%;
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
</style>