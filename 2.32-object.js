const option = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        background: 'red'
    },
    makeTest:function(){
        console.log('Test');
    }
};

option.makeTest();

// const{border,background}=option.colors;
// console.log(background);
// console.log(Object.keys(option).length);
// console.log(option.colors.background);
// // console.log(option['colors']['background']);
// // delete option.width;
// console.log(option);

// let counter=0;

// for (let key in option) {
//     if (typeof (option[key]) === 'object') {
//         for (let i in option[key]) {
//             console.log(`Свойство ${i}, имеет значение: ${option[key][i]}`);
//             counter++;
//         }
//     }else {
//         console.log(`Свойство ${key}, имеет значение: ${option[key]}`);
//         counter++;
//     }

// }

// console.log(counter);