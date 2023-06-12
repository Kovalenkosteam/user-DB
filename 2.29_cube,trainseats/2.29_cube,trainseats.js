function calculateVolumeAndArea(num){
    if (!Number.isInteger(num)||num<0){
        return ('При вычислении произошла ошибка');
    } else{
    return ('Объем куба: '+num*num*num+', площадь всей поверхности: '+6*num*num);
    }
}
console.log(calculateVolumeAndArea('-15'));

function getCoupeNumber(num) {
    if (!Number.isInteger(num) || num < 0 || typeof(num) === 'string') {
        return ('Ошибка. Проверьте правильность введенного номера места');
    } else if (num > 0 && num <= 36) {
        return Math.ceil(num / 4);
    } else {
        return ('Таких мест в вагоне не существует');
    }
}
console.log(getCoupeNumber(5));