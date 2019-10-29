<template>
  <div class="home">
    <Swiper />
    <Intro />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Swiper from "../components/upSwiper";
import Intro from "../components/Intro";
import Footer from "../components/Footer";
export default {
  name: "home",
  components: {
    Swiper,
    Intro,
    Footer
  }
};
</script>
<style lang="scss" scoped>
</style>
