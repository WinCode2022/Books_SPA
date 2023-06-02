/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/booksList/booksList.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/booksList/booksList.css ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".books-list {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n\r\n  padding: 30px 0px 30px 0px;\r\n}\r\n\r\n.books-list__container {\r\n  max-width: 90%;\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(213px, 1fr));\r\n  grid-gap: 30px;\r\n  margin-bottom: 120px;\r\n}\r\n\r\n.book-list__item {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  flex-direction: column;\r\n  max-width: 300px;\r\n  min-height: 400px;\r\n  padding: 10px;\r\n  box-shadow: 0 16px 24px 2px rgba(33, 37, 41, 0.02),\r\n    0 6px 30px 5px rgba(33, 37, 41, 0.04), 0 8px 10px -5px rgba(33, 37, 41, 0.1);\r\n  background-color: #f8f9fa;\r\n  border-radius: 5px;\r\n  transition: 0.2s;\r\n}\r\n\r\n.book-list__item p {\r\n  text-align: center;\r\n  overflow: hidden;\r\n  /* word-break: break-word; */\r\n}\r\n\r\n.book-list__item__year__content {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color: #26a69a;\r\n  font-size: 30px;\r\n}\r\n\r\n.book-list__item__specific-year {\r\n  background-color: #f3e5f5;\r\n}\r\n\r\n.book-list__item__hover-style {\r\n  position: relative;\r\n}\r\n\r\n.book-list__item__hover-style:hover {\r\n  transform: scale(1.1);\r\n  transition: 0.2s;\r\n}\r\n.book-list__item__hover-style:hover .edit-delete {\r\n  transition: opacity 0.2s, height 0.2s;\r\n  opacity: 1;\r\n  overflow-y: visible;\r\n  visibility: visible;\r\n}\r\n.separator {\r\n  border-bottom: 1px solid rgba(83, 83, 83, 0.671);\r\n  margin-top: 30px;\r\n}\r\n\r\n.edit-delete {\r\n  /* display: none; */\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  opacity: 0;\r\n  margin-left: -10px;\r\n  overflow-y: hidden;\r\n  visibility: hidden;\r\n\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  backdrop-filter: blur(2px);\r\n  background-color: #ffccbc69;\r\n}\r\n\r\n.edit-delete button:not(:first-child) {\r\n  margin-top: 60px;\r\n}\r\n\r\n.edit-book-button {\r\n  background-color: #73d7e4f8;\r\n}\r\n\r\n.edit-book-button a {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: black;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.delete-book-button {\r\n  background-color: #fbb3a6f6;\r\n}\r\n\r\n.edit-delete button {\r\n  width: 120px;\r\n  height: 60px;\r\n  border-radius: 5px;\r\n  box-shadow: 0 16px 24px 2px rgba(33, 37, 41, 0.02),\r\n    0 6px 30px 5px rgba(33, 37, 41, 0.04), 0 8px 10px -5px rgba(33, 37, 41, 0.1);\r\n  cursor: pointer;\r\n  font-size: 15px;\r\n  transition: 0.2s;\r\n}\r\n\r\n.edit-delete button:hover {\r\n  transform: scale(1.1);\r\n  transition: 0.2s;\r\n}\r\n\r\n\r\n.book-item-span{\r\n  color: rgb(3, 76, 141);\r\n}\r\n\r\n.thumbnail{\r\n  width: 128px;\r\n  height: 190px;\r\n}\r\n\r\n.book-list__item__img-container{\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}", "",{"version":3,"sources":["webpack://./src/booksList/booksList.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;;EAEtB,0BAA0B;AAC5B;;AAEA;EACE,cAAc;EACd,aAAa;EACb,2DAA2D;EAC3D,cAAc;EACd,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,sBAAsB;EACtB,gBAAgB;EAChB,iBAAiB;EACjB,aAAa;EACb;gFAC8E;EAC9E,yBAAyB;EACzB,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,gBAAgB;AAClB;AACA;EACE,qCAAqC;EACrC,UAAU;EACV,mBAAmB;EACnB,mBAAmB;AACrB;AACA;EACE,gDAAgD;EAChD,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,sBAAsB;EACtB,UAAU;EACV,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;;EAElB,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,0BAA0B;EAC1B,2BAA2B;AAC7B;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,YAAY;AACd;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB;gFAC8E;EAC9E,eAAe;EACf,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;EACrB,gBAAgB;AAClB;;;AAGA;EACE,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB","sourcesContent":[".books-list {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n\r\n  padding: 30px 0px 30px 0px;\r\n}\r\n\r\n.books-list__container {\r\n  max-width: 90%;\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(213px, 1fr));\r\n  grid-gap: 30px;\r\n  margin-bottom: 120px;\r\n}\r\n\r\n.book-list__item {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  flex-direction: column;\r\n  max-width: 300px;\r\n  min-height: 400px;\r\n  padding: 10px;\r\n  box-shadow: 0 16px 24px 2px rgba(33, 37, 41, 0.02),\r\n    0 6px 30px 5px rgba(33, 37, 41, 0.04), 0 8px 10px -5px rgba(33, 37, 41, 0.1);\r\n  background-color: #f8f9fa;\r\n  border-radius: 5px;\r\n  transition: 0.2s;\r\n}\r\n\r\n.book-list__item p {\r\n  text-align: center;\r\n  overflow: hidden;\r\n  /* word-break: break-word; */\r\n}\r\n\r\n.book-list__item__year__content {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color: #26a69a;\r\n  font-size: 30px;\r\n}\r\n\r\n.book-list__item__specific-year {\r\n  background-color: #f3e5f5;\r\n}\r\n\r\n.book-list__item__hover-style {\r\n  position: relative;\r\n}\r\n\r\n.book-list__item__hover-style:hover {\r\n  transform: scale(1.1);\r\n  transition: 0.2s;\r\n}\r\n.book-list__item__hover-style:hover .edit-delete {\r\n  transition: opacity 0.2s, height 0.2s;\r\n  opacity: 1;\r\n  overflow-y: visible;\r\n  visibility: visible;\r\n}\r\n.separator {\r\n  border-bottom: 1px solid rgba(83, 83, 83, 0.671);\r\n  margin-top: 30px;\r\n}\r\n\r\n.edit-delete {\r\n  /* display: none; */\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  opacity: 0;\r\n  margin-left: -10px;\r\n  overflow-y: hidden;\r\n  visibility: hidden;\r\n\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  backdrop-filter: blur(2px);\r\n  background-color: #ffccbc69;\r\n}\r\n\r\n.edit-delete button:not(:first-child) {\r\n  margin-top: 60px;\r\n}\r\n\r\n.edit-book-button {\r\n  background-color: #73d7e4f8;\r\n}\r\n\r\n.edit-book-button a {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: black;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.delete-book-button {\r\n  background-color: #fbb3a6f6;\r\n}\r\n\r\n.edit-delete button {\r\n  width: 120px;\r\n  height: 60px;\r\n  border-radius: 5px;\r\n  box-shadow: 0 16px 24px 2px rgba(33, 37, 41, 0.02),\r\n    0 6px 30px 5px rgba(33, 37, 41, 0.04), 0 8px 10px -5px rgba(33, 37, 41, 0.1);\r\n  cursor: pointer;\r\n  font-size: 15px;\r\n  transition: 0.2s;\r\n}\r\n\r\n.edit-delete button:hover {\r\n  transform: scale(1.1);\r\n  transition: 0.2s;\r\n}\r\n\r\n\r\n.book-item-span{\r\n  color: rgb(3, 76, 141);\r\n}\r\n\r\n.thumbnail{\r\n  width: 128px;\r\n  height: 190px;\r\n}\r\n\r\n.book-list__item__img-container{\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/booksList/booksListHeader/booksListAddNewBook/booksListAddNewBook.css":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/booksList/booksListHeader/booksListAddNewBook/booksListAddNewBook.css ***!
  \*************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".books-list__header {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding-top: 30px;\r\n}\r\n\r\n.add__header {\r\n  font-size: 26px;\r\n  font-weight: bold;\r\n  color: rgb(73, 73, 73);\r\n}\r\n\r\n.book-list__item__add {\r\n  width: 260px;\r\n  background-color: #f1f8e9;\r\n}\r\n\r\n.add__button {\r\n  height: 30px;\r\n  box-shadow: 0 16px 24px 2px rgba(33, 37, 41, 0.02),\r\n    0 6px 30px 5px rgba(33, 37, 41, 0.04), 0 8px 10px -5px rgba(33, 37, 41, 0.1);\r\n  border-radius: 5px;\r\n  background-color: #b2dfdb;\r\n  font-size: 17px;\r\n  transition: 0.2s;\r\n}\r\n.add__button:hover {\r\n  transform: scale(1.05);\r\n  transition: 0.2s;\r\n}\r\n.book-list__item__add input {\r\n  height: 25px;\r\n  padding: 0 10px;\r\n  font-size: 15px;\r\n  background-color: #fafbf8;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/booksList/booksListHeader/booksListAddNewBook/booksListAddNewBook.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,eAAe;EACf,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ;gFAC8E;EAC9E,kBAAkB;EAClB,yBAAyB;EACzB,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,sBAAsB;EACtB,gBAAgB;AAClB;AACA;EACE,YAAY;EACZ,eAAe;EACf,eAAe;EACf,yBAAyB;AAC3B","sourcesContent":[".books-list__header {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding-top: 30px;\r\n}\r\n\r\n.add__header {\r\n  font-size: 26px;\r\n  font-weight: bold;\r\n  color: rgb(73, 73, 73);\r\n}\r\n\r\n.book-list__item__add {\r\n  width: 260px;\r\n  background-color: #f1f8e9;\r\n}\r\n\r\n.add__button {\r\n  height: 30px;\r\n  box-shadow: 0 16px 24px 2px rgba(33, 37, 41, 0.02),\r\n    0 6px 30px 5px rgba(33, 37, 41, 0.04), 0 8px 10px -5px rgba(33, 37, 41, 0.1);\r\n  border-radius: 5px;\r\n  background-color: #b2dfdb;\r\n  font-size: 17px;\r\n  transition: 0.2s;\r\n}\r\n.add__button:hover {\r\n  transform: scale(1.05);\r\n  transition: 0.2s;\r\n}\r\n.book-list__item__add input {\r\n  height: 25px;\r\n  padding: 0 10px;\r\n  font-size: 15px;\r\n  background-color: #fafbf8;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/booksList/booksListHeader/booksListRecommendation/booksListRecommendation.css":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/booksList/booksListHeader/booksListRecommendation/booksListRecommendation.css ***!
  \*********************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".book-list__item__recommendation {\r\n  width: 260px;\r\n  margin-right: 30px;\r\n  background-color: #fffde7;\r\n}\r\n\r\n.recommendation__header {\r\n  font-size: 26px;\r\n  font-weight: bold;\r\n  color: #66bb6a;\r\n}\r\n\r\n@media screen and (max-width: 566px) {\r\n  .book-list__item__recommendation {\r\n    margin: 0 30px 30px 30px;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/booksList/booksListHeader/booksListRecommendation/booksListRecommendation.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;AAC3B;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE;IACE,wBAAwB;EAC1B;AACF","sourcesContent":[".book-list__item__recommendation {\r\n  width: 260px;\r\n  margin-right: 30px;\r\n  background-color: #fffde7;\r\n}\r\n\r\n.recommendation__header {\r\n  font-size: 26px;\r\n  font-weight: bold;\r\n  color: #66bb6a;\r\n}\r\n\r\n@media screen and (max-width: 566px) {\r\n  .book-list__item__recommendation {\r\n    margin: 0 30px 30px 30px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/booksList/modalEdit/modalEdit.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/booksList/modalEdit/modalEdit.css ***!
  \*************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".modal-edit {\r\n  position: relative;\r\n  width: 360px;\r\n  height: 550px;\r\n}\r\n\r\n.modal__edit-card {\r\n  background-color: #f1f8e9;\r\n  width: 360px;\r\n  height: 550px;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  flex-direction: column;\r\n  padding: 10px;\r\n}\r\n\r\n.edit-card-button {\r\n  height: 30px;\r\n  box-shadow: 0 16px 24px 2px rgb(33 37 41 / 2%),\r\n    0 6px 30px 5px rgb(33 37 41 / 4%), 0 8px 10px -5px rgb(33 37 41 / 10%);\r\n  border-radius: 5px;\r\n  background-color: #b2dfdb;\r\n  font-size: 17px;\r\n  transition: 0.2s;\r\n}\r\n\r\n.modal__edit-card input {\r\n  background-color: #fafbf8;\r\n  height: 30px;\r\n  font-size: 15px;\r\n  width: 100%;\r\n}\r\n\r\n\r\n", "",{"version":3,"sources":["webpack://./src/booksList/modalEdit/modalEdit.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,aAAa;EACb,aAAa;EACb,6BAA6B;EAC7B,sBAAsB;EACtB,aAAa;AACf;;AAEA;EACE,YAAY;EACZ;0EACwE;EACxE,kBAAkB;EAClB,yBAAyB;EACzB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,eAAe;EACf,WAAW;AACb","sourcesContent":[".modal-edit {\r\n  position: relative;\r\n  width: 360px;\r\n  height: 550px;\r\n}\r\n\r\n.modal__edit-card {\r\n  background-color: #f1f8e9;\r\n  width: 360px;\r\n  height: 550px;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  flex-direction: column;\r\n  padding: 10px;\r\n}\r\n\r\n.edit-card-button {\r\n  height: 30px;\r\n  box-shadow: 0 16px 24px 2px rgb(33 37 41 / 2%),\r\n    0 6px 30px 5px rgb(33 37 41 / 4%), 0 8px 10px -5px rgb(33 37 41 / 10%);\r\n  border-radius: 5px;\r\n  background-color: #b2dfdb;\r\n  font-size: 17px;\r\n  transition: 0.2s;\r\n}\r\n\r\n.modal__edit-card input {\r\n  background-color: #fafbf8;\r\n  height: 30px;\r\n  font-size: 15px;\r\n  width: 100%;\r\n}\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/booksList/sorting/sorting.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/booksList/sorting/sorting.css ***!
  \*********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".sorting-button__wrapper {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-top: 30px;\r\n}\r\n\r\n.sorting-button {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 10px;\r\n  height: 60px;\r\n  border-radius: 5px;\r\n  box-shadow: 0 16px 24px 2px rgba(33, 37, 41, 0.02),\r\n    0 6px 30px 5px rgba(33, 37, 41, 0.04), 0 8px 10px -5px rgba(33, 37, 41, 0.1);\r\n  cursor: pointer;\r\n  background-color: #fbb3a6a9;\r\n  font-size: 20px;\r\n  transition: 0.2s;\r\n}\r\n\r\n.sorting-button__container:hover .sorting-button{\r\n  transform: scale(1.1);\r\n  transition: 0.2s;\r\n}\r\n\r\n.sorting-button:hover + .sorting__list,\r\n.sorting__list:hover {\r\n  visibility: visible;\r\n  transition: 0.2s;\r\n}\r\n\r\n.sorting-button__container {\r\n  position: relative;\r\n}\r\n.sorting__list {\r\n  box-shadow: 0 16px 24px 2px rgba(33, 37, 41, 0.02),\r\n    0 6px 30px 5px rgba(33, 37, 41, 0.04), 0 8px 10px -5px rgba(33, 37, 41, 0.1);\r\n  border: 1px solid #fbb3a6a9;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  z-index: 5;\r\n  background-color: #fff;\r\n  min-width: 120px;\r\n  border-radius: 5px;\r\n  font-size: 20px;\r\n  visibility: hidden;\r\n  padding: 10px 0;\r\n  position: absolute;\r\n  width: 100%;\r\n}\r\n\r\n.sorting__list li:not(:first-child) {\r\n  margin-top: 15px;\r\n}\r\n\r\n.sorting__list li:hover {\r\n  background-color: #73d7e436;\r\n  cursor: pointer;\r\n}\r\n\r\n.sorting__list li {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  color: black;\r\n}\r\n\r\n", "",{"version":3,"sources":["webpack://./src/booksList/sorting/sorting.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,kBAAkB;EAClB;gFAC8E;EAC9E,eAAe;EACf,2BAA2B;EAC3B,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA;;EAEE,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;AACpB;AACA;EACE;gFAC8E;EAC9E,2BAA2B;EAC3B,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,UAAU;EACV,sBAAsB;EACtB,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;EACf,kBAAkB;EAClB,eAAe;EACf,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,2BAA2B;EAC3B,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,YAAY;AACd","sourcesContent":[".sorting-button__wrapper {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-top: 30px;\r\n}\r\n\r\n.sorting-button {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 10px;\r\n  height: 60px;\r\n  border-radius: 5px;\r\n  box-shadow: 0 16px 24px 2px rgba(33, 37, 41, 0.02),\r\n    0 6px 30px 5px rgba(33, 37, 41, 0.04), 0 8px 10px -5px rgba(33, 37, 41, 0.1);\r\n  cursor: pointer;\r\n  background-color: #fbb3a6a9;\r\n  font-size: 20px;\r\n  transition: 0.2s;\r\n}\r\n\r\n.sorting-button__container:hover .sorting-button{\r\n  transform: scale(1.1);\r\n  transition: 0.2s;\r\n}\r\n\r\n.sorting-button:hover + .sorting__list,\r\n.sorting__list:hover {\r\n  visibility: visible;\r\n  transition: 0.2s;\r\n}\r\n\r\n.sorting-button__container {\r\n  position: relative;\r\n}\r\n.sorting__list {\r\n  box-shadow: 0 16px 24px 2px rgba(33, 37, 41, 0.02),\r\n    0 6px 30px 5px rgba(33, 37, 41, 0.04), 0 8px 10px -5px rgba(33, 37, 41, 0.1);\r\n  border: 1px solid #fbb3a6a9;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  z-index: 5;\r\n  background-color: #fff;\r\n  min-width: 120px;\r\n  border-radius: 5px;\r\n  font-size: 20px;\r\n  visibility: hidden;\r\n  padding: 10px 0;\r\n  position: absolute;\r\n  width: 100%;\r\n}\r\n\r\n.sorting__list li:not(:first-child) {\r\n  margin-top: 15px;\r\n}\r\n\r\n.sorting__list li:hover {\r\n  background-color: #73d7e436;\r\n  cursor: pointer;\r\n}\r\n\r\n.sorting__list li {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  color: black;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/nullstyle.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/nullstyle.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*Обнуление*/\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  border: 0;\r\n}\r\n*,\r\n*:before,\r\n*:after {\r\n  -moz-box-sizing: border-box;\r\n  -webkit-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n}\r\n:focus,\r\n:active {\r\n  outline: none;\r\n}\r\na:focus,\r\na:active {\r\n  outline: none;\r\n}\r\nnav,\r\nfooter,\r\nheader,\r\naside {\r\n  display: block;\r\n}\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n  width: 100%;\r\n \r\n  \r\n}\r\ninput,\r\nbutton,\r\ntextarea {\r\n  font-family: inherit;\r\n}\r\ninput::-ms-clear {\r\n  display: none;\r\n}\r\nbutton {\r\n  cursor: pointer;\r\n}\r\nbutton::-moz-focus-inner {\r\n  padding: 0;\r\n  border: 0;\r\n}\r\na,\r\na:visited {\r\n  text-decoration: none;\r\n}\r\na:hover {\r\n  text-decoration: none;\r\n}\r\nul li {\r\n  list-style: none;\r\n}\r\nimg {\r\n  vertical-align: top;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/nullstyle.css"],"names":[],"mappings":"AAAA,YAAY;AACZ;EACE,UAAU;EACV,SAAS;EACT,SAAS;AACX;AACA;;;EAGE,2BAA2B;EAC3B,8BAA8B;EAC9B,sBAAsB;AACxB;AACA;;EAEE,aAAa;AACf;AACA;;EAEE,aAAa;AACf;AACA;;;;EAIE,cAAc;AAChB;AACA;;EAEE,YAAY;EACZ,WAAW;;;AAGb;AACA;;;EAGE,oBAAoB;AACtB;AACA;EACE,aAAa;AACf;AACA;EACE,eAAe;AACjB;AACA;EACE,UAAU;EACV,SAAS;AACX;AACA;;EAEE,qBAAqB;AACvB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,mBAAmB;AACrB","sourcesContent":["/*Обнуление*/\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  border: 0;\r\n}\r\n*,\r\n*:before,\r\n*:after {\r\n  -moz-box-sizing: border-box;\r\n  -webkit-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n}\r\n:focus,\r\n:active {\r\n  outline: none;\r\n}\r\na:focus,\r\na:active {\r\n  outline: none;\r\n}\r\nnav,\r\nfooter,\r\nheader,\r\naside {\r\n  display: block;\r\n}\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n  width: 100%;\r\n \r\n  \r\n}\r\ninput,\r\nbutton,\r\ntextarea {\r\n  font-family: inherit;\r\n}\r\ninput::-ms-clear {\r\n  display: none;\r\n}\r\nbutton {\r\n  cursor: pointer;\r\n}\r\nbutton::-moz-focus-inner {\r\n  padding: 0;\r\n  border: 0;\r\n}\r\na,\r\na:visited {\r\n  text-decoration: none;\r\n}\r\na:hover {\r\n  text-decoration: none;\r\n}\r\nul li {\r\n  list-style: none;\r\n}\r\nimg {\r\n  vertical-align: top;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_booksList_booksList_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../booksList/booksList.css */ "./node_modules/css-loader/dist/cjs.js!./src/booksList/booksList.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_nullstyle_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./nullstyle.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/nullstyle.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_errorNoBooks_errorNoBooks_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../errorNoBooks/errorNoBooks.css */ "./node_modules/css-loader/dist/cjs.js!./src/errorNoBooks/errorNoBooks.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_booksList_sorting_sorting_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../booksList/sorting/sorting.css */ "./node_modules/css-loader/dist/cjs.js!./src/booksList/sorting/sorting.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_booksList_booksListHeader_booksListAddNewBook_booksListAddNewBook_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../booksList/booksListHeader/booksListAddNewBook/booksListAddNewBook.css */ "./node_modules/css-loader/dist/cjs.js!./src/booksList/booksListHeader/booksListAddNewBook/booksListAddNewBook.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_booksList_booksListHeader_booksListRecommendation_booksListRecommendation_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../booksList/booksListHeader/booksListRecommendation/booksListRecommendation.css */ "./node_modules/css-loader/dist/cjs.js!./src/booksList/booksListHeader/booksListRecommendation/booksListRecommendation.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_booksList_modalEdit_modalEdit_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../booksList/modalEdit/modalEdit.css */ "./node_modules/css-loader/dist/cjs.js!./src/booksList/modalEdit/modalEdit.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_preloader_preloader_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../preloader/preloader.css */ "./node_modules/css-loader/dist/cjs.js!./src/preloader/preloader.css");
// Imports










var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_booksList_booksList_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_nullstyle_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_errorNoBooks_errorNoBooks_css__WEBPACK_IMPORTED_MODULE_4__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_booksList_sorting_sorting_css__WEBPACK_IMPORTED_MODULE_5__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_booksList_booksListHeader_booksListAddNewBook_booksListAddNewBook_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_booksList_booksListHeader_booksListRecommendation_booksListRecommendation_css__WEBPACK_IMPORTED_MODULE_7__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_booksList_modalEdit_modalEdit_css__WEBPACK_IMPORTED_MODULE_8__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_preloader_preloader_css__WEBPACK_IMPORTED_MODULE_9__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  height: 100%;\r\n  background-color: aliceblue;\r\n}\r\n\r\n.wrapper {\r\n  min-height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.container {\r\n  max-width: 1024px;\r\n}\r\n\r\n", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AASA;EACE,YAAY;EACZ,2BAA2B;AAC7B;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;AACnB","sourcesContent":["@import \"../booksList/booksList.css\";\r\n@import \"./nullstyle.css\";\r\n@import \"../errorNoBooks/errorNoBooks.css\";\r\n@import \"../booksList/sorting/sorting.css\";\r\n@import \"../booksList/booksListHeader/booksListAddNewBook/booksListAddNewBook.css\";\r\n@import \"../booksList/booksListHeader/booksListRecommendation/booksListRecommendation.css\";\r\n@import \"../booksList/modalEdit/modalEdit.css\";\r\n@import \"../preloader/preloader.css\";\r\n\r\nbody {\r\n  height: 100%;\r\n  background-color: aliceblue;\r\n}\r\n\r\n.wrapper {\r\n  min-height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.container {\r\n  max-width: 1024px;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/errorNoBooks/errorNoBooks.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/errorNoBooks/errorNoBooks.css ***!
  \*********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".error-no-books {\r\n  position: fixed;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgba(0, 0, 0, 0.644);\r\n  background-color: 0.5;\r\n  z-index: 105;\r\n  transition: 1s opacity;\r\n  opacity: 0;\r\n  visibility: hidden;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.error-no-books__done {\r\n  opacity: 1;\r\n  visibility: visible;\r\n}\r\n\r\n.error-text {\r\n  padding: 20px;\r\n  width: 400px;\r\n  height: 400px;\r\n  color: rgb(240, 89, 75);\r\n  background-color: aliceblue;\r\n  border-radius: 5%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 25px;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/errorNoBooks/errorNoBooks.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,OAAO;EACP,MAAM;EACN,WAAW;EACX,YAAY;EACZ,gCAAgC;EAChC,qBAAqB;EACrB,YAAY;EACZ,sBAAsB;EACtB,UAAU;EACV,kBAAkB;EAClB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,2BAA2B;EAC3B,iBAAiB;EACjB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;AACjB","sourcesContent":[".error-no-books {\r\n  position: fixed;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgba(0, 0, 0, 0.644);\r\n  background-color: 0.5;\r\n  z-index: 105;\r\n  transition: 1s opacity;\r\n  opacity: 0;\r\n  visibility: hidden;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.error-no-books__done {\r\n  opacity: 1;\r\n  visibility: visible;\r\n}\r\n\r\n.error-text {\r\n  padding: 20px;\r\n  width: 400px;\r\n  height: 400px;\r\n  color: rgb(240, 89, 75);\r\n  background-color: aliceblue;\r\n  border-radius: 5%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 25px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/plugin/hystModal.min.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/plugin/hystModal.min.css ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath fill=%27%23fff%27 stroke=%27%23fff%27 stroke-linecap=%27square%27 stroke-miterlimit=%2750%27 stroke-width=%272%27 d=%27M22 2L2 22%27/%3E%3Cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27square%27 stroke-miterlimit=%2750%27 stroke-width=%272%27 d=%27M2 2l20 20%27/%3E%3C/svg%3E */ "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath fill=%27%23fff%27 stroke=%27%23fff%27 stroke-linecap=%27square%27 stroke-miterlimit=%2750%27 stroke-width=%272%27 d=%27M22 2L2 22%27/%3E%3Cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27square%27 stroke-miterlimit=%2750%27 stroke-width=%272%27 d=%27M2 2l20 20%27/%3E%3C/svg%3E"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath fill=%27%23fff%27 stroke=%27%23111%27 stroke-linecap=%27square%27 stroke-miterlimit=%2750%27 stroke-width=%272%27 d=%27M22 2L2 22%27/%3E%3Cpath fill=%27none%27 stroke=%27%23111%27 stroke-linecap=%27square%27 stroke-miterlimit=%2750%27 stroke-width=%272%27 d=%27M2 2l20 20%27/%3E%3C/svg%3E */ "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath fill=%27%23fff%27 stroke=%27%23111%27 stroke-linecap=%27square%27 stroke-miterlimit=%2750%27 stroke-width=%272%27 d=%27M22 2L2 22%27/%3E%3Cpath fill=%27none%27 stroke=%27%23111%27 stroke-linecap=%27square%27 stroke-miterlimit=%2750%27 stroke-width=%272%27 d=%27M2 2l20 20%27/%3E%3C/svg%3E"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".hystmodal__opened,\r\n.hystmodal__shadow {\r\n  position: fixed;\r\n  right: 0;\r\n  left: 0;\r\n  overflow: hidden;\r\n}\r\n.hystmodal__shadow {\r\n  border: none;\r\n  display: block;\r\n  width: 100%;\r\n  top: 0;\r\n  bottom: 0;\r\n  pointer-events: none;\r\n  z-index: 98;\r\n  opacity: 0;\r\n  transition: opacity 0.15s ease;\r\n  background-color: #000;\r\n}\r\n.hystmodal__shadow--show {\r\n  pointer-events: auto;\r\n  opacity: 0.6;\r\n}\r\n.hystmodal {\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  left: 0;\r\n  overflow: hidden;\r\n  overflow-y: auto;\r\n  -webkit-overflow-scrolling: touch;\r\n  opacity: 1;\r\n  pointer-events: none;\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n  justify-content: flex-start;\r\n  z-index: 99;\r\n  visibility: hidden;\r\n}\r\n.hystmodal--active {\r\n  opacity: 1;\r\n}\r\n.hystmodal--active,\r\n.hystmodal--moved {\r\n  pointer-events: auto;\r\n  visibility: visible;\r\n}\r\n.hystmodal__wrap {\r\n  flex-shrink: 0;\r\n  flex-grow: 0;\r\n  width: 100%;\r\n  min-height: 100%;\r\n  margin: auto;\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n.hystmodal__window {\r\n  border-radius: 4px;\r\n  margin: 50px 0;\r\n  box-sizing: border-box;\r\n  flex-shrink: 0;\r\n  flex-grow: 0;\r\n  background: #fff;\r\n  max-width: 100%;\r\n  overflow: visible;\r\n  transition: transform 0.2s ease 0s, opacity 0.2s ease 0s;\r\n  transform: scale(0.9);\r\n  opacity: 0;\r\n}\r\n.hystmodal--active .hystmodal__window {\r\n  transform: scale(1);\r\n  opacity: 1;\r\n}\r\n.hystmodal__close {\r\n  position: absolute;\r\n  z-index: 10;\r\n  top: 0;\r\n  right: -40px;\r\n  display: block;\r\n  width: 30px;\r\n  height: 30px;\r\n  background-color: transparent;\r\n  background-position: 50%;\r\n  background-repeat: no-repeat;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-size: 100% 100%;\r\n  border: none;\r\n  font-size: 0;\r\n  cursor: pointer;\r\n  outline: none;\r\n}\r\n.hystmodal__close:focus {\r\n  outline: 2px dotted #afb3b9;\r\n  outline-offset: 2px;\r\n}\r\n@media (max-width: 767px) {\r\n  .hystmodal__close {\r\n    top: 10px;\r\n    right: 10px;\r\n    width: 24px;\r\n    height: 24px;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n  }\r\n  .hystmodal__window {\r\n    margin: 0;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/plugin/hystModal.min.css"],"names":[],"mappings":"AAAA;;EAEE,eAAe;EACf,QAAQ;EACR,OAAO;EACP,gBAAgB;AAClB;AACA;EACE,YAAY;EACZ,cAAc;EACd,WAAW;EACX,MAAM;EACN,SAAS;EACT,oBAAoB;EACpB,WAAW;EACX,UAAU;EACV,8BAA8B;EAC9B,sBAAsB;AACxB;AACA;EACE,oBAAoB;EACpB,YAAY;AACd;AACA;EACE,eAAe;EACf,MAAM;EACN,SAAS;EACT,QAAQ;EACR,OAAO;EACP,gBAAgB;EAChB,gBAAgB;EAChB,iCAAiC;EACjC,UAAU;EACV,oBAAoB;EACpB,aAAa;EACb,wBAAwB;EACxB,2BAA2B;EAC3B,WAAW;EACX,kBAAkB;AACpB;AACA;EACE,UAAU;AACZ;AACA;;EAEE,oBAAoB;EACpB,mBAAmB;AACrB;AACA;EACE,cAAc;EACd,YAAY;EACZ,WAAW;EACX,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,wBAAwB;EACxB,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,kBAAkB;EAClB,cAAc;EACd,sBAAsB;EACtB,cAAc;EACd,YAAY;EACZ,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,wDAAwD;EACxD,qBAAqB;EACrB,UAAU;AACZ;AACA;EACE,mBAAmB;EACnB,UAAU;AACZ;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,MAAM;EACN,YAAY;EACZ,cAAc;EACd,WAAW;EACX,YAAY;EACZ,6BAA6B;EAC7B,wBAAwB;EACxB,4BAA4B;EAC5B,yDAAkX;EAClX,0BAA0B;EAC1B,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,aAAa;AACf;AACA;EACE,2BAA2B;EAC3B,mBAAmB;AACrB;AACA;EACE;IACE,SAAS;IACT,WAAW;IACX,WAAW;IACX,YAAY;IACZ,yDAAkX;EACpX;EACA;IACE,SAAS;EACX;AACF","sourcesContent":[".hystmodal__opened,\r\n.hystmodal__shadow {\r\n  position: fixed;\r\n  right: 0;\r\n  left: 0;\r\n  overflow: hidden;\r\n}\r\n.hystmodal__shadow {\r\n  border: none;\r\n  display: block;\r\n  width: 100%;\r\n  top: 0;\r\n  bottom: 0;\r\n  pointer-events: none;\r\n  z-index: 98;\r\n  opacity: 0;\r\n  transition: opacity 0.15s ease;\r\n  background-color: #000;\r\n}\r\n.hystmodal__shadow--show {\r\n  pointer-events: auto;\r\n  opacity: 0.6;\r\n}\r\n.hystmodal {\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  left: 0;\r\n  overflow: hidden;\r\n  overflow-y: auto;\r\n  -webkit-overflow-scrolling: touch;\r\n  opacity: 1;\r\n  pointer-events: none;\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n  justify-content: flex-start;\r\n  z-index: 99;\r\n  visibility: hidden;\r\n}\r\n.hystmodal--active {\r\n  opacity: 1;\r\n}\r\n.hystmodal--active,\r\n.hystmodal--moved {\r\n  pointer-events: auto;\r\n  visibility: visible;\r\n}\r\n.hystmodal__wrap {\r\n  flex-shrink: 0;\r\n  flex-grow: 0;\r\n  width: 100%;\r\n  min-height: 100%;\r\n  margin: auto;\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n.hystmodal__window {\r\n  border-radius: 4px;\r\n  margin: 50px 0;\r\n  box-sizing: border-box;\r\n  flex-shrink: 0;\r\n  flex-grow: 0;\r\n  background: #fff;\r\n  max-width: 100%;\r\n  overflow: visible;\r\n  transition: transform 0.2s ease 0s, opacity 0.2s ease 0s;\r\n  transform: scale(0.9);\r\n  opacity: 0;\r\n}\r\n.hystmodal--active .hystmodal__window {\r\n  transform: scale(1);\r\n  opacity: 1;\r\n}\r\n.hystmodal__close {\r\n  position: absolute;\r\n  z-index: 10;\r\n  top: 0;\r\n  right: -40px;\r\n  display: block;\r\n  width: 30px;\r\n  height: 30px;\r\n  background-color: transparent;\r\n  background-position: 50%;\r\n  background-repeat: no-repeat;\r\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23fff' stroke='%23fff' stroke-linecap='square' stroke-miterlimit='50' stroke-width='2' d='M22 2L2 22'/%3E%3Cpath fill='none' stroke='%23fff' stroke-linecap='square' stroke-miterlimit='50' stroke-width='2' d='M2 2l20 20'/%3E%3C/svg%3E\");\r\n  background-size: 100% 100%;\r\n  border: none;\r\n  font-size: 0;\r\n  cursor: pointer;\r\n  outline: none;\r\n}\r\n.hystmodal__close:focus {\r\n  outline: 2px dotted #afb3b9;\r\n  outline-offset: 2px;\r\n}\r\n@media (max-width: 767px) {\r\n  .hystmodal__close {\r\n    top: 10px;\r\n    right: 10px;\r\n    width: 24px;\r\n    height: 24px;\r\n    background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23fff' stroke='%23111' stroke-linecap='square' stroke-miterlimit='50' stroke-width='2' d='M22 2L2 22'/%3E%3Cpath fill='none' stroke='%23111' stroke-linecap='square' stroke-miterlimit='50' stroke-width='2' d='M2 2l20 20'/%3E%3C/svg%3E\");\r\n  }\r\n  .hystmodal__window {\r\n    margin: 0;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/preloader/preloader.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/preloader/preloader.css ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".preloader {\r\n  position: fixed;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgba(0, 0, 0, 0.529);\r\n  background-color: 0.5;\r\n  z-index: 100;\r\n  transition: 1s all;\r\n  opacity: 1;\r\n  visibility: visible;\r\n}\r\n\r\n.loader {\r\n  width: 75px;\r\n  height: 75px;\r\n  border: 10px solid white;\r\n  border-radius: 50%;\r\n  border-top-color: rgba(24, 203, 226, 0.973);\r\n  left: 50%;\r\n  top: 50%;\r\n  position: absolute;\r\n  transform: translate(-50%, -50%);\r\n  animation: 1s spin infinite linear;\r\n}\r\n\r\n@keyframes spin{\r\n    from{\r\n        transform: translate(-50%, -50%) rotate(0deg);\r\n    }\r\n    to{\r\n        transform: translate(-50%, -50%) rotate(360deg);\r\n    }\r\n}\r\n\r\n.done{\r\n  opacity: 0;\r\n  visibility: hidden;\r\n}", "",{"version":3,"sources":["webpack://./src/preloader/preloader.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,OAAO;EACP,MAAM;EACN,WAAW;EACX,YAAY;EACZ,gCAAgC;EAChC,qBAAqB;EACrB,YAAY;EACZ,kBAAkB;EAClB,UAAU;EACV,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,wBAAwB;EACxB,kBAAkB;EAClB,2CAA2C;EAC3C,SAAS;EACT,QAAQ;EACR,kBAAkB;EAClB,gCAAgC;EAChC,kCAAkC;AACpC;;AAEA;IACI;QACI,6CAA6C;IACjD;IACA;QACI,+CAA+C;IACnD;AACJ;;AAEA;EACE,UAAU;EACV,kBAAkB;AACpB","sourcesContent":[".preloader {\r\n  position: fixed;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgba(0, 0, 0, 0.529);\r\n  background-color: 0.5;\r\n  z-index: 100;\r\n  transition: 1s all;\r\n  opacity: 1;\r\n  visibility: visible;\r\n}\r\n\r\n.loader {\r\n  width: 75px;\r\n  height: 75px;\r\n  border: 10px solid white;\r\n  border-radius: 50%;\r\n  border-top-color: rgba(24, 203, 226, 0.973);\r\n  left: 50%;\r\n  top: 50%;\r\n  position: absolute;\r\n  transform: translate(-50%, -50%);\r\n  animation: 1s spin infinite linear;\r\n}\r\n\r\n@keyframes spin{\r\n    from{\r\n        transform: translate(-50%, -50%) rotate(0deg);\r\n    }\r\n    to{\r\n        transform: translate(-50%, -50%) rotate(360deg);\r\n    }\r\n}\r\n\r\n.done{\r\n  opacity: 0;\r\n  visibility: hidden;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/css/nullstyle.css":
/*!*******************************!*\
  !*** ./src/css/nullstyle.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_nullstyle_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./nullstyle.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/nullstyle.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_nullstyle_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_nullstyle_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_nullstyle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_nullstyle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/plugin/hystModal.min.css":
/*!**************************************!*\
  !*** ./src/plugin/hystModal.min.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_hystModal_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./hystModal.min.css */ "./node_modules/css-loader/dist/cjs.js!./src/plugin/hystModal.min.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_hystModal_min_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_hystModal_min_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_hystModal_min_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_hystModal_min_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/booksList/booksList.ts":
/*!************************************!*\
  !*** ./src/booksList/booksList.ts ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "booksListContainer": () => (/* binding */ booksListContainer),
/* harmony export */   "renderBooks": () => (/* binding */ renderBooks)
/* harmony export */ });
/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../firebase/firebase */ "./src/firebase/firebase.ts");
/* harmony import */ var _sorting_sorting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sorting/sorting */ "./src/booksList/sorting/sorting.ts");
/* harmony import */ var _utils_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/const */ "./src/utils/const.ts");
/* harmony import */ var _utils_isNull__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/isNull */ "./src/utils/isNull.ts");
/* harmony import */ var _deleteBook_deleteBook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./deleteBook/deleteBook */ "./src/booksList/deleteBook/deleteBook.ts");
/* harmony import */ var _modalEdit_modalEdit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modalEdit/modalEdit */ "./src/booksList/modalEdit/modalEdit.ts");
/* harmony import */ var _preloader_preloader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../preloader/preloader */ "./src/preloader/preloader.ts");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_sorting_sorting__WEBPACK_IMPORTED_MODULE_1__, _deleteBook_deleteBook__WEBPACK_IMPORTED_MODULE_4__, _modalEdit_modalEdit__WEBPACK_IMPORTED_MODULE_5__]);
([_sorting_sorting__WEBPACK_IMPORTED_MODULE_1__, _deleteBook_deleteBook__WEBPACK_IMPORTED_MODULE_4__, _modalEdit_modalEdit__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
var __asyncValues = (undefined && undefined.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};







let booksListContainer = document.querySelector(".books-list__container");
await (0,_firebase_firebase__WEBPACK_IMPORTED_MODULE_0__.getSortDocs)(_utils_const__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_TYPE_SORT, "asc").then(async (allBooks) => await renderBooks((0,_sorting_sorting__WEBPACK_IMPORTED_MODULE_1__.sort)(allBooks, _utils_const__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_TYPE_SORT)));
async function renderBooks(allBooks) {
    var e_1, _a;
    _preloader_preloader__WEBPACK_IMPORTED_MODULE_6__.preloader.classList.remove("done");
    try {
        for (var allBooks_1 = __asyncValues(allBooks), allBooks_1_1; allBooks_1_1 = await allBooks_1.next(), !allBooks_1_1.done;) {
            let book = allBooks_1_1.value;
            booksListContainer.insertAdjacentHTML("afterbegin", ` <div class="book-list__item book-list__item__hover-style">

<div class="edit-delete" data-id=${book.id}>

  <button type="button" class="edit-book-button"><a data-id=${book.id} href="#" data-hystmodal="#myModal">Edit</a></button>

  <button type="button" class="delete-book-button">Delete</button>

</div>

<div class="book-list__item__img-container">

<img src=${book.imageLink} alt="No image. Try entering the title of the book in another language" class="thumbnail" id="thumbnail">

</div>

<p class="book-list__item__name"><span class="book-item-span">Title: </span>

${(0,_utils_isNull__WEBPACK_IMPORTED_MODULE_3__.isNull)(book.name)}

</p>

<p class="book-list__item__author"><span class="book-item-span">Author: </span> ${(0,_utils_isNull__WEBPACK_IMPORTED_MODULE_3__.isNull)(book.author)}</p>

<p class="book-list__item__year"><span class="book-item-span">Publication year: </span> ${(0,_utils_isNull__WEBPACK_IMPORTED_MODULE_3__.isNull)(book.year)}</p>

<p class="book-list__item__rating"><span class="book-item-span">Rating: </span> ${(0,_utils_isNull__WEBPACK_IMPORTED_MODULE_3__.isNull)(book.rating)}</p>

<p class="book-list__item__isbn"><span class="book-item-span">ISBN: </span> ${book.isbn}</p>

</div>`);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (allBooks_1_1 && !allBooks_1_1.done && (_a = allBooks_1.return)) await _a.call(allBooks_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    (0,_deleteBook_deleteBook__WEBPACK_IMPORTED_MODULE_4__.addDeleteEventClick)().then(() => _preloader_preloader__WEBPACK_IMPORTED_MODULE_6__.preloader.classList.add("done"));
    (0,_modalEdit_modalEdit__WEBPACK_IMPORTED_MODULE_5__.editEventClick)();
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./src/booksList/booksListHeader/booksListAddNewBook/booksListAddNewBook.ts":
/*!**********************************************************************************!*\
  !*** ./src/booksList/booksListHeader/booksListAddNewBook/booksListAddNewBook.ts ***!
  \**********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../firebase/firebase */ "./src/firebase/firebase.ts");
/* harmony import */ var _sorting_sorting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sorting/sorting */ "./src/booksList/sorting/sorting.ts");
/* harmony import */ var _booksList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../booksList */ "./src/booksList/booksList.ts");
/* harmony import */ var _utils_getThumbnailLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/getThumbnailLink */ "./src/utils/getThumbnailLink.ts");
/* harmony import */ var _utils_checkIsbn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/checkIsbn */ "./src/utils/checkIsbn.ts");
/* harmony import */ var _errorNoBooks_errorNoBooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../errorNoBooks/errorNoBooks */ "./src/errorNoBooks/errorNoBooks.ts");
/* harmony import */ var _preloader_preloader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../preloader/preloader */ "./src/preloader/preloader.ts");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_sorting_sorting__WEBPACK_IMPORTED_MODULE_1__, _booksList__WEBPACK_IMPORTED_MODULE_2__]);
([_sorting_sorting__WEBPACK_IMPORTED_MODULE_1__, _booksList__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







let form = document.querySelector(".book-list__item__add");
form.addEventListener("submit", (e) => addBook(e));
async function addBook(event) {
    event.preventDefault();
    _preloader_preloader__WEBPACK_IMPORTED_MODULE_6__.preloader.classList.remove("done");
    await (0,_firebase_firebase__WEBPACK_IMPORTED_MODULE_0__.setDoc)({
        name: form.name.value.trim(),
        author: form.author.value.trim(),
        year: Number(form.year.value),
        rating: Number(form.rating.value),
        isbn: await (0,_utils_checkIsbn__WEBPACK_IMPORTED_MODULE_4__.checkIsbn)(form.isbn.value).then((result) => result),
        imageLink: await (0,_utils_getThumbnailLink__WEBPACK_IMPORTED_MODULE_3__.getThumbnailLink)(form.name.value).then((result) => result),
    })
        .then(() => {
        form.reset(),
            (_booksList__WEBPACK_IMPORTED_MODULE_2__.booksListContainer.innerHTML = ""),
            (0,_firebase_firebase__WEBPACK_IMPORTED_MODULE_0__.getSortDocs)(_sorting_sorting__WEBPACK_IMPORTED_MODULE_1__.currentSortType, (0,_sorting_sorting__WEBPACK_IMPORTED_MODULE_1__.getOrderBySorting)(_sorting_sorting__WEBPACK_IMPORTED_MODULE_1__.currentSortType)).then((allBooks) => {
                let catalog = allBooks;
                (0,_booksList__WEBPACK_IMPORTED_MODULE_2__.renderBooks)((0,_sorting_sorting__WEBPACK_IMPORTED_MODULE_1__.sort)(catalog, _sorting_sorting__WEBPACK_IMPORTED_MODULE_1__.currentSortType));
            });
    })
        .catch((error) => {
        _preloader_preloader__WEBPACK_IMPORTED_MODULE_6__.preloader.classList.add("done");
        (0,_errorNoBooks_errorNoBooks__WEBPACK_IMPORTED_MODULE_5__.showMessage)();
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./src/booksList/booksListHeader/booksListRecommendation/booksListRecommendation.ts":
/*!******************************************************************************************!*\
  !*** ./src/booksList/booksListHeader/booksListRecommendation/booksListRecommendation.ts ***!
  \******************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../firebase/firebase */ "./src/firebase/firebase.ts");
/* harmony import */ var _utils_isNull__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/isNull */ "./src/utils/isNull.ts");


let recommendationHeaderImg = document.querySelector(".recommendation__header__thumbnail");
let recommendationHeaderName = document.querySelector(".recommendation__book-list__item__name");
let recommendationHeaderAuthor = document.querySelector(".recommendation__book-list__item__author");
let recommendationHeaderYear = document.querySelector(".recommendation__book-list__item__year");
let recommendationHeaderRating = document.querySelector(".recommendation__book-list__item__rating");
let recommendationHeaderIsbn = document.querySelector(".recommendation__book-list__item__isbn");
let currentDate = new Date();
let currentYear = currentDate.getUTCFullYear();
await (0,_firebase_firebase__WEBPACK_IMPORTED_MODULE_0__.getAllDocs)().then((allBooks) => renderRecommendedBook(generationRecommendedBook(allBooks)));
function renderRecommendedBook(recommendedBook) {
    recommendationHeaderImg.src = recommendedBook.imageLink;
    recommendationHeaderName.innerHTML = `Title: ${(0,_utils_isNull__WEBPACK_IMPORTED_MODULE_1__.isNull)(recommendedBook.name)}`;
    recommendationHeaderAuthor.innerHTML = `Author: ${(0,_utils_isNull__WEBPACK_IMPORTED_MODULE_1__.isNull)(recommendedBook.author)}`;
    recommendationHeaderYear.innerHTML = `Year: ${(0,_utils_isNull__WEBPACK_IMPORTED_MODULE_1__.isNull)(recommendedBook.year)}`;
    recommendationHeaderRating.innerHTML = `Rating: ${(0,_utils_isNull__WEBPACK_IMPORTED_MODULE_1__.isNull)(recommendedBook.rating)}`;
    recommendationHeaderIsbn.innerHTML = `ISBN: ${(0,_utils_isNull__WEBPACK_IMPORTED_MODULE_1__.isNull)(recommendedBook.isbn)}`;
}
function generationRecommendedBook(allBooks) {
    let index = 0;
    let sortedByYear = [];
    allBooks.forEach((book) => {
        if (book.year >= currentYear - 2) {
            sortedByYear.push(book);
        }
    });
    let maxRating = 0;
    sortedByYear.forEach((book) => {
        if (book.rating > maxRating) {
            maxRating = book.rating;
        }
    });
    let sortedByRating = [];
    sortedByYear.filter((book) => {
        if (book.rating === maxRating) {
            sortedByRating.push(book);
        }
    });
    if (sortedByRating.length > 1) {
        index = Math.floor(Math.random() * sortedByRating.length);
        return sortedByRating[index];
    }
    else {
        return sortedByRating[index];
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./src/booksList/deleteBook/deleteBook.ts":
/*!************************************************!*\
  !*** ./src/booksList/deleteBook/deleteBook.ts ***!
  \************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addDeleteEventClick": () => (/* binding */ addDeleteEventClick)
/* harmony export */ });
/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../firebase/firebase */ "./src/firebase/firebase.ts");
/* harmony import */ var _sorting_sorting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sorting/sorting */ "./src/booksList/sorting/sorting.ts");
/* harmony import */ var _booksList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../booksList */ "./src/booksList/booksList.ts");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_sorting_sorting__WEBPACK_IMPORTED_MODULE_1__, _booksList__WEBPACK_IMPORTED_MODULE_2__]);
([_sorting_sorting__WEBPACK_IMPORTED_MODULE_1__, _booksList__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



async function addDeleteEventClick() {
    let deleteButtons = document.querySelectorAll(".delete-book-button");
    deleteButtons.forEach((deleteButton) => deleteButton.addEventListener("click", (e) => handleClick(e)));
}
async function handleClick(e) {
    await (0,_firebase_firebase__WEBPACK_IMPORTED_MODULE_0__.deleteBook)(e.target.parentElement.dataset.id);
    _booksList__WEBPACK_IMPORTED_MODULE_2__.booksListContainer.innerHTML = "";
    await (0,_firebase_firebase__WEBPACK_IMPORTED_MODULE_0__.getSortDocs)(_sorting_sorting__WEBPACK_IMPORTED_MODULE_1__.currentSortType, (0,_sorting_sorting__WEBPACK_IMPORTED_MODULE_1__.getOrderBySorting)(_sorting_sorting__WEBPACK_IMPORTED_MODULE_1__.currentSortType)).then((allBooks) => {
        let catalog = allBooks;
        (0,_booksList__WEBPACK_IMPORTED_MODULE_2__.renderBooks)((0,_sorting_sorting__WEBPACK_IMPORTED_MODULE_1__.sort)(catalog, _sorting_sorting__WEBPACK_IMPORTED_MODULE_1__.currentSortType));
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./src/booksList/modalEdit/modalEdit.ts":
/*!**********************************************!*\
  !*** ./src/booksList/modalEdit/modalEdit.ts ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editEventClick": () => (/* binding */ editEventClick),
/* harmony export */   "myModal": () => (/* binding */ myModal)
/* harmony export */ });
/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../firebase/firebase */ "./src/firebase/firebase.ts");
/* harmony import */ var _sorting_sorting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sorting/sorting */ "./src/booksList/sorting/sorting.ts");
/* harmony import */ var _booksList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../booksList */ "./src/booksList/booksList.ts");
/* harmony import */ var _utils_checkIsbn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/checkIsbn */ "./src/utils/checkIsbn.ts");
/* harmony import */ var _utils_getThumbnailLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/getThumbnailLink */ "./src/utils/getThumbnailLink.ts");
/* harmony import */ var _utils_isNull__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/isNull */ "./src/utils/isNull.ts");
/* harmony import */ var _preloader_preloader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../preloader/preloader */ "./src/preloader/preloader.ts");
/* harmony import */ var _plugin_test_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../plugin/test.js */ "./src/plugin/test.js");
/* harmony import */ var _errorNoBooks_errorNoBooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../errorNoBooks/errorNoBooks */ "./src/errorNoBooks/errorNoBooks.ts");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_sorting_sorting__WEBPACK_IMPORTED_MODULE_1__, _booksList__WEBPACK_IMPORTED_MODULE_2__]);
([_sorting_sorting__WEBPACK_IMPORTED_MODULE_1__, _booksList__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







// import { mask } from "../../utils/masks";


const myModal = new _plugin_test_js__WEBPACK_IMPORTED_MODULE_7__.HystModal({
    linkAttributeName: "data-hystmodal",
    // настройки (не обязательно), см. API
});
let modalEditName = document.querySelector(".modal-edit__name");
let modalEditAuthor = document.querySelector(".modal-edit__author");
let modalEditYear = document.querySelector(".modal-edit__year");
let modalEditRating = document.querySelector(".modal-edit__rating");
let modalEditIsbn = document.querySelector(".modal-edit__isbn");
let editForm = document.querySelector(".modal__edit-card");
let bookId = null;
editForm.addEventListener("submit", (e) => submitEditedBook(e));
async function submitEditedBook(e) {
    _preloader_preloader__WEBPACK_IMPORTED_MODULE_6__.preloader.classList.remove("done");
    e.preventDefault();
    await (0,_firebase_firebase__WEBPACK_IMPORTED_MODULE_0__.updateDocById)(await editBook(), bookId)
        .catch(() => (0,_errorNoBooks_errorNoBooks__WEBPACK_IMPORTED_MODULE_8__.showMessage)());
    _booksList__WEBPACK_IMPORTED_MODULE_2__.booksListContainer.innerHTML = "";
    await (0,_firebase_firebase__WEBPACK_IMPORTED_MODULE_0__.getSortDocs)(_sorting_sorting__WEBPACK_IMPORTED_MODULE_1__.currentSortType, (0,_sorting_sorting__WEBPACK_IMPORTED_MODULE_1__.getOrderBySorting)(_sorting_sorting__WEBPACK_IMPORTED_MODULE_1__.currentSortType))
        .then((allBooks) => {
        let catalog = allBooks;
        (0,_booksList__WEBPACK_IMPORTED_MODULE_2__.renderBooks)((0,_sorting_sorting__WEBPACK_IMPORTED_MODULE_1__.sort)(catalog, _sorting_sorting__WEBPACK_IMPORTED_MODULE_1__.currentSortType));
    })
        .then(() => {
        myModal.close();
        _preloader_preloader__WEBPACK_IMPORTED_MODULE_6__.preloader.classList.add("done");
    });
}
async function editEventClick() {
    let editButtons = document.querySelectorAll(".edit-book-button");
    editButtons.forEach((editButton) => editButton.addEventListener("click", (e) => {
        _preloader_preloader__WEBPACK_IMPORTED_MODULE_6__.preloader.classList.remove("done");
        bookId = e.target.dataset.id;
        (0,_firebase_firebase__WEBPACK_IMPORTED_MODULE_0__.getDocById)(e.target.dataset.id).then((book) => {
            setValues(book);
            _preloader_preloader__WEBPACK_IMPORTED_MODULE_6__.preloader.classList.add("done");
        });
    }));
}
function setValues(book) {
    modalEditName.value = (0,_utils_isNull__WEBPACK_IMPORTED_MODULE_5__.isNull)(book.name);
    modalEditAuthor.value = (0,_utils_isNull__WEBPACK_IMPORTED_MODULE_5__.isNull)(book.author);
    modalEditYear.value = (0,_utils_isNull__WEBPACK_IMPORTED_MODULE_5__.isNull)(book.year);
    modalEditRating.value = (0,_utils_isNull__WEBPACK_IMPORTED_MODULE_5__.isNull)(book.rating);
    modalEditIsbn.value = (0,_utils_isNull__WEBPACK_IMPORTED_MODULE_5__.isNull)(book.isbn.replace(/✔️|❌/g, ""));
    // mask.updateValue();
}
async function editBook() {
    let updatedBook = {
        name: modalEditName.value,
        author: modalEditAuthor.value,
        year: Number(modalEditYear.value),
        rating: Number(modalEditRating.value),
        isbn: await (0,_utils_checkIsbn__WEBPACK_IMPORTED_MODULE_3__.checkIsbn)(modalEditIsbn.value).then((result) => result),
        imageLink: await (0,_utils_getThumbnailLink__WEBPACK_IMPORTED_MODULE_4__.getThumbnailLink)(modalEditName.value)
            .then((result) => result),
    };
    return updatedBook;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./src/booksList/sorting/sorting.ts":
/*!******************************************!*\
  !*** ./src/booksList/sorting/sorting.ts ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowSortingType": () => (/* binding */ ShowSortingType),
/* harmony export */   "catalog": () => (/* binding */ catalog),
/* harmony export */   "currentSortType": () => (/* binding */ currentSortType),
/* harmony export */   "getOrderBySorting": () => (/* binding */ getOrderBySorting),
/* harmony export */   "sort": () => (/* binding */ sort),
/* harmony export */   "sortBy": () => (/* binding */ sortBy)
/* harmony export */ });
/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../firebase/firebase */ "./src/firebase/firebase.ts");
/* harmony import */ var _utils_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/const */ "./src/utils/const.ts");
/* harmony import */ var _booksList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../booksList */ "./src/booksList/booksList.ts");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_booksList__WEBPACK_IMPORTED_MODULE_2__]);
_booksList__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



