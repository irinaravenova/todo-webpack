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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./dm-serif-display.woff2 */ \"./src/dm-serif-display.woff2\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n    font-family: 'DM Serif Display';\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('woff2');\n    font-style: normal;\n    font-weight: 400;\n}\n\nbody {\n    font-family: 'DM Serif Display';\n    margin: 0;\n    padding: 0;\n    background-color: rgb(147, 212, 212);\n    height: 100vh;\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: minmax(200px, 1fr) 5fr;\n    grid-template-rows: 1fr 100%;\n    grid-template-areas: \"sidebar header\"\n                        \"sidebar content\"\n}\n\n.header{\n    display: flex;\n    font-style: italic;\n    grid-area: header;\n    height: 100px;\n    justify-content: center;    \n    align-items: center;\n    background-color: rgb(127, 207, 207);\n    box-shadow: 0 4px 2px -2px rgb(0, 0, 0, .25);\n}\n\n.sidebar {\n    grid-area: sidebar;\n    text-align: center;\n    background-color: rgb(127, 207, 207);\n}\n\n.sidebar-sub-2 {\n    display: grid;\n    justify-items: center;\n    gap: 10px;\n    margin-top: 10px;\n}\n\n.checkmate {\n    height: 50px;\n    align-items: center;\n}\n\n.create-task-button,\n.all-projects-button,\n.project-button,\n.create-project-button {\n    font-family: 'DM Serif Display';\n    height: 50px;\n    border-style: none;\n    border-radius: 5px;\n    background-color: rgb(101, 178, 178);\n    width: 80%;\n}\n\nbutton:hover {\n        background-color:rgb(151, 225, 225);\n        transition: 0.25s;\n        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n}\n\n.create-project-button,\n.create-task-button {\n    margin-bottom: 25px;\n}\n\n.content {\n    grid-area: content;\n    padding-left: 15px;\n    padding-right: 15px;\n    padding-top: 15px;\n}\n\n.todo-div {\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: 30% 45% auto;\n    border-style: none;\n    margin-bottom: 15px;\n    padding: 5px;\n    border-radius: 5px;\n}\n\n.todo-div:nth-child(even) {\n    background-color: rgb(127, 207, 207);\n}\n\n.todo-div:nth-child(odd) {\n    background-color: rgb(168, 234, 234);\n}\nform > .form-buttons {\n    display: flex;\n    justify-content: center;\n    gap: 15px;\n    padding: 10px;\n}\n\n#addTodoForm:modal,\n#add-project-form:modal {\n    width: 50%;\n    height: 65%;\n    background-color: rgb(206, 244, 244);\n    border-style: none;\n    padding:30px;\n    border-radius: 10px;\n}\n\n#addTodoForm:modal > form,\n#add-project-form:modal > form {\n    display: grid;\n\n}\n#addTodoForm:modal > form > input,\n#add-project-form:modal > form > input {\n    border-style: none;\n    height: 30px;\n    margin-bottom: 15px;\n    border-radius: 3px;\n}\n\n.modal-buttons {\n    border-style: none;\n    border-radius: 5px;\n    padding: 10px 20px 10px 20px;\n}\n\n.project-header-div {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.project-header-div > button {\n    width: 50px;\n    height: 25px;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-webpack/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-webpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://todo-webpack/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-webpack/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  randomUUID\n});\n\n//# sourceURL=webpack://todo-webpack/./node_modules/uuid/dist/esm-browser/native.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);\n\n//# sourceURL=webpack://todo-webpack/./node_modules/uuid/dist/esm-browser/regex.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rng)\n/* harmony export */ });\n// Unique ID creation requires a high quality random # generator. In the browser we therefore\n// require the crypto API and do not support built-in fallback to lower quality random number\n// generators (like Math.random()).\nlet getRandomValues;\nconst rnds8 = new Uint8Array(16);\nfunction rng() {\n  // lazy load so that environments that need to polyfill have a chance to do so\n  if (!getRandomValues) {\n    // getRandomValues needs to be invoked in a context where \"this\" is a Crypto implementation.\n    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);\n\n    if (!getRandomValues) {\n      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');\n    }\n  }\n\n  return getRandomValues(rnds8);\n}\n\n//# sourceURL=webpack://todo-webpack/./node_modules/uuid/dist/esm-browser/rng.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   unsafeStringify: () => (/* binding */ unsafeStringify)\n/* harmony export */ });\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-browser/validate.js\");\n\n/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\n\nconst byteToHex = [];\n\nfor (let i = 0; i < 256; ++i) {\n  byteToHex.push((i + 0x100).toString(16).slice(1));\n}\n\nfunction unsafeStringify(arr, offset = 0) {\n  // Note: Be careful editing this code!  It's been tuned for performance\n  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434\n  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];\n}\n\nfunction stringify(arr, offset = 0) {\n  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one\n  // of the following:\n  // - One or more input array values don't map to a hex octet (leading to\n  // \"undefined\" in the uuid)\n  // - Invalid input values for the RFC `version` or `variant` fields\n\n  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(uuid)) {\n    throw TypeError('Stringified UUID is invalid');\n  }\n\n  return uuid;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);\n\n//# sourceURL=webpack://todo-webpack/./node_modules/uuid/dist/esm-browser/stringify.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ \"./node_modules/uuid/dist/esm-browser/native.js\");\n/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ \"./node_modules/uuid/dist/esm-browser/rng.js\");\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/esm-browser/stringify.js\");\n\n\n\n\nfunction v4(options, buf, offset) {\n  if (_native_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].randomUUID && !buf && !options) {\n    return _native_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].randomUUID();\n  }\n\n  options = options || {};\n  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`\n\n  rnds[6] = rnds[6] & 0x0f | 0x40;\n  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided\n\n  if (buf) {\n    offset = offset || 0;\n\n    for (let i = 0; i < 16; ++i) {\n      buf[offset + i] = rnds[i];\n    }\n\n    return buf;\n  }\n\n  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);\n\n//# sourceURL=webpack://todo-webpack/./node_modules/uuid/dist/esm-browser/v4.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ \"./node_modules/uuid/dist/esm-browser/regex.js\");\n\n\nfunction validate(uuid) {\n  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].test(uuid);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n//# sourceURL=webpack://todo-webpack/./node_modules/uuid/dist/esm-browser/validate.js?");

