'use strict';

/*Написать функцию JavaScript (применив замыкания), которая представляет собой счетчик.
Счетчик должен иметь следующий функционал:
 - increment
 (увеличение значения счетчика на единицу)
 - decrement (уменьшение значения счетчика на единицу)
 - get (возврат значения счетчика)
 - reset (сброс значения счетчика)*/

function makeCounter () {
    var currentCount = 1;

    function counter () {
        return currentCount;
    }

    counter.increment = function () {
        currentCount++;
    };

    counter.decrement = function () {
        currentCount--;
    };

    counter.get = function () {
        return currentCount;
    };

    counter.reset = function () {
        currentCount = 1;
    };

    return counter;
}

var counter = makeCounter();

console.log(counter()); // 1

counter.increment();
counter.increment();
console.log(counter()); // 3
console.log(counter.get()); // 3

counter.decrement();
console.log(counter.get()); // 2

counter.reset();
console.log(counter.get()); // 1

counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
console.log(counter()); // 7