declare var Swiper : any;

function MyStudent (){
    const memberPage = document.getElementById("members1")
    if(memberPage){
        
        var swiper_thumb = new Swiper(".myStudent-thumb", {
            
            slidesPerView: 3,
            spaceBetween: 16,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            breakpoints: {
             
              769: {
                  slidesPerView: 4,
                  spaceBetween: 16
              }
          }
        });
        var swiper = new Swiper(".myStudent", {
          autoHeight: true,
          slidesPerView: 1,
          spaceBetween: 20,
          thumbs: {
            swiper: swiper_thumb,
          },
      });
    }
    
}

export const student = function(){
    MyStudent();
}