/***/ }),

/***/ "./src/createProject.js":
/*!******************************!*\
  !*** ./src/createProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createProject),\n/* harmony export */   projectList: () => (/* binding */ projectList)\n/* harmony export */ });\n/* harmony import */ var _renderProjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderProjects */ \"./src/renderProjects.js\");\n\n\nlet projectList = [];\n\nfunction createProject(name) {\n    \n    const newProject = name\n\n    if (localStorage.getItem(\"projectArray\") === \"\") {\n        let projects = [];\n        projects.push(name)\n        localStorage.setItem('projectArray', JSON.stringify(projects))\n    }\n    else {\n        let storedProjectArray = JSON.parse(localStorage.getItem(\"projectArray\"))\n        storedProjectArray.push(newProject)\n        localStorage.setItem('projectArray', JSON.stringify(storedProjectArray))\n    }\n    (0,_renderProjects__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n}\n\n\n\n//# sourceURL=webpack://todo-webpack/./src/createProject.js?");

/***/ }),

/***/ "./src/createTodo.js":
/*!***************************!*\
  !*** ./src/createTodo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   allTodos: () => (/* binding */ allTodos),\n/* harmony export */   \"default\": () => (/* binding */ createTodo)\n/* harmony export */ });\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n\n\nlet allTodos = [];\n\n\n// New toDo class constructor\nclass ToDo {\n    constructor(project, title, description, dueDate, priority, notes, checkList) {\n        this.project = project\n        this.title = title\n        this.description = description\n        this.dueDate = dueDate\n        this.priority = priority\n        this.notes = notes\n        this.checkList = Boolean(checkList)   \n    }\n}\n\nfunction createTodo(project, title, description, dueDate, priority, notes, checkList) {\n    const newTodo = new ToDo(project, title, description, dueDate, priority, notes, checkList)\n    allTodos.push(newTodo)    \n    localStorage.setItem((0,uuid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(), JSON.stringify(newTodo))\n    return newTodo\n}\n\n\n\n\n//# sourceURL=webpack://todo-webpack/./src/createTodo.js?");

/***/ }),

