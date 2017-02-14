'use strict';

/*На входе массив чисел, например: arr = [1,2,3,4,5].
Напишите функцию arrSummarise(arr),
вызов которой должен возвращать новый массив из такого же числа элементов,
в котором на каждой позиции должна быть сумма элементов arr до этой позиции включительно.*/


function arrSummarise(arr) {
    var arrResult = [];
    if (!arr.length) return "Массив пустой!!";

    var lastSum = arr.reduce(function(sumPreviousItems, currentItem) {
        arrResult.push(sumPreviousItems);
        return sumPreviousItems + currentItem;
    });
    arrResult.push(lastSum);

    return arrResult;
}

var array = [1, 2, 3, 4, 5];
console.log(arrSummarise(array));


