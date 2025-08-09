<script setup>
import Ozon from '@/assets/icons/ozon.svg'
import Stars from "@/assets/icons/stars.svg"

const catalogImg = [
  {
    id: 1,
    title: "Пептиды",
    subtitle: "Омолаживающий крем для лица и век с пептидами",
    weight: "30 мл",
    description: "Откройте для себя секрет молодости и сияния с нашим омолаживающим кремом для лица и век Darimay. " +
        "Этот продукт создан для тех, кто стремится вернуть коже упругость, свежесть и здоровое сияние. " +
        "Наша инновационная формула, обогащенная пептидами, антиоксидантами, NUФ‑комплексом, гиалуроновой кислотой, " +
        "пантенолом, витаминами F и E, обеспечивает коже питание, защиту и глубокое увлажнение, " +
        "необходимые для восстановления и замедления признаков старения.",
    readMore: "#link",
    link: "https://www.ozon.ru/product/darimay-omolazhivayushchiy-krem-dlya-litsa-i-vek-s-peptidami-antioksidantami-nuf-ot-morshchin-1731390411/?at=J8tg3K910TVE0QKASZJWX9ZIg7nyNkC3A4wDQS54grB4",
    rating: "4.9",
    review: "325 отзывов",
    img: "photo_1.png",
    bg: new URL(`../assets/img/bg_photo_1.png`, import.meta.url).href
  },
  {
    id: 2,
    title: "Церамиды",
    subtitle: "Восстанавливающий крем для лица с церамидами",
    weight: "30 мл",
    description: "Восстанавливающий крем для лица и век с церамидами, пантенолом и NUФ-комплексом. " +
        "Увлажняет, питает и укрепляет кожу, не перегружая её. Идеален для чувствительной кожи, быстро впитывается, " +
        "подходит для ежедневного ухода. Натуральный состав и легкая текстура — всё, что нужно для здорового сияния кожи.",
    readMore: "#link",
    link: "https://www.ozon.ru/product/darimay-vosstanavlivayushchiy-krem-dlya-litsa-i-vek-s-tseramidami-nuf-pantenolom-i-1136886739/?at=83tBDYNznIVvGmDPi1VwEnJCnAjO12IEEZDlDcwnR4lX",
    rating: "4.9",
    review: "325 отзывов",
    img: "photo_2.png",
    bg: new URL(`../assets/img/bg_photo_2.png`, import.meta.url).href,
  },
  {
    id: 3,
    title: "Уход для лица",
    subtitle: "Крем-гель для умывания с пантенолом",
    weight: "150 мл",
    description: "Подарите своей коже комфортное очищение, к которому она будет стремиться каждый день. " +
        "Очищающий крем-гель Darimay с пантенолом создан для тех, кто ищет мягкий, " +
        "но эффективный способ избавиться от загрязнений, при этом сохранив ощущение увлажнённости, " +
        "гладкости и комфорта уже с первого применения. Он деликатно удаляет излишки себума, пыль и остатки макияжа, " +
        "не нарушая естественный защитный барьер и не провоцируя сухость или стянутость.",
    readMore: "#link",
    link: "https://www.ozon.ru/product/darimay-ochishchayushchiy-krem-gel-dlya-umyvaniya-c-pantenolom-dlya-chuvstvitelnoy-kozhi-2524523954/?at=GRt2KA2o7i4m5W4qU7vnBgQugQ35R5UK2jRkvuKZyAvn",
    rating: "4.9",
    review: "325 отзывов",
    img: "photo_3.png",
    bg: new URL(`../assets/img/bg_photo_3.png`, import.meta.url).href,
  }
].map(item => ({
  ...item,
  webp1x: new URL(`../assets/img/${item.img}?format=webp&width=400`, import.meta.url).href,
  webp2x: new URL(`../assets/img/${item.img}?format=webp&width=800`, import.meta.url).href,
  fallback: new URL(`../assets/img/${item.img}?width=400`, import.meta.url).href
}))
</script>

<template>
  <div class="catalog" id="catalog">
    <h2 class="catalog__title">Каталог</h2>
    <ul class="catalog__list">
      <li v-for="(item, id) in catalogImg" :key="id"
          :style="{backgroundImage: `url(${item.bg})`,backgroundSize: 'contain',backgroundPosition: 'center',backgroundRepeat: 'no-repeat'}">
        <div class="catalog__item">
          <picture>
            <source :srcset="`${item.webp1x} 1x, ${item.webp2x} 2x`" type="image/webp"/>
            <img :data-src="item.fallback" width="auto" height="416" alt="крем-новинка"
                 :class="['catalog__img', { 'order-2': id % 2 === 1 }]"/>
          </picture>
          <div :class="['catalog__content', { 'catalog__content--reversed': id % 2 === 1 }]">
            <div class="catalog__rating">
              <div class="catalog__rating-stars">{{ item.rating }}
                <Stars/>
              </div>
              <span>{{ item.review }}</span>
            </div>
            <h3 class="catalog__title-small">{{ item.title }}</h3>
            <div class="catalog__subtitle">
              <p>{{ item.subtitle }}</p>
              <span>{{ item.weight }}</span>
            </div>
            <p class="catalog__description">{{ item.description }}</p>
            <div class="catalog__link">
              <a class="catalog__button button" href="#">Подробнее</a>
              <a class="catalog__ozon" :href="item.link">
                <span>Купить на</span>
                <Ozon class="catalog__ozon-svg"/>
              </a>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/media.scss' as *;
@use '@/assets/styles/container.scss' as *;

.catalog {

  .catalog__title {
    text-align: center;
    font-size: 24px;
    margin-bottom: 20px;
  }

  .catalog__list {
    display: flex;
    flex-wrap: wrap;

    li {
      width: 100%;
      display: flex;
      justify-content: center;
      position: relative;
      z-index: -1;
    }

    .catalog__item {
      display: grid;
      grid-template-columns: auto auto;
      gap: 0 20px;
      padding: 57px 0;
      max-width: 1064px;

      .catalog__img {
        width: 414px;
        position: relative;
        z-index: -1;

        &.order-2 {
          order: 2;

          @include vp-767 {
            order: 1;
          }
        }
      }

      .catalog__content {
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-self: end;
        order: 2;

        &.catalog__content--reversed {
          order: -1;
        }

        .catalog__rating {
          display: flex;
          flex-direction: column;
          align-items: center;

          .catalog__rating-stars,
          span {
            align-self: end;
            font-size: 16px;
          }
        }

        .catalog__rating-stars {
          display: flex;
          gap: 0 3px;
          align-items: start;

          svg {
            height: 19px;
          }
        }

        .catalog__title-small {
          text-align: left;
          font-size: 40px;
          font-weight: 700;
        }

        .catalog__subtitle {
          display: flex;
          gap: 0 10px;
          align-items: center;
          font-size: 24px;

          p {
            font-weight: 700;
            font-size: 24px;
          }

          span {
            font-size: 16px;
            margin-top: 4px;
          }
        }

        .catalog__description {
          font-size: 18px;
        }

        .catalog__link {
          display: flex;
          gap: 0 20px;
          align-items: center;

          .catalog__ozon {
            display: flex;
            align-items: center;
            gap: 0 8px;
            padding: 6px 20px;
            font-size: 18px;

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
  }
}

</style>