/***/ "./src/deleteProject.js":
/*!******************************!*\
  !*** ./src/deleteProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ deleteProject)\n/* harmony export */ });\nfunction deleteProject(project) {\n\n    // Ask if the user REALLY wants to delete project + associated tasks.\n    if (confirm(\"Are you sure? Deleting project will remove all associated tasks.\")) {\n        console.log(project)\n\n        // Get old array and assign it to oldProjectArray variable.\n        let oldProjectArray = JSON.parse(localStorage.getItem(\"projectArray\"))\n        console.log(oldProjectArray)\n\n        // Create an empty array to hold the matching keys\n        let keysToRemove = []\n\n        // Find matching toDo objects\n        for (let i = 0; i < localStorage.length; i++) {\n\n            // If the localstorage object is the projectArray, pass it.\n            if (localStorage.key(i) == \"projectArray\") {\n                continue\n            }\n            \n            // Else, if it's not..\n            else {\n                // Assign the matching object to a variable\n                let matchingTodoObject = JSON.parse(localStorage.getItem(localStorage.key(i)))\n                \n                // Assign the matching key to a variable\n                let matchingKey = ((localStorage.key(i)))\n                \n                // If the project title matches the iterated todo's project,\n                if (project == matchingTodoObject.project) {\n\n                    // Add the key to the keystoRemove array.\n                    keysToRemove.push(matchingKey)\n                }\n            }\n        }\n\n        // Iterate through keys-to-remove array and remove that item from local storage.\n        keysToRemove.forEach(key => localStorage.removeItem(key))\n\n        // Filter out the project name from old array and assign new filtered array.\n        const updatedProjectArray = oldProjectArray.filter((projectName) => !(projectName == project))\n\n        // Set the filtered array as the new projectArray in localstorage.\n        localStorage.setItem(\"projectArray\", JSON.stringify(updatedProjectArray))\n\n        // Reload the page to reset/re-render projects and todos.\n        location.reload()\n    }\n\n    // If the user changes their mind on deleting the projects and associated todo's, nothing will happen.\n    else {\n        // Nothing will happen.\n        return\n    }\n\n}\n\n//# sourceURL=webpack://todo-webpack/./src/deleteProject.js?");

/***/ }),

