function Hoavan(){
  // if(document.getElementById('index-1')){
    
    var svg = `
    <div class= "hoavan-line-1">
      <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 155.584 195.487">
        <g id="Group1" transform="translate(1615.329 2174) rotate(180)">
            <circle id="Ellipse_100" data-name="Ellipse 100" cx="19.451" cy="19.451" r="19.451" transform="translate(1548.377 2008.858)" fill="#066543"/>
            <path id="Intersection_6" data-name="Intersection 6" d="M167.644,149.6a257.208,257.208,0,0,1,8.49-47.264c-18.268,3.108-39.417,3.964-61.777,2.008-32.506-2.844-61.469-11.1-82.113-22.173H187.828V259.618C172.007,239.056,163.493,197.045,167.644,149.6Z" transform="translate(1427.501 1896.347)" fill="#066543"/>
            <rect id="Rectangle_2740" data-name="Rectangle 2740" width="155" height="195" transform="translate(1460 1979)" fill="none"/>
        </g>
      </svg>
    </div>
    <div class= "hoavan-line-2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92 102">
        <g id="Group_5131" data-name="Group 5131" transform="translate(-1459.745 -1978.513)">
          <circle id="Ellipse_100" data-name="Ellipse 100" cx="10.5" cy="10.5" r="10.5" transform="translate(1513.078 1994.741)" fill="#066543"/>
          <path id="Intersection_6" data-name="Intersection 6" d="M80.065,31.905a100.1,100.1,0,0,1,5.02-22.364,181.13,181.13,0,0,1-36.53.95C29.333,9.146,12.207,5.24,0,0H92V83.965C82.644,74.236,77.61,54.357,80.065,31.905Z" transform="translate(1459.745 1978.513)" fill="#066543"/>
          <rect id="Rectangle_2740" data-name="Rectangle 2740" width="91.416" height="101.513" transform="translate(1460 1979)" fill="none"/>
        </g>
      </svg>
  
    </div>`;
    var cre = document.createElement("div");
    cre.innerHTML = svg;
    var hv = document.querySelectorAll(".hoavan");
    hv.forEach(function(item){
      item.innerHTML += cre.innerHTML;
    })
    
  // }
}

declare var Swiper : any;

function myIndexNews (){
    if(document.getElementById("index-4")){
        var swiper = new Swiper(".myNews", {
            pagination: {
              el: ".swiper-pagination",
            },
            slidesPerView: 1,
            spaceBetween: 8,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
            breakpoints: {
                240: {
                  slidesPerView: 1,
                  spaceBetween: 8
                } ,
                320: {
                    slidesPerView: 1.5,
                    spaceBetween: 8
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 8
                },
                769: {
                    slidesPerView: 2,
                    spaceBetween: 16
                },
                900: {
                    slidesPerView: 2.5,
                    spaceBetween: 16
                },
                1280: {
                    slidesPerView: 2.5,
                    spaceBetween: 16
                },
                1366:{
                  slidesPerView: 3,
                  spaceBetween: 16
                }

            }
        });
    }
    
}

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
      btn.classList.add()
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
  Hoavan();
  myIndexNews();
}