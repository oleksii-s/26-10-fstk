"use strict";

$.ajax({
    url: "http://jsonplaceholder.typicode.com/posts",
    method: 'GET'
})
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            let {userId, id, body, title} = data[i];

            let author_link = "<a class='author_link' href='author_articles.shtml?id=" + userId + "' id=" + userId + "></a>";
            let title_link = '<a href="article.shtml?id=' + id + '">' + title + '</a>';
            let author = "<span class='author'>" + author_link + "</span><br>";
            let title1 = '<span class="title">' + title_link + '</span><br><br>';
            let desc = '<span class="desc">' + body.substr(0, 100) + '...' + '</span>';
            let link = "<a href='article.shtml?id=" + data[i]['id'] + "'>Read more>>></a>";

            $('#section').append('<div class="child">' + author + title1 + desc + " " + link + "</div>");
        }
    })
    .then(() => {
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/users/",
            method: 'GET'})
            .then(data => {
                if (localStorage.getItem("author") == null) {
                    localStorage['author'] = data[0].name;
                }

                return data;
            })
            .then(data => {
                let aside =  $('#sidebar');

                for (let i = 0; i < data.length; i++) {
                    aside.append('<li><a href="javascript:void(0)">' + data[i].name + '</a></li>');
                }
                aside.append('<li><b><a href="javascript:void(0)">Show all</a></b></li>');

                return data;
            })
            .then(data => {
                let author = $('.author_link');

                for (let j = 0; j < author.length; j++) {
                    let userId = author.eq(j).attr('id') - 1;
                    author.eq(j).html(data[userId].name);
                }
            })
            .then(() => {
                $("aside#slideout ul li a").click( function() {
                    let div = $(".child");
                    let author = $(this).html();

                    for (let i = 0; i < div.length; i++) {
                        let link = $(".author_link").eq(i);

                        if (link.html() != author && author != 'Show all') {
                            div.eq(i).hide();
                            localStorage['author'] = author;
                        } else {
                            div.eq(i).show();
                            localStorage['author'] = '';
                        }
                    }

                    $(this).css("color", 'deepskyblue');
                    $("aside#slideout ul li a").not(this).css("color", '#37245c');
                })
            })
            .then(() => {
                let storage = localStorage.getItem("author");
                let author = $("aside#slideout ul li a");

                for (let i = 0; i < author.length; i++) {
                    if(storage == author.eq(i).html()) {
                        author.eq(i).trigger('click');
                        return;
                    }
                }
            })
            .then(() => {
                $('#arrow').click(() => {
                    $('#arrow').toggleClass('glyphicon-menu-left glyphicon-menu-right');

                    let obj = $('#slideout');

                    if(obj.css('left') == '0px') {

                        obj.css('left', '-13%');
                        $('#main_wrapper').css({
                            'width': '90%',
                            'marginRight': 'auto',
                            'float': 'none'
                        });
                    } else {
                        obj.css('left', '0px');
                        $('#main_wrapper').css({
                            'width': '80%',
                            'marginRight': '30px',
                            'float': 'right'
                        });
                    }
                })
            });
    });
