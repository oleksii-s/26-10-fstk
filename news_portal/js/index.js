"use strict";

let target = "http://jsonplaceholder.typicode.com/posts";
let author_target = "https://jsonplaceholder.typicode.com/users/";

let request1 = dataProvider('GET', target)
    .then(response => JSON.parse(response))
    .then(data => {
        let section = document.getElementById('section');
        for (let i = 0; i < data.length; i++) {
            let {userId, id, body, title} = data[i];
            let author_link = "<a class='author_link' href='author_articles.shtml?id=" + userId + "'></a>";
            let title_link = '<a href="article.shtml?id=' + id + '">' + title + '</a>';
            let author = "<span class='author'>" + author_link + "</span><br>";
            let title1 = '<span class="title">' + title_link + '</span><br><br>';
            let desc = '<span class="desc">' + body.substr(0, 100) + '...' + '</span>';
            let link = "<a href='article.shtml?id=" + data[i]['id'] + "'>Read more>>></a>";
            section.innerHTML += '<div class="child">' + author + title1 + desc + " " + link + "</div>";
        }
    })
    .catch(error => {
        alert(error);
    });

let request2 = dataProvider('GET', author_target)
    .then(response => JSON.parse(response))
    .then(data => {
        let class_author = document.getElementsByClassName('author_link');
        for (let j = 0; j < class_author.length; j++) {
            let userId = class_author[j].getAttribute('href');
            userId = userId.replace('author_articles.shtml?id=', '') - 1;
            class_author[j].innerHTML = data[userId].name;
        }
        return data;
    })
    .then(data => {
        let aside = document.getElementsByTagName('aside')[0].getElementsByTagName('ul')[0];
        for (let i = 0; i < data.length; i++) {
            let author = "'" + data[i].name + "'";
            aside.innerHTML += '<li><a href="javascript:void(0)" onclick="chooseAuthor(' + author + ')">' + data[i].name + '</a></li>';
        }
        aside.innerHTML += '<li><b><a href="javascript:void(0)" onclick="chooseAuthor(1)">Show all</a></b></li>';
    })
    .catch(error => {
        alert(error);
    });

Promise.all([request1, request2])
    .then(() => {
        let storage = localStorage.getItem("author");
        if (storage != null) {
            chooseAuthor(storage);
        }
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
//show or hide sidebar
function showHide() {
    let obj = document.getElementById('slideout');
    let wrapper = document.getElementById('wrapper');
    let button = obj.getElementsByClassName('glyphicon')[0];

    if(obj.style.left != "-13%") {
        obj.style.left = '-13%';
        wrapper.style.width = "90%";
        wrapper.style.float = "none";
        wrapper.style.marginRight = "auto";
        button.className = 'glyphicon glyphicon-menu-right';
    } else {
        obj.style.left = "0";
        wrapper.style.width = "80%";
        wrapper.style.float = "right";
        wrapper.style.marginRight = "30px";
        button.className = 'glyphicon glyphicon-menu-left';
    }
}

function chooseAuthor(author) {
    let div = document.getElementsByClassName("child");

    for (let i = 0; i < div.length; i++) {
        let link = div[i].getElementsByClassName('author_link')[0];

        if (link.innerHTML != author) {
            div[i].style.display = 'none';
            localStorage['author'] = author;
        } else {
            div[i].style.display = '';
            localStorage['author'] = '';
        }

        if (author == 1) {
            localStorage['author'] = "1";
            div[i].style.display = '';
        }
    }
}