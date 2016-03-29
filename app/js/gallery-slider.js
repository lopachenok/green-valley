$(document).ready(function(){
  
  /*$(document).on('click', '.main-slider__control--right', function(e){
    e.preventDefault();
    clearInterval(slideLoop);
    slideRight(); 
  })
  
  $(document).on('click', '.main-slider__control--left', function(e){
    e.preventDefault();
    clearInterval(slideLoop);
    slideLeft();    
  })*/
  $('.gallery__slider').swipeleft(function(){
    slideRight();      
  })
  
  $('.gallery__slider').swiperight(function(){
    slideLeft();      
  })
  
  function slideRight(){
   
    var next = $('.gallery__slider-item--active').next();       
    if(next.length == 0){
      next = $('.gallery__slider-item:first');
    }
    
    var prev = $('.gallery__slider-item--active').prev();
    if(prev.length == 0){
      prev = $('.gallery__slider-item:last');
    }    
        
    
    
    $('.gallery__slider-item--active').addClass('active-left').removeClass('gallery__slider-item--active left right');  
    next.removeClass('active-right').addClass('left gallery__slider-item--active');
    prev.removeClass('active-left');   
  }
  
  function slideLeft(){
    var next = $('.gallery__slider-item--active').prev();       
    if(next.length == 0){
      next = $('.gallery__slider-item:last');
    }
    
    var prev = $('.gallery__slider-item--active').next();
    if(prev.length == 0){
      prev = $('.gallery__slider-item:first');
    }    
        
    $('.gallery__slider-item--active').addClass('active-right').removeClass('gallery__slider-item--active right left');  
    next.removeClass('active-left').addClass('right gallery__slider-item--active');
    prev.removeClass('active-right');  
  }
  
  /*var slideLoop = setInterval(function(){
    slideRight()
  }, 5000)*/
  
  
  
 
  
})