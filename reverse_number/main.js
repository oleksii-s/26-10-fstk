"use strict";

function reverseNumber () {
    var number = +document.getElementById("number").value;
    var reverseNumber = "";

    while (0 < number) {
        reverseNumber += number % 10;
        number = Math.floor(number/10);
    }

    alert(reverseNumber);
}