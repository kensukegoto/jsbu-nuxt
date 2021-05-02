<template>
  <div class="container">
    <TheHeader class="TheHeader" />
    <main>
      <client-only>
        <MVSlider class="MVSlider" />
      </client-only>
    </main>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TheHeader from '~/components/c1_block/TheHeader.vue'
import MVSlider from '~/components/c1_block/MVSlider.vue'

export default Vue.extend({

  components: {
    TheHeader,
    MVSlider
  }
})
</script>

<style lang="scss">
.TheHeader {
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 80px;
}
main {
  padding-top: 80px;
}
.MVSlider{
  width: 100%;
  margin: 40px auto 0;
  @include media(m){
    width: 960px;
    margin-top: 44px;
  }
}
</style>
