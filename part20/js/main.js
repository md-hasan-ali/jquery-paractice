$(document).ready(function(){
  $('span').parentsUntil('ul').css({
    "color" : "green",
    "border" : "5px solid red"
  })
})