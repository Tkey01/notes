/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n} /* to remove the top and left whitespace */\\n\\nhtml,\\nbody {\\n  width: 100%;\\n  height: 100%;\\n} /* just to be sure these are full screen*/\\n\\ncanvas {\\n  display: block;\\n} /* To remove the scrollbars */\\n\\n/* .canvas {\\n  display: block;\\n  width: 100vw;\\n  height: 100vw;\\n  background: #fff;\\n  display: block;\\n} */\\n\\n.buttons {\\n  position: fixed;\\n  top: 50px;\\n  left: 50%;\\n  transform: translateX(-50%);\\n  width: 500px;\\n  height: 50px;\\n  display: flex;\\n  justify-content: space-around;\\n}\\n\\n.rect-input {\\n  width: 100px;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/styles/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/nanoid/format.browser.js":
/*!***********************************************!*\
  !*** ./node_modules/nanoid/format.browser.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// This file replaces `format.js` in bundlers like webpack or Rollup,\n// according to `browser` config in `package.json`.\n\nmodule.exports = function (random, alphabet, size) {\n  // We can’t use bytes bigger than the alphabet. To make bytes values closer\n  // to the alphabet, we apply bitmask on them. We look for the closest\n  // `2 ** x - 1` number, which will be bigger than alphabet size. If we have\n  // 30 symbols in the alphabet, we will take 31 (00011111).\n  // We do not use faster Math.clz32, because it is not available in browsers.\n  var mask = (2 << Math.log(alphabet.length - 1) / Math.LN2) - 1\n  // Bitmask is not a perfect solution (in our example it will pass 31 bytes,\n  // which is bigger than the alphabet). As a result, we will need more bytes,\n  // than ID size, because we will refuse bytes bigger than the alphabet.\n\n  // Every hardware random generator call is costly,\n  // because we need to wait for entropy collection. This is why often it will\n  // be faster to ask for few extra bytes in advance, to avoid additional calls.\n\n  // Here we calculate how many random bytes should we call in advance.\n  // It depends on ID length, mask / alphabet size and magic number 1.6\n  // (which was selected according benchmarks).\n\n  // -~f => Math.ceil(f) if n is float number\n  // -~i => i + 1 if n is integer number\n  var step = -~(1.6 * mask * size / alphabet.length)\n  var id = ''\n\n  while (true) {\n    var bytes = random(step)\n    // Compact alternative for `for (var i = 0; i < step; i++)`\n    var i = step\n    while (i--) {\n      // If random byte is bigger than alphabet even after bitmask,\n      // we refuse it by `|| ''`.\n      id += alphabet[bytes[i] & mask] || ''\n      // More compact than `id.length + 1 === size`\n      if (id.length === +size) return id\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/nanoid/format.browser.js?");

/***/ }),

/***/ "./node_modules/shortid/index.js":
/*!***************************************!*\
  !*** ./node_modules/shortid/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nmodule.exports = __webpack_require__(/*! ./lib/index */ \"./node_modules/shortid/lib/index.js\");\n\n\n//# sourceURL=webpack:///./node_modules/shortid/index.js?");

/***/ }),

/***/ "./node_modules/shortid/lib/alphabet.js":
/*!**********************************************!*\
  !*** ./node_modules/shortid/lib/alphabet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar randomFromSeed = __webpack_require__(/*! ./random/random-from-seed */ \"./node_modules/shortid/lib/random/random-from-seed.js\");\n\nvar ORIGINAL = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';\nvar alphabet;\nvar previousSeed;\n\nvar shuffled;\n\nfunction reset() {\n    shuffled = false;\n}\n\nfunction setCharacters(_alphabet_) {\n    if (!_alphabet_) {\n        if (alphabet !== ORIGINAL) {\n            alphabet = ORIGINAL;\n            reset();\n        }\n        return;\n    }\n\n    if (_alphabet_ === alphabet) {\n        return;\n    }\n\n    if (_alphabet_.length !== ORIGINAL.length) {\n        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. You submitted ' + _alphabet_.length + ' characters: ' + _alphabet_);\n    }\n\n    var unique = _alphabet_.split('').filter(function(item, ind, arr){\n       return ind !== arr.lastIndexOf(item);\n    });\n\n    if (unique.length) {\n        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. These characters were not unique: ' + unique.join(', '));\n    }\n\n    alphabet = _alphabet_;\n    reset();\n}\n\nfunction characters(_alphabet_) {\n    setCharacters(_alphabet_);\n    return alphabet;\n}\n\nfunction setSeed(seed) {\n    randomFromSeed.seed(seed);\n    if (previousSeed !== seed) {\n        reset();\n        previousSeed = seed;\n    }\n}\n\nfunction shuffle() {\n    if (!alphabet) {\n        setCharacters(ORIGINAL);\n    }\n\n    var sourceArray = alphabet.split('');\n    var targetArray = [];\n    var r = randomFromSeed.nextValue();\n    var characterIndex;\n\n    while (sourceArray.length > 0) {\n        r = randomFromSeed.nextValue();\n        characterIndex = Math.floor(r * sourceArray.length);\n        targetArray.push(sourceArray.splice(characterIndex, 1)[0]);\n    }\n    return targetArray.join('');\n}\n\nfunction getShuffled() {\n    if (shuffled) {\n        return shuffled;\n    }\n    shuffled = shuffle();\n    return shuffled;\n}\n\n/**\n * lookup shuffled letter\n * @param index\n * @returns {string}\n */\nfunction lookup(index) {\n    var alphabetShuffled = getShuffled();\n    return alphabetShuffled[index];\n}\n\nfunction get () {\n  return alphabet || ORIGINAL;\n}\n\nmodule.exports = {\n    get: get,\n    characters: characters,\n    seed: setSeed,\n    lookup: lookup,\n    shuffled: getShuffled\n};\n\n\n//# sourceURL=webpack:///./node_modules/shortid/lib/alphabet.js?");

/***/ }),

