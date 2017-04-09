"use strict";

let target = "https://jsonplaceholder.typicode.com/posts/";
target += window.location.search.replace('?id=', '');

let author_target = "https://jsonplaceholder.typicode.com/users/";

dataProvider('GET', target)
    .then(response => JSON.parse(response))
    .then(({userId, title, body}) => {
        document.getElementById('title').innerHTML = title;
        document.getElementById('article').innerHTML = body;
        return userId;
    })
    .then(userId => {
        dataProvider('GET', author_target + userId)
            .then(response => JSON.parse(response))
            .then(({name}) => {
                let author = document.getElementById('author');
                author.innerHTML = "by <a href='author_articles.shtml?id=" + userId + "'>" + name + "</a>";
            })
    })
    .catch(error => {
        alert(error);
    });

function showHide() {
    dataProvider('GET', target + '/comments')
        .then(response => JSON.parse(response))
        .then(data => {
            let obj = document.getElementById('comments');

            for (let i = 0; i < data.length; i++) {
                let { name, email, body } = data[i];
                let ava = "<div><img src='images/ava.png' alt='avatar'></div>";
                let comment = document.createElement('div');
                let c_email = '<div><span class="email">By ' + email + '</span><br/>';
                let c_title = '<span class="comment_title">' + name + '</span><br/>';
                let c_body = '<span class="comment_body">' + body + '</span><br/><br/></div>';

                comment.innerHTML = '<div class="comment">' + ava + c_email + c_title + c_body + '</div>';

                obj.appendChild(comment);
            }
        })
        .then(() => {
            let obj = document.getElementById('comments');

            obj.style.display != "block" ? obj.style.display = "block" : obj.style.display = "none";
        })
        .catch(error => {
        alert(error);
    });
}

function dataProvider(method, url) {

    return new Promise(function(resolve, reject) {

        let XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
        let xhr = new XHR();

        xhr.open(method, url, true);

        xhr.onload = function() {
            resolve(this.response);
        };

        xhr.onerror = function() {
            reject(new Error("Network Error"));
        };

        xhr.send();
    });
}

