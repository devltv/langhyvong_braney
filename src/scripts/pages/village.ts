function handleMouseCardDocument(){
  var cards = document.querySelectorAll('.card-document');
  if (cards.length !== 0){
    cards.forEach(function(item){
      // mouse hover
      item.addEventListener('mouseover',function(){
        var behind = <HTMLElement>item.querySelector('.effect-behind');
        behind.style.animation = "moveBehind .9s ease-in-out forwards";
      })

      // mouse leave
      item.addEventListener('mouseleave',function(){
        var behind = <HTMLElement>item.querySelector('.effect-behind');
        behind.style.animation = "outBehind .9s ease-in-out forwards";
      })
    })
  }
}

export const village = function(){
  handleMouseCardDocument();
}