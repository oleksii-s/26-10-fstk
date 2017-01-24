"use strict";

function showResult () {
    var length = +document.getElementById("length").value;
    var show_div = document.getElementById("show");

    if (0 == length) {
        show_div.innerHTML = "Try to start from 1!";
        show_div.style.display = "block";
        return false;
    }

    show_div.innerHTML = "";
    getFibonacci(length, show_div);
    show_div.style.display = "block";

    return false;
}

function getFibonacci (n, show_div) {
    var a = 1,
        b = 0;

    for (var i = 1; i <= n; i++) {
        var c = a + b;
        a = b;
        b = c;
        if (i !== n) {
            show_div.innerHTML += b + ", ";
        } else {
            show_div.innerHTML += b + "!";
        }
    }
}