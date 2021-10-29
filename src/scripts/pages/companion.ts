declare var Swiper: any;

function companionSwiper() {
  var swiperCompanion3 = document.getElementById('companion3');
  if (swiperCompanion3) {
    var swiper = new Swiper("#companion3 .companion3--swiper", {
      pagination: {
        el: ".companion3--swiper .swiper-pagination",
      },
      slidesPerView: 1,
      spaceBetween: 20,

      navigation: {
        nextEl: ".companion3--swiper .swiper-button-next",
        prevEl: ".companion3--swiper .swiper-button-prev",
      },
      breakpoints: {
        541: {
          slidesPerView: 2,
          spaceBetween: 16
        },
        901: {
          slidesPerView: 3,
          spaceBetween: 16
        }
      }
    });
  }

  var swiperCompanion4 = document.getElementById('companion4');
  if (swiperCompanion4) {
    var swiper = new Swiper("#companion4 .companion4--swiper", {
      pagination: {
        el: ".companion4--swiper .swiper-pagination",
      },
      slidesPerView: 1,
      spaceBetween: 20,

      navigation: {
        nextEl: ".companion4--swiper .swiper-button-next",
        prevEl: ".companion4--swiper .swiper-button-prev",
      },
      breakpoints: {
        541: {
          slidesPerView: 1,
          spaceBetween: 16
        },
        901: {
          slidesPerView: 1,
          spaceBetween: 16
        }
      }
    });
  }
}

export const companion = function () {
  companionSwiper();
}