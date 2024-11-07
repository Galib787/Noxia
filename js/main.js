(function ($) {
    "use strict";

    // data - background
    $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
    });

    /*Counter */
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });

    /* video popup*/
    $('.video-popup').magnificPopup({type:'iframe'});

   /*Animation*/
   new WOW().init();

  //brand slider
  $('.active-brand').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
 

 //profile
$('.autopla').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  dots: true

});

  /*menmenu*/
  jQuery('#mobile-menu').meanmenu({
    meanScreenWidth: "991",
    meanMenuContainer: '.mobile-menu'
  });

})(jQuery);
