<template>
  <div class="container">
    <swiper :options="swiperOption" ref="swiperTop">
      <swiper-slide class="swiper swiper1"></swiper-slide>
      <swiper-slide class="swiper swiper2"></swiper-slide>
      <swiper-slide class="swiper swiper3"></swiper-slide>
    </swiper>
    <swiper
      :options="swiperOptionThumbs"
      class="gallery-thumbs"
      ref="swiperThumbs"
    >
      <swiper-slide class="swiper swiper1"></swiper-slide>
      <swiper-slide class="swiper swiper2"></swiper-slide>
      <swiper-slide class="swiper swiper3"></swiper-slide>
    </swiper>
  </div>
</template>
<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "Itemswiper",
  data() {
    return {
      swiperOption: {
        spaceBetween: 10
      },
      swiperOptionThumbs: {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: "auto",
        touchRatio: 0.2,
        slideToClickedSlide: true
      }
    };
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.swiper;
      const swiperThumbs = this.$refs.swiperThumbs.swiper;
      swiperTop.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperTop;
    });
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>
<style lang="scss" scoped>
.container {
  width: 50%;
  background: gray;
  margin: 0 auto;
  .swiper {
    background-size: cover;
    background-position: center;
    height: 40vh;
    background-image: url("../assets/house.jpg");
  }
  .gallery-thumbs {
    height: 20vh !important;
    box-sizing: border-box;
    padding: 10px 0;
  }
  .gallery-thumbs .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
  }
  .gallery-thumbs .swiper-slide-active {
    opacity: 1;
  }
}
</style>
