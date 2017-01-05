"use strict";

function showResult () {
    var string = document.getElementById("text").value;
    var sub_string = document.getElementById("sub_str").value;
    var show_div = document.getElementById("show");

    show_div.innerHTML = countSubstrings(string, sub_string);

    return false;
}

function countSubstrings(str, sub) {
    var regexp = new RegExp(sub, "g");
    return (str.match(regexp) || []).length;
}