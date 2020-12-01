$(function(){
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