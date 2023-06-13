/* eslint-disable linebreak-style */
'use strict';

const box = document.querySelector('.box');
const block = document.querySelector('.block');

// console.log(block);

// console.log(block.textContent); //блокирует дальнейшиё код

// if(block){
//     console.log(block.textContent);
// }
// console.log(block?.textContent); //возвращает undefined если block-false, не блокирует скрипт
                                // если block-true, то считывает textContent
                                //работает только на чтении данных
// block?.textContent='123';       // ошибка
// console.log(1+2);



const userData = {
    name: 'Eugene',
    age: 30,
    say:function(){
        console.log('hello');
    }
};
userData.say();
userData.hay?.(); //проверка метода
// if(userData&&userData.skills&&userData.skills.js){
//     console.log(userData.skills.js);
// }

console.log(userData.skills?.js);
