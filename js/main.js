$(document).ready(function() {

	$('body').addClass('loaded');

	var navHeight = $('nav').height();

	$(document).scroll(function() {
		nav_bg();
	});

	nav_bg();

	function nav_bg() {
		var scrollTop = $(window).scrollTop();
		if (scrollTop > navHeight) {
			$('nav').css('background-color', '#212121');
		} else {
			$('nav').css('background-color', 'transparent');
		}
	}


	$('a.scroll').on('click', function(e){
		e.preventDefault();
		var idtop = $(this).attr('href');
		var scroll = $(idtop).offset().top - navHeight;
		$('html,body').animate({
			scrollTop: scroll
		}, 500);
	})


	$(window).scroll(function() {
		var windowTop = $(window).scrollTop();
		var wHeight = $(window).height();
		var mobile = $(this).width();
		if (mobile > 900) {
			$('article#work h1 span, article#contacts h1 span').each(function() {
				var $$ = $(this);
				var offset = $$.offset().top;
				var stop = offset + $$.height();
				if((windowTop >= offset - wHeight) && (windowTop <= stop)) {
					newCoord =( windowTop - offset )* 0.03;
					$$.css({
						'transform' : 'translate(0px, '+ newCoord +'%)'
					});
				}
			});
		};
	});
});