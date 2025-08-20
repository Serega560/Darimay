<script setup>
import {ref} from 'vue';

// Состояние для модального окна
const showModal = ref(false);
const currentImage = ref('');
const currentAlt = ref('');

// Функция для открытия изображения
const openImage = (event) => {
  if (event.target.tagName === 'IMG') {
    currentImage.value = event.target.src;
    currentAlt.value = event.target.alt;
    showModal.value = true;
    document.body.style.overflow = 'hidden'; // Блокируем прокрутку фона
  }
};

// Функция для закрытия модального окна
const closeModal = () => {
  showModal.value = false;
  document.body.style.overflow = 'auto'; // Восстанавливаем прокрутку
};

// Закрытие по клавише Escape
const handleKeydown = (event) => {
  if (event.key === 'Escape') {
    closeModal();
  }
};

// Добавляем обработчик событий клавиатуры
document.addEventListener('keydown', handleKeydown);

</script>

<template>
  <div class="brand" id="brand">
    <div class="container">
      <h1 class="brand__title">О бренде</h1>
      <div class="brand__block">
        <div class="brand__img" @click="openImage">
          <img src="../assets/img/doc_tz.jpg" width="788" height="1120" alt="фото товарного знака">
        </div>
        <div class="brand__description">
          <p>Бренд <strong>Darimay</strong> появился не случайно — он родился из глубокой веры в то, что уход за кожей
            должен быть одновременно бережным, эффективным и честным. В 2023 году команда специалистов из мира
            косметологии,
            дерматологии и научных разработок объединила свои знания, чтобы создать нечто большее, чем просто уходовую
            косметику.
            Мы решили вернуть коже то, что она теряет в суете города: здоровье, мягкость и естественное сияние.</p>
          <p>Мы не гнались за модой — мы шли от потребностей. Изучая кожу, её реакцию на стрессы, климат и ритм
            современной жизни, мы разработали продукты, которые действительно работают. Наши формулы — это результат
            тесного сотрудничества с технологами и дерматологами.
            В их основе — проверенные компоненты: церамиды, NUФ-комплекс, пантенол, обогащённые натуральными экстрактами
            северной природы России.</p>
          <p><strong>Darimay — это бренд, который не обещает чудес, но ежедневно заботится о коже.</strong> Мы не
            стремимся быть громкими,
            мы стремимся быть честными. Каждый продукт создаётся с вниманием к деталям и уважением к вашей коже.
            Мы объединяем силу природы и точность науки, чтобы дать вашей коже возможность дышать, восстанавливаться и
            чувствовать себя живой.</p>
          <p>Darimay — это не просто косметика. Это история доверия, заботы и профессионального подхода, в которую вы
            можете поверить.</p>
        </div>
      </div>
    </div>
  </div>
  <!-- Модальное окно для увеличенного изображения -->
  <div v-if="showModal" class="modal__overlay" @click="closeModal">
    <div class="modal__content" @click.stop>
      <button class="modal__close" @click="closeModal">&times;</button>
      <img :src="currentImage" :alt="currentAlt" class="modal__image">
    </div>
  </div>

</template>

<style scoped lang="scss">
@use '@/assets/styles/media.scss' as *;
@use '@/assets/styles/container.scss' as *;

.brand {
  padding: 28px 0;
  border: 1px solid var(--color-quartz);

  .brand__title {
    text-align: center;
    font-size: 24px;
    margin-bottom: 24px;
  }

  .brand__block {
    display: grid;
    grid-template-columns: 180px 1fr;
    gap: 0 21px;

    @include vp-767 {
      grid-template-columns: 1fr;
      gap: 20px 0;
    }

    .brand__img {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 16px;

      @include vp-767 {
        flex-direction: row;
        justify-content: center;
      }

      img {
        width: 170px;
        height: auto;
        cursor: pointer;
        transition: transform 0.3s ease, box-shadow 0.3s ease;

        &:hover {
          transform: scale(1.1);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
      }
    }

    .brand__description {
      font-size: 18px;
    }
  }
}

// Стили для модального окна
.modal__overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease;
  padding: 20px;
}

.modal__content {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: zoomIn 0.3s ease;

  @include vp-767 {
    max-width: 95vw;
  }
}

.modal__close {
  position: absolute;
  top: 20px;
  right: 420px;
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  font-size: 36px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1001;
  display: flex;
  justify-content: center;
  align-items: center;

  @include vp-767 {
    top: -15px;
    right: 0;
    font-size: 32px;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }
}

.modal__image {
  max-width: 95%;
  max-height: 95%;
  object-fit: contain;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.5);
}

// Анимации
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes zoomIn {
  from {
    transform: scale(0.5);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

</style>
