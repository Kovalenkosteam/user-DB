const user = {
    name: 'Eugene',
    surname: 'Kovalenko',
    birthday: '25/09/1992',
    showMyPublicData: function () {
        console.log(`${this.name} ${this.surname}`);
    }
};
const str = ['stringiuhbhiukjn'];
const arr = ['b', 'a', 'c'];
Array.prototype.someMethod = function () { };

// for(let key in user){
//     console.log(user[key]);
// }
// for(let key in str){
//     console.log(str[key]);
// }
// for(let key in arr){
//     console.log(arr[key]);
// }//выводит функцию [Function (anonymous)]


// for(let key in user){
//     console.log(key);
// }
// for(let key in str){
//     console.log(key);
// }
// for(let key in arr){
//     console.log(key);
// }//выводит someMethod


// for(let key of user){
//     console.log(user[key]);
// }
// for (let key of str) {
//     console.log(key);
// }
// for (let key of arr) {
//     console.log(key);
// }//не выводит метод


const solaries = {
    ivan: 500,
    ann: 400,
    igor: 10000,
    sayHello: function () {
        console.log('hello');
    }
};
solaries[Symbol.iterator] = function () {
    return {
        current: this.ivan,
        last: this.igor,
        next() {
            if (this.current < this.last) {
                this.current += 500;
                return {done: false,value: this.current};
            }else{
                return{done:true};
            }
        }
    };
};

for (let res of solaries) {
    console.log(res);
}