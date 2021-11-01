// https://fancyapps.com/docs/ui/fancybox
// https://www.npmjs.com/package/axios
// https://greensock.com/
// https://swiperjs.com/get-started
declare var Swiper : any;
declare var $ : any;
// declare var AOS : any;

// AOS.init({
//   once: true
// });

// import axios from "axios";


//////////////////////////////////////////////////////////
// Common function
import * as fetchData from "./components/fetchData";

// Layout
import {_popup} from "./layout/_popup";

import {header} from "./layout/header";
import {banner} from "./layout/banner";
// Page
import {index} from "./pages/index";
import {village} from "./pages/village";
import {story} from "./pages/story";
import {student} from "./pages/student";
import {daily} from "./pages/daily";

// import { interpolate } from "gsap/all";

///////////////////////////////////////////////////////////////
// function Common
function common(){
  fetchData;
}

function layout(){
  _popup();
  header();
  banner();
}

// function Page
function page(){
  // ----- add page in here ----- //
  index();
  // index();
  village();
  student();
  daily();
  story();
}



////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function(){
  // common();
  layout();
  page();
});

