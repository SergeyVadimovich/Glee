(function ($) {
  $.fn.initFiltration = function (option) {
    
      const self = this;
      const categories = $(self).find('.category');
      $(categories).each(function(index, category) {
        $(category).hide();
      });

      // Click function
      $(self)
        .find('.filter')
        .click(function(e) {
          e.preventDefault();
          // Get data of category
          const customType = $(this).data('filter'); // category

          categories
              .hide()
              .filter(function () {
                  return $(this).data('category') === customType;
              })
              .show(50);
      });

      // All
      $(self)
        .find('[data-filter="showAll"]')
        .click(function(e) {
          e.preventDefault();
          $(categories).each(function(index, category) {
            $(category).show(50);
          })
        })
        .addClass("active")
        .click();


      // color toggle
      $(self)
        .find('.filter')
        .click(function() {
          $(this)
            .toggleClass("active")
            .siblings()
            .removeClass("active");
        });

  };
})(jQuery);