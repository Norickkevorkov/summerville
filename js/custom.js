;$(window).load(function (){
   $('.gallery_box').masonry({
      itemSelector: '.grid-item'
   });
   $('.gallery_box2').masonry({
      itemSelector: '.grid-item2'
   });
   $('.header_bg').height($(window).height());
});
$(window).resize(function () {
   $('.gallery_box').masonry({
      itemSelector: '.grid-item'
   });
   $('.gallery_box2').masonry({
      itemSelector: '.grid-item2'
   });
   $('.header_bg').height($(window).height());
});
$(document).ready(function (){
   $('.gallery').enllax();

   $('.gallery_box').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
         enabled: true,
         navigateByImgClick: true,
         preload: [0,1] // Will preload 0 - before current, and 1 after the current image
      },
      image: {
         tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
         titleSrc: function(item) {
            return '<small>I Like Trip</small>';
         }
      }
   });
   $('.gallery_box2').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
         enabled: true,
         navigateByImgClick: true,
         preload: [0,1] // Will preload 0 - before current, and 1 after the current image
      },
      image: {
         tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
         titleSrc: function(item) {
            return '<small>I Like Trip</small>';
         }
      }
   });
});