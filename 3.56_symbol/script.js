'use strict'; 
// const obj={
//     name:'Eugene',
//     age:30

// };
// console.log(obj);
// let id= Symbol('fuck'); //нельзя изменить или прочитать, только вывести полностью объект
// obj[id]=id;

// console.log(obj);
// for (let value in obj){
// console.log(value);
// }


let id= Symbol('fuck');
const obj={
    name:'Eugene',
    age:30,
    [id]:id,
    get:function(){
        return this[id];//метод получения символьного свойства
    }
};
console.log(obj.get());
console.log(Object.getOwnPropertySymbols(obj)); //инспектирование объекта на символы


