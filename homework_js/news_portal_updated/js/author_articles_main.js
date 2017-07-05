'use strict';

if (localStorage.length === 0) {
    localStorage.setItem('id', '1');
    localStorage.setItem('username', 'Leanne Graham');
}

let author = 'http://jsonplaceholder.typicode.com/users';
let article = 'http://jsonplaceholder.typicode.com/posts?userId=' + localStorage.getItem('id');

function loader(method, url) {

    return new Promise(function(resolve, reject) {

        let XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
        let xhr = new XHR();

        xhr.open(method, url, false);
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

function shortenedPost (str) {
    if (str.length > 40) {
        return (str.substring(0, 40) + "...");
    }
    else {
        return str;
    }
}

loader('GET', author)
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
                link.innerHTML= user.name;
            }
        );
    })
    .catch(error => {
        alert(error);
    });

loader('GET', article)
    .then(response => JSON.parse(response))
    .then(posts => {
        let name = document.getElementsByTagName('section')[0];
        let div = name.appendChild(document.createElement('div'));
        let h3 = div.appendChild(document.createElement('h3'));
        let hr = div.appendChild(document.createElement('hr'));
        h3.style.color = '#f4af00';
        h3.innerHTML = localStorage.getItem('username') + "'s articles";
        posts.forEach((post) =>
            {
                let name = document.getElementsByTagName('section')[0];
                let div = name.appendChild(document.createElement('div'));
                let title = div. appendChild(document.createElement('h4'));
                let p = div. appendChild(document.createElement('p'));
                let link = "<a href='article.html?id=" + post.id + "'>(View full post)</a>";
                div.classList.add("col-md-4");
                p.classList.add("shortened-text");
                title.innerHTML = post.title + "<br>";
                p.innerHTML = shortenedPost(post.body) + link;
            }
        );
    })
    .catch(error => {
        alert(error);
    });
