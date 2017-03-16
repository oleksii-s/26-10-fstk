"use strict";

getData(show_full_article);

//function for ajax
function getData(func, path) {

    var root = "http://jsonplaceholder.typicode.com/posts/";
    var strGET = window.location.search.replace('?id=', '');
    var xhr = new XMLHttpRequest();

    if(path){
        strGET += '/' + path;
    }
    xhr.open("GET", root + strGET, true);
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
            return  func(data);
        }
    };
    xhr.send();
}

function show_full_article(data)
{
    document.getElementById('title').innerHTML = data['title'];
    document.getElementById('article').innerHTML = data['body'];
}

function show_comments(data)
{
    var obj = document.getElementById('comments');

    for(var i=0; i< data.length; i++) {
        var ava = document.createElement('div');
        ava.innerHTML = "<div><img src='ava.png' alt='avatar'></div>";

        var comment = document.createElement('div');
        var email = '<div><span class="email">By ' + data[i]['email'] + '</span><br/><br/>';
        var comment_title = '<span class="comment_title">' + data[i]['name'] + '</span><br/>';
        var comment_body = '<span class="comment_body">' + data[i]['body'] + '</span><br/><br/></div>';

        comment.innerHTML = '<div class="comment">' + ava.innerHTML + email + comment_title + comment_body + '</div>';

        obj.appendChild(comment);
    }
}

function showHide()
{
    var obj = document.getElementById('comments');
    if (obj.style.display != "block") {
        obj.style.display = "block";
    }else{
        obj.style.display = "none";
    }
    getData(show_comments, 'comments');
}
