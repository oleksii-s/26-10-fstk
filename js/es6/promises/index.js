/**
 * Created by oleksii on 03.04.17.
 */
'use strict';

let target = "https://jsonplaceholder.typicode.com/posts";

dataProvider('GET', target)
    .then(response => JSON.parse(response))
    .then(posts => {
        if (posts.length > 0)
            return posts.map((elem) => '<div><h2>' + elem.title + '</h2><p>' + elem.body + '</p></div>')
    })
    .then(data => {
        let container = document.getElementById('container');
        container.innerHTML = data.join('')
    })
    .catch(error => {
        alert(error)
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

