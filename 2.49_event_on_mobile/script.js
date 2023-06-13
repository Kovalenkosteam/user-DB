<<<<<<< HEAD
document.addEventListener('DOMException',()=>{

=======
document.addEventListener('DOMContentLoaded',()=>{
    const box=document.querySelector('.box');
    // touch(start, end, move, enter, leave, cancel)
    box.addEventListener('touchstart',()=>{
        box.style.backgroundColor='green';
    });
>>>>>>> fc4a4e2 (2.49_event_on_mobile)
});