/***/ "./src/editProject.js":
/*!****************************!*\
  !*** ./src/editProject.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ editProject)\n/* harmony export */ });\nfunction editProject(project, newProjectName) {\n\n    // Test passing of variables to module.\n    // console.log(project)\n    // console.log(newProjectName)\n\n    // Get existing project array from localStorage\n    const workingArray = JSON.parse(localStorage.getItem(\"projectArray\"))\n    console.log(workingArray)\n\n    \n    // Iterate through projectArray from LS...\n    for (let i = 0; i < workingArray.length; i++) {\n\n        // And find project name match in the array.\n        // If it is a match...\n        if (workingArray[i] === project) {\n\n            // Delete the old project name and replace it with the new one at the same index in the array.\n            const updatedProjectArray = workingArray.toSpliced(i, 1, newProjectName)\n            console.log(updatedProjectArray)\n\n            // Set updated project array to local storage.\n            localStorage.setItem(\"projectArray\", JSON.stringify(updatedProjectArray))\n\n            // Break out of the loop.\n            break \n        }\n    }\n\n\n    // Iterate through localStorage to find todos with matching old project names.\n    for (let j = 0; j < localStorage.length; j++) {\n\n        let objectKey = localStorage.key(j)\n        let toDoObject = JSON.parse(localStorage.getItem(localStorage.key(j)))\n\n        // Test for object and keys being assigned correctly.\n        // console.log(toDoObject)     \n        // console.log(objectKey)\n\n        // If the localstorage object is the projectArray, pass it.\n        if (localStorage.key(j) == \"projectArray\") {\n            continue\n        }\n\n        // Else, if the project value of the todo object matches old one,\n        else if (toDoObject.project === project) {\n            toDoObject.project = `${newProjectName}`  \n            \n            // Change project names of todo objects and update them in localstorage.\n            localStorage.setItem(objectKey, JSON.stringify(toDoObject))\n\n        }\n\n        // Reload window to display new project names.\n        location.reload()\n    }\n}\n\n//# sourceURL=webpack://todo-webpack/./src/editProject.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTodo */ \"./src/createTodo.js\");\n/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createProject */ \"./src/createProject.js\");\n/* harmony import */ var _renderProjects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderProjects */ \"./src/renderProjects.js\");\n/* harmony import */ var _renderAll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderAll */ \"./src/renderAll.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _editProject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editProject */ \"./src/editProject.js\");\n\n\n\n\n\n\n\n\n\n// Checks for empty localStorage\n// Creates a default projectArray that references \"All\" todos or todos with unspecified projects.\nif (localStorage.getItem(\"projectArray\") === null) {\n    localStorage.setItem(\"projectArray\", JSON.stringify([\"All\"]))\n    ;(0,_renderProjects__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n}\n\n// Get DOM elements\nconst sidebar = document.querySelector('.sidebar')\nconst sidebarSub = document.querySelector('.sidebar-sub-1')\nconst header = document.querySelector('.header')\nconst content = document.querySelector('.content')\nconst addTodoForm = document.getElementById('addTodoForm')\nconst addProjectForm = document.getElementById('add-project-form')\n\n\n// Create New Task button\nconst createNewTodo = document.createElement('button')\ncreateNewTodo.className = \"create-task-button\"\ncreateNewTodo.innerHTML = \"Create Todo\"\nsidebarSub.appendChild(createNewTodo)\n\n// Create New Project button\nconst createProjectButton = document.createElement('button')\ncreateProjectButton.className = \"create-project-button\"\ncreateProjectButton.innerHTML = \"Create Project\"\nsidebarSub.appendChild(createProjectButton)\n\n\n// EVENT LISTENERS \n\n// Create new Todo button listener\ncreateNewTodo.addEventListener('click', () => {\n    addTodoForm.showModal()\n})\n\n// Create new Project button listener\ncreateProjectButton.addEventListener('click', () => {\n    addProjectForm.showModal()\n})\n\n\n// Submit new todo form event listener\ndocument.getElementById('submit-todo').addEventListener('click', function(e) {\n    e.preventDefault()\n    let project = document.getElementById('project').value\n    let title = document.getElementById('title').value\n    let description = document.getElementById('description').value\n    let dueDate = document.getElementById('duedate').value\n    let priority = document.getElementById('priority').value\n    let notes = document.getElementById('notes').value\n    let checkList = document.getElementById('checklist').value\n    let newTodoObject = (0,_createTodo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(project, title, description, dueDate, priority, notes, checkList)\n    _createTodo__WEBPACK_IMPORTED_MODULE_0__.allTodos.push(newTodoObject)\n    ;(0,_renderAll__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\n    addTodoForm.close()\n})\n\n// Submit new project form event listener\ndocument.getElementById(\"submit-project\").addEventListener('click', function(e) {\n    e.preventDefault()\n    let newProjectName = document.getElementById('project-entry').value\n    if ((_createProject__WEBPACK_IMPORTED_MODULE_1__.projectList.indexOf(`${newProjectName}`)) == -1) {\n        (0,_createProject__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(newProjectName)\n        let option = document.createElement(\"option\")\n        option.textContent = newProjectName\n        projectSelect.appendChild(option)\n        addProjectForm.close()\n    }\n    else {\n        alert(\"Project already exists.\")\n        return\n    }\n})\n\n\n// Lists all todos as default upon intial page load\nconst listAllTodos = document.createElement('button')\nlistAllTodos.className = \"all-projects-button\"\nlistAllTodos.innerHTML = \"All Tasks\"\nsidebarSub.appendChild(listAllTodos)\n\nlistAllTodos.addEventListener('click', (e) => {\n    e.preventDefault()\n    ;(0,_renderAll__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\n})\n\n\n// Render project list as options on create new todo form\nlet projectSelect = document.getElementById(\"project\")\nlet storedProjectArray = JSON.parse(localStorage.getItem(\"projectArray\"))\nfor (let i = 0; i < storedProjectArray.length; i++) {\n        let option = document.createElement(\"option\")\n        option.textContent = storedProjectArray[i]\n        projectSelect.appendChild(option)\n    }\n   \n(0,_renderAll__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\n;(0,_renderProjects__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n\n\n//# sourceURL=webpack://todo-webpack/./src/index.js?");

/***/ }),

