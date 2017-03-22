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


    var linkId = (obj.id); // get id link
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
                var artP = document.createElement("h2");
                var user = document.createElement("h3");
                artP.setAttribute("class", "bg-info");
                //artP.setAttribute("fontSize", "20px");
                var usid = (dataPost[i]['id']);
                var titleArt = (dataPost[i]['title']);
                var bodyArt = (dataPost[i]['body']);
                var upperTitle = titleArt.charAt(0).toUpperCase() + titleArt.substr(1).toLowerCase();
                var upperBody = bodyArt.charAt(0).toUpperCase() + bodyArt.substr(1).toLowerCase();
                user.innerHTML = usid + "<br>";
                arth1.innerHTML = "<b>" + upperTitle + "</b><br><hr>";
                artP.innerHTML = upperBody;
                // divId.appendChild(user);
                divId.appendChild(arth1);
                divId.appendChild(artP);


                var data = (dataC);

                //console.log(pId);
                //console.log(linkId);
                for (var value in data) {
                    //.............................COMMENTS.................................
                    var pId = (data[value]['postId']);
                    if (pId == usid) {
                        var nameComments = (data[value]['name']);
                        var emailComments = (data[value]['email']);
                        var bodyComments = (data[value]['body']);
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
    }
}

//...............................................END TEXT AND COMMENTS............................................

//...............................................AUTHOR PAGE........................................................

function authorPage() {
    clearList();
    //alert("im author page!!!");
    var rxhrAuthor = new XMLHttpRequest();

    var rootAuthor = 'http://jsonplaceholder.typicode.com/users/';
    rxhrAuthor.open('GET', rootAuthor, false);
    rxhrAuthor.send();
    if (rxhrAuthor.status != 200) {

        alert(rxhrAuthor.status + ': ' + rxhrAuthor.statusText);
    } else {

        //alert( xhrPosts.responseText );
        var text11 = rxhrAuthor.responseText;
        var dataA = JSON.parse(text11);
        //console.log(dataA);
    }
    for (var i = 0; i < dataA.length; i++) {

        var div = document.getElementById("in");
        var newP = document.createElement("p");
        //var link = document.createElement("a");
        //link.innerHTML=">>>>>>more details<<<<<<<<<";
        var p = (dataA[i]["name"]);
        var divA = document.createElement("div");
        divA.innerHTML = "<a href='#' id=" + i + " onclick='moreDetailsAuthor(this)'>more information about author</a><br>";
        var upperP = p.toUpperCase();
        newP.innerHTML = "<a href='#' id=" + i + " value=" + i + " onclick='moreTextAuthor(this)' ><b>" + upperP + "</b></a>";
        div.appendChild(newP);
        div.appendChild(divA);
        // div.appendChild(link);
    }
}

//................................................................END AUTHORS PAGE...........................................

//..................................................................ARTICLES AUTHOR.......................................

function moreTextAuthor(obj) {

    var uId = (obj.id);
    //console.log(userId);

    clearList();
    //alert("im author page!!!");
    var xhrAuthor = new XMLHttpRequest();

    var rootAuthor = 'http://jsonplaceholder.typicode.com/users/';
    xhrAuthor.open('GET', rootAuthor, false);
    xhrAuthor.send();
    if (xhrAuthor.status != 200) {

        alert(xhrAuthor.status + ': ' + xhrAuthor.statusText);
    } else {

        //alert( xhrPosts.responseText );
        var text111 = xhrAuthor.responseText;
        var dataU = JSON.parse(text111);
        //console.log(dataU);
    }
    //..........................................................
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

        for (var i = 0; i < dataU.length; i++) {
            var userId = (dataU[i]["id"]);
            if (i == uId) {
                var divU = document.getElementById("in");
                var newPU = document.createElement("p");
                var pU = (dataU[i]["name"]);

                var upperPU = pU.toUpperCase();
                newPU.innerHTML = "<a href='#'id=" + i + " value=" + i + "><b>" + upperPU + "</b></a><hr>";
                divU.appendChild(newPU);

                for (var prop in encodeText) {
                    var postId = (encodeText[prop]["userId"]);

                    if (postId == userId) {
                        var div = document.getElementById("in");
                        var newP = document.createElement("ul");

                        var p = (encodeText[prop]["title"]);
                        var upperP = p.charAt(0).toUpperCase() + p.substr(1).toLowerCase();
                        newP.innerHTML = "<li><b>" + upperP + "</b></li>";
                        div.appendChild(newP);
                    }
                }
            }
        }
    }
}

//................................................AUTHOR DETAILS INFORMATION................................

function moreDetailsAuthor(obj) {
    var contactInfoId = (obj.id);
    //console.log(contactInfoId);
    var xhrUzer = new XMLHttpRequest();

    var rootAuthor = 'http://jsonplaceholder.typicode.com/users/';
    xhrUzer.open('GET', rootAuthor, false);
    xhrUzer.send();
    if (xhrUzer.status != 200) {

        alert(xhrUzer.status + ': ' + xhrUzer.statusText);
    } else {

        var textU = xhrUzer.responseText;
        var dataUser = JSON.parse(textU);
        //console.log(dataU);
        clearList();
        for (var i = 0; i < dataUser.length; i++) {
            //var userId=(dataUser[i]["id"]);
            if (i == contactInfoId) {
                var divUser = document.getElementById("in");
                var newUlUser = document.createElement("ul");

                var nameUser = (dataUser[i]["name"]);
                var UserName = (dataUser[i]["username"]);
                var emailUser = (dataUser[i]["email"]);
                var streetUser = (dataUser[i]["address"]["street"]);
                var cityUser = (dataUser[i]["address"]["city"]);
                var zipUser = (dataUser[i]["address"]["zipcode"]);
                var upperName = nameUser.charAt(0).toUpperCase() + nameUser.substr(1).toLowerCase();
                var upperNick = UserName.charAt(0).toUpperCase() + UserName.substr(1).toLowerCase();
                newUlUser.innerHTML = "<li><b>" + "Name:" + upperName + "</b><br></li><li>" + "<b>Nickname:</b>" + upperNick + "<br></li><li>" + "<b>Email:</b>" + emailUser + "<br></li><li>" + "<b>Street:</b>" + streetUser + "</li><li>" + "<b>City:</b>" + cityUser + "</li><li>" + "<b>Coll:</b>" + zipUser + "</li>";
                divUser.appendChild(newUlUser);
            }
        }
    }
}
