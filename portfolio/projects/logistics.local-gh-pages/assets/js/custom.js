///**
// * pgwBrowser init
// */
//var pgwBrowser = $.pgwBrowser(),
//    isMobile = navigator.userAgent.match(/Mobile/i) == "Mobile",
//    ajaxUrl = "/wp-admin/admin-ajax.php",
//    site_cookie_domain = "."+document.location.hostname.replace("www.","");
//
///**
// * Document ready functions
// */

//Initialization Google maps

function initialize() {
    var map = new google.maps.Map(
        document.getElementById("map"), {
            center: {lat: 46.480839, lng: 30.750170},
            zoom: 17,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true,
            scaleControl: false,
            scrollwheel: false,
        });
    var marker = new google.maps.Marker({
        position: {lat: 46.480839, lng: 30.750170},
        map: map,
        title: 'Hello World!'
    });
}

//
////Sticky header
//var header = $('.header');
//var headerHeight = $('.header').outerHeight;
//header.removeClass('js-header-fixed');
//$(window).scroll(function () {
//    if ($(this).scrollTop() > 1) {
//        header.addClass('js-header-fixed').fadeIn('1000');
//    } else {
//        header.removeClass('js-header-fixed').fadeIn('fast');
//    }
//});

(function ($) {
    $(document).ready(function () {

        //starts function google maps
        if ($('.contacts__map').length) {
            google.maps.event.addDomListener(window, "load", initialize);

        }

        //Initialization custom scroll
        if ($(".managers__inner-list").length) {
            $(".managers__inner-list").mCustomScrollbar({
                theme: "minimal-dark",
                autoHideScrollbar: false,
                scrollEasing: "linear",
                timeout: 500,
                live: "on",
                scrollInertia: 400
            });
        }

        /*open/close form register*/
        var link = $('.js-registry');
        var overlay = $('.overlay');
        var close = $('.js-registry-close');
        var registry = $('.form--registy');

        link.on('click', function () {
            event.preventDefault ? event.preventDefault() : (event.returnValue = false);
            registry.addClass('fadeInDownBig');
            overlay.addClass('js-overlay-show ');
            registry.removeClass('fadeOutUpBig');
        });

        overlay.mouseup(function (e) {
            if (registry.has(e.target).length === 0) {
                overlay.removeClass('js-overlay-show');
                registry.addClass('fadeOutUpBig');
                menuList.removeClass('js-menu-open');
                burger.removeClass('active');
            }
        });

        close.on('click', function () {
            event.preventDefault ? event.preventDefault() : (event.returnValue = false);
            registry.addClass('fadeOutUpBig');
            overlay.removeClass('js-overlay-show');
            menuList.removeClass('js-menu-open');
            burger.removeClass('active');
        });


        //Initialization custom calendar flatpickr
        if ($('.js-field-date').length) {
            $(".js-field-date").flatpickr({
                disableMobile: true,
                dateFormat: "d.m.Y"
            });
        }

        //mobile menu open
        var burger = $('.toggle-menu');
        var menuList = $('.menu__inner');

        burger.on('click', function() {
            $(this).toggleClass('active');
            menuList.toggleClass('js-menu-open');
        });

        //open list cityes
        var citiesList = $('.cityes__list'),
            citiesListOpen = $('.js-list-open'),
            citiesMore = $('.cityes__more'),
            citiesMoreOpen = $('.cityes__more--open');

        citiesMore.on('click', function () {
            $(this).toggleClass('cityes__more--open');
            citiesList.toggleClass('js-list-open');

        });

    });
})(jQuery);
