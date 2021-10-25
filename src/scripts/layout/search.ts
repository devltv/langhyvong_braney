declare var $ : any;

// function activeInputSearch(){
//   // toggle active select option
//   var opts = document.querySelectorAll('.option');
//   opts.forEach(function(opt){
//     var btn = opt.getElementsByClassName('option-value');
//     var list = opt.getElementsByClassName('option-list');
//     var items = opt.getElementsByClassName('option-item');

//     if (btn){
//       btn[0].addEventListener('click', function(e){
//         e.preventDefault();
//         list[0].classList.toggle('active');
//       })
//     }

//     if (items){
//       for(let i = 0; i < items.length; i++){
//         if (items[i].classList.contains('active')){
//           btn[0].setAttribute('data-option', items[i].getAttribute('data-option'));
//         }
//       }
//       for(let i = 0; i < items.length; i++){
//         items[i].addEventListener('click', function(){

//           for(let j = 0; j < items.length; j++){
//             items[j].classList.remove('active');
//           }

//           this.classList.add('active');
//           btn[0].setAttribute('data-option', this.getAttribute('data-option'));
//           var content = btn[0].getElementsByClassName('option-value__content');
//           content[0].innerHTML = this.innerHTML;
//           list[0].classList.remove('active');

//           submitAPI();
//         })
//       }
//     }
//   })

//   // remove active select option
//   document.addEventListener('click', function(evt){
//     var links = document.querySelectorAll('.option');
  
//     links.forEach(function (item) {
//       var evtTarget = <HTMLElement>evt.target;
//       var listOptions = item.getElementsByClassName('option-list');
//       var content = item.getElementsByClassName('option-value');
  
//       do {
//         if (evtTarget === listOptions[0]) {
//           return;
//         }
//         else if (evtTarget === content[0]) {
//           return;
//         }
  
//         evtTarget = <HTMLElement>evtTarget.parentNode;
//       } while (evtTarget);
  
//       listOptions[0].classList.remove('active');
//     })
//   })

//   // toggle checkbox 
//   var checks = document.querySelectorAll('.check-box');
//   if (checks){
//     checks.forEach(function(check){
//       var checkValue = false;
//       check.addEventListener('click', function(e){
//         e.preventDefault();
//         this.classList.toggle('active');

//         submitAPI();
//       })
//     })
//   }

//   // input search
//   var btnInput = document.querySelectorAll('.input-search-group');
//   if (btnInput){
//     btnInput.forEach(function(item){
//       var input = item.getElementsByClassName('input-search__input');
//       var btn = item.getElementsByClassName('input-search__icon');
//       btn[0].addEventListener('click', function(){
//         submitAPI();
//       })

//       input[0].addEventListener('keypress', function(e){
//         var key = <KeyboardEvent> e;
//         if(key.key === "Enter"){
//           e.preventDefault();
//           submitAPI();
//         }
//       })
//     })
//   }
// }

// function submitAPI(){
//   var search = <HTMLInputElement> document.getElementById('idSearch');
//   var producerFormSearch = <HTMLInputElement> document.getElementById('producerFormSearch');
//   var sortFormSearch = <HTMLInputElement> document.getElementById('sortFormSearch');
//   var newFormSearch = <HTMLInputElement> document.getElementById('newFormSearch');

//   var data = {
//     search: search.value,
//     producer: producerFormSearch.getAttribute('data-option'),
//     sort: sortFormSearch.getAttribute('data-option'),
//     new: newFormSearch.classList.contains('active'),
//     url: window.location.pathname
//   }

//   $.ajax({
//     url: './search-get',
//     type: 'GET',
//     dataType: 'html',
//     data: data
//   }).done(function(result:any){
//     $('.equipment-wrapper .card-box').html(data);
//   }).fail(function(){
//     console.log('API search failed!!!');
//   })
// }.

function clickHandle(){
  var clickLoad = <HTMLElement> document.querySelector('#searchPage .result-more .see-more');
  if (clickLoad){
    clickLoad.onclick = function(e){
      e.preventDefault();
      var page = clickLoad.getAttribute('data-page');
      var text = clickLoad.getAttribute('data-text');
      apiHandle(page, text)
    }
  }
}

function apiHandle(page:any, text:any){
  var data = {
    page: page,
    text: text
  }
  $.ajax({
    url: '/search-get',
    type: 'GET',
    dataType: 'html',
    data: data
  }).done(function(result:any){
    // tao div ao va goi result class
    var rs = document.querySelector('#searchPage .result');
    var tempHtml = document.createElement('DIV');
    tempHtml.innerHTML= result;

    // Cong item
    var box = rs.querySelector('.result-box');
    var innerBox = tempHtml.querySelector('.result-box');
    box.innerHTML += innerBox.innerHTML;

    // Thay html show
    var innerShow = tempHtml.querySelector('.result__show');
    var show = rs.querySelector('.result__show');
    show.innerHTML = innerShow.innerHTML;

    // Thay html load more
    var innerMore = tempHtml.querySelector('.result-more');
    var more = rs.querySelector('.result-more');
    more.innerHTML = innerMore.innerHTML;

    clickHandle();
  }).fail(function(){
    console.log('API search failed!!!');
  })
}

function searchHandle(){
  var inputSearch = <HTMLInputElement> document.querySelector('#search-rs .search-rs-input__data input');
  var inputSm = <HTMLInputElement> document.querySelector('#search-rs .search-rs-input__sm input');
  if (!inputSm && !inputSearch){
    return;
  }
  inputSm.addEventListener('click', function(){
    let valueText = "/search?text=" + inputSearch.value;

    // redirect search.html
    window.location.replace(valueText);
  })

  inputSearch.addEventListener('keypress', function(e){
    if (e.key === 'Enter'){
      // call API update
      let valueText = "/search?text=" + inputSearch.value;

      // redirect search.html
      window.location.replace(valueText);
    }
  })
}

export const search = function(){
  // activeInputSearch();
  clickHandle();
  searchHandle();
}