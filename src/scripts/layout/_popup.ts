function hiddenScroll(){
  var body = <HTMLElement> document.querySelector('body');
  body.style.height = '100vh';
  body.style.overflow = 'hidden';
}

function visibleScroll(){
  var body = <HTMLElement> document.querySelector('body');
  body.style.height = '';
  body.style.overflow = '';
}

function handlePopup(){
  var imgs = document.querySelectorAll('.members1--wrapper .myStudent .myStudent__slide');
  var idPopup = document.getElementById('popupImg');

  imgs.forEach(function(item){
    var btn = item.querySelector('img');
    if (btn){
      btn.addEventListener('click', function(){
        var srcImg = btn.getAttribute('src');
        var imgPopup = idPopup.querySelector('.popupImg-container--ratio');
        imgPopup.setAttribute('src', srcImg);
        hiddenScroll();
        idPopup.classList.add('active');
        idPopup.style.animation = "popupRoom .2s ease-in-out forwards";
      })
    }
  })
  if (idPopup){
    var close = <HTMLElement> idPopup.querySelector('.close');
    if (close){
      close.onclick = function(e){
        e.preventDefault();
        idPopup.classList.remove('active');
        idPopup.style.display = "block";
        idPopup.style.animation = "popupClose .2s ease-in-out forwards";
        visibleScroll();
      }
    }
  }
}

function handlePopup360deg(){
  var deg = document.getElementById('deg360');
  if (deg){
    var btn = deg.querySelector('.deg360');
    var idPopup = document.getElementById('popup360deg');
    if (btn && idPopup){
      btn.addEventListener('click', function(){
        hiddenScroll();
        idPopup.classList.add('active');
        idPopup.style.animation = "popupRoom .2s ease-in-out forwards";
      })

      var close = <HTMLElement> idPopup.querySelector('.close');
      if (close){
        close.onclick = function(e){
          e.preventDefault();
          visibleScroll();
          idPopup.classList.remove('active');
          idPopup.style.display = "block";
          idPopup.style.animation = "popupClose .2s ease-in-out forwards";
        }
      }
    }

    if (idPopup){
      
    }
  }
}

export const _popup = function(){
  handlePopup();
  handlePopup360deg();
}