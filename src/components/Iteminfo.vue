<template>
  <div class="Iteminfo">
    <div class="upcontainer">
      <Itemswiper class="left" />
      <div class="right">
        <h1>house</h1>
        <h2>200,000,000</h2>
      </div>
    </div>
    <div class="downcontainer">
      <p>This house is insane! You can see it from the picture.</p>
    </div>
  </div>
</template>
<script>
import Itemswiper from "./Itemswiper";

export default {
  name: "Iteminfo",
  components: {
    Itemswiper
  }
};
</script>
<style lang="scss" scoped>
.Iteminfo {
  display: flex;
  flex-direction: column;
  margin: 1rem;
  .upcontainer {
    display: flex;
    flex: 1;
    .left {
      flex: 3;
    }
    .right {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 2;
    }
  }
  .downcontainer {
    background: black;
  }
}
</style>
