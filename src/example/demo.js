$(function () {
    "use strict";

    var urls = [
        {title: 'index', href: 'index'},
        {title: 'fullscreen', href: 'fullscreen'},
        {title: 'caption', href: 'caption'},
        {title: 'thumbnails position', href: 'thumbnails_position'},
        {title: 'simple', href: 'simple'}
    ];

    var menuHTML =  "<div class='menu-wrap'><ul id='menu'>";

    var location = (window.location.pathname).replace(/^.*\/([^/]*).html$/gmi, '$1');

    for (let x of urls) {
        if (location === x.href) {
            menuHTML += `<li><span>${x.title}</span></li>`
        } else {
            menuHTML += `<li><a href="${x.href}.html">${x.title}</a></li>`
        }
    }

    menuHTML+= "</ul></div>";

    $(menuHTML).prependTo('body');

});
