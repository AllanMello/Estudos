$(function(){
    //Abre e fecha Menu 
    $('.nav-toggle, .nav-close').click(function(e){
        e.preventDefault();
        $('.nav').toggleClass('active');
    }
    );
    //fixar Header 
    $(window).scroll(function(){
        if($(this).scrollTop() >100){
            $('.header').addClass('fixed');
        }else{
            $('.header').removeClass('fixed');

        }
    });
})