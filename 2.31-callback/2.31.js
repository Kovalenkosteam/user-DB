// function getTimeFromMinutes(time) {
//     let hours = Math.floor(time / 60);
//     let minutes = time % 60;
//     let hoursEnd = ['часов', 'час', 'часа',];
//     let hoursStr = '';
//     let minutesStr = ` и ${minutes} минут`;
//     if (typeof (time) == 'string' || time > 600 || !Number.isInteger(time) || time<0) {
//         return ('Ошибка, проверьте данные');
//     }else if (hours == 0 || hours >= 5 && hours <= 10) {
//         hoursStr = `Это ${hours} ${hoursEnd[0]}`;
//     } else if (hours == 1) {
//         hoursStr = `Это ${hours} ${hoursEnd[1]}`;
//     } else {
//         hoursStr = `Это ${hours} ${hoursEnd[2]}`;
//     }
//     return (hoursStr + minutesStr);
// }


// function findMaxNumber(a,b,c,d){
//     if(typeof(a)!=='number'||typeof(b)!=='number'||typeof(c)!=='number'||typeof(d)!=='number'||findMaxNumber.length<4){
//         return 0;
//     }else
//     return Math.max(a,b,c,d);
// }


function fib(num) {
    let arr = [0, 1];
    let str = '';
    if (Number.isInteger(num)&&num > 1) {
        for (let i = 2; i < num; i++) {
            arr[i] = arr[i - 1] + arr[i - 2];
        }
        str = arr.join(' ');
        return str;
    } else if(num==1){
        return ('0');
    }else {
        return '';
    }
}
console.log(fib(1));