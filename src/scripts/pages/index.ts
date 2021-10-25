declare var Swiper: any;
// function toggleindex1(){
//   if (document.getElementById('index1')) {
//     var contentTop = document.querySelectorAll(".index-product .content__titleBox--items");
//     var contentBottom = document.querySelectorAll(".index-product__section .content__slide");
//     var active = document.querySelector(".index-product__section .active");
//     active.getElementsByClassName
//     if (!contentBottom) {
//       return;
//     }
//     var itemActive = active.getAttribute('data-active');
//     contentBottom.forEach(function (itemBot) {
//       var itemBotActive = itemBot.getAttribute('data-active');
//       var itemBottEle = <HTMLElement>itemBot;
//       if (itemActive == itemBotActive) {
//         itemBottEle.style.display = "block";
//         swipperIndex1();
//       }else{
//         itemBottEle.style.display = "none";
//       }
//     })

//     contentTop.forEach(function (item) {
//       item.addEventListener('click', function () {
//         var itemActive = item.getAttribute('data-active');

//         contentBottom.forEach(function (itemBot) {
//           var itemBotEle = <HTMLElement>itemBot;
//           itemBotEle.style.display = "none";
//           swipperIndex1();
//         })

//         contentBottom.forEach(function (itemBot) {
//           var itemBottomActive = itemBot.getAttribute('data-active');
//           var itemBotEle = <HTMLElement>itemBot;
//           if (itemActive == itemBottomActive) {
//             itemBotEle.style.display = "block";
//           }

//         })
//         contentTop.forEach(function (e) {
//           e.classList.remove("active");
//         })

//         // them active vao item da click
//         item.classList.add("active");
//       })
//     })

//   }
// }
// function swipperIndex1(){
//   if (document.getElementById('index1')) {
//     console.log("1");
//     new Swiper(".index-product  .index-product--swiper", {
//       slidesPerView: 3,
//       spaceBetween: 8, 
//       // slidesPerGroup: 3,
//       // loop: true,
//       // loopFillGroupWithBlank: true,
//       // pagination: {
//       //   el: " .swiper-pagination",
//       //   // clickable: true,
//       // },
//       navigation: {
//         nextEl: ".index-product .content .swiper-button-next",
//         prevEl: ".index-product .content .swiper-button-prev",
//       },
//       breakpoints: {
//         0: {
//           slidesPerView: 1,
//           spaceBetween: 8,
//         },
//         541: {
//           slidesPerView: 1.5,
//           spaceBetween: 8,
//         },
//         769: {
//           slidesPerView: 2,
//           spaceBetween: 8,
//         },
//         900:{
//           slidesPerView: 2.5,
//           spaceBetween: 8, 
//         },
//         1337:{
//           slidesPerView: 3,
//           spaceBetween: 8, 
//         },
//         1441:{
//           slidesPerView: 3,
//           spaceBetween: 8, 
//         },
//       }
//     });
//   }
// }
// function swipperIndex4(){
//   if (document.getElementById('index4')) {
//     new Swiper(".index-news  .index-news--swiper", {
//       slidesPerView: 3,
//       spaceBetween: 16, 
//       // slidesPerGroup: 3,
//       // loop: true,
//       // loopFillGroupWithBlank: true,
//       // pagination: {
//       //   el: ".index-news .swiper-pagination",
//       //   // clickable: true,
//       // },
//       navigation: {
//         nextEl: ".index-news .swiper-button-next",
//         prevEl: ".index-news .swiper-button-prev",
//       },
//       breakpoints: {
//         0: {
//           slidesPerView: 1,
//           spaceBetween: 8,
//         },
//         541: {
//           slidesPerView: 1.5,
//           spaceBetween: 8,
//         },
//         769: {
//           slidesPerView: 2,
//           spaceBetween: 8,
//         },
//         900:{
//           slidesPerView: 2.5,
//           spaceBetween: 16, 
//         },
//         1337:{
//           slidesPerView: 3,
//           spaceBetween: 16, 
//         },
//         1441:{
//           slidesPerView: 3,
//           spaceBetween: 16, 
//         },
          
        
//       }
      
//     });
//   }
// }



// This code could probably be tidied up, depending on how familiar you are with the game code



// handle click link button
function handleClickButton(){
  var posts  = document.querySelectorAll('#indexPage .post-item');
  posts.forEach(function(item){
    item.addEventListener('click', function(e){
      e.preventDefault();
      console.log('click')
      var btn = <HTMLElement> item.querySelector('.btn--home');
      console.log(btn);
      var hrefBtn = btn.getAttribute('href');
      window.location.assign(hrefBtn);
    })

    item.addEventListener('mouseover', function(){
      if (!item.classList.contains('post--hover')){
        item.classList.add('post--hover');
        item.classList.remove('post--leave');
      }
    })

    item.addEventListener('mouseleave', function(){
      if (item.classList.contains('post--hover')){
        item.classList.add('post--leave');
        item.classList.remove('post--hover');
      }
    })
  })
}
export const index = function(){
  // toggleindex1();
  // swipperIndex4()
  handleClickButton();
}