"use strict";

var showBlock = document.getElementById("numbers");

for (var i = 1; i <= 100; i++) {
    if ((i % 3 !== 0) && (i % 5 !== 0)) {
        showBlock.innerHTML += i + " ";
        continue;
    }

    if (i % 3 === 0) {
        showBlock.innerHTML += "Fizz";
    }

    if (i % 5 === 0) {
        showBlock.innerHTML += "Buzz";
    }

    if (i % 15 === 0) {
        showBlock.innerHTML += "<br>";
    } else {
        showBlock.innerHTML += " ";
    }
}