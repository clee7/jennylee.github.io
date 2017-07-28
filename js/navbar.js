(function ($) {
  $(document).ready(function(){
    
	// hide .navbar first
	$(".navbar").hide();
	
	// fade in .navbar
	$(function () {
		$(window).scroll(function () {
            // set distance user needs to scroll before we fadeIn navbar
			if ($(this).scrollTop() > 100) {
				$('.navbar').fadeIn();
			} else {
				$('.navbar').fadeOut();
			}
		});

	
	});

	// scroll .window to show content 
 	var shiftWindow = function() { scrollBy(0, -50) };
 	if (location.hash) shiftWindow();
 	window.addEventListener("hashchange", shiftWindow);


});
}(jQuery));