/***/ "./node_modules/shortid/lib/build.js":
/*!*******************************************!*\
  !*** ./node_modules/shortid/lib/build.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar generate = __webpack_require__(/*! ./generate */ \"./node_modules/shortid/lib/generate.js\");\nvar alphabet = __webpack_require__(/*! ./alphabet */ \"./node_modules/shortid/lib/alphabet.js\");\n\n// Ignore all milliseconds before a certain time to reduce the size of the date entropy without sacrificing uniqueness.\n// This number should be updated every year or so to keep the generated id short.\n// To regenerate `new Date() - 0` and bump the version. Always bump the version!\nvar REDUCE_TIME = 1567752802062;\n\n// don't change unless we change the algos or REDUCE_TIME\n// must be an integer and less than 16\nvar version = 7;\n\n// Counter is used when shortid is called multiple times in one second.\nvar counter;\n\n// Remember the last time shortid was called in case counter is needed.\nvar previousSeconds;\n\n/**\n * Generate unique id\n * Returns string id\n */\nfunction build(clusterWorkerId) {\n    var str = '';\n\n    var seconds = Math.floor((Date.now() - REDUCE_TIME) * 0.001);\n\n    if (seconds === previousSeconds) {\n        counter++;\n    } else {\n        counter = 0;\n        previousSeconds = seconds;\n    }\n\n    str = str + generate(version);\n    str = str + generate(clusterWorkerId);\n    if (counter > 0) {\n        str = str + generate(counter);\n    }\n    str = str + generate(seconds);\n    return str;\n}\n\nmodule.exports = build;\n\n\n//# sourceURL=webpack:///./node_modules/shortid/lib/build.js?");

/***/ }),

/***/ "./node_modules/shortid/lib/generate.js":
/*!**********************************************!*\
  !*** ./node_modules/shortid/lib/generate.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar alphabet = __webpack_require__(/*! ./alphabet */ \"./node_modules/shortid/lib/alphabet.js\");\nvar random = __webpack_require__(/*! ./random/random-byte */ \"./node_modules/shortid/lib/random/random-byte-browser.js\");\nvar format = __webpack_require__(/*! nanoid/format */ \"./node_modules/nanoid/format.browser.js\");\n\nfunction generate(number) {\n    var loopCounter = 0;\n    var done;\n\n    var str = '';\n\n    while (!done) {\n        str = str + format(random, alphabet.get(), 1);\n        done = number < (Math.pow(16, loopCounter + 1 ) );\n        loopCounter++;\n    }\n    return str;\n}\n\nmodule.exports = generate;\n\n\n//# sourceURL=webpack:///./node_modules/shortid/lib/generate.js?");

/***/ }),

/***/ "./node_modules/shortid/lib/index.js":
/*!*******************************************!*\
  !*** ./node_modules/shortid/lib/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar alphabet = __webpack_require__(/*! ./alphabet */ \"./node_modules/shortid/lib/alphabet.js\");\nvar build = __webpack_require__(/*! ./build */ \"./node_modules/shortid/lib/build.js\");\nvar isValid = __webpack_require__(/*! ./is-valid */ \"./node_modules/shortid/lib/is-valid.js\");\n\n// if you are using cluster or multiple servers use this to make each instance\n// has a unique value for worker\n// Note: I don't know if this is automatically set when using third\n// party cluster solutions such as pm2.\nvar clusterWorkerId = __webpack_require__(/*! ./util/cluster-worker-id */ \"./node_modules/shortid/lib/util/cluster-worker-id-browser.js\") || 0;\n\n/**\n * Set the seed.\n * Highly recommended if you don't want people to try to figure out your id schema.\n * exposed as shortid.seed(int)\n * @param seed Integer value to seed the random alphabet.  ALWAYS USE THE SAME SEED or you might get overlaps.\n */\nfunction seed(seedValue) {\n    alphabet.seed(seedValue);\n    return module.exports;\n}\n\n/**\n * Set the cluster worker or machine id\n * exposed as shortid.worker(int)\n * @param workerId worker must be positive integer.  Number less than 16 is recommended.\n * returns shortid module so it can be chained.\n */\nfunction worker(workerId) {\n    clusterWorkerId = workerId;\n    return module.exports;\n}\n\n/**\n *\n * sets new characters to use in the alphabet\n * returns the shuffled alphabet\n */\nfunction characters(newCharacters) {\n    if (newCharacters !== undefined) {\n        alphabet.characters(newCharacters);\n    }\n\n    return alphabet.shuffled();\n}\n\n/**\n * Generate unique id\n * Returns string id\n */\nfunction generate() {\n  return build(clusterWorkerId);\n}\n\n// Export all other functions as properties of the generate function\nmodule.exports = generate;\nmodule.exports.generate = generate;\nmodule.exports.seed = seed;\nmodule.exports.worker = worker;\nmodule.exports.characters = characters;\nmodule.exports.isValid = isValid;\n\n\n//# sourceURL=webpack:///./node_modules/shortid/lib/index.js?");

/***/ }),

/***/ "./node_modules/shortid/lib/is-valid.js":
/*!**********************************************!*\
  !*** ./node_modules/shortid/lib/is-valid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar alphabet = __webpack_require__(/*! ./alphabet */ \"./node_modules/shortid/lib/alphabet.js\");\n\nfunction isShortId(id) {\n    if (!id || typeof id !== 'string' || id.length < 6 ) {\n        return false;\n    }\n\n    var nonAlphabetic = new RegExp('[^' +\n      alphabet.get().replace(/[|\\\\{}()[\\]^$+*?.-]/g, '\\\\$&') +\n    ']');\n    return !nonAlphabetic.test(id);\n}\n\nmodule.exports = isShortId;\n\n\n//# sourceURL=webpack:///./node_modules/shortid/lib/is-valid.js?");

/***/ }),

/***/ "./node_modules/shortid/lib/random/random-byte-browser.js":
/*!****************************************************************!*\
  !*** ./node_modules/shortid/lib/random/random-byte-browser.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar crypto = typeof window === 'object' && (window.crypto || window.msCrypto); // IE 11 uses window.msCrypto\n\nvar randomByte;\n\nif (!crypto || !crypto.getRandomValues) {\n    randomByte = function(size) {\n        var bytes = [];\n        for (var i = 0; i < size; i++) {\n            bytes.push(Math.floor(Math.random() * 256));\n        }\n        return bytes;\n    };\n} else {\n    randomByte = function(size) {\n        return crypto.getRandomValues(new Uint8Array(size));\n    };\n}\n\nmodule.exports = randomByte;\n\n\n//# sourceURL=webpack:///./node_modules/shortid/lib/random/random-byte-browser.js?");

/***/ }),

