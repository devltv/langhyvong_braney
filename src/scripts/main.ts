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
import {index} from "./pages/index";
import {village} from "./pages/village";
import {story} from "./pages/story"

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
  index();
  // index();
  village();


  story();
}



////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function(){
  // common();
  layout();
  page();
});

