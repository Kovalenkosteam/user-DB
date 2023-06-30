'use strict';
// const now=new Date();
// const nowless=Date(now.getTime());
// // console.log(now);
// // console.log(now.getFullYear());//год
// // console.log(now.getMonth());//месяц
// // console.log(now.getDate());//день
// console.log(now.getTime());//милисекунды



let start=new Date();
for (let i = 0; i <10000000;i++){
	let b=i**3;
}
let end= new Date();
alert(`цикл отработал за ${end-start} миллисекунд`);


