// popup settings


function show_call_popup()
{
  $(".call-overlay").fadeIn(200);
  $("body, html").css("overflow-y", "hidden");
}

function show_thanks_popup()
{
  $(".thanks-overlay").fadeIn(200);
  $("body, html").css("overflow-y", "hidden");
}

function close_popup()
{
  $('.overlay').fadeOut(200);
  $("body, html").css("overflow-y", "");
}


$(".open_call_popup").on("click", function(e) {
  e.preventDefault();
  show_call_popup();
});


$(".popup__close").on("click", function() {
  close_popup();
});


$(document).mouseup(function (event) {
  if ($(".popup").is(":visible")) {
      var popup = $(".popup");
      if (!popup.is(event.target) && popup.has(event.target).length === 0) {
          close_popup();
      }
  }
});

document.addEventListener('touchmove', function (){
  var scrollTop = window.pageYOffset;
}, false);


// ready
$(document).ready(function() {

  $("form").on("submit", function(e) {
    e.preventDefault();
    $(this).trigger("reset");
    close_popup();
    show_thanks_popup();

    setTimeout(function(){
      close_popup();
    }, 5000);
  });

  // iframe lazy loading

  setTimeout(function(){
      let iframe = $("iframe"),
      iframeUrl = iframe.attr("data-src");
      iframe.attr("src", iframeUrl);
  }, 2000);
  
  // lazy scroll to section

  $('a[href*="#"]').click(function() {
    var target = $(this.hash);
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      $(".mobileMenu-overlay").removeClass("open");
      return false;
    }

    // $(".mobileMenu-overlay").removeClass("open");
  });

  // burger

  $(".open-menu-js").on("click", function() {
    $(".mobileMenu-overlay").addClass("open");
  });
  
  // burger close

  $(".mobileMenu__close").on("click", function() {
    $(".mobileMenu-overlay").removeClass("open");
  });

  // work process accordion
  $(".process__item-top-js").on("click", function() {

    let 
      that = $(this),
      submenu = $(".process__item-dropdown"),
      that_submenu = that.siblings(submenu),
      arrow = $(".process__item-arrow")
      that_arrow = that.find(arrow);

    console.log(that_arrow);

    if ( that_submenu.is(":visible") ) {

      submenu.slideUp(300)
      arrow.removeClass("active");

    } else {

      submenu.slideUp(300)
      that_submenu.slideDown(300);
      arrow.removeClass("active");
      that_arrow.addClass("active");
    }

  });

  // current slide counter

$(".services__slider, .installs__slider, .ourWorks__slider").on('afterChange', function (event, slick, currentSlide) {
  $(this).closest("section")
  .find(".slider__dots-current")
  .text(currentSlide<9?`0${currentSlide+1}`:currentSlide+1);
});


  // banner slider

    $('.installs__slider').not('.slick-initialized').slick({
      dots: true,
      arrows: true,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 300,
      fade: true,
			cssEase: 'linear',
      appendDots: $(".installs__dots"),
      prevArrow: $(".installs__arrow-prev"),
      nextArrow: $(".installs__arrow-next")
    }); 

    
    if( $(".slick-slider").length ) {
      $(".slick-slider").each(function( index, item ) {
  
        var slideLength = $(item).find(".slick-slide").length;
        var thatParrent = $(item).closest("section");

        thatParrent.find(".slider__dots-quantity").text("0" + slideLength);

      });
    }

    if( $(".services__dots").length ) {
        var servicesDotsLength = $(".services__dots button").length;
        $(".services__dots-quantity").text("0" + servicesDotsLength);
    }
    

});

// resize

$(window).on("load resize", function() {

  if( $(window).width() <= 991 ) {
    // $('.services__slider').slick('unslick');
  } else {
    $('.services__slider').not('.slick-initialized').slick({
      dots: true,
      arrows: true,
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      speed: 300,
      appendDots: $(".services__dots"),
      prevArrow: $(".services__arrow-prev"),
      nextArrow: $(".services__arrow-next"),
      // appendArrows: $(".services__arrows"),
      responsive: [
        {
          breakpoint: 1199.98,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 990.98,
          settings: "unslick",
        }
      ]
    }); 

    if( $(".slick-slider").length ) {
      $(".slick-slider").each(function( index, item ) {
  
        var slideLength = $(item).find(".slick-slide").length;
        var thatParrent = $(item).closest("section");

        thatParrent.find(".slider__dots-quantity").text("0" + slideLength);

      });
    }

    if( $(".services__dots").length ) {
        var servicesDotsLength = $(".services__dots button").length;
        $(".services__dots-quantity").text("0" + servicesDotsLength);
    }

  }

  if( $(window).width() <= 767 ) {
    // $('.ourWorks__slider').slick('unslick');

    $('.ourWorks__slider-mob').not('.slick-initialized').slick({
      dots: false,
      arrows: true,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
			cssEase: 'linear',
      speed: 300,
      prevArrow: $(".ourWorks__arrows-mob .ourWorks__arrow-prev"),
      nextArrow: $(".ourWorks__arrows-mob .ourWorks__arrow-next"),
      responsive: [
        {
          breakpoint: 2500,
          settings: "unslick",
        },
        {
          breakpoint: 767.98,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    }); 

  } else {
    $('.ourWorks__slider').not('.slick-initialized').slick({
      dots: true,
      arrows: true,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
			cssEase: 'linear',
      speed: 300,
      appendDots: $(".ourWorks__dots"),
      prevArrow: $(".ourWorks__arrows .ourWorks__arrow-prev"),
      nextArrow: $(".ourWorks__arrows .ourWorks__arrow-next"),
      responsive: [
        {
          breakpoint: 2500,
        },
        {
          breakpoint: 767.98,
          settings: "unslick",
        }
      ]
    }); 

    if( $(".slick-slider").length ) {
      $(".slick-slider").each(function( index, item ) {
  
        var slideLength = $(item).find(".slick-slide").length;
        var thatParrent = $(item).closest("section");

        thatParrent.find(".slider__dots-quantity").text("0" + slideLength);

      });
    }

    if( $(".services__dots").length ) {
        var servicesDotsLength = $(".services__dots button").length;
        $(".services__dots-quantity").text("0" + servicesDotsLength);
    }
  }

});