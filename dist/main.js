/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Merienda-VariableFont_wght.ttf */ \"./src/Merienda-VariableFont_wght.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n    font-family: Merienda;\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format(\"truetype\");\n}\n\n:root {\n    font-size: 62.5%; \n}\n\n*, ::before, ::after {\n    font-family: Merienda, Arial, sans-serif, system-ui, \"Segoe UI\", Roboto, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 1.6rem;\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    min-width: 300px;\n    max-width: 2560px;\n    min-height: 100vh;\n    min-height: 100svh;\n    margin: auto;\n}\n\n.backdrop {\n    position: fixed;\n    width: 2560px;\n    height: 100vh;\n    object-fit: cover;\n    z-index: -1;\n}\n\nheader {\n    display: grid;\n    justify-items: center;\n    gap: 20px;\n    padding: 20px;\n    background-color: rgb(255, 255, 255, 0.5);\n}\n\nh1 {\n    font-size: 3.2rem;\n    text-align: center;\n}\n\nnav {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    gap: 20px;\n}\n\nbutton {\n    border: none;\n    outline: none;\n    appearance: none; \n    min-width: 75px;\n    padding: 10px 10px 5px;\n    border-bottom: 5px solid rgba(0, 0, 0, 0.0);\n    outline: 1px solid black;\n    background-color: rgba(0, 0, 0, 0.0);\n}\n\nbutton:hover {\n    cursor: pointer;\n}\n\n.selected {\n    border-color: black;\n}\n\nmain {\n    flex: 1;\n    min-width: 300px;\n    padding: 20px;\n}\n\n.home-container {\n    text-align: center;\n    display: grid;\n    gap: 20px;\n    max-width: 420px;\n    padding: 20px;\n    border-radius: 10px;\n    background-color: rgb(255, 255, 255, 0.5);\n    margin: auto;\n}\n\n.chef {\n    justify-self: center;\n    height: 200px;\n    width: 200px;\n    object-fit: cover;\n    border-radius: 50%;\n    opacity: 0.7;\n}\n\nh2 {\n    font-size: 1.8rem;\n}\n\n.menu-container {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(min(100%, 400px), 1fr));\n    gap: 20px;\n    max-width: 860px;\n    margin: auto;\n}\n\n.menu-item {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n    gap: 20px;\n    padding: 20px;\n    background-color: rgb(255, 255, 255, 0.5);\n    border-radius: 10px;\n}\n\n.image {\n    height: 150px;\n    width: 150px;\n    object-fit: cover;\n    border-radius: 10px;\n}\n\n.description {\n    text-align: center;\n    flex: 1;\n    display: grid;\n    justify-items: center;\n    gap: 10px;\n    min-width: 160px;\n}\n\n.contact-container {\n    display: grid;\n    gap: 20px;\n    max-width: 460px;\n    padding: 20px;\n    border-radius: 10px;\n    background-color: rgba(255, 255, 255, 0.5);\n    margin: auto;\n}\n\n.icon {\n    width: 20px;\n}\n\n.icon-container {\n    display: flex;\n    align-items: end;\n    gap: 10px;\n}\n\n.location-pin {\n    width: 100%;\n    object-fit: cover;\n    aspect-ratio: 1 / 1;\n    border-radius: 10px;\n    opacity: 0.9;\n}\n\nfooter {\n    text-align: center;\n    color: rgb(255, 255, 255, 0.5);\n    padding-bottom: 20px;\n}\n\na {\n    color: rgb(255, 255, 255, 0.7)\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact-module/contact.js":
/*!***************************************!*\
  !*** ./src/contact-module/contact.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contact)\n/* harmony export */ });\n/* harmony import */ var _call_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./call.svg */ \"./src/contact-module/call.svg\");\n/* harmony import */ var _mail_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mail.svg */ \"./src/contact-module/mail.svg\");\n/* harmony import */ var _location_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./location.jpg */ \"./src/contact-module/location.jpg\");\n\n\n\n\n// This function returns a div containing the information on the contact page;\nfunction contact() {\n    const contact = document.createElement(\"div\");\n    contact.classList.add(\"contact-container\");\n\n    const numberContainer = document.createElement(\"div\");\n    numberContainer.classList.add(\"icon-container\");\n    const numberIcon = document.createElement(\"img\");\n    numberIcon.classList.add(\"icon\");\n    numberIcon.src = _call_svg__WEBPACK_IMPORTED_MODULE_0__;\n    const number = document.createElement(\"p\");\n    number.innerText = \"+61 37 433 8753\";\n    numberContainer.appendChild(numberIcon);\n    numberContainer.appendChild(number);\n\n    const emailContainer = document.createElement(\"div\");\n    emailContainer.classList.add(\"icon-container\");\n    const emailIcon = document.createElement(\"img\");\n    emailIcon.classList.add(\"icon\");\n    emailIcon.src = _mail_svg__WEBPACK_IMPORTED_MODULE_1__;\n    const email = document.createElement(\"p\");\n    email.innerText = \"billysburgers@gmail.com\";\n    emailContainer.appendChild(emailIcon);\n    emailContainer.appendChild(email);\n\n    const address = document.createElement(\"p\");\n    address.innerText = \"4 Nemo St, West Hollywood\"\n\n    const pin = document.createElement(\"img\");\n    pin.classList.add(\"location-pin\");\n    pin.src = _location_jpg__WEBPACK_IMPORTED_MODULE_2__;\n    pin.alt = \"Billy's Burgers Location.\"\n\n    contact.appendChild(numberContainer);\n    contact.appendChild(emailContainer);\n    contact.appendChild(address);\n    contact.appendChild(pin);\n    return contact;\n}\n\n//# sourceURL=webpack://restaurant-page/./src/contact-module/contact.js?");