let ShowSortingType = document.querySelector(".selected-sorting-type"); // тип сортировки
let catalog = [];
let currentSortType = _utils_const__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_TYPE_SORT;
let sortBy;
const sortByYear = document.querySelector("[data-sorting='year']");
const sortByAuthor = document.querySelector("[data-sorting='author']");
const sortByRating = document.querySelector("[data-sorting='rating']");
sortByYear.addEventListener("click", () => handleClick(sortByYear));
sortByAuthor.addEventListener("click", () => handleClick(sortByAuthor));
sortByRating.addEventListener("click", () => handleClick(sortByRating));
function handleClick(sortType) {
    currentSortType = sortType.getAttribute("data-sorting") === 'author' ?
        'author' : sortType.getAttribute("data-sorting") === 'rating' ?
        'rating' : 'year';
    _booksList__WEBPACK_IMPORTED_MODULE_2__.booksListContainer.innerHTML = "";
    setSortingType(currentSortType);
    (0,_firebase_firebase__WEBPACK_IMPORTED_MODULE_0__.getSortDocs)(currentSortType, getOrderBySorting(currentSortType)).then((allBooks) => {
        catalog = allBooks;
        (0,_booksList__WEBPACK_IMPORTED_MODULE_2__.renderBooks)(sort(catalog, currentSortType));
    });
}
function setSortingType(sortType) {
    ShowSortingType.innerHTML = sortType;
}
function getOrderBySorting(sortType) {
    return sortType === "author" ? "desc" : "asc";
}
function sort(catalog, sortingType) {
    let arr = [];
    let listData = new Set();
    let sortedArr = [];
    if (sortingType === "author") {
        sortBy = "year";
    }
    else {
        sortBy = "author";
    }
    catalog.forEach((book) => {
        listData.add(book[sortingType]);
    });
    let listDataArr = Array.from(listData);
    for (let i = 0; i < listDataArr.length; i++) {
        let arrayBooks = catalog.filter((book) => book[sortingType] === listDataArr[i]);
        sortedArr.push(arrayBooks);
    }
    sortedArr.forEach((v) => {
        if (v.length > 1) {
            v.sort((a, b) => {
                if (sortBy === "author") {
                    if (a[sortBy].toLowerCase() < b[sortBy].toLowerCase())
                        return 1;
                    if (a[sortBy].toLowerCase() > b[sortBy].toLowerCase())
                        return -1;
                }
                else {
                    if (a[sortBy] < b[sortBy])
                        return -1;
                    if (a[sortBy] > b[sortBy])
                        return 1;
                }
            });
        }
    });
    return arr.concat(...sortedArr);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./src/errorNoBooks/errorNoBooks.ts":
/*!******************************************!*\
  !*** ./src/errorNoBooks/errorNoBooks.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "errorNoBooks": () => (/* binding */ errorNoBooks),
