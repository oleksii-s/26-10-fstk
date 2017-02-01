"use strict";

var arrayOfEvenNumbers = [2, 4, 8, 100, 0, -80, 3, 122];
var arrayOfOddNumbers = [1, 5, 33, 115, 8, 433, -55];

function findN(arr) {
    var odd = [];
    var even = arr.filter(function (item) {
        if (item % 2 === 0) {
            return item;
        } else {
            odd[odd.length] = item;
        }
    });

    if (even.length === 1) {
        return even[0];
    }

    return odd[0];
}

console.log(findN(arrayOfEvenNumbers));
console.log(findN(arrayOfOddNumbers));
