<script setup>
import {useRouter, useRoute} from 'vue-router'

const router = useRouter()
const route = useRoute()

const menuItems = [
  {label: 'Главная', action: () => router.push('/')},
  {label: 'Каталог', action: goToCatalog},
  {label: 'Отзывы', action: scrollToReviews},
  {label: 'O бренде', action: () => document.getElementById('brand')?.scrollIntoView({behavior: 'smooth'})}
]

function scrollToReviews() {
  if (route.path.startsWith('/cream/')) {
    // на странице продукта
    const el = document.getElementById('rating-reviews')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  } else if (route.path === '/') {
    // на главной странице
    const el = document.getElementById('reviews')
    if (el) el.scrollIntoView({behavior: 'smooth'})
  } else {
    // если на другой странице — переходим на главную, а потом скроллим
    router.push('/').then(() => {
      setTimeout(() => {
        const el = document.getElementById('reviews')
        if (el) el.scrollIntoView({behavior: 'smooth'})
      }, 300)
    })
  }
}

function goToCatalog() {
  if (route.path === '/') {
    document.getElementById('catalog')?.scrollIntoView({behavior: 'smooth'})
  } else {
    router.push('/').then(() => {
      setTimeout(() => {
        document.getElementById('catalog')?.scrollIntoView({behavior: 'smooth'})
      }, 300)
    })
  }
}

defineProps({
  inFooter: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <nav class="menu">
    <transition name="menu">
      <ul class="menu__list" :class="{ 'menu__list--footer': inFooter }">
        <li
            v-for="(item, index) in menuItems"
            :key="index"
            class="menu__item"
        >
          <button
              class="menu__link"
              @click="item.action"
          >
            {{ item.label }}
          </button>
        </li>
      </ul>
    </transition>
  </nav>
</template>

<style scoped lang="scss">
@use '@/assets/styles/media.scss' as *;

.menu {

  .menu__list {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;

    @include vp-767 {
      display: flex;
      gap: 0;
    }

    .menu__link {
      font-size: 18px;
      padding: 15px 64px;
      color: var(--color-default-black);
      background-color: inherit;
      border: none;
      transition: color 0.4s, background-color 0.4s;

      @include vp-767 {
        font-size: 16px;
        color: var(--color-default-black);
        text-align: end;
        padding: 10px 10px;
      }

      &:hover {
        cursor: pointer;
        color: var(--color-default-white);
        background-color: var(--color-default-black);

        @include vp-767 {
          color: var(--color-default-black);
          background-color: var(--color-default-white);
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

  .menu__list--footer {

    .menu__link {
      padding: 5px 7px;
      font-size: 16px;

      @include vp-767 {
        padding: 0 0 10px;
      }

      &:hover {
        background-color: var(--color-default-white);
        color: var(--color-default-black);
      }
    }

    .menu__item:first-child .menu__link {
      font-size: 18px;
      font-weight: bold;
    }
  }
}

</style>
