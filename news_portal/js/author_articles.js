"use strict";

getData();

//function for ajax
function getData()
{
    var root = "http://jsonplaceholder.typicode.com/posts?userId=";
    var strGET = window.location.search.replace('?id=', '');
    var xhr = new XMLHttpRequest();
    xhr.open("GET", root + strGET, true);
    xhr.onreadystatechange = function()
    {
        if(xhr.readyState != 4)return;
        if(xhr.status != 200){
            alert(xhr.status + ': ' + xhr.statusText);
        }else{
            try{
                var data = JSON.parse(xhr.responseText);
            }catch (e){
                alert("Invalid answer " + e.message);
            }
            return show_full_article(data);
        }
    };
    xhr.send();
}

function show_full_article(data)
{
    for(var i = 0; i < data.length; i++){
        var section = document.getElementById('sec');
        section.innerHTML += "" + data[i]['<div class='list'><div class='article_name'><a href='../article.shtml?id=id'>'] + "" + data[i]['title'] + "" + data[i]['</a><article></div><div class='show_comment'><a href='../article.shtml?id=id'>Read full article>>></a></div></div><br/>'] + ""
    }
}
