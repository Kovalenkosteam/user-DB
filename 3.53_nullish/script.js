/* eslint-disable linebreak-style */
'use strict';

const box = document.querySelector('.box');

const newHeight = 100;
const newWidth = 400;

function changeParams(elem, h, w) {
    elem.style.height = `${h ?? 200}px`;
    elem.style.width = `${w||300}px`;
    elem.innerHTML = (h??200)*(w??300);
}

changeParams(box, newHeight, newWidth);

let userName;
let userKay;
console.log(userName??userKay??'User');