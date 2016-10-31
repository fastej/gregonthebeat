$(document).ready( function() {

'use strict'; $(window).scroll( function(){
        $('.hideme').each( function(){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).addClass('showme');
            }
            if( bottom_of_window < bottom_of_object ){
                $(this).removeClass('showme');
            }
        });
    });
 
$(window).bind('scroll', function(){
			parallaxScroll();
		});
		function parallaxScroll(){
			var scrolledY = $(window).scrollTop();
			$('#logo').css('top','-' + ((scrolledY*1.3)) + 'px');
			$('#redbook').css('top','-' + ((scrolledY*0.9)) + 'px');
		}

$(document).ready( function(){
	$('#logo, #redbook').delay(700).fadeIn(4000);
	});


});