/* harmony export */   "showMessage": () => (/* binding */ showMessage)
/* harmony export */ });
let errorNoBooks = document.querySelector(".error-no-books");
function showMessage() {
    errorNoBooks.classList.add("error-no-books__done");
    setTimeout(() => {
        errorNoBooks.classList.remove("error-no-books__done");
    }, 3000);
}


/***/ }),

/***/ "./src/firebase/firebase.ts":
/*!**********************************!*\
  !*** ./src/firebase/firebase.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteBook": () => (/* binding */ deleteBook),
/* harmony export */   "getAllDocs": () => (/* binding */ getAllDocs),
/* harmony export */   "getDocById": () => (/* binding */ getDocById),
/* harmony export */   "getSortDocs": () => (/* binding */ getSortDocs),
/* harmony export */   "setDoc": () => (/* binding */ setDoc),
/* harmony export */   "updateDocById": () => (/* binding */ updateDocById)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var _mapper_mapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mapper/mapper */ "./src/mapper/mapper.ts");




const firebaseConfig = {
    apiKey: "AIzaSyAlIuYGStK_84_kxcOKl7DCFDK5hwaX9mo",
    authDomain: "book-catalog-26495.firebaseapp.com",
    projectId: "book-catalog-26495",
    storageBucket: "book-catalog-26495.appspot.com",
    messagingSenderId: "577399766434",
    appId: "1:577399766434:web:3361473f93deb164ad86fb",
    measurementId: "G-Q2B6MC9PKL",
};
// Initialize Firebase
const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);
const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(app);
async function getSortDocs(sortingType, directionSort) {
    let arr = [];
    const documents = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(db, "books"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.orderBy)(sortingType, directionSort)));
    documents.docs.forEach((doc) => {
        arr.push((0,_mapper_mapper__WEBPACK_IMPORTED_MODULE_2__.fromDto)(doc.data(), doc.id));
    });
    return arr;
}
async function getAllDocs() {
    let arr = [];
    const documents = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(db, "books"));
    documents.docs.forEach((doc) => {
        arr.push((0,_mapper_mapper__WEBPACK_IMPORTED_MODULE_2__.fromDto)(doc.data(), doc.id));
    });
    return arr;
}
async function setDoc(value) {
    await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(db, "books"), value);
}
async function deleteBook(id) {
    await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.deleteDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(db, "books", id));
}
async function getDocById(id) {
    const document = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(db, "books", id));
    return (0,_mapper_mapper__WEBPACK_IMPORTED_MODULE_2__.fromDto)(document.data(), id);
}
async function updateDocById(updatedBook, id) {
    await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.updateDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(db, "books", id), (0,_mapper_mapper__WEBPACK_IMPORTED_MODULE_2__.toDto)(updatedBook));
}


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_nullstyle_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/nullstyle.css */ "./src/css/nullstyle.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _booksList_booksList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./booksList/booksList */ "./src/booksList/booksList.ts");
/* harmony import */ var _booksList_sorting_sorting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./booksList/sorting/sorting */ "./src/booksList/sorting/sorting.ts");
/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./firebase/firebase */ "./src/firebase/firebase.ts");
/* harmony import */ var _booksList_booksListHeader_booksListRecommendation_booksListRecommendation_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./booksList/booksListHeader/booksListRecommendation/booksListRecommendation.ts */ "./src/booksList/booksListHeader/booksListRecommendation/booksListRecommendation.ts");
/* harmony import */ var _booksList_booksListHeader_booksListAddNewBook_booksListAddNewBook_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./booksList/booksListHeader/booksListAddNewBook/booksListAddNewBook.ts */ "./src/booksList/booksListHeader/booksListAddNewBook/booksListAddNewBook.ts");
/* harmony import */ var _booksList_modalEdit_modalEdit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./booksList/modalEdit/modalEdit */ "./src/booksList/modalEdit/modalEdit.ts");
/* harmony import */ var _img_books_stack_of_three_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/books-stack-of-three.png */ "./src/img/books-stack-of-three.png");
/* harmony import */ var _utils_masks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/masks */ "./src/utils/masks.ts");
/* harmony import */ var _utils_checkIsbn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/checkIsbn */ "./src/utils/checkIsbn.ts");
/* harmony import */ var _plugin_hystModal_min_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./plugin/hystModal.min.css */ "./src/plugin/hystModal.min.css");
/* harmony import */ var _utils_getThumbnailLink__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/getThumbnailLink */ "./src/utils/getThumbnailLink.ts");
/* harmony import */ var _errorNoBooks_errorNoBooks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./errorNoBooks/errorNoBooks */ "./src/errorNoBooks/errorNoBooks.ts");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_booksList_booksList__WEBPACK_IMPORTED_MODULE_2__, _booksList_sorting_sorting__WEBPACK_IMPORTED_MODULE_3__, _booksList_booksListHeader_booksListRecommendation_booksListRecommendation_ts__WEBPACK_IMPORTED_MODULE_5__, _booksList_booksListHeader_booksListAddNewBook_booksListAddNewBook_ts__WEBPACK_IMPORTED_MODULE_6__, _booksList_modalEdit_modalEdit__WEBPACK_IMPORTED_MODULE_7__]);
([_booksList_booksList__WEBPACK_IMPORTED_MODULE_2__, _booksList_sorting_sorting__WEBPACK_IMPORTED_MODULE_3__, _booksList_booksListHeader_booksListRecommendation_booksListRecommendation_ts__WEBPACK_IMPORTED_MODULE_5__, _booksList_booksListHeader_booksListAddNewBook_booksListAddNewBook_ts__WEBPACK_IMPORTED_MODULE_6__, _booksList_modalEdit_modalEdit__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./src/mapper/mapper.ts":
/*!******************************!*\
  !*** ./src/mapper/mapper.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromDto": () => (/* binding */ fromDto),
/* harmony export */   "toDto": () => (/* binding */ toDto)
/* harmony export */ });
function fromDto(value, id) {
    return {
        name: value.name,
        year: value.year,
        author: value.author,
        rating: value.rating,
        imageLink: value.imageLink,
        isbn: value.isbn,
        id: id,
    };
}
function toDto(value) {
    return {
        name: value.name,
        year: value.year,
        author: value.author,
        rating: value.rating,
        imageLink: value.imageLink,
        isbn: value.isbn,
    };
}


