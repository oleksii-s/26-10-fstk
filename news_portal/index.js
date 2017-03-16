"use strict";
getData();

//ajax function
function getData()
{
    var root = "http://jsonplaceholder.typicode.com/posts";
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
            return  show_articles(data);
        }
    };
    xhr.send();
}

//creating content with articles
function show_articles(data)
{
    var section = document.getElementById("section");
    function cell_content(i)
    {
        var author = "<span class='author'><a href=''>Author</a></span></br>";
        var title = '<span class="title"><a href="article.shtml?id=' + data[i]['id'] + '">' + data[i]['title'] + '</a></span><br/>';
        var desc = '<br>' + '<span class="desc">' + data[i]['body'].substr(0,100) + '...' + '</span>';
        var link = "<a href='article.shtml?id=" + data[i]['id'] + "'>Read more>>></a>";
        return author + title + desc + " " + link;
    }

    for (var i=0; i < data.length; i++) {
        var cell1 = '<div class="col-xs-12 col-sm-4">'+ cell_content(i++) +'</div>';
        var cell2 = '<div class="col-xs-12 col-sm-3">'+ cell_content(i++) +'</div>';
        var cell3 = '<div class="col-xs-12 col-sm-4">'+ cell_content(i) +'</div>';
        section.innerHTML += '<div class="row">' + cell1 + cell2 + cell3 + '</div>';
    }
}
