declare var $: any;

// function activeOpenForm() {
//   if (document.querySelector('.equipment-dt1')) {
//     {
//       var btnPriceOpen = document.querySelector('.equipment-dt1 .equipment-dt-right__btn-item #quoteEquipmentDt');
//       var infoOpts = document.querySelector('.equipment-dt3 .form-details__popup');
//       var btnClose = document.querySelector('.equipment-dt3 .form-details__popup .btn-close');

//       if (btnPriceOpen) {
//         btnPriceOpen.addEventListener('click', function () {
//           infoOpts.classList.add('active')
//         })
//       }
//       if (btnClose) {
//         btnClose.addEventListener('click', function () {
//           infoOpts.classList.remove('active')
//         })
//       }
//     }
//   }
// }

// function resetForm(){
//   var form = <HTMLFormElement>document.getElementById('formRequest');
//   if (!form){
//     return;
//   }
//   var inps = form.getElementsByTagName('input');
//   var txtAreas = form.getElementsByTagName('textarea');

//   for (let i = 0; i < inps.length; ++i) {
//     inps[i].value = "";
//   }
//   for (let i = 0; i < txtAreas.length; ++i) {
//     txtAreas[i].value = "";
//   }
// }

// function submitPopup() {
//   var form = <HTMLFormElement>document.getElementById('formRequest');
//   if (!form){
//     return;
//   }
//   var inps = form.getElementsByTagName('input');
//   var txtAreas = form.getElementsByTagName('textarea');
//   // var inps = document.querySelectorAll('input[text]');
//   // var txtArea = document.querySelectorAll('textarea');
//   var inputSm = <HTMLInputElement>document.getElementById('submitFormRequest');
//   var inputRs = <HTMLInputElement>document.getElementById('resetFormRequest');
//   // console.log(inps)

//   inputRs.onclick = function (e) {
//     resetForm();
//   }

//   inputSm.onclick = function (e) {
//     submitAPI();
//   }

//   for (let i = 0; i < inps.length; ++i) {
//     inps[i].addEventListener('keypress', function (e) {
//       var key = <KeyboardEvent>e;
//       if (key.key === "Enter") {
//         e.preventDefault();
//         submitAPI();
//       }
//     })
//   }
//   for (let i = 0; i < txtAreas.length; ++i) {
//     txtAreas[i].addEventListener('keypress', function (e) {
//       var key = <KeyboardEvent>e;
//       if (key.key === "Enter") {
//         e.preventDefault();
//         submitAPI();
//       }
//     })
//   }
// }

// function checkEmpty(item:HTMLInputElement){
//   if (item && item.value !== ""){
//     return false;
//   }
//   return true;
// }

// function submitAPI() {
//   var name = <HTMLInputElement>document.getElementById('name');
//   var phone = <HTMLInputElement>document.getElementById('phone');
//   var email = <HTMLInputElement>document.getElementById('email');
//   var unit = <HTMLInputElement>document.getElementById('unit');
//   var request = <HTMLInputElement>document.getElementById('request');
//   var popup = document.querySelector('.form-details__popup');

//   // if (checkEmpty(name) || checkEmpty(phone) || checkEmpty(email) || checkEmpty(request)){
//   //   resetForm();
//   //   return false;
//   // }

//   var data = {
//     name: name.value,
//     phone: phone.value,
//     email: email.value,
//     unit: unit.value,
//     request: request.value,
//   }

//   $.ajax({
//     url: './request-post-popup',
//     type: 'POST',
//     // dataType: '',
//     data: data
//   }).done(function (result: any) {
//     // $('.equipment-wrapper .card-box').html(data);
//     alert(result);
//     popup.classList.remove('active');
//   }).fail(function () {
//     console.log('API request popup failed!!!');
//   })
// }

export const popup = function () {
  // activeOpenForm();
  // submitPopup();
}