<template>
  <header class="header">
    <div class="header__inner">
      <TheLogo class="TheLogo"/>
      <GNavi class="GNavi" />
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import TheLogo from '~/components/c4_element/TheLogo.vue'
import GNavi from '~/components/c2_module/GNavi.vue'
export default Vue.extend({
  name: 'TheHeader',
  components: {
    TheLogo,
    GNavi
  }
})
</script>

<style lang="scss" scoped>
.header{
  
  @include media(m){
    background-color: $black;
  }

  &__inner {
    background-color: $black;
    position: relative;
    padding: 14px 12px;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @include media(m){
      width: 960px;
      padding: 14px 0;
    }
  }
}
.TheLogo {
  height: 48px;
}
</style>