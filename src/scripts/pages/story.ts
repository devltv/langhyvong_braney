declare var Swiper : any;

function myPerson (){
    const storyPage = document.getElementById("story-2")
    if(storyPage){
        var swiper = new Swiper(".MyPerson", {
            pagination: {
              el: ".swiper-pagination",
            },
            slidesPerView: 1,
            spaceBetween: 20,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
            breakpoints: {
                481: {
                    slidesPerView: 2,
                    spaceBetween: 16
                },
                769: {
                    slidesPerView: 3,
                    spaceBetween: 16
                }
            }
        });
    }
    
}

export const story = function(){
    myPerson();
}