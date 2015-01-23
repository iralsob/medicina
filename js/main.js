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