"use strict";

function chooseWholeNumbersFromRange() {
    var from = +document.getElementById("number_from").value;
    var to = +document.getElementById("number_to").value;
    var show_div = document.getElementById("show");
    var arrayOfWholeNumbers = [];

    for (++from; from < to; from++) {
        arrayOfWholeNumbers[arrayOfWholeNumbers.length] = from;
    }

    show_div.innerHTML = arrayOfWholeNumbers;
    show_div.style.display = "block";

    return false;
}
