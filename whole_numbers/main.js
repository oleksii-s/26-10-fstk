"use strict";

function chooseWholeNumbersFromRange() {
    var from = +document.getElementById("number_from").value;
    var to = +document.getElementById("number_to").value;
    var arrayOfWholeNumbers = [];

    for (++from; from < to; from++) {
        arrayOfWholeNumbers[arrayOfWholeNumbers.length] = from;
    }

    alert(arrayOfWholeNumbers);
}
