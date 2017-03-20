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
        var list = document.getElementById('authors_content');
        var id = data[i]['id'] - 1;
        var ava = "<div class='author_block'><div class='ava'><img src='ava.png' alt='avatar'></div>";
        var authors_name = '<div class="name_link"><span class="authors_name"><a href="javascript:void(0)" onclick="' + id + '">' + data[i]['name'] + '</a></span><br/><div class="info" style="display: none;"></div><br/>';
        var link = "<span class='link_read_articles'><a href='author_articles.shtml?id=" + data[i]['id'] + "'>Read articles>>></a></span></div></div>";
        list.innerHTML += ava + authors_name + link;

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
// console.log(document.getElementsByClassName('author_block')[0].innerHTML);
    //setOnClick
    function setOnClick() {
        var elems = document.body.getElementsByClassName('authors_name');

        for (var i=0; i < elems.length; i++) {
            var onclick = elems[i].getElementsByTagName('a')[0].getAttribute("onclick");
            if(typeof(onclick) != "function") {
                elems[i].getElementsByTagName('a')[0].setAttribute('onclick','showHide(' + onclick + ');');
            }
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
    }else{
        obj.style.display = "none";
    }
}