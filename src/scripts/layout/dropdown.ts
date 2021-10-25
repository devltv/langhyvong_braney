
function toggleDropdown() {
    if (document.getElementsByClassName('dropdown')) {
        var selectorDropDown = document.querySelectorAll('.dropdown');
        selectorDropDown.forEach(element => {
            var btnDropDowns =  element.getElementsByClassName('dropdown__btn')
            
            var btnDropDown = btnDropDowns[0];
            var menuDropDowns = element.getElementsByClassName('dropdown__menu');
            var menuDropDown = menuDropDowns[0];
            var itemsDropDown = menuDropDown.getElementsByClassName('itemsMenu');
            var x = document.getElementById("careersJob");
            console.log(x)
            btnDropDown.addEventListener('click', function () {
                var dropdownActive = document.querySelector('.dropdown .dropdown__menu.active');
                
                menuDropDown.classList.toggle('active');
                if(dropdownActive){
                        dropdownActive.classList.remove('active')
                }

                    
                
               
                // console.log(dropdownActive)

            })
            // if(x){
            //     x.addEventListener('click',()=>{
            //         var dropdownActive = document.querySelector('.dropdown .dropdown__menu.active');
                
            //         if(dropdownActive){
            //                 dropdownActive.classList.remove('active')
            //         }
            //     })
            // }
            for(let i = 0 ;i<itemsDropDown.length; i++){
                itemsDropDown[i].addEventListener('click', function () {
                    var text = itemsDropDown[i].textContent;
                    var label = btnDropDown.getElementsByClassName('desc');
                    // console.log(text);
                    label[0].innerHTML = text;
                    var attrBox = itemsDropDown[i].getAttribute('data-box');
                    label[0].setAttribute('data-box' , attrBox);

                    menuDropDown.classList.remove('active');


                })
            }
            // }
            // itemsDropDown.forEach(function (item) {
            //     item.addEventListener('click', function () {
            //         var text = item.textContent;
            //         var label = document.querySelector('.dropdown .dropdown__btn .desc');
            //         console.log(text);
            //         label.innerHTML = text;
            //         menuDropDown.classList.remove('active');

            //     })
            // })
        
        });




    }
}
export const dropdown = function () {
    toggleDropdown();
}