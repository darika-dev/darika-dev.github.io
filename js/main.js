$(document).ready(function() {
	/*-----------------------------------------------------------------*/
	/* Smooth Scrolling
	/*-----------------------------------------------------------------*/
	$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top -68
	        }, 800);
	        return false;
	      }
	    }
	  });
	});


	/*-----------------------------------------------------------------*/
	/* Welcome
	/*-----------------------------------------------------------------*/
	setTimeout(function() {
      $('.welcome').fadeOut(1000);
      }, 500);

      $('.welcome').on({
	      'mousewheel': function(e) {
		      if (e.target.id == 'el') return;
		      e.preventDefault();
		      e.stopPropagation();
		  }
    });


	/*-----------------------------------------------------------------*/
	/* Work Flow
	/*-----------------------------------------------------------------*/

	/* Responsive support */
	$('#main .workFlow ul li').each(function(){
	    var heading = $(this).find('.details h4');
	    var width = heading.width();
	    $(this).find('.details').width(width);
    });

	if ($('#main .workFlow ul li').width() > 126) {
		$('#main .workFlow ul li span.point').addClass('autoCenter')
	}
	else {
	   $('#main .workFlow ul li span.point').removeClass('autoCenter')
	}

	$(window).on('resize', function() {
		if ($('#main .workFlow ul li').width() > 126) {
		$('#main .workFlow ul li span.point').addClass('autoCenter')
		}
		else {
		   $('#main .workFlow ul li span.point').removeClass('autoCenter')
		}
	});

	/* Waypoint animation */
	$('#main #about .workFlow').waypoint(function () {
	    $('#main #about .workFlow').addClass('animate');
	    $('#main #about .workFlow ul li.HTML5').addClass('animate');
	    setTimeout(function () {
	        $('#main #about .workFlow ul li.CSS3').addClass('animate');
	    }, 1200);
	    setTimeout(function () {
	        $('#main #about .workFlow ul li.JavaScript').addClass('animate');
	    }, 2400);
	    setTimeout(function () {
	        $('#main #about .workFlow ul li.learn').addClass('animate');
	    }, 3600);
	},
	{
	    offset: '65%',
	    triggerOnce: true
	});


	/*-----------------------------------------------------------------*/
	/* Gallery
	/*-----------------------------------------------------------------*/

	/* Gallery animation */
	$('#main #work .gallery').waypoint(function() {
		$(this).addClass( 'animate' );
	},
	{
		offset: '65%',
		triggerOnce: true
	});

	$('.gallery .shotWrapperJS').click(function(e) {
		e.preventDefault();
		var imgSource = $(this).data('img');
		$('body').append('<div class="projectModal"><div class="closeContainer"><a class="close" href="#">Закрыть</a></div><div class="imgContainer"><img class="project" src="'+imgSource+'"/></div></div>');
		$('html, body').animate({
			'scrollTop':   $('#header').offset().top -68
		}, 300);
		$('.projectModal').fadeIn(300);
		var projectHeight = $(document).height();
		$('.projectModal').css('height', projectHeight);
		var projectWidth = $('.projectModal img.project').width();
		//$('.projectModal .closeContainer').css('width', projectWidth);
		// console.log('gave width');
		$(window).on('resize', function() {
			var projectWidth = $('.projectModal img.project').width();
			$('.projectModal .closeContainer').css('width', projectWidth);
		});

		$('.projectModal').click(function(e) {
			e.preventDefault();
			$('.projectModal').fadeOut(300);
			setTimeout(function() {
				$('.projectModal').remove();
			}, 300);
			$('html, body').animate({
				'scrollTop':   $('#work').offset().top -68
			}, 300);
		});

	});


	/*-----------------------------------------------------------------*/
	/* Contact
	/*-----------------------------------------------------------------*/

	/* Gallery animation */
	$('#main #contact .responsiveDesign').waypoint(function() {
		$(this).addClass( 'animate' );
	},
	{
		offset: '65%',
		triggerOnce: true
	});


	/*-----------------------------------------------------------------*/
	/* Contact DariKa
	/*-----------------------------------------------------------------*/

	$('.contactDariKa').click(function(e) {
		var bodyHeight = $('body').height();
		$('body').addClass('contact').css('height', '100%');
		e.preventDefault();
		e.stopPropagation();
	});

	$('.contactModal .modalWrapper, .contactModal .modalWrapper .modal button.secondaryBtn, .contactModal .modalWrapper .modal a.close').click(function (e) {
    	$('body').removeClass('contact');
    	e.preventDefault();
    });
    $('.contactModal .modalWrapper .modal').click(function(e) {
	    e.stopPropagation();
    });

    /* Contact form */
    $('#contactForm').submit(function(){
		var action = $(this).attr('action');
		console.log(action);
		$(".loadingOverlay").fadeIn(300,function() {

		$.post(action, {
			name: $('#name').val(),
			email: $('#email').val(),
			message: $('#message').val()
		},
			function(data){
				document.getElementById('message').innerHTML = data;
				if(data.match('success') != null) $('.successOverlay').fadeIn(300);

			}
		);

		});

		return false;

	});


	/*-----------------------------------------------------------------*/
	/* Mobile Support
	/*-----------------------------------------------------------------*/

	$('header#header a.mobileNav').on( 'click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		if ($('.mobileMenu').css('visibility') === 'hidden') {
			$('header#header').addClass('openMobileNav');
			$(this).addClass('active');
		}
		else {
			$('header#header').removeClass('openMobileNav');
			$('header#header a.mobileNav').removeClass('active');
		}
	});

	$('.mobileMenu, .mobileMenu a').on( 'click', function(e) {
		e.preventDefault();
		$('header#header').removeClass('openMobileNav');
		$('header#header a.mobileNav').removeClass('active');
	});

	/*-----------------------------------------------------------------*/
	/* Misc.
	/*-----------------------------------------------------------------*/

	var s = skrollr.init({
		smoothScrolling: false
	});

	$(function() {
	    $('.budgetSlider').slider({
	      range: 'min',
	      value: 5000,
	      min: 3000,
	      max: 30000,
	      step: 1000,
	      slide: function(event, ui) {
	        $('.budgetAmount').text('$' + number_format(ui.value, 0, '.', ','));
	        $('.budgetAmount').text((ui.value == '30000') ? ('$' + number_format(ui.value, 0, '.', ',') + '+') : '$' + number_format(ui.value, 0, '.', ','));
	      }
	    });
	    $('.budgetAmount').text('$' + number_format($('.budgetSlider').slider('value'), 0, '.', ','));
	});

	function number_format(number, decimals, dec_point, thousands_sep) {
	    var n = !isFinite(+number) ? 0 : +number,
	        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
	        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
	        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
	        s = '',
	        toFixedFix = function (n, prec) {
	            var k = Math.pow(10, prec);
	            return '' + Math.round(n * k) / k;
	        };
	    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
	    if (s[0].length > 3) {
	        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
	    }
	    if ((s[1] || '').length < prec) {
	        s[1] = s[1] || '';
	        s[1] += new Array(prec - s[1].length + 1).join('0');
	    }
	    return s.join(dec);
	}

});
