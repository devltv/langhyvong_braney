// https://fancyapps.com/docs/ui/fancybox
// https://www.npmjs.com/package/axios
// https://greensock.com/
// https://swiperjs.com/get-started
declare var Swiper : any;
declare var $ : any;
declare var AOS : any;

AOS.init({
  once: true
});

// import axios from "axios";


//////////////////////////////////////////////////////////
// Common function
import * as fetchData from "./components/fetchData";

// Layout

// Page
<<<<<<< HEAD
import {index} from "./pages/index";
=======
import {village} from "./pages/village";

>>>>>>> 523a4eedb8d891525b4691798a6b9de44516c523
// import { interpolate } from "gsap/all";

///////////////////////////////////////////////////////////////
// function Common
function common(){
  fetchData;
}

function layout(){
}

// function Page
function page(){
  // ----- add page in here ----- //
<<<<<<< HEAD
  index();
=======
  // index();
  village();
>>>>>>> 523a4eedb8d891525b4691798a6b9de44516c523
}



////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function(){
  // common();
  layout();
  page();
});

