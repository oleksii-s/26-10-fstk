"use strict";

function checkMagicNumber () {
    var magicNumber = Math.floor((Math.random() * 10) + 1);
    var number = document.getElementById("number").value;
    var show_div = document.getElementById("show");

    if (magicNumber == number) {
        show_div.innerHTML = number + " is a magic number! Good job!";
    } else {
        show_div.innerHTML = number + " is not a magic number! You loose!";
    }

    show_div.style.display = "block";
    return false;
}