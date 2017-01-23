'use strict';

/*Напишите JavaScript программу, которая вернет ряд целых чисел в диапазоне (х, у).
 Пример: Диапазон (2, 9)
 Ожидаемые результаты: [3, 4, 5, 6, 7, 8]*/

alert('Введите диапазон чисел (два числа - от и до):');
var numFrom = getNumberFromUser();
var numTo = getNumberFromUser();
alert(getIntegersNumbers(numFrom, numTo));


// Получаем ряд целых чисел в диапазоне (х, у)
function getIntegersNumbers(numberFrom, numberTo) {
    while (checkNumbers(numberFrom) == false || checkNumbers(numberTo) == false) {
        alert('Вы ввели некорректные числа. Введите числа правильно:');
        numberFrom = getNumberFromUser();
        numberTo = getNumberFromUser();
    }
    var arrayNums = [];
    for (var i = Number(numberFrom) + 1; i < Number(numberTo); i++) {
        arrayNums.push(i);
    }
    return arrayNums;
}

// Проверяем числа на корректность
function checkNumbers(number) {
    if (number == '' || isNaN(number))
        return false;
    else
        return number;
}

// Получаем введенное пользователем число
function getNumberFromUser() {
    return prompt('Введите число:', '');
}
