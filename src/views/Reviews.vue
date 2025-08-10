<script setup>
import {ref, computed} from "vue";
import Stars from "@/assets/icons/stars.svg";

const reviews = ref([
  {
    id: 1,
    name: "Галина Ф.",
    nameCream: "Восстанавливающий крем для лица",
    rating: "5.0",
    review: "Крем лёгкий, без запаха, быстро впитывается. Кажется стали бледнее сосуды расширенные. Надеюсь, " +
        "улучшит мою кожу. "
  },
  {
    id: 2,
    name: "Александра А.",
    nameCream: "Восстанавливающий крем для лица",
    rating: "5.0",
    review: "отличный крем, барьерный+нуф+много чего еще. структура шелковистая, " +
        "впитывается, кожа становится напитанная." +
        "Беру уже третий раз, хотелось бы подешевле и беру периодически другие крема " +
        "подешевле, но возвращаюсь к этому. Очень советую! "
  },
  {
    id: 3,
    name: "Анастасия С.",
    nameCream: "Восстанавливающий крем для лица",
    rating: "5.0",
    review: "Приобрела по совету блогера, привлек хороший состав. Крем нежирный, " +
        "увлажняет и питает кожу, поры не закупоривает. Покупаю второй раз."
  }
]);

// Храним состояние раскрытия для каждого отзыва
const expandedReviews = ref({});

const toggleReview = (id) => {
  expandedReviews.value[id] = !expandedReviews.value[id];
};

const getTruncatedReview = (text, id, limit = 100) => {
  if (expandedReviews.value[id] || text.length <= limit) {
    return text;
  }
  return text.slice(0, limit) + "...";
};
</script>

<template>
  <div class="reviews" id="reviews">
    <div class="container">
      <h2 class="reviews__title">Отзывы</h2>
      <ul class="reviews__list">
        <li class="reviews__item" v-for="item in reviews" :key="item.id">
          <span class="reviews__name">{{ item.name }}</span>
          <a class="reviews__name-cream" target="_blank" href="https://www.ozon.ru/product/darimay-vosstanavlivayushchiy-krem-dlya-litsa-i-vek-s-tseramidami-nuf-pantenolom-i-1136886739/?__rr=1&at=83tBDYNznIVvGmDPi1VwEnJCnAjO12IEEZDlDcwnR4lX">{{ item.nameCream }}</a>
          <span class="reviews__rating">
            {{ item.rating }}<Stars/>
          </span>
          <span class="reviews__review">
            {{ getTruncatedReview(item.review, item.id) }}
            <template v-if="item.review.length > 100">
              <a href="#" @click.prevent="toggleReview(item.id)">
                {{ expandedReviews[item.id] ? "Скрыть" : "читать полностью" }}
              </a>
            </template>
          </span>
        </li>
      </ul>
      <a class="reviews__link" target="_blank"
         href="https://www.ozon.ru/product/darimay-vosstanavlivayushchiy-krem-dlya-litsa-i-vek-s-tseramidami-nuf-pantenolom-i-1136886739/?__rr=1&at=83tBDYNznIVvGmDPi1VwEnJCnAjO12IEEZDlDcwnR4lX">Читать
        все отзывы</a>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/media.scss" as *;
@use "@/assets/styles/container.scss" as *;

.reviews {
  padding: 80px 0;

  @include vp-767 {
    padding: 47px 0 9px;
  }

  .reviews__title {
    text-align: center;
    font-size: 24px;
    margin-bottom: 20px;
  }

  .reviews__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0 18px;
  }

  .reviews__item {
    padding: 18px 16px 0;
    display: flex;
    flex-direction: column;
    gap: 5px 0;
    margin-bottom: 20px;
    min-height: 250px;

    .reviews__name {
      font-size: 24px;
      font-weight: 700;
    }

    .reviews__name-cream {
      font-size: 14px;
      font-weight: 400;
      border-bottom: 1px solid var(--color-default-black);
      width: max-content;
      cursor: pointer;

      &:hover {
        color: var(--color-dodger-blue);
        border-bottom: 1px solid var(--color-dodger-blue);
      }
    }

    .reviews__rating {
      display: flex;
      align-items: center;
      gap: 0 4px;
      font-size: 18px;
      line-height: 18px;
    }

    .reviews__review {
      font-size: 16px;
      line-height: 16px;

      a {
        display: flex;
        justify-content: end;
        font-size: 14px;
        color: var(--color-jordy-blue);
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .reviews__link {
    display: block;
    font-size: 16px;
    text-align: center;
    border-bottom: 1px solid var(--color-default-black);
    width: max-content;
    margin: 0 auto;

    &:hover {
      color: var(--color-dodger-blue);
      border-bottom: 1px solid var(--color-dodger-blue);
    }
  }
}
</style>
