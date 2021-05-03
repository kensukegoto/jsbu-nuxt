<template>
  <section>
    <MidHeading class="title" title="JS部とは？" />
    <h1 class="text">ペルシャは、ネコの品種の一つ。ペルシャ猫。イラン原産。 長毛種の代表的な品種で、古くからショーキャットとして認められる品種の一つである。</h1>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
import MidHeading from '~/components/c4_element/MidHeading.vue';
export default Vue.extend({
  components: {
    MidHeading
  }
})
</script>
<style lang="scss" scoped>

.title {
  text-align: center;
}
.text {
  margin-top: 24px;
  font-weight: normal;
  line-height: 1.6;
  @include media(m){
    width: 700px;
    margin-right: auto;
    margin-left: auto;
  }
}
</style>