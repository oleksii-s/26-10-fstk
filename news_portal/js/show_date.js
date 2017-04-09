"use strict";

function show_date() {
    Date.prototype.getMonthName = function() {
        let month = ['January','February','March','April','May','June','July',
            'August','September','October','Novemeber','December'];

        return month[this.getMonth()];
    };

    let today = new Date();

    let year = today.getFullYear();
    let month = today.getMonthName();
    let day = today.getDate();

    document.getElementById('date').innerHTML = month + ' ' +day + ', '+year;
}