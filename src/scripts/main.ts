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
import {banner} from "./layout/banner";
import {popup} from "./layout/popup";
import {search} from "./layout/search";
import {header} from "./layout/header";
import {dropdown} from "./layout/dropdown";

// Page
import {index} from "./pages/index";
import {careersSubpages} from "./pages/careersSubpages";
import {careersSubchildren} from "./pages/careersSubchildren";
import {careersJob} from "./pages/careersJob";
import {farmSubchildren} from "./pages/farmSubchildren";
import {subPages} from "./pages/subpages";
import {contactPage} from "./pages/contact";
import {newsPage} from "./pages/news";
import {aboutNetwork} from "./pages/about-network";
import {deploy} from "./pages/deploy";
import {sustainPage} from "./pages/Sustain";

// import { interpolate } from "gsap/all";

///////////////////////////////////////////////////////////////
// function Common
function common(){
  fetchData;
}

function layout(){
  banner();
  popup();
  search();
  header();
  dropdown();
}

// function Page
function page(){
  // ----- add page in here ----- //
  index();
  careersSubpages();
  careersSubchildren();
  farmSubchildren();
  careersJob();
  subPages();
  contactPage();
  newsPage();
  aboutNetwork();
  deploy();
  sustainPage();
}



////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function(){
  // common();
  layout();
  page();
});

