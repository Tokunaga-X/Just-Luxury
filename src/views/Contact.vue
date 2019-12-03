<template>
  <div class="page">
    <div class="contact">
      <el-input
        class="input"
        v-model="name"
        placeholder="名字"
        clearable
      ></el-input>
      <el-input
        class="input"
        v-model="phone"
        placeholder="电话"
        clearable
      ></el-input>
      <el-input
        class="input"
        v-model="mail"
        placeholder="邮箱"
        clearable
      ></el-input>
      <el-input
        class="info"
        type="textarea"
        :rows="4"
        v-model="message"
        placeholder="具体信息"
        clearable
      ></el-input>
      <el-button class="btn" type="primary" @click="checkInput"
        >提交你的意见</el-button
      >
    </div>
  </div>
</template>
<script>
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
  methods: {
    checkInput() {
      console.log(this.name, this.phone);
      this.name = "";
      this.phone = "";
    }
  }
};
</script>
<style lang="scss" scoped>
.page {
  margin-top: 35vh;
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
  .info {
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