/***/ }),

/***/ "./src/home-module/home.js":
/*!*********************************!*\
  !*** ./src/home-module/home.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ home)\n/* harmony export */ });\n/* harmony import */ var _chef_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chef.jpg */ \"./src/home-module/chef.jpg\");\n\n\n// This function returns a div containing the information on the home page;\nfunction home() {\n    const container = document.createElement(\"div\");\n    container.classList.add(\"home-container\");\n\n    const chef = document.createElement(\"img\");\n    chef.classList.add(\"chef\");\n    chef.src = _chef_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    chef.alt = \"chef\";\n\n    const aboutHeading = document.createElement(\"h2\");\n    aboutHeading.innerText = \"About Us\";\n    const about = document.createElement(\"p\");\n    about.innerText = \"Billy loved every moment of bringing people together with a tasty meal and we strive to continue living his dream. It's not just about food, it's about family. We welcome you to join us :)\";\n\n    const hoursHeading = document.createElement(\"h2\");\n    hoursHeading.innerText = \"Hours\";\n    const hours = document.createElement(\"p\");\n    hours.innerText = \"Mon/Wed: 0800 - 1600\\n Tue/Thur: 1000 - 1800\\n Sat: 1300 - 2300\\n Sun: 1200 - 1400\";\n\n    container.appendChild(chef);\n    container.appendChild(aboutHeading);\n    container.appendChild(about);\n    container.appendChild(hoursHeading);\n    container.appendChild(hours);\n    return container;\n}\n\n//# sourceURL=webpack://restaurant-page/./src/home-module/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _home_module_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-module/home.js */ \"./src/home-module/home.js\");\n/* harmony import */ var _menu_module_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-module/menu.js */ \"./src/menu-module/menu.js\");\n/* harmony import */ var _contact_module_contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-module/contact.js */ \"./src/contact-module/contact.js\");\n/* harmony import */ var _background_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./background.jpg */ \"./src/background.jpg\");\n\n\n\n\n\n\n// Add website header to the htlm document body;\nconst body = document.querySelector(\"body\");\nbody.innerHTML = \"<header><h1>Billy's Burgers</h1><nav><button class='home'>Home</button><button class='menu'>Menu</button><button class='contacts'>Contact</button></nav></header><main></main><footer>Made by <a href='https://github.com/Ngonidzashe-Zvenyika'>Ngonidzashe Zvenyika</a></footer>\";\n\n// Add the website's background to the html document body;\nconst backdrop = document.createElement(\"img\");\nbackdrop.classList.add(\"backdrop\");\nbackdrop.src = _background_jpg__WEBPACK_IMPORTED_MODULE_4__;\nbackdrop.alt = \"background\";\nbody.appendChild(backdrop);\n\n// Initialize the website by appending the home page which is constructed by the imported home() function to the html main element;\nconst main = document.querySelector(\"main\");\nmain.appendChild((0,_home_module_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n\n// Add event listeners to change the contents of the html main element and highlight the selected tab when switching between the website's tabs;\nconst buttons = document.querySelectorAll(\"button\");\nfor (const button of buttons) {\n    if (button.classList.contains(\"home\")) button.classList.add(\"selected\");\n    button.addEventListener(\"click\", () => {\n        main.replaceChildren();\n        buttons.forEach(button => button.classList.remove(\"selected\"));\n        button.classList.add(\"selected\"); \n        switch (true) {\n            case (button.classList.contains(\"home\")):  \n                main.appendChild((0,_home_module_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n                break;\n            case (button.classList.contains(\"menu\")):   \n                main.appendChild((0,_menu_module_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n                break;\n            case (button.classList.contains(\"contacts\")):   \n                main.appendChild((0,_contact_module_contact_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\n                break;\n        };\n    });\n};\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu-module/menu.js":