/***/ }),

/***/ "./src/preloader/preloader.ts":
/*!************************************!*\
  !*** ./src/preloader/preloader.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "preloader": () => (/* binding */ preloader)
/* harmony export */ });
const preloader = document.getElementById("page-preloader");


/***/ }),

/***/ "./src/utils/checkIsbn.ts":
/*!********************************!*\
  !*** ./src/utils/checkIsbn.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkIsbn": () => (/* binding */ checkIsbn)
/* harmony export */ });
async function checkIsbn(isbn) {
    if (isbn != "") {
        return await fetch(`https://openlibrary.org/isbn/${isbn}.json`).then((response) => {
            if (response.ok) {
                return isbn + "✔️";
            }
            else {
                return isbn + "❌";
            }
        });
    }
    else {
        return isbn;
    }
}


/***/ }),

/***/ "./src/utils/const.ts":
/*!****************************!*\
  !*** ./src/utils/const.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_TYPE_SORT": () => (/* binding */ DEFAULT_TYPE_SORT)
/* harmony export */ });
const DEFAULT_TYPE_SORT = 'year';


/***/ }),

/***/ "./src/utils/getThumbnailLink.ts":
/*!***************************************!*\
  !*** ./src/utils/getThumbnailLink.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getThumbnailLink": () => (/* binding */ getThumbnailLink)
