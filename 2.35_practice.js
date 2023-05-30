// // const personalPlanPeter = {
// //     name: 'Peter',
// //     age: '29',
// //     skills: {
// //         languages: ['ru', 'eng'],
// //         programmingLangs: {
// //             js: '20%',
// //             php: '10%'
// //         },
// //         exp: '1 month'
// //     },
// //         showAgeAndLangs: function(plan) {
// //             const {age} = plan;
// //             const {languages} = plan.skills;
// //             let str = `Мне ${age} и я владею языками: `;
// //             languages.forEach(function(lang) {
// //                 str += `${lang.toUpperCase()} `;
// //             });
// //         return str;
// //     }
// // };
// // function showExperience(plan) {
// //     const expirience=plan.skills.exp;
// //     return expirience;
// // }
// // function showProgrammingLangs(plan) {
// //     let str = '';
// //     if (Object.keys(plan.skills.programmingLangs).length == 0) {
// //         return str;
// //     } else {
// //         for (let key in plan.skills.programmingLangs) {
// //             str = str + `Язык ${key} изучен на ${plan.skills.programmingLangs[key]}` + '\n';
// //         }
// //     }
// //     return str;
// // }









// // Семья состоит из: Peter Ann Alex Linda
// // const family = ['Peter', 'Ann', 'Alex', 'Linda'];
// // function showFamily(arr) {
// //     let str = '';
// //     if (arr.length == 0) {
// //         return 'Семья пуста';
// //     } else {
// //         arr.forEach(member => {
// //             str += `${member} `;
// //         });
// //         return ('Семья состоит из: ' + str);
// //     }
// // }
// // console.log(showFamily(family));

// // const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// // function standardizeStrings(arr) {
// //     arr.forEach(element=>{
// //         console.log(element.toLowerCase());
// //     });
// // }
// // standardizeStrings(favoriteCities);




// // const someString = 'This is some strange string';
// // function reverse(str) {
// //     if (typeof(str)!='string'){
// //         return 'Ошибка';
// //     }else{
// //         const reverse = [...str].reverse().join('');
// //         return reverse;
// //     }
// // }
// // console.log(reverse(someString));


// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
// function availableCurr(currencies, missingCurr) {
//     let result = 'Доступные валюты:\n';
//     for (let i = 0; i < currencies.length; i++) {
//         if (currencies[i] !== missingCurr) {
//             result += currencies[i] + '\n';
//         }
//     }

//     if (result === 'Доступные валюты:\n') {
//         return 'Нет доступных валют';
//     } else {
//         return result;
//     }
// }
// console.log(availableCurr(['UAH', 'RUB', 'CNY'], 'RUB'));