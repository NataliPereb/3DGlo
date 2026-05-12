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

/***/ "./index.js"
/*!******************!*\
  !*** ./index.js ***!
  \******************/
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\nvar _timer = _interopRequireDefault(__webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\"));\nvar _menu = _interopRequireDefault(__webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\"));\nvar _modal = _interopRequireDefault(__webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\"));\nvar _calc = _interopRequireDefault(__webpack_require__(/*! ./modules/calc */ \"./modules/calc.js\"));\nvar _forms = _interopRequireDefault(__webpack_require__(/*! ./modules/forms */ \"./modules/forms.js\"));\nvar _tabs = _interopRequireDefault(__webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\"));\nfunction _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }\n(0, _timer.default)(\"01 september 2026\");\n(0, _menu.default)();\n(0, _modal.default)();\n(0, _calc.default)();\n(0, _forms.default)();\n(0, _tabs.default)();\n\n//# sourceURL=webpack:///./index.js?\n}");

/***/ },

/***/ "./modules/calc.js"
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
(__unused_webpack_module, exports) {

eval("{\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\nconst calc = () => {\n  const selectType = document.querySelector(\".calc-type\");\n  const inputSquare = document.querySelector(\".calc-square\");\n  const inputCount = document.querySelector(\".calc-count\");\n  const inputDay = document.querySelector(\".calc-day\");\n  const number = e => {\n    e.target.value = e.target.value.replace(/[^0-9]/g, \"\");\n  };\n  inputSquare.addEventListener(\"input\", number);\n  inputCount.addEventListener(\"input\", number);\n  inputDay.addEventListener(\"input\", number);\n};\nvar _default = exports[\"default\"] = calc;\n\n//# sourceURL=webpack:///./modules/calc.js?\n}");

/***/ },

/***/ "./modules/forms.js"
/*!**************************!*\
  !*** ./modules/forms.js ***!
  \**************************/
(__unused_webpack_module, exports) {

eval("{\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\nconst forms = () => {\n  const textInputs = document.querySelectorAll(\"#form1-name, #form2-name, #form2-message, #form3-name\");\n  textInputs.forEach(input => {\n    input.addEventListener(\"input\", e => {\n      e.target.value = e.target.value.replace(/[^А-Яа-яЁё\\-\\s]/g, \"\");\n    });\n  });\n  const emailInputs = document.querySelectorAll(\"#form1-email, #form2-email, #form3-email\");\n  emailInputs.forEach(input => {\n    input.addEventListener(\"input\", e => {\n      e.target.value = e.target.value.replace(/[^A-Za-z0-9@\\-_\\.!~*']/g, \"\");\n    });\n  });\n  const phoneInputs = document.querySelectorAll(\"#form1-phone, #form2-phone, #form3-phone\");\n  phoneInputs.forEach(input => {\n    input.addEventListener(\"input\", e => {\n      e.target.value = e.target.value.replace(/[^0-9\\(\\)\\-]/g, \"\");\n    });\n  });\n};\nvar _default = exports[\"default\"] = forms;\n\n//# sourceURL=webpack:///./modules/forms.js?\n}");

/***/ },

/***/ "./modules/menu.js"
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
(__unused_webpack_module, exports) {

eval("{\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\nconst menu = () => {\n  const menuBtn = document.querySelector(\".menu\");\n  const menu = document.querySelector(\"menu\");\n  const handeleMenu = () => {\n    menu.classList.toggle(\"active-menu\");\n  };\n  menuBtn.addEventListener(\"click\", handeleMenu);\n  menu.addEventListener(\"click\", e => {\n    if (e.target.closest(\".close-btn\") || e.target.closest(\"ul li a\")) {\n      handeleMenu();\n    }\n  });\n};\nvar _default = exports[\"default\"] = menu;\n\n//# sourceURL=webpack:///./modules/menu.js?\n}");

/***/ },

/***/ "./modules/modal.js"
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
(__unused_webpack_module, exports) {

eval("{\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\nconst modal = () => {\n  const buttons = document.querySelectorAll(\".popup-btn\");\n  const modal = document.querySelector(\".popup\");\n  buttons.forEach(btn => {\n    btn.addEventListener(\"click\", () => {\n      modal.style.display = \"block\";\n    });\n  });\n  modal.addEventListener(\"click\", e => {\n    if (!e.target.closest(\".popup-content\") || e.target.classList.contains(\"popup-close\")) {\n      modal.style.display = \"none\";\n    }\n  });\n};\nvar _default = exports[\"default\"] = modal;\n\n//# sourceURL=webpack:///./modules/modal.js?\n}");

/***/ },

/***/ "./modules/tabs.js"
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
(__unused_webpack_module, exports) {

eval("{\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\nconst tabs = () => {\n  const tabPanel = document.querySelector(\".service-header\");\n  const tabs = document.querySelectorAll(\".service-header-tab\");\n  const tabContent = document.querySelectorAll(\".service-tab\");\n  tabPanel.addEventListener(\"click\", e => {\n    if (e.target.closest(\".service-header-tab\")) {\n      const tabBtn = e.target.closest(\".service-header-tab\");\n      tabs.forEach((tab, index) => {\n        if (tab === tabBtn) {\n          tab.classList.add(\"active\");\n          tabContent[index].classList.remove(\"d-none\");\n        } else {\n          tab.classList.remove(\"active\");\n          tabContent[index].classList.add(\"d-none\");\n        }\n      });\n    }\n  });\n};\nvar _default = exports[\"default\"] = tabs;\n\n//# sourceURL=webpack:///./modules/tabs.js?\n}");

/***/ },

/***/ "./modules/timer.js"
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
(__unused_webpack_module, exports) {

eval("{\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\nconst timer = deadline => {\n  const timerHours = document.querySelector(\"#timer-hours\");\n  const timerMinutes = document.querySelector(\"#timer-minutes\");\n  const timerSeconds = document.querySelector(\"#timer-seconds\");\n  const getTimeRemaining = () => {\n    let dateStop = new Date(deadline).getTime();\n    let dateNow = new Date().getTime();\n    let timeRemaining = (dateStop - dateNow) / 1000;\n    //let days = Math.floor(timeRemaining / 60 / 60 / 24);\n    let hours = Math.floor(timeRemaining / 60 / 60);\n    let minutes = Math.floor(timeRemaining / 60 % 60);\n    let seconds = Math.floor(timeRemaining % 60);\n    let fHours = hours < 10 ? \"0\" + hours : hours;\n    let fMinutes = minutes < 10 ? \"0\" + minutes : minutes;\n    let fSecond = seconds < 10 ? \"0\" + seconds : seconds;\n    return {\n      timeRemaining,\n      fHours,\n      fMinutes,\n      fSecond\n    };\n  };\n  const upDateClock = () => {\n    let getTime = getTimeRemaining();\n    timerHours.textContent = getTime.fHours;\n    timerSeconds.textContent = getTime.fSecond;\n    timerMinutes.textContent = getTime.fMinutes;\n    if (getTime.timeRemaining <= 0) {\n      timerHours.textContent = \"00\";\n      timerSeconds.textContent = \"00\";\n      timerMinutes.textContent = \"00\";\n      clearInterval(interval);\n    }\n  };\n  let interval = setInterval(upDateClock, 1000);\n  upDateClock();\n};\nvar _default = exports[\"default\"] = timer;\n\n//# sourceURL=webpack:///./modules/timer.js?\n}");

/***/ }

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;