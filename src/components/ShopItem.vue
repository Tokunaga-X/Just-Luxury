<template>
  <div class="shopitem">
    <img src alt="pic" class="pic" />
    <div class="des">
      <div class="name">{{name}}</div>
      <div class="price">{{price}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "item",
  props: ["price", "name"]
};
</script>
<style lang="scss">
.shopitem {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 2px solid black;
}
.pic {
  width: 100%;
  height: 80%;
  background: lightcoral;
}
.des {
  width: 100%;
  height: 20%;
  display: flex;
}
.name {
  flex: 1;
}
.price {
  flex: 1;
}
</style>