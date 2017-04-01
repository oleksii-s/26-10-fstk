
var id_article = getURLParam(location.search, 'id');

$.ajax('http://jsonplaceholder.typicode.com/posts', {
    method: 'GET'
}).then(function (data) {
    data.forEach(function (article) {
        if (article.id == id_article) {
            var title = art.appendChild(document.createElement('h2'));
            var body = art.appendChild(document.createElement('p'));
            var link = art.appendChild(document.createElement('p'));
            var line = art.appendChild(document.createElement('hr'));
            title.innerHTML = article.title;
            for (var i = 0; i < 20; i++) {
                body.innerHTML += article.body;
            }
            link.innerHTML = "<a class='btn' onclick='showComments()'>Show comments »</a>";
        }
    });
});

function getURLParam(url, param) {
    return decodeURI(url.replace(new RegExp("^(?:.*[&\\?]" + encodeURI(param).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}

function showComments() {
    $.ajax('http://jsonplaceholder.typicode.com/comments', {
        method: 'GET'
    }).then(function (data) {
        data.forEach(function (comment) {
            if (comment.postId == id_article) {
                var email = comments.appendChild(document.createElement('p'));
                var body = comments.appendChild(document.createElement('p'));
                var line = comments.appendChild(document.createElement('hr'));
                email.innerHTML = '<b>' + comment.email + '<b>';
                body.innerHTML = comment.body;
            }
        });
    });
}
