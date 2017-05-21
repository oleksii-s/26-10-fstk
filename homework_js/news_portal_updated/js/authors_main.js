'use strict';

// localStorage.clear();

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
                let ul = document.getElementsByClassName("list-group")[0];
                let li = ul.appendChild(document.createElement('li'));
                let link = li.appendChild(document.createElement('a'));
                li.classList.add("list-group-item");
                link.addEventListener("click", function () {
                    localStorage.setItem('id', user.id);
                    localStorage.setItem('username', user.name);
                });
                link.style.fontSize='1.5rem';
                link.href="index.html";
                // link.href="homepage.html?userId=" + user.id + "&userName=" + user.name;
                link.innerHTML= user.name;
            }
        );
    })
    .catch(error => {
        alert(error);
    });