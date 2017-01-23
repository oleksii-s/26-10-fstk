'use strict';

/*Напишите JavaScript функцию, которая в качестве значения принимает число и возвращает его в обратном порядке (реверс).
 Пример х = 32243;
 Ожидаемый результат: 34223*/

var num = prompt('Введите число', '');

// Проверяем число на корректность
while (!window.num || isNaN(num)) {
    num = prompt('Введите число правильно:', '');
}

// Делаем реверс числа и выводим
var reversedNum = num.split("").reverse().join("");
alert(reversedNum);
