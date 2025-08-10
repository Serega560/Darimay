<script setup>
import Logo from '@/components/Logo.vue'
import Contacts from "@/components/Contacts.vue";
import Menu from '@/components/Menu.vue'
</script>

<template>
  <div class="header">
    <div class="header__block">

      <div class="container">
        <div class="header-up">
          <Logo/>
          <Contacts/>
        </div>
      </div>

      <div class="header-down">
        <Menu/>
      </div>

    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/media.scss' as *;
@use '@/assets/styles/container.scss' as *;

.header {
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  background-color: var(--color-default-white);


  .header__block {
    display: flex;
    flex-direction: column;
    gap: 15px 0;
    width: 100%;

    .header-up {
      align-items: center;
      display: grid;
      grid-template-columns: 825px 1fr;
      padding-top: 20px;
      justify-content: center;

      @include vp-767 {
        padding: 8px 0;
      }
    }

    .header-down {
      display: flex;
      justify-content: center;
      border-bottom: 1px solid var(--color-quartz);
      border-top: 1px solid var(--color-quartz);
      width: 100%;
    }
  }
}
</style>
