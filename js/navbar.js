(function ($) {
  $(document).ready(function(){
    
	// hide .navbar when website is loaded
	$(".navbar").hide();
	
	// fade in .navbar as scroll away from top
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

	// scroll .window to show content hidden by navbar when anchor clicked
 	var shiftWindow = function() { scrollBy(0, -50) };
 	if (location.hash) shiftWindow();
 	window.addEventListener("hashchange", shiftWindow);

 	// .navbar-collapse (menu) close on anchor clicked
 	$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
    });

    // .navbar-collapse (menu) close on click outside
	$(document).click(function(e) {
    	if (!$(e.target).is('a')) {
        	$('.navbar-collapse').collapse('hide');        
    	}
	});
});

}(jQuery));