/* harmony export */ });
async function getThumbnailLink(book) {
    return await fetch("https://www.googleapis.com/books/v1/volumes?q=" + book)
        .then((response) => response.json())
        .then((value) => {
        if (value.items != null) {
            for (var i = 0; i < value.items.length; i++) {
                var item = value.items[i];
                if (item.volumeInfo.imageLinks != null) {
                    return item.volumeInfo.imageLinks.thumbnail;
                }
            }
        }
    });
}


/***/ }),

/***/ "./src/utils/isNull.ts":
/*!*****************************!*\
  !*** ./src/utils/isNull.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isNull": () => (/* binding */ isNull)
/* harmony export */ });
function isNull(value) {
    return value != "" && value != 0 ? value : "";
}


/***/ }),

/***/ "./src/utils/masks.ts":
/*!****************************!*\
  !*** ./src/utils/masks.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var imask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! imask */ "./node_modules/imask/esm/index.js");

//-----------------add-----------------------------------------
// var element = document.querySelector(".book-list__item__add__isbn");
// var maskOptions = {
//   mask: "0000000000000",
//   // mask: "000-0-000-00000-0",
// };
// IMask(element, maskOptions);
var element2 = document.querySelector(".book-list__item__add__year");
var maskOptions2 = {
    mask: Date,
    pattern: "00000",
};
(0,imask__WEBPACK_IMPORTED_MODULE_0__["default"])(element2, maskOptions2);
var element3 = document.querySelector(".book-list__item__add__rating");
var maskOptions3 = {
    mask: '00',
    pattern: "00",
};
(0,imask__WEBPACK_IMPORTED_MODULE_0__["default"])(element3, maskOptions3);
//-------------edit-----------------------------------------------
// var element4 = document.querySelector(".modal-edit__isbn");
// var maskOptions4 = {
//   mask: "0000000000000",
// };
// export let mask = IMask(element4, maskOptions4);
var element5 = document.querySelector(".modal-edit__rating");
var maskOptions5 = {
    mask: '00',
    pattern: "00",
};
(0,imask__WEBPACK_IMPORTED_MODULE_0__["default"])(element5, maskOptions5);
var element6 = document.querySelector(".modal-edit__year");
var maskOptions6 = {
    mask: Date,
    pattern: "00000",
};
(0,imask__WEBPACK_IMPORTED_MODULE_0__["default"])(element6, maskOptions6);
//-----------------------------------------------------------------


