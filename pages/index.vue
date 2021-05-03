<template>
  <div class="container">
    <TheHeader class="TheHeader" />
    <main>
      <MVSlider class="MVSlider" :pickup="pickup" />
      <AboutJSbu class="AboutJSbu" />
      <ArticleList class="ArticleList" :articles="all" />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TheHeader from '~/components/c1_block/TheHeader.vue'
import MVSlider from '~/components/c1_block/MVSlider.vue'
import AboutJSbu from '~/components/c1_block/AboutJSbu.vue'
import ArticleList from '~/components/c1_block/ArticleList.vue'

export default Vue.extend({

  components: {
    TheHeader,
    MVSlider,
    AboutJSbu,
    ArticleList
  },
  computed: {
    all(){
      return this.$store.getters['items/items'].all;
    },
    pickup(){
      return this.$store.getters['items/items'].pickup;
    }
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
.AboutJSbu{
  margin: 32px 14px 0;
  @include media(m){
    width: 960px;
    margin-right: auto;
    margin-left: auto;
  }
}
.ArticleList{
  margin-top: 32px;
}
</style>
