$('.nav-link').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

$('.nav-link').on('click', function(event){
    var target = $(this.getAttribute('href'));
    if(target.length){
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top - $('.navbar').height()
        }, 1000);
    }
});