/***/ "./node_modules/shortid/lib/random/random-from-seed.js":
/*!*************************************************************!*\
  !*** ./node_modules/shortid/lib/random/random-from-seed.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// Found this seed-based random generator somewhere\n// Based on The Central Randomizer 1.3 (C) 1997 by Paul Houle (houle@msc.cornell.edu)\n\nvar seed = 1;\n\n/**\n * return a random number based on a seed\n * @param seed\n * @returns {number}\n */\nfunction getNextValue() {\n    seed = (seed * 9301 + 49297) % 233280;\n    return seed/(233280.0);\n}\n\nfunction setSeed(_seed_) {\n    seed = _seed_;\n}\n\nmodule.exports = {\n    nextValue: getNextValue,\n    seed: setSeed\n};\n\n\n//# sourceURL=webpack:///./node_modules/shortid/lib/random/random-from-seed.js?");

/***/ }),

/***/ "./node_modules/shortid/lib/util/cluster-worker-id-browser.js":
/*!********************************************************************!*\
  !*** ./node_modules/shortid/lib/util/cluster-worker-id-browser.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = 0;\n\n\n//# sourceURL=webpack:///./node_modules/shortid/lib/util/cluster-worker-id-browser.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/actions/ChangingLink.js":
/*!*************************************!*\
  !*** ./src/actions/ChangingLink.js ***!
  \*************************************/
/*! exports provided: ChangingLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChangingLink\", function() { return ChangingLink; });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ \"./src/index.js\");\n/* harmony import */ var _components_Circle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Circle */ \"./src/components/Circle.js\");\n\n\n\nclass ChangingLink {\n  constructor() {\n    this.circleEnd = null\n    this.line = null\n    this.type = null\n  }\n\n  start({ circle }) {\n    this.line = circle.line\n    this.type = this.line.circleStart === circle ? 'Start' : 'End'\n\n    ___WEBPACK_IMPORTED_MODULE_0__[\"rc\"].remove(circle)\n  }\n\n  processing({ mouseX, mouseY }) {\n    if (this.type === 'Start') {\n      this.line.move({ x1: mouseX, y1: mouseY })\n    } else {\n      this.line.move({ x2: mouseX, y2: mouseY })\n    }\n  }\n\n  changeLink(newCircle, bindableRect) {\n    this.line[`rectangle${this.type}`].removeChild(this.line)\n    this.line[`rectangle${this.type}`].removeChild(\n      this.line[`circle${this.type}`],\n    )\n\n    this.line[`circle${this.type}`] = newCircle\n    this.line[`rectangle${this.type}`] = bindableRect\n\n    bindableRect.addChild(this.line)\n    bindableRect.addChild(newCircle)\n  }\n\n  stop({ mouseX, mouseY }) {\n    const overElement = ___WEBPACK_IMPORTED_MODULE_0__[\"stateManager\"].getOverElement(mouseX, mouseY)\n\n    if (\n      overElement &&\n      overElement.type === 'connectPoint' &&\n      overElement.rectangle !==\n        (this.type === 'Start'\n          ? this.line.rectangleEnd\n          : this.line.rectangleStart)\n    ) {\n      const newCircle = new _components_Circle__WEBPACK_IMPORTED_MODULE_1__[\"Circle\"]({\n        x: overElement.x,\n        y: overElement.y,\n        radius: 7,\n        line: this.line,\n      })\n\n      this.changeLink(newCircle, overElement.rectangle)\n\n      ___WEBPACK_IMPORTED_MODULE_0__[\"rc\"].add(newCircle)\n    } else {\n      this.line.rectangleStart.removeChild(this.line)\n      this.line.rectangleStart.removeChild(this.line.circleStart)\n\n      this.line.rectangleEnd.removeChild(this.line)\n      this.line.rectangleEnd.removeChild(this.line.circleEnd)\n\n      ___WEBPACK_IMPORTED_MODULE_0__[\"rc\"].remove(this.line)\n\n      if (this.type === 'Start') {\n        ___WEBPACK_IMPORTED_MODULE_0__[\"rc\"].remove(this.line.circleEnd)\n      } else {\n        ___WEBPACK_IMPORTED_MODULE_0__[\"rc\"].remove(this.line.circleStart)\n      }\n    }\n\n    ___WEBPACK_IMPORTED_MODULE_0__[\"rc\"].render()\n    this.resetState()\n  }\n\n  resetState() {\n    this.line = null\n    this.type = null\n  }\n}\n\n\n//# sourceURL=webpack:///./src/actions/ChangingLink.js?");

/***/ }),

/***/ "./src/actions/CreatingLink.js":
/*!*************************************!*\
  !*** ./src/actions/CreatingLink.js ***!
  \*************************************/
