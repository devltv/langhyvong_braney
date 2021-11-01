declare var Swiper : any;


// function subbannerPosition(){
//   var banners = document.querySelectorAll('.banner');
//   var header = document.querySelector('header');
//   // var hHeader = header.offsetHeight;
//   var sectionBanner = document.getElementById('bannerSub');

//   var banner = document.getElementById('banner');
//   var classBanner = document.querySelectorAll('.banner');
  
//   var space = document.querySelectorAll('.space-header');

//   window.addEventListener('load', function(){
//     setTimeout(() => {
//       var hHeader = header.offsetHeight;

//       banners.forEach(function(item){
//         if (item.classList.contains('bannersub')){
//           sectionBanner.style.paddingTop = `${hHeader}px`;
//         }
//       })
    
//       space.forEach(function(item){
//         var itemE = <HTMLElement> item;
//         itemE.style.paddingTop = `${hHeader}px`;
//       })
    
    
//       if (banner){
//         banner.style.paddingTop = `${hHeader}px`;
//         if (window.innerWidth > 1336){
//           classBanner.forEach(function(item){
//             var itemE = <HTMLElement> item;
//             itemE.style.paddingTop = `calc(100vh - ${hHeader}px)`;
//           })
//         }
//         else{
//           classBanner.forEach(function(item){
//             var itemE = <HTMLElement> item;
//             itemE.style.paddingTop = ``;
//           })
//         }
//       }
//     }, 600);
    
//   })

//   window.addEventListener('resize', function(e){
//     // resize sub banner
//     setTimeout(function(){
//       var hHeaderResize = header.offsetHeight;
  
//       banners.forEach(function(item){
//         if (item.classList.contains('bannersub')){
//           sectionBanner.style.paddingTop = `${hHeaderResize}px`;
//         }
//       })
//       // resize space header
//       space.forEach(function(item){
//         var itemE = <HTMLElement> item;
//         itemE.style.paddingTop = `${hHeaderResize}px`;
//       })

//       // resize banner
//       if (banner){
//         banner.style.paddingTop = `${hHeaderResize}px`;

//         if (window.innerWidth > 1336){
//           classBanner.forEach(function(item){
//             var itemE = <HTMLElement> item;
//             itemE.style.paddingTop = `calc(100vh - ${hHeaderResize}px)`;
//           })
//         }
//         else{
//           classBanner.forEach(function(item){
//             var itemE = <HTMLElement> item;
//             itemE.style.paddingTop = ``;
//           })
//         }
//       }
//     }, 600);
//   })
// }


window.onresize = displayWindowSize;
window.onload = displayWindowSize;
function displayWindowSize() {
    var myWidth = window.innerWidth;
    if(myWidth){
      setHeightBanner()
    }
    
};

function setHeightBanner(){
    var div = document.querySelector('#banner .banner');
        if(div){
          var getHeightHeader = document.querySelector(".header")
          var navSetWidth = div as HTMLElement
          const headerHeight = getHeightHeader as HTMLElement
          const height = headerHeight.offsetHeight
          // console.log(headerHeight.offsetHeight)
          navSetWidth.style.paddingTop = height +"px"
          // div.forEach(function(element){
          //   var navSetWidth = element as HTMLElement
          //   // navSetWidth.style.height = parentOpen + "px"
          // })
    }
}

export const banner = function(){
  displayWindowSize();
  // setHeightBanner();
}