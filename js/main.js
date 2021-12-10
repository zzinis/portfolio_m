const menu = ["About", "Website", "Swiper", "Isotope"]

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
