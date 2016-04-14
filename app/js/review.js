
$(document).ready(function(){
  
  $('.review-slider__control--right').click(function(){
    slideRight();      
  })
  
  $('.review-slider__control--left').click(function(){
    slideLeft();      
  })
  
  function slideRight(){
   
    var next = $('.review-slider__item--active').next();       
    if(next.length == 0){
      next = $('.review-slider__item:first');
    }
    
    var prev = $('.review-slider__item--active').prev();
    if(prev.length == 0){
      prev = $('.review-slider__item:last');
    }    
        
    
    
    $('.review-slider__item--active').addClass('active-left').removeClass('review-slider__item--active left right');  
    next.removeClass('active-right').addClass('left review-slider__item--active');
    prev.removeClass('active-left');   
  }
  
  function slideLeft(){
    var next = $('.review-slider__item--active').prev();       
    if(next.length == 0){
      next = $('.review-slider__item:last');
    }
    
    var prev = $('.review-slider__item--active').next();
    if(prev.length == 0){
      prev = $('.review-slider__item:first');
    }    
        
    $('.review-slider__item--active').addClass('active-right').removeClass('review-slider__item--active right left');  
    next.removeClass('active-left').addClass('right review-slider__item--active');
    prev.removeClass('active-right');  
  }
  
  
  $(document).on('click', '#show-all', function(){
    $('.review-slider__inner').toggleClass('review-slider__inner--show-all');
    $('.review-slider__item').toggleClass('review-slider__item--show-all');
    $('.review-slider__control').toggleClass('review-slider__control--show-all')
  })
})