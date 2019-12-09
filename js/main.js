(function($){

  $(function(){
      $("#primary-nav").sticky({});
      $('.dropdown-toggle').dropdown();
      $(document).on("click", '[data-toggle="lightbox"]', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox();
      });
  })
})(jQuery);
