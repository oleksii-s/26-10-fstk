"use strict";

$.ajax({
    url: "http://jsonplaceholder.typicode.com/users",
    method: 'GET'
}).then(data => {
        for (let i = 0; i < data.length; i++) {
            let {id, name } = data[i];

            let ava = "<div class='ava'><img src='images/ava.png' alt='avatar'></div>";
            let authors_name = '<div><div class="authors_name">' +
                '<a href="javascript:void(0)">' + name + '</a></div><br>';
            let hidden_block = '<div class="info" style="display: none;"></div><br/>';
            let link = "<div class='link_read_articles'><a href='author_articles.shtml?id=" +
                id + "'>Read articles>>></a></div></div>";

            $('#authors_content').append("<div class='author_block'>" + ava + authors_name +
                hidden_block + link + "</div>");
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

            $('.info').eq(i).append(a_email + a_username + a_phone + a_website + a_company);

            $(".authors_name").eq(i).click(() => {
                $(".info").eq(i).toggle();
            })
        }
    });