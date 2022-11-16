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
		responsive: [{
			breakpoint: 768,
			settings: {
			  arrows: false,
			  autoplay: true,
			  autoplaySpeed: 3000,
			}
		},
		{
			breakpoint: 500,
			settings: {
				slidesToShow: 5,
				slidesToScroll: 1,
				arrows: false,
			  	autoplay: true,
			  	autoplaySpeed: 3000,
			}
		},
		{
			breakpoint: 425,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				arrows: false,
			  	autoplay: true,
			  	autoplaySpeed: 3000,
			}
		},
		]
	})
    $('.partner_carousel').slick({
        arrows: true,
        speed: 2000,
        autoplay: false,
        autoplaySpeed: 2000,
        slidesToShow: 5,
        slidesToScroll: 2,
			responsive: [{
				breakpoint: 992,
				settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 3000,
				}
			},
			{	
				breakpoint: 768,
				settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
			  	arrows: false,
			  	autoplay: true,
			  	autoplaySpeed: 3000,
				}
			},
			{	
				breakpoint: 425,
				settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			  	arrows: false,
			  	autoplay: true,
			  	autoplaySpeed: 3000,
			}
		},
		]
    })
	$(window).scroll(function() {
		if($(this).scrollTop()>1200) {
		  $('.pageup').fadeIn();
		} else {
		  $('.pageup').fadeOut();
		}
	  });
	
	  $("a[href^='#']").click(function() {
		const _href = $(this).attr("href");
		$("html,body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
	  })
});