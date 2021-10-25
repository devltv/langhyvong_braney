// // let MapDOM = document.querySelector("#map");
// // let BranchListDOM = document.querySelector(".dealer-locator-list .list");
// // let map,
// // 	infoWindow,
// // 	markers = [];
// // let locationsInput = locationsInput || [];
// // let google = google || {};
// // let mapOption = {
// // 	gestureHandling: "cooperative",
// // 	zoom: 12,
// // 	styles: [
// // 		{
// // 			featureType: "administrative",
// // 			elementType: "labels.text.fill",
// // 			stylers: [
// // 				{
// // 					color: "#444444",
// // 				},
// // 			],
// // 		},
// // 		{
// // 			featureType: "landscape",
// // 			elementType: "all",
// // 			stylers: [
// // 				{
// // 					color: "#f2f2f2",
// // 				},
// // 			],
// // 		},
// // 		{
// // 			featureType: "poi",
// // 			elementType: "all",
// // 			stylers: [
// // 				{
// // 					visibility: "off",
// // 				},
// // 			],
// // 		},
// // 		{
// // 			featureType: "road",
// // 			elementType: "all",
// // 			stylers: [
// // 				{
// // 					saturation: -100,
// // 				},
// // 				{
// // 					lightness: 45,
// // 				},
// // 			],
// // 		},
// // 		{
// // 			featureType: "road.highway",
// // 			elementType: "all",
// // 			stylers: [
// // 				{
// // 					visibility: "simplified",
// // 				},
// // 			],
// // 		},
// // 		{
// // 			featureType: "road.arterial",
// // 			elementType: "labels.icon",
// // 			stylers: [
// // 				{
// // 					visibility: "off",
// // 				},
// // 			],
// // 		},
// // 		{
// // 			featureType: "transit",
// // 			elementType: "all",
// // 			stylers: [
// // 				{
// // 					visibility: "off",
// // 				},
// // 			],
// // 		},
// // 		{
// // 			featureType: "water",
// // 			elementType: "all",
// // 			stylers: [
// // 				{
// // 					color: "#0c6db5",
// // 				},
// // 				{
// // 					visibility: "on",
// // 				},
// // 			],
// // 		},
// // 	],
// // };

// // const addMarkers = () => {
// // 	markers = [];
// // 	const bounds = new google.maps.LatLngBounds();
// // 	locationsInput.forEach((location, index) => {
// // 		let locationLatLng = new google.maps.LatLng(location.lat, location.lng);
// // 		let marker = new google.maps.Marker({
// // 			map: map,
// // 			title: location.title,
// // 			position: locationLatLng,
// // 			icon: location.icon,
// // 		});
// // 		bounds.extend(marker.position);
// // 		markers.push(marker);
// // 		showInfoMarkerOnMap(marker, index);
// // 	});

// // 	map.fitBounds(bounds);
// // };

// // const showInfoMarkerOnMap = (marker, index) => {
// // 	google.maps.event.addListener(marker, "click", function () {
// // 		infoWindow.setContent(`
// // 				<h3>${locationsInput[index].title}</h3>
// // 				<p>${locationsInput[index].address}</p>
// // 				<p>${locationsInput[index].phone}</p>
// // 			`);
// // 		infoWindow.open(map, marker);
// // 		map.panTo(marker.getPosition());
// // 		map.setZoom(12);
// // 	});
// // 	google.maps.event.addListener(map, "click", function () {
// // 		infoWindow.close();
// // 	});
// // };

// // const getLocationList = () => {
// // 	if (BranchListDOM) {
// // 		BranchListDOM.innerHTML = "";
// // 		markers.forEach((marker, index) => {
// // 			const newMarker = document.createElement("div");
// // 			newMarker.classList.add("dealer-locator-item");
// // 			newMarker.innerHTML = `
// // 				<h3>${locationsInput[index].title}</h3>
// // 				<p>${locationsInput[index].address}</p>
// // 				<p>${locationsInput[index].phone}</p>
// // 			`;
// // 			newMarker.setAttribute("marker-id", `${index}`);
// // 			newMarker.addEventListener("click", () => {
// // 				const markerIndex = newMarker.getAttribute("marker-id");
// // 				google.maps.event.trigger(markers[markerIndex], "click");
// // 			});
// // 			BranchListDOM.appendChild(newMarker);
// // 		});
// // 	}
// // };

