$(document).ready( function() {

'use strict'; $(window).on("load",function() {
  $(window).scroll(function() {
    $(".fade").each(function() {
      
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      var windowBottom = $(window).scrollTop() + $(window).innerHeight();
      
      
      if (objectBottom < windowBottom) { 
        if ($(this).css("opacity")==0) {$(this).fadeTo(3000,1);}
      } else { 
        if ($(this).css("opacity")==1) {$(this).fadeTo(400,0);}
      }
    });
  }); $(window).scroll(); 
});

});