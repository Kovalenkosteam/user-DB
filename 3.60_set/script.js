const arr=[1,1,2,3,2,'ann', 'alex', 'igor','alex'];
// console.log(arr);
const set= new Set(arr);// создает объект, в котором не будет повторений, работает со строками
set.add('oleg');

// console.log(set);
// set.delete('ann');
// if (set.has('alex')) console.log('hello');//проверка на вхождение
// console.log(set);
// console.log(set.size);
// set.clear();//очистить
// console.log(set);

// for(let value of set) console.log(value);//перебор

// set.forEach((item, valueAgain, set) =>{console.log(item+valueAgain);});//перебор. valueAgain только для строк

// console.log(set.values());

function unique(arr){
    return Array.from(new Set(arr));
}
console.log(unique(arr)); //фильтрация массива от повторений