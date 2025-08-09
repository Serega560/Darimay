<script setup>
import Telegram from '@/assets/icons/telegram.svg'
</script>

<template>
  <div class="contacts">
    <a href="#">info@darimay.ru</a>
    <a href="https://t.me/kbbbsdwfewgbhb">
      <Telegram class="contacts__telegram"/>
    </a>
  </div>

</template>

<style scoped lang="scss">
@use '@/assets/styles/media.scss' as *;
@use '@/assets/styles/container.scss' as *;

.contacts {
  display: flex;
  align-items: center;
  gap: 0 16px;
  border-radius: 50%;
  justify-self: flex-end;

  .contacts__telegram {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

}

</style>
