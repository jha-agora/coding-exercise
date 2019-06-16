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

/***/ "./src/countdown.js":
/*!**************************!*\
  !*** ./src/countdown.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n * This function begins the event countdown timer and invokes a callback\r\n * on every tick (seconds)\r\n * \r\n * @param {Function} onTick - Callback invoked every second after this function is called\r\n * @returns Object;\r\n */\r\nfunction countdown(onTick = function(){}){\r\n\r\n    /**\r\n     * Get the current date and add five days. Also sets\r\n     * the time to 12:00AM.\r\n     */\r\n    var nowDate = new Date();\r\n    var eventDate = new Date();\r\n        eventDate.setDate(nowDate.getDate() + 5);\r\n        eventDate.setHours(0,0,0,0);\r\n    \r\n    //Calculate the time between the two dates in seconds\r\n    const secondsRemaining = (eventDate.getTime() - nowDate.getTime()) / 1000;\r\n    \r\n    //Start our actual countdown\r\n    let decrement = 0;\r\n    setInterval(() => {\r\n        /*\r\n         * Get the value of secondsRemaining minus the number of seconds\r\n         * the timer has aleady been running.\r\n         */\r\n        let seconds = secondsRemaining - decrement;\r\n\r\n        /**\r\n         * Calculate our days, hours, mins, and seconds\r\n         */\r\n        let days = Math.floor(seconds /  86400);\r\n        seconds = seconds % 86400; //Sets the remaining time for the next calculation (hours)\r\n        let hours = Math.floor(seconds / 3600);\r\n        seconds = seconds % 3600;\r\n        let min = Math.floor(seconds / 60);\r\n        seconds = seconds % 60;\r\n\r\n        //Invoke the onTick callback with our current countdown values\r\n        onTick({\r\n            days: days,\r\n            hours: hours,\r\n            min: min,\r\n            sec: Math.floor(seconds)\r\n        });\r\n\r\n        //Decrement by one second\r\n        decrement += 1;\r\n    }, 1000)\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (countdown);\r\n\r\n\n\n//# sourceURL=webpack:///./src/countdown.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _countdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./countdown */ \"./src/countdown.js\");\n/* harmony import */ var _pad_number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pad-number */ \"./src/pad-number.js\");\n/* harmony import */ var _newsletter_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newsletter-events */ \"./src/newsletter-events.js\");\n/* harmony import */ var _registration_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registration-events */ \"./src/registration-events.js\");\n\r\n\r\n\r\n\r\n\r\n/**\r\n * Wait for DOMContentLoaded before creating any DOM-dependent events\r\n */\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n    /**\r\n     * Add some events to the page\r\n     */\r\n    Object(_newsletter_events__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n    Object(_registration_events__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n    \r\n    /**\r\n     * Initiate our countdown\r\n     */\r\n    let days = document.getElementById(\"countdown__days\");\r\n    let hours =  document.getElementById(\"countdown__hours\");\r\n    let min =  document.getElementById(\"countdown__min\");\r\n    let sec =  document.getElementById(\"countdown__sec\");\r\n    Object(_countdown__WEBPACK_IMPORTED_MODULE_0__[\"default\"])((count) => {\r\n        days.innerHTML = count.days;\r\n        hours.innerHTML = Object(_pad_number__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(count.hours, 2);\r\n        min.innerHTML = Object(_pad_number__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(count.min, 2);\r\n        sec.innerHTML = Object(_pad_number__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(count.sec, 2);\r\n    })\r\n\r\n});\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/newsletter-events.js":
/*!**********************************!*\
  !*** ./src/newsletter-events.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n * This function binds together the \"checked\" state of the two newsletter\r\n * subscription toggles.\r\n */\r\nfunction addNewsletterEvents(){\r\n    //Get references to our checkbox elements\r\n    let checkbox1 = document.getElementById(\"newsletter-checkbox1\");\r\n    let checkbox2 = document.getElementById(\"newsletter-checkbox2\");\r\n\r\n    //When either event is emitted, the \"checked\" state of it's target checkbox is reflected to the other\r\n    checkbox1.addEventListener(\"click\", () => checkbox2.checked = checkbox1.checked );\r\n    checkbox2.addEventListener(\"click\", () => checkbox1.checked = checkbox2.checked );\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (addNewsletterEvents);\n\n//# sourceURL=webpack:///./src/newsletter-events.js?");

/***/ }),

/***/ "./src/pad-number.js":
/*!***************************!*\
  !*** ./src/pad-number.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n * Pads a number with zeros\r\n * \r\n * @param {Number} number - The number to pad\r\n * @param {Number} padding - Number of total digits the string should contain\r\n */\r\nfunction padNumber(number, padding){\r\n    if (number.toString().length < padding)\r\n        return \"#\".repeat(padding - number.toString().length).concat(number.toString()).replace(/#/g, \"0\");\r\n\r\n    return number;\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (padNumber);\r\n\n\n//# sourceURL=webpack:///./src/pad-number.js?");

/***/ }),

/***/ "./src/registration-events.js":
/*!************************************!*\
  !*** ./src/registration-events.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n * This function determines the behavior of the registration buttons\r\n */\r\nfunction addRegistrationEvents(){\r\n    //Get references to all the elements in play\r\n    let button1 = document.getElementById(\"registration-button1\");\r\n    let button2 = document.getElementById(\"registration-button2\");\r\n\r\n\r\n    button1.addEventListener(\"click\", handleRegistrationClicked);\r\n    button2.addEventListener(\"click\",  handleRegistrationClicked);\r\n}\r\n\r\nfunction handleRegistrationClicked(e){\r\n    if (!document.getElementById(\"newsletter-checkbox1\").checked){\r\n        alert(\"Please select the Free Newsletter checkbox before proceeding.\")\r\n        return;\r\n    }\r\n\r\n    fetchEndpoint((result) => {\r\n        let resultLabel = document.getElementById(e.srcElement.id + \"-result\");\r\n            resultLabel.innerHTML = result.submitok;\r\n\r\n            //Resetting some style properties for a transition effect\r\n            resultLabel.style.opacity = 1;\r\n            resultLabel.style.transform = \"translateY(0px)\";\r\n    })\r\n}\r\n\r\n/*\r\n * \r\n * @param {Function} onComplete - Callback for request completed\r\n */\r\nfunction fetchEndpoint(onComplete = function(){}){\r\n    /**\r\n     * Request to the API endpoint using Fetch. Using a CORS proxy for development purposes.\r\n     */\r\n    var proxyURL = \"https://cors-anywhere.herokuapp.com/\";\r\n    var URL = 'https://ykx8pov945.execute-api.us-east-1.amazonaws.com/test-Prod/testFunction'\r\n    fetch(proxyURL + URL)\r\n    .then((response) => {\r\n        //Get JSON from ReadableStream\r\n        response.json().then((result) => {\r\n\r\n            //Invoke the onComplete callback\r\n            onComplete(JSON.parse(result))\r\n\r\n        })\r\n    })\r\n    .catch((err) => {\r\n        console.warn(err);\r\n    })\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (addRegistrationEvents);\n\n//# sourceURL=webpack:///./src/registration-events.js?");

/***/ })

/******/ });