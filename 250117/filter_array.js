"use strict";

var arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterArrayValues (arr, a, b) {
    arr.forEach(function (item, i, arr) {
        if (a > item || b < item) {
            delete arr[i];
        }
    });
}

filterArrayValues(arrayOfNumbers, 5, 7);

console.log(arrayOfNumbers);
