(function($) {
    "use strict";

    $(document).on('ready', function() {

        $("#loading").delay(1000).fadeOut(500);

        $("a.page-scroll").on("click", function(e) {
            var link = $(this);
            $("html, body").stop().animate({
                scrollTop: $(link.attr("href")).offset().top - 50
            }, 1250, "easeInOutExpo"), e.preventDefault();
        }), $("body").scrollspy({
            target: ".navbar-fixed-top",
            offset: 51
        }), $(".navbar-collapse ul li a").on('click', function() {
            $(".navbar-toggle:visible").click();
        }), $("#mainNav").affix({
            offset: {
                top: 1
            }
        });
        //Slider Animated Caption 
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            spaceBetween: 0,
            loop: true,
            simulateTouch: true,
            // pagination: false,
            autoplay: true,
            autoplay: {
                delay: 5000,
                        },

            speed: 3000,
            
            onSlideChangeEnd: function(swiper) {
                $('.swiper-slide').each(function() {
                    if ($(this).index() === swiper.activeIndex) {
                        // Fadein in active slide
                        $(this).find('.innerslider').fadeIn(300);
                    } else {
                        // Fadeout in inactive slides
                        $(this).find('.innerslider').fadeOut(300);
                    }
                });
            }
        });


        // Testimonional Slider
        $("#testim").owlCarousel({
            singleItem: true,
            autoPlay: false,
            navigation: false,
        });

        // Slider Layer Opacity 
        var divs = $('.slidercontent');
        $(window).on('scroll', function() {
            var st = $(this).scrollTop();
            divs.css({
                'opacity': (1 - st / 800)
            });
        });

        // Member Slider
        $("#member").owlCarousel({
            touchDrag: false,
            pagination: false,
            mouseDrag: false,
            navigation: true,
            items: 3,
            itemsDesktop: [1199, 2],
            itemsDesktopSmall: [979, 1],
            navigationText: [
                "<i class='fa fa-long-arrow-left'></i>",
                "<i class='fa fa-long-arrow-right'></i>"
            ],
        });

        // Stellar Setup 
        $(window).stellar();

        // Blog slider
        $("#blogger").owlCarousel({

            autoPlay: 3000, //Set AutoPlay to 3 seconds
            navigation: true,
            items: 3,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [979, 3],
            navigationText: [
                "<i class='fa fa-long-arrow-left'></i>",
                "<i class='fa fa-long-arrow-right'></i>"
            ],
        });



        // Logo slider
        $("#logo-slider").owlCarousel({
            autoPlay: 3000, //Set AutoPlay to 3 seconds
            pagination: false,
            items: 3,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [979, 3]
        });

        // Counter 
        $('.counter').counterUp({
            delay: 10,
            time: 3000
        });

    });

    // Affix Change Logo 
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 1) {
            $('.logo').addClass('scrolling');
        } else {
            $('.logo').removeClass('scrolling');
        }
    });

})(jQuery);