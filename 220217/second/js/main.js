"use strict";

function alertBands() {
    var bands = document.getElementsByTagName("li");
    var text = "First band in list - ";
    text += bands[0].textContent + "\n";
    text += "Last band in list - ";
    text += bands[bands.length-1].textContent;

    alert(text);
}
