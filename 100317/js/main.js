"use strict";

var root = "http://jsonplaceholder.typicode.com";
var xhr = new XMLHttpRequest();
var main_div = document.getElementById("main");

document.addEventListener("DOMContentLoaded", function () {
    //получаем пармаетры, контроллер и айди
    var controllerAndId = parseURL(window.location.href);

    if ("" != controllerAndId.id) {
        switch (controllerAndId.controller) {
            case "posts":
                var data = getData(xhr, root, "/posts", controllerAndId.id);
                var users = getData(xhr, root, "/users", "");
                var comments = getData(xhr, root, "/comments", "?" + controllerAndId.id);
                var article = createArticle(data, users, comments);
                main_div.appendChild(article);
                break;
        }
    } else {
        switch (controllerAndId.controller) {
            case "":
            case "posts":
                var data = getData(xhr, root, "/posts", controllerAndId.params);
                var users = getData(xhr, root, "/users", controllerAndId.params);

                for (var i = 0; i <data.length; i++) {
                    var article = createArticle(data[i], users, "");
                    main_div.appendChild(article);
                }

                var links = document.getElementsByTagName("a");

                for (var k = 0; k < links.length; k++) {
                    links[k].addEventListener("click", function () {
                        while (main_div.firstChild) {
                            main_div.removeChild(main_div.firstChild);
                        }

                        var parsed_url = this.href.split("/");
                        console.log(parsed_url);

                        return false;
                    });
                }

                break;
            case "users":
                var users = getData(xhr, root, "/users", "");

                while (main_div.firstChild) {
                    main_div.removeChild(main_div.firstChild);
                }

                main_div.appendChild(createAuthorsList(users));
                
                break;
        }
    }
});

//запрос к удаленному АПИ для получения данных, передаем обьект XMLHttpRequest, корень АПИ, дальше адрес где искать и айди или параметры
function getData(xhr, root, type, id) {
    if ("" != id) {
        type += "/" + id;
    }

    console.log(root + type);
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

//тут происходит формирование статьи
function createArticle(post, users, comments) {
    var article = document.createElement("article");
    var link_header = document.createElement("a");
    var article_header = document.createElement("h2");
    var link_author = document.createElement("a");
    var article_author = document.createElement("h5");
    var article_body = document.createElement("p");
    var comments_block = document.createElement("div");
    comments_block.setAttribute("class", "comments");

    if ("" != comments) {
        for (var i = 0; i < comments.length; i++) {
            var section = document.createElement("section");
            var email = document.createElement("h6");
            email.innerText = comments[i].email;
            var body = document.createElement("p");
            body.innerText = comments[i].body;

            section.appendChild(email);
            section.appendChild(body);
            comments_block.appendChild(section);
        }

    }

    //title element
    link_header.innerText = post.title;
    link_header.className = "title";
    link_header.setAttribute("id", post.id);
    link_header.setAttribute("href", "./100317/posts/" + post.id);
    article_header.appendChild(link_header);

    //author element
    var author = users.filter(function (user) {
        return parseInt(user.id) == parseInt(post.userId);
    });
    link_author.innerText = author[0].name;
    link_author.className = "author";
    link_author.setAttribute("id", author[0].id);
    link_author.setAttribute("href", "./100317/users/" + author[0].id);
    article_author.appendChild(link_author);

    //body element
    var body = post.body;
    article_body.innerText = body.split("\n").join(" ");

    article.appendChild(article_header);
    article.appendChild(article_author);
    article.appendChild(article_body);
    article.appendChild(comments_block);

    return article;
}

//тут происходит формирование списка авторов для вкладки авторы
function createAuthorsList(users) {
    var ul = document.createElement("ul");

    for (var i = 0; i < users.length; i++) {
        var li = document.createElement("li");
        var h5 = document.createElement("h5");
        var section = document.createElement("section");
        var adress = document.createElement("p");
        var contacts = document.createElement("p");
        var articles = document.createElement("a");

        //name
        h5.innerText = users[i].name;
        h5.className = "author";
        h5.setAttribute("id", users[i].id);
        h5.setAttribute("onclick", "show(this); return false;");

        //adress
        adress.innerText = "Address: " + users[i].address.street + ", " + users[i].address.suite + ", " + users[i].address.city;

        //contacts
        contacts.innerText = "Contacts: " + users[i].phone + "<br>" + users[i].website;

        //link to articles written by this author
        articles.innerText = "see articles";
        articles.setAttribute("href", "./100317/posts?userId=" + users[i].id);

        li.appendChild(h5);
        section.appendChild(adress);
        section.appendChild(contacts);
        section.style.display = "none";
        li.appendChild(section);
        li.appendChild(articles);
        ul.appendChild(li);
    }

    return ul;
}

//берем урлу, разбираем ее и вытягиваем раздел (лтбо посты, либо авторы), айди (поста или автора) если есть и параметры для ГЕТ если есть
function parseURL(url) {
    var params = "";
    var controllerAndId = {
        "controller" : "",
        "id" : "",
        "params" : ""
    };

    if (params = url.split("?")[1]) {
        url = url.split("?")[0];
        controllerAndId.params = "?" + params;
    }

    var pieces = url.split("/");

    if (pieces.length > 6) {
        controllerAndId.controller = pieces[pieces.length-2];
        controllerAndId.id = pieces[pieces.length-1];
    } else {
        controllerAndId.controller = pieces[pieces.length-1];
    }

    return controllerAndId;
}

//при клике на имени автора в списке авторов открывает или закрывает контактную информацию
function show(link) {
    var section = link.nextSibling;

    if (section.style.display == "none") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}