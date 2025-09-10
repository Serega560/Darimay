<script setup>
import Ozon from "@/assets/icons/ozon.svg"
</script>

<template>
  <div class="market">
    <div class="market__block">
      <picture>
        <img class="market__bg market__bg--ds" src="../assets/img/ozon__ds.png" width="1062" height="172"
             alt="фото крема на фоне ozon"/>
        <img class="market__bg market__bg--mb" src="../assets/img/ozon__mb.png" width="375" height="106"
             alt="фото крема на фоне ozon"/>
      </picture>
      <div class="market__content">
        <p>Мы на
          <Ozon/>
        </p>
        <a target="_blank" class="market__button button"
           href="https://www.ozon.ru/seller/effektivnaya-kosmetika-792385/products/?miniapp=seller_792385">Подробнее</a>
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
@use '@/assets/styles/media.scss' as *;
@use '@/assets/styles/container.scss' as *;


.market {
  max-width: 1440px;
  padding: 20px 188px;
  margin: 0 auto;

  @include vp-767 {
    padding: 0;
  }

  .market__block {
    position: relative;

    .market__bg--ds {
      display: block;
      width: 1062px;
      height: auto;

      @include vp-767 {
        display: none;
      }
    }

    .market__bg--mb {
      display: none;

      @include vp-767 {
        display: block;
        width: 100%;
      }
    }

    .market__content {
      top: 50%;
      left: 50%;
      display: flex;
      flex-direction: column;
      gap: 16px 0;
      transform: translateX(-50%) translateY(-50%);
      position: absolute;

      @include vp-767 {
        gap: 5px;
      }

      p {
        display: flex;
        gap: 5px;
        align-items: center;
        justify-content: center;
        font-size: 18px;

        @include vp-767 {
          font-size: 14px;
        }

        svg {
          color: var(--color-dodger-blue);
          width: 120px;

          @include vp-767 {
            width: 73px;
          }
        }
      }

      .market__button {
        padding: 9px 50px;
        text-align: center;

        @include vp-767 {
          width: min-content;
          padding: 10px 46px;
          font-size: 14px;

          &:hover {
            color: var(--color-default-white);
            background: var(--color-default-black);
          }
        }
      }
    }
  }
}

</style>
