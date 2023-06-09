/* eslint-disable linebreak-style */
/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        'Логан',
        'Лига справедливости',
        'Ла-ла лэнд',
        'Одержимость',
        'Скотт Пилигрим против...'
    ]
};
const promo__adv = document.querySelectorAll('.promo__adv img');
const promo__bg = document.querySelector('.promo__bg');
let promo__genre = promo__bg.querySelector('.promo__genre');
const list = document.querySelector('.promo__interactive-list');
promo__adv.forEach(i => {
    i.remove();
});
promo__genre.textContent = 'Драма';
promo__bg.style.backgroundImage = 'url(./img/bg.jpg)';
list.innerHTML = '';
console.log(movieDB.movies);
console.log(movieDB.movies.sort());
movieDB.movies.sort();
movieDB.movies.forEach((film, i) => {
    list.innerHTML += `
    <li class="promo__interactive-item">${i + 1} ${film}
                            <div class="delete"></div>
                        </li>`;
});





