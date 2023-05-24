function calculateVolumeAndArea(num){
    if (!Number.isInteger(num)||num<0){
        console.log('При вычислении произошла ошибка');
    } else{
    return ('Объем куба: '+num*num*num+', площадь всей поверхности: '+6*num*num);
    }
}
console.log(calculateVolumeAndArea(15));



