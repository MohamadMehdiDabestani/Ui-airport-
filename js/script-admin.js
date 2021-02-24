$(document).ready(function () {
    $(".edite-profile-link").tipso({
        speed: 400,        
        background: '#ffd700',
        color: '#ffffff',
        showArrow: true,
        position: 'top',
        width: 200,
        maxWidth: 450,
        delay: 0,
        offsetX: 0,
        offsetY: -17,
        tooltipHover: false,
    });
    $(".openmodal").click(function(){
        $("#modal").modal();
    });
    $(".open-respone").click(function () { 
        $(".responsi").slideToggle();
        
    });
});
