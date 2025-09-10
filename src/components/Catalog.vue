<script setup>
import Ozon from '@/assets/icons/ozon.svg'
import Stars from "@/assets/icons/stars.svg"
import {useRouter} from 'vue-router'
import {creams} from '../data/creams.js'

const router = useRouter()

function goToDetail(id) {
  // именованный переход — надёжнее
  router.push({name: 'CreamDetail', params: {id}})
      // на всякий случай гарантируем прокрутку вверх (если router.scrollBehavior не сработает)
      .then(() => {
        // глобальный scroll
        window.scrollTo(0, 0)
      })
      .catch((err) => {
        // игнорируем NavigationDuplicated / прочие ошибки
        // (можешь логировать при необходимости)
        // console.warn(err)
      })
}
</script>

<template>
  <div class="catalog" id="catalog">
    <h2 class="catalog__title">Каталог</h2>
    <ul class="catalog__list">
      <li v-for="(cream, id) in creams"
          :key="cream.id"
          class="catalog__li"
          :style="{ '--bg': `url(${cream.bg})` }">
        <div class="catalog__item">
          <picture>
            <source :srcset="`${cream.webp1x} 1x, ${cream.webp2x} 2x`" type="image/webp"/>
            <img :data-src="cream.fallback" width="767" height="767" alt="крем-новинка"
                 :class="['catalog__img', { 'order-2': id % 2 === 1 }]"/>
          </picture>
          <div :class="['catalog__content', { 'catalog__content--reversed': id % 2 === 1 }]">
            <a :href="cream.link" class="catalog__rating">
              <div class="catalog__rating-stars">{{ cream.rating }}
                <Stars/>
              </div>
              <span>{{ cream.review }}</span>
            </a>
            <h3 class="catalog__title-small">{{ cream.title }}</h3>
            <div class="catalog__subtitle">
              <p>{{ cream.subtitle }}</p>
              <span>{{ cream.weight }}</span>
            </div>
            <p class="catalog__description">{{ cream.description }}</p>
            <div class="catalog__link">
              <button class="catalog__button button" @click.stop="goToDetail(cream.id)">Подробнее</button>
              <a class="catalog__ozon" :href="cream.link" target="_blank">
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

    @include vp-767 {
      font-size: 32px;
      margin-bottom: 10px;
    }
  }

  .catalog__list {
    display: flex;
    flex-wrap: wrap;

    @include vp-767 {
      display: grid;
      grid-template-columns: repeat(2, minmax(163px, 1fr));
      padding: 0 15px;
      gap: 22px 9px;
    }

    .catalog__li {
      width: 100%;
      display: flex;
      background-image: var(--bg);
      justify-content: center;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;

      @include vp-767 {
        background-image: none;
        justify-content: inherit;
      }
    }

    .catalog__item {
      display: grid;
      grid-template-columns: auto auto;
      gap: 0 20px;
      padding: 57px 0;
      max-width: 1064px;

      @include vp-767 {
        grid-template-columns: 1fr;
        padding: 0;
      }

      .catalog__img {
        width: 416px;
        height: auto;

        @include vp-767 {
          height: auto;
          max-width: 100%;
          margin-bottom: 10px;
        }

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

        @include vp-767 {
          gap: 5px 0;
          order: 1;
          min-width: 0;
        }

        &.catalog__content--reversed {
          order: -1;

          @include vp-767 {
            order: 1;
          }
        }

        .catalog__rating {
          display: flex;
          flex-direction: column;
          align-items: flex-end;

          @include vp-767 {
            align-items: flex-start;
            gap: 5px 0;
          }

          &:hover {
            color: var(--color-dodger-blue);

            @include vp-767 {
              color: inherit;
            }

            svg {
              color: var(--color-dodger-blue);
              @include vp-767 {
                color: inherit;
              }
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

            @include vp-767 {
              align-self: flex-start;
              font-size: 14px;
            }

          }
        }

        .catalog__rating-stars {
          display: flex;
          gap: 0 3px;
          align-items: start;

          @include vp-767 {
            font-size: 16px;
          }

          svg {
            height: 19px;

            @include vp-767 {
              height: 16px;
            }
          }
        }

        .catalog__title-small {
          text-align: left;
          font-size: 40px;
          font-weight: 700;

          @include vp-767 {
            display: none;
          }
        }

        .catalog__subtitle {
          display: flex;
          gap: 0 10px;
          align-items: center;
          flex-wrap: wrap;

          @include vp-767 {
            margin-bottom: 10px;
          }

          p {
            font-weight: 700;
            font-size: 24px;

            @include vp-767 {
              font-size: 16px;
            }

          }

          span {
            font-size: 16px;
            margin-top: 4px;

            @include vp-767 {
              font-size: 14px;
              color: #AAAAAA;
              margin: 0;
            }
          }
        }

        .catalog__description {
          font-size: 18px;

          @include vp-767 {
            display: none;
          }
        }

        .catalog__link {
          display: flex;
          gap: 0 20px;
          align-items: center;
          flex-wrap: wrap;

          @include vp-767 {
            gap: 10px 0;
          }

          .catalog__button {
            border: 1px solid var(--color-default-black);

            @include vp-767 {
              background-color: var(--color-default-white);
              color: var(--color-default-black);
              font-size: 14px;
              padding: 11px 30px;
              width: 100%;
            }
          }

          .catalog__ozon {
            display: flex;
            align-items: center;
            gap: 0 8px;
            padding: 10px 20px;
            font-size: 18px;
            border: 1px solid var(--color-default-black);

            @include vp-767 {
              font-size: 14px;
              padding: 12px;
              width: 100%;
              gap: 0 5px;
            }

            svg {
              color: var(--color-dodger-blue);
              width: 67px;
              height: 20px;
              transition: color .4s;
            }

            &:hover {
              cursor: pointer;
              color: var(--color-default-white);
              background-color: var(--color-bright-grey);

              @include vp-767 {
                color: var(--color-bright-grey);
                background-color: inherit;
              }

              svg {
                color: var(--color-default-white);

                @include vp-767 {
                  color: var(--color-dodger-blue);
                }
              }

              @include vp-767 {
                color: inherit;
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
