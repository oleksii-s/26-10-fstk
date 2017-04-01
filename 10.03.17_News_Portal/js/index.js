
$.ajax('http://jsonplaceholder.typicode.com/posts', {
    method: 'GET'
}).then(function (data) {
    data.forEach(function (article) {
        var title = art.appendChild(document.createElement('h2'));
        var body = art.appendChild(document.createElement('p'));
        var link = art.appendChild(document.createElement('p'));
        var line = art.appendChild(document.createElement('hr'));
        title.innerHTML = article.title;
        body.innerHTML = article.body;
        link.innerHTML = "<a class='btn' href='article.html?id=" + article.id + "'>View details »</a>";
    });
});