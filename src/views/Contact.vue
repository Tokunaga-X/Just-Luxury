<template>
  <div>
    <div class="topPic"></div>
    <div class="contact">
      <el-input class="input" v-model="name" placeholder="名字" clearable></el-input>
      <el-input class="input" v-model="phone" placeholder="电话" clearable></el-input>
      <el-input class="input" v-model="mail" placeholder="邮箱" clearable></el-input>
      <el-input
        class="input"
        type="textarea"
        :rows="4"
        v-model="message"
        placeholder="具体信息"
        clearable
      ></el-input>
      <el-button type="primary">提交你的意见</el-button>
    </div>
    <Footer />
  </div>
</template>
<script>
import Footer from "../components/Footer";

export default {
  data() {
    return {
      name: "",
      phone: "",
      mail: "",
      message: ""
    };
  },
  name: "contact",
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
.contact {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
  width: 100vw;
  .input {
    max-width: 50rem;
    margin: 0.5rem;
    @media screen and (max-width: 1000px) {
      max-width: 30rem;
    }
    @media screen and (max-width: 600px) {
      max-width: 20rem;
    }
  }
}
</style>