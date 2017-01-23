'use strict';

/*Написать JavaScript функцию, которая принимает два аргумента, строку и букву.
Функция подсчитывает количество вхождений указанной буквы в строке.
 Примеры аргументы: 'facebook.com', 'о'
 Ожидаемые результаты: 3*/

document.write(countLetter("facebook.com", "o"));

function countLetter(str, letter) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] == letter)
            count++;
    }
    return count;
}
