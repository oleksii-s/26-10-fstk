"use strict";
getData();

function getData()
{
    var root = "http://jsonplaceholder.typicode.com/users";

    var xhr = new XMLHttpRequest();

    xhr.open("GET", root, true);

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
            return show_authors_list(data);
        }
    };
    xhr.send();
}

function show_authors_list(data){

    //LIST
    for (var i=0; i< data.length; i++){
        var ava = document.createElement('div');
        ava.innerHTML = "<div><div><img src='ava.png' alt='avatar'></div>";
        var list = document.getElementById('list');
        var li = document.createElement('li');
        var authors_name = '<div class="a"><span class="authors_name"><a href="javascript:void(0)" onclick="">' + data[i]['name'] + '</a></span><br/><div class="info" style="display: none;"></div><br/>';
        var link = "<span class='link'><a href='author_articles.shtml?id=" + data[i]['id'] + "'>Read articles>>></a></span></div></div>";
        li.innerHTML = ava.innerHTML + authors_name + link;
        list.appendChild(li);

        //popup info
        var username = '<span class="username">Username: ' + data[i]['username'] + '</span><br/>';
        var email = '<span class="email">Email: ' + data[i]['email'] + '</span><br/>';
        var phone = '<span class="phone">Phone: ' + data[i]['phone'] + '</span><br/>';
        var website = '<span class="website">Website: <a href="#">' + data[i]['website'] + '</a></span><br/>';
        var company = '<span class="company">Company: ' + data[i]['company']['name'] + '</span><br/>';
        var popup = document.getElementsByClassName('info')[i];
        var info = document.createElement('div');
        info.innerHTML = '<div>' + email + username + phone + website + company + '</div>';
        popup.appendChild(info);
    }

    //setOnClick
    function setOnClick() {
        var elems = document.body.getElementsByClassName('authors_name');

        for (var i=0; i < elems.length; i++) {
            var onclick = elems[i].getElementsByTagName('a')[0].getAttribute("onclick");
            if(typeof(onclick) != "function") {
                elems[i].getElementsByTagName('a')[0].setAttribute('onclick','showHide(' + i + ')');}
        }
    }
    setOnClick();
}

//popup function
function showHide(i)
{
    var obj = document.getElementsByClassName('info')[i];
    if (obj.style.display != "block") {
        obj.style.display = "block";
    }else obj.style.display = "none";
}