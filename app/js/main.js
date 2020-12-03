$(function(){
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
  });

  $('.slider__inner').slick({
    arrows:false,
    dots:true,
    fade:true,
    autoplay:true,
    autoplaySpeed:2000,
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