/*! exports provided: CreatingLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CreatingLink\", function() { return CreatingLink; });\n/* harmony import */ var _components_Line__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Line */ \"./src/components/Line.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ */ \"./src/index.js\");\n/* harmony import */ var _components_Circle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Circle */ \"./src/components/Circle.js\");\n\n\n\n\nclass CreatingLink {\n  constructor() {\n    this.line = null\n    this.circleStart = null\n    this.circleEnd = null\n    this.rectangleStart = null\n    this.rectangleEnd = null\n  }\n\n  start({ connectPoint, mouseX, mouseY }) {\n    this.rectangleStart = connectPoint.rectangle\n    this.line = new _components_Line__WEBPACK_IMPORTED_MODULE_0__[\"Line\"]({\n      x1: connectPoint.x,\n      y1: connectPoint.y,\n      x2: mouseX,\n      y2: mouseY,\n      rectangleStart: this.rectangleStart,\n    })\n    this.circleStart = new _components_Circle__WEBPACK_IMPORTED_MODULE_2__[\"Circle\"]({\n      x: connectPoint.x,\n      y: connectPoint.y,\n      radius: 7,\n      line: this.line,\n    })\n    this.line.circleStart = this.circleStart\n\n    ___WEBPACK_IMPORTED_MODULE_1__[\"rc\"].add(this.line)\n    ___WEBPACK_IMPORTED_MODULE_1__[\"rc\"].add(this.circleStart)\n  }\n\n  processing({ mouseX, mouseY }) {\n    this.line.move({ x2: mouseX, y2: mouseY })\n  }\n\n  stop({ mouseX, mouseY }) {\n    const overElement = ___WEBPACK_IMPORTED_MODULE_1__[\"stateManager\"].getOverElement(mouseX, mouseY)\n\n    if (\n      overElement &&\n      overElement.type === 'connectPoint' &&\n      overElement.rectangle !== this.rectangleStart\n    ) {\n      this.rectangleEnd = overElement.rectangle\n      this.circleEnd = new _components_Circle__WEBPACK_IMPORTED_MODULE_2__[\"Circle\"]({\n        x: overElement.x,\n        y: overElement.y,\n        radius: 7,\n        line: this.line,\n      })\n      this.line.rectangleEnd = this.rectangleEnd\n      this.line.circleEnd = this.circleEnd\n\n      this.rectangleStart.addChild(this.line)\n      this.rectangleStart.addChild(this.circleStart)\n\n      this.rectangleEnd.addChild(this.line)\n      this.rectangleEnd.addChild(this.circleEnd)\n\n      ___WEBPACK_IMPORTED_MODULE_1__[\"rc\"].add(this.circleEnd)\n    } else {\n      ___WEBPACK_IMPORTED_MODULE_1__[\"rc\"].remove(this.line)\n      ___WEBPACK_IMPORTED_MODULE_1__[\"rc\"].remove(this.circleStart)\n    }\n\n    ___WEBPACK_IMPORTED_MODULE_1__[\"rc\"].render()\n    this.resetState()\n  }\n\n  resetState() {\n    this.line = null\n    this.circleStart = null\n    this.circleEnd = null\n    this.rectangleStart = null\n    this.rectangleEnd = null\n  }\n}\n\n\n//# sourceURL=webpack:///./src/actions/CreatingLink.js?");

/***/ }),

/***/ "./src/actions/MovingNode.js":
/*!***********************************!*\
  !*** ./src/actions/MovingNode.js ***!
  \***********************************/
/*! exports provided: MovingNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MovingNode\", function() { return MovingNode; });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ \"./src/index.js\");\n\n\nclass MovingNode {\n  constructor() {\n    this.rectangle = null\n  }\n\n  start({ rectangle, mouseX, mouseY }) {\n    this.rectangle = rectangle\n    this.startCoords = {\n      rectangle: {\n        x: this.rectangle.x,\n        y: this.rectangle.y,\n      },\n      lines: this.rectangle.lines.map((line) => ({\n        x1: line.x1,\n        x2: line.x2,\n        y1: line.y1,\n        y2: line.y2,\n      })),\n      points: this.rectangle.points.map((point) => ({\n        x: point.x,\n        y: point.y,\n      })),\n      mouse: {\n        x: mouseX,\n        y: mouseY,\n      },\n      textField: {\n        x: this.rectangle.textField.x,\n        y: this.rectangle.textField.y,\n      },\n    }\n  }\n\n  processing({ mouseX, mouseY }) {\n    const diff1 = mouseX - this.startCoords.mouse.x\n    const diff2 = mouseY - this.startCoords.mouse.y\n\n    this.rectangle.lines.forEach((line, i) => {\n      if (line.rectangleStart === this.rectangle) {\n        line.move({\n          x1: this.startCoords.lines[i].x1 + diff1,\n          y1: this.startCoords.lines[i].y1 + diff2,\n        })\n      } else {\n        line.move({\n          x2: this.startCoords.lines[i].x2 + diff1,\n          y2: this.startCoords.lines[i].y2 + diff2,\n        })\n      }\n    })\n\n    this.rectangle.points.forEach((point, i) => {\n      point.move(\n        this.startCoords.points[i].x + diff1,\n        this.startCoords.points[i].y + diff2,\n      )\n    })\n\n    this.rectangle.textField.move(\n      this.startCoords.textField.x + diff1,\n      this.startCoords.textField.y + diff2,\n    )\n\n    this.rectangle.move(\n      this.startCoords.rectangle.x + diff1,\n      this.startCoords.rectangle.y + diff2,\n    )\n  }\n\n  stop() {\n    this.resetState()\n    ___WEBPACK_IMPORTED_MODULE_0__[\"rc\"].render()\n  }\n\n  resetState() {\n    this.rectangle = null\n    this.startCoords = null\n  }\n}\n\n\n//# sourceURL=webpack:///./src/actions/MovingNode.js?");

/***/ }),

/***/ "./src/actions/index.js":
/*!******************************!*\
  !*** ./src/actions/index.js ***!
  \******************************/
/*! exports provided: CreatingLink, ChangingLink, MovingNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _CreatingLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreatingLink */ \"./src/actions/CreatingLink.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"CreatingLink\", function() { return _CreatingLink__WEBPACK_IMPORTED_MODULE_0__[\"CreatingLink\"]; });\n\n/* harmony import */ var _ChangingLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChangingLink */ \"./src/actions/ChangingLink.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ChangingLink\", function() { return _ChangingLink__WEBPACK_IMPORTED_MODULE_1__[\"ChangingLink\"]; });\n\n/* harmony import */ var _MovingNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MovingNode */ \"./src/actions/MovingNode.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"MovingNode\", function() { return _MovingNode__WEBPACK_IMPORTED_MODULE_2__[\"MovingNode\"]; });\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/actions/index.js?");

/***/ }),

/***/ "./src/components/Circle.js":
/*!**********************************!*\
  !*** ./src/components/Circle.js ***!
  \**********************************/
