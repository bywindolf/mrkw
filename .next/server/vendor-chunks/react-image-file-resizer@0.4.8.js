/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-image-file-resizer@0.4.8";
exports.ids = ["vendor-chunks/react-image-file-resizer@0.4.8"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/react-image-file-resizer@0.4.8/node_modules/react-image-file-resizer/build/index.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-image-file-resizer@0.4.8/node_modules/react-image-file-resizer/build/index.js ***!
  \****************************************************************************************************************/
/***/ ((module) => {

eval("(()=>{\"use strict\";var e={d:(t,a)=>{for(var r in a)e.o(a,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:a[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{\"undefined\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(e,\"__esModule\",{value:!0})}},t={};function a(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,\"value\"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.r(t),e.d(t,{default:()=>n});var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError(\"Cannot call a class as a function\")}(this,e)}var t,r;return t=e,r=[{key:\"changeHeightWidth\",value:function(e,t,a,r,n,i){return a>r&&(e=Math.round(e*r/a),a=r),e>t&&(a=Math.round(a*t/e),e=t),n&&a<n&&(e=Math.round(e*n/a),a=n),i&&e<i&&(a=Math.round(a*i/e),e=i),{height:e,width:a}}},{key:\"resizeAndRotateImage\",value:function(e,t,a,r,n){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:\"jpeg\",o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:100,l=arguments.length>7&&void 0!==arguments[7]?arguments[7]:0,h=o/100,g=document.createElement(\"canvas\"),u=e.width,d=e.height,c=this.changeHeightWidth(d,a,u,t,r,n);!l||90!==l&&270!==l?(g.width=c.width,g.height=c.height):(g.width=c.height,g.height=c.width),u=c.width,d=c.height;var s=g.getContext(\"2d\");return s.fillStyle=\"rgba(0, 0, 0, 0)\",s.fillRect(0,0,u,d),s.imageSmoothingEnabled&&s.imageSmoothingQuality&&(s.imageSmoothingQuality=\"high\"),l&&(s.rotate(l*Math.PI/180),90===l?s.translate(0,-g.width):180===l?s.translate(-g.width,-g.height):270===l?s.translate(-g.height,0):0!==l&&360!==l||s.translate(0,0)),s.drawImage(e,0,0,u,d),g.toDataURL(\"image/\".concat(i),h)}},{key:\"b64toByteArrays\",value:function(e,t){t=t||\"image/jpeg\";for(var a=atob(e.toString().replace(/^data:image\\/(png|jpeg|jpg|webp);base64,/,\"\")),r=[],n=0;n<a.length;n+=512){for(var i=a.slice(n,n+512),o=new Array(i.length),l=0;l<i.length;l++)o[l]=i.charCodeAt(l);var h=new Uint8Array(o);r.push(h)}return r}},{key:\"b64toBlob\",value:function(e,t){var a=this.b64toByteArrays(e,t);return new Blob(a,{type:t,lastModified:new Date})}},{key:\"b64toFile\",value:function(e,t,a){var r=this.b64toByteArrays(e,a);return new File(r,t,{type:a,lastModified:new Date})}},{key:\"createResizedImage\",value:function(t,a,r,n,i,o,l){var h=arguments.length>7&&void 0!==arguments[7]?arguments[7]:\"base64\",g=arguments.length>8&&void 0!==arguments[8]?arguments[8]:null,u=arguments.length>9&&void 0!==arguments[9]?arguments[9]:null,d=new FileReader;if(!t)throw Error(\"File Not Found!\");if(t.type&&!t.type.includes(\"image\"))throw Error(\"File Is NOT Image!\");d.readAsDataURL(t),d.onload=function(){var c=new Image;c.src=d.result,c.onload=function(){var d=e.resizeAndRotateImage(c,a,r,g,u,n,i,o),s=\"image/\".concat(n);switch(h){case\"blob\":var f=e.b64toBlob(d,s);l(f);break;case\"base64\":l(d);break;case\"file\":var b=t.name.toString().replace(/(png|jpeg|jpg|webp)$/i,\"\").concat(n.toString()),v=e.b64toFile(d,b,s);l(v);break;default:l(d)}}},d.onerror=function(e){throw Error(e)}}}],null&&0,r&&a(t,r),e}();const n={imageFileResizer:function(e,t,a,n,i,o,l,h,g,u){return r.createResizedImage(e,t,a,n,i,o,l,h,g,u)}};module.exports=t})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vcmVhY3QtaW1hZ2UtZmlsZS1yZXNpemVyQDAuNC44L25vZGVfbW9kdWxlcy9yZWFjdC1pbWFnZS1maWxlLXJlc2l6ZXIvYnVpbGQvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxhQUFhLE9BQU8sVUFBVSwrREFBK0QsdUJBQXVCLEVBQUUsMERBQTBELDRGQUE0RixlQUFlLHdDQUF3QyxTQUFTLEdBQUcsTUFBTSxnQkFBZ0IsWUFBWSxXQUFXLEtBQUssV0FBVywrR0FBK0csY0FBYyxjQUFjLEVBQUUsaUJBQWlCLGFBQWEsZUFBZSw4RUFBOEUsU0FBUyxRQUFRLGVBQWUsb0RBQW9ELDBJQUEwSSxtQkFBbUIsRUFBRSxxREFBcUQsa1NBQWtTLGlIQUFpSCx5QkFBeUIsNldBQTZXLEVBQUUsMENBQTBDLGtCQUFrQixzRUFBc0UsdUJBQXVCLFdBQVcsUUFBUSxxREFBcUQsV0FBVyx5QkFBeUIsd0JBQXdCLFVBQVUsVUFBVSxFQUFFLG9DQUFvQyxnQ0FBZ0MsbUJBQW1CLDZCQUE2QixHQUFHLEVBQUUsc0NBQXNDLGdDQUFnQyxxQkFBcUIsNkJBQTZCLEdBQUcsRUFBRSx1REFBdUQsbU5BQW1OLHFDQUFxQyx1RUFBdUUsdUNBQXVDLGdCQUFnQixtQ0FBbUMsbUVBQW1FLFVBQVUsa0NBQWtDLEtBQUssTUFBTSxrQkFBa0IsTUFBTSxpSEFBaUgsS0FBSyxNQUFNLGVBQWUsdUJBQXVCLGlCQUFpQixRQUFRLENBQW1CLGFBQWEsR0FBRyxTQUFTLCtDQUErQyxtREFBbUQsaUJBQWlCIiwic291cmNlcyI6WyIvVXNlcnMva3Jpc3RvZmZlcndpbmRvbGYvU2l0ZXMvbXJrdy9ub2RlX21vZHVsZXMvLnBucG0vcmVhY3QtaW1hZ2UtZmlsZS1yZXNpemVyQDAuNC44L25vZGVfbW9kdWxlcy9yZWFjdC1pbWFnZS1maWxlLXJlc2l6ZXIvYnVpbGQvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiKCgpPT57XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9e2Q6KHQsYSk9Pntmb3IodmFyIHIgaW4gYSllLm8oYSxyKSYmIWUubyh0LHIpJiZPYmplY3QuZGVmaW5lUHJvcGVydHkodCxyLHtlbnVtZXJhYmxlOiEwLGdldDphW3JdfSl9LG86KGUsdCk9Pk9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHQpLHI6ZT0+e1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9fSx0PXt9O2Z1bmN0aW9uIGEoZSx0KXtmb3IodmFyIGE9MDthPHQubGVuZ3RoO2ErKyl7dmFyIHI9dFthXTtyLmVudW1lcmFibGU9ci5lbnVtZXJhYmxlfHwhMSxyLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiByJiYoci53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsci5rZXkscil9fWUucih0KSxlLmQodCx7ZGVmYXVsdDooKT0+bn0pO3ZhciByPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSgpeyFmdW5jdGlvbihlLHQpe2lmKCEoZSBpbnN0YW5jZW9mIHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9KHRoaXMsZSl9dmFyIHQscjtyZXR1cm4gdD1lLHI9W3trZXk6XCJjaGFuZ2VIZWlnaHRXaWR0aFwiLHZhbHVlOmZ1bmN0aW9uKGUsdCxhLHIsbixpKXtyZXR1cm4gYT5yJiYoZT1NYXRoLnJvdW5kKGUqci9hKSxhPXIpLGU+dCYmKGE9TWF0aC5yb3VuZChhKnQvZSksZT10KSxuJiZhPG4mJihlPU1hdGgucm91bmQoZSpuL2EpLGE9biksaSYmZTxpJiYoYT1NYXRoLnJvdW5kKGEqaS9lKSxlPWkpLHtoZWlnaHQ6ZSx3aWR0aDphfX19LHtrZXk6XCJyZXNpemVBbmRSb3RhdGVJbWFnZVwiLHZhbHVlOmZ1bmN0aW9uKGUsdCxhLHIsbil7dmFyIGk9YXJndW1lbnRzLmxlbmd0aD41JiZ2b2lkIDAhPT1hcmd1bWVudHNbNV0/YXJndW1lbnRzWzVdOlwianBlZ1wiLG89YXJndW1lbnRzLmxlbmd0aD42JiZ2b2lkIDAhPT1hcmd1bWVudHNbNl0/YXJndW1lbnRzWzZdOjEwMCxsPWFyZ3VtZW50cy5sZW5ndGg+NyYmdm9pZCAwIT09YXJndW1lbnRzWzddP2FyZ3VtZW50c1s3XTowLGg9by8xMDAsZz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpLHU9ZS53aWR0aCxkPWUuaGVpZ2h0LGM9dGhpcy5jaGFuZ2VIZWlnaHRXaWR0aChkLGEsdSx0LHIsbik7IWx8fDkwIT09bCYmMjcwIT09bD8oZy53aWR0aD1jLndpZHRoLGcuaGVpZ2h0PWMuaGVpZ2h0KTooZy53aWR0aD1jLmhlaWdodCxnLmhlaWdodD1jLndpZHRoKSx1PWMud2lkdGgsZD1jLmhlaWdodDt2YXIgcz1nLmdldENvbnRleHQoXCIyZFwiKTtyZXR1cm4gcy5maWxsU3R5bGU9XCJyZ2JhKDAsIDAsIDAsIDApXCIscy5maWxsUmVjdCgwLDAsdSxkKSxzLmltYWdlU21vb3RoaW5nRW5hYmxlZCYmcy5pbWFnZVNtb290aGluZ1F1YWxpdHkmJihzLmltYWdlU21vb3RoaW5nUXVhbGl0eT1cImhpZ2hcIiksbCYmKHMucm90YXRlKGwqTWF0aC5QSS8xODApLDkwPT09bD9zLnRyYW5zbGF0ZSgwLC1nLndpZHRoKToxODA9PT1sP3MudHJhbnNsYXRlKC1nLndpZHRoLC1nLmhlaWdodCk6MjcwPT09bD9zLnRyYW5zbGF0ZSgtZy5oZWlnaHQsMCk6MCE9PWwmJjM2MCE9PWx8fHMudHJhbnNsYXRlKDAsMCkpLHMuZHJhd0ltYWdlKGUsMCwwLHUsZCksZy50b0RhdGFVUkwoXCJpbWFnZS9cIi5jb25jYXQoaSksaCl9fSx7a2V5OlwiYjY0dG9CeXRlQXJyYXlzXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXt0PXR8fFwiaW1hZ2UvanBlZ1wiO2Zvcih2YXIgYT1hdG9iKGUudG9TdHJpbmcoKS5yZXBsYWNlKC9eZGF0YTppbWFnZVxcLyhwbmd8anBlZ3xqcGd8d2VicCk7YmFzZTY0LC8sXCJcIikpLHI9W10sbj0wO248YS5sZW5ndGg7bis9NTEyKXtmb3IodmFyIGk9YS5zbGljZShuLG4rNTEyKSxvPW5ldyBBcnJheShpLmxlbmd0aCksbD0wO2w8aS5sZW5ndGg7bCsrKW9bbF09aS5jaGFyQ29kZUF0KGwpO3ZhciBoPW5ldyBVaW50OEFycmF5KG8pO3IucHVzaChoKX1yZXR1cm4gcn19LHtrZXk6XCJiNjR0b0Jsb2JcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3ZhciBhPXRoaXMuYjY0dG9CeXRlQXJyYXlzKGUsdCk7cmV0dXJuIG5ldyBCbG9iKGEse3R5cGU6dCxsYXN0TW9kaWZpZWQ6bmV3IERhdGV9KX19LHtrZXk6XCJiNjR0b0ZpbGVcIix2YWx1ZTpmdW5jdGlvbihlLHQsYSl7dmFyIHI9dGhpcy5iNjR0b0J5dGVBcnJheXMoZSxhKTtyZXR1cm4gbmV3IEZpbGUocix0LHt0eXBlOmEsbGFzdE1vZGlmaWVkOm5ldyBEYXRlfSl9fSx7a2V5OlwiY3JlYXRlUmVzaXplZEltYWdlXCIsdmFsdWU6ZnVuY3Rpb24odCxhLHIsbixpLG8sbCl7dmFyIGg9YXJndW1lbnRzLmxlbmd0aD43JiZ2b2lkIDAhPT1hcmd1bWVudHNbN10/YXJndW1lbnRzWzddOlwiYmFzZTY0XCIsZz1hcmd1bWVudHMubGVuZ3RoPjgmJnZvaWQgMCE9PWFyZ3VtZW50c1s4XT9hcmd1bWVudHNbOF06bnVsbCx1PWFyZ3VtZW50cy5sZW5ndGg+OSYmdm9pZCAwIT09YXJndW1lbnRzWzldP2FyZ3VtZW50c1s5XTpudWxsLGQ9bmV3IEZpbGVSZWFkZXI7aWYoIXQpdGhyb3cgRXJyb3IoXCJGaWxlIE5vdCBGb3VuZCFcIik7aWYodC50eXBlJiYhdC50eXBlLmluY2x1ZGVzKFwiaW1hZ2VcIikpdGhyb3cgRXJyb3IoXCJGaWxlIElzIE5PVCBJbWFnZSFcIik7ZC5yZWFkQXNEYXRhVVJMKHQpLGQub25sb2FkPWZ1bmN0aW9uKCl7dmFyIGM9bmV3IEltYWdlO2Muc3JjPWQucmVzdWx0LGMub25sb2FkPWZ1bmN0aW9uKCl7dmFyIGQ9ZS5yZXNpemVBbmRSb3RhdGVJbWFnZShjLGEscixnLHUsbixpLG8pLHM9XCJpbWFnZS9cIi5jb25jYXQobik7c3dpdGNoKGgpe2Nhc2VcImJsb2JcIjp2YXIgZj1lLmI2NHRvQmxvYihkLHMpO2woZik7YnJlYWs7Y2FzZVwiYmFzZTY0XCI6bChkKTticmVhaztjYXNlXCJmaWxlXCI6dmFyIGI9dC5uYW1lLnRvU3RyaW5nKCkucmVwbGFjZSgvKHBuZ3xqcGVnfGpwZ3x3ZWJwKSQvaSxcIlwiKS5jb25jYXQobi50b1N0cmluZygpKSx2PWUuYjY0dG9GaWxlKGQsYixzKTtsKHYpO2JyZWFrO2RlZmF1bHQ6bChkKX19fSxkLm9uZXJyb3I9ZnVuY3Rpb24oZSl7dGhyb3cgRXJyb3IoZSl9fX1dLG51bGwmJmEodC5wcm90b3R5cGUsbnVsbCksciYmYSh0LHIpLGV9KCk7Y29uc3Qgbj17aW1hZ2VGaWxlUmVzaXplcjpmdW5jdGlvbihlLHQsYSxuLGksbyxsLGgsZyx1KXtyZXR1cm4gci5jcmVhdGVSZXNpemVkSW1hZ2UoZSx0LGEsbixpLG8sbCxoLGcsdSl9fTttb2R1bGUuZXhwb3J0cz10fSkoKTsiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/react-image-file-resizer@0.4.8/node_modules/react-image-file-resizer/build/index.js\n");

/***/ })

};
;