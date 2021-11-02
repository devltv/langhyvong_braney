function backToTop(){
    var btnBackToTop = document.querySelector(".footer .footer-btnBackToTop");
    btnBackToTop.addEventListener('click', function(item){
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })


    })  
}
export const footer = function () {
    backToTop();
}