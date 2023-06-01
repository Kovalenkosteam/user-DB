// const shoppingMallData = {
//     shops: [
//         {
//             width: 10,
//             length: 5
//         },
//         {
//             width: 15,
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 8,
//             length: 10
//         }
//     ],
//     height: 5,
//     moneyPer1m3: 30,
//     budget: 50000
// };

// function isBudgetEnough(data) {
// let square=0;
// let volume=0
// data.shops.forEach((shop)=>{
//     square+=shop.width*shop.length;
// });
// volume=square*data.height;
// if((data.budget-(volume*data.moneyPer1m3))>0){
// return 'Бюджета достаточно';
// }else{
//     return 'Бюджета недостаточно';
// }
// }

// console.log(isBudgetEnough(shoppingMallData));



const students = ['Peter', 'Andrew','Jas', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    let result = [];
    console.log(arr.sort());
    for (let i = 0; i < arr.sort().length; i++) {
        if ((i + 1) % 3 === 0) {
            result.push([arr[i - 2], arr[i - 1], arr[i]]);
        }
    }
    if (arr.length % 3 === 1) {
        result.push(`Оставшиеся студенты: ${arr[arr.length-1]}`);
    }else if (arr.length % 3 === 2) {
        result.push(`Оставшиеся студенты: ${arr[arr.length-2]}, ${arr[arr.length-1]}`);
    }else {
        result.push('Оставшиеся студенты: -');
    }
    return result;
}
console.log(sortStudentsByGroups(students));