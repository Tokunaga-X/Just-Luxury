<template>
  <div class="upSwiper">
    <swiper :option="swiperOption">
      <swiper-slide class="us1 us">
        <p class="introWordSmall animated fadeInUp delay1">奢华 | 之美</p>
        <p class="introWordBig animated fadeInUp delay2">无与伦比 一 享受</p>
      </swiper-slide>
      <swiper-slide class="us2 us">
        <p class="introWordSmall animated fadeInUp delay1">奢华 | 之美</p>
        <p class="introWordBig animated fadeInUp delay2">无与伦比 一 享受</p>
      </swiper-slide>
      <swiper-slide class="us3 us">
        <p class="introWordSmall animated fadeInUp delay1">奢华 | 之美</p>
        <p class="introWordBig animated fadeInUp delay2">无与伦比 一 享受</p>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {},
      on: {
        init: function() {
        }
      }
    };
  }
};
</script>
<style lang="scss">
.us {
  width: 100vw;
  height: 90vh;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  .introWordSmall {
    font-weight: 100;
    font-size: 1.5rem;
  }
  .introWordBig {
    font-weight: bolder;
    font-size: 6rem;
  }
  p {
    z-index: 4;
    margin: 0.5rem;
  }
}
.us::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(1, 1, 1, 0.3);
}
.delay1 {
  animation-delay: 1s;
}
.delay2 {
  animation-delay: 2s;
}
.us1 {
  background-image: url("../assets/house.jpg");
}
.us2 {
  background-image: url("../assets/boat.jpg");
}
.us3 {
  background-image: url("../assets/car.jpg");
}
</style>