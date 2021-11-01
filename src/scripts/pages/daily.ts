declare var Swiper : any;

function myPerson (){
    const storyPage_1 = document.getElementById("daily-1")
    const storyPage_2 = document.getElementById("daily-2")
    const storyPage_3 = document.getElementById("daily-3")
    if(storyPage_1){
        var swiper = new Swiper(".myDaily-1", {
            slidesPerView: 1,
            spaceBetween: 20,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
            
        });
    }
    if(storyPage_2){
        var swiper = new Swiper(".myDaily-2", {
            autoplay: {
                delay: 2000,
                // disableOnInteraction: false,
            },
            speed: 2000,
            slidesPerView: 6,
            spaceBetween: 10,
            
        });
    }
    if(storyPage_3){
        var swiper = new Swiper(".myDaily-3", {
            
            slidesPerView: 2,
            spaceBetween: 10,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
        });
    }
    
}

export const daily = function(){
    myPerson();
}