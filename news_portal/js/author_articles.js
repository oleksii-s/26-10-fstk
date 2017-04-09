"use strict";

let author_target = "https://jsonplaceholder.typicode.com/users/";
author_target += window.location.search.replace('?id=', '');

let target = "http://jsonplaceholder.typicode.com/posts?userId=";

dataProvider('GET', author_target)
    .then(response => JSON.parse(response))
    .then(({name, id}) => {
        let author = document.getElementById('author_art');
        author.innerHTML = name + "'s Articles";
        return id;
    })
    .then(id => {
        dataProvider('GET', target + id)
            .then(response => JSON.parse(response))
            .then(data => {
                for (let i = 0; i < data.length; i++) {
                    let { id, title } = data[i];
                    let section = document.getElementById('sec');
                    let articles_name = "<div class='article_name'><a href='article.shtml?id=" + id + "'>" + title + "</a></div>";
                    let read_full_article = "<div class='show_comment'><a href='article.shtml?id=" + id + "'>Read full article>>></a></div>";
                    section.innerHTML += "<div class='list'>" + articles_name + read_full_article + "</div><br/>";
                }
            })
            .catch(error => {
                alert(error);
            });
    })
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
