$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        nav:true,
        items: 1,
        dots: false,
        pullDrag: false,
        navText: [`<img src="img/swiper_prev-btn.svg" alt="Swiper button">`, `<img src="img/swiper_prev-btn.svg" alt="Swiper button">`],
        dragEndSpeed: 500,
        navSpeed: 500,
    });
});
