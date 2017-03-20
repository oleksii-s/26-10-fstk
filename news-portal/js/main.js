//................HOME PAGE.................

window.onload = function func() {


    var xhr = new XMLHttpRequest();

    var root = 'http://jsonplaceholder.typicode.com/posts/';

    xhr.open('GET', root, false);


    xhr.send();


    if (xhr.status != 200) {

        alert(xhr.status + ': ' + xhr.statusText);
    } else {

        //alert( xhrPosts.responseText );
        var text = xhr.responseText;
        //console.log(text);
        var encodeText = JSON.parse(text);
        for (var i = 0; i < encodeText.length; i++) {

            var div = document.getElementById("in");
            var newP = document.createElement("p");
            var p = (encodeText[i]["title"]);
            var upperP = p.charAt(0).toUpperCase() + p.substr(1).toLowerCase();
            newP.innerHTML = "<a href='articles.html' id=" + i + " name="+i+" ><b>" + i + "." + upperP + "</b></a>";
            div.appendChild(newP);

        }

    }

};


//.......................END HOME PAGE ............................

//.......................FULL ARTICLE...............................


