//'use strict';

/*Поиск любимой песни
 - Создайте коллекцию из 5 музыкальных песен, где каждая песня содержит следующую информацию:
 played - количество раз песня была проиграна (определить случайным образом), name - имя песни
 - Напишите функцию favoriteSong, которая принимает коллекцию из песен, и возвращает следующую информацию:
 название песни, сколько раз песня была проиграна, индекс песни в коллекции.
 - Вызовите функцию favoriteSong и передайте ей созданную коллекцию*/


function favoriteSong(arr) {
    arr.forEach(function(item, i) {
        console.log(item.name + " - " + item.played + ", " + i);
    });
}

function Song(name) {
    this.name = name;
    this.played = Math.floor(Math.random() * 100);
}

var songsCollection = [
    song1 = new Song('Yesterday'),
    song2 = new Song('Let It Be'),
    song3 = new Song('Imagine'),
    song4 = new Song('Come Together'),
    song5 = new Song('Bohemian Rhapsody')
];

favoriteSong(songsCollection);
