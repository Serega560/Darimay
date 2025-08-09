<script setup>

const menuItems = [
  { label: 'Главная', href: '#index.html' },
  { label: 'Каталог', href: '#catalog' },
  { label: 'Отзывы', href: '#reviews' },
  { label: 'O бренде', href: 'https://wa.me/79261283908' }
]
</script>


<template>
  <nav class="menu">
    <transition name="menu">
      <ul
        class="menu__list">
        <li
          v-for="(item, index) in menuItems"
          :key="index"
          class="menu__item"
        >
          <a
            class="menu__link"
            :href="item.href"
          >
            {{ item.label }}
          </a>
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
      position: absolute;
      width: 50%;
      flex-direction: column;
      gap: 15px 0;
      right: 0;
      top: 66px;
      text-align: right;
      height: 400px;
      padding: 30px 0;
      justify-content: center;
    }

    .menu__link {
      font-size: 18px;
      padding: 10px 64px;
      color: var(--color-default-black);
      background-color: inherit;
      border: none;
      transition: color 0.4s, background-color 0.4s;

      @include vp-767 {
        font-size: 26px;
        color: var(--color-bright-grey);
        text-align: end;
        padding: 7px 15px;
      }

      &:hover {
        cursor: pointer;
        color: var(--color-default-white);
        background-color: var(--color-default-black);

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

</style>
