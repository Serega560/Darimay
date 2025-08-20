<script setup>
import Ozon from "@/assets/icons/ozon.svg"
</script>

<template>
  <div class="market">
    <div class="container">
      <div class="market__block">
        <picture>
          <img src="../assets/img/ozon.png" width="1062" height="172" alt="фото крема на фоне ozon"/>
        </picture>
        <div class="market__content">
          <p>Мы на
            <Ozon/>
          </p>
          <a target="_blank" class="button" href="https://www.ozon.ru/seller/effektivnaya-kosmetika-792385/products/?miniapp=seller_792385">Подробнее</a>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
@use '@/assets/styles/media.scss' as *;
@use '@/assets/styles/container.scss' as *;


.market {
  padding: 20px 0;

  .market__block {
    position: relative;

    .market__content {
      top: 50%;
      left: 50%;
      display: flex;
      flex-direction: column;
      gap: 16px 0;
      transform: translateX(-50%) translateY(-50%);
      position: absolute;

      p {
        display: flex;
        gap: 5px;
        align-items: center;
        justify-content: center;

        svg {
          color: var(--color-dodger-blue);
          width: 120px;
        }
      }

      a {
        padding: 9px 50px;
      }
    }
  }
}

</style>
