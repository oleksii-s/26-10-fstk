'use strict';

let author = 'http://jsonplaceholder.typicode.com/users';
let article = 'http://jsonplaceholder.typicode.com/posts';

function loader(method, url) {

    return new Promise(function(resolve, reject) {

        let XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
        let xhr = new XHR();

        xhr.open(method, url, true);
        xhr.onload = function() {
            if (this.status == 200) {
                resolve(this.response);
            }
        };

        xhr.onerror = function() {
            reject(new Error("Network Error"));
        };
        xhr.send();
    });
}

function shortenedPost (str) {
    if (str.length > 40) {
        return (str.substring(0, 40) + "...");
    }
    else {
        return str;
    }
}

loader('GET', author)
    .then(response => JSON.parse(response))
    .then(users => {
        var firstAuthor = users[0];
        if (localStorage.getItem('author_id')) {
            for(let i = 0; i < users.length; i++) {
                if (users[i].id == localStorage.getItem('author_id')) {
                    firstAuthor = users[i];
                }
            }
        }

        updateHeader(firstAuthor.name);
        users.forEach((user) => {
                let ul = document.getElementsByClassName("list-group")[0],
                    li = ul.appendChild(document.createElement('li')),
                    link = li.appendChild(document.createElement('a'));

                li.classList.add("list-group-item");
                link.addEventListener("click", updatePosts);
                link.style.fontSize = '1.5rem';
                link.setAttribute('data-author-id', user.id);
                link.setAttribute('data-author-name', user.name);
                link.href = "#";
                link.innerHTML = user.name;
            }
        );

        return firstAuthor;
    })
    .then(user => {
        loadPostsByAuthor(user.id);
    })
    .catch(error => {
        alert(error);
    });

function loadPostsByAuthor(author_id) {
    loader('GET', article + '?userId=' + author_id)
        .then(response => JSON.parse(response))
        .then(posts => {
            posts.forEach((post) => {
                let section = document.getElementsByTagName('section')[0],
                    div = section.appendChild(document.createElement('div')),
                    title = div.appendChild(document.createElement('h4')),
                    p = div.appendChild(document.createElement('p')),
                    link = "<a href='article.html?id=" + post.id + "'>(View full post)</a>";

                section.id = 'posts-container';
                div.classList.add('col-md-4');
                p.classList.add('shortened-text');
                title.innerHTML = post.title + '<br>';
                p.innerHTML = shortenedPost(post.body) + link;
            });
            updateLocalStorage(author_id);
        })
        .catch(error => {
          alert(error);
        });
}

function updateHeader(authorName) {
    let section = document.getElementsByTagName('section')[0],
        div = section.appendChild(document.createElement('div')),
        h3 = div.appendChild(document.createElement('h3')),
        hr = div.appendChild(document.createElement('hr'));

    h3.style.color = '#f4af00';
    h3.innerHTML = authorName + "'s articles";
}

function updatePosts(e) {
    let link = e.target,
        authorId = link.getAttribute('data-author-id'),
        authorName = link.getAttribute('data-author-name');
    clearPosts();
    updateHeader(authorName);
    loadPostsByAuthor(authorId);
    e.preventDefault();
}

function clearPosts() {
    let container = document.getElementById('posts-container');

    while (container.hasChildNodes()) {
      container.removeChild(container.childNodes[0]);
    }
}

function updateLocalStorage(author_id) {
    localStorage.setItem('author_id', author_id);
}
