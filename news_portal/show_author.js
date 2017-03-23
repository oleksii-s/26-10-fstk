"use strict";

function getAuthor(id, j)
{
    var root = "http://jsonplaceholder.typicode.com/users/";

    var xhr = new XMLHttpRequest();

    xhr.open("GET", root + id, true);

    xhr.onreadystatechange = function()
    {
        if (xhr.readyState != 4) return;

        if (xhr.status != 200) {
            alert(xhr.status + ': ' + xhr.statusText);
        } else {
            try {
                var data = JSON.parse(xhr.responseText);
            } catch (e) {
                alert("Invalid answer " + e.message);
            }
            return show_author(data, j);
        }
    };
    xhr.send();
}

function show_author(data, j){

    if(j + 1) { //for main page index.js
        var class_author = document.getElementsByClassName('author');
        class_author[j].getElementsByTagName('a')[0].innerHTML = data['name'];

    } else { //for article.js page
        var author = document.getElementById('author').getElementsByTagName('a')[0];
        author.innerHTML = data['name'];
    }
}