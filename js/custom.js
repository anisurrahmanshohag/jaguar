$(function() {
    'use strict';

    $('.slk_feed').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        dots: false,
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-caret-right"></i></button>',
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-caret-left"></i></button>',


        // responsive: [{
        //         breakpoint: 992,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1,
        //             infinite: true,
        //             dots: true
        //         }
        //     },
        //     {
        //         breakpoint: 768,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1
        //         }
        //     },
        //     {
        //         breakpoint: 576,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1
        //         }
        //     }
        // ]
    });

    $('.exp_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,

        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.comment_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,

        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });




    // =============model click=========
    $('.s_model1_on').on('click', function() {
        $('.s_model1').addClass('d_blocker')

    });
    $('.s_model2_on').on('click', function() {
        $('.s_model2').addClass('d_blocker')

    });
    $('.s_model3_on').on('click', function() {
        $('.s_model3').addClass('d_blocker')

    });
    $('.s_model4_on').on('click', function() {
        $('.s_model4').addClass('d_blocker')

    });
    $('.s_model5_on').on('click', function() {
        $('.s_model5').addClass('d_blocker')

    });
    $('.s_model6_on').on('click', function() {
        $('.s_model6').addClass('d_blocker')

    });
    $('.s_model7_on').on('click', function() {
        $('.s_model7').addClass('d_blocker')

    });
    $('.s_model8_on').on('click', function() {
        $('.s_model8').addClass('d_blocker')

    });
    $('.s_model9_on').on('click', function() {
        $('.s_model9').addClass('d_blocker')

    });

    $('.medel_closer').on('click', function() {
        $('.model_park').removeClass('d_blocker')
    });
    // =============model click=========






});