<template>
  <nuxt-link to="/"><img src="/images/logo.png" alt=""></nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'TheLogo'
})
</script>

<style lang="scss" scoped>
img {
  max-height: 100%;
}
</style>