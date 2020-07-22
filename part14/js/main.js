$(document).ready(function(){
  $('#abul').click(function(){
    $('img').before('<b>Md.Hasan Ali</b>');
  });
  $('#khan').click(function(){
    $('img').after('<b>Md.Hasan Ali</b>')
  });
});