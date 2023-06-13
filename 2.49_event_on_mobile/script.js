document.addEventListener('DOMContentLoaded',()=>{
    const box=document.querySelector('.box');
    // touch(start, end, move, enter, leave, cancel)
    box.addEventListener('touchstart',()=>{
        box.style.backgroundColor='green';
    });
});