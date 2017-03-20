"use strict";

var root = "http://jsonplaceholder.typicode.com";
var xhr = new XMLHttpRequest();
var main_div = document.getElementById("main");

document.addEventListener("DOMContentLoaded", function () {
    var data = getData(xhr, root, "/posts", "");
    var users = getData(xhr, root, "/users", "");

    for (var i = 0; i <data.length; i++) {
        var article = createArticle(data[i], users);
        main_div.appendChild(article);
    }

    var links = document.getElementsByTagName("a");

    for (var j = 0; j < links.length; j++) {
        links[j].addEventListener("click", function (event) {
            event.preventDefault();
            alert(links[i].href);
        })
    }
});



function getData(xhr, root, type, id) {
    if ("" != id) {
        type += "/" + id;
    }

    xhr.open("GET", root + type, false);

    xhr.send();

    if (xhr.status != 200) {
        // обработать ошибку
        alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
    } else {
        var data = JSON.parse(xhr.responseText);
    }

    return data;
}

function createArticle(post, users) {
    var article = document.createElement("article");
    var link_header = document.createElement("a");
    var article_header = document.createElement("h2");
    var link_author = document.createElement("a");
    var article_author = document.createElement("h5");
    var article_body = document.createElement("p");

    //title element
    link_header.innerText = post.title;
    link_header.className = "title";
    link_header.setAttribute("id", post.id);
    link_header.setAttribute("href", "./posts/" + post.id);
    article_header.appendChild(link_header);

    //author element
    var author = users.filter(function (user) {
        return parseInt(user.id) == parseInt(post.userId);
    });
    link_author.innerText = author[0].name;
    link_author.className = "author";
    link_author.setAttribute("id", author[0].id);
    link_author.setAttribute("href", "./users/" + author[0].id);
    article_author.appendChild(link_author);

    //body element
    var body = post.body;
    article_body.innerText = body.split("\n").join(" ");

    article.appendChild(article_header);
    article.appendChild(article_author);
    article.appendChild(article_body);

    return article;
}
