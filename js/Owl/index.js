$(window).scroll(function() { 
    var scroll = $(window).scrollTop();
 
    if (scroll > 200) {
        $('header .containers').addClass('cabecalho');
    } else {
        $('header .containers').removeClass('cabecalho');
    }
});