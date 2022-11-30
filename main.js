$(document).ready(function(){
    $(".creator_slider_area").owlCarousel({
        autoplay: true,
        slideSpeed: 5000,
        items: 3,
        loop: true,
        margin: 30,
        dots: false,
        responsive: {
            320: {
                items:1
            },
            767: {
                items:2
            },
            600: {
                items:3,
            },
            1000: {
                items:3
            }
        }
    });
  });
