'use strict';

function loadPosts() {

    return new Promise(function(resolve, reject) {

    let XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
    let xhr = new XHR();
    let root = 'http://jsonplaceholder.typicode.com';

    xhr.open('GET', root + '/posts', true);
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

loadPosts()
    .then(response => JSON.parse(response))
    .then(posts => {
            posts.forEach((post) =>
                {
                    let li = list.appendChild(document.createElement('li'));
                    let div = li.appendChild(document.createElement('div'));
                    let title = div. appendChild(document.createElement('h3'));
                    let p = div. appendChild(document.createElement('p'));
                    let link = "<a href='article.html?id=" + post.id + "'>(View full post)</a>";
                    div.classList.add("post");
                    title.classList.add("title");
                    p.classList.add("shortened-text");
                    title.innerHTML = post.title + "<br>";
                    p.innerHTML = shortenedPost(post.body) + link;
                }
            );
    })
    .catch(error => {
    alert(error);
});
