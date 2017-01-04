"use strict";

function checkMagicNumber () {
    var magicNumber = Math.floor((Math.random() * 10) + 1);
    var number = document.getElementById("number").value;

    if (magicNumber == number) {
        alert(number + " is a magic number! Good job!");
    } else {
        alert (number + " is not a magic number! You loose!");
    }
}