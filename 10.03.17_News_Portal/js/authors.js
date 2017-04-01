
$.ajax('http://jsonplaceholder.typicode.com/users', {
    method: 'GET'
}).then(function (data) {
    data.forEach(function (author) {
        var name = aut.appendChild(document.createElement('h4'));
        var link = aut.appendChild(document.createElement('p'));
        var line = aut.appendChild(document.createElement('hr'));
        name.innerHTML = "<a class='link_popup' href='javascript:void(0)' data-container='body' data-toggle='popover' data-placement='right' " +
            "data-content='" + "Phone: " + author.phone + "; E-mail: " + author.email +
            "; Address: " + author.address.city + ", " + author.address.street + ", " + author.address.suite + "'>" + author.name + "</a>";
        link.innerHTML = "<a class='btn' href='articles_aut.html?id=" + author.id + "'>Show articles »</a>";

        $(function (){
            $("[data-toggle = 'popover']").popover();
        });
    });
});
