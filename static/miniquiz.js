$(document).ready(function(){
    $(".MQ1").click(function(){
        if ( $( this ).hasClass("correct" )){
            $(this).css('background-color','green');
        }
        else{
            $(this).css('background-color','red');
            $("#MQ-1A").css('background-color','green');
        }
        $.each($(".MQ1"), function(index, value){
            $(this).prop('disabled', true);
        })
    })
    $(".MQ2").click(function(){
        if ( $( this ).hasClass("correct" )){
            $(this).css('background-color','green');
        }
        else{
            $(this).css('background-color','red');
            $("#MQ-2C").css('background-color','green');
        }
        $.each($(".MQ2"), function(index, value){
            $(this).prop('disabled', true);
        })
    })
    $(".MQ3").click(function(){
        if ( $( this ).hasClass("correct" )){
            $(this).css('background-color','green');
        }
        else{
            $(this).css('background-color','red');
            $("#MQ-3D").css('background-color','green');
        }
        $.each($(".MQ3"), function(index, value){
            $(this).prop('disabled', true);
        })
    })
    $(".MQ4").click(function(){
        if ( $( this ).hasClass("correct" )){
            $(this).css('background-color','green');
        }
        else{
            $(this).css('background-color','red');
            $("#MQ-4C").css('background-color','green');
        }
        $.each($(".MQ4"), function(index, value){
            $(this).prop('disabled', true);
        })
    })
    $("#restartMQ").click(function(){
        window.location.replace("/background-quiz")
    })
    $("#returnbg").click(function(){
        window.location.replace("/background")
    })
    $("#learnchords").click(function(){
        window.location.replace("/learn")
    })
});
