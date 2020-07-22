$(document).ready(function(){
  $('#btn1').click(function(){
    $('#lorem1').text('Md Hasan Ali');
  });

  $('#btn2').click(function(){
    $('#lorem2').html('<h2>Hasan Ali</h2>')
  })

  $('#btn3').click(function(){
    $('#lorem3').val("enter your last name:");
  })
});

$(document).ready(function(){
  $('button').click(function(){
    $('#google').attr('href','https//www.youtube.com');
  });
});