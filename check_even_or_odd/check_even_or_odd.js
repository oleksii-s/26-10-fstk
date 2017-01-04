"use strict";

function checkEvenOrOdd () {
    var number = document.getElementById("number").value;
    if (number % 2 === 0) {
        alert("It's even number!");
    } else {
        alert ("It's odd number!");
    }
}
