var strGET = window.location.search.replace( '?id=', '');

function loadPost() {

    var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
    var xhr = new XHR();
    var root = 'http://jsonplaceholder.typicode.com';

    xhr.open('GET', root + '/posts/' + strGET, true);
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) return;
        if (xhr.status != 200) {
            alert( xhr.status + ': ' + xhr.statusText );
        } else {
            try {
                var posts = JSON.parse(xhr.responseText);
            } catch (e) {
                alert( "Некорректный ответ " + e.message );
            }
            showPost(posts);
        }

    };

}

function loadComments() {

    var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
    var xhr = new XHR();
    var root = 'http://jsonplaceholder.typicode.com';

    xhr.open('GET', root + '/comments?postId=' + strGET, true);
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) return;
        if (xhr.status != 200) {
            alert( xhr.status + ': ' + xhr.statusText );
        } else {
            try {
                var comments = JSON.parse(xhr.responseText);
            } catch (e) {
                alert( "Некорректный ответ " + e.message );
            }
            showComments(comments);
        }

    };

}

function showPost(post) {
        var title = article.appendChild(document.createElement('h3'));
        var p = article.appendChild(document.createElement('p'));
        var a = article.appendChild(document.createElement('a'));
        a.href = '#';
        a.addEventListener("click", loadComments);
        a.id = "eventLink";
        a.style.fontSize='0.9rem';
        p.classList.add("shortened-text");
        title.innerHTML = post.title + "<br>";
        p.innerHTML = post.body + "<br>";
        a.innerHTML= "Show comments";
    }


function showComments(comments) {
    var ul = coms.appendChild(document.createElement('ul'));

    comments.forEach(function(com) {
        var li = ul.appendChild(document.createElement('li'));
        var div = li.appendChild(document.createElement('div'));
        var email = div. appendChild(document.createElement('a'));
        var hr = div. appendChild(document.createElement('hr'));
        var cmnt = div. appendChild(document.createElement('span'));
        div.classList.add("dialogbox");
        email.href="mailto:" + com.email;
        email.innerHTML = com.email + "<br>";
        cmnt.innerHTML= com.body;
    });

    eventLink.removeEventListener("click", loadComments);

}

loadPost();