"use strict";

function reverseNumber () {
    var number = +document.getElementById("number").value;
    var reverseNumber = "";
    var show_div = document.getElementById("show");

    while (0 < number) {
        reverseNumber += number % 10;
        number = Math.floor(number/10);
    }

    show_div.innerHTML = reverseNumber;
    show_div.style.display = "block";
    return false;
}