/*!*********************************!*\
  !*** ./src/menu-module/menu.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menu)\n/* harmony export */ });\n/* harmony import */ var _beef_burger_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./beef-burger.jpg */ \"./src/menu-module/beef-burger.jpg\");\n/* harmony import */ var _breakfast_burger_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./breakfast-burger.jpg */ \"./src/menu-module/breakfast-burger.jpg\");\n/* harmony import */ var _pork_burger_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pork-burger.jpg */ \"./src/menu-module/pork-burger.jpg\");\n/* harmony import */ var _chicken_burger_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chicken-burger.jpg */ \"./src/menu-module/chicken-burger.jpg\");\n/* harmony import */ var _sandwich_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sandwich.jpg */ \"./src/menu-module/sandwich.jpg\");\n/* harmony import */ var _wedges_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wedges.jpg */ \"./src/menu-module/wedges.jpg\");\n/* harmony import */ var _fries_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fries.jpg */ \"./src/menu-module/fries.jpg\");\n/* harmony import */ var _caesar_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./caesar.jpg */ \"./src/menu-module/caesar.jpg\");\n/* harmony import */ var _greek_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./greek.jpg */ \"./src/menu-module/greek.jpg\");\n/* harmony import */ var _cocktail_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cocktail.jpg */ \"./src/menu-module/cocktail.jpg\");\n\n\n\n\n\n\n\n\n\n\n\n// This function returns a div containing the information on the menu page;\nfunction menu() {\n    const container = document.createElement(\"div\")\n    container.classList.add(\"menu-container\");\n    container.appendChild(item(\"Classic Beef Burger\", \"Premium beef patty, Glazed onion, Billy's sauce, Toasted bun\", \"$8\", _beef_burger_jpg__WEBPACK_IMPORTED_MODULE_0__));\n    container.appendChild(item(\"Breakfast Burger\", \"Premium beef patty, Fried egg, Cheddar, Rocket, Billy's sauce, Toasted bun\", \"$10\", _breakfast_burger_jpg__WEBPACK_IMPORTED_MODULE_1__));\n    container.appendChild(item(\"Pulled Pork Burger\", \"Succulant smoked swine, Vegetable garnish, Billy's sauce, Toasted bun\", \"$12\", _pork_burger_jpg__WEBPACK_IMPORTED_MODULE_2__));\n    container.appendChild(item(\"Chicken Burger\", \"Shredded chicken, Avocado, Parmesian sauce, Toasted bun\", \"$11\", _chicken_burger_jpg__WEBPACK_IMPORTED_MODULE_3__));\n    container.appendChild(item(\"Steak Sandwich\", \"Prime steak, Lettuce, Pickle, Glazed onion, Tomato, Billy's sauce, Toasted bun\", \"$12\", _sandwich_jpg__WEBPACK_IMPORTED_MODULE_4__));\n    container.appendChild(item(\"Potato wedges\", \"Uniform portion of wedges lightly seasoned with kosher salt\", \"$8\", _wedges_jpg__WEBPACK_IMPORTED_MODULE_5__));\n    container.appendChild(item(\"Crispy fries\", \"Uniform portion of fries with chilli flakes\", \"$6\", _fries_jpg__WEBPACK_IMPORTED_MODULE_6__));\n    container.appendChild(item(\"Caesar salad\", \"Shredded chicken, Lettuce,  Onion, Parmesian, Caesar's dressing\", \"$7\", _caesar_jpg__WEBPACK_IMPORTED_MODULE_7__));\n    container.appendChild(item(\"Greek salad\", \"Cherry tomato, Feta, Olives, Onion, Cucumber, Pepper, Greek dressing\", \"$5\", _greek_jpg__WEBPACK_IMPORTED_MODULE_8__));\n    container.appendChild(item(\"Billy's Cocktail\", \"Assorted non-alchoholic cocktails\", \"$3\", _cocktail_jpg__WEBPACK_IMPORTED_MODULE_9__));\n    return container;\n}\n\n// This function creates a menu item and is used by the exported function to avoid repeating similar code;\nfunction item(item, aboutItem, amount, src) {\n    const menuItem = document.createElement(\"div\");\n    menuItem.classList.add(\"menu-item\");\n\n    const image = document.createElement(\"img\");\n    image.classList.add(\"image\");\n    image.src = src;\n    image.alt = item;\n\n    const description = document.createElement(\"div\");\n    description.classList.add(\"description\");\n\n    const name = document.createElement(\"h2\");\n    name.innerText = item;\n\n    const ingredients = document.createElement(\"p\");\n    ingredients.classList.add(\"ingredients\");\n    ingredients.innerText = aboutItem;\n\n    const price = document.createElement(\"h3\");\n    price.classList.add(\"price\")\n    price.innerText = amount;\n\n    description.appendChild(name);\n    description.appendChild(ingredients);\n    description.appendChild(price);\n    \n    menuItem.appendChild(image);\n    menuItem.appendChild(description);\n    return menuItem;\n}\n\n//# sourceURL=webpack://restaurant-page/./src/menu-module/menu.js?");

