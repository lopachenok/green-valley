$(document).ready(function () {
  

  $(document).on('click', '.promo-slider__tabs-item a', function (e) {
    e.preventDefault();

    $('.promo-slider__tabs-item--active').removeClass('promo-slider__tabs-item--active');
    $(this).parent().addClass('promo-slider__tabs-item--active');

    var slideId = $(this).attr('href');

    $('.img-slider__item--active').removeClass('img-slider__item--active');
    $('#' + slideId).addClass('img-slider__item--active');

    $('.service-slider__item--active').removeClass('service-slider__item--active');
    $('#service-' + slideId).addClass('service-slider__item--active');
  })

  
})