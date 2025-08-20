<script setup>
import Logo from './Logo.vue'
import Menu from './Menu.vue'
import Contacts from "@/components/Contacts.vue";
</script>

<template>
  <div class="footer">
    <div class="container">
      <div class="footer__block">

        <Logo/>

        <div>
          <Menu :inFooter="true" class="footer__menu"/>
          <a class="declaration" href="#">декларация</a>
        </div>


        <div class="footer__details">
          <h3>Реквизиты</h3>
          <p>ИП Квас Евгений Станиславович</p>
          <p>ОГРНИП 98582476586548</p>
          <p>ИНН 3872178873287421387</p>
        </div>
        <div class="footer__accounts">
          <h3>Наши аккаунты</h3>
          <Contacts class="footer__contacts"/>
          <a class="footer__confidentiality" href="#">Политика конфиденциальности</a>
        </div>

      </div>
      <div class="footer__copyright">
        <div>
          <p class="designer">Задизайнила Алина Гнедова</p>
          <p class="designer">Разработал А. Сергей</p>
        </div>
        <p class="rights">все права защищены</p>
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">

@use '@/assets/styles/media.scss' as *;
@use '@/assets/styles/container.scss' as *;

.footer {
  padding: 70px 0;
  border: 1px solid var(--color-quartz);

  .footer__block {
    display: grid;
    grid-template-columns: 196px 1fr 245px 1fr;
    gap: 0 100px;
    margin-bottom: 60px;

    h3 {
      font-size: 18px;
      margin-bottom: 5px;
    }

    .footer__menu {
      width: 93px;
    }

    .declaration {
      font-size: 16px;
      padding: 5px 7px;
    }

    .footer__details {
      font-size: 16px;

      p {
        margin-bottom: 5px;
      }
    }

    .footer__accounts {
      justify-content: left;

      .footer__contacts {
        flex-direction: column;
        align-items: start;
        margin-bottom: 5px;
      }

      .footer__confidentiality {
        font-size: 16px;
        color: var(--color-dodger-blue);
      }
    }
  }

  .footer__copyright {
    display: flex;
  }

  .rights {
    text-align: center;
    border-top: 1px solid var(--color-quartz);
    font-size: 14px;
    padding-top: 10px;
    color: var(--color-quartz);
    width: 480px;
    margin: 0 auto 60px;
  }

  .designer {
    font-size: 14px;
    color: var(--color-quartz);
    text-align: left;
  }
}

</style>
