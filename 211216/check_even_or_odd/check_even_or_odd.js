"use strict";

function checkEvenOrOdd () {
    var number = document.getElementById("number").value;
    var show_div = document.getElementById("show");

    if (number % 2 === 0) {
        show_div.innerHTML = "It's even number!";
    } else {
        show_div.innerHTML = "It's odd number!";
    }

    show_div.style.display = "block";
    return false;
}
