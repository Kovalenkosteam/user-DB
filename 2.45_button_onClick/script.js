const but= document.querySelectorAll('button');
const overlay= document.querySelector('.overlay');
// but.onclick= function(){
// alert('hi');
// };


// but.addEventListener('click', ()=>{
//     alert('hi');
// });


// but.addEventListener('mouseenter', (e)=>{
//     // console.log('hi');
//     console.log(e);
//     // console.log(e.target);
//     // e.target.remove();
// });


// let i =0;
const deleteElement = (e)=>{
        console.log(e.currentTarget);
        console.log(e.type);
        // i++;
        // if (i==1){
        //     but.removeEventListener('mouseenter',deleteElement);
        // }
    };
// but.addEventListener('click',deleteElement);
// overlay.addEventListener('click',deleteElement);

but.forEach(item=>{
item.addEventListener('click', deleteElement, {once: true});});


// const link =document.querySelector('a');
// link.addEventListener('click',(event)=>{
// event.preventDefault();
// console.log(event.target);
// });
