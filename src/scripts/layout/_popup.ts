declare var Swiper : any;

function hiddenScroll() {
  var body = <HTMLElement>document.querySelector('body');
  body.classList.add('hiddenScroll');
}

function visibleScroll() {
  var body = <HTMLElement>document.querySelector('body');
  body.classList.remove('hiddenScroll');
}

function swiperPopup(idxKey:any) {
  var popup = new Swiper("#popupImg.active .swiper-popup", {
    slidesPerView: 1,
    spaceBetween: 16,
    navigation: {
      nextEl: "#popupImg.active .swiper-button-next",
      prevEl: "#popupImg.active .swiper-button-prev",
    },
  });

  popup.slideTo(idxKey, false, false);
}

function handlePopup() {
  var imgs = document.querySelectorAll('.members1--wrapper .myStudent .myStudent__slide');
  var idPopup = document.getElementById('popupImg');
  var wrapperPopup = document.querySelector('#popupImg .swiper-popup .swiper-wrapper');

  imgs.forEach(function (item, idxKey) {
    var btn = item.querySelector('img');
    if (btn){
      btn.addEventListener('click', function () {
        btn.classList.add('clicked');
        var wrapperStudent = document.querySelector('#members1 .myStudent .swiper-wrapper');
        if (wrapperPopup && wrapperStudent){
          wrapperPopup.innerHTML = wrapperStudent.innerHTML;
        }

        // var srcImg = btn.getAttribute('src');
        // var imgPopup = idPopup.querySelector('.popupImg-container--ratio');
        // if (imgPopup) {
        //   imgPopup.setAttribute('src', srcImg);
        // }
        
        hiddenScroll();
        idPopup.style.animation = "popupRoom .2s ease-in-out forwards";
        idPopup.classList.add('active');
        swiperPopup(idxKey);
      })
    }
  })
  if (idPopup) {
    var close = <HTMLElement>idPopup.querySelector('.close');
    if (close) {
      close.onclick = function (e) {
        e.preventDefault();
        idPopup.classList.remove('active');
        idPopup.style.display = "block";
        idPopup.style.animation = "popupClose .2s ease-in-out forwards";
        wrapperPopup.innerHTML = "";
        visibleScroll();
      }
    }
  }
}

function handlePopup360deg() {
  var deg = document.getElementById('deg360');
  if (deg) {
    var btn = deg.querySelector('.deg360');
    var idPopup = document.getElementById('popup360deg');
    if (btn && idPopup) {
      btn.addEventListener('click', function () {
        hiddenScroll();
        idPopup.classList.add('active');
        idPopup.style.animation = "popupRoom .2s ease-in-out forwards";
      })

      var close = <HTMLElement>idPopup.querySelector('.close');
      if (close) {
        close.onclick = function (e) {
          e.preventDefault();
          visibleScroll();
          idPopup.classList.remove('active');
          idPopup.style.display = "block";
          idPopup.style.animation = "popupClose .2s ease-in-out forwards";
        }
      }
    }

    if (idPopup) {

    }
  }
}

export const _popup = function () {
  handlePopup();
  handlePopup360deg();

}