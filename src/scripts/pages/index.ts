function Hoavan(){
  if(document.getElementById('index-1')){
    var svg = '';
    
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
  // toggleindex1();
  // swipperIndex4()
  handleClickButton();
}