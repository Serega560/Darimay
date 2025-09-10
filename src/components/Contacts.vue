<script setup>
import Telegram from '@/assets/icons/telegram.svg'

</script>

<template>
  <div class="contacts">
    <a :href="`https://mail.google.com/mail/?view=cm&fs=1&to=info@darimay.ru`" target="_blank">
      info@darimay.ru
    </a>
    <a target="_blank" href="https://t.me/Ekaterrinnna">
      <Telegram class="contacts__telegram"/>
    </a>
  </div>

</template>

<style lang="scss">
@use '@/assets/styles/media.scss' as *;
@use '@/assets/styles/container.scss' as *;

.contacts {
  display: flex;
  gap: 0 16px;
  border-radius: 50%;

  .contacts__telegram {
    width: 40px;
    height: 40px;
    display: block;
    border-radius: 50%;
    color: var(--color-dodger-blue);
  }
}
</style>
