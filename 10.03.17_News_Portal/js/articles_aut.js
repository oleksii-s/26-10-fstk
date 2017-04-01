
var id_author = getURLParam(location.search, 'id');

$.ajax('http://jsonplaceholder.typicode.com/posts', {
    method: 'GET'
}).then(function (data) {
    data.forEach(function (article) {
        if (article.userId == id_author) {
            var title = art.appendChild(document.createElement('h2'));
            var body = art.appendChild(document.createElement('p'));
            var link = art.appendChild(document.createElement('p'));
            var line = art.appendChild(document.createElement('hr'));
            title.innerHTML = article.title;
            body.innerHTML = article.body;
            link.innerHTML = "<a class='btn' href='article.html?id=" + article.id + "'>View details »</a>";
            showAuthorName(article.userId);
        }
    });
});

function getURLParam(url, param) {
    return decodeURI(url.replace(new RegExp("^(?:.*[&\\?]" + encodeURI(param).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}

function showAuthorName(userId) {
    $.ajax('http://jsonplaceholder.typicode.com/users', {
        method: 'GET'
    }).then(function (data) {
        data.forEach(function (author) {
            if (author.id == userId) {
                document.getElementById("articles_author").innerHTML = "Articles by " + author.name;
            }
        });
    });
}
