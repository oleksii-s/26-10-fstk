//................HOME PAGE.................

window.onload = function func() {

    var xhr = new XMLHttpRequest();
    var rootAll = 'http://jsonplaceholder.typicode.com/posts/';
    xhr.open('GET', rootAll, false);
    xhr.send();
    if (xhr.status != 200) {
        alert(xhr.status + ': ' + xhr.statusText);
    } else {
        //alert( xhrPosts.responseText );
        var text = xhr.responseText;
        //console.log(text);
        var encodeText = JSON.parse(text);
        for (var i = 1; i < encodeText.length; i++) {

            var div = document.getElementById("in");
            var newP = document.createElement("p");
            var p = (encodeText[i]["title"]);
            var upperP = p.charAt(0).toUpperCase() + p.substr(1).toLowerCase();
            newP.innerHTML = "<a href='#' id=" + i + " value=" + i + " onclick='moreTextArticles(this)' ><b>" + i + "." + upperP + "</b></a>";
            div.appendChild(newP);
        }
    }
};
//.......................END HOME PAGE ............................

//.......................CLEAR FUNCTION...........................

function clearList() {
    var div = document.getElementById("in");
    while (div.hasChildNodes()) {
        div.removeChild(div.lastChild);
    }
}
//.......................END CLEAR FUNCTION.........................

//..............................ARTICLES AND COMMENTS REQUEST.....................................................
function getArtCom() {

    var xhrPosts = new XMLHttpRequest();
    var rootPosts = 'http://jsonplaceholder.typicode.com/posts/';
    xhrPosts.open('GET', rootPosts, false);
    xhrPosts.send();

    if (xhrPosts.status != 200) {

        alert(xhrPosts.status + ': ' + xhrPosts.statusText);
    } else {

        //alert( xhrPosts.responseText );
        var t = xhrPosts.responseText;
        var dataPosts = JSON.parse(t);

    }
//.............................................запрос на комменты......................................................var xhrComments = new XMLHttpRequest();
    var xhrComments = new XMLHttpRequest();
    var root = 'http://jsonplaceholder.typicode.com/comments/';
    xhrComments.open('GET', root, false);
    xhrComments.send();

    if (xhrComments.status != 200) {

        alert(xhrComments.status + ': ' + xhrComments.statusText);
    } else {

        //alert( xhrPosts.responseText );
        var text = xhrComments.responseText;
        var dataComments = JSON.parse(text);
        //console.log(dataComments);
    }
//...............................новый список всех статей и комментариев................................
    clearList();
    for (var i = 0; i < dataPosts.length; i++) {

        var divId = document.getElementById("in");
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
        //var pId = (data[i]['postId']);
        var nameComments = (data[i]['name']);
        var emailComments = (data[i]['email']);
        var bodyComments = (data[i]['body']);
        var parent = document.getElementById("in");
        var div = document.createElement("div");
        var comP = document.createElement("p");
        comP.innerHTML = "<blockquote>" + "<br>" + nameComments + "<br>" + emailComments + "<br>" + bodyComments + "</blockquote>";
        parent.appendChild(div);
        div.appendChild(comP);
    }
}

//..........................................END ARTICLES...............................................

//..........................................MORE TEXT AND COMMENTS......................................

function moreTextArticles(obj) {


    var linkId = (obj.id);   // get id link
    // console.log(linkId);
//......................................POSTS REQ..............................................
    var xhrPostsId = new XMLHttpRequest();
    var rootPosts = 'http://jsonplaceholder.typicode.com/posts/';


    xhrPostsId.open('GET', rootPosts, false);
    xhrPostsId.send();

    if (xhrPostsId.status != 200) {

        alert(xhrPostsId.status + ': ' + xhrPostsId.statusText);
    } else {

        //alert( xhrPosts.responseText );
        var t = xhrPostsId.responseText;
        var dataPost = JSON.parse(t);
        // console.log(dataPost);
        //var artId =(dataPost[i]);
//...........................................END POSTS REQ..............................................
//...........................................COMMENTS REQ.................................................
        var xhrCom = new XMLHttpRequest();
        var rootC = 'http://jsonplaceholder.typicode.com/comments/';
        xhrCom.open('GET', rootC, false);
        xhrCom.send();

        if (xhrCom.status != 200) {

            alert(xhrCom.status + ': ' + xhrCom.statusText);
        } else {

            //alert( xhrPosts.responseText );
            var text1 = xhrCom.responseText;
            var dataC = JSON.parse(text1);
            //console.log(dataC);
        }
        //.....................................................END COMMENTS REQ.........................................
        clearList();
        for (var i = 1; i < dataPost.length; i++) {
            // var artId =(dataPost[i]);
            if (linkId == i) {
                //console.log("im linkId");
                var divId = document.getElementById("in");
                var arth1 = document.createElement("h1");
                var artP = document.createElement("p");
                var user = document.createElement("h3");
                artP.setAttribute("class", "bg-info");
                artP.setAttribute("fontSize", "14px");
                var usid = (dataPost[i]['id']);
                var titleArt = (dataPost[i]['title']);
                var bodyArt = (dataPost[i]['body']);
                user.innerHTML = usid + "<br>";
                arth1.innerHTML = "<b>" + titleArt + "</b><br><hr>";
                artP.innerHTML = bodyArt;
                // divId.appendChild(user);
                arth1.appendChild(artP);
                divId.appendChild(arth1);

                var data = (dataC);
                var pId = (data[i]['postId']);
                //console.log(pId);
                //console.log(linkId);

                //.............................COMMENTS.................................
                var nameComments = (data[i]['name']);
                var emailComments = (data[i]['email']);
                var bodyComments = (data[i]['body']);
                var parent = document.getElementById("in");
                var div = document.createElement("div");
                var comP = document.createElement("p");
                comP.innerHTML = "<blockquote>" + "<br>" + "<b>Name:</b>" + nameComments + "<br>" + "<b>Email:</b>" + emailComments + "<br>" + "<b>Message:</b>" + "<i>" + bodyComments + "</i>" + "</blockquote>";
                parent.appendChild(div);
                div.appendChild(comP);


            }
        }
    }
}

//...............................................END TEXT AND COMMENTS............................................