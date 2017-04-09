"use strict";

let target = "http://jsonplaceholder.typicode.com/posts";
let author_target = "https://jsonplaceholder.typicode.com/users/";

let request1 = dataProvider('GET', target)
    .then(response => JSON.parse(response))
    .then(data => {
        let section = document.getElementById('section');
        for (let i = 0; i < data.length/3; i++) {
            let cell = '<div class="col-xs-12 col-sm-4"></div>';
            section.innerHTML += '<div class="row">' + cell + cell + cell + '</div>';
        }
        return data;
    })
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            let {userId, id, body, title} = data[i];
            let cell = document.getElementsByClassName('col-xs-12 col-sm-4')[i];
            if (i < data.length) {
                let author_link = "<a href='author_articles.shtml?id=" + userId + "'></a>";
                let title_link = '<a href="article.shtml?id=' + id + '">' + title + '</a>';
                let author = "<span class='author'>" + author_link + "</span><br>";
                let title1 = '<span class="title">' + title_link + '</span><br><br>';
                let desc = '<span class="desc">' + body.substr(0, 100) + '...' + '</span>';
                let link = "<a href='article.shtml?id=" + data[i]['id'] + "'>Read more>>></a>";
                cell.innerHTML = author + title1 + desc + " " + link;
            } else {
                cell.innerHTML = "<div class='empty'></div>";
            }
        }
    })
    .catch(error => {
        alert(error);
    });

let request2 = dataProvider('GET', author_target)
    .then(response => JSON.parse(response))
    .then(data => {
        let class_author = document.getElementsByClassName('author');
        for (let j = 0; j < class_author.length; j++) {
            let userId = class_author[j].getElementsByTagName('a')[0].getAttribute('href');
            userId = userId.replace('author_articles.shtml?id=', '') - 1;
            class_author[j].getElementsByTagName('a')[0].innerHTML = data[userId].name;
        }
    })
    .catch(error => {
        alert(error);
    });

Promise.all([request1, request2])
    .then(results => {})
    .catch(error => {
        alert(error);
    });

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
