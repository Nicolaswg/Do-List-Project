/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300;500&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n  --background-color: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);\r\n  --background-listcolor: #fff;\r\n  --background-btncolor: #eeeded;\r\n  --border-color: #ece9e9;\r\n  --font-color: #868686;\r\n  --icon-color: #c9c8c8;\r\n  --icon-hover: #3949ab;\r\n  --icon-delete: #ef5350;\r\n  --font-family: 'Poppins', sans-serif;\r\n}\r\n\r\nbody {\r\n  background-color: rgb(212, 131, 131);\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 100vh;\r\n  font-family: var(--font-family);\r\n  background-image: var(--background-color);\r\n}\r\n\r\n.wrapp-list {\r\n  width: 500px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 2px;\r\n  background-color: var(--background-listcolor);\r\n  -webkit-box-shadow: 5px 5px 4px 0 rgba(146, 146, 146, 0.749);\r\n  box-shadow: 5px 5px 4px 0 rgba(146, 146, 146, 0.75);\r\n}\r\n\r\n.header {\r\n  padding: 12px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  border-bottom: 1px solid var(--border-color);\r\n}\r\n\r\n.header p {\r\n  font-size: 1.1rem;\r\n  color: var(--font-color);\r\n}\r\n\r\n.fas.fa-plus {\r\n  color: var(--icon-color);\r\n  transition: color 600ms ease;\r\n  cursor: pointer;\r\n}\r\n\r\n.fas.fa-plus:hover {\r\n  color: var(--icon-hover);\r\n}\r\n\r\n.inputfield {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 12px;\r\n  border-bottom: 1px solid var(--border-color);\r\n}\r\n\r\n.inputfield input {\r\n  width: 90%;\r\n  padding: 12px;\r\n  font-family: var(--font-family);\r\n  color: var(--font-color);\r\n  border: none;\r\n}\r\n\r\n.list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 12px;\r\n  font-size: 1rem;\r\n  color: var(--font-color);\r\n  font-weight: 300;\r\n}\r\n\r\n.task {\r\n  display: flex;\r\n  padding: 12px;\r\n  width: 100%;\r\n  border-bottom: 1px solid var(--border-color);\r\n  list-style: none;\r\n  cursor: grab;\r\n  justify-content: space-between;\r\n}\r\n\r\n.item-description {\r\n  display: flex;\r\n  gap: 5px;\r\n  flex-grow: 5;\r\n}\r\n\r\n.item-description p {\r\n  font-size: 0.9rem;\r\n  color: var(--font-color);\r\n  font-weight: 300;\r\n}\r\n\r\n.list-icons {\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-grow: 1;\r\n}\r\n\r\n.fas.fa-trash {\r\n  color: var(--icon-color);\r\n  transition: color 600ms ease, display 600ms ease;\r\n  cursor: pointer;\r\n}\r\n\r\n.fas.fa-pen {\r\n  color: var(--icon-color);\r\n  transition: color 600ms ease, display 600ms ease;\r\n  cursor: pointer;\r\n}\r\n\r\n.fas.fa-trash:hover {\r\n  color: var(--icon-delete);\r\n}\r\n\r\n.fas.fa-pen:hover {\r\n  color: var(--icon-hover);\r\n}\r\n\r\n.toggle {\r\n  display: none;\r\n}\r\n\r\n.clear {\r\n  width: 100%;\r\n  padding: 12px;\r\n  font-size: var(--font-family);\r\n  color: var(--font-color);\r\n  border-radius: 0;\r\n  text-align: center;\r\n  background-color: var(--background-btncolor);\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n  transition: background-color 600ms ease, color 600ms ease;\r\n}\r\n\r\n.clear:hover {\r\n  background-color: #868686;\r\n  opacity: 0.5;\r\n  color: #fff;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,qEAAqE;EACrE,4BAA4B;EAC5B,8BAA8B;EAC9B,uBAAuB;EACvB,qBAAqB;EACrB,qBAAqB;EACrB,qBAAqB;EACrB,sBAAsB;EACtB,oCAAoC;AACtC;;AAEA;EACE,oCAAoC;EACpC,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,+BAA+B;EAC/B,yCAAyC;AAC3C;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,QAAQ;EACR,6CAA6C;EAC7C,4DAA4D;EAC5D,mDAAmD;AACrD;;AAEA;EACE,aAAa;EACb,aAAa;EACb,8BAA8B;EAC9B,4CAA4C;AAC9C;;AAEA;EACE,iBAAiB;EACjB,wBAAwB;AAC1B;;AAEA;EACE,wBAAwB;EACxB,4BAA4B;EAC5B,eAAe;AACjB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,aAAa;EACb,4CAA4C;AAC9C;;AAEA;EACE,UAAU;EACV,aAAa;EACb,+BAA+B;EAC/B,wBAAwB;EACxB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,eAAe;EACf,wBAAwB;EACxB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,WAAW;EACX,4CAA4C;EAC5C,gBAAgB;EAChB,YAAY;EACZ,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,QAAQ;EACR,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,wBAAwB;EACxB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,wBAAwB;EACxB,gDAAgD;EAChD,eAAe;AACjB;;AAEA;EACE,wBAAwB;EACxB,gDAAgD;EAChD,eAAe;AACjB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;EACX,aAAa;EACb,6BAA6B;EAC7B,wBAAwB;EACxB,gBAAgB;EAChB,kBAAkB;EAClB,4CAA4C;EAC5C,qBAAqB;EACrB,eAAe;EACf,yDAAyD;AAC3D;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,WAAW;AACb","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500&display=swap');\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n  --background-color: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);\r\n  --background-listcolor: #fff;\r\n  --background-btncolor: #eeeded;\r\n  --border-color: #ece9e9;\r\n  --font-color: #868686;\r\n  --icon-color: #c9c8c8;\r\n  --icon-hover: #3949ab;\r\n  --icon-delete: #ef5350;\r\n  --font-family: 'Poppins', sans-serif;\r\n}\r\n\r\nbody {\r\n  background-color: rgb(212, 131, 131);\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 100vh;\r\n  font-family: var(--font-family);\r\n  background-image: var(--background-color);\r\n}\r\n\r\n.wrapp-list {\r\n  width: 500px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 2px;\r\n  background-color: var(--background-listcolor);\r\n  -webkit-box-shadow: 5px 5px 4px 0 rgba(146, 146, 146, 0.749);\r\n  box-shadow: 5px 5px 4px 0 rgba(146, 146, 146, 0.75);\r\n}\r\n\r\n.header {\r\n  padding: 12px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  border-bottom: 1px solid var(--border-color);\r\n}\r\n\r\n.header p {\r\n  font-size: 1.1rem;\r\n  color: var(--font-color);\r\n}\r\n\r\n.fas.fa-plus {\r\n  color: var(--icon-color);\r\n  transition: color 600ms ease;\r\n  cursor: pointer;\r\n}\r\n\r\n.fas.fa-plus:hover {\r\n  color: var(--icon-hover);\r\n}\r\n\r\n.inputfield {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 12px;\r\n  border-bottom: 1px solid var(--border-color);\r\n}\r\n\r\n.inputfield input {\r\n  width: 90%;\r\n  padding: 12px;\r\n  font-family: var(--font-family);\r\n  color: var(--font-color);\r\n  border: none;\r\n}\r\n\r\n.list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 12px;\r\n  font-size: 1rem;\r\n  color: var(--font-color);\r\n  font-weight: 300;\r\n}\r\n\r\n.task {\r\n  display: flex;\r\n  padding: 12px;\r\n  width: 100%;\r\n  border-bottom: 1px solid var(--border-color);\r\n  list-style: none;\r\n  cursor: grab;\r\n  justify-content: space-between;\r\n}\r\n\r\n.item-description {\r\n  display: flex;\r\n  gap: 5px;\r\n  flex-grow: 5;\r\n}\r\n\r\n.item-description p {\r\n  font-size: 0.9rem;\r\n  color: var(--font-color);\r\n  font-weight: 300;\r\n}\r\n\r\n.list-icons {\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-grow: 1;\r\n}\r\n\r\n.fas.fa-trash {\r\n  color: var(--icon-color);\r\n  transition: color 600ms ease, display 600ms ease;\r\n  cursor: pointer;\r\n}\r\n\r\n.fas.fa-pen {\r\n  color: var(--icon-color);\r\n  transition: color 600ms ease, display 600ms ease;\r\n  cursor: pointer;\r\n}\r\n\r\n.fas.fa-trash:hover {\r\n  color: var(--icon-delete);\r\n}\r\n\r\n.fas.fa-pen:hover {\r\n  color: var(--icon-hover);\r\n}\r\n\r\n.toggle {\r\n  display: none;\r\n}\r\n\r\n.clear {\r\n  width: 100%;\r\n  padding: 12px;\r\n  font-size: var(--font-family);\r\n  color: var(--font-color);\r\n  border-radius: 0;\r\n  text-align: center;\r\n  background-color: var(--background-btncolor);\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n  transition: background-color 600ms ease, color 600ms ease;\r\n}\r\n\r\n.clear:hover {\r\n  background-color: #868686;\r\n  opacity: 0.5;\r\n  color: #fff;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/task-functions.js":
/*!***************************************!*\
  !*** ./src/modules/task-functions.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetLocalTask": () => (/* binding */ GetLocalTask),
