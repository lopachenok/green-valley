$(document).ready(function(){
  
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
  
  /*$(document).on('click', '.gallery__thumb-item', function(){    
    var index = $(this).index();
    var centerIndex = $('.gallery__thumb-item--active').index();
    console.log(centerIndex);
    $('.gallery__thumb-item--active').removeClass('gallery__thumb-item--active');
    $(this).addClass('gallery__thumb-item--active');
    
    if(index < centerIndex){
      var offset = (100*(centerIndex - index))-50;
      $('.gallery__thumb-item').css('transform', 'translateX('+offset+'%)');
      console.log(offset)
    }else if(index > centerIndex){
      var offset = (100*(index - centerIndex))+50;
      $('.gallery__thumb-item').css('transform', 'translateX(-'+offset+'%)');
    }
    
  })*/
  
 
  
})