// // const initialize = () => {
// // 	infoWindow = new google.maps.InfoWindow();
// // 	map = new google.maps.Map(MapDOM, mapOption);
// // 	addMarkers();
// // 	let listener = google.maps.event.addListener(map, "idle", () => {
// // 		if (map.getZoom() > 12) {
// // 			map.setZoom(12);
// // 		}
// // 		google.maps.event.removeListener(listener);
// // 	});
// // 	google.maps.event.addListener(map, "bounds_changed", getLocationList);
// // };

// // if (MapDOM) {
// // 	google.maps.event.addDomListener(window, "load", initialize);
// // 	if (BranchListDOM) {
// // 		getLocationList();
// // 	}
// // }
// // // <image class="+ "mapPopupImage" +" src="+"../assets/images/page/index/i5-img.png"+ "></image>
// //!function o(r,i,u){function a(t,e){if(!i[t]){if(!r[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(c)return c(t,!0);throw(n=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",n}n=i[t]={exports:{}},r[t][0].call(n.exports,function(e){return a(r[t][1][e]||e)},n,n.exports,o,r,i,u)}return i[t].exports}for(var c="function"==typeof require&&require,e=0;e<u.length;e++)a(u[e]);return a}({1:[function(e,t,o){"use strict";var n=function(e,u,a,c){return new(a=a||Promise)(function(n,t){function o(e){try{i(c.next(e))}catch(e){t(e)}}function r(e){try{i(c.throw(e))}catch(e){t(e)}}function i(e){var t;e.done?n(e.value):((t=e.value)instanceof a?t:new a(function(e){e(t)})).then(o,r)}i((c=c.apply(e,u||[])).next())})},r=function(n,o){var r,i,u,a={label:0,sent:function(){if(1&u[0])throw u[1];return u[1]},trys:[],ops:[]},e={next:t(0),throw:t(1),return:t(2)};return"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,i&&(u=2&t[0]?i.return:t[0]?i.throw||((u=i.return)&&u.call(i),0):i.next)&&!(u=u.call(i,t[1])).done)return u;switch(i=0,(t=u?[2&t[0],u.value]:t)[0]){case 0:case 1:u=t;break;case 4:return a.label++,{value:t[1],done:!1};case 5:a.label++,i=t[1],t=[0];continue;case 7:t=a.ops.pop(),a.trys.pop();continue;default:if(!(u=0<(u=a.trys).length&&u[u.length-1])&&(6===t[0]||2===t[0])){a=0;continue}if(3===t[0]&&(!u||t[1]>u[0]&&t[1]<u[3])){a.label=t[1];break}if(6===t[0]&&a.label<u[1]){a.label=u[1],u=t;break}if(u&&a.label<u[2]){a.label=u[2],a.ops.push(t);break}u[2]&&a.ops.pop(),a.trys.pop();continue}t=o.call(n,a)}catch(e){t=[6,e],i=0}finally{r=u=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}};Object.defineProperty(o,"__esModule",{value:!0}),o.debounce=o.LocationInfo=void 0;function i(){}var u=[],a=new google.maps.InfoWindow,c={gestureHandling:"cooperative",zoom:12};o.LocationInfo=i;function l(r){if(0<u.length)for(var e=0;e<u.length;e++)u[e].setMap(null);u=[];var i=new google.maps.LatLngBounds;document.querySelector(".introMap__list ul")&&document.querySelectorAll(".introMap__list ul li:not(.d-none)").forEach(function(e,t){var n={order:t,lat:Number(e.getAttribute("data-lat")),lng:Number(e.getAttribute("data-lng")),title:e.getElementsByTagName("h6")[0].innerHTML,address:e.getElementsByClassName("location")[0].innerHTML,phone:e.getElementsByClassName("phone")[0].innerHTML},o=new google.maps.Marker({map:r,icon:"",title:e.getElementsByTagName("h6")[0].innerHTML,position:new google.maps.LatLng(Number(e.getAttribute("data-lat")),Number(e.getAttribute("data-lng")))});i.extend(o.position),u.push(o),s(r,a,o,n),e.addEventListener("click",function(){google.maps.event.trigger(u[t],"click")})}),r.fitBounds(i)}var s=function(e,t,n,o){google.maps.event.addListener(n,"click",function(){t.setContent("\n\t\t\t<div class='map-markers'>\n\t\t\t\t<h3>"+o.title+"</h3>\n\t\t\t\t<p>"+o.address+"</p>\n\t\t\t\t<p>"+o.phone+"</p>\n\t\t\t</div>\n\t\t"),t.open(e,n),e.panTo(n.getPosition()),e.setZoom(12)}),google.maps.event.addListener(e,"click",function(){t.close()})},d=function(e,t){var n,o,r=t.getAttribute("name");"address"===r?d(e,document.querySelector(".introMap__input select[name='country']")):"country"===r?(document.querySelectorAll(".introMap__input select[name='city'] option").forEach(function(e){e.getAttribute("data-country")==t.value?e.hidden=!1:"0"==e.value||(e.hidden=!0,document.querySelector(".introMap__input select[name='city']").value="0")}),d(e,document.querySelector(".introMap__input select[name='city']"))):"city"===r?(document.querySelectorAll(".introMap__input select[name='district'] option").forEach(function(e){e.getAttribute("data-city")==t.value?e.hidden=!1:"0"==e.value||(e.hidden=!0,document.querySelector(".introMap__input select[name='district']").value="0")}),d(e,document.querySelector(".introMap__input select[name='district']"))):(0==Number(t.value)?0==(o=Number(document.querySelector(".introMap__input select[name='city']").value))?(r=Number(document.querySelector(".introMap__input select[name='country']").value),n=!0,document.querySelectorAll(".introMap__input select[name='city'] option[data-country='"+r+"']").forEach(function(e){document.querySelectorAll(".introMap__input select[name='district'] option[data-city='"+e.value+"']").forEach(function(e,t){p(e.value,n),n=n&&!n})})):0<(o=document.querySelectorAll(".introMap__input select[name='district'] option[data-city='"+o+"']")).length?o.forEach(function(e,t){p(e.value,0==t)}):p(t.value,!0):p(document.querySelector(".introMap__input select[name='district'] option[value='"+Number(t.value)+"']").value,!0),l(e))},p=function(t,n){var o=document.querySelector(".introMap__input input[name='address']").value;document.querySelectorAll(".introMap__list ul li").forEach(function(e){n&&e.classList.add("d-none"),e.getAttribute("data-district")!=t||""!=o&&!e.querySelector(".location").innerHTML.includes(o)||e.classList.remove("d-none")})};o.debounce=function(n,o){var r=null;return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];null!==r&&(clearTimeout(r),r=null),r=setTimeout(function(){return n.apply(void 0,e)},o)}};function m(){var e,t,n;document.querySelector("#map")&&(e=new google.maps.Map(document.querySelector("#map"),c),document.querySelector(".introMap__search")?(n=e,document.querySelectorAll(".introMap__input select").forEach(function(t,e){t.addEventListener("change",function(e){d(n,t)})}),document.querySelector(".introMap__input input[name='address']").addEventListener("keyup",o.debounce(function(e){d(n,e.target)},2e3)),d(e,document.querySelector(".introMap__input select[name='country']"))):l(e),t=google.maps.event.addListener(e,"idle",function(){12<e.getZoom()&&e.setZoom(12),google.maps.event.removeListener(t)}))}document.addEventListener("DOMContentLoaded",function(){return n(void 0,void 0,void 0,function(){return r(this,function(e){return google.maps.event.addDomListener(window,"load",m),[2]})})})},{}]},{},[1]);
// //# sourceMappingURL=GoogleMapController.min.js.map