/***/ "./src/renderAll.js":
/*!**************************!*\
  !*** ./src/renderAll.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderAll)\n/* harmony export */ });\n/* harmony import */ var _createTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTodo */ \"./src/createTodo.js\");\n\n\nfunction renderAll() { \n\n    // First clear contents of whatever is in the main content area (avoids repetition of object listing)\n    const contentBox = document.querySelector('.content')\n    contentBox.replaceChildren()\n\n    const projectTitle = document.createElement('h1')\n    projectTitle.innerHTML = \"All Tasks\"\n    contentBox.appendChild(projectTitle)\n\n    if (localStorage.length == 1 ) {\n        contentBox.appendChild(projectTitle)\n        return\n    }\n\n   else {\n    for (var i = 0; i < localStorage.length; i++){\n\n        let obj = JSON.parse(localStorage.getItem(localStorage.key(i)))\n        let key = localStorage.key(i)\n\n        if (key == \"projectArray\") {\n            continue\n        }\n\n       // Create div container for the Todo object and assign class to it\n        const toDoContainer = document.createElement('div')\n        toDoContainer.className = \"todo-div\"\n\n        //   **** ToDo object render, still needs formatting ****\n        const toDoTitle = document.createElement('p')\n        toDoTitle.innerHTML = `${obj.title}`\n\n        const toDoProject = document.createElement('p')\n        toDoProject.innerHTML = `${obj.project}`\n\n        const toDoDescription = document.createElement('p')\n        toDoDescription.innerHTML = `${obj.description}`\n\n        // Checkbox to toggle completion of task\n        const checkBox = document.createElement('INPUT')\n        checkBox.setAttribute(\"type\", \"checkbox\")\n\n        // Priority range dropdown menu\n        const priorityRange = document.createElement('select')\n        let option1 = document.createElement(\"option\")\n        option1.value =1;\n        option1.text = \"High\"\n        priorityRange.options.add(option1)\n\n        const deleteButton = document.createElement('button')\n        deleteButton.innerHTML = \"X\"\n\n        let option2 = document.createElement(\"option\")\n        option2.value = 2;\n        option2.text = \"Medium\"\n        priorityRange.options.add(option2)\n\n        let option3 = document.createElement(\"option\")\n        option3.value = 3;\n        option3.text = \"Low\"\n        priorityRange.options.add(option3)\n\n        toDoContainer.appendChild(checkBox)\n        toDoContainer.appendChild(toDoTitle)\n        toDoContainer.appendChild(toDoProject)\n        toDoContainer.appendChild(toDoDescription)\n        toDoContainer.appendChild(priorityRange)\n        toDoContainer.appendChild(deleteButton)\n        contentBox.appendChild(toDoContainer)\n    }\n   }\n}\n\n//# sourceURL=webpack://todo-webpack/./src/renderAll.js?");

/***/ }),

/***/ "./src/renderProjects.js":
/*!*******************************!*\
  !*** ./src/renderProjects.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderProjects)\n/* harmony export */ });\n/* harmony import */ var _renderTodos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderTodos */ \"./src/renderTodos.js\");\n/* harmony import */ var _deleteProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleteProject */ \"./src/deleteProject.js\");\n/* harmony import */ var _editProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editProject */ \"./src/editProject.js\");\n\n\n\n\nfunction renderProjects() {\n\n    const sidebarSub = document.querySelector('.sidebar-sub-2')\n    sidebarSub.replaceChildren()\n\n    // If the project array is empty, log out \n    if (localStorage.getItem(\"projectArray\") === \"\") {\n        console.log(\"EMPTY PROJECT ARRAY\")\n    }      \n    else {\n        // Iterate through local storage objects that are NOT the project array\n        let projects = JSON.parse(localStorage.getItem(\"projectArray\"))\n        \n        // For each project in the project array, \n        projects.forEach(project => {\n\n            // For all projects which are not in the \"All\" category,\n            if (project != \"All\") {\n                \n                // Create a project name button and append to sidebar.\n                const projectButton = document.createElement(\"button\")\n                projectButton.className = \"project-button\"\n                projectButton.innerHTML = `${project}`\n    \n                // When the project button in the sidebar is clicked, \n                projectButton.addEventListener('click', () => {\n\n                    // Clear content box \n                    const contentBox = document.querySelector('.content')\n                    contentBox.replaceChildren()\n\n                    // Create header div to hold project name and delete button, \n                    const headerDiv = document.createElement('div')\n                    headerDiv.className = \"project-header-div\"\n\n                    // Create header title using project title\n                    const projectTitle = document.createElement('h1')\n                    projectTitle.innerHTML = `${project}`\n                    contentBox.appendChild(projectTitle)\n\n                    // Create \"Edit\" project button\n                    const editProjectButton = document.createElement('button')\n                    editProjectButton.innerHTML = \"Edit\"\n\n                    // Create \"X\" delete button\n                    const deleteProjectButton = document.createElement('button')\n                    deleteProjectButton.innerHTML = \"X\"\n\n\n                    // Add event listener to edit project button which calls editProject module\n                    editProjectButton.addEventListener('click', () => {\n                     \n                        // Open edit project name form modal upon clicking edit button\n                        const editProjectForm = document.getElementById('edit-project-form')\n                        editProjectForm.showModal()\n\n                        // On submitting new project name, pass old project name and new project name \n                        // to editProject() module function.\n                        document.getElementById(\"edit-project\").addEventListener('click', function(e) {\n                            e.preventDefault()\n                            ;(0,_editProject__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(project, document.getElementById(\"new-project-name\").value)\n                            editProjectForm.close()\n                            // location.reload()\n                        })\n\n                    })\n\n\n                    // Add event listener to delete project button which calls deleteProject module.\n                    deleteProjectButton.addEventListener('click', () => {\n                        \n                        // Pass project name to module\n                        ;(0,_deleteProject__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(project)\n                    })\n\n                    // And add them both to header div, then add header div to content box.\n                    headerDiv.appendChild(projectTitle)\n                    headerDiv.appendChild(editProjectButton)\n                    headerDiv.appendChild(deleteProjectButton)\n                    contentBox.appendChild(headerDiv)\n\n                    // Then, pass project name to renderTodo function module,\n                    ;(0,_renderTodos__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(project)\n\n                    // Which will render the matching todo objects.\n                })\n                \n                sidebarSub.appendChild(projectButton)\n\n\n            }\n        })\n    }\n}\n\n//# sourceURL=webpack://todo-webpack/./src/renderProjects.js?");

