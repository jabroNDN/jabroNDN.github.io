$('.single-slider').slick({
    dots: true,
    infinite: true,
    arrows: false
});
$('.multi-slider').slick({
    dots: false,
    infinite: true,
    mobileFirst: true,
    arrows: false,
    responsive: [{
        breakpoint: 1440,
        settings: {
            slidesToShow: 4,
            arrows: true
        }
    }, {
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            arrows: true
        }
    }, {
        breakpoint: 767,
        settings: {
            dots: false,
            slidesToShow: 2,
            arrows: true
        }
    }, {
        breakpoint: 320,
        settings: {
            dots: true,
            slidesToShow: 1,
            settings: "unslick" // destroys slick
        }
    }]
});


