<script setup>
</script>

<template>
  <div class="product">
    <h2 class="product__title">О продукте</h2>
    <h3 class="product__title-cream">Восстанавливающий крем для лица и век с церамидами, НУФ и пантенолом</h3>
    <p class="product__advertising">Откройте для себя секрет безупречной кожи с нашим уникальным восстанавливающим
      кремом для лица и век.
      Этот продукт создан для тех, кто стремится вернуть своей коже молодость, упругость и здоровое сияние.
      Наша формула, обогащенная церамидами, пантенолом и экстрактами натуральных ингредиентов,
      дарит вашей коже весь спектр необходимых питательных веществ и увлажнения.</p>
    <ul class="product__list">
      <li class="product__item">
        <span class="product__name">Основные преимущества<span class="product__name--span">:</span></span>
        <p class="product__text">- Церамидами для защиты: Церамиды активно восстанавливают защитный барьер кожи,
          укрепляют ее и предотвращают потерю влаги. В результате ваша кожа становится более устойчивой к внешним
          воздействиям и агрессивным факторам окружающей среды. <br>
          - Пантенол для глубокого увлажнения:
          Пантенол славится своими увлажняющими и заживляющими свойствами.
          Он проникает в глубокие слои кожи, способствуя её восстановлению и улучшая текстуру.
          Ваша кожа станет заметно более гладкой и ухоженной уже после первых применений. <br>
          -Нежный уход для век: Крем идеально подходит для нежной кожи вокруг глаз. С его помощью вы сможете уменьшить
          отечность,
          темные круги и признаки усталости. Каждое утро вы будете просыпаться с отдохнувшим и сияющим взглядом.
        </p>
      </li>
      <li class="product__item">
        <p class="product__name product__name--mb">Почему стоит выбрать наш крем</p>
        <p class="product__text product__name--mb">Мы заботимся о вашем здоровье и красоте. Продукт прошел дерматологические тесты и
          подходит для всех типов кожи,
          включая чувствительную. Легкая текстура крема быстро впитывается, не оставляя жирного блеска,
          а его нежный аромат подарит вам удовольствие от ухода. Используйте крем ежедневно,
          чтобы наслаждаться результатами – ваша кожа будет выглядеть свежей и молодой!</p>
      </li>
      <li class="product__item">
        <p class="product__name">Способ применения<span class="product__name--span">:</span></p>
        <p class="product__text">Наносите крем на очищенную кожу лица и век легкими массажными движениями.
          Для достижения максимального эффекта рекомендуется использовать крем дважды в день – утром и вечером.
          Не забывайте, что регулярность – залог успешного результата! </p>
        <p class="product__text">
          Подарите своей коже заботу,
          которую она заслуживает. Сделайте шаг к идеальной коже с нашим восстанавливающим кремом уже сегодня!</p>
      </li>
    </ul>
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

  .product__advertising {
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

  .product__list {
    display: flex;
    flex-direction: column;
    gap: 15px 0;

    @include vp-767 {
      gap: 10px 0;
    }

    .product__name {
      font-size: 18px;
      font-weight: 700;
      line-height: 20px;
      margin-bottom: 20px;

      @include vp-767 {
        font-size: 14px;
        margin-bottom: 15px;
      }

      p {
        display: block;

        @include vp-767 {
          display: none;
        }
      }
    }

    .product__name--mb {

      @include vp-767 {
        display: none;
      }
    }

    .product__text {
      font-size: 18px;
      font-weight: 400;
      line-height: 20px;

      @include vp-767 {
        font-size: 14px;
        line-height: 14px;
        margin-top: 15px;
      }
    }
  }
}

</style>
