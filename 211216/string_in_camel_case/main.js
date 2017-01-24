"use strict";

function convertTextToCamelCase () {
    var text = document.getElementById("text").value;
    var output = document.getElementById("output");
    var camelizeText = text.toLowerCase();
    camelizeText = camelizeText.replace(/\b[a-z]/g, function(letter) {
        return letter.toUpperCase(); } );

    output.innerHTML = camelizeText;

    return false;
}
