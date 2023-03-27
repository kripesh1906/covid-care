$(document).ready(function(){

$('.fa-bars').click(function(){
$(this).toggleclass('fa-times');
$('.nav').toggleclass('nav-toggle');
});

$(window).on('load scroll',function(){

    $('.fa-bars').removeclass('fa-times');
    $('.nav').removeclass('nav-toggle');

    if($(window).scrollTop()> 10){
        $('header').addClass('header-active');
    }else{
        $('header').removeclass('header-active'); 
    }
});


$('.facility').magnificPopup({
delegate:'a',
type:'image',
gallery:{
    enabled:true
}
});

});