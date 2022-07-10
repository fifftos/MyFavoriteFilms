"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов мы посмотрели за год?', '');
    
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN
         (personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов мы посмотрели за год?', '');
        }
     },
     rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt ('Что последнее смотрели?','').trim(),
            b = prompt ('И на сколько фильм вытянул с 1 до 10?','');
            personalMovieDB.movies[a] = b;
            
            if (a != null && b != null && a !='' && b != '' && a.length < 50){
                personalMovieDB.movies[a] = b;
                console.log ('done');
            } else {
                console.log ('error');
                i--;
            }
        }
   },
   detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
        console.log ("Да ладна! Быть не может,не верю)");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log ("Какие то  мы скучные");
    } else if (personalMovieDB.count >= 30) {
        console.log ("Во!!! Это по нашему!");
       }
        else {
            console.log ("Уупс!.. Что-то пошло не так!");
        }
   
 },
 showMyDB: function (hidden) {
    if (!hidden) {
        console.log (personalMovieDB);
    }
  },
  toggleVisibleMyDB: function () {
      if (personalMovieDB.privat) {
        personalMovieDB.privat = false;
      } else {
        personalMovieDB.privat = true;
      }
  },
  writeYourGenres () {
    for (let i = 1;i < 2; i++) {
        let genre = prompt (`Твой любимый жанр под номером ${i}`);

        if (genre === ''|| genre == null) {
            console.log('Вы ввели некорректные данные или не ввели их вовсе');
            i--;
        } else {
            personalMovieDB.genres [i - 1] = genre;

        }
        
      }
      personalMovieDB.genres.forEach((item, i) => {
        console.log (`Любимый жанр ${i + 1} - это ${item}`);
      });
   }

};

 




   



