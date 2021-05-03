<template>
  <section class="sec">
    <div class="article-list__outer">
      <ul class="article-list">
        <li class="article-list__card card" v-for="(item,key) in limitArticles" :key="key">
          <figure class="card__image"><img :src="`/images/${item.image}`" alt=""></figure>
          <div class="card__text">
            <p class="card__text__date">{{ dateFormatted(item.date) }}</p>
            <p class="card__text__title">{{ item.title }}</p>
            <p class="card__text__description">{{ descriptionFormatted(item.description) }}</p>
            <ul class="card__text__taglist">
              <li v-for="(cate,key2) in item.category" :key="key2"  class="card__text__taglist__tag"><a>{{ cate }}</a></li>
            </ul>
          </div>
        </li>
      </ul>
      <a class="link">記事一覧へ</a>
    </div>
  </section>
</template>

<script lang="ts">
// "title": "コーニッシュレックスは、ネコの品種の一つ",
// "image": "img_02.jpg",
// "date": "2020/11/04",
// "url": "20201104",
// "description": "コーニッシュレックスは、猫の品種。 イギリス原産で、全身を覆う巻き毛が特徴。",
// "category" : ["info"],
// "pickup": false
import Vue from 'vue'
export default Vue.extend({
  props: {
    articles: {
      type: Array,
      required: true
    }
  },
  computed: {
    limitArticles(){
      return this.articles.slice(0,5);
    },
    dateFormatted(){
      return (date: string): string => {
        const formatted = date.replace(/\//g,'.');
        return formatted;
      }
    },
    descriptionFormatted(){
      return (desc: string): string => {
        const len = desc.length;
        if(len > 75) {
          desc = desc.slice(0,74) + '…';
        }
        return desc;
      }
    },
  }
})
</script>

<style lang="scss" scoped>
.sec {
  background-color: $yellow;
  padding: 12px 14px 32px;
  @include media(m){
    padding: 40px 0 80px;
  }
}
.article-list__outer {
  background: $white;
  padding: 0 12px 32px;
  @include media(m){
    width: 960px;
    margin-right: auto;
    margin-left: auto;
  }
}
.article-list {
  &__card {
    padding: 12px 0;
    border-bottom: 1px $grey solid;
  }
}
.card {
  display: flex;
  &__image {
    width: 50%;
    @include media(m){
      width: 286px;
    }
    img {
      max-width: 100%;
    }
  }
  &__text {
    width: 50%;
    padding-left: 12px;
    @include media(m){
      width: calc(100% - 286px);
      position: relative;
    }
    &__date {
      @include font-for-number;
      font-size: 1.2rem;
      @include media(m){
        font-size: 1.4rem;
      }
    }
    &__title {
      font-size: 1.6rem;
      font-weight: bold;
      line-height: 1.4;
      @include media(m){
        margin-top: 8px;
        font-size: 1.8rem;
      }
    }
    &__description {
      display: none;
      @include media(m){
        margin-top: 8px;
        display: block;
      }
    }
    &__taglist {
      margin-top: 12px;
      @include media(m){
        position: absolute;
        left: 12px;
        bottom: 0;
      }
      &__tag {
        display: inline-block;
        border: 1px $black solid;
        padding: 2px;
      }
    }
  }
}
.link {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
  height: 48px;
  width: 100%;
  background-color: $black;
  color: $white;
  @include media(m){
    width: 150px;
    margin-right: auto;
    margin-left: auto;
  }
}
</style>