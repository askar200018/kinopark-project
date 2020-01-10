// First Slider
$('.banner-slider-one')
.not('.slick-intitalized')
.slick({
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: '.banner-slider-block .banner-btn .prev',
    nextArrow: '.banner-slider-block .banner-btn .next'
});


// Second Slider

$('.films-about .film-row')
.not('.slick-intitalized')
.slick({
    prevArrow: '.films-about .films .films-btn .prev',
    nextArrow: '.films-about .films .films-btn .next',
    slidesToShow: 5,
    slidesToScroll: 1
});

// Third Slider 


$('.hot-price-section .film-row')
.not('.slick-intitalized')
.slick({
    prevArrow: '.hot-price-section .films .films-btn .prev',
    nextArrow: '.hot-price-section .films .films-btn .next',
    slidesToShow: 5,
    slidesToScroll: 1
});



// Fourth slider 

$('.soon-films .film-row')
.not('.slick-intitalized')
.slick({
    prevArrow: '.soon-films .films .films-btn .prev',
    nextArrow: '.soon-films .films .films-btn .next',
    slidesToShow: 5,
    slidesToScroll: 1
});





// $(document).ready(function(){

//     $('.soon-btn').hover(function(){
//         $('.soon-films-header').addClass('drowpdown-open');
//     });

//     // $('.soon-btn').hover(function(){
//     //     $('.soon-films-header').removeClass('drowpdown-open');
//     // });
    
//     // $(window).scroll(function(){
//     //     var sc = $(window).scrollTop();
//     //     if( sc > 100) {
//     //         $('.nav').addClass('sticky');
//     //     }
//     //     else{
//     //         $('.nav').removeClass('sticky');
//     //     }
//     // });

// });