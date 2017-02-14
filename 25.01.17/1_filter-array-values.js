'use strict';

/*Создайте функцию filterArrayValues(arr, a, b),
которая получает массив с числами arr и удаляет из него все числа вне диапазона a..b.
То есть, проверка имеет вид a ≤ arr[i] ≤ b.
Функция должна менять сам массив и ничего не возвращать.*/


function filterArrayValues(arr, a, b) {
    arr.forEach(function(item, i, arr) {
        if (arr[i] < a || arr[i] > b) {
            delete arr[i];
        }
    });
}

var array = [5, -1, 10, 11, 3, 7, 5, 12, 9, 15];
filterArrayValues(array, 3, 11);
console.log(array);