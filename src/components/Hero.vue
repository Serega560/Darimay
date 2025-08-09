<script setup>
import {Swiper, SwiperSlide} from 'swiper/vue'
import {Pagination} from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

const modules = [Pagination]

const creamItems =[
  {
    id: 1,
    label: "The nature",
    description: "Откройте силу растений и минералов — естественная забота о вашей коже.",
    img: "photo_all.png"
  },
  // {
  //   id: 2,
  //   label: "The der",
  //   description: "Откройте силу растений и минералов",
  //   img: "photo_1.png"
  // },
  // {
  //   id: 3,
  //   label: "The grunt",
  //   description: "Откройте силу растений и минералов — естественная забота о вашей коже, естественная забота о вашей коже",
  //   img: "photo_2.png"
  // },
  // {
  //   id: 4,
  //   label: "The grunt",
  //   description: "Откройте силу растений и минералов — естественная забота о вашей коже, естественная забота о вашей коже",
  //   img: "photo_3.png"
  // },
].map(item => ({
  ...item,
  webp1x: new URL(`../assets/img/${item.img}?format=webp&width=400`, import.meta.url).href,
  webp2x: new URL(`../assets/img/${item.img}?format=webp&width=800`, import.meta.url).href,
  fallback: new URL(`../assets/img/${item.img}?width=400`, import.meta.url).href
}))

</script>

<template>
  <div class="hero">
    <div class="container">
      <h1 class="hero__title visually-hidden">Интернет магазин по продаже косметики премиум сегмента</h1>

      <Swiper class="work__swiper"
              :modules="modules"
              :loop="false"
              :slides-per-view="1"
              :grabCursor="true"
              :pagination="{
                el: '.custom-swiper-pagination',
                clickable: true
               }"
              :space-between="10"
      >
        <SwiperSlide v-for="(creamItem, idx) in creamItems" :key="idx">
          <div class="hero__block">
            <picture>
              <source :srcset="`${creamItem.webp1x} 1x, ${creamItem.webp2x} 2x`" type="image/webp"/>
              <img :data-src="creamItem.fallback" width="auto" height="416" alt="крем-новинка"/>
            </picture>
            <div class="hero__content">
              <span>Новинка</span>
              <h2 class="hero__title">{{ creamItem.label }}</h2>
              <p class="hero__description">{{ creamItem.description }}</p>
              <a class="hero__button button" href="#catalog">Каталог</a>
            </div>
          </div>
        </SwiperSlide>
<!--        <div class="custom-swiper-pagination"></div>-->

      </Swiper>

    </div>
  </div>

</template>

<style scoped lang="scss">
@use '@/assets/styles/media.scss' as *;
@use '@/assets/styles/container.scss' as *;

.hero {
  padding-top: 65px;
  padding-bottom: 80px;

  .hero__block {
    display: grid;
    grid-template-columns: 600px 1fr;

    img {
      justify-self: center;
    }

    .hero__content {
      align-self: end;

      span {
        font-size: 16px;
      }

      .hero__title {
        font-size: 40px;
        font-weight: 700;
      }

      .hero__description {
        font-size: 18px;
        font-weight: 400;
        margin-bottom: 20px;
      }

      .button {
        font-size: 18px;
        padding: 10px 64px;
        background-color: var(--color-default-black);
        color: var(--color-default-white);
        transition: color 0.4s, background-color 0.4s;

        &:hover {
          cursor: pointer;
          color: var(--color-default-white);
          background-color: var(--color-bright-grey);

          @include vp-767 {
            color: var(--color-bright-grey);
          }
        }

        &:active {
          color: var(--color-default-black);
          background-color: var(--color-default-white);

          @include vp-767 {
            color: var(--color-bright-grey);
          }
        }
      }
    }
  }
}


.custom-swiper-pagination {
  margin-top: 80px;
  display: flex;
  justify-content: center;
  height: 12px;
  align-items: center;

  ::v-deep(.swiper-pagination-bullet) {
    width: 8px;
    height: 8px;
    padding: 2px;
    background: var(--color-bright-grey);
    opacity: 1;
    margin: 0 6px;
    border-radius: 50%;
    transition: all 0.3s ease;
  }

  ::v-deep(.swiper-pagination-bullet-active) {
    background: var(--color-default-black);
    transform: scale(1.5);
  }

  :deep(.swiper-slide-active) {

    img {
      transform: scale(1.2);
    }
  }

  @include vp-767 {
    display: none;
  }
}

</style>
