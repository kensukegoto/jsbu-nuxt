<template>
  <section class="slider__outer">
    <div class="slider">
      <div class="slider__inner">
        <swiper :options="swiperOption">
          <swiper-slide>
            <div class="card">
              <img src="/images/img_01.jpg" alt="">
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="card">
              <img src="/images/img_02.jpg" alt="">
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="card">
              <img src="/images/img_03.jpg" alt="">
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="card">
              <img src="/images/img_04.jpg" alt="">
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="card">
              <img src="/images/img_05.jpg" alt="">
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="slider__pagination"></div>
    </div>
    <a class="slider__button slider__button-next"><img src="/images/arrow-next.png" alt=""></a>
    <a class="slider__button slider__button-prev"><img src="/images/arrow-prev.png" alt=""></a>
  </section>
</template>

<script lang="ts">
// Nuxtにvue-awesome-swiperを入れてスライドショーを実装する
// https://mykii.blog/nuxt-vue-awesome-swiper/
import Vue from 'vue'
export default Vue.extend({
  data: () => {
    return {
      swiperOption: {
        // autoplay: {
        //   delay: 2500,
        //   disableOnInteraction: false,
        // },
        slidesPerView: 1,
        loop: true,
        breakpoints: {
          560: {
            centeredSlides: true,
            spaceBetween: 28,
            slidesPerView: 3,
          },
        },
        pagination: { 
          clickable: true,
          el: '.slider__pagination'
        },
        navigation: {
          nextEl: '.slider__button-next',
          prevEl: '.slider__button-prev'
        }
      },
    }
  },
})
</script>
<style lang="scss" scoped>

$wCard: 464px;
$marginCard: 28px;

.slider {

  position: relative;
  background-color: $yellow;
  padding-bottom: 40px;
  overflow: hidden;
  
  @include media(m){
    height: 350px;
    padding-top: 28px;
    padding-bottom: 60px;
  }

  &__outer{
    position: relative;
  }

  &__inner {
    @include media(m){
      position: absolute;
      top: 28px;
      left: 50%;
      transform: translateX(-50%);
      width: calc(#{$wCard} * 3 + #{$marginCard} * 2);
    }
  }
}

.card {
  @include media(m){
    width: $wCard;
  }
  img {
    max-width: 100%;
  }
}

.slider .slider__pagination{
  position: absolute;
  z-index: 1;
  bottom: 14px;
  left: 50%;
  transform: translateX(-50%);
  @include media(m){
    bottom: 20px;
  }

}

.slider__button{

  display: none;

  @include media(m){
    display: block;
    width: 48px;
    height: 48px;
    background: $black;
    position: absolute;
    top: 50%;
    transform: translate(0,-50%);
  }

  span {
    display: block;
    width: 100%;
    height: 100%;
    &::before {
      content: "";
      display: block;
      width: 100%;
      height: 2px;
      background: $white;
    }
  }
  &::after{
    color: $white;
    font-size: 36px;
  }
  &-next {
    right: 0;
    @include media(l){
      transform: translate(50%,-50%);
    }
  }
  &-prev {
    left: 0;
    @include media(l){
      transform: translate(-50%,-50%);
    }
  }

}
</style>

<style lang="scss">
.swiper-pagination-bullet {
  background-color: $white;
  margin-right: 8px;
  opacity: 1;
  &-active{
    background-color: $kkk;
  }
  &:last-child{
    margin-right: 0;
  }
}

</style>