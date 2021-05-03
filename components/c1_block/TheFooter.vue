<template>
  <footer>
    <div class="toTop" @click="toTop">&#9650; ページ上部へ戻る</div>
    <div class="footer">©️JS部</div>
  </footer>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    toTop: () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
})
</script>
<style lang="scss" scoped>
.toTop,
.footer {
  height: 48px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: $white;
}
.toTop {
  background-color: $greyDark;
}
.footer {
  background-color: $black;
}
</style>