/* harmony export */   "DisplayTask": () => (/* binding */ DisplayTask),
/* harmony export */   "AddTaskMethod": () => (/* binding */ AddTaskMethod),
/* harmony export */   "ClearCompleted": () => (/* binding */ ClearCompleted)
/* harmony export */ });
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/modules/task.js");


function StoreTask(task) {
  return localStorage.setItem('task-list', task);
}

function GetLocalTask() {
  let localTask = JSON.parse(localStorage.getItem('task-list'));
  if (!localTask) {
    localTask = [];
    return localTask;
  }
  return localTask;
}

const AddTaskMethod = (input, data) => {
  const description = input.value.toString();
  const newTask = new _task_js__WEBPACK_IMPORTED_MODULE_0__["default"](description, data.length);
  if (description !== '') {
    data.push(newTask);
    StoreTask(JSON.stringify(data));
  }
};

const RemoveTask = (index, container) => {
  const data = GetLocalTask();
  const dataIndex = data.indexOf(data[index]);
  data.splice(dataIndex, 1);
  data.forEach((d, index) => { d.index = index + 1; });
  StoreTask(JSON.stringify(data));
  if (data.length === 0) {
    container.innerHTML = 'no task added';
  }
};

const ClearCompleted = () => {
  const data = GetLocalTask();
  const uncompleted = data.filter((e) => (!e.check));
  data.forEach((d, index) => { d.index = index; });
  StoreTask(JSON.stringify(uncompleted));
};

