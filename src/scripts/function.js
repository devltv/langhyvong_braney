function runNumberAbout() {
  var page = document.getElementById('aboutPage');
  if (page) {
    $(window).on('scroll', function (e) {
      function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      }
      if ($(window).scrollTop() >= ($(".about-3 .info-item__number").offset().top - ($(window).height()))) {
        if (!$(".about-3 .info-item__number").hasClass("animated")) {
          $('.about-3 .info-item__number span').each(function () {
            $(this).prop('Counter', 0).animate({
              Counter: $(this).text()
            }, {
              duration: 4000,
              easing: 'swing',
              step: function (now) {
                let num = Math.ceil(now);
                if (num < 10) {
                  num = "0" + num;
                }

                $(this).text(numberWithCommas(num));
              }
            });
          });
          // $("#triggered").addClass("show");
          $(".about-3 .info-item__number").addClass("animated");
        }
      }
    });
  }
}

function subbannerPosition() {
  var banners = document.querySelectorAll('.banner');
  var header = document.querySelector('header');
  // var hHeader = header.offsetHeight;
  var sectionBanner = document.getElementById('bannerSub');

  var banner = document.getElementById('banner');
  var classBanner = document.querySelectorAll('.banner');

  var space = document.querySelectorAll('.space-header');

  window.addEventListener('load', function () {
    setTimeout(() => {
      var hHeader = header.offsetHeight;

      if (banner) {
        //   banner.style.paddingTop = `${hHeader}px`;
        if (window.innerWidth > 900 && window.innerHeight <= 1336) {
          classBanner.forEach(function (item) {
            var itemE = item;
            itemE.style.paddingTop = `calc(100vh - ${hHeader}px)`;
          })
        }
        //   else if (window.innerWidth > 1336){

        //   }
        //   else{
        //     classBanner.forEach(function(item){
        //       var itemE = item;
        //       itemE.style.paddingTop = ``;
        //     })
        //   }
      }
    }, 600);

  })

  window.addEventListener('resize', function (e) {
    // resize sub banner
    setTimeout(function () {
      var hHeaderResize = header.offsetHeight;

      // resize banner
      if (banner) {
        //   banner.style.paddingTop = `${hHeaderResize}px`;

        if (window.innerWidth > 900 && window.innerHeight <= 1336) {
          classBanner.forEach(function (item) {
            var itemE = item;
            itemE.style.paddingTop = `calc(100vh - ${hHeaderResize}px)`;
          })
        }
        //   else{
        //     classBanner.forEach(function(item){
        //       var itemE = item;
        //       itemE.style.paddingTop = ``;
        //     })
        //   }
      }
    }, 600);
  })
}


function seemoreSustain() {
  const loadmorBtn = document.querySelectorAll('.sustainability-2__btn--update')
  if (loadmorBtn) {
    loadmorBtn.forEach(function (element) {
      var eEl = element;
      eEl.onclick = function (e) {
        e.preventDefault();
        var activeLink = element.getAttribute('data-active');
        var pageLink = element.getAttribute('data-page');
        submitAPI(activeLink, pageLink)
      }
    })
  }
}


// function submitAPI(active, page) {
//   var data = {
//     activeLink: active,
//     pageLink: page,
//   }

//   $.ajax({
//     url: './seemore-sustain',
//     type: 'GET',
//     dataType: 'html',
//     data: data
//   }).done(function (result) {
//     // $('.equipment-wrapper .card-box').html(data);
//     var listNews = document.querySelector('.sustainability-2__wrapper .content');
//     var more = listNews.querySelector('.sustainability-2__btn--update');
//     more.remove();

//     listNews.innerHTML += result;

//     seemoreSustain();
//   }).fail(function () {
//     console.log('API search failed!!!');
//   })
// }

// function detailLoadmore(){
//   var dt = document.querySelector('#newsdetailsPage .jf-news-details__loadmore');

//   dt.addEventListener('click', function(e){
//     e.preventDefault();
//     console.log(dt.getAttribute('href'));
//   })
// }


document.addEventListener('DOMContentLoaded', function () {
  runNumberAbout();
  subbannerPosition();
})