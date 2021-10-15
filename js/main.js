$(function(){
  
  $('.menu__btn').on('click', function(){
    $('.menu__btn').toggleClass('menu__btn--active');
    $('.menu__list').toggleClass('menu__list--active');
  });

  $('.menu__list-link').on('click', function(){
    $('.menu__btn').removeClass('menu__btn--active');
    $('.menu__list').removeClass('menu__list--active');
  });

  $(' .about-slider').slick({
    // fade: true,
    slidesToShow: 1,
    slidesToScroll:1,
    // autoplay: true,

    // responsive: [
    //   {
    //     breakpoint: 1141,
    //     settings: {
    //       slidesToShow: 3,
    //     }
    //   },
    //   {
    //     breakpoint: 846,
    //     settings: {
    //       slidesToShow: 2,
    //     }
    //   },
    //   {
    //     breakpoint: 585,
    //     settings: {
    //       slidesToShow: 1,
    //     }
    //   },
    // ],
    prevArrow: '<svg class="slider-btn slider-btn__left" width="47" height="82" viewBox="0 0 47 82" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44 3L6 41L44 79" stroke="white" stroke-width="8"/></svg>',
    nextArrow: '<svg class="slider-btn slider-btn__right" width="47" height="82" viewBox="0 0 47 82" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 3L41 41L3 79" stroke="white" stroke-width="8"/></svg>',

  });
})