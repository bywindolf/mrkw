"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-use-measure@2.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1";
exports.ids = ["vendor-chunks/react-use-measure@2.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/react-use-measure@2.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-use-measure/dist/index.js":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-use-measure@2.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-use-measure/dist/index.js ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ j)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js\");\nfunction g(n,t){let o;return(...i)=>{window.clearTimeout(o),o=window.setTimeout(()=>n(...i),t)}}function j({debounce:n,scroll:t,polyfill:o,offsetSize:i}={debounce:0,scroll:!1,offsetSize:!1}){const a=o||(typeof window==\"undefined\"?class{}:window.ResizeObserver);if(!a)throw new Error(\"This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills\");const[c,h]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0}),e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({element:null,scrollContainers:null,resizeObserver:null,lastBounds:c,orientationHandler:null}),d=n?typeof n==\"number\"?n:n.scroll:null,f=n?typeof n==\"number\"?n:n.resize:null,w=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>(w.current=!0,()=>void(w.current=!1)));const[z,m,s]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{const r=()=>{if(!e.current.element)return;const{left:y,top:C,width:H,height:O,bottom:S,right:x,x:B,y:R}=e.current.element.getBoundingClientRect(),l={left:y,top:C,width:H,height:O,bottom:S,right:x,x:B,y:R};e.current.element instanceof HTMLElement&&i&&(l.height=e.current.element.offsetHeight,l.width=e.current.element.offsetWidth),Object.freeze(l),w.current&&!D(e.current.lastBounds,l)&&h(e.current.lastBounds=l)};return[r,f?g(r,f):r,d?g(r,d):r]},[h,i,d,f]);function v(){e.current.scrollContainers&&(e.current.scrollContainers.forEach(r=>r.removeEventListener(\"scroll\",s,!0)),e.current.scrollContainers=null),e.current.resizeObserver&&(e.current.resizeObserver.disconnect(),e.current.resizeObserver=null),e.current.orientationHandler&&(\"orientation\"in screen&&\"removeEventListener\"in screen.orientation?screen.orientation.removeEventListener(\"change\",e.current.orientationHandler):\"onorientationchange\"in window&&window.removeEventListener(\"orientationchange\",e.current.orientationHandler))}function b(){e.current.element&&(e.current.resizeObserver=new a(s),e.current.resizeObserver.observe(e.current.element),t&&e.current.scrollContainers&&e.current.scrollContainers.forEach(r=>r.addEventListener(\"scroll\",s,{capture:!0,passive:!0})),e.current.orientationHandler=()=>{s()},\"orientation\"in screen&&\"addEventListener\"in screen.orientation?screen.orientation.addEventListener(\"change\",e.current.orientationHandler):\"onorientationchange\"in window&&window.addEventListener(\"orientationchange\",e.current.orientationHandler))}const L=r=>{!r||r===e.current.element||(v(),e.current.element=r,e.current.scrollContainers=E(r),b())};return X(s,!!t),W(m),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{v(),b()},[t,s,m]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>v,[]),[L,c,z]}function W(n){(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{const t=n;return window.addEventListener(\"resize\",t),()=>void window.removeEventListener(\"resize\",t)},[n])}function X(n,t){(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(t){const o=n;return window.addEventListener(\"scroll\",o,{capture:!0,passive:!0}),()=>void window.removeEventListener(\"scroll\",o,!0)}},[n,t])}function E(n){const t=[];if(!n||n===document.body)return t;const{overflow:o,overflowX:i,overflowY:a}=window.getComputedStyle(n);return[o,i,a].some(c=>c===\"auto\"||c===\"scroll\")&&t.push(n),[...t,...E(n.parentElement)]}const k=[\"x\",\"y\",\"top\",\"bottom\",\"left\",\"right\",\"width\",\"height\"],D=(n,t)=>k.every(o=>n[o]===t[o]);\n//# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vcmVhY3QtdXNlLW1lYXN1cmVAMi4xLjdfcmVhY3QtZG9tQDE4LjMuMV9yZWFjdEAxOC4zLjFfX3JlYWN0QDE4LjMuMS9ub2RlX21vZHVsZXMvcmVhY3QtdXNlLW1lYXN1cmUvZGlzdC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF5RSxnQkFBZ0IsTUFBTSxlQUFlLDJEQUEyRCxZQUFZLDRDQUE0QyxFQUFFLG1DQUFtQyxFQUFFLDhDQUE4Qyx3QkFBd0Isd0tBQXdLLFdBQVcsK0NBQUMsRUFBRSx1REFBdUQsSUFBSSw2Q0FBQyxFQUFFLDRGQUE0RixrRkFBa0YsNkNBQUMsS0FBSyxnREFBQyw0Q0FBNEMsYUFBYSw4Q0FBQyxNQUFNLGFBQWEsNkJBQTZCLE1BQU0sdURBQXVELDhDQUE4Qyx3REFBd0QsZ05BQWdOLGdDQUFnQyxZQUFZLGFBQWEsd2dCQUF3Z0IsYUFBYSw4TUFBOE0sc0JBQXNCLHFDQUFxQyxJQUFJLHVQQUF1UCxZQUFZLDBGQUEwRixxQkFBcUIsZ0RBQUMsTUFBTSxRQUFRLFVBQVUsZ0RBQUMsbUJBQW1CLGNBQWMsZ0RBQUMsTUFBTSxVQUFVLDJGQUEyRixNQUFNLGdCQUFnQixnREFBQyxNQUFNLE1BQU0sVUFBVSwyQ0FBMkMsc0JBQXNCLHNEQUFzRCxRQUFRLGNBQWMsV0FBVyxrQ0FBa0MsTUFBTSxtQ0FBbUMsNEJBQTRCLHdGQUF3RixrR0FBdUg7QUFDbmtHIiwic291cmNlcyI6WyIvVXNlcnMva3Jpc3RvZmZlcndpbmRvbGYvU2l0ZXMvbXJrdy9ub2RlX21vZHVsZXMvLnBucG0vcmVhY3QtdXNlLW1lYXN1cmVAMi4xLjdfcmVhY3QtZG9tQDE4LjMuMV9yZWFjdEAxOC4zLjFfX3JlYWN0QDE4LjMuMS9ub2RlX21vZHVsZXMvcmVhY3QtdXNlLW1lYXN1cmUvZGlzdC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnR7dXNlU3RhdGUgYXMgVCx1c2VSZWYgYXMgcCx1c2VFZmZlY3QgYXMgdSx1c2VNZW1vIGFzIE19ZnJvbVwicmVhY3RcIjtmdW5jdGlvbiBnKG4sdCl7bGV0IG87cmV0dXJuKC4uLmkpPT57d2luZG93LmNsZWFyVGltZW91dChvKSxvPXdpbmRvdy5zZXRUaW1lb3V0KCgpPT5uKC4uLmkpLHQpfX1mdW5jdGlvbiBqKHtkZWJvdW5jZTpuLHNjcm9sbDp0LHBvbHlmaWxsOm8sb2Zmc2V0U2l6ZTppfT17ZGVib3VuY2U6MCxzY3JvbGw6ITEsb2Zmc2V0U2l6ZTohMX0pe2NvbnN0IGE9b3x8KHR5cGVvZiB3aW5kb3c9PVwidW5kZWZpbmVkXCI/Y2xhc3N7fTp3aW5kb3cuUmVzaXplT2JzZXJ2ZXIpO2lmKCFhKXRocm93IG5ldyBFcnJvcihcIlRoaXMgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IFJlc2l6ZU9ic2VydmVyIG91dCBvZiB0aGUgYm94LiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdC1zcHJpbmcvcmVhY3QtdXNlLW1lYXN1cmUvI3Jlc2l6ZS1vYnNlcnZlci1wb2x5ZmlsbHNcIik7Y29uc3RbYyxoXT1UKHtsZWZ0OjAsdG9wOjAsd2lkdGg6MCxoZWlnaHQ6MCxib3R0b206MCxyaWdodDowLHg6MCx5OjB9KSxlPXAoe2VsZW1lbnQ6bnVsbCxzY3JvbGxDb250YWluZXJzOm51bGwscmVzaXplT2JzZXJ2ZXI6bnVsbCxsYXN0Qm91bmRzOmMsb3JpZW50YXRpb25IYW5kbGVyOm51bGx9KSxkPW4/dHlwZW9mIG49PVwibnVtYmVyXCI/bjpuLnNjcm9sbDpudWxsLGY9bj90eXBlb2Ygbj09XCJudW1iZXJcIj9uOm4ucmVzaXplOm51bGwsdz1wKCExKTt1KCgpPT4ody5jdXJyZW50PSEwLCgpPT52b2lkKHcuY3VycmVudD0hMSkpKTtjb25zdFt6LG0sc109TSgoKT0+e2NvbnN0IHI9KCk9PntpZighZS5jdXJyZW50LmVsZW1lbnQpcmV0dXJuO2NvbnN0e2xlZnQ6eSx0b3A6Qyx3aWR0aDpILGhlaWdodDpPLGJvdHRvbTpTLHJpZ2h0OngseDpCLHk6Un09ZS5jdXJyZW50LmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksbD17bGVmdDp5LHRvcDpDLHdpZHRoOkgsaGVpZ2h0Ok8sYm90dG9tOlMscmlnaHQ6eCx4OkIseTpSfTtlLmN1cnJlbnQuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50JiZpJiYobC5oZWlnaHQ9ZS5jdXJyZW50LmVsZW1lbnQub2Zmc2V0SGVpZ2h0LGwud2lkdGg9ZS5jdXJyZW50LmVsZW1lbnQub2Zmc2V0V2lkdGgpLE9iamVjdC5mcmVlemUobCksdy5jdXJyZW50JiYhRChlLmN1cnJlbnQubGFzdEJvdW5kcyxsKSYmaChlLmN1cnJlbnQubGFzdEJvdW5kcz1sKX07cmV0dXJuW3IsZj9nKHIsZik6cixkP2cocixkKTpyXX0sW2gsaSxkLGZdKTtmdW5jdGlvbiB2KCl7ZS5jdXJyZW50LnNjcm9sbENvbnRhaW5lcnMmJihlLmN1cnJlbnQuc2Nyb2xsQ29udGFpbmVycy5mb3JFYWNoKHI9PnIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLHMsITApKSxlLmN1cnJlbnQuc2Nyb2xsQ29udGFpbmVycz1udWxsKSxlLmN1cnJlbnQucmVzaXplT2JzZXJ2ZXImJihlLmN1cnJlbnQucmVzaXplT2JzZXJ2ZXIuZGlzY29ubmVjdCgpLGUuY3VycmVudC5yZXNpemVPYnNlcnZlcj1udWxsKSxlLmN1cnJlbnQub3JpZW50YXRpb25IYW5kbGVyJiYoXCJvcmllbnRhdGlvblwiaW4gc2NyZWVuJiZcInJlbW92ZUV2ZW50TGlzdGVuZXJcImluIHNjcmVlbi5vcmllbnRhdGlvbj9zY3JlZW4ub3JpZW50YXRpb24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLGUuY3VycmVudC5vcmllbnRhdGlvbkhhbmRsZXIpOlwib25vcmllbnRhdGlvbmNoYW5nZVwiaW4gd2luZG93JiZ3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm9yaWVudGF0aW9uY2hhbmdlXCIsZS5jdXJyZW50Lm9yaWVudGF0aW9uSGFuZGxlcikpfWZ1bmN0aW9uIGIoKXtlLmN1cnJlbnQuZWxlbWVudCYmKGUuY3VycmVudC5yZXNpemVPYnNlcnZlcj1uZXcgYShzKSxlLmN1cnJlbnQucmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZShlLmN1cnJlbnQuZWxlbWVudCksdCYmZS5jdXJyZW50LnNjcm9sbENvbnRhaW5lcnMmJmUuY3VycmVudC5zY3JvbGxDb250YWluZXJzLmZvckVhY2gocj0+ci5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIscyx7Y2FwdHVyZTohMCxwYXNzaXZlOiEwfSkpLGUuY3VycmVudC5vcmllbnRhdGlvbkhhbmRsZXI9KCk9PntzKCl9LFwib3JpZW50YXRpb25cImluIHNjcmVlbiYmXCJhZGRFdmVudExpc3RlbmVyXCJpbiBzY3JlZW4ub3JpZW50YXRpb24/c2NyZWVuLm9yaWVudGF0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIixlLmN1cnJlbnQub3JpZW50YXRpb25IYW5kbGVyKTpcIm9ub3JpZW50YXRpb25jaGFuZ2VcImluIHdpbmRvdyYmd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvcmllbnRhdGlvbmNoYW5nZVwiLGUuY3VycmVudC5vcmllbnRhdGlvbkhhbmRsZXIpKX1jb25zdCBMPXI9Pnshcnx8cj09PWUuY3VycmVudC5lbGVtZW50fHwodigpLGUuY3VycmVudC5lbGVtZW50PXIsZS5jdXJyZW50LnNjcm9sbENvbnRhaW5lcnM9RShyKSxiKCkpfTtyZXR1cm4gWChzLCEhdCksVyhtKSx1KCgpPT57digpLGIoKX0sW3QscyxtXSksdSgoKT0+dixbXSksW0wsYyx6XX1mdW5jdGlvbiBXKG4pe3UoKCk9Pntjb25zdCB0PW47cmV0dXJuIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsdCksKCk9PnZvaWQgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIix0KX0sW25dKX1mdW5jdGlvbiBYKG4sdCl7dSgoKT0+e2lmKHQpe2NvbnN0IG89bjtyZXR1cm4gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIixvLHtjYXB0dXJlOiEwLHBhc3NpdmU6ITB9KSwoKT0+dm9pZCB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLG8sITApfX0sW24sdF0pfWZ1bmN0aW9uIEUobil7Y29uc3QgdD1bXTtpZighbnx8bj09PWRvY3VtZW50LmJvZHkpcmV0dXJuIHQ7Y29uc3R7b3ZlcmZsb3c6byxvdmVyZmxvd1g6aSxvdmVyZmxvd1k6YX09d2luZG93LmdldENvbXB1dGVkU3R5bGUobik7cmV0dXJuW28saSxhXS5zb21lKGM9PmM9PT1cImF1dG9cInx8Yz09PVwic2Nyb2xsXCIpJiZ0LnB1c2gobiksWy4uLnQsLi4uRShuLnBhcmVudEVsZW1lbnQpXX1jb25zdCBrPVtcInhcIixcInlcIixcInRvcFwiLFwiYm90dG9tXCIsXCJsZWZ0XCIsXCJyaWdodFwiLFwid2lkdGhcIixcImhlaWdodFwiXSxEPShuLHQpPT5rLmV2ZXJ5KG89Pm5bb109PT10W29dKTtleHBvcnR7aiBhcyBkZWZhdWx0fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/react-use-measure@2.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-use-measure/dist/index.js\n");

/***/ })

};
;