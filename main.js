$('.fondo-3').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrows:false,
    autoplay:false,
    pauseOnFocus:false,
    pauseOnHover:false,
    fade:true,
    draggable:false,
    autoplay: true,
    autoplaySpeed:4000,
    dots:false,
  });

  $('.somos-img').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnFocus:false,
    pauseOnHover:false,

    responsive: [
        {
          breakpoint: 950,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  });

  $('.tips-img').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrows:false,
    autoplay:false,
    pauseOnFocus:false,
    pauseOnHover:false,
    fade:true,
    draggable:false,
    autoplay: true,
    autoplaySpeed:4000,
    dots:false,
  });