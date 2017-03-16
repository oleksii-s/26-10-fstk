function show_date(){
    Date.prototype.getMonthName = function() {
        var month = ['January','February','March','April','May','June','July','August','September','October','Novemeber','December'];
        return month[this.getMonth()];
    };

    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonthName();
    var day = today.getDate();

    document.getElementById('date').innerHTML = month + ' ' +day + ', '+year;
}