'use strict';

function loadUsers() {

    return new Promise(function(resolve, reject) {

        let XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
        let xhr = new XHR();
        let root = 'http://jsonplaceholder.typicode.com';

        xhr.open('GET', root + '/users', true);
        xhr.onload = function() {
            if (this.status == 200) {
                resolve(this.response);
            }
        };

        xhr.onerror = function() {
            reject(new Error("Network Error"));
        };
        xhr.send();
    });

}

loadUsers()
    .then(response => JSON.parse(response))
    .then(users => {
        users.forEach((user) =>
            {
                let li = list.appendChild(document.createElement('li'));
                let div = li.appendChild(document.createElement('div'));
                let divp = div.appendChild(document.createElement('div'));
                let name = divp. appendChild(document.createElement('h3'));
                let hid = divp. appendChild(document.createElement('span'));
                let link = div. appendChild(document.createElement('a'));
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
            }
        );
    })
    .catch(error => {
        alert(error);
    });