/***/ }),

/***/ "./src/plugin/test.js":
/*!****************************!*\
  !*** ./src/plugin/test.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HystModal": () => (/* binding */ HystModal)
/* harmony export */ });
class HystModal {
  constructor(props) {
      let defaultConfig = {
          backscroll: true,
          linkAttributeName: 'data-hystmodal',
          closeOnOverlay: true,
          closeOnEsc: true,
          closeOnButton: true,
          waitTransitions: false,
          catchFocus: true,
          fixedSelectors: '*[data-hystfixed]',
          beforeOpen: () => {},
          afterClose: () => {},
      }
      this.config = Object.assign(defaultConfig, props)
      if (this.config.linkAttributeName) {
          this.init()
      }
      this._closeAfterTransition = this._closeAfterTransition.bind(this)
  }

  init() {
      this.isOpened = false
      this.openedWindow = false
      this.starter = false
      this._nextWindows = false
      this._scrollPosition = 0
      this._reopenTrigger = false
      this._overlayChecker = false
      this._isMoved = false
      this._focusElements = [
          'a[href]',
          'area[href]',
          'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
          'select:not([disabled]):not([aria-hidden])',
          'textarea:not([disabled]):not([aria-hidden])',
          'button:not([disabled]):not([aria-hidden])',
          'iframe',
          'object',
          'embed',
          '[contenteditable]',
          '[tabindex]:not([tabindex^="-"])',
      ]
      this._modalBlock = false

      let existingShadow = document.querySelector('.hystmodal__shadow')
      if (existingShadow) {
          this.shadow = existingShadow
      } else {
          this.shadow = document.createElement('div')
          this.shadow.classList.add('hystmodal__shadow')
          document.body.appendChild(this.shadow)
      }
      this.eventsFeeler()
  }

