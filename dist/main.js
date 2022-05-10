/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function Logo(){
    const navMenu = document.querySelector('.header');
    const logo = document.createElement('div')
    logo.classList.add('logo');
    logo.innerHTML = 'Insert Logo Here';
    console.log(navMenu);
    navMenu.appendChild(logo);
}

function Header(){
    const nav = ['Home', 'About', 'Contact'];
    const header = document.querySelector('.header');
    const navMenu = document.createElement('div')
    navMenu.classList.add('navMenu')
    
    for(const[i , name] of nav.entries()){
        const element = document.createElement('div');
        element.classList.add(name.toLowerCase());
        element.innerHTML = `-${name}-`;
        nav[i] = element;
    }
    navMenu.append(...nav)
    
    header.appendChild(navMenu)
    Logo();

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pageLoad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);




function Content(){
    const header = document.querySelectorAll('.navMenu > div');
    const content = document.querySelector('.content');
    const contentDiv = document.createElement('div')
    contentDiv.classList.add('contentBox')
    content.appendChild(contentDiv)
    contentDiv.textContent = ""
    ;(0,_pageLoad_js__WEBPACK_IMPORTED_MODULE_0__["default"]) ('home');
    header.forEach(element => {
        element.addEventListener("click" , (e) =>{
            const navClass = e.target.className;
            contentDiv.textContent = "";
            (0,_pageLoad_js__WEBPACK_IMPORTED_MODULE_0__["default"]) (navClass);
           
        })       
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Content);

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function Details(title){
    const contentBox = document.querySelector('.contentBox');
    const contentTitle = document.createElement('div')
    const contentDescription = document.createElement('div')

    contentBox.textContent = ''

    contentTitle.classList.add('boxTitle')
    contentDescription.classList.add('boxDescription')

    if(title === 'home'){    
        contentTitle.innerHTML = 'Insert Restaurant Title Here'
        const about = document.createElement('div')
        const aboutdescription = document.createElement('div')

        about.classList.add('aboutRestaurant')
        aboutdescription.classList.add('aboutDescription')

        about.innerHTML = 'About restaurant'
        aboutdescription.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper nunc augue, sed sodales lacus molestie vel. Pellentesque vestibulum commodo ligula. Nunc tincidunt consectetur velit.'
        
        contentDescription.append(about, aboutdescription)
    }else if(title === 'about'){   
       



        contentTitle.innerHTML = 'Insert Restaurant Title Here'
        contentDescription.innerHTML = 'Insert Description Here'
        
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    }else if(title === 'contact'){    
        contentTitle.innerHTML = 'Insert Restaurant Title Here'
        contentDescription.innerHTML = 'Insert Description Here'
    }
    
    
    contentBox.append(contentTitle , contentDescription)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Details);


/***/ })
/******/ 	]);
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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _components_Content_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);



// import Footer from "./components/Footer"

function App(){
    const nav = ['Header', 'Content', 'Footer'];
    for(const[i , name] of nav.entries()){
        const element = document.createElement('div');
        element.classList.add(name.toLowerCase());

        nav[i] = element;
    }
    document.body.append(...nav)

    ;(0,_components_Header_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    (0,_components_Content_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

}

App();
})();

/******/ })()
;