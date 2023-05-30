function copy(mainCopy){
    let objCopy={};
    for(let key in mainCopy){
        objCopy[key]=mainCopy[key];
    }
    return  objCopy;
}
const numbers={
    a:2,
    b:5,
    c:{
        x:7,
        y:8
    }
};
const newNumber=copy(numbers);
numbers.a=10;
// numbers.c.x=4;
// console.log(numbers);
// console.log(newNumber);

const add={
    d:20,
    e:27
};

// console.log(Object.assign(numbers,add));

const arr=['a','b','c'];
const newArr=arr.slice();
newArr[0]='n';
// console.log(arr);
// console.log(newArr);

const video=['youtube', 'rutube'];
const blogs=['pikabu','blogger'];
const all=[...video, ...blogs, 'vk'];
console.log(all);

