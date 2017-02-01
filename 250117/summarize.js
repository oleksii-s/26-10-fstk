"use strict";

var arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function arrSummarize (arr) {
    var newArr = [];

    arr.reduce(function(sum, currentItem, i) {
        newArr[i] = sum + currentItem;
        return newArr[i];
    }, 0);

    return newArr;
}

console.log(arrSummarize(arrayOfNumbers));