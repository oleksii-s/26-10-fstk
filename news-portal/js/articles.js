/**
 * Created on 20.03.2017.
 */

//..............................запрос на статьи.....................................................
var xhrPosts = new XMLHttpRequest();
var rootPosts = 'http://jsonplaceholder.typicode.com/posts/';
xhrPosts.open('GET', rootPosts, false);
xhrPosts.send();

if (xhrPosts.status != 200) {

    alert(xhrPosts.status + ': ' + xhrPosts.statusText);
} else {

    //alert( xhrPosts.responseText );
    var t = xhrPosts.responseText;
    //console.log(text);
    var dataPosts = JSON.parse(t);
    //console.log(dataPosts);
}
//......................................................................................................


var xhrComments = new XMLHttpRequest();
var root = 'http://jsonplaceholder.typicode.com/comments/';
xhrComments.open('GET', root, false);
xhrComments.send();

if (xhrComments.status != 200) {

    alert(xhrComments.status + ': ' + xhrComments.statusText);
} else {

    //alert( xhrPosts.responseText );
    var text = xhrComments.responseText;
    //console.log(text);
    var dataComments = JSON.parse(text);
    //console.log(dataComments);
}


for (var i = 0; i < dataPosts.length; i++) {

    var divId = document.getElementById("arctic");
    var arth1 = document.createElement("h1");
    var artP = document.createElement("p");
    var user = document.createElement("h3");
    artP.setAttribute("class", "bg-info");
    artP.setAttribute("fontSize", "14px");
    var usid = (dataPosts[i]['id']);
    var titleArt = (dataPosts[i]['title']);
    var bodyArt = (dataPosts[i]['body']);
    user.innerHTML = usid + "<br>";
    arth1.innerHTML = "<b>" + titleArt + "</b><br><hr>";
    artP.innerHTML = bodyArt;
    // divId.appendChild(user);
    arth1.appendChild(artP);
    divId.appendChild(arth1);

    var data = (dataComments);
    var pId = (data[i]['postId']);
    var nameComments = (data[i]['name']);
    var emailComments = (data[i]['email']);
    var bodyComments = (data[i]['body']);
    var parent = document.getElementById("arctic");
    var div = document.createElement("div");
    var comP = document.createElement("p");
    comP.innerHTML = "<blockquote>" + "COMMENTS" + "<br>" + nameComments + "<br>" + emailComments + "<br>" + bodyComments + "</blockquote>";
    parent.appendChild(div);
    div.appendChild(comP);


}



