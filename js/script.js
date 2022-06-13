$(document).ready(function(){
    let modal_close = $('.modal-close');
    let modal = $('.modal');
    modal_close.click(function(){
        modal.hide();
    });
    });
window.onload=function(){
    let good_visual =new Swiper('.good-visual', {
        loop:false,
        slidesPerView:3,
        slidesPerGroup: 3,
        spaceBetween : 50,
        speed: 1000,
        autoplay:{
            delay:2500,
            disableInteraction:false,
        },
        navigation:{
            nextEl:".good-next",
            prevEl:".good-prev"
        }
    })
       
    
};