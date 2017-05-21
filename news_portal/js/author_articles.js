"use strict";

let author_target = "https://jsonplaceholder.typicode.com/users/";
author_target += window.location.search.replace('?id=', '');

let target = "http://jsonplaceholder.typicode.com/posts?userId=";

$.ajax({
    url: author_target,
    method: 'GET'
})
    .then(({name, id}) => {
        $('#author_art').text(name + "'s Articles");

        return id;
    })
    .then(id => {
        $.ajax({
            url: target + id,
            method: 'GET'
        })
            .then(data => {
                for (let i = 0; i < data.length; i++) {
                    let { id, title } = data[i];

                    let articles_name = "<div class='article_name'><a href='article.shtml?id=" + id + "'>" + title + "</a></div>";
                    let read_full_article = "<div class='show_comment'><a href='article.shtml?id=" + id + "'>Read full article>>></a></div>";

                    $('#sec').append("<div class='list'>" + articles_name + read_full_article + "</div><br/>");
                }
            });
    });
