const menu = ["About", "Jquery Website","JS Website", "Swiper", "Isotope", "Contact"]

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


});

