jQuery(function ($) {
    'use strict';
        
        var gameImageURLList = {
            "tower_rush": "https://via.placeholder.com/150x500",
            "chicken_rodeo": "https://via.placeholder.com/150x500",
            "color_brawl": "https://via.placeholder.com/150x500",
            "cetchy": "https://via.placeholder.com/150x500",
            "dodge_ball": "https://via.placeholder.com/150x500",
            "operation_archer": "https://via.placeholder.com/150x500",
            "bouncy_battle": "https://via.placeholder.com/150x500",
            "galactic_looters": "https://via.placeholder.com/150x500",
            "cetchy": "https://via.placeholder.com/150x500",
        }
		// Header Sticky
		$(window).on('scroll',function() {
            if ($(this).scrollTop() > 120){  
                $('.navbar').addClass("is-sticky");
            }
            else{
                $('.navbar').removeClass("is-sticky");
            }
		});

		// Navbar JS
        $('.navbar .navbar-nav li a').on('click', function(e){
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 100
            }, 100);
            e.preventDefault();
        });
        $(document).on('click','.navbar-collapse.in',function(e) {
            if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
                $(this).collapse('hide');
            }
        });
		$('.navbar .navbar-nav li a').on('click', function(){
            $('.navbar-collapse').collapse('hide');
            $('.burger-menu').removeClass('active');
		});

        // Button Hover JS
		$('.default-btn')
		.on('mouseenter', function(e) {
			var parentOffset = $(this).offset(),
			relX = e.pageX - parentOffset.left,
			relY = e.pageY - parentOffset.top;
			$(this).find('span').css({top:relY, left:relX})
		})
		.on('mouseout', function(e) {
			var parentOffset = $(this).offset(),
			relX = e.pageX - parentOffset.left,
			relY = e.pageY - parentOffset.top;
			$(this).find('span').css({top:relY, left:relX})
		});

		// Preloader
		jQuery(window).on('load', function () {
			$('.preloader').fadeOut()
		})

		// Odometer JS
        $('.odometer').appear(function(e) {
			var odo = $(".odometer");
			odo.each(function() {
				var countNumber = $(this).attr("data-count");
				$(this).html(countNumber);
			});
		});

		// FAQ Accordion
        $(function() {
            $('.accordion').find('.accordion-title').on('click', function(){
                // Adds Active Class
                $(this).toggleClass('active');
                // Expand or Collapse This Panel
                $(this).next().slideToggle('fast');
                // Hide The Other Panels
                $('.accordion-content').not($(this).next()).slideUp('fast');
                // Removes Active Class From Other Titles
                $('.accordion-title').not($(this)).removeClass('active');		
            });
		});
		
		// Screenshot Slider
		var slider = $('.screenshot-slider').owlCarousel({
			loop: true,
			nav: false,
			dots: true,
			autoplayHoverPause: true,
			autoplay: true,
            smartSpeed: 1000,
            margin: 40,
            navText: [
                "<i class='flaticon-curve-arrow'></i>",
                "<i class='flaticon-curve-arrow-1'></i>"
            ],
            responsive: {
				0: {
					items: 1,
				},
				576: {
					items: 1
				},
				768: {
					items:  1
				},
				1024: {
					items: 4
				},
				1200: {
					items: 4
				}
			}
		});

        function isTouchDevice() {
            const userAgent = navigator.userAgent.toLowerCase();
            const isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(userAgent);

            var isTouch =  (('ontouchstart' in window) ||
               (navigator.maxTouchPoints > 0) ||
               (navigator.msMaxTouchPoints > 0));

            if(isTouch && !isTablet) {
                return true;
            }
            return false;
          }

        function brandSliderClasses() {
            slider.each(function() {
                var total = $(this).find('.owl-item.active').length;
                $(this).find('.owl-item').removeClass('activeGame');
                $(this).find('.owl-item.active').each(function(index) {
                     /*
                    var gameCard = $(this).find(">:first-child");
                    gameCard.css('backgroundImage', 'none')
                    */
                    if(isTouchDevice()) {
                        if (index === 0) {
                            /*
                            $(this).addClass('activeGame')
                            
                            var imageURL = gameImageURLList[gameCard.attr('id')];
                            gameCard.css('backgroundImage', `url(${imageURL})`);
                            */
                        } 
                    } else {
                        if (index === 1) {
                            /*
                            $(this).addClass('activeGame')
                            
                            var imageURL = gameImageURLList[gameCard.attr('id')];
                            gameCard.css('backgroundImage', `url(${imageURL})`);
                            */
                        } 
                    }
                    
                })
            })
        }
        brandSliderClasses();
        slider.on('translated.owl.carousel', function(event) {
            brandSliderClasses()
        }); 

		// Feedback Carousel
		var $imagesSlider = $(".testimonial-slides .client-feedback>div"),
		$thumbnailsSlider = $(".client-thumbnails>div");
		// Images Options
		$imagesSlider.slick({
			speed: 300,
			slidesToShow: 1,
			slidesToScroll: 1,
			cssEase: 'linear',
			fade: true,
			autoplay: false,
			draggable: true,
			asNavFor: ".client-thumbnails>div",
			prevArrow: '.client-feedback .prev-arrow',
			nextArrow: '.client-feedback .next-arrow'
		});
		// Thumbnails Options
		$thumbnailsSlider.slick({
			speed: 300,
			slidesToShow: 5,
			slidesToScroll: 1,
			cssEase: 'linear',
			autoplay: false,
			centerMode: true,
			draggable: false,
			focusOnSelect: true,
			asNavFor: ".testimonial-slides .client-feedback>div",
			prevArrow: '.client-thumbnails .prev-arrow',
            nextArrow: '.client-thumbnails .next-arrow',
		});
		
		// Tabs
        (function ($) {
            $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
            $('.tab ul.tabs li a').on('click', function (g) {
                var tab = $(this).closest('.tab'), 
                index = $(this).closest('li').index();
                tab.find('ul.tabs > li').removeClass('current');
                $(this).closest('li').addClass('current');
                tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
                tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
                g.preventDefault();
            });
        })(jQuery);

        // Popup Video
		$('.popup-youtube').magnificPopup({
			disableOn: 320,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
        });

		// Subscribe form
		$(".newsletter-form").validator().on("submit", function (event) {
			if (event.isDefaultPrevented()) {
			// handle the invalid form...
				formErrorSub();
				submitMSGSub(false, "Please enter your email correctly.");
			} else {
				// everything looks good!
				event.preventDefault();
			}
		});
		function callbackFunction (resp) {
			if (resp.result === "success") {
				formSuccessSub();
			}
			else {
				formErrorSub();
			}
		}
		function formSuccessSub(){
			$(".newsletter-form")[0].reset();
			submitMSGSub(true, "Thank you for subscribing!");
			setTimeout(function() {
				$("#validator-newsletter").addClass('hide');
			}, 4000)
		}
		function formErrorSub(){
			$(".newsletter-form").addClass("animated shake");
			setTimeout(function() {
				$(".newsletter-form").removeClass("animated shake");
			}, 1000)
		}
		function submitMSGSub(valid, msg){
			if(valid){
				var msgClasses = "validation-success";
			} else {
				var msgClasses = "validation-danger";
			}
			$("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
		}
		// AJAX MailChimp
		$(".newsletter-form").ajaxChimp({
			url: "https://envytheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9", // Your url MailChimp
			callback: callbackFunction
		});

		/* Ripple Effect
        ========================================================*/
        $('.ripple-effect, .ripple-playing').ripples({
            resolution: 512,
            dropRadius: 25,
            perturbance: 0.04,
		});
		
		/* Practicle JS
        ========================================================*/
        if(document.getElementById("particles-js")) particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 50, "density": {
                        "enable": true, "value_area": 800
                    }
                }
                , "color": {
                    "value": "#ffffff"
                }
                , "shape": {
                    "type": "circle", "stroke": {
                        "width": 0, "color": "#000000"
                    }
                    , "polygon": {
                        "nb_sides": 5
                    }
                    , "image": {
                        "src": "img/github.svg", "width": 100, "height": 100
                    }
                }
                , "opacity": {
                    "value": 0.5, "random": false, "anim": {
                        "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false
                    }
                }
                , "size": {
                    "value": 5, "random": true, "anim": {
                        "enable": false, "speed": 40, "size_min": 0.1, "sync": false
                    }
                }
                , "line_linked": {
                    "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1
                }
                , "move": {
                    "enable": true, "speed": 6, "direction": "none", "random": false, "straight": false, "out_mode": "out", "attract": {
                        "enable": false, "rotateX": 600, "rotateY": 1200
                    }
                }
            }
            , "interactivity": {
                "detect_on": "canvas", "events": {
                    "onhover": {
                        "enable": true, "mode": "repulse"
                    }
                    , "onclick": {
                        "enable": true, "mode": "push"
                    }
                    , "resize": true
                }
                , "modes": {
                    "grab": {
                        "distance": 400, "line_linked": {
                            "opacity": 1
                        }
                    }
                    , "bubble": {
                        "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3
                    }
                    , "repulse": {
                        "distance": 200
                    }
                    , "push": {
                        "particles_nb": 4
                    }
                    , "remove": {
                        "particles_nb": 2
                    }
                }
            }
            , "retina_detect": true, "config_demo": {
                "hide_card": false, "background_color": "#b61924", "background_image": "", "background_position": "50% 50%", "background_repeat": "no-repeat", "background_size": "cover"
            }
        });

        // WOW JS
        $(window).on ('load', function (){
            if ($(".wow").length) { 
                var wow = new WOW({
                boxClass:     'wow',      // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset:       20,          // distance to the element when triggering the animation (default is 0)
                mobile:       true, // trigger animations on mobile devices (default is true)
                live:         true,       // act on asynchronously loaded content (default is true)
            });
            wow.init();
            }
        });

		// Go to Top
        $(function(){
            // Scroll Event
            $(window).on('scroll', function(){
                var scrolled = $(window).scrollTop();
                if (scrolled > 600) $('.go-top').addClass('active');
                if (scrolled < 600) $('.go-top').removeClass('active');
            });  
            // Click Event
            $('.go-top').on('click', function() {
                $("html, body").animate({ scrollTop: "0" },  500);
            });
		});

}(jQuery));









