<template>
  <h2>{{ title }}</h2>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true
    }
  }
})
</script>
<style lang="scss" scoped>
h2 {
  font-size: 2rem;
  @include media(m){
    font-size: 2.4rem;
  }
}
</style>