<template>
  <header>
    <div class="inner">
      <TheLogo class="logo"/>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import TheLogo from '~/components/c4_element/TheLogo.vue'
export default Vue.extend({
  components: {
    TheLogo
  }
})
</script>

<style lang="scss" scoped>
header{
  position: relative;
  z-index: 10;
  height: 80px;
  background-color: $black;
  .inner {
    padding: 14px 12px;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    @include media(m){
      width: 960px;
      padding: 14px 0;
    }
    .logo {
      height: 48px;
    }
  }
}
</style>