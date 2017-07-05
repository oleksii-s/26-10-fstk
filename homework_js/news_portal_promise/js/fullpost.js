'use strict';

let strGET = window.location.search.replace( '?id=', '');
let post = 'http://jsonplaceholder.typicode.com/posts/' + strGET;
let comment = 'http://jsonplaceholder.typicode.com/comments?postId=' + strGET;

function loader(method, url) {

    return new Promise(function(resolve, reject) {

    let XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
    let xhr = new XHR();

    xhr.open(method, url, true);
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


loader('GET', post)
    .then(response => JSON.parse(response))
    .then(post => {
        let title = article.appendChild(document.createElement('h3'));
        let p = article.appendChild(document.createElement('p'));
        let a = article.appendChild(document.createElement('a'));
        a.href = '#';
        a.addEventListener("click", start);
        a.id = "eventLink";
        a.style.fontSize='0.9rem';
        p.classList.add("shortened-text");
        title.innerHTML = post.title + "<br>";
        p.innerHTML = post.body + "<br>";
        a.innerHTML= "Show comments";
    })
    .catch(error => {
        alert(error);
    });

function start() {
    loader('GET', comment)
        .then(response => JSON.parse(response))
        .then(comments => {
            let ul = coms.appendChild(document.createElement('ul'));
            comments.forEach((com) =>
                {
                    let li = ul.appendChild(document.createElement('li'));
                    let div = li.appendChild(document.createElement('div'));
                    let email = div. appendChild(document.createElement('a'));
                    let hr = div. appendChild(document.createElement('hr'));
                    let cmnt = div. appendChild(document.createElement('span'));
                    div.classList.add("dialogbox");
                    email.href="mailto:" + com.email;
                    email.innerHTML = com.email + "<br>";
                    cmnt.innerHTML= com.body;
                }
            );
            eventLink.removeEventListener("click", start);
        })
        .catch(error => {
            alert(error);
        });
}
