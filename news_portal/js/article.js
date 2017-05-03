"use strict";

let target = "https://jsonplaceholder.typicode.com/posts/";
target += window.location.search.replace('?id=', '');

let author_target = "https://jsonplaceholder.typicode.com/users/";

$.ajax({
    url: target,
    method: 'GET'
})
    .then(({userId, title, body}) => {
        $('#title').text(title);
        $('#article').text(body);

        return userId;
    })
    .then(userId => {
        $.ajax({
            url: author_target + userId,
            method: 'GET'
        })
            .then(({name}) => {
                $('#author').html("by <a href='author_articles.shtml?id=" + userId + "'>" + name + "</a>");
            })
    });

$.ajax({
    url: target + '/comments',
    method: 'GET'
})
    .then(data => {
        let obj = document.getElementById('comments');

        for (let i = 0; i < data.length; i++) {
            let { name, email, body } = data[i];

            let ava = "<div><img src='images/ava.png' alt='avatar'></div>";
            let c_email = '<div><span class="email">By ' + email + '</span><br/>';
            let c_title = '<span class="comment_title">' + name + '</span><br/>';
            let c_body = '<span class="comment_body">' + body + '</span><br/><br/></div>';
            let comment = '<div><div class="comment">' + ava + c_email + c_title + c_body + '</div></div>';

            $('#comments').append(comment);
        }
    })
    .then(() => {
        $(".show_comment").click(() => {
            $("#comments").toggle();
        });
    });

