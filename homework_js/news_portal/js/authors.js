function loadUsers() {

    var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
    var xhr = new XHR();
    var root = 'http://jsonplaceholder.typicode.com';

    xhr.open('GET', root + '/users', true);
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) return;

        if (xhr.status != 200) {
            alert( xhr.status + ': ' + xhr.statusText );
        } else {
            try {
                var users = JSON.parse(xhr.responseText);
            } catch (e) {
                alert( "Некорректный ответ " + e.message );
            }
            showUsers(users);
        }

    };

}

function showUsers(users) {

    users.forEach(function(user) {
        var li = list.appendChild(document.createElement('li'));
        var div = li.appendChild(document.createElement('div'));
        var divp = div.appendChild(document.createElement('div'));
        var name = divp. appendChild(document.createElement('h3'));
        var hid = divp. appendChild(document.createElement('span'));
        var link = div. appendChild(document.createElement('a'));
        div.classList.add("post");
        divp.classList.add("popup");
        divp.onclick = function() {
            var popup = document.getElementsByClassName('popuptext')[user.id-1];
            popup.classList.toggle("show");
        };
        name.display = 'inline';
        hid.classList.add("popuptext");
        hid.innerHTML="<b>Phone: </b>" + user.phone + "<br>" + "<b>E-mail: </b>" + user.email + "<br>" +
            "<b>Website: </b>" + user.website + "<br><b>Address: </b>" + user.address.city + ", " + user.address.street +
        ", " +user.address.suite;
        link.style.fontSize='0.9rem';
        link.href="author_articles.html?userId=" + user.id + "&userName=" + user.name;
        link.innerHTML= "View all articles";
        name.innerHTML="<a class='info'>" + user.name + "</a>";
    });

}


loadUsers();