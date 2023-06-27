<template>
  <div class="about">
    <h1 class="title about__title">В этом приложении реализовано следующее:</h1>
    <ul class="about__list">
      <li class="about__item">
        <p>Полная настойка шаблона на Vue CLI;</p>
      </li>
      <li class="about__item">
        <p>Установка и настройка Vue-router для Vue.js 3;</p>
      </li>
      <li class="about__item">
        <p>Динамическая перерисовка без перезагрузки страницы;</p>
      </li>
      <li class="about__item">
        <p>Динамический навбар и ссылки;</p>
      </li>
      <li class="about__item">
        <p>Обработка несуществующих роутов;</p>
      </li>
      <li class="about__item">
        <p>Компонентный подход</p>
      </li>
      <li class="about__item">
        <p>Настройка и работа с хранилищем VUEX</p>
      </li>
      <li class="about__item">
        <p>Хранение и динамическое обновление заметок в localStorage</p>
      </li>
      <li class="about__item">
        <p>Удаление заметок</p>
      </li>
      <li class="about__item">
        <p>Редактирование заметок</p>
      </li>
      <li class="about__item">
        <p>Выбор тега при создании заметки</p>
      </li>
      <li class="about__item">
        <p>Работа с props и emits между компонентами</p>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.about {
  padding: 40px 20px;
  background-color: #fff;
  box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
    0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);
  border-radius: 20px;
  max-width: 900px;
  margin: 0 auto;

  &__list,
  &__item {
    list-style: disc;
  }

  &__list {
    padding: 0 0 0 30px;
  }

  &__item {
    padding: 0 0 0 10px;

    &:not(:last-child) {
      margin: 0 0 10px 0;
    }
  }

  p {
    font-size: 22px;
    line-height: 1.2;
    color: rgba(#212121, 0.6);
  }
}
</style>
