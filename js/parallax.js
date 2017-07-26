$(document).ready(function() {
	var jumboHeight = $('.jumbotron').outerHeight();
	function parallax(){
	  var scrolled = $(window).scrollTop();
	  $('.background').css('height', (jumboHeight-scrolled) + 'px');
	}
	$(window).scroll(function(e){
	  parallax();
	});
});
