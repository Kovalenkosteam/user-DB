
// function pow(x, n) {
//     let result = 1;
//     for (let i = 0; i < n; i++) {
//         result *= x;
//     }
//     return result;
// }
// console.log(pow(3,3));


// function pow(x, n) {
//     if (n===1){
//         return x;
//     }else {
//         return x*(pow(x,n-1));
//     }
// }
// console.log(pow(2,6));


// let students = {
//     js: [{
//         name: 'John',
//         progress: 100
//     }, {
//         name: 'Ivan',
//         progress: 60
//     }],
//     html: {
//         basic: [{
//             name: 'Peter',
//             progress: 20
//         }, {
//             name: 'Ann',
//             progress: 18
//         }, {
//             name: 'Sam',
//             progress: 10
//         }]
//     }
// };

// function getTotalProgressByItterations(data) {
//     let total = 0;
//     let students = 0;
//     for (let course of Object.values(data)) {
//         if (Array.isArray(course)) {
//             students += course.length;
//             for (let i = 0; i < course.length; i++) {
//                 total += course[i].progress;
//             }
//         } else {
//             for (let courseTwo of Object.values(course)) {
//                 students += courseTwo.length;
//                 for (let i = 0; i < courseTwo.length; i++) {
//                     total += courseTwo[i].progress;
//                 }
//             }
//         }
//     }
//     return students + ' ' + total;
// }

// console.log(getTotalProgressByItterations(students));




// function getTotalProgressByRecursion(data) {
//     if (Array.isArray(data)) {
//         let total=0;
//         for (let i = 0; i < data.length; i++) {
//             total += data[i].progress;
//         }
//         return [total, data.length];
//     }else{
//         let total= [0,0];
//         for(let dataTwo of Object.values(data)){
//             const dataTwoArr = getTotalProgressByRecursion(dataTwo);
//             total[0]+=dataTwoArr[0];
//             total[1]+=dataTwoArr[1];
//         }
//         return total;
//     }
// }
// console.log(getTotalProgressByRecursion(students));






function factorial(n) {
    if (Number.isInteger(n)){
        if (n===0 || n<0){
            return 1;
        }else{
            return n*factorial(n-1);
        }
    }else{
        return 'NaN';
    }
}
console.log(factorial(-8));
