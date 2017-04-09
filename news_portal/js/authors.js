"use strict";

let target = "http://jsonplaceholder.typicode.com/users";

dataProvider('GET', target)
    .then(response => JSON.parse(response))
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            let {id, name } = data[i];
            let list = document.getElementById('authors_content');
            let ava = "<div class='ava'><img src='images/ava.png' alt='avatar'></div>";
            let authors_name = '<div class="name_link"><span class="authors_name">' +
                '<a href="javascript:void(0)">' + name + '</a></span>';
            let hidden_block = '<div class="info" style="display: none;"></div><br/><br/>';
            let link = "<span class='link_read_articles'><a href='author_articles.shtml?id=" +
                id + "'>Read articles>>></a></span></div>";

            list.innerHTML += "<div class='author_block'>" + ava + authors_name + hidden_block + link + "</div>";
        }
        return data;
    })
    .then(data => {
        //setAtribut onclick
        let elems = document.body.getElementsByClassName('authors_name');
        for (let i = 0; i < data.length; i++) {
            elems[i].getElementsByTagName('a')[0].setAttribute("onclick", "showHide(" + i + ")");
        }
        return data;
    })
    .then(data => {
        //popup info
        for (let i = 0; i < data.length; i++) {
            let {username, email, phone, website, company} = data[i];
            let a_username = '<span class="username">Username: ' + username + '</span><br/>';
            let a_email = '<span class="email">Email: ' + email + '</span><br/>';
            let a_phone = '<span class="phone">Phone: ' + phone + '</span><br/>';
            let a_website = '<span class="website">Website: <a href="#">' + website + '</a></span><br/>';
            let a_company = '<span class="company">Company: ' + company.name + '</span><br/>';
            let popup = document.getElementsByClassName('info')[i];
            let info = document.createElement('div');

            info.innerHTML = '<div>' + a_email + a_username + a_phone + a_website + a_company + '</div>';
            popup.appendChild(info);
        }
    })
    .catch(error => {
    alert(error);
});



function dataProvider(method, url) {

    return new Promise(function(resolve, reject) {

        let XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
        let xhr = new XHR();

        xhr.open(method, url, true);

        xhr.onload = function() {
            resolve(this.response);
        };

        xhr.onerror = function() {
            reject(new Error("Network Error"));
        };

        xhr.send();
    });
}

function showHide(i) {
    let obj = document.getElementsByClassName('info')[i];

    obj.style.display != "block" ? obj.style.display = "block" : obj.style.display = "none";
}