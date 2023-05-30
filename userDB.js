const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = prompt('Сколько фильмов посмотрел', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = prompt('Сколько фильмов посмотрел', '');
        }
    },
    rememberMyFilms: () => {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов', '').trim();
            const b = prompt('Оцени свой последний фильм', '');
            if (a != null && b != null && a != '' && b != '') {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: () => {
        if (personalMovieDB.count < 10) {
            console.log('просмотрено мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('ты классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('ебать ты киноман');
        } else {
            console.log('произошла ошибка');
        }
    },
    ShowMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: () => {
        for (let i = 0; i < 1 /*3*/ ; i++) {
            // let genres = prompt('Ваш любимый жанр под номером ' + (i + 1), '');
            // if (genres == '' || genres == null) {
            //     console.log('неправильно сука');
            //     i--;
            // } else
            // {
            //     personalMovieDB.genres[i] = genres;
            // }

            let genres = prompt('Ваши любимые жанры через запятую ');
            if (genres == '' || genres == null) {
                console.log('неправильно сука');
                i--;
            } else
            {
                personalMovieDB.genres /*[i]*/ = genres.split(', '); /* без split*/
            }
        }
        personalMovieDB.genres.forEach((item,i)=>{
            console.log(`Любимый жанр ${i+1} - это ${item}`);
        });
    },
toggleVisibleMyDB: () => {
    personalMovieDB.privat = !personalMovieDB.privat;
}
};



