const menu = ["About", "Jquery Website","JS Website", "Swiper", "Isotope", "React Website"]

const swiper = new Swiper("#wrap",{

    loop: true,
    sliderPerView: "auto",
    centeredSlides: true,
    spaceBetween: 50,
    mousewheel: true,

    navigation:{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"

    },
    pagination:{
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
        renderBullet: function(index,className){
            return`<span class="${className}">${menu[index]}</span>`
        }
    },
    // effect :"coverflow",
    // coverflowEffect:{
    //     rotate:50,
    //     stretch: -100,
    //     depth: 400,
    //     slideShadow: false
    // }

});


// (function($){
//     var pathes = $('#port').find('path');
//     pathes.each(function( i, path ) {
//         var total_length = path.getTotalLength(); // 1번 부분
 
//         path.style.strokeDasharray = total_length + " " + total_length; // 2번 부분
//         path.style.strokeDashoffset = total_length; // 3번 부분
 
//         // 4번 부분
//         $(path).animate({
//             "strokeDashoffset" : 0
//         }, 1500);
//     });
//     //}
// })(jQuery);