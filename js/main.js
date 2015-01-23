$(document).ready(function(){

	 $('.flexslider').flexslider({
	    animation: "slide",
	    animationLoop: false,
	    itemWidth: 250,
        slideshow: false
	  });

	$('a[href*=#]').bind("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 1000);
		e.preventDefault();
	});
	return false;
});
$(window).scroll(function(){

	var h1 = $('.slider').height() + $('.appointment').height();
	var h2 = h1 + $('.home-services').height();
	var h3 = h2 + $('.professionals').height();
	var h4 = h3 + $('.latest-news').height();	

	if ($(window).scrollTop() <= h1) {
		$('.navbar-nav li a').removeClass('active');
		$('.navbar-nav li:nth-child(1) a').addClass('active');
	} else if ($(window).scrollTop() <= h2 &&
		$(window).scrollTop() > h1) {
		$('.navbar-nav li a').removeClass('active');
		$('.navbar-nav li:nth-child(2) a').addClass('active');
	} else if ($(window).scrollTop() <= h3 &&
		$(window).scrollTop() > h2) {
		$('.navbar-nav li a').removeClass('active');
		$('.navbar-nav li:nth-child(3) a').addClass('active');
	} else if ($(window).scrollTop() <= h4 &&
		$(window).scrollTop() > h3) {
		$('.navbar-nav li a').removeClass('active');
		$('.navbar-nav li:nth-child(4) a').addClass('active');
	} else if ($(window).scrollTop() > h4) {
		$('.navbar-nav li a').removeClass('active');
		$('.navbar-nav li:nth-child(5) a').addClass('active');
	}
});