/***/ }),

/***/ "./src/renderTodos.js":
/*!****************************!*\
  !*** ./src/renderTodos.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderTodos)\n/* harmony export */ });\n/* harmony import */ var _createTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTodo */ \"./src/createTodo.js\");\n\n\n\n// Get project name passed in from renderProjects module function.\nfunction renderTodos(project) {\n\n    const contentBox = document.querySelector('.content')\n    // contentBox.replaceChildren()\n\n    let matchingTodos = [];\n\n    for (let i = 0; i < localStorage.length; i++) {\n        if (localStorage.getItem(localStorage.key(i)) == localStorage.getItem(\"projectArray\")) {\n            continue\n        }\n        else if (project == JSON.parse(localStorage.getItem(localStorage.key(i))).project) {\n            \n            let toDoMatch = JSON.parse(localStorage.getItem(localStorage.key(i)))\n            matchingTodos.push(toDoMatch)\n            \n            const toDoContainer = document.createElement('div')\n            toDoContainer.className = \"todo-div\"\n\n            // **** ToDo object render, still needs formatting ****\n            const toDoTitle = document.createElement('p')\n            toDoTitle.innerHTML = `${toDoMatch.title}`\n\n            const toDoDescription = document.createElement('p')\n            toDoDescription.innerHTML = `${toDoMatch.description}`\n            \n            const toDoProject = document.createElement('p')\n            toDoProject.innerHTML = `${toDoMatch.project}`\n\n            // Priority range dropdown menu\n            const priorityRange = document.createElement('select')\n            let option1 = document.createElement(\"option\")\n            option1.value =1;\n            option1.text = \"High\"\n            priorityRange.options.add(option1)\n\n            let option2 = document.createElement(\"option\")\n            option2.value = 2;\n            option2.text = \"Medium\"\n            priorityRange.options.add(option2)\n\n            let option3 = document.createElement(\"option\")\n            option3.value = 3;\n            option3.text = \"Low\"\n            priorityRange.options.add(option3)\n\n            // Checkbox to toggle completion of task\n            const checkBox = document.createElement('INPUT')\n            checkBox.setAttribute(\"type\", \"checkbox\")\n\n            const deleteButton = document.createElement('button')\n            deleteButton.innerHTML = \"X\"\n            deleteButton.addEventListener('click', () => {\n                // Call deleteTodo(arg) function and pass in todoTitle as an arg\n                \n                // TODO\n                // Logging out the title of the clicked todo object.\n                console.log((JSON.parse(localStorage.getItem(localStorage.key(i)))).title)\n\n\n\n\n\n            })\n\n            toDoContainer.appendChild(checkBox)\n            toDoContainer.appendChild(toDoTitle)\n            toDoContainer.appendChild(toDoProject)\n            toDoContainer.appendChild(toDoDescription)\n            toDoContainer.appendChild(priorityRange)\n            toDoContainer.appendChild(deleteButton)\n            contentBox.appendChild(toDoContainer)\n        }\n    }\n}\n\n\n\n//# sourceURL=webpack://todo-webpack/./src/renderTodos.js?");

/***/ }),

/***/ "./src/dm-serif-display.woff2":
/*!************************************!*\
  !*** ./src/dm-serif-display.woff2 ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ce5a5668bd09f426e2e3.woff2\";\n\n//# sourceURL=webpack://todo-webpack/./src/dm-serif-display.woff2?");

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
/******/ 			"main": 0
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