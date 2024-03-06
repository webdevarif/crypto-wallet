;(function ($) {
    const THEME = {
        init() {
            this.headerSticky();
            this.sliders();
        },
    
        headerSticky() {  
            $('.navbar-toggler').on('click', function () {
                $('.offcanvas-wraper, .navbar-toggler, .mobile-header').toggleClass('active');
            });

            var header = $('.header-area, .mobile-header');
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();
                if (scroll >= 50) {
                    header.addClass('sticky');
                } else {
                    header.removeClass('sticky');
                }
            });

            $('.anonymous-close').on('click', function () {
                $('.anonymous-bar').hide();
            });
        },
    
        sliders() {
            /*-------------------------------------------------------------------------------
            Banner Slider 
            -------------------------------------------------------------------------------*/
            if($('.slick-slider').length){
                var $slider = $('.slick-slider');
                $slider.each(function () {
                    $(this).slick({
                        prevArrow: $(this).data('prev') ? $(this).data('prev') : '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 256c0 137 111 248 248 248s248-111 248-248S393 8 256 8 8 119 8 256zm448 0c0 110.5-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56s200 89.5 200 200zm-72-20v40c0 6.6-5.4 12-12 12H256v67c0 10.7-12.9 16-20.5 8.5l-99-99c-4.7-4.7-4.7-12.3 0-17l99-99c7.6-7.6 20.5-2.2 20.5 8.5v67h116c6.6 0 12 5.4 12 12z"></path></svg>',
                        nextArrow: $(this).data('next') ? $(this).data('next') : '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"></path></svg>',
                        speed: 1000
                    });
                })
            }
            /*-------------------------------------------------------------------------------
            PRICE Slider 
            -------------------------------------------------------------------------------*/
            if($('.price-slider').length){
                var $slider = $('.price-slider');
                function priceSlider(){
                    if(window.innerWidth < 767) {
                        if(!$($slider).hasClass('slick-initialized')){
                            $slider.each(function () {
                                $(this).slick({
                                    centerMode: true,
                                    centerPadding: '3rem',
                                    prevArrow: $(this).data('prev') ? $(this).data('prev') : '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 256c0 137 111 248 248 248s248-111 248-248S393 8 256 8 8 119 8 256zm448 0c0 110.5-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56s200 89.5 200 200zm-72-20v40c0 6.6-5.4 12-12 12H256v67c0 10.7-12.9 16-20.5 8.5l-99-99c-4.7-4.7-4.7-12.3 0-17l99-99c7.6-7.6 20.5-2.2 20.5 8.5v67h116c6.6 0 12 5.4 12 12z"></path></svg>',
                                    nextArrow: $(this).data('next') ? $(this).data('next') : '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"></path></svg>',
                                    speed: 1000
                                });
                            })
                        }
                    }else{
                        if($($slider).hasClass('slick-initialized')){
                            $($slider).slick('unslick');
                        }
                    }
                }
                priceSlider();

                $(window).resize(function(e){
                    priceSlider();
                });
            }

            
            /*-------------------------------------------------------------------------------
            Product Details Slider 
            -------------------------------------------------------------------------------*/
            if($('.popup-video').length){
                $('.popup-video').magnificPopup({
                    // disableOn: 700,
                    type: 'iframe',
                    mainClass: 'mfp-fade',
                    removalDelay: 160,
                    preloader: false,
                    iframe:{
                    patterns:{
                        youtube:{
                            index: 'youtube.com',
                            id: 'v=',
                            src: 'https://www.youtube.com/embed/%id%'
                        },
                    },
                        srcAction:'iframe_src',
                    },
                    fixedContentPos: false,
                });
            }

            if($('.hover-video').length){
                const videos = document.querySelectorAll('.hover-video');

                videos.forEach(video => {
                    video.addEventListener('mouseenter', () => {
                        video.play();
                    });
                    
                    video.addEventListener('mouseleave', () => {
                        video.pause();
                        video.currentTime = 0;
                    });

                    video.addEventListener('click', () => {
                        if (video.paused) {
                            video.play();
                        } else {
                            video.pause();
                            video.currentTime = 0;
                        }
                    });

                });
            }
        },

    };
  
    $(document).ready(function () {
      THEME.init();    
    });  
  })(jQuery);