  eventsFeeler() {
      document.addEventListener(
          'click',
          function (e) {
              const clickedlink = e.target.closest(
                  '[' + this.config.linkAttributeName + ']',
              )
              if (!this._isMoved && clickedlink) {
                  e.preventDefault()
                  this.starter = clickedlink
                  let targetSelector = this.starter.getAttribute(
                      this.config.linkAttributeName,
                  )
                  this._nextWindows = document.querySelector(targetSelector)
                  this.open()
                  return
              }
              if (
                  this.config.closeOnButton &&
                  e.target.closest('[data-hystclose]')
              ) {
                  this.close()
                  return
              }
          }.bind(this),
      )

      if (this.config.closeOnOverlay) {
          document.addEventListener(
              'mousedown',
              function (e) {
                  if (
                      !this._isMoved &&
                      e.target instanceof Element &&
                      !e.target.classList.contains('hystmodal__wrap')
                  )
                      return
                  this._overlayChecker = true
              }.bind(this),
          )

          document.addEventListener(
              'mouseup',
              function (e) {
                  if (
                      !this._isMoved &&
                      e.target instanceof Element &&
                      this._overlayChecker &&
                      e.target.classList.contains('hystmodal__wrap')
                  ) {
                      e.preventDefault()
                      !this._overlayChecker
                      this.close()
                      return
                  }
                  this._overlayChecker = false
              }.bind(this),
          )
      }

      window.addEventListener(
          'keydown',
          function (e) {
              if (
                  !this._isMoved &&
                  this.config.closeOnEsc &&
                  e.which == 27 &&
                  this.isOpened
              ) {
                  e.preventDefault()
                  this.close()
                  return
              }
              if (
                  !this._isMoved &&
                  this.config.catchFocus &&
                  e.which == 9 &&
                  this.isOpened
              ) {
                  this.focusCatcher(e)
                  return
              }
          }.bind(this),
      )
  }