const EditTask = (data, index, e) => {
  const parent = e.target.parentElement.previousSibling;
  const description = parent.lastChild;
  const value = prompt('Edit selected task');
  if (value !== null && value !== '') {
    description.innerText = value;
    data[index].description = value;
    StoreTask(JSON.stringify(data));
  }
};

const CheckTask = (e, remove, edit, index) => {
  const data = GetLocalTask();
  const parent = e.target.parentElement;
  const check = parent.firstChild;
  if (check.checked) {
    remove[index].classList.toggle('toggle');
    edit[index].classList.toggle('toggle');
    data[index].check = true;
    StoreTask(JSON.stringify(data));
  } else {
    remove[index].classList.toggle('toggle');
    edit[index].classList.toggle('toggle');
    data[index].check = false;
    StoreTask(JSON.stringify(data));
  }
};

const DisplayTask = (container, data) => {
  if (data.length === 0) {
    container.innerHTML = 'no task added';
  } else {
    let newLiTag = '';
    data.map((e, i) => {
      newLiTag += `<li class="task"><div class="item-description"><input type="checkbox" name="check" class="check"><p class="description">${data[i].description}</p></div><div class="list-icons"><i class="fas fa-trash remove"></i><i class="fas fa-pen edit"></i></div></li>`;
      container.innerHTML = newLiTag;
      return data;
    });
    const removeBtn = document.querySelectorAll('i.remove');
    removeBtn.forEach((e, index) => {
      removeBtn[index].classList.toggle('toggle');
      removeBtn[index].addEventListener('click', (e) => {
        e.target.parentElement.parentElement.remove();
        RemoveTask(index, container);
      });
    });
    const editBtn = document.querySelectorAll('i.edit');
    editBtn.forEach((e, index) => {
      editBtn[index].addEventListener('click', (e) => {
        EditTask(data, index, e);
      });
    });
    const checkBtn = document.querySelectorAll('.check');
    checkBtn.forEach((e, index) => {
      checkBtn[index].addEventListener('change', (e) => {
        CheckTask(e, removeBtn, editBtn, index);
      });
    });
  }
};



/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task {
  constructor(description, index) {
    this.index = index + 1;
    this.description = description;
    this.check = false;
  }
}


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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_task_functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/task-functions.js */ "./src/modules/task-functions.js");



