"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@tiptap+extension-dropcursor@2.11.7_@tiptap+core@2.11.5_@tiptap+pm@2.11.5__@tiptap+pm@2.11.5";
exports.ids = ["vendor-chunks/@tiptap+extension-dropcursor@2.11.7_@tiptap+core@2.11.5_@tiptap+pm@2.11.5__@tiptap+pm@2.11.5"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@tiptap+extension-dropcursor@2.11.7_@tiptap+core@2.11.5_@tiptap+pm@2.11.5__@tiptap+pm@2.11.5/node_modules/@tiptap/extension-dropcursor/dist/index.js":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@tiptap+extension-dropcursor@2.11.7_@tiptap+core@2.11.5_@tiptap+pm@2.11.5__@tiptap+pm@2.11.5/node_modules/@tiptap/extension-dropcursor/dist/index.js ***!
  \*********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Dropcursor: () => (/* binding */ Dropcursor),\n/* harmony export */   \"default\": () => (/* binding */ Dropcursor)\n/* harmony export */ });\n/* harmony import */ var _tiptap_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tiptap/core */ \"(ssr)/./node_modules/.pnpm/@tiptap+core@2.11.5_@tiptap+pm@2.11.5/node_modules/@tiptap/core/dist/index.js\");\n/* harmony import */ var _tiptap_pm_dropcursor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tiptap/pm/dropcursor */ \"(ssr)/./node_modules/.pnpm/@tiptap+pm@2.11.5/node_modules/@tiptap/pm/dropcursor/dist/index.js\");\n\n\n\n/**\n * This extension allows you to add a drop cursor to your editor.\n * A drop cursor is a line that appears when you drag and drop content\n * inbetween nodes.\n * @see https://tiptap.dev/api/extensions/dropcursor\n */\nconst Dropcursor = _tiptap_core__WEBPACK_IMPORTED_MODULE_1__.Extension.create({\n    name: 'dropCursor',\n    addOptions() {\n        return {\n            color: 'currentColor',\n            width: 1,\n            class: undefined,\n        };\n    },\n    addProseMirrorPlugins() {\n        return [\n            (0,_tiptap_pm_dropcursor__WEBPACK_IMPORTED_MODULE_0__.dropCursor)(this.options),\n        ];\n    },\n});\n\n\n//# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHRpcHRhcCtleHRlbnNpb24tZHJvcGN1cnNvckAyLjExLjdfQHRpcHRhcCtjb3JlQDIuMTEuNV9AdGlwdGFwK3BtQDIuMTEuNV9fQHRpcHRhcCtwbUAyLjExLjUvbm9kZV9tb2R1bGVzL0B0aXB0YXAvZXh0ZW5zaW9uLWRyb3BjdXJzb3IvZGlzdC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXlDO0FBQ1U7O0FBRW5EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtREFBUztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWSxpRUFBVTtBQUN0QjtBQUNBLEtBQUs7QUFDTCxDQUFDOztBQUU0QztBQUM3QyIsInNvdXJjZXMiOlsiL1VzZXJzL2tyaXN0b2ZmZXJ3aW5kb2xmL1NpdGVzL21ya3cvbm9kZV9tb2R1bGVzLy5wbnBtL0B0aXB0YXArZXh0ZW5zaW9uLWRyb3BjdXJzb3JAMi4xMS43X0B0aXB0YXArY29yZUAyLjExLjVfQHRpcHRhcCtwbUAyLjExLjVfX0B0aXB0YXArcG1AMi4xMS41L25vZGVfbW9kdWxlcy9AdGlwdGFwL2V4dGVuc2lvbi1kcm9wY3Vyc29yL2Rpc3QvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXh0ZW5zaW9uIH0gZnJvbSAnQHRpcHRhcC9jb3JlJztcbmltcG9ydCB7IGRyb3BDdXJzb3IgfSBmcm9tICdAdGlwdGFwL3BtL2Ryb3BjdXJzb3InO1xuXG4vKipcbiAqIFRoaXMgZXh0ZW5zaW9uIGFsbG93cyB5b3UgdG8gYWRkIGEgZHJvcCBjdXJzb3IgdG8geW91ciBlZGl0b3IuXG4gKiBBIGRyb3AgY3Vyc29yIGlzIGEgbGluZSB0aGF0IGFwcGVhcnMgd2hlbiB5b3UgZHJhZyBhbmQgZHJvcCBjb250ZW50XG4gKiBpbmJldHdlZW4gbm9kZXMuXG4gKiBAc2VlIGh0dHBzOi8vdGlwdGFwLmRldi9hcGkvZXh0ZW5zaW9ucy9kcm9wY3Vyc29yXG4gKi9cbmNvbnN0IERyb3BjdXJzb3IgPSBFeHRlbnNpb24uY3JlYXRlKHtcbiAgICBuYW1lOiAnZHJvcEN1cnNvcicsXG4gICAgYWRkT3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvbG9yOiAnY3VycmVudENvbG9yJyxcbiAgICAgICAgICAgIHdpZHRoOiAxLFxuICAgICAgICAgICAgY2xhc3M6IHVuZGVmaW5lZCxcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIGFkZFByb3NlTWlycm9yUGx1Z2lucygpIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIGRyb3BDdXJzb3IodGhpcy5vcHRpb25zKSxcbiAgICAgICAgXTtcbiAgICB9LFxufSk7XG5cbmV4cG9ydCB7IERyb3BjdXJzb3IsIERyb3BjdXJzb3IgYXMgZGVmYXVsdCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@tiptap+extension-dropcursor@2.11.7_@tiptap+core@2.11.5_@tiptap+pm@2.11.5__@tiptap+pm@2.11.5/node_modules/@tiptap/extension-dropcursor/dist/index.js\n");

/***/ })

};
;