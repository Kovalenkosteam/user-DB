
let numberOfFilms;
function start() {
    numberOfFilms = prompt('Сколько фильмов посмотрел', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Сколько фильмов посмотрел', '');
    }
}
start();
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('последний фильм', '');
        const b = prompt('его оценка', '');
        if (a != null && b != null && a != '' && b != '') {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}
// rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('просмотрено мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB) {
        console.log('ты классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('ебать ты киноман');
    } else {
        console.log('произошла ошибка');
    }
}
// detectPersonalLevel();

function ShowMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
ShowMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt('Ваш любимый жанр под номером ' + (i+1), '');
    }
}
// writeYourGenres()