/*! exports provided: Circle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Circle\", function() { return Circle; });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ */ \"./src/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shortid */ \"./node_modules/shortid/index.js\");\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nclass Circle {\n  constructor(props) {\n    this.x = props.x\n    this.y = props.y\n    this.radius = props.radius\n    this.startAngle = props.startAngle || 0\n    this.endAngle = props.endAngle || Math.PI * 2\n\n    this.type = props.type || 'circle'\n    this.line = props.line || null\n    this.rectangle = props.rectangle || null\n    this.zIndex = props.type === 'connectPoint' ? 2 : 3\n    this._id = props._id || shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate()\n  }\n\n  draw() {\n    ___WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].beginPath()\n    ___WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = this.type === 'circle' ? '#91ede4' : 'red'\n    ___WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].arc(this.x, this.y, this.radius, this.startAngle, this.endAngle)\n    ___WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fill()\n    ___WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = '#faf378'\n  }\n\n  move(x, y) {\n    this.x = x\n    this.y = y\n  }\n\n  isMouseOver(mouseX, mouseY) {\n    if (this.type === 'connectPoint' && this.rectangle) {\n      return !!Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"recognizeSide\"])(this.rectangle, { x: mouseX, y: mouseY })\n    }\n\n    return (\n      Math.pow(this.x - mouseX, 2) + Math.pow(this.y - mouseY, 2) <=\n      Math.pow(this.radius, 2)\n    )\n  }\n}\n\n\n//# sourceURL=webpack:///./src/components/Circle.js?");

/***/ }),

/***/ "./src/components/Line.js":
/*!********************************!*\
  !*** ./src/components/Line.js ***!
  \********************************/
/*! exports provided: Line */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Line\", function() { return Line; });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ \"./src/index.js\");\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shortid */ \"./node_modules/shortid/index.js\");\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nclass Line {\n  constructor(props) {\n    this.x1 = props.x1\n    this.y1 = props.y1\n    this.x2 = props.x2\n    this.y2 = props.y2\n\n    this.rectangleStart = props.rectangleStart\n    this.rectangleEnd = props.rectangleEnd\n    this.circleStart = props.circleStart\n    this.circleEnd = props.circleEnd\n    this.zIndex = 0\n    this.type = 'line'\n    this._id = props._id || shortid__WEBPACK_IMPORTED_MODULE_1___default.a.generate()\n  }\n\n  draw() {\n    ___WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].beginPath()\n\n    ___WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].moveTo(this.x1, this.y1)\n    ___WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].lineTo(this.x2, this.y2)\n    ___WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].stroke()\n  }\n\n  move({ x1 = this.x1, x2 = this.x2, y1 = this.y1, y2 = this.y2 }) {\n    this.x1 = x1\n    this.y1 = y1\n    this.x2 = x2\n    this.y2 = y2\n  }\n\n  isMouseOver() {\n    return false\n  }\n}\n\n\n//# sourceURL=webpack:///./src/components/Line.js?");

/***/ }),

/***/ "./src/components/Rect.js":
/*!********************************!*\
  !*** ./src/components/Rect.js ***!
  \********************************/
/*! exports provided: Rect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Rect\", function() { return Rect; });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ */ \"./src/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n/* harmony import */ var _TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextField */ \"./src/components/TextField.js\");\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shortid */ \"./node_modules/shortid/index.js\");\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nclass Rect {\n  constructor(props) {\n    this.x = props.x\n    this.y = props.y\n    this.w = props.w\n    this.h = props.h\n\n    this.type = 'rectangle'\n    this.lines = props.lines || []\n    this.points = props.points || []\n    this.zIndex = 1\n    this.textField = new _TextField__WEBPACK_IMPORTED_MODULE_2__[\"TextField\"]({\n      x: props.x,\n      y: props.y + props.h + 25,\n      w: props.w,\n      h: 30,\n      content: props.text || '',\n    })\n    this._id = props._id || shortid__WEBPACK_IMPORTED_MODULE_3___default.a.generate()\n  }\n\n  draw() {\n    ___WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillRect(this.x, this.y, this.w, this.h)\n  }\n\n  move(x, y) {\n    this.x = x\n    this.y = y\n  }\n\n  isMouseOver(mouseX, mouseY) {\n    return (\n      mouseX >= this.x &&\n      mouseX <= this.x + this.w &&\n      mouseY >= this.y &&\n      mouseY <= this.y + this.h\n    )\n  }\n\n  isMouseOverConnectPoint(mouseX, mouseY) {\n    const side = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"recognizeSide\"])(this, { x: mouseX, y: mouseY })\n\n    if (side) {\n      return true\n    }\n\n    return false\n  }\n\n  addChild(element) {\n    if (element.type === 'circle') {\n      this.points.push(element)\n    } else {\n      this.lines.push(element)\n    }\n  }\n\n  removeChild(element) {\n    if (element.type === 'circle') {\n      const findIndex = this.points.findIndex((point) => point === element)\n      this.points.splice(findIndex, 1)\n    } else {\n      const findIndex = this.lines.findIndex((line) => line === element)\n      this.lines.splice(findIndex, 1)\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./src/components/Rect.js?");

/***/ }),

/***/ "./src/components/TextField.js":
/*!*************************************!*\
  !*** ./src/components/TextField.js ***!
  \*************************************/