const listContainer = document.getElementById('list');
const addTask = document.getElementById('btn-add');
const inputBox = document.getElementById('task');
const btnClear = document.querySelector('#btn-clear');

addTask.addEventListener('click', () => {
  const data = (0,_modules_task_functions_js__WEBPACK_IMPORTED_MODULE_1__.GetLocalTask)();
  (0,_modules_task_functions_js__WEBPACK_IMPORTED_MODULE_1__.AddTaskMethod)(inputBox, data);
  (0,_modules_task_functions_js__WEBPACK_IMPORTED_MODULE_1__.DisplayTask)(listContainer, data);
  inputBox.value = '';
});

inputBox.addEventListener('keypress', (e) => {
  if (e.keyCode === 13) {
    const data = (0,_modules_task_functions_js__WEBPACK_IMPORTED_MODULE_1__.GetLocalTask)();
    (0,_modules_task_functions_js__WEBPACK_IMPORTED_MODULE_1__.AddTaskMethod)(inputBox, data);
    (0,_modules_task_functions_js__WEBPACK_IMPORTED_MODULE_1__.DisplayTask)(listContainer, data);
    inputBox.value = '';
  }
});

const newdata = JSON.parse(localStorage.getItem('task-list'));
if (newdata !== null) {
  (0,_modules_task_functions_js__WEBPACK_IMPORTED_MODULE_1__.DisplayTask)(listContainer, newdata);
}

