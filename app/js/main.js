$(function(){
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