$(function(){
  $('.footer-top__title--slide').on('click', function(){
    $(this).next().slideToggle();
    $(this).toggleClass('footer-top__title--slide-active');
  })

  $('.menu__btn').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active');
  })
  
  $('.product-tabs__top-item').on('click', function(e){
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');

  });

  $('.product-slide__thumb').slick({
    asNavFor:'.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
  });

  $('.product-slide__big').slick({
    asNavFor:'.product-slide__thumb',
    draggable: false,
    arrows:false,
    fade:true,
    responsive: [
      {
        breakpoint: 1051,
        settings: {
          draggable: true,
        }
      }
    ]
  });
  
  $('.blog-page__slider').slick({
    prevArrow:'<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="11pt" height="17pt" viewBox="0 0 11 17" version="1.1"><g><path d="M 1.1875 7.9375 L 7.867188 1.484375 C 8.191406 1.171875 8.710938 1.171875 9.035156 1.484375 L 9.8125 2.238281 C 10.136719 2.546875 10.136719 3.050781 9.816406 3.363281 L 4.519531 8.5 L 9.8125 13.636719 C 10.136719 13.949219 10.136719 14.453125 9.8125 14.765625 L 9.035156 15.515625 C 8.710938 15.828125 8.1875 15.828125 7.867188 15.515625 L 1.1875 9.0625 C 0.863281 8.753906 0.863281 8.246094 1.1875 7.9375 Z M 1.1875 7.9375 "/></g></svg></button>',
    nextArrow:'<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg"width="11pt" height="17pt" viewBox="0 0 11 17" version="1.1"><g><path d="M 9.8125 9.0625 L 3.132812 15.515625 C 2.808594 15.828125 2.289062 15.828125 1.964844 15.515625 L 1.1875 14.761719 C 0.863281 14.453125 0.863281 13.949219 1.183594 13.636719 L 6.480469 8.5 L 1.183594 3.363281 C 0.863281 3.050781 0.863281 2.546875 1.1875 2.238281 L 1.964844 1.484375 C 2.289062 1.171875 2.808594 1.171875 3.132812 1.484375 L 9.8125 7.9375 C 10.136719 8.246094 10.136719 8.753906 9.8125 9.0625 Z M 9.8125 9.0625 "/></g></svg></button>',
    infinite:false,
  });

  $('.shop-content__filter-btn').on('click', function(){
    $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
    $(this).addClass('shop-content__filter-btn--active');
  });

  $('.shop-mobil__filter-btn').on('click', function(){
    $('.shop__filters').slideToggle();
  });

  $('.button-list').on('click', function() {
    $('.product-item').addClass('product-item--list');
    $('.shop-content__inner').addClass('shop-content__nogrid');
  });

  $('.button-grid').on('click', function() {
    $('.product-item').removeClass('product-item--list');
    $('.shop-content__inner').removeClass('shop-content__nogrid');
  });

  $('.select-style, .product-detail__numb').styler();

  $('.filter-price__input').ionRangeSlider({
    type:'double',
    prefix:'$',
    onStart: function(data){
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });
  

  $('.top-slider__inner').slick({
    dots:true,
    arrows:false,
    fade:true,
    autoplay:true,
    autoplaySpeed:2000,
  });
  
  $('.star').rateYo({
    starWidth:'17px',
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    readOnly:true,
    starSvg:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="16px" viewBox="0 0 12 12" version="1.1"><g id="surface1"> <path style=" stroke:none;fill-rule:nonzero;fill-opacity:1;" d="M 6 0.292969 L 7.835938 4.078125 L 12 4.652344 L 8.96875 7.566406 L 9.707031 11.707031 L 6 9.722656 L 2.292969 11.707031 L 3.03125 7.566406 L 0 4.652344 L 4.164062 4.078125 Z M 6 0.292969 "/></g></svg>',
  });

  const deadline = $('.promo__clock').attr('data-time');
  initializeClock('promo__clock', deadline);

});

