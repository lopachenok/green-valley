$(document).ready(function () {
  
  $(document).on('click', '.actions-slider__indicator-item', function (e) {
    e.preventDefault();

    $('.actions-slider__indicator-item--active').removeClass('actions-slider__indicator-item--active');
    $(this).addClass('actions-slider__indicator-item--active');

    var slideId = $(this).attr('data-slide');

    $('.actions-slider__item--active').removeClass('actions-slider__item--active');
    $('#' + slideId).addClass('actions-slider__item--active');

    
  })

  
})