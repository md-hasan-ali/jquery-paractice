$(document).ready(function(){
  $('.hasan').click(function(){
    $('.lorem').slideToggle(2000);
  })

  $('button').click(function(){
    $(".lorem").stop();
  })
})

