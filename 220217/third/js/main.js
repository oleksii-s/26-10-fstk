"use strict";

function addRow() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var numberOfRows = document.getElementsByClassName("row").length;
    var tbody = document.getElementsByTagName("tbody")[0];

    var row = "<tr class='row'><td class='first-col'>" + +numberOfRows + "</td>";
    row += "<td class='second-col'>" + name + "</td>";
    row += "<td class='third-col'>" + age + "</td></tr>";

    tbody.insertAdjacentHTML("beforeend", row);

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
}
