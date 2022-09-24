$(document).ready(function(){
    $('.carousel_inner').slick({
        speed: 4000,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: false,
        nextArrow: false,
        dots: true,
        dotsClass: 'slick-dots',
    })

    $('.production_carousel').slick({
        arrows: true,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 6,
        slidesToScroll: 2,
    })
});