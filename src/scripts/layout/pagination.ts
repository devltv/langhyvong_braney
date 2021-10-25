import { header } from "./header";

// Khởi tạo pagination với class ul.pagination, với box list
function pagination (options: any) {
  // queryPagination: string, queryBox: string

  var pages = <HTMLElement>document.querySelector(`${options.queryClassPagination}`);
  var totalBox = document.querySelectorAll(options.listBox);

  var totalPage = Math.ceil(totalBox.length / options.itemPages);
  if (!pages || !totalBox){
    return;
  }

  var scrollTop = options.scroll;
  
  if (scrollTop){
    paginationCreate(pages, totalBox, 1, totalPage, options.itemPages, scrollTop);
  }
  else{
    paginationCreate(pages, totalBox, 1, totalPage, options.itemPages);
  }

  activeBox(totalBox, 1, options.itemPages);
}

function activeBox(totalBox:any, liActive: number, itemPages:number){
  totalBox.forEach(function(item: HTMLElement){
    item.style.display = "";
  })

  totalBox.forEach(function(item: HTMLElement, index: number){
    var itemPage = Math.ceil((index + 1) / itemPages);
    if (itemPage !== liActive){
      item.style.display = "none";
    }
  })
}

function paginationCreate(objClass:any, totalBox:any, liActive:number, totalPage: number, itemPages: number, scrollTop: any = null){
  // Math.ceil(totalBox.length / 5)

  objClass.innerHTML = createPagination(totalPage, liActive);

  var strIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="8" height="11" viewBox="0 0 8 11">
  <path id="Polygon_2" data-name="Polygon 2" d="M5.5,0,11,8H0Z" transform="translate(8) rotate(90)" fill="#004a8f"/>
</svg>`;

  // thay đổi kí tự next và prev
  changeIcon(objClass, "next", strIcon);
  changeIcon(objClass, "prev", strIcon);

  // click button
  if (scrollTop){
    clickButton(objClass, totalBox, totalPage, itemPages, scrollTop);
  }
  else{
    clickButton(objClass, totalBox, totalPage, itemPages);
  }
}

function hiddenNextPrev(objClass:any, itemActive: number, totalPage:number){
  let liBtns = objClass.getElementsByTagName('li');

  let itemNext;
  let itemPrev;

  // lấy giá trị được active
  for (let i = 0; i < liBtns.length; i++){
    let item = <HTMLElement>liBtns[i];
    if (item.classList.contains('next')){
      itemNext = item;
    }
    else if (item.classList.contains('prev')){
      itemPrev = item;
    }
  }

  // Không cho click vào button Next or Prev nếu active gần nó
  if (totalPage === 1){
    itemPrev.classList.add('btn-hidden');
    itemNext.classList.add('btn-hidden');
  }
  else if (itemActive === 1){
    itemPrev.classList.add('btn-hidden');
    itemNext.classList.remove('btn-hidden');
  }
  else if (itemActive === totalPage){
    itemPrev.classList.remove('btn-hidden');
    itemNext.classList.add('btn-hidden');
  }
  else{
    itemPrev.classList.remove('btn-hidden');
    itemNext.classList.remove('btn-hidden');
  }
}

function clickButton(objClass:any, totalBox:any, totalPage: number, itemPages:number, scrollTop:any = null){
  let liBtns = objClass.getElementsByTagName('li');

  let itemActive: number;

  // lấy giá trị được active
  for (let i = 0; i < liBtns.length; i++){
    let item = <HTMLElement>liBtns[i];
    if (item.classList.contains('active')){
      itemActive = parseInt(item.getAttribute('data-number'));
    }
  }

  // Không cho click vào button Next or Prev nếu active gần nó
  hiddenNextPrev(objClass, itemActive, totalPage);

  for (let i = 0; i < liBtns.length; i++){
    let item = liBtns[i];
    
    item.onclick = function(){
      // let classItem = this.getAttribute('class');
      let dataItem = parseInt(this.getAttribute('data-number'));
      
      if (this.classList.contains('btn-hidden') || dataItem == itemActive){
        return;
      }
      if (this.classList.contains('next') && itemActive < totalPage){
        itemActive = itemActive + 1;
      }
      else if (this.classList.contains('prev') && itemActive > 1){
        itemActive = itemActive - 1;
      }
      else{
        if (!dataItem){
          return;
        }
        itemActive = dataItem;
      }

      hiddenNextPrev(objClass, itemActive, totalPage);
      paginationCreate(objClass,totalBox, itemActive, totalPage, itemPages, scrollTop);
      activeBox(totalBox, itemActive, itemPages);

      if (scrollTop){
        scrollToTop(scrollTop.id, scrollTop.header);
      }
    }
  }
}

function scrollToTop(strId:string, queryHeader: string = ""){
  if (document.getElementById(strId)){
    var topFeatured = 0;
    var featuredItem = <HTMLElement>document.getElementById(strId);
    
    if (featuredItem){
      var parentFeatured = <HTMLElement> featuredItem.offsetParent;
      var count = 0;
      while(parentFeatured.nodeName !== "BODY" && count < 100){
        topFeatured += parentFeatured.offsetTop;
        parentFeatured = <HTMLElement> parentFeatured.offsetParent;
        count++;
      }
      topFeatured += featuredItem.offsetTop;
    }
    
    // Trừ đi thanh Header
    var hHeader = document.querySelector(queryHeader);
    var scroll = hHeader.getElementsByClassName('scroll');

    if (scroll[0].classList.contains('active')){
      topFeatured -= scroll[0].clientHeight;
    }
    else if (hHeader){
      topFeatured -= hHeader.clientHeight;
    }

    window.scrollTo({
      top: topFeatured,
      left: 0,
      behavior: "smooth"
    });
  }
}

function changeIcon(objClass : any, strClass: string, strIcon: string){
  var classStrChange = objClass.getElementsByClassName(strClass);
  var innerStrClass = <HTMLElement>classStrChange[0];
  innerStrClass.innerHTML = strIcon;
}

function createPagination(totalPages: any, page: any) {
  let strStart = `<li class="prev">prev</li>`;
  let strList = "";

  // khi tổng số page nhỏ hơn 5
  if (totalPages < 5){
    for (var i = 1; i <= totalPages; i++) {
      if (i == page) {
        strList += `<li class="active" data-number="${i}">${i}</li>`;
      }
      else {
        strList += `<li data-number="${i}">${i}</li>`;
      }
    }
  }
  else if ((page <= 3 || page >= totalPages - 2) && page > 0 && page <= totalPages) {
    // trường hợp active tạo thành 1 2 3 ... 20
    if (page <= 3) {
      if (page == 3 && totalPages == 5){
        for (var i = 1; i <= totalPages; i++) {
          if (i == page) {
            strList += `<li class="active" data-number="${i}">${i}</li>`;
          }
          else {
            strList += `<li data-number="${i}">${i}</li>`;
          }
        }
      }
      else{
        var visiblePage = page + 1;
        if (page == 1) {
          visiblePage = 3;
        }
        for (var i = 1; i <= visiblePage; i++) {
          if (i == page) {
            strList += `<li class="active" data-number="${i}">${i}</li>`;
          }
          else {
            strList += `<li data-number="${i}">${i}</li>`;
          }
        }
        strList += `<li>...</li>`;
        strList += `<li data-number="${totalPages}">${totalPages}</li>`;
      }
    }
    // trường hợp active tạo thành 1 ... 18 19 20
    else {
      strList += `<li data-number="1">1</li>`;
      strList += `<li>...</li>`;

      var visiblePage2 = page - 1;
      if (page == totalPages) {
        visiblePage2 = totalPages - 2;
      }

      for (var i = visiblePage2; i <= totalPages; i++) {
        if (i == page) {
          strList += `<li class="active" data-number="${i}">${i}</li>`;
        }
        else {
          strList += `<li data-number="${i}">${i}</li>`;
        }
      }
    }
  }
  // trường hợp active tạo thành 1 ... 7 8 9 ... 20
  else if (page > 3 && page < totalPages - 2) {
    strList += `<li data-number="1">1</li>`;
    strList += `<li>...</li>`;
    for (var i = page - 1; i <= page + 1; i++) {
      if (i == page) {
        strList += `<li class="active" data-number="${i}">${i}</li>`;
      }
      else {
        strList += `<li data-number="${i}">${i}</li>`;
      }
    }
    strList += `<li>...</li>`;
    strList += `<li data-number="${totalPages}">${totalPages}</li>`;
  }
  else {
    console.log("error pagination!!!");
    return "";
  }

  let strEnd = `<li class="next">next</li>`;
  return strStart.concat(strList, strEnd);
}
export default{
  pagination: pagination
}