<script setup>
import Logo from '@/assets/img/logo.svg'

</script>

<template>
  <a class="img" href="#">
    <Logo class="logo" />
  </a>
</template>

<style scoped lang="scss">
@use '@/assets/styles/media.scss' as *;
@use '@/assets/styles/container.scss' as *;

.img {
  justify-self: center;
  font-size: 0;
}

</style>

