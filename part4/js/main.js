$(document).ready(function(){
    $("h2").on({
        mouseenter:function(){
            $(this).css("background","blue");
        },
        mouseleave:function(){
            $(this).css("background","green");
        },
        click:function(){
            $(this).css("background","yellow")
        }
    })
});

