const but = document.querySelectorAll('button');
const wrapper= document.querySelector('.btn-block');
// console.log(but[0].classList.length); количество классов у кнопки
// console.log(but[0].classList.item(0)); определение класса
// console.log(but[0].classList.add('red'));
// console.log(but[0].classList.remove('blue', 'some'));
// console.log(but[0].classList.toggle('blue'));//если этот класс есть, то он удалится.если его нет, добавится

// //содержится ли класс red в кнопке
// if (but[0].classList.contains('red')) {
// 	console.log('yes');
// }
// else{
// 	console.log('no');
// }



// console.log(but[0].className);
but[0].addEventListener('click', ()=>{
	but[1].classList.toggle('red');
});



// wrapper.addEventListener('click',(event)=>{
// 	// console.dir(event.target);
// 	if (event.target && event.target.tagName=='BUTTON'){
// 		console.log('hi');
// 	}
// });


wrapper.addEventListener('click',(event)=>{
	// console.dir(event.target);
	if (event.target && event.target.matches('buTton.red')){
		console.log('hi');
	}
});





//не будет срабатывать на добавленные элементы
// but.forEach(butt=>{
// 	butt.addEventListener('click', ()=>{
// 		console.log('he');
// 	});
// });

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);