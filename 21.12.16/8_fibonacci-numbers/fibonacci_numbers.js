'use strict';

/*Напишите JavaScript программу, чтобы получить первые n чисел Фибоначчи (n - количество чисел Фибоначчи).
Примечание: Последовательность Фибоначчи является последовательность чисел: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34,...
Каждое последующее число является суммой двух предыдущих.*/

document.write(fibonacciNumbers(10));

function fibonacciNumbers(n) {
    var array = [0, 1];
    if (n <= 1)
        array.pop();

    for (var i = n - (n - 2); i < n; i++) {
        array.push(array[i-1] + array[i-2]);
    }
    return array;
}
