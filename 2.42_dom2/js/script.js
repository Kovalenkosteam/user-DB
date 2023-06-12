/* eslint-disable linebreak-style */
const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circle = document.getElementsByClassName('circle');
const heart = document.querySelectorAll('.heart');
const oneHeart = document.querySelector('.heart');
const wrapper= document.querySelector('.wrapper');
// box.style.backgroundColor='green';
// box.style.width='500px';
let num = 500;
box.style.cssText = `background - color: green; width:${num}px`;

// for (let i = 0; i < heart.length;i++) {
//     heart[i].style.backgroundColor='aqua';
// }
heart.forEach(i=>{
    i.style.backgroundColor='purple'; 
});
btns[1].style.borderRadius = '100%';
const div=document.createElement('div');
// const text=document.createTextNode('fuck');
div.classList.add('black');
wrapper.append(div);
// wrapper.prepend(div);
// heart[1].before(div);
// heart[0].remove();
// console.log(heart);
// heart[1].replaceWith(circle[1]);
// div.innerHTML='<h1>hello</h1>';
div.textContent='<h1>hello</h1>';



