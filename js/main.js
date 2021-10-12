$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        },
        1400:{
            items:7
        }
    }
})

$('#mobile-button').on( "click", function() {
    $(this).toggleClass("active");
    $('header .menu').toggleClass("active");
});
