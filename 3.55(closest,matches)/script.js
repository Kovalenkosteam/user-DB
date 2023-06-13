/* eslint-disable linebreak-style */
'use strict';
let boxexQuerry=document.querySelectorAll('.box');
const boxesGet=document.getElementsByClassName('box');

boxexQuerry.forEach(box=>{
    if (box.matches('.this')){
        console.log(box);
    }
});
console.log(boxexQuerry[0].closest('.wrapper')); //находит ближайший родительский селектор


// boxexQuerry[0].remove();
// boxesGet[0].remove();

// for(let i=0;i<5;i++){
//     const div=document.createElement('div');
//     div.classList.add('box');
//     document.body.append(div);
// }

// console.log(boxexQuerry);
// console.log(boxesGet);

// console.log(document.body.children);

// console.log(Array.from(boxesGet));