/*! exports provided: TextField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TextField\", function() { return TextField; });\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shortid */ \"./node_modules/shortid/index.js\");\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass TextField {\n  constructor(props) {\n    this.x = props.x\n    this.y = props.y\n    this.content = props.content || ''\n    this.onChange = this.onChange.bind(this)\n    this._id = shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate()\n\n    this.createElement(props)\n  }\n\n  createElement(props) {\n    this.element = document.createElement('label')\n    this.element.style.cssText = `\n      position: fixed;\n      left: ${props.x}px;\n      top: ${props.y}px;\n      width: ${props.w}px;\n      height: ${props.h}px;\n    `\n    this.element.insertAdjacentHTML(\n      'beforeend',\n      `\n      <span class=\"mdc-text-field__ripple\"></span>\n      <span class=\"mdc-floating-label\" id=\"my-label\">заметОЧКа</span>\n      <input\n        type=\"text\"\n        class=\"mdc-text-field__input\"\n        aria-labelledby=\"my-label\"\n      />\n      <span class=\"mdc-line-ripple\"></span>\n    `,\n    )\n    this.element.classList.add(\n      'rect-input',\n      'mdc-text-field',\n      'mdc-text-field--outlined',\n    )\n    this.input = this.element.querySelector('input')\n    this.input.value = this.content\n    this.input.addEventListener('input', this.onChange)\n\n    document.body.appendChild(this.element)\n    window.mdc.textField.MDCTextField.attachTo(this.element)\n  }\n\n  move(x, y) {\n    this.x = x\n    this.y = y\n\n    this.element.style.left = this.x + 'px'\n    this.element.style.top = this.y + 'px'\n  }\n\n  onChange(event) {\n    this.content = event.target.value\n  }\n}\n\n\n//# sourceURL=webpack:///./src/components/TextField.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: ctx, globalSizes, rc, stateManager, connectPoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ctx\", function() { return ctx; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"globalSizes\", function() { return globalSizes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rc\", function() { return rc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"stateManager\", function() { return stateManager; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"connectPoint\", function() { return connectPoint; });\n/* harmony import */ var _managers_RenderController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./managers/RenderController */ \"./src/managers/RenderController.js\");\n/* harmony import */ var _managers_StateManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./managers/StateManager */ \"./src/managers/StateManager.js\");\n/* harmony import */ var _managers_ActionManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./managers/ActionManager */ \"./src/managers/ActionManager.js\");\n/* harmony import */ var _managers_ConnectPoint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./managers/ConnectPoint */ \"./src/managers/ConnectPoint.js\");\n/* harmony import */ var _components_Rect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Rect */ \"./src/components/Rect.js\");\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/main.css */ \"./src/styles/main.css\");\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_main_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _managers_SaveManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./managers/SaveManager */ \"./src/managers/SaveManager.js\");\n/* harmony import */ var _managers_LoadManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./managers/LoadManager */ \"./src/managers/LoadManager.js\");\n\n\n\n\n\n\n\n\n\nconst canvas = document.querySelector('.canvas')\n\nconst ctx = canvas.getContext('2d')\nconst globalSizes = {}\n\nconst rc = new _managers_RenderController__WEBPACK_IMPORTED_MODULE_0__[\"RenderController\"]()\nconst stateManager = new _managers_StateManager__WEBPACK_IMPORTED_MODULE_1__[\"StateManager\"]()\nconst connectPoint = new _managers_ConnectPoint__WEBPACK_IMPORTED_MODULE_3__[\"ConnectPoint\"]()\nconst actionManager = new _managers_ActionManager__WEBPACK_IMPORTED_MODULE_2__[\"ActionManager\"]()\nconst saveManager = new _managers_SaveManager__WEBPACK_IMPORTED_MODULE_6__[\"SaveManager\"]()\nconst loadManager = new _managers_LoadManager__WEBPACK_IMPORTED_MODULE_7__[\"LoadManager\"]()\n\ncanvas.addEventListener('mousedown', (event) => {\n  const mouseX = event.pageX\n  const mouseY = event.pageY\n\n  const overElement = stateManager.getOverElement(mouseX, mouseY)\n\n  if (overElement) {\n    switch (overElement.type) {\n      case 'connectPoint':\n        actionManager.dispatch({\n          type: 'start',\n          name: 'creatingLink',\n          payload: {\n            mouseX,\n            mouseY,\n            connectPoint: overElement,\n          },\n        })\n        stateManager.actionState = 'creatingLink'\n        break\n      case 'circle':\n        actionManager.dispatch({\n          type: 'start',\n          name: 'changingLink',\n          payload: { circle: overElement },\n        })\n        stateManager.actionState = 'changingLink'\n        break\n      case 'rectangle':\n        actionManager.dispatch({\n          type: 'start',\n          name: 'movingNode',\n          payload: { mouseX, mouseY, rectangle: overElement },\n        })\n        stateManager.actionState = 'movingNode'\n        break\n    }\n  }\n})\n\ncanvas.addEventListener('mousemove', (event) => {\n  const mouseX = event.pageX\n  const mouseY = event.pageY\n  const actionState = stateManager.actionState\n\n  connectPoint.calculateNewConnectPoint(mouseX, mouseY)\n\n  if (actionState) {\n    actionManager.dispatch({\n      type: 'processing',\n      name: actionState,\n      payload: { mouseX, mouseY },\n    })\n  }\n\n  rc.render()\n})\n\ncanvas.addEventListener('mouseup', (event) => {\n  const mouseX = event.pageX\n  const mouseY = event.pageY\n\n  const actionState = stateManager.actionState\n\n  if (actionState) {\n    actionManager.dispatch({\n      type: 'stop',\n      name: actionState,\n      payload: { mouseX, mouseY },\n    })\n    stateManager.actionState = null\n  }\n})\n\ndocument.querySelector('.add').addEventListener('click', () => {\n  const rect = new _components_Rect__WEBPACK_IMPORTED_MODULE_4__[\"Rect\"]({\n    x: globalSizes.width / 2 - 50,\n    y: globalSizes.height / 2 - 50,\n    w: 100,\n    h: 100,\n  })\n\n  rc.add(rect)\n  rc.render()\n})\n\ndocument.querySelector('.save').addEventListener('click', () => {\n  saveManager.save()\n})\n\ndocument.querySelector('.load').addEventListener('click', () => {\n  loadManager.load()\n})\n\nconst init = () => {\n  canvas.width = globalSizes.width = window.innerWidth\n  canvas.height = globalSizes.height = window.innerHeight\n\n  ctx.lineWidth = 4\n  ctx.strokeStyle = '#333'\n  ctx.fillStyle = '#faf378'\n\n  rc.render()\n}\n\nwindow.addEventListener('resize', init, false)\n\nconst rect1 = new _components_Rect__WEBPACK_IMPORTED_MODULE_4__[\"Rect\"]({\n  x: 50,\n  y: 50,\n  w: 100,\n  h: 100,\n})\n\nconst rect2 = new _components_Rect__WEBPACK_IMPORTED_MODULE_4__[\"Rect\"]({\n  x: 500,\n  y: 500,\n  w: 100,\n  h: 100,\n})\n\nrc.add(rect1)\nrc.add(rect2)\n\ninit()\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/managers/ActionManager.js":
/*!***************************************!*\
  !*** ./src/managers/ActionManager.js ***!
  \***************************************/
/*! exports provided: ActionManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ActionManager\", function() { return ActionManager; });\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ \"./src/actions/index.js\");\n\n\nclass ActionManager {\n  constructor() {\n    this.actions = {\n      creatingLink: new _actions__WEBPACK_IMPORTED_MODULE_0__[\"CreatingLink\"](),\n      changingLink: new _actions__WEBPACK_IMPORTED_MODULE_0__[\"ChangingLink\"](),\n      movingNode: new _actions__WEBPACK_IMPORTED_MODULE_0__[\"MovingNode\"](),\n    }\n  }\n\n  dispatch({ type, name, payload }) {\n    this.actions[name][type]({ ...payload })\n  }\n}\n\n\n//# sourceURL=webpack:///./src/managers/ActionManager.js?");

/***/ }),

