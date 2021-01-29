$(document).ready(function(){
    
    $('#ini').click(function(){
        $('.inicio').fadeIn(1000);
        $('.inicio').css("display","flex");
        $('.historia').css("display","none");
        $('.tropas').css("display","none");
        $('.titan').css("display","none");
        $('#backvideo').css("display","flex");
        $('.sobre').css("display","none");
    });
    
    $('#his').click(function(){
        $('.historia').fadeIn(1000);
        $('.historia').css("display","flex");
        $('.inicio').css("display","none");
        $('.tropas').css("display","none");
        $('.titan').css("display","none");
        $('#backvideo').css("display","none");
        $('.sobre').css("display","none");
    });

    $('#trop').click(function(){
        $('.tropas').fadeIn(1000);
        $('.tropas').css("display","flex");
        $('.inicio').css("display","none");
        $('.historia').css("display","none");
        $('.titan').css("display","none");
        $('#backvideo').css("display","none");
        $('.sobre').css("display","none");
    });

    $('#tita').click(function(){
        $('.titan').fadeIn(1000);
        $('.titan').css("display","flex");
        $('.inicio').css("display","none");
        $('.historia').css("display","none");
        $('.tropas').css("display","none");
        $('#backvideo').css("display","none");
        $('.sobre').css("display","none");
        $('.sobre li').css("display","none");
    });

    /*$('.titan ul').find("li").click(function(){
        let id = ($(this).attr("id"));
        $(".sobre #"+ id).css("display","flex");
        $('.sobre').css("display","flex");
        $('.titan').css("display","none");
    });*/

    $('#btn').mouseenter(function(){
        $('#btn p').text("TATAKAE!");
    });
    $('#btn').mouseleave(function(){
        $('#btn p').text("COMEÇAR A ASSISTIR");
    });

});