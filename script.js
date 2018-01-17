$(document).ready(function() {
  
  //Page Scroll Animation
  $("a").on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 500, 'easeInOutQuart', function () {
	        window.location.hash = target;
	    });
	})
  
});