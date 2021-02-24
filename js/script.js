$(document).ready(function () {
    $(window).scroll(function(){
        if($(this).scrollTop()>100){
            $(".help-travel-img img").css("display","block");
        }
        if($(this).scrollTop()>1200){
            $(".beshow-world-travel img").animate({
                top:'-20px'
            },800)
        }
    });
    $(".show-header-responsive-icon").click(function(){
        $(".shwo-header-responsive").animate({
            right:0
        },700);
        $("body").append('<div class="alpha"></div>');
        $(".alpha").click(function(){
            $(".shwo-header-responsive").animate({
                right:'-100%'
            },700);
            $(".shwo-header-responsive ul li ul").slideUp();
            $(this).remove();
        });
    });
    $(".shwo-header-responsive ul li").click(function(){
        if ($(this).attr("data-show")=="hide") {
            $(".shwo-header-responsive ul li").find('ul').slideUp('normal');
            $(this).find('ul').slideDown('normal');
            $(this).attr("data-show","show");
            $(this).find('i').removeClass("fa-plus-square-o");
            $(this).find('i').addClass("fa-minus-square-o");
        }else{
            $(this).find('ul').slideUp('normal');
            $(this).find('i').addClass("fa-plus-square-o");
            $(this).find('i').removeClass("fa-minus-square-o");
            $(this).attr("data-show","hide");
        }
    });
    var owel =$(".slider-list");
    $(owel).owlCarousel({
        loop:true,
        margin:10,
        rtl:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

    $(".btn-slider.prev").click(function(){
        owel.trigger('prev.owl.carousel');
    });

    $(".btn-slider.next").click(function(){
        owel.trigger('next.owl.carousel');
    });

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
        $(this).find('ul').fadeIn(50);
    },function(){
        $(this).find('ul').fadeOut(50);
    });

    $(".btn-hover-ticket").hover(function(){
        setTimeout(() => {
            $(this).find('span').html("خرید بلیط");
        }, 100);
    },function(){
        setTimeout(() => {
            $(this).find('span').html("میخام بلیط بخرم");
        }, 100);
    });
    $(".topise-tooltip").tipso({
        speed: 400,
        background: '#ffd700',
        color: '#ffffff',
        showArrow: true,
        position: 'top',
        width: 100,
        maxWidth: 300,
        delay: 0,
        offsetX: 0,
        offsetY: -5,
        tooltipHover: false,
    });

});