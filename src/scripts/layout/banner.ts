declare var Swiper : any;

function swiperBanner(){
  if (document.getElementById('banner')){
    var swiper = new Swiper("#banner .banner-swiper", {
      // direction: "vertical",
      loop: true,
      autoplay: {
        delay: 4000
      },
      speed: 2000,
      pagination: {
        el: "#banner .banner-swiper .swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      
    });
    // new Swiper('#banner .banner-swiper', {
    //   loop: true,

    //   // autoplay: {
    //   //   delay: 3000,
    //   //   disableOnInteraction: false,
    //   // },

    //   pagination: {
    //     el: ".banner .swiper-pagination",
    //     clickable: true,
    //   },
    // })
  }
}

function subbannerPosition(){
  var banners = document.querySelectorAll('.banner');
  var header = document.querySelector('header');
  // var hHeader = header.offsetHeight;
  var sectionBanner = document.getElementById('bannerSub');

  var banner = document.getElementById('banner');
  var classBanner = document.querySelectorAll('.banner');
  
  var space = document.querySelectorAll('.space-header');

  window.addEventListener('load', function(){
    setTimeout(() => {
      var hHeader = header.offsetHeight;

      banners.forEach(function(item){
        if (item.classList.contains('bannersub')){
          sectionBanner.style.paddingTop = `${hHeader}px`;
        }
      })
    
      space.forEach(function(item){
        var itemE = <HTMLElement> item;
        itemE.style.paddingTop = `${hHeader}px`;
      })
    
    
      if (banner){
        banner.style.paddingTop = `${hHeader}px`;
        if (window.innerWidth > 1336){
          classBanner.forEach(function(item){
            var itemE = <HTMLElement> item;
            itemE.style.paddingTop = `calc(100vh - ${hHeader}px)`;
          })
        }
        else{
          classBanner.forEach(function(item){
            var itemE = <HTMLElement> item;
            itemE.style.paddingTop = ``;
          })
        }
      }
    }, 600);
    
  })

  window.addEventListener('resize', function(e){
    // resize sub banner
    setTimeout(function(){
      var hHeaderResize = header.offsetHeight;
  
      banners.forEach(function(item){
        if (item.classList.contains('bannersub')){
          sectionBanner.style.paddingTop = `${hHeaderResize}px`;
        }
      })
      // resize space header
      space.forEach(function(item){
        var itemE = <HTMLElement> item;
        itemE.style.paddingTop = `${hHeaderResize}px`;
      })

      // resize banner
      if (banner){
        banner.style.paddingTop = `${hHeaderResize}px`;

        if (window.innerWidth > 1336){
          classBanner.forEach(function(item){
            var itemE = <HTMLElement> item;
            itemE.style.paddingTop = `calc(100vh - ${hHeaderResize}px)`;
          })
        }
        else{
          classBanner.forEach(function(item){
            var itemE = <HTMLElement> item;
            itemE.style.paddingTop = ``;
          })
        }
      }
    }, 600);
  })
}
export const banner = function(){
  swiperBanner();
  subbannerPosition();
}