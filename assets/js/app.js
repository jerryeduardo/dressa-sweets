$('.nav-link, .home-scrolltop').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

$('.nav-link').on('click', function(event){
    var target = $(this.getAttribute('href'));
    if(target.length){
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top - $('.navbar').height()
        }, 800);
    }
});

$(function(){
    $(".home-scrolltop").click(function(event){
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 800);
    });
});
