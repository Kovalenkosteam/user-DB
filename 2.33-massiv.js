const arr = [1, 3, 2, 6, 4];
arr.pop();
arr.push(12);
arr.sort(compareNum);
function compareNum(a,b){
    return a-b;
}
console.log(arr);
// for (let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }
// for(let value of arr){
//     console.log(value);
// }


// const str = prompt('--', '++');
// const product = str.split(',');
// console.log(product.join('; '));