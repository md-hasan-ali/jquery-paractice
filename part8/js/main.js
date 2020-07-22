$(document).ready(function(){
    $('button').click(function(){
        var hasan = $('box');
        hasan.animate({left:"300px"},"fast");
        hasan.animate({width:"300px"},"fast");
        hasan.animate({fontSize:"60px"},"fast");
    });
});

$(document).ready(function(){
    $('button').click(function(){
      var hasan = $('.box');
      hasan.animate({height:"300px",opacity:"0.4"},'slow');
      hasan.animate({width:"300px",opacity:"0.4"},'slow');
      hasan.animate({height:"100px",opacity:"0.5"},"slow");
      hasan.animate({width:"100px",opacity:"1"},"slow");
  
    });
  });
