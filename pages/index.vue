<template>
  <div class="container">
    <BlockHeader class="TheHeader" />
    <main>
      <section class="slider">
        スライダー
      </section>
    </main>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BlockHeader from '~/components/c1_block/TheHeader.vue'

export default Vue.extend({
  components: {
    BlockHeader
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
.slider {
  position: relative;
}
</style>
