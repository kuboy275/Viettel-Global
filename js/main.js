$(document).ready(function() {

    $('.slide-items').slick({
        infinite: false,
        dots: false,
        slidesToShow: 3.7,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-prev slick-arrow"><i class="far fa-long-arrow-left"></i></button>',
        nextArrow: '<button class="slick-next slick-arrow"><i class="far fa-long-arrow-right"></i></button>'
    });


    $('.about-slide').slick({
        arrows: false,
        dot: false,
        slidesToShow: 1,
        infinite: false,
    })

    $('.manager-slide').slick({
        dotst: false,
        slidesToShow: 3,
        infinite: false,
        arrows: true,
        prevArrow: '<button class="slick-prev slick-arrow"><i class="far fa-long-arrow-left"></i></button>',
        nextArrow: '<button class="slick-next slick-arrow"><i class="far fa-long-arrow-right"></i></button>',
    })

    $('.society-slide').slick({
        slidesToShow: 3,
        infinite: false,
        arrows: true,
        prevArrow: '<button class="slick-prev slick-arrow"><i class="far fa-long-arrow-left"></i></button>',
        nextArrow: '<button class="slick-next slick-arrow"><i class="far fa-long-arrow-right"></i></button>',
    })

    // CUSTOME QUESTION RECRUITMENT ARROW UP DOWN
    $('.collapse').on('show.bs.collapse', function() {
        $(this).siblings('.card-header').addClass('active');
    })
    $('.collapse').on('hide.bs.collapse', function() {
        $(this).siblings('.card-header').removeClass('active');
    });

});