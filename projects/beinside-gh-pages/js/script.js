svg4everybody();
//Contact

var contactsLink = $('.menu__link--contacts');
var contacts = $('.contacts');
var btnClose = $('.contacts__close');
contacts.hide();
contactsLink.on('click', function() {
    event.preventDefault();
    contacts.slideToggle(0);
});
btnClose.on('click', function() {
    contacts.hide();
});
$(document).mouseup(function(e) {
    if (contacts.has(e.target).length === 0) {
        contacts.hide();
    }
});


//menu

var menuToggle = $('.menu-toggle');
var menu = $('.menu');

menuToggle.on('click', function() {
    if (menu.hasClass("menu--closed")) {
        menu.removeClass("menu--closed");
        menu.addClass("menu--opened");
    }
});

$(document).mouseup(function(e) {
    if (menu.has(e.target).length === 0) {
        menu.removeClass("menu--opened");
        menu.addClass('menu--closed');
    }
});