// !(function o(r, i, u) {
//     function a(t, e) {
//         if (!i[t]) {
//             if (!r[t]) {
//                 var n = "function" == typeof require && require;
//                 if (!e && n) return n(t, !0);
//                 if (c) return c(t, !0);
//                 throw (((n = new Error("Cannot find module '" + t + "'")).code = "MODULE_NOT_FOUND"), n);
//             }
//             (n = i[t] = { exports: {} }),
//                 r[t][0].call(
//                     n.exports,
//                     function (e) {
//                         return a(r[t][1][e] || e);
//                     },
//                     n,
//                     n.exports,
//                     o,
//                     r,
//                     i,
//                     u
//                 );
//         }
//         return i[t].exports;
//     }
//     for (var c = "function" == typeof require && require, e = 0; e < u.length; e++) a(u[e]);
//     return a;
// })(
//     {
//         1: [
//             function (e, t, o) {
//                 "use strict";
//                 var n = function (e, u, a, c) {
//                     return new (a = a || Promise)(function (n, t) {
//                         function o(e) {
//                             try {
//                                 i(c.next(e));
//                             } catch (e) {
//                                 t(e);
//                             }
//                         }
//                         function r(e) {
//                             try {
//                                 i(c.throw(e));
//                             } catch (e) {
//                                 t(e);
//                             }
//                         }
//                         function i(e) {
//                             var t;
//                             e.done
//                                 ? n(e.value)
//                                 : ((t = e.value) instanceof a
//                                     ? t
//                                     : new a(function (e) {
//                                         e(t);
//                                     })
//                                 ).then(o, r);
//                         }
//                         i((c = c.apply(e, u || [])).next());
//                     });
//                 },
//                     r = function (n, o) {
//                         var r,
//                             i,
//                             u,
//                             a = {
//                                 label: 0,
//                                 sent: function () {
//                                     if (1 & u[0]) throw u[1];
//                                     return u[1];
//                                 },
//                                 trys: [],
//                                 ops: [],
//                             },
//                             e = { next: t(0), throw: t(1), return: t(2) };
//                         return (
//                             "function" == typeof Symbol &&
//                             (e[Symbol.iterator] = function () {
//                                 return this;
//                             }),
//                             e
//                         );
//                         function t(t) {
//                             return function (e) {
//                                 return (function (t) {
//                                     if (r) throw new TypeError("Generator is already executing.");
//                                     for (; a;)
//                                         try {
//                                             if (((r = 1), i && (u = 2 & t[0] ? i.return : t[0] ? i.throw || ((u = i.return) && u.call(i), 0) : i.next) && !(u = u.call(i, t[1])).done)) return u;
//                                             switch (((i = 0), (t = u ? [2 & t[0], u.value] : t)[0])) {
//                                                 case 0:
//                                                 case 1:
//                                                     u = t;
//                                                     break;
//                                                 case 4:
//                                                     return a.label++, { value: t[1], done: !1 };
//                                                 case 5:
//                                                     a.label++, (i = t[1]), (t = [0]);
//                                                     continue;
//                                                 case 7:
//                                                     (t = a.ops.pop()), a.trys.pop();
//                                                     continue;
//                                                 default:
//                                                     if (!(u = 0 < (u = a.trys).length && u[u.length - 1]) && (6 === t[0] || 2 === t[0])) {
//                                                         a = 0;
//                                                         continue;
//                                                     }
//                                                     if (3 === t[0] && (!u || (t[1] > u[0] && t[1] < u[3]))) {
//                                                         a.label = t[1];
//                                                         break;
//                                                     }
//                                                     if (6 === t[0] && a.label < u[1]) {
//                                                         (a.label = u[1]), (u = t);
//                                                         break;
//                                                     }
//                                                     if (u && a.label < u[2]) {
//                                                         (a.label = u[2]), a.ops.push(t);
//                                                         break;
//                                                     }
//                                                     u[2] && a.ops.pop(), a.trys.pop();
//                                                     continue;
//                                             }
//                                             t = o.call(n, a);
//                                         } catch (e) {
//                                             (t = [6, e]), (i = 0);
//                                         } finally {
//                                             r = u = 0;
//                                         }
//                                     if (5 & t[0]) throw t[1];
//                                     return { value: t[0] ? t[1] : void 0, done: !0 };
//                                 })([t, e]);
//                             };
//                         }
//                     };
//                 Object.defineProperty(o, "__esModule", { value: !0 }), (o.debounce = o.LocationInfo = void 0);
//                 function i() { }
//                 var u = [],
//                     a = new google.maps.InfoWindow(),
//                     c = { gestureHandling: "cooperative", zoom: 12 };
//                 o.LocationInfo = i;
//                 function l(r) {
//                     if (0 < u.length) for (var e = 0; e < u.length; e++) u[e].setMap(null);
//                     u = [];
//                     var i = new google.maps.LatLngBounds();
//                     document.querySelector(".about-map-wrapper__left .map-recommend") &&
//                         document.querySelectorAll("about-map-wrapper__left .map-recommend .addr-maps").forEach(function (e, t) {
//                             var n = {
//                                 order: t,
//                                 lat: Number(e.getAttribute("data-lat")),
//                                 lng: Number(e.getAttribute("data-lng")),
//                                 title: e.getElementsByTagName("h6")[0].innerHTML,
//                                 address: e.getElementsByClassName("location")[0].innerHTML,
//                                 phone: e.getElementsByClassName("phone")[0].innerHTML,
//                             },
//                                 o = new google.maps.Marker({ map: r, icon: "", title: e.getElementsByTagName("h6")[0].innerHTML, position: new google.maps.LatLng(Number(e.getAttribute("data-lat")), Number(e.getAttribute("data-lng"))) });
//                             i.extend(o.position),
//                                 u.push(o),
//                                 s(r, a, o, n),
//                                 e.addEventListener("click", function () {
//                                     google.maps.event.trigger(u[t], "click");
//                                 });
//                         }),
//                         r.fitBounds(i);
//                 }
//                 var s = function (e, t, n, o) {
//                     google.maps.event.addListener(n, "click", function () {
//                         t.setContent("\n\t\t\t<div class='map-markers'>\n\t\t\t\t<h3>" + o.title + "</h3>\n\t\t\t\t<p>" + o.address + "</p>\n\t\t\t\t<p>" + o.phone + "</p>\n\t\t\t</div>\n\t\t"),
//                             t.open(e, n),
//                             e.panTo(n.getPosition()),
//                             e.setZoom(12);
//                     }),
//                         google.maps.event.addListener(e, "click", function () {
//                             t.close();
//                         });
//                 },
//                     d = function (e, t) {
//                         var n,
//                             o,
//                             r = t.getAttribute("name");
//                         "address" === r
//                             ? d(e, document.querySelector(".introMap__input select[name='country']"))
//                             : "country" === r
//                                 ? (document.querySelectorAll(".introMap__input select[name='city'] option").forEach(function (e) {
//                                     e.getAttribute("data-country") == t.value ? (e.hidden = !1) : "0" == e.value || ((e.hidden = !0), (document.querySelector(".introMap__input select[name='city']").value = "0"));
//                                 }),
//                                     d(e, document.querySelector(".introMap__input select[name='city']")))
//                                 : "city" === r
//                                     ? (document.querySelectorAll(".introMap__input select[name='district'] option").forEach(function (e) {
//                                         e.getAttribute("data-city") == t.value ? (e.hidden = !1) : "0" == e.value || ((e.hidden = !0), (document.querySelector(".introMap__input select[name='district']").value = "0"));
//                                     }),
//                                         d(e, document.querySelector(".introMap__input select[name='district']")))
//                                     : (0 == Number(t.value)
//                                         ? 0 == (o = Number(document.querySelector(".introMap__input select[name='city']").value))
//                                             ? ((r = Number(document.querySelector(".introMap__input select[name='country']").value)),
//                                                 (n = !0),
//                                                 document.querySelectorAll(".introMap__input select[name='city'] option[data-country='" + r + "']").forEach(function (e) {
//                                                     document.querySelectorAll(".introMap__input select[name='district'] option[data-city='" + e.value + "']").forEach(function (e, t) {
//                                                         p(e.value, n), (n = n && !n);
//                                                     });
//                                                 }))
//                                             : 0 < (o = document.querySelectorAll(".introMap__input select[name='district'] option[data-city='" + o + "']")).length
//                                                 ? o.forEach(function (e, t) {
//                                                     p(e.value, 0 == t);
//                                                 })
//                                                 : p(t.value, !0)
//                                         : p(document.querySelector(".introMap__input select[name='district'] option[value='" + Number(t.value) + "']").value, !0),
//                                         l(e));
//                     },
//                     p = function (t, n) {
//                         var o = document.querySelector(".introMap__input input[name='address']").value;
//                         document.querySelectorAll(".introMap__list ul li").forEach(function (e) {
//                             n && e.classList.add("d-none"), e.getAttribute("data-district") != t || ("" != o && !e.querySelector(".location").innerHTML.includes(o)) || e.classList.remove("d-none");
//                         });
//                     };
//                 o.debounce = function (n, o) {
//                     var r = null;
//                     return function () {
//                         for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
//                         null !== r && (clearTimeout(r), (r = null)),
//                             (r = setTimeout(function () {
//                                 return n.apply(void 0, e);
//                             }, o));
//                     };
//                 };
//                 function m() {
//                     var e, t, n;
//                     document.querySelector("#map") &&
//                         ((e = new google.maps.Map(document.querySelector("#map"), c)),
//                             document.querySelector(".introMap__search")
//                                 ? ((n = e),
//                                     document.querySelectorAll(".introMap__input select").forEach(function (t, e) {
//                                         t.addEventListener("change", function (e) {
//                                             d(n, t);
//                                         });
//                                     }),
//                                     document.querySelector(".introMap__input input[name='address']").addEventListener(
//                                         "keyup",
//                                         o.debounce(function (e) {
//                                             d(n, e.target);
//                                         }, 2e3)
//                                     ),
//                                     d(e, document.querySelector(".introMap__input select[name='country']")))
//                                 : l(e),
//                             (t = google.maps.event.addListener(e, "idle", function () {
//                                 12 < e.getZoom() && e.setZoom(12), google.maps.event.removeListener(t);
//                             })));
//                 }
//                 document.addEventListener("DOMContentLoaded", function () {
//                     return n(void 0, void 0, void 0, function () {
//                         return r(this, function (e) {
//                             return google.maps.event.addDomListener(window, "load", m), [2];
//                         });
//                     });
//                 });
//             },
//             {},
//         ],
//     },
//     {},
//     [1]
// );
