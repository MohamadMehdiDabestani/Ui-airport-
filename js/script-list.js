$(document).ready(function () {
    $(".search-box-header span i").click(function(){
        if ($(".search-box-header form input").attr("data-state")=="hide") {
            $(".search-box-header form input").css("width","80%");
            $(".search-box-header form input").attr("data-state","show");
            $(this).removeClass("fa-search");
            $(this).addClass("fa-times");
        }else{
            $(".search-box-header form input").css("width","0");
            $(".search-box-header form input").attr("data-state","hide");
            $(this).addClass("fa-search");
            $(this).removeClass("fa-times");
        }
    });
    $(".header ul li").hover(function(){
        $(this).find('ul').fadeIn();
    },function(){
        $(this).find('ul').fadeOut();
    });

    $(".show-header-responsive-icon i").click(function(){
        $(".show-header-responsive").animate({top : "0"});
        $(".show-header-responsive").animate({height : "100%"});
    });
    $(".show-header-responsive ul li").click(function(){
        if ($(this).attr("data-show")=="hide") {
            $(".show-header-responsive ul li").find('ul').slideUp();
            $(this).find('ul').slideDown();
            $(this).attr("data-show","show");
            $(this).find('i').removeClass("fa-plus-circle");
            $(this).find('i').addClass("fa-minus-circle");
        }else{
            $(this).find('ul').slideUp();
            $(this).attr("data-show","hide");
            $(this).find('i').addClass("fa-plus-circle");
            $(this).find('i').removeClass("fa-minus-circle");
        }
    });

    $("#colse-header").click(function(){
        $(".show-header-responsive").animate({height:"0"},700);
        $(".show-header-responsive").animate({top:"-20%"});
        $(".show-header-responsive ul li").find('ul').slideUp();
    });

});