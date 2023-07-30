$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        nav:true,
        items: 1,
        dots: false,
        pullDrag: false,
        navText: [`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M11.0001 6L7.00012 10L11.0001 14" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </svg>`, `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M8.99988 6L12.9999 10L8.99988 14" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </svg>`],
        dragEndSpeed: 500,
        navSpeed: 500,
    });
});
