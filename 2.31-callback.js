// function learnJS(lang, callback){
//     console.log(`Я учу:${lang}`);
//     callback();
// }
// learnJS('Javascript', function(){
//     console.log('Я прошел этот урок!');
// });


function learnJS(lang, callback){
    console.log(`Я учу:${lang}`);
    callback();
}
function done(){
    console.log('Я прошел этот урок!');
}
learnJS('Javascript', done);