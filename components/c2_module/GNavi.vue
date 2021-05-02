<template>
  <div>
    <div class="gnavi" :class="{'active': active}">
      <ul class="gnavi__lists">
        <li class="gnavi__lists__item item">
          <a class="item__link">ニュース</a>
        </li>
        <li class="gnavi__lists__item item">
          <a class="item__link">部員</a>
        </li>
        <li class="gnavi__lists__item item">
          <a class="item__link">体験入部</a>
        </li>
      </ul>
    </div>
    <a class="burger" :class="{'active': active}" @click="toggle">
      <p>
        <span></span>
        <span></span>
        <span></span>
      </p>
    </a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () => {
    return {
      active: false as boolean
    }
  },
  methods: {
    toggle(e: Event):void {
      this.active = !this.active;
    }
  }
})
</script>
<style lang="scss" scoped>
.gnavi {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1;
  background-color: rgba($black,.9);
  padding: 12px 24px;
  transition: transform .2s;
  &.active {
    transform: translateY(100%);
  }
  @include media(m){
    width: auto;
    position: static;
    z-index: auto;
    transform: translateY(0%)!important;
    transition: none;
    background-color: transparent;
  }
  &__lists {
    @include media(m){
      display: flex!important;
    }
  }
}

.item {

  line-height: 2;
  text-align: center;

  a {
    color: $white;
  }

  @include media(m){
    margin-left: 80px;
    &:first-child{
      margin-left: 0;
    }
    font-size: 1.4rem;
    &__link {
      color: $white;
    }
  }

}

.burger{
  width: 44px;
  height: 44px;
  background: #181818;
  display: flex;
  justify-content: center;
  align-items: center;
  @include media(m){
    display: none;
  }
  p{
    position: relative;
    width: 50%;
    height: 50%;

  }
  span {
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    background-color: $white;
    transition: transform .5s,background-color .5s,opacity .5s;
    &:first-child{
      top: 0;
      left: 0;
      transform-origin: top left;
    }
    &:nth-child(2){
      top: 50%;
      left: 0;
      opacity: 1;
    }
    &:last-child{
      bottom: 0;
      left: 0;
      transform-origin: bottom left;
    }
  }

}
.burger.active{
  background: $white;
  span{
    background: $black;
    &:first-child{
      top: 0;
      left: 0;
      transform-origin: top left;
      transform: translate(2.5px,2.5px) rotate(45deg);
    }
    &:nth-child(2){
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      opacity: 0;
    }
    &:last-child{
      bottom: 0;
      left: 0;
      transform-origin: bottom left;
      // 7としたいが2pxの太さを考慮して5px
      transform: translate(2.5px,-2.5px) rotate(-45deg);
    }
  }
}
</style>