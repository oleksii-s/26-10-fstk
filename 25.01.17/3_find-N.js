'use strict';

/*На входе массив (который будет иметь длину, по меньшей мере, 3, но может быть очень большим), содержащий целые числа.
 Массив либо полностью состоит из нечетных чисел или полностью состоит из четных чисел кроме одного целого числа N.
 Напишите функцию, которая принимает массив в качестве аргумента и возвращает число N.

 Например:
 [2, 4, 0, 100, 4, 11, 2602, 36]
 Должно вернуть: 11

 [160, 3, 1719, 19, 11, 13, -21]
 Должно вернуть: 160*/


function findN(arr) {
    if (arr.length < 3) return "Длина массива - " + arr.length + " . Нужно минимум 3";

    var evenNumArr = arr.filter(function(number) {
        return number % 2 == 0;
    });
    var oddNumArr = arr.filter(function(number) {
        return number % 2 != 0;
    });

    if (evenNumArr.length == 1) return evenNumArr[0];
    if (oddNumArr.length == 1) return oddNumArr[0];
}

var array1 = [2, 4, 0, 100, 4, 11, 2602, 36];
console.log(findN(array1));

var array2 = [160, 3, 1719, 19, 11, 13, -21];
console.log(findN(array2));