/***/ }),

/***/ "./src/Merienda-VariableFont_wght.ttf":
/*!********************************************!*\
  !*** ./src/Merienda-VariableFont_wght.ttf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"373b823211bb1d6f1f8b.ttf\";\n\n//# sourceURL=webpack://restaurant-page/./src/Merienda-VariableFont_wght.ttf?");

/***/ }),

/***/ "./src/background.jpg":
/*!****************************!*\
  !*** ./src/background.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"abd3a07327df42ef791c.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/background.jpg?");

/***/ }),

/***/ "./src/contact-module/call.svg":
/*!*************************************!*\
  !*** ./src/contact-module/call.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5f592dfa1b7961842bdf.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/contact-module/call.svg?");

/***/ }),

/***/ "./src/contact-module/location.jpg":
/*!*****************************************!*\
  !*** ./src/contact-module/location.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"53573eb58fc309cfb5ac.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/contact-module/location.jpg?");

/***/ }),

/***/ "./src/contact-module/mail.svg":
/*!*************************************!*\
  !*** ./src/contact-module/mail.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0d08e9ecf8c30e42e161.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/contact-module/mail.svg?");

/***/ }),

/***/ "./src/home-module/chef.jpg":
/*!**********************************!*\
  !*** ./src/home-module/chef.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5ac28925531262415db4.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/home-module/chef.jpg?");

/***/ }),

/***/ "./src/menu-module/beef-burger.jpg":
/*!*****************************************!*\
  !*** ./src/menu-module/beef-burger.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ee6ff94437fe5076b318.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/menu-module/beef-burger.jpg?");

/***/ }),

/***/ "./src/menu-module/breakfast-burger.jpg":
/*!**********************************************!*\
  !*** ./src/menu-module/breakfast-burger.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9fca8d2b8eaa18178197.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/menu-module/breakfast-burger.jpg?");

/***/ }),

/***/ "./src/menu-module/caesar.jpg":
/*!************************************!*\
  !*** ./src/menu-module/caesar.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b751c86a13b4da0f2225.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/menu-module/caesar.jpg?");

/***/ }),

/***/ "./src/menu-module/chicken-burger.jpg":
/*!********************************************!*\
  !*** ./src/menu-module/chicken-burger.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8e90de8978aa382e7232.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/menu-module/chicken-burger.jpg?");

/***/ }),

/***/ "./src/menu-module/cocktail.jpg":
/*!**************************************!*\
  !*** ./src/menu-module/cocktail.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bfdd35c47db4449cead0.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/menu-module/cocktail.jpg?");

/***/ }),

/***/ "./src/menu-module/fries.jpg":
/*!***********************************!*\
  !*** ./src/menu-module/fries.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bdc155d8b6617ef10a0d.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/menu-module/fries.jpg?");

/***/ }),

/***/ "./src/menu-module/greek.jpg":
/*!***********************************!*\
  !*** ./src/menu-module/greek.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c010f0ed652d91c160c9.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/menu-module/greek.jpg?");

/***/ }),

/***/ "./src/menu-module/pork-burger.jpg":
/*!*****************************************!*\
  !*** ./src/menu-module/pork-burger.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2c4c29445039ce741a5e.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/menu-module/pork-burger.jpg?");

/***/ }),

/***/ "./src/menu-module/sandwich.jpg":
/*!**************************************!*\
  !*** ./src/menu-module/sandwich.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8729c331dca62534d4cf.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/menu-module/sandwich.jpg?");

/***/ }),

/***/ "./src/menu-module/wedges.jpg":
/*!************************************!*\
  !*** ./src/menu-module/wedges.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"178d5e4bba54fd88aa21.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/menu-module/wedges.jpg?");

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
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
/******/ 			"index": 0
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;