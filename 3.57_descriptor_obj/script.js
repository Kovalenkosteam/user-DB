const user = {
    name: 'Eugene',
    surname: 'Kovalenko',
    birthday: '25/09/1992',
    showMyPublicData: function () {
        console.log(`${this.name} ${this.surname}`);
    }
};
// user.name = 'Steamstyle';
// console.log(Object.getOwnPropertyDescriptor(user, 'name'));
// Object.defineProperty(user, 'name', { writable: false });
// user.name = 'авпвап';
// console.log(Object.getOwnPropertyDescriptor(user, 'name')); 

//writable-если стоит этот флаг в состоянии false, то возможно только чтение
//enumerable- если true, то возможно перебор  в циклах, если нет, то циклы не помогут
//configurable- запрет изменений навсегда


// Object.defineProperty(user, 'genre', { value: 'male' });
// console.log(user.genre);
// user.genre='famile';
// console.log(Object.getOwnPropertyDescriptor(user, 'genre'));


// Object.defineProperty(user, 'birthday', {value:prompt('Date?'), writable:false}); //получить birthday динамически(из ptompt)
// console.log(Object.getOwnPropertyDescriptor(user, 'birthday'));
// name.birthday='drgd';



// Object.defineProperty(user, 'showMyPublicData', {enumerable:true});//в этом случае он будет показываться при переборе
// console.log(Object.getOwnPropertyDescriptor(user,'showMyPublicData'));
// for(let key in user){
//     console.log(key);
// }


console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
