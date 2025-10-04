<script setup>
import { computed} from 'vue'
import {useRoute} from 'vue-router'
import {creams} from '../data/creams.js'
const route = useRoute()
const creamId = computed(() => Number(route.params.id))
const cream = computed(() => creams.find(c => c.id === creamId.value) || {})
</script>

<template>
  <div class="product">
    <h2 class="product__title">О продукте</h2>
    <h3 class="product__title-cream">{{cream.info.name}}</h3>
      <p class="product__text">{{cream.info.advertising}}</p>
      <p class="product__text">{{ cream.info.advantages }}</p>
      <p class="product__text">{{cream.info.descriptionAdvantages}}</p>
      <p class="product__text">{{cream.info.choice}}</p>
      <p class="product__text">{{cream.info.choiceAdvantages}}</p>
      <p class="product__text">{{cream.info.way}}</p>
      <p class="product__text">{{cream.info.wayAdvantages}}</p>
      <p class="product__text">{{cream.info.add_1}}</p>
      <p class="product__text">{{cream.info.add_2}}</p>
      <p class="product__text">{{cream.info.add_3}}</p>
      <p class="product__text">{{cream.info.add_4}}</p>
      <p class="product__text">{{cream.info.add_5}}</p>
      <p class="product__title-cream">{{cream.info.application}}</p>
      <p class="product__text">{{cream.info.applicationDescription}}</p>
  </div>
</template>

<style scoped lang="scss">

@use "@/assets/styles/media.scss" as *;
@use '@/assets/styles/container.scss' as *;

.product {
  padding: 60px 0;

  @include vp-767 {
    padding: 40px 0;
  }

  .product__title {
    text-align: center;
    font-size: 24px;
    margin-bottom: 20px;

    @include vp-767 {
      font-size: 32px;
    }
  }

  .product__title-cream {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 20px;
    line-height: 20px;

    @include vp-767 {
      font-size: 14px;
    }
  }

  .product__text {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 20px;
    line-height: 20px;

    @include vp-767 {
      font-size: 14px;
      line-height: 14px;
      margin-bottom: 15px;
    }
  }
}

</style>
