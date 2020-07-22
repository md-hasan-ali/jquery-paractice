$(document).ready(function(){
    $("#hide").click(function(){
        $("p").hide(3000);
    });

    $("#show").click(function(){
        $("p").show(3000);
    });
    
    $('button').click(function(){
        $('p').toggle(3000);
    })
});

