declare var $: any;

function runNumberAbout() {
  var page = document.getElementById('index-2');
  if (page) {
    $(window).on('scroll', function (e:any) {
      function numberWithCommas(x:any) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      }
      if ($(window).scrollTop() >= ($(".index-2 .content-box").offset().top - ($(window).height()))) {
        if (!$(".index-2 .content-box").hasClass("animated")) {
          $('.index-2 .content-box .number tspan').each(function () {
            $(this).prop('Counter', 0).animate({
              Counter: $(this).text()
            }, {
              duration: 4000,
              easing: 'swing',
              step: function (now:any) {
                let num = Math.ceil(now);
                let strNum = "";
                if (num < 10) {
                  strNum = "0" + num;
                }
                else{
                  strNum = num + "";
                }
                $(this).text(numberWithCommas(strNum));
              }
            });
          });
          // $("#triggered").addClass("show");
          $(".index-2 .content-box").addClass("animated");
        }
      }
    });
  }
}

export const number = function(){
  runNumberAbout();
}