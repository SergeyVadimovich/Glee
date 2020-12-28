$(function(){

    $('.product-list__item-btn').on('click', function(event){
      const targetBtn = event.target;
      const product = $(targetBtn).closest('.product-list__item');
      $(product).addClass('product-list__item--added');
    });
    
    $('.filter-poppup__btn').on('click', function(event){
      const filterBtn = event.target;
      const filterLabel = $(filterBtn).closest('.filter-poppup__label');
      const targetSlide = $(filterLabel).siblings('.filter-poppup__form');
      $(targetSlide).slideToggle();
    });

    $('.product-tabs__top-item').on('click', function(e){
      e.preventDefault();
      $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
      $(this).addClass('product-tabs__top-item--active');
      $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
      $($(this).attr('href')).addClass('product-tabs__content-item--active');
    });
    
    
  $('.slider__inner').slick({
    arrows:false,
    dots:true,
    fade:true,
    autoplay:true,
    autoplaySpeed:2000,
    });

  $('.product-slider__item-thumb').slick({
    asNavFor:'.product-slider__item-big',
    slidesToShow:3,
    slidesToScroll:1,
    draggable:false,
    vertical:true,
    focusOnSelect:true,
  });


  $('.product-slider__item-big').slick({
    asNavFor:'.product-slider__item-thumb',
    draggable:false,
    arrows:false,
    fade: true,
  });
  
  $('.related-product__items').slick({
    slidesToShow:4,
    slidesToScroll:1,
    infinite:false,
    prevArrow:'<button type="button" class="slick-prev"></button>',
    nextArrow:'<button type="button" class="slick-next"></button>',
  });

  $('.product-detail__content-numb').styler();

  $('.filter-price__slider').ionRangeSlider({
    type:"double",
    prefix: "$",
    step:"0.01",
    onChange: function (data){
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onStart: function (data){
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },

  });

  $('.star').rateYo({
    starWidth:"10px",
    starHeigth:"10px",
    readOnly:"true",
    spacing:"5px",
    starSvg:'<svg xmlns="http://www.w3.org/2000/svg" width="12px" height="12px" viewBox="0 0 12 12" version="1.1"><g><path style=" stroke:none;fill-rule:nonzero;fill:#ccc;fill-opacity:1;" d="M 6 0.292969 L 7.835938 4.078125 L 12 4.652344 L 8.96875 7.566406 L 9.707031 11.707031 L 6 9.722656 L 2.292969 11.707031 L 3.03125 7.566406 L 0 4.652344 L 4.164062 4.078125 Z M 6 0.292969 "/></g></svg>'
  });

});

(function() {
  const filtrations = $('[data-type="filtration"]');
  
  if (filtrations) {
    filtrations.each(function(index, filtration) {
      $(filtration).initFiltration({});
    })
  } 
})()

// design-filter
// id="product-filter"