/**
*****************************************
* main.js
*
* JQUERY FILE FOR CUSTOM JS AND ACTIVE JS
*
*****************************************
**/



/**
***********************************************
* Table of contents
***********************************************
*
* 1. Nice Select JS
**/

(function ($) {
    "use strict";
	
	// document ready function
	// ============================================
    jQuery(document).ready(function ($) {
        
		
		// owl carouse
        /*=========================================
        testimonial slider
        =========================================*/
            $('.testimonial-slider').owlCarousel({
				items:2,
				lazyLoad:true,
				loop:true,
	            dots:false,
                nav:true,
				autoplay:false,
				autoplayTimeout:5000,
				margin:25,
				autoplayHoverPause:true,
                navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                    responsive:{
                    300: {
                        items:1,
                        nav:false,
                    },
                    480: {
                        items:2,
                        nav:false,
                    },
                    768: {
                        items:2,
                        nav:false,
                    },
                    1170: {
                        items:2,
                    },
                }
			});
        
        /*=========================================
        Multimedia slider 3 items
        =========================================*/
        $('.multimedia-slider').owlCarousel({
				items:3,
				lazyLoad:true,
				loop: true,
	            dots: true,
                nav: true,
				autoplay:false,
				autoplayTimeout:5000,
				margin: 25,
				autoplayHoverPause:true,
                navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                    responsive:{
                    300: {
                        items:1,
                        nav:false,
                    },
                    480: {
                        items:1,
                        nav:false,
                    },
                    768: {
                        items:2,
                        nav:false,
                    },
                    1170: {
                        items:3,
                    },
                }
			});
        
            /*=========================================
            Slider top area
            =========================================*/
			$('.slider-area').owlCarousel({
				items: 1,
				loop: true, 
				autoplay: true,
				dots: true,
				nav: true,
				navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
			});
			
			// homepage slider animation support
			$(".slider-area").on("translate.owl.carousel", function(){
				$(".slider-content h1, .slider-content p").removeClass("animated fadeInUp").css({'opacity':'0'});
				$(".slider-content a").removeClass("animated fadeInDown").css({'opacity':'0'});
			});
			
			$(".slider-area").on("translated.owl.carousel", function(){
				$(".slider-content h1, .slider-content p").addClass("animated fadeInUp").css({'opacity':'0'});
				$(".slider-content a").addClass("animated fadeInDown").css({'opacity':'0'});
			});
		

			/* ======= Pre Loader ======= */
			$('#loading').fadeOut();



	        /* ======= Contact Form ======= */
	        $('#contactForm').on('submit',function(e){

	            e.preventDefault();

	            var $action = $(this).prop('action');
	            var $data = $(this).serialize();
	            var $this = $(this);

	            $this.prevAll('.alert').remove();

	            $.post( $action, $data, function( data ) {

	                if( data.response=='error' ){

	                    $this.before( '<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> <i class="fa fa-times-circle"></i> '+data.message+'</div>' );
	                }

	                if( data.response=='success' ){

	                    $this.before( '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><i class="fa fa-thumbs-o-up"></i> '+data.message+'</div>' );
	                    $this.find('input, textarea').val('');
	                }

	            }, "json");

	        });
        
        /*====================================
			Circle Progress JS
			======================================*/ 	
			$('.circle').circleProgress({
				fill: {
					color: '#75f5b3'
				}
			});

		
    });

}(jQuery));