---
---

{% include_relative _js/jquery.js %}
{% include_relative _js/bootstrap.min.js %}
{% include_relative _js/easing.js %}
{% include_relative _js/move-top.js %}


$(document).ready(function() {

	var scrollOffset = 80;

	var defaults = {
		containerID: 'toTop', // fading element id
		containerHoverID: 'toTopHover', // fading element hover id
		scrollSpeed: 1200,
		easingType: 'linear'
		};


	$().UItoTop({ easingType: 'easeOutQuart' });

	$(".scroll").click(function(event) {
		var top = $(this.hash).offset()	 ? $(this.hash).offset().top : 0;
		event.preventDefault();
		$('html,body').animate({scrollTop:top - scrollOffset},1200);
	});

	$(window).scroll(function() {
	  if ($(document).scrollTop() > 70) {
	    $('nav.main-nav').removeClass('large');
	    $('body').removeClass('large-menu');
	  }
	  else {
	    $('nav.main-nav').addClass('large');
	    $('body').addClass('large-menu');
	  }
	});

});