btnClear.addEventListener('click', () => {
  (0,_modules_task_functions_js__WEBPACK_IMPORTED_MODULE_1__.ClearCompleted)();
  const data = (0,_modules_task_functions_js__WEBPACK_IMPORTED_MODULE_1__.GetLocalTask)();
  (0,_modules_task_functions_js__WEBPACK_IMPORTED_MODULE_1__.DisplayTask)(listContainer, data);
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vZG8tbGlzdC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9kby1saXN0LXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9kby1saXN0LXByb2plY3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vZG8tbGlzdC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2RvLWxpc3QtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZG8tbGlzdC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2RvLWxpc3QtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9kby1saXN0LXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9kby1saXN0LXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9kby1saXN0LXByb2plY3QvLi9zcmMvbW9kdWxlcy90YXNrLWZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9kby1saXN0LXByb2plY3QvLi9zcmMvbW9kdWxlcy90YXNrLmpzIiwid2VicGFjazovL2RvLWxpc3QtcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kby1saXN0LXByb2plY3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZG8tbGlzdC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9kby1saXN0LXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kby1saXN0LXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9kby1saXN0LXByb2plY3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMzAwOzUwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAtLWJhY2tncm91bmQtY29sb3I6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICNjZmQ5ZGYgMCUsICNlMmViZjAgMTAwJSk7XFxyXFxuICAtLWJhY2tncm91bmQtbGlzdGNvbG9yOiAjZmZmO1xcclxcbiAgLS1iYWNrZ3JvdW5kLWJ0bmNvbG9yOiAjZWVlZGVkO1xcclxcbiAgLS1ib3JkZXItY29sb3I6ICNlY2U5ZTk7XFxyXFxuICAtLWZvbnQtY29sb3I6ICM4Njg2ODY7XFxyXFxuICAtLWljb24tY29sb3I6ICNjOWM4Yzg7XFxyXFxuICAtLWljb24taG92ZXI6ICMzOTQ5YWI7XFxyXFxuICAtLWljb24tZGVsZXRlOiAjZWY1MzUwO1xcclxcbiAgLS1mb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTIsIDEzMSwgMTMxKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseSk7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLndyYXBwLWxpc3Qge1xcclxcbiAgd2lkdGg6IDUwMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDJweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbGlzdGNvbG9yKTtcXHJcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogNXB4IDVweCA0cHggMCByZ2JhKDE0NiwgMTQ2LCAxNDYsIDAuNzQ5KTtcXHJcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggNHB4IDAgcmdiYSgxNDYsIDE0NiwgMTQ2LCAwLjc1KTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICBwYWRkaW5nOiAxMnB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHAge1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5mYXMuZmEtcGx1cyB7XFxyXFxuICBjb2xvcjogdmFyKC0taWNvbi1jb2xvcik7XFxyXFxuICB0cmFuc2l0aW9uOiBjb2xvciA2MDBtcyBlYXNlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZmFzLmZhLXBsdXM6aG92ZXIge1xcclxcbiAgY29sb3I6IHZhcigtLWljb24taG92ZXIpO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXRmaWVsZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEycHg7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0ZmllbGQgaW5wdXQge1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIHBhZGRpbmc6IDEycHg7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHkpO1xcclxcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBhZGRpbmc6IDEycHg7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcGFkZGluZzogMTJweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgY3Vyc29yOiBncmFiO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS1kZXNjcmlwdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiA1cHg7XFxyXFxuICBmbGV4LWdyb3c6IDU7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLWRlc2NyaXB0aW9uIHAge1xcclxcbiAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1pY29ucyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmbGV4LWdyb3c6IDE7XFxyXFxufVxcclxcblxcclxcbi5mYXMuZmEtdHJhc2gge1xcclxcbiAgY29sb3I6IHZhcigtLWljb24tY29sb3IpO1xcclxcbiAgdHJhbnNpdGlvbjogY29sb3IgNjAwbXMgZWFzZSwgZGlzcGxheSA2MDBtcyBlYXNlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZmFzLmZhLXBlbiB7XFxyXFxuICBjb2xvcjogdmFyKC0taWNvbi1jb2xvcik7XFxyXFxuICB0cmFuc2l0aW9uOiBjb2xvciA2MDBtcyBlYXNlLCBkaXNwbGF5IDYwMG1zIGVhc2U7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mYXMuZmEtdHJhc2g6aG92ZXIge1xcclxcbiAgY29sb3I6IHZhcigtLWljb24tZGVsZXRlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhcy5mYS1wZW46aG92ZXIge1xcclxcbiAgY29sb3I6IHZhcigtLWljb24taG92ZXIpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9nZ2xlIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jbGVhciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDEycHg7XFxyXFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtZmFtaWx5KTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWJ0bmNvbG9yKTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgNjAwbXMgZWFzZSwgY29sb3IgNjAwbXMgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsZWFyOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4Njg2ODY7XFxyXFxuICBvcGFjaXR5OiAwLjU7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UscUVBQXFFO0VBQ3JFLDRCQUE0QjtFQUM1Qiw4QkFBOEI7RUFDOUIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0IseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtFQUNSLDZDQUE2QztFQUM3Qyw0REFBNEQ7RUFDNUQsbURBQW1EO0FBQ3JEOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4Qiw0QkFBNEI7RUFDNUIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYiw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLCtCQUErQjtFQUMvQix3QkFBd0I7RUFDeEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsZUFBZTtFQUNmLHdCQUF3QjtFQUN4QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLFdBQVc7RUFDWCw0Q0FBNEM7RUFDNUMsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsUUFBUTtFQUNSLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZ0RBQWdEO0VBQ2hELGVBQWU7QUFDakI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZ0RBQWdEO0VBQ2hELGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLDZCQUE2QjtFQUM3Qix3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQiw0Q0FBNEM7RUFDNUMscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZix5REFBeUQ7QUFDM0Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFdBQVc7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMzAwOzUwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAtLWJhY2tncm91bmQtY29sb3I6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICNjZmQ5ZGYgMCUsICNlMmViZjAgMTAwJSk7XFxyXFxuICAtLWJhY2tncm91bmQtbGlzdGNvbG9yOiAjZmZmO1xcclxcbiAgLS1iYWNrZ3JvdW5kLWJ0bmNvbG9yOiAjZWVlZGVkO1xcclxcbiAgLS1ib3JkZXItY29sb3I6ICNlY2U5ZTk7XFxyXFxuICAtLWZvbnQtY29sb3I6ICM4Njg2ODY7XFxyXFxuICAtLWljb24tY29sb3I6ICNjOWM4Yzg7XFxyXFxuICAtLWljb24taG92ZXI6ICMzOTQ5YWI7XFxyXFxuICAtLWljb24tZGVsZXRlOiAjZWY1MzUwO1xcclxcbiAgLS1mb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTIsIDEzMSwgMTMxKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseSk7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLndyYXBwLWxpc3Qge1xcclxcbiAgd2lkdGg6IDUwMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDJweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbGlzdGNvbG9yKTtcXHJcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogNXB4IDVweCA0cHggMCByZ2JhKDE0NiwgMTQ2LCAxNDYsIDAuNzQ5KTtcXHJcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggNHB4IDAgcmdiYSgxNDYsIDE0NiwgMTQ2LCAwLjc1KTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICBwYWRkaW5nOiAxMnB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHAge1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5mYXMuZmEtcGx1cyB7XFxyXFxuICBjb2xvcjogdmFyKC0taWNvbi1jb2xvcik7XFxyXFxuICB0cmFuc2l0aW9uOiBjb2xvciA2MDBtcyBlYXNlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZmFzLmZhLXBsdXM6aG92ZXIge1xcclxcbiAgY29sb3I6IHZhcigtLWljb24taG92ZXIpO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXRmaWVsZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEycHg7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0ZmllbGQgaW5wdXQge1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIHBhZGRpbmc6IDEycHg7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHkpO1xcclxcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBhZGRpbmc6IDEycHg7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcGFkZGluZzogMTJweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgY3Vyc29yOiBncmFiO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS1kZXNjcmlwdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiA1cHg7XFxyXFxuICBmbGV4LWdyb3c6IDU7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLWRlc2NyaXB0aW9uIHAge1xcclxcbiAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1pY29ucyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmbGV4LWdyb3c6IDE7XFxyXFxufVxcclxcblxcclxcbi5mYXMuZmEtdHJhc2gge1xcclxcbiAgY29sb3I6IHZhcigtLWljb24tY29sb3IpO1xcclxcbiAgdHJhbnNpdGlvbjogY29sb3IgNjAwbXMgZWFzZSwgZGlzcGxheSA2MDBtcyBlYXNlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZmFzLmZhLXBlbiB7XFxyXFxuICBjb2xvcjogdmFyKC0taWNvbi1jb2xvcik7XFxyXFxuICB0cmFuc2l0aW9uOiBjb2xvciA2MDBtcyBlYXNlLCBkaXNwbGF5IDYwMG1zIGVhc2U7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mYXMuZmEtdHJhc2g6aG92ZXIge1xcclxcbiAgY29sb3I6IHZhcigtLWljb24tZGVsZXRlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhcy5mYS1wZW46aG92ZXIge1xcclxcbiAgY29sb3I6IHZhcigtLWljb24taG92ZXIpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9nZ2xlIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jbGVhciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDEycHg7XFxyXFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtZmFtaWx5KTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWJ0bmNvbG9yKTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgNjAwbXMgZWFzZSwgY29sb3IgNjAwbXMgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsZWFyOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4Njg2ODY7XFxyXFxuICBvcGFjaXR5OiAwLjU7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgVGFzayBmcm9tICcuL3Rhc2suanMnO1xyXG5cclxuZnVuY3Rpb24gU3RvcmVUYXNrKHRhc2spIHtcclxuICByZXR1cm4gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2stbGlzdCcsIHRhc2spO1xyXG59XHJcblxyXG5mdW5jdGlvbiBHZXRMb2NhbFRhc2soKSB7XHJcbiAgbGV0IGxvY2FsVGFzayA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2stbGlzdCcpKTtcclxuICBpZiAoIWxvY2FsVGFzaykge1xyXG4gICAgbG9jYWxUYXNrID0gW107XHJcbiAgICByZXR1cm4gbG9jYWxUYXNrO1xyXG4gIH1cclxuICByZXR1cm4gbG9jYWxUYXNrO1xyXG59XHJcblxyXG5jb25zdCBBZGRUYXNrTWV0aG9kID0gKGlucHV0LCBkYXRhKSA9PiB7XHJcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBpbnB1dC52YWx1ZS50b1N0cmluZygpO1xyXG4gIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzayhkZXNjcmlwdGlvbiwgZGF0YS5sZW5ndGgpO1xyXG4gIGlmIChkZXNjcmlwdGlvbiAhPT0gJycpIHtcclxuICAgIGRhdGEucHVzaChuZXdUYXNrKTtcclxuICAgIFN0b3JlVGFzayhKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgUmVtb3ZlVGFzayA9IChpbmRleCwgY29udGFpbmVyKSA9PiB7XHJcbiAgY29uc3QgZGF0YSA9IEdldExvY2FsVGFzaygpO1xyXG4gIGNvbnN0IGRhdGFJbmRleCA9IGRhdGEuaW5kZXhPZihkYXRhW2luZGV4XSk7XHJcbiAgZGF0YS5zcGxpY2UoZGF0YUluZGV4LCAxKTtcclxuICBkYXRhLmZvckVhY2goKGQsIGluZGV4KSA9PiB7IGQuaW5kZXggPSBpbmRleCArIDE7IH0pO1xyXG4gIFN0b3JlVGFzayhKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgaWYgKGRhdGEubGVuZ3RoID09PSAwKSB7XHJcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gJ25vIHRhc2sgYWRkZWQnO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IENsZWFyQ29tcGxldGVkID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRhdGEgPSBHZXRMb2NhbFRhc2soKTtcclxuICBjb25zdCB1bmNvbXBsZXRlZCA9IGRhdGEuZmlsdGVyKChlKSA9PiAoIWUuY2hlY2spKTtcclxuICBkYXRhLmZvckVhY2goKGQsIGluZGV4KSA9PiB7IGQuaW5kZXggPSBpbmRleDsgfSk7XHJcbiAgU3RvcmVUYXNrKEpTT04uc3RyaW5naWZ5KHVuY29tcGxldGVkKSk7XHJcbn07XHJcblxyXG5jb25zdCBFZGl0VGFzayA9IChkYXRhLCBpbmRleCwgZSkgPT4ge1xyXG4gIGNvbnN0IHBhcmVudCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucHJldmlvdXNTaWJsaW5nO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gcGFyZW50Lmxhc3RDaGlsZDtcclxuICBjb25zdCB2YWx1ZSA9IHByb21wdCgnRWRpdCBzZWxlY3RlZCB0YXNrJyk7XHJcbiAgaWYgKHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSAnJykge1xyXG4gICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gdmFsdWU7XHJcbiAgICBkYXRhW2luZGV4XS5kZXNjcmlwdGlvbiA9IHZhbHVlO1xyXG4gICAgU3RvcmVUYXNrKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBDaGVja1Rhc2sgPSAoZSwgcmVtb3ZlLCBlZGl0LCBpbmRleCkgPT4ge1xyXG4gIGNvbnN0IGRhdGEgPSBHZXRMb2NhbFRhc2soKTtcclxuICBjb25zdCBwYXJlbnQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50O1xyXG4gIGNvbnN0IGNoZWNrID0gcGFyZW50LmZpcnN0Q2hpbGQ7XHJcbiAgaWYgKGNoZWNrLmNoZWNrZWQpIHtcclxuICAgIHJlbW92ZVtpbmRleF0uY2xhc3NMaXN0LnRvZ2dsZSgndG9nZ2xlJyk7XHJcbiAgICBlZGl0W2luZGV4XS5jbGFzc0xpc3QudG9nZ2xlKCd0b2dnbGUnKTtcclxuICAgIGRhdGFbaW5kZXhdLmNoZWNrID0gdHJ1ZTtcclxuICAgIFN0b3JlVGFzayhKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJlbW92ZVtpbmRleF0uY2xhc3NMaXN0LnRvZ2dsZSgndG9nZ2xlJyk7XHJcbiAgICBlZGl0W2luZGV4XS5jbGFzc0xpc3QudG9nZ2xlKCd0b2dnbGUnKTtcclxuICAgIGRhdGFbaW5kZXhdLmNoZWNrID0gZmFsc2U7XHJcbiAgICBTdG9yZVRhc2soSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IERpc3BsYXlUYXNrID0gKGNvbnRhaW5lciwgZGF0YSkgPT4ge1xyXG4gIGlmIChkYXRhLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9ICdubyB0YXNrIGFkZGVkJztcclxuICB9IGVsc2Uge1xyXG4gICAgbGV0IG5ld0xpVGFnID0gJyc7XHJcbiAgICBkYXRhLm1hcCgoZSwgaSkgPT4ge1xyXG4gICAgICBuZXdMaVRhZyArPSBgPGxpIGNsYXNzPVwidGFza1wiPjxkaXYgY2xhc3M9XCJpdGVtLWRlc2NyaXB0aW9uXCI+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJjaGVja1wiIGNsYXNzPVwiY2hlY2tcIj48cCBjbGFzcz1cImRlc2NyaXB0aW9uXCI+JHtkYXRhW2ldLmRlc2NyaXB0aW9ufTwvcD48L2Rpdj48ZGl2IGNsYXNzPVwibGlzdC1pY29uc1wiPjxpIGNsYXNzPVwiZmFzIGZhLXRyYXNoIHJlbW92ZVwiPjwvaT48aSBjbGFzcz1cImZhcyBmYS1wZW4gZWRpdFwiPjwvaT48L2Rpdj48L2xpPmA7XHJcbiAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBuZXdMaVRhZztcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHJlbW92ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2kucmVtb3ZlJyk7XHJcbiAgICByZW1vdmVCdG4uZm9yRWFjaCgoZSwgaW5kZXgpID0+IHtcclxuICAgICAgcmVtb3ZlQnRuW2luZGV4XS5jbGFzc0xpc3QudG9nZ2xlKCd0b2dnbGUnKTtcclxuICAgICAgcmVtb3ZlQnRuW2luZGV4XS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgICAgIFJlbW92ZVRhc2soaW5kZXgsIGNvbnRhaW5lcik7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaS5lZGl0Jyk7XHJcbiAgICBlZGl0QnRuLmZvckVhY2goKGUsIGluZGV4KSA9PiB7XHJcbiAgICAgIGVkaXRCdG5baW5kZXhdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBFZGl0VGFzayhkYXRhLCBpbmRleCwgZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBjaGVja0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVjaycpO1xyXG4gICAgY2hlY2tCdG4uZm9yRWFjaCgoZSwgaW5kZXgpID0+IHtcclxuICAgICAgY2hlY2tCdG5baW5kZXhdLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XHJcbiAgICAgICAgQ2hlY2tUYXNrKGUsIHJlbW92ZUJ0biwgZWRpdEJ0biwgaW5kZXgpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuZXhwb3J0IHtcclxuICBHZXRMb2NhbFRhc2ssIERpc3BsYXlUYXNrLCBBZGRUYXNrTWV0aG9kLCBDbGVhckNvbXBsZXRlZCxcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XHJcbiAgY29uc3RydWN0b3IoZGVzY3JpcHRpb24sIGluZGV4KSB7XHJcbiAgICB0aGlzLmluZGV4ID0gaW5kZXggKyAxO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGhpcy5jaGVjayA9IGZhbHNlO1xyXG4gIH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7XHJcbiAgR2V0TG9jYWxUYXNrLCBEaXNwbGF5VGFzaywgQWRkVGFza01ldGhvZCwgQ2xlYXJDb21wbGV0ZWQsXHJcbn0gZnJvbSAnLi9tb2R1bGVzL3Rhc2stZnVuY3Rpb25zLmpzJztcclxuXHJcbmNvbnN0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdCcpO1xyXG5jb25zdCBhZGRUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1hZGQnKTtcclxuY29uc3QgaW5wdXRCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzaycpO1xyXG5jb25zdCBidG5DbGVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG4tY2xlYXInKTtcclxuXHJcbmFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgY29uc3QgZGF0YSA9IEdldExvY2FsVGFzaygpO1xyXG4gIEFkZFRhc2tNZXRob2QoaW5wdXRCb3gsIGRhdGEpO1xyXG4gIERpc3BsYXlUYXNrKGxpc3RDb250YWluZXIsIGRhdGEpO1xyXG4gIGlucHV0Qm94LnZhbHVlID0gJyc7XHJcbn0pO1xyXG5cclxuaW5wdXRCb3guYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZSkgPT4ge1xyXG4gIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XHJcbiAgICBjb25zdCBkYXRhID0gR2V0TG9jYWxUYXNrKCk7XHJcbiAgICBBZGRUYXNrTWV0aG9kKGlucHV0Qm94LCBkYXRhKTtcclxuICAgIERpc3BsYXlUYXNrKGxpc3RDb250YWluZXIsIGRhdGEpO1xyXG4gICAgaW5wdXRCb3gudmFsdWUgPSAnJztcclxuICB9XHJcbn0pO1xyXG5cclxuY29uc3QgbmV3ZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2stbGlzdCcpKTtcclxuaWYgKG5ld2RhdGEgIT09IG51bGwpIHtcclxuICBEaXNwbGF5VGFzayhsaXN0Q29udGFpbmVyLCBuZXdkYXRhKTtcclxufVxyXG5cclxuYnRuQ2xlYXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgQ2xlYXJDb21wbGV0ZWQoKTtcclxuICBjb25zdCBkYXRhID0gR2V0TG9jYWxUYXNrKCk7XHJcbiAgRGlzcGxheVRhc2sobGlzdENvbnRhaW5lciwgZGF0YSk7XHJcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==