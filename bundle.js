/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);
	__webpack_require__(5);

	window.onload = function () {
		var projectsShowing = false;
		var projectsLoaded = false;
		var skillsShowing = false;
		var aboutShowing = true;
		var contributionsShowing = false;

		var navbar = document.getElementById('navbar');
		var navbarLinks = navbar.getElementsByClassName('link');

		for (var i = 0; i < navbarLinks.length; i++) {
			navbarLinks[i].className += ' navbar-link-animation';
		}

		var projectsLink = document.getElementById('projects');

		projectsLink.onclick = function (event) {
			event.preventDefault();
			var container = document.getElementById('container');
			container.className -= 'show';
			container.className += ' hide';
		};

		var skillsLink = document.getElementById('skills');
		var contributionsLink = document.getElementById('community');

		function displayProjects() {

			if (!projectsLoaded) {
				var getJSON = new Promise(function (resolve, reject) {
					loadJSON(function (response) {
						actual_JSON = JSON.parse(response);
						resolve(actual_JSON);
					});
				});

				getJSON.then(function (res) {
					res[0].web.forEach(function (project) {
						projectsLoaded = true;
						var projectLink = document.createElement('a');
						projectLink.href = project.url;
						projectLink.target = "_blank";

						var projectDiv = document.createElement('div');
						projectDiv.className = 'project';
						projectDiv.style.backgroundImage = 'url(' + project.image + ')';

						if (mobilecheck()) {
							displayProjectsContent(projectDiv, project);
							projectDiv.style.opacity = 1;
						}

						projectDiv.addEventListener("mouseenter", function () {
							displayProjectsContent(projectDiv, project);
						});
						projectDiv.addEventListener("mouseleave", function () {
							projectDiv.innerHTML = '';
						});
						projectLink.appendChild(projectDiv);
						projectsBlock.appendChild(projectLink);
					});
				});
			}

			var displayProjectsContent = function displayProjectsContent(projectDiv, project) {
				var descriptionBlock = document.createElement('div');
				descriptionBlock.className = "project-description";

				var titleParagraph = document.createElement('h4');
				titleParagraph.innerHTML = project.title;

				var descriptionParagraph = document.createElement('p');
				descriptionParagraph.innerHTML = project.description;
				descriptionBlock.appendChild(titleParagraph);
				descriptionBlock.appendChild(descriptionParagraph);

				var tagsBlock = document.createElement('ul');
				project.tags.forEach(function (tag) {
					var tagElement = document.createElement('li');
					tagElement.innerHTML = tag;
					tagsBlock.appendChild(tagElement);
				});
				descriptionBlock.appendChild(tagsBlock);

				projectDiv.appendChild(descriptionBlock);
			};
		}

		function loadJSON(callback) {
			var xobj = new XMLHttpRequest();
			xobj.overrideMimeType("application/json");
			xobj.open('GET', 'projects.json', true);

			xobj.onreadystatechange = function () {
				if (xobj.readyState == 4 && xobj.status == "200") {
					// Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
					callback(xobj.response);
				}
			};
			xobj.send(null);
		}

		// The following function is horrible but I don't have time to refactor it :/
		window.mobilecheck = function () {
			var check = false;
			(function (a) {
				if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
			})(navigator.userAgent || navigator.vendor || window.opera);
			return check;
		};
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./main.scss", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./main.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "body {\n  margin: 0;\n  width: 100%;\n  overflow-y: scroll; }\n\n#background-3d {\n  position: absolute;\n  opacity: 0.3; }\n\n#background-3d iframe {\n  border: none; }\n\n#container a {\n  text-decoration: none;\n  color: black; }\n\n#container {\n  width: 95%;\n  border-top: 3px solid #1a19a9;\n  border-right: 3px solid #1a19a9;\n  border-left: 3px solid #1a19a9;\n  margin: 1.5em auto; }\n\n#container #navbar {\n  display: block;\n  text-align: right;\n  margin-right: -20px;\n  margin-top: 10px;\n  position: relative;\n  float: right; }\n\n#navbar {\n  font-family: 'Source Sans Pro', sans-serif;\n  width: auto; }\n  #navbar .link {\n    display: block;\n    float: right;\n    clear: both;\n    margin-right: -180px;\n    transition-timing-function: ease-out;\n    transition: 0.5s;\n    transform: translateX(180px); }\n  #navbar .navbar-link-animation {\n    transition-timing-function: ease-in;\n    transition: 1s;\n    transform: translateX(-170px); }\n  #navbar .link:hover {\n    transition-timing-function: ease-in;\n    transition: 0.5s;\n    transform: translateX(-180px); }\n  #navbar .line {\n    width: 50px;\n    display: inline-block;\n    vertical-align: middle;\n    margin-left: 10px;\n    box-shadow: none;\n    border: none;\n    color: #ccc;\n    height: 1px; }\n\n#container #navbar a {\n  font-size: 12px;\n  font-weight: 400;\n  color: #ff1c00;\n  margin-right: 10px;\n  display: block;\n  margin-bottom: 5px;\n  /*font-weight: 600;*/ }\n\n#container #navbar a:hover {\n  /*color: rgb(255, 28, 0);*/\n  text-decoration: none;\n  /*font-weight: 600;*/ }\n\n#about-block .content {\n  display: inline-block;\n  width: 70%;\n  vertical-align: top; }\n\n#about-block img {\n  width: 15em;\n  display: inline-block;\n  margin-right: 1em;\n  margin-bottom: 1em; }\n\n#about-block h3 {\n  margin-top: 0;\n  margin-bottom: 1em; }\n\n#about-block {\n  text-align: justify;\n  margin-top: 5em; }\n\n#center {\n  display: block;\n  margin: 5% auto;\n  width: 80%;\n  max-height: 73%;\n  overflow-y: scroll; }\n\n#center::-webkit-scrollbar {\n  width: 1px; }\n\n#center #projects-block .project {\n  display: inline-block;\n  position: relative;\n  width: 30em;\n  height: 15em;\n  background: lightgrey;\n  margin-right: 10px;\n  vertical-align: top;\n  margin-top: 10px;\n  background-size: cover;\n  background-position: center;\n  /*opacity: 0.7;*/ }\n\n#center #projects-block .project:hover {\n  opacity: 1; }\n\n#center #projects-block .project h4 {\n  color: white;\n  font-size: 15px; }\n\n#center #projects-block .project p {\n  color: white;\n  font-size: 12px; }\n\n#center #projects-block .project .project-description ul {\n  margin-bottom: 10px;\n  padding: 0;\n  list-style: none; }\n\n#center #projects-block .project .project-description ul li {\n  display: inline-block;\n  background: white;\n  margin-right: 10px;\n  padding: 0em 1em;\n  font-size: 10px; }\n\n#center #projects-block .project .project-description {\n  /*border: 5px solid rgb(26, 25, 169);*/\n  padding: 0em 1em;\n  background: #5539da;\n  display: block;\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  left: 0; }\n\n#projects-block, #about-block {\n  display: none;\n  font-family: 'Source Code Pro';\n  width: 65em; }\n\n#contributions-block ul li a {\n  color: #1a19a9; }\n\n#contributions-block ul li a:hover {\n  text-decoration: underline; }\n\n@keyframes fadeIn {\n  to {\n    opacity: 1; } }\n\n.fade-in {\n  opacity: 0;\n  animation: fadeIn .5s ease-in 1 forwards; }\n\n.is-paused {\n  animation-play-state: paused; }\n\n#skills-block .block {\n  display: inline-block;\n  vertical-align: top;\n  margin-right: 2em; }\n\n#container .description {\n  display: inline-block;\n  position: absolute;\n  margin-top: 10px;\n  margin-left: 10px;\n  width: 100px; }\n\n#container .description h1 {\n  line-height: 30px;\n  color: #2d307a;\n  font-weight: 200;\n  font-size: 30px;\n  margin-bottom: 5px;\n  margin-top: 0px;\n  font-family: 'Source Sans Pro', sans-serif;\n  letter-spacing: 2px;\n  /*font-style: italic;*/ }\n\n#container .description h3 {\n  font-family: 'Source Sans Pro', sans-serif;\n  font-weight: 200;\n  font-size: 12px;\n  margin-top: 5px; }\n\n#container .footer {\n  display: block;\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n  width: 100%;\n  text-align: right; }\n\n.footer ul {\n  font-family: 'Source Code Pro';\n  list-style: none; }\n\n.footer ul li {\n  display: inline-block; }\n\n.footer ul li a {\n  color: black; }\n\n@media only screen and (max-width: 480px) {\n  body {\n    overflow: hidden; }\n  #container .description h1 {\n    line-height: 1em;\n    display: inline;\n    font-size: 20px; }\n  #background-3d {\n    position: fixed;\n    opacity: 0.3; }\n  #background-3d iframe {\n    border: none; }\n  #container {\n    border: 5px solid #1a19a9; }\n  #container #navbar {\n    margin-right: 5px; }\n  #container #navbar a {\n    font-size: 12px;\n    margin-right: 7px; }\n  #container .description h3 {\n    font-size: 15px;\n    margin-top: 0.5em; }\n  #about-block {\n    margin: 0 auto;\n    display: block; }\n  #about-block .content {\n    width: 90%;\n    margin: 0 auto;\n    display: block; }\n  #about-block img {\n    margin-bottom: 2em;\n    margin-top: 2em;\n    margin-left: 1em;\n    width: 10em; }\n  #center {\n    max-height: 75%;\n    margin-top: 15%;\n    width: 90%; }\n  #center #projects-block, #center #about-block, #center #skills-block {\n    width: 100%;\n    display: block;\n    margin: 0 auto; }\n  #center #projects-block .project {\n    width: 100%;\n    display: block;\n    margin: 5px auto; }\n  #container .footer ul li {\n    font-size: 12px; }\n  #container .footer {\n    bottom: 0;\n    width: 120%; } }\n\n.show {\n  -moz-transition-duration: 0.5s;\n  -webkit-transition-duration: 0.5s;\n  -o-transition-duration: 0.5s;\n  transition-duration: 0.5s;\n  -moz-transition-timing-function: ease-in;\n  -webkit-transition-timing-function: ease-in;\n  -o-transition-timing-function: ease-in;\n  transition-timing-function: ease-in;\n  max-height: 1000px;\n  overflow: hidden; }\n\n.hide {\n  overflow: hidden;\n  max-height: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  -moz-transition-duration: 0.5s;\n  -webkit-transition-duration: 0.5s;\n  -o-transition-duration: 0.5s;\n  transition-duration: 0.5s;\n  -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);\n  -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);\n  -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);\n  transition-timing-function: cubic-bezier(0, 1, 0.5, 1); }\n\n#about-container {\n  font-family: 'Source Sans Pro', sans-serif; }\n  #about-container h1 {\n    font-size: 100px;\n    font-weight: 200;\n    color: #2d307a;\n    font-weight: 200;\n    letter-spacing: 0.3em;\n    margin-bottom: 0;\n    margin-left: 0.8em; }\n  #about-container h2 {\n    text-align: center; }\n  #about-container .about-content-block {\n    display: inline-block;\n    width: 49%;\n    vertical-align: top; }\n    #about-container .about-content-block #intro-block, #about-container .about-content-block #skills-block, #about-container .about-content-block #contributions-block {\n      display: block;\n      width: 70%;\n      margin: 0 auto; }\n    #about-container .about-content-block #intro-block {\n      text-align: justify; }\n      #about-container .about-content-block #intro-block h3 {\n        letter-spacing: 4px;\n        margin-bottom: 1em; }\n      #about-container .about-content-block #intro-block .social-button {\n        width: 26.5%;\n        margin-right: 1%;\n        margin-top: 1em;\n        margin-bottom: 1em;\n        padding: 0.5em;\n        border: 2px solid #2d307a;\n        display: inline-block;\n        text-align: center; }\n  #about-container #skills-block {\n    border-left: 3px solid pink;\n    padding-left: 1em; }\n    #about-container #skills-block .skills {\n      display: inline-block;\n      vertical-align: top; }\n      #about-container #skills-block .skills ul {\n        list-style: none;\n        margin: 0;\n        margin-right: 3em;\n        padding: 0; }\n  #about-container #contributions-block ul {\n    list-style: none;\n    margin: 0;\n    margin-right: 3em;\n    padding: 0; }\n\n.important-title {\n  color: #da2d2a; }\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports) {

	// var portfolio = {
	//
	//   console.log('boo')
	// }
	//
	//
	//
	// export default portfolio;
	"use strict";

/***/ }
/******/ ]);