/***/ "./src/managers/ConnectPoint.js":
/*!**************************************!*\
  !*** ./src/managers/ConnectPoint.js ***!
  \**************************************/
/*! exports provided: ConnectPoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ConnectPoint\", function() { return ConnectPoint; });\n/* harmony import */ var _components_Circle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Circle */ \"./src/components/Circle.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .. */ \"./src/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n\n\n\n\nclass ConnectPoint {\n  constructor() {\n    this.circle = new _components_Circle__WEBPACK_IMPORTED_MODULE_0__[\"Circle\"]({\n      x: 0,\n      y: 0,\n      radius: 0,\n      startAngle: 0,\n      endAngle: Math.PI * 2,\n      type: 'connectPoint',\n    })\n    ___WEBPACK_IMPORTED_MODULE_1__[\"rc\"].add(this.circle)\n  }\n\n  calculateNewConnectPoint(mouseX, mouseY) {\n    const rectangle = ___WEBPACK_IMPORTED_MODULE_1__[\"rc\"].figures\n      .filter((figure) => figure.type === 'rectangle')\n      .find((rect) => rect.isMouseOverConnectPoint(mouseX, mouseY))\n\n    if (rectangle) {\n      const side = Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"recognizeSide\"])(rectangle, { x: mouseX, y: mouseY })\n\n      if (side === 'left') {\n        this.circle.x = rectangle.x\n        this.circle.y = mouseY\n      } else if (side === 'right') {\n        this.circle.x = rectangle.x + rectangle.w\n        this.circle.y = mouseY\n      } else if (side === 'top') {\n        this.circle.x = mouseX\n        this.circle.y = rectangle.y\n      } else if (side === 'bottom') {\n        this.circle.x = mouseX\n        this.circle.y = rectangle.y + rectangle.h\n      }\n\n      this.circle.rectangle = rectangle\n      this.circle.radius = 7\n    } else {\n      this.circle.rectangle = null\n      this.circle.radius = 0\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./src/managers/ConnectPoint.js?");

/***/ }),

/***/ "./src/managers/LoadManager.js":
/*!*************************************!*\
  !*** ./src/managers/LoadManager.js ***!
  \*************************************/
/*! exports provided: LoadManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LoadManager\", function() { return LoadManager; });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ \"./src/index.js\");\n/* harmony import */ var _components_Circle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Circle */ \"./src/components/Circle.js\");\n/* harmony import */ var _components_Rect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Rect */ \"./src/components/Rect.js\");\n/* harmony import */ var _components_Line__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Line */ \"./src/components/Line.js\");\n\n\n\n\n\nclass LoadManager {\n  loadConnectPoint(figure) {\n    return new _components_Circle__WEBPACK_IMPORTED_MODULE_1__[\"Circle\"]({\n      x: figure.x,\n      y: figure.y,\n      radius: figure.radius,\n      startAngle: figure.startAngle,\n      endAngle: figure.endAngle,\n      _id: figure._id,\n\n      type: figure.type,\n    })\n  }\n\n  loadLine(figure) {\n    return new _components_Line__WEBPACK_IMPORTED_MODULE_3__[\"Line\"]({\n      x1: figure.x1,\n      y1: figure.y1,\n      x2: figure.x2,\n      y2: figure.y2,\n      zIndex: figure.zIndex,\n      _id: figure._id,\n\n      rectangleStart: figure.rectangleStart,\n      rectangleEnd: figure.rectangleEnd,\n      circleStart: figure.circleStart,\n      circleEnd: figure.circleEnd,\n      type: figure.type,\n    })\n  }\n\n  loadRectangle(figure) {\n    console.log(figure.text)\n    return new _components_Rect__WEBPACK_IMPORTED_MODULE_2__[\"Rect\"]({\n      x: figure.x,\n      y: figure.y,\n      w: figure.w,\n      h: figure.h,\n      text: figure.text,\n      _id: figure._id,\n\n      points: figure.points,\n      lines: figure.lines,\n      type: figure.type,\n    })\n  }\n\n  loadCircle(figure) {\n    return new _components_Circle__WEBPACK_IMPORTED_MODULE_1__[\"Circle\"]({\n      x: figure.x,\n      y: figure.y,\n      radius: figure.radius,\n      startAngle: figure.startAngle,\n      endAngle: figure.endAngle,\n      line: figure.line,\n      _id: figure._id,\n\n      type: figure.type,\n    })\n  }\n\n  findFigure(id, figures) {\n    return figures.find((figure) => figure._id === id)\n  }\n\n  loadRectangleChildrens(figure, figures) {\n    figure.points = figure.points.map((id) =>\n      this.findFigure(id, figures, 'rect'),\n    )\n    figure.lines = figure.lines.map((id) =>\n      this.findFigure(id, figures, 'rect'),\n    )\n  }\n\n  loadLineChildrens(figure, figures) {\n    figure.rectangleStart = this.findFigure(figure.rectangleStart, figures)\n    figure.rectangleEnd = this.findFigure(figure.rectangleEnd, figures)\n    figure.circleStart = this.findFigure(figure.circleStart, figures)\n    figure.circleEnd = this.findFigure(figure.circleEnd, figures)\n  }\n\n  loadCircleChildrens(figure, figures) {\n    figure.line = this.findFigure(figure.line, figures)\n  }\n\n  loadChildrens(figure, figures) {\n    if (figure.type === 'rectangle') {\n      this.loadRectangleChildrens(figure, figures)\n    } else if (figure.type === 'line') {\n      this.loadLineChildrens(figure, figures)\n    } else if (figure.type === 'circle') {\n      this.loadCircleChildrens(figure, figures)\n    }\n  }\n\n  loadFigure(figure) {\n    return this[`load${figure.type[0].toUpperCase() + figure.type.slice(1)}`](\n      figure,\n    )\n  }\n\n  load() {\n    document.querySelectorAll('.rect-input').forEach((item) => item.remove())\n\n    const savedData = JSON.parse(window.localStorage.getItem('save'))\n    const newFigures = savedData.map((figure) => this.loadFigure(figure))\n\n    newFigures.forEach((figure) => this.loadChildrens(figure, newFigures))\n\n    ___WEBPACK_IMPORTED_MODULE_0__[\"connectPoint\"].circle = newFigures.find(\n      (figure) => figure.type === 'connectPoint',\n    )\n    ___WEBPACK_IMPORTED_MODULE_0__[\"rc\"].figures = newFigures\n    ___WEBPACK_IMPORTED_MODULE_0__[\"rc\"].render()\n  }\n}\n\n\n//# sourceURL=webpack:///./src/managers/LoadManager.js?");

