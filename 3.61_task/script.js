// В каждой книге есть n страниц с номерами страниц от 1 до n.
// Написать функцию amountOfPages, аргумент которой summary составляется путем сложения количества цифр всех номеров страниц.
// Эта функция возвращает число - количество страниц n в книге.Чтобы было понятно что такое количество цифр, давайте рассмотрим примеры.
//     Пример:
// Если на входе функции summary = 25, то на результат должен быть 17. 
// Всего в числах от 1 до 17 содержится 25 цифр: 1234567891011121314151617.
// Функция на вход как раз принимает это общее количество цифр, а возвращает конечное число, то есть последнюю страницу книги.
// amountOfPages(5) => 5
// amountOfPages(25) => 17
// amountOfPages(1095) => 401
// amountOfPages(185) => 97

// function amountOfPages(summary) {
//     let result = '';
//     let n = 0;
//     for (let i = 1; i <= summary; i++) {
//         result += i;
//         if (result.length === summary) {
//             n = i;
//             break;
//         }
//     }
//     return n;
// }

// console.log(amountOfPages(25));







// Панграмма — это предложение, в котором каждая буква алфавита встречается хотя бы по одному разу по возможности без повторений. 
// Например, предложение «The quick brown fox jumps over the lazy dog» является панграммой, 
// поскольку в нем хотя бы один раз используются буквы от A до Z (регистр значения не имеет).
// Напишите функцию isPangram, которая принимает в себя строку и возвращает логическое значение.
// Если строка является панграммой - вернется true, если нет - false.
// Пример:
// isPangram(«The quick brown fox jumps over the lazy dog») => true
// isPangram(«Hello world») => false
// P.S. Эта задача имеет много вариантов решения, часть из которых использует возможности, 
// которые мы будем проходить дальше по курсу. Но и без них можно это сделать.
// function pangrams(string) {
//     const alph = "abcdefghijklmnopqrstuvwxyz";
//     for (let i = 0; i < alph.length; i++) {
//         if (string.indexOf(alph[i]) === -1) {
//             return false;
//         }
//     }
//     return true;
// }
// const s1 = 'The quick brown fox jumps over the lazy dog';
// console.log(pangrams(s1));

// const s2 = 'We promptly judged antique ivory buckles for the prize';
// console.log(pangrams(s2));





// Создайте функцию deepCount, которая будет считать количество всех элементов в массиве, включая и вложенные массивы. 
// Учтите, что сам вложенный массив тоже входит в счет. Чтобы понять задачу детальнее, давайте рассмотрим примеры:
// deepCount([1, 5, 3]) => 3
// deepCount(["1", 5, "3", ["10"]]) => 5 (Заметьте, что последний элемент был посчитан сам + его внутренность)
// deepCount([1, 2, [3, 4, [5]]]) => 7
// deepCount([]) => 0
// deepCount([[[[[[[[[]]]]]]]]]) => 8

function deepCount(a){
    let sum = a.length;
        for (let item of a) {
                if (Array.isArray(item)) {
                        sum=sum+deepCount(item);
                }
        }
        return sum;
}