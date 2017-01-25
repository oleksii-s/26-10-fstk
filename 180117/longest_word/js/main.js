"use strict";

function findLongestWord() {
    var show = document.getElementById("result");
    var text = document.getElementById("text").value;
    var words = text.split(/[ !?.,;]+/);
    var n = words.length;
    var longestWord = [];
    longestWord[0] = "";

    for (var i = 0; i < n; i++) {
        if (words[i].length > longestWord[0].length) {
            if (longestWord.length > 1) {
                longestWord = [];
            }
            longestWord[0] = words[i];
        } else if (words[i].length == longestWord[0].length) {
            longestWord[longestWord.length ] = words[i];
        }
    }

    show.innerHTML = longestWord;
    return false;
}