/***/ }),

/***/ "./src/managers/RenderController.js":
/*!******************************************!*\
  !*** ./src/managers/RenderController.js ***!
  \******************************************/
/*! exports provided: RenderController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RenderController\", function() { return RenderController; });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ \"./src/index.js\");\n\n\nclass RenderController {\n  constructor() {\n    this.figures = []\n  }\n\n  render() {\n    ___WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].clearRect(0, 0, ___WEBPACK_IMPORTED_MODULE_0__[\"globalSizes\"].width, ___WEBPACK_IMPORTED_MODULE_0__[\"globalSizes\"].height)\n\n    const length = this.figures.length\n    for (let i = length - 1; i >= 0; i--) {\n      this.figures[i].draw()\n    }\n  }\n\n  add(element) {\n    this.figures.push(element)\n    this.figures.sort((figure1, figure2) => figure2.zIndex - figure1.zIndex)\n  }\n\n  remove(element) {\n    const index = this.figures.findIndex((figure) => figure === element)\n    this.figures.splice(index, 1)\n  }\n}\n\n\n//# sourceURL=webpack:///./src/managers/RenderController.js?");

/***/ }),

/***/ "./src/managers/SaveManager.js":
/*!*************************************!*\
  !*** ./src/managers/SaveManager.js ***!
  \*************************************/
/*! exports provided: SaveManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SaveManager\", function() { return SaveManager; });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ \"./src/index.js\");\n\n\nclass SaveManager {\n  constructor() {}\n\n  saveConnectPoint(figure) {\n    return {\n      x: figure.x,\n      y: figure.y,\n      radius: figure.radius,\n      startAngle: figure.startAngle,\n      endAngle: figure.endAngle,\n      _id: figure._id,\n\n      type: figure.type,\n    }\n  }\n\n  saveLine(figure) {\n    return {\n      x1: figure.x1,\n      y1: figure.y1,\n      x2: figure.x2,\n      y2: figure.y2,\n      zIndex: figure.zIndex,\n      _id: figure._id,\n\n      rectangleStart: figure.rectangleStart._id,\n      rectangleEnd: figure.rectangleEnd._id,\n      circleStart: figure.circleStart._id,\n      circleEnd: figure.circleEnd._id,\n      type: figure.type,\n    }\n  }\n\n  saveRectangle(figure) {\n    console.log('save rectangle - ', figure.textField)\n    return {\n      x: figure.x,\n      y: figure.y,\n      w: figure.w,\n      h: figure.h,\n      text: figure.textField.content,\n      _id: figure._id,\n\n      points: figure.points.map((point) => point._id),\n      lines: figure.lines.map((line) => line._id),\n      type: figure.type,\n    }\n  }\n\n  saveCircle(figure) {\n    return {\n      x: figure.x,\n      y: figure.y,\n      radius: figure.radius,\n      startAngle: figure.startAngle,\n      endAngle: figure.endAngle,\n      line: figure.line._id,\n      _id: figure._id,\n\n      type: figure.type,\n    }\n  }\n\n  saveFigure(figure) {\n    return this[`save${figure.type[0].toUpperCase() + figure.type.slice(1)}`](\n      figure,\n    )\n  }\n\n  save() {\n    const savedArray = ___WEBPACK_IMPORTED_MODULE_0__[\"rc\"].figures.map((figure) => this.saveFigure(figure))\n\n    localStorage.setItem('save', JSON.stringify(savedArray))\n  }\n}\n\n\n//# sourceURL=webpack:///./src/managers/SaveManager.js?");

/***/ }),

/***/ "./src/managers/StateManager.js":
/*!**************************************!*\
  !*** ./src/managers/StateManager.js ***!
  \**************************************/
/*! exports provided: StateManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StateManager\", function() { return StateManager; });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ \"./src/index.js\");\n\n\nclass StateManager {\n  constructor() {\n    this.actionState = null\n  }\n\n  getOverElement(mouseX, mouseY) {\n    const figure = ___WEBPACK_IMPORTED_MODULE_0__[\"rc\"].figures.find((figure) => {\n      return figure.isMouseOver(mouseX, mouseY)\n    })\n    return figure\n  }\n}\n\n\n//# sourceURL=webpack:///./src/managers/StateManager.js?");

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/main.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/styles/main.css?");

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: recognizeSide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"recognizeSide\", function() { return recognizeSide; });\nconst recognizeSide = (square, mouse) => {\n  const isLeftSide =\n    mouse.x >= square.x - 10 &&\n    mouse.x < square.x + 15 &&\n    mouse.y > square.y &&\n    mouse.y < square.h + square.y\n  const isRightSide =\n    mouse.x > square.x + square.w - 15 &&\n    mouse.x <= square.x + square.w + 10 &&\n    mouse.y > square.y &&\n    mouse.y < square.h + square.y\n  const isTopSide =\n    mouse.x > square.x &&\n    mouse.x < square.x + square.w &&\n    mouse.y < square.y + 15 &&\n    mouse.y >= square.y - 10\n  const isBottomSide =\n    mouse.x > square.x &&\n    mouse.x < square.x + square.w &&\n    mouse.y > square.y + square.h - 15 &&\n    mouse.y <= square.y + square.h + 10\n\n  if (isLeftSide) {\n    return 'left'\n  } else if (isRightSide) {\n    return 'right'\n  } else if (isTopSide) {\n    return 'top'\n  } else if (isBottomSide) {\n    return 'bottom'\n  }\n}\n\n\n//# sourceURL=webpack:///./src/utils/index.js?");

/***/ })

/******/ });