<script setup>
import {creams} from '../data/creams.js'
import {useRoute, useRouter} from 'vue-router'
import {computed} from 'vue'
import Stars from "@/assets/icons/stars.svg";
import Ozon from "@/assets/icons/ozon.svg";
import Product from "@/views/Product.vue";
import RatingReviews from "@/views/RatingReviews.vue";

const route = useRoute()
const router = useRouter()

const creamId = Number(route.params.id)

const cream = computed(() => creams.find(c => c.id === creamId))

function goBack() {
  router.push('/')
}
</script>

<template>
  <div class="cream__header"
       :style="{backgroundImage: `url(${cream.bg})`,backgroundSize: 'contain',backgroundPosition: 'center',backgroundRepeat: 'no-repeat'}">
    <div class="container">
      <div class="cream__block">
        <picture>
          <source :srcset="`${cream.webp1x} 1x, ${cream.webp2x} 2x`" type="image/webp"/>
          <img :src="cream.fallback" :alt="cream.title" width="363"/>
        </picture>
        <div class="cream__content">
          <a :href="cream.link" class="cream__rating">
            <span class="cream__rating-stars">{{ cream.rating }}
              <Stars/>
            </span>
            <span class="cream__review">{{ cream.review }}</span>
          </a>
          <div class="cream__title">
            <h1 class="cream__title-small">{{ cream.title }}</h1>
            <a href="#">декларация</a>
          </div>
          <div class="cream__subtitle">
            <p>{{ cream.subtitle }}</p>
            <span>{{ cream.weight }}</span>
          </div>
          <div class="cream__skin">
            <span>Потребности кожи:</span>
            <p>{{ cream.skinNeeds }}</p>
          </div>
          <div class="cream__compound">
            <span>Состав</span>
            <p>{{ cream.compound }}</p>
          </div>
          <div class="cream__link">
            <a class="cream__ozon" :href="cream.link">
              <span>Купить на</span>
              <Ozon class="cream__ozon-svg"/>
            </a>
            <button class="cream__button button" @click="goBack">Назад</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="cream__main">
    <div class="container">
      <Product/>
      <RatingReviews />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/media.scss" as *;
@use "@/assets/styles/container.scss" as *;

.cream__header {
  margin-top: 35px;
  position: relative;

  &:after,
  &:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 1px;
    background-color: var(--color-quartz);
    right: 0;
  }

  &:before {
    top: 0;
  }

  &:after {
    bottom: 0;
  }

  .cream__block {
    display: grid;
    grid-template-columns: 363px 1fr;
    gap: 0 30px;
    padding: 50px 0;

    .cream__content {
      display: flex;
      flex-direction: column;
      gap: 5px 0;

      .cream__rating {
        display: flex;
        flex-direction: column;
        align-items: center;

        &:hover {
          color: var(--color-dodger-blue);

          svg {
            color: var(--color-dodger-blue);
          }
        }

        .cream__review {
          text-decoration: underline;
        }

        svg {
          transition: color .4s;
        }


        span {
          align-self: end;
          font-size: 16px;
        }
      }

      .cream__rating-stars {
        display: flex;
        gap: 0 3px;
        align-items: start;

        svg {
          height: 19px;
        }
      }

      .cream__title {
        display: flex;
        gap: 0 11px;
        align-items: baseline;

        a {
          font-size: 16px;
          line-height: 16px;
          text-decoration: underline;

          &:hover {
            color: var(--color-dodger-blue);
          }
        }
      }

      .cream__title-small {
        text-align: left;
        font-size: 40px;
        font-weight: 700;
      }

      .cream__subtitle {
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

      .cream__skin {
        display: grid;
        grid-template-columns: 145px 1fr;
        gap: 0 10px;

        span {
          font-size: 16px;
        }

        p {
          font-size: 14px;
        }
      }

      .cream__compound {
        display: grid;
        grid-template-columns: 60px 1fr;
        gap: 0 10px;
        margin-bottom: 25px;

        span {
          font-size: 14px;
          color: #A1A1A1;
        }

        p {
          font-size: 14px;
          color: #A1A1A1;
        }
      }

      .cream__link {
        display: flex;
        gap: 0 20px;
        align-items: center;
        justify-content: center;

        .cream__ozon {
          display: flex;
          align-items: center;
          gap: 0 8px;
          padding: 6px 20px;
          font-size: 18px;

          svg {
            color: var(--color-dodger-blue);
            transition: color .4s;
          }

          &:hover {
            cursor: pointer;
            color: var(--color-default-white);
            background-color: var(--color-bright-grey);

            svg {
              color: var(--color-default-white);
            }

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

        .cream__button {
          padding: 10px 35px;
        }
      }
    }
  }
}

</style>