  open(selector) {
      if (selector) {
          if (typeof selector === 'string') {
              this._nextWindows = document.querySelector(selector)
          } else {
              this._nextWindows = selector
          }
      }
      if (!this._nextWindows) {
          console.log('Warning: hystModal selector is not found')
          return
      }
      if (this.isOpened) {
          this._reopenTrigger = true
          this.close()
          return
      }
      this.openedWindow = this._nextWindows
      this._modalBlock = this.openedWindow.querySelector('.hystmodal__window')
      this.config.beforeOpen(this)
      this._bodyScrollControl()
      this.shadow.classList.add('hystmodal__shadow--show')
      this.openedWindow.classList.add('hystmodal--active')
      this.openedWindow.setAttribute('aria-hidden', 'false')
      if (this.config.catchFocus) this.focusControl()
      this.isOpened = true
  }

  close() {
      if (!this.isOpened) {
          return
      }
      if (this.config.waitTransitions) {
          this.openedWindow.classList.add('hystmodal--moved')
          this._isMoved = true
          this.openedWindow.addEventListener(
              'transitionend',
              this._closeAfterTransition,
          )
          this.openedWindow.classList.remove('hystmodal--active')
      } else {
          this.openedWindow.classList.remove('hystmodal--active')
          this._closeAfterTransition()
      }
  }

  _closeAfterTransition() {
      this.openedWindow.classList.remove('hystmodal--moved')
      this.openedWindow.removeEventListener(
          'transitionend',
          this._closeAfterTransition,
      )
      this._isMoved = false
      this.shadow.classList.remove('hystmodal__shadow--show')
      this.openedWindow.setAttribute('aria-hidden', 'true')

      if (this.config.catchFocus) this.focusControl()
      this._bodyScrollControl()
      this.isOpened = false
      this.openedWindow.scrollTop = 0
      this.config.afterClose(this)

      if (this._reopenTrigger) {
          this._reopenTrigger = false
          this.open()
      }
  }

  focusControl() {
      const nodes = this.openedWindow.querySelectorAll(this._focusElements)
      if (this.isOpened && this.starter) {
          this.starter.focus()
      } else {
          if (nodes.length) nodes[0].focus()
      }
  }

  focusCatcher(e) {
      const nodes = this.openedWindow.querySelectorAll(this._focusElements)
      const nodesArray = Array.prototype.slice.call(nodes)
      if (!this.openedWindow.contains(document.activeElement)) {
          nodesArray[0].focus()
          e.preventDefault()
      } else {
          const focusedItemIndex = nodesArray.indexOf(document.activeElement)
          console.log(focusedItemIndex)
          if (e.shiftKey && focusedItemIndex === 0) {
              nodesArray[nodesArray.length - 1].focus()
              e.preventDefault()
          }
          if (!e.shiftKey && focusedItemIndex === nodesArray.length - 1) {
              nodesArray[0].focus()
              e.preventDefault()
          }
      }
  }

  _bodyScrollControl() {
      if (!this.config.backscroll) return

      // collect fixed selectors to array
      let fixedSelectors = Array.prototype.slice.call(
          document.querySelectorAll(this.config.fixedSelectors),
      )

      let html = document.documentElement
      if (this.isOpened === true) {
          html.classList.remove('hystmodal__opened')
          html.style.marginRight = ''
          fixedSelectors.map(el => {
              el.style.marginRight = ''
          })
          window.scrollTo(0, this._scrollPosition)
          html.style.top = ''
          return
      }
      this._scrollPosition = window.pageYOffset
      let marginSize = window.innerWidth - html.clientWidth
      html.style.top = -this._scrollPosition + 'px'

      if (marginSize) {
          html.style.marginRight = marginSize + 'px'
          fixedSelectors.map(el => {
              el.style.marginRight =
                  parseInt(getComputedStyle(el).marginRight) +
                  marginSize +
                  'px'
          })
      }
      html.classList.add('hystmodal__opened')
  }
}

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath fill=%27%23fff%27 stroke=%27%23111%27 stroke-linecap=%27square%27 stroke-miterlimit=%2750%27 stroke-width=%272%27 d=%27M22 2L2 22%27/%3E%3Cpath fill=%27none%27 stroke=%27%23111%27 stroke-linecap=%27square%27 stroke-miterlimit=%2750%27 stroke-width=%272%27 d=%27M2 2l20 20%27/%3E%3C/svg%3E":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath fill=%27%23fff%27 stroke=%27%23111%27 stroke-linecap=%27square%27 stroke-miterlimit=%2750%27 stroke-width=%272%27 d=%27M22 2L2 22%27/%3E%3Cpath fill=%27none%27 stroke=%27%23111%27 stroke-linecap=%27square%27 stroke-miterlimit=%2750%27 stroke-width=%272%27 d=%27M2 2l20 20%27/%3E%3C/svg%3E ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath fill=%27%23fff%27 stroke=%27%23111%27 stroke-linecap=%27square%27 stroke-miterlimit=%2750%27 stroke-width=%272%27 d=%27M22 2L2 22%27/%3E%3Cpath fill=%27none%27 stroke=%27%23111%27 stroke-linecap=%27square%27 stroke-miterlimit=%2750%27 stroke-width=%272%27 d=%27M2 2l20 20%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath fill=%27%23fff%27 stroke=%27%23fff%27 stroke-linecap=%27square%27 stroke-miterlimit=%2750%27 stroke-width=%272%27 d=%27M22 2L2 22%27/%3E%3Cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27square%27 stroke-miterlimit=%2750%27 stroke-width=%272%27 d=%27M2 2l20 20%27/%3E%3C/svg%3E":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath fill=%27%23fff%27 stroke=%27%23fff%27 stroke-linecap=%27square%27 stroke-miterlimit=%2750%27 stroke-width=%272%27 d=%27M22 2L2 22%27/%3E%3Cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27square%27 stroke-miterlimit=%2750%27 stroke-width=%272%27 d=%27M2 2l20 20%27/%3E%3C/svg%3E ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath fill=%27%23fff%27 stroke=%27%23fff%27 stroke-linecap=%27square%27 stroke-miterlimit=%2750%27 stroke-width=%272%27 d=%27M22 2L2 22%27/%3E%3Cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27square%27 stroke-miterlimit=%2750%27 stroke-width=%272%27 d=%27M2 2l20 20%27/%3E%3C/svg%3E";

/***/ }),

/***/ "./src/img/books-stack-of-three.png":
/*!******************************************!*\
  !*** ./src/img/books-stack-of-three.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/21495c53bf2fa8d15d15.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackThen = typeof Symbol === "function" ? Symbol("webpack then") : "__webpack_then__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var completeQueue = (queue) => {
/******/ 			if(queue) {
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var completeFunction = (fn) => (!--fn.r && fn());
/******/ 		var queueFunction = (queue, fn) => (queue ? queue.push(fn) : completeFunction(fn));
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackThen]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						completeQueue(queue);
/******/ 						queue = 0;
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						completeQueue(queue);
/******/ 						queue = 0;
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackThen] = (fn, reject) => (queueFunction(queue, fn), dep['catch'](reject));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackThen] = (fn) => (completeFunction(fn));
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue = hasAwait && [];
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var isEvaluating = true;
/******/ 			var nested = false;
/******/ 			var whenAll = (deps, onResolve, onReject) => {
/******/ 				if (nested) return;
/******/ 				nested = true;
/******/ 				onResolve.r += deps.length;
/******/ 				deps.map((dep, i) => (dep[webpackThen](onResolve, onReject)));
/******/ 				nested = false;
/******/ 			};
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = () => (resolve(exports), completeQueue(queue), queue = 0);
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackThen] = (fn, rejectFn) => {
/******/ 				if (isEvaluating) { return completeFunction(fn); }
/******/ 				if (currentDeps) whenAll(currentDeps, fn, rejectFn);
/******/ 				queueFunction(queue, fn);
/******/ 				promise['catch'](rejectFn);
/******/ 			};
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve, reject) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					whenAll(currentDeps, fn, reject);
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => (err && reject(promise[webpackError] = err), outerResolve()));
/******/ 			isEvaluating = false;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"scripts": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktest"] = self["webpackChunktest"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_getU-f2c48c"], () => (__webpack_require__("./src/main.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=scripts.5d71427f12c28e095143.js.map