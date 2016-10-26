(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("_"), require("Wix"), require("$"));
	else if(typeof define === 'function' && define.amd)
		define("UI", ["React", "_", "Wix", "$"], factory);
	else if(typeof exports === 'object')
		exports["UI"] = factory(require("React"), require("_"), require("Wix"), require("$"));
	else
		root["UI"] = factory(root["React"], root["_"], root["Wix"], root["$"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_58__) {
return /******/ (function(modules) { // webpackBootstrap
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
/*!******************!*\
  !*** multi main ***!
  \******************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./sample/react/settings.js */1);


/***/ },
/* 1 */
/*!**********************************!*\
  !*** ./sample/react/settings.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(/*! react */ 2);
	var template = __webpack_require__(/*! ./settings.rt */ 3);

	var app = React.createClass({
	    displayName: 'app',

	    getInitialState: function getInitialState() {
	        return {
	            dock: 'TOP',
	            radioButtonsValue: 1
	        };
	    },
	    learnMore: function learnMore() {
	        console.log('learn more');
	    },

	    render: template
	});

	React.render(React.createElement(app), document.getElementById('app'));

/***/ },
/* 2 */
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/*!**********************************!*\
  !*** ./sample/react/settings.rt ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 2),
	    __webpack_require__(/*! lodash */ 4),
	    __webpack_require__(/*! wix-ui-react/ui */ 5)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, UI) {
	    'use strict';
	    function onChange1(newVal) {
	        console.log(newVal + ' selected');
	    }
	    function onChange2(newVal) {
	        console.log(newVal + 'selected');
	    }
	    function onPreviewHover3(newVal) {
	        console.log(newVal + 'hovered');
	    }
	    function onChange4(newVal) {
	        console.log(newVal);
	    }
	    function onSlideEnd5(newVal) {
	        console.log('slide end ' + newVal);
	    }
	    function onChange6(newVal) {
	        console.log('slide change ' + newVal);
	    }
	    function onChange7(newVal) {
	        console.log(newVal);
	    }
	    function onChange8(newVal) {
	        console.log(newVal);
	    }
	    function onChange9(newVal) {
	        console.log('myTextColor new value: ' + newVal.color);
	    }
	    function onChange10(newVal) {
	        console.log('myBgColor new value: ' + newVal.color);
	    }
	    function onClickPreview11(newVal) {
	        console.log(newVal, 'clicked');
	    }
	    function onMouseOverPreview12(newVal) {
	        console.log(newVal, 'over');
	    }
	    function onChange13(newVal) {
	        console.log(newVal);
	    }
	    return function () {
	        return React.createElement('div', {}, React.createElement('header', { 'className': 'header' }, React.createElement('div', { 'className': 'icon' }, React.createElement('img', {
	            'src': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAABWCAYAAABVVmH3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpFRUY1NzQ5OUU1OTlFMTExOTY4MkI4OEY5NjI5RDM4MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4QzgyNThEODY1MzcxMUUyOEMzRkE1OUVDNjM3NEMwOCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4QzgyNThENzY1MzcxMUUyOEMzRkE1OUVDNjM3NEMwOCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1LjEgTWFjaW50b3NoIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OEEzMDczNDA2MTIwNjgxMTkyQjBBQ0E5RDg0NjFGNjciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RUVGNTc0OTlFNTk5RTExMTk2ODJCODhGOTYyOUQzODIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6ba8dSAAATJklEQVR42uxdCXRUVZr+XtWrpLIU2UkCCdlIggKRRRppFo1RW7rppod1lEZcmBEQsOEwfWZg8My49PHQyugRRadhtLXB8ahMjzYjLTKgAzSyDyIEQtLsS8IWSCokqXpv/v++90IRKql6r6oybVP3nEteVb3tfve737/c+x7S/PnzYRRFUdDa2oqioiJcunQJdrsd9fX1yMvLK0lPT887d+7cI/R3ZGZmZrLL5Yrh/f+Si81mQ0NDQwu1u/78+fNf5ebmvkfbR6kcTk5OFr9nZGRgz549iImJEZ+NInd0UlVV0dTUVNSnT5/HU1NTn+jZs2cmnRjXrl2DLMtobGzErVAcDkdcVlZWUmFh4c9o+2dOp7M2MTHx3w4fPrwyPj7+SEfHyf4A9Xg8oB6ZX1pa+hSBWsgspp4TjJYkSbD6ViktLS2izVevXhWMJFy6U/n7Xr16Ta6qqlpOWPzK38i9AViv18vDvxuVN0tKSh7i765cuSLA5sIXMLZvpWK0mfFhPBgHYm7B4MGDl9TU1AwhJv8NkbGe5eAmYA1Qy8rK1pCmVvCQNxja/gK3emEc3G43SyXy8/MnxsbGZmzatOmnxO56tksCWB72vCOxlI3WCgaVD4qCGFw5e/YsSBruKS8vZ8M2lqRBZTLKhieQkpLyC9KNiaylUVDNg0sG7sfE3Odqa2v/kbVYZgtPVq5f79695zFTWRKixXwhtiItLe1vCcvfEVl3yowuuRJPkvBmMVujxVrhkU+GLYNkYS55EI/J5IsV04dH2C9tb6yixVxhl4zkYHJxcfESmeh7F7G2W3NzcxTUMLCWPIUYArhCzs7OftzX+Y+W0NwwTgGQyzVFpn/6sM8aLeEpbPxJAfJlQjmBfdloCR9rKVBwcoBgZ5SjMhA+YMkRsMuErhQFNrzAkiMgyRx1sRREgQ0fsIypzGw1y1gzEe93ob+CbU8wbWFgGU/TwPJNeCjqtdtou6Mb8N3PDsh2k/6gytZV+xtUg6Fdx24z63cCrR6eKQjcHt6XIbLbTQAbrBQwWHFO4K5+QKyj44bzqbx0I5evAjUngfP1gDMmOEZwQx0ykJWqXQtqYFT5mLpLQGOTdmwwpaUVSIgDiguAtGStPWon7WG/qbIaOHO+c6JYYiyzKJ4aO7CU/qbwF4F6AqitA/ZWArupslfXWY8zQL1zgWFlQAY1Ni42KFzFcecbgP2HgZ0HNCBsUscsZUKU9qLr3AHk9oCWle7sQjwS6BonT/OMAp0/Jghgma1mjFfdReDDL4BJ91PD4wKD2z0deGA40CsTWLtZY3GM4+aR0ErnGVAMjBlF7EnUGoIgpcBOwOQkUE0DXHRPG76m25Ju1kRDmsoHA98fQNsx+nU8AXqOgP18C3XcEY2tnbn9xtSWKSkwWFhZA2zZA9w3LIjGt2g316cISIwHPv0KOH7mRnB5Cq0oh0C9m0DlxloJBL0aAMMHAQ2NwMZd2vD2HQ3dCPwfjgDKSvX7bgmm14BDNXZs3qMxyKNGyHiJkSFpwPYrJC3sHpwkgIZgTjbw0APAqs+Ao6c1EJmtbDgqhtDnWEYglHhS68ThNMQPUuefPq91IDM1gSRsQgVJTaF+jWBGA91XM3XyF9vIN21RgtJvA1ibIQVmqtfrQX2jB59tIRpIHp/xFKASbZJTPJgy2kMa6oG7yYNrzR7cXuhBfq72e9Dn6qjS/SUmefC9fjzl5CFnnb6jv5Me8KB3AW23aJ+DOleMB9v2eFB9okV8NoOReSnwYeHBPwEHyGDcXmKCaXSPyUmk0fcB//ofNGzdGsPamG3Thl/b50BpDFnXQYOxinaNIbcB6/8IXCCPZCJdq9QMU7kQ0y+cVbFln42IpMIuBXdoSFJglIZmYNNOoKCn7hoFO6tDYOWTVR5LhqrqBJCZcn0Y1xMQJ85p22yI8np0AIZ+u0ePa51DbRcGMiVJA9fh0NzCpmbNUIkOCnbhjnBcJWzeF48TZxrgjJWEnMAMsGa9gvZeyD5i7IEqYPAAE8DqTBzaHxjUR/c9Fa1B7GL96RSwh84r0wV+MY3++nOHaN8m8lv/i6z1mTrtPMU5vn4VGdehulG3mQCVLySpqLt6B/5ndzXpP+NjJir18QpCScKwb/vfO4A7SA5kh4kGqBo4Dt9j6LsYArZvoST0NylRInBt/s+paIapHzn4LmcrBpY4EN/O/WuLxLwmQFVIL7rdi/Vfqqi/XE/3Zy6cCwtjjVHDWruLHPOhg8w0wg8LqQ0XyU/+l9/S/TiykZPhxt2DGkhmJL/7uomxW/dJuOAuwI4DNVj0mA2ZWT56r5o0GiqJc1IFqmoH4evtv6ZgghNUdtPAMp6WvAJ/9eMNHly5xIG3bnWtVNKHqmPNuNYai4kTRsORWISte0kk7X72lT3438pmKI5CTJ7wIC43OHG6rkXzUsxeV6EeUlqgdPsJmhMm47N1G1F37nQbSFaqda+gXTlGfuk6iqwmjTHJ2nakcToUGsISjhypQvWRargU73Wr346x5y+p2Le/Brk535KBISFWW31cimAzMQSqPQ2tromQUyuwd/su7NzxR9goRLMysxI2KfDNSH2xXXNzCgqDjGr86GaPDC9Ki/PJO2jC0WMnUTHIobP55k7gJMrVK5dwgLRoxLC+SIj9A3VqTBASoEcsqgKvcxC8rnHUo6ViIvCT/1wj1mXxAjcr63/bjBcfHA5g+fCzFOl8sB5YME3PACnmGZuRrKK8/yEcPiFh5njaHuIRmnnhkuYdiAwYfU6lfYeXadsXrtagf49TKMzVU11qhz6UpqPEatXRAx7XeHjj76LPcWDC/2HdOnz77bcCVKvzgAwsYyrzijnjQ6jFQWBuplB3aF+gfCR90QT/wzhAGVB8CQN667GuqukKdxr7t5yOZH81jfxV9gJ+OIql54ruJnWUVGVrf03ohxLTG96Ee6Ek3ANVcgld51C6+sgRfPLJJ7qn4w2BYJJYhSgfPHgQOTk5YpV2WNZtURveWwv0ITnI7h5C7M8d4lHagOpbTLX0umS0RWRKu5zgDcPdCN0cUJ0DiJ3D4Y0bBlVOFcaK2cvt5nUVq1atwoULF3gli2W28hJOnpaprq6GlJyc7HY6nXF9+5JGJSSE3GNcONq5m1yvRdO1lB66bJ2dquuxV0ua2lwE5PfhTSwnp7cQqj1RB1+TC2ZXDDnDq1avxjtvvy0kwKwk8v7Gswe8TGv//v08/d0kFsXxMsTLly/zQxzIzs6+AWArSzp5BG+kULdPHnkJP9aBjejKUEUf6kzOTBruJVBIO5W4ocLiq5Im+JLScgOfGdRdu3bhfQJWI7wSdHsZUGYoH8Nrts6cOYPjx4+LZzRSU1MhGz3EXxw6dAgnTpwQT4JwTUlJEb1h5oK+I/k3vycPgWL9IQPpQ3OYMJSMTlK1HmNjZEuCmjCCLDzF1bF9ocTeBlVEbDp7dZ1WfVBlUE+ePIlly5YJKXBQCBiMBBgM5WcTWDqMyrrqu4+Ulpbmph/ibkoakfbEx8fzmk+kp6eLbaOXDOtn1I68hGbS1+x04MU5eh60JQyICqvO49gJNbYUiusH9Lc/WfksGuoJurR2Mv2gg8oj9Nlnn8XWrVsRFxfnF0CjGsad/3In1NbWise1eOj7az9h1tQhsO0vQjosltMzixlk1iMWel9G+wO6iUbo4NuBX86mC2ZYYa4BaLPwO9WYfKjxg6AkPkgG6Q762X5dDtTAYm7XjfTSpUvx0Ycfijb4gmgwkvfhFZjMTAaQO4If7AhmnVvQwN4U9NCFWYcTExMF4L7V0B2D1VzcdC/f66eBm56uXs+LSoFtkTaUWwlEGt6uB8lNupvAzdN/89w4voOw2gzYK6+8gvfff1/cL7eFwWQZYNB8K7OzI1ZGBFh/QLNGsXzwzTKjeXgxG7Qn9iQCV8LQfhL+eZaEnFzdDfN0AgoPeWIoYvOhJE8hhpJld2T4DPUAeR3V9/40CWMj8+qrrwpQDZ1kbWTwmJ3GqqBQffqwARtI6BlsEc0osbi9yIl/eNyBH91rhxxHBqbRpjn2kj4dyjRWGknkyZonTyBQpxKg6TpYXj/AqZ1GQQ6HNqO4Y8cOLFq0COvXr29zqSL1EAsDy/+4fbzpLqsT74O64dd2Vf0mVlV3x6vqHpeq7k2mbaeqHBmneq9sVz2Kqno8XD1qq15529PaSn+N6mmr/HsL/dbSolX+rrKyUp01a5bqcrm6rG2MqYz/p8JrEzjhcu9Ir2bQdPKo3edCyVqssVTxtp+Jue5y+B3+qrafdF1Tv/nmG7zxxhtd30BypQRjaXh0WeW5j2SXpB5aIxFLqe4kSHbFqcrZpSqRVKuK0la9RvV6TVU+tr6+Xh05cqTaVW3k6zCmtq7uSINsMycAJSWStgLC3g0ofA/InKftw8zzdX+MSnrdvkq+tZ3bxK1kF5FfHcDs7coHA6Xu3bu76+rq4nyftY9k4TQEr8/6aiUFD1m85qcIyF0GkCsVyTJ27FiRvbLb7RG9DnsUFLU22dr3ciQrix/PDsyeJCE7j0B19AbyV0UcVC6LFy9ui7C6oq02wyWK+IUIUK+XfNn+NjwyjuesSoC8fwfih3bJSBk8eDBmzJjRNiMduXZqWMq+HyI7RLT1A0+MbUZKfjGQQqDGDexCbZcwdepUfPDBByIT5ftugbAmLnX7YPNnECJRvYoNIwe04tEJyUDysi4F1SgDBw7EtGnTbgheIla7Sl9t5IksnEHhbfFyGv4PWAJm27ZtIhwNpcyZM4df3tAVkhB5trqbJIwrb8Y9f7UIcP61RW/Ci6effhozZ84UeWOrhRP5Tz31lPEEYSRrZEH1kARkpjTh5z8fD3vqAsuALF++HHv37hWpu+effz4k1k6fPh133nmnSMJ8R6XAhtaWJvzoBwMx7L5fUZOcloDgsHTJkiXihtnh/+ijj/Duu+9aBjYpKUl4CL4vEfpOSQHfeHZmNyxcTKDG5FsCgdN5DOqpU6eEH2p4MC+99JKYY7Jaxo0bh4qKCpE25KDhOyMFfLPNzdfw6GMzUHRbuWUANmzYgE8//VSwzDg3A3z48GGsWLHCcpjK52Ot5dwxnyPc7ZdKS0tFPjbcfiwnjLOysrBp0yZ+y4+lc/C8ErPq6NGjIq/qC6JYHyXLWLNmDYYPH275PidMmCBytLHiAYjw+LGcj40YY3mIzZs3zzKoXF5//XWx+MGY7/c9P3/HMsGSEErG/5lnnmmbu/uzlwKeLxoyZAjGjBljucHbt2/H2/oiCr9DjYDmYfzll19i5cqVlq9TVlaG8ePHi4VwYdXacEcgXJgBTz75pPAZrRTuGGYrTzMbE36daTknsk+fPm0Z3NmzZ4tlVjznFRZ9jYRXwNo3YsQIoV1WC+vm559/zi9oDBh6siHjRSYvv/yy5TVXvLxqypQpvnF+6OBS/Oy+ePFi2IwXO90MzNCh1rJWdC+4//77xQvCjInAYKIy1tnVq1dj1KhRlq87evRo4dYFe92OjFdqamr4jJcxvTxp0iSRorNaXnjhBZF9CiQB7Q0ZE+O5554TBs1K4fVWc+fOFXIQJq0ND7B8QwUFBZg1a5Zwg6yUzZs3Y+3atW2rU8xoGncEL0l96623LHfqww8/LGQsHKGubLAt5KXyNBQ5mikuLrZ0/O7du7FgwQLBOKs+Jevta6+9JtabsWZaydly0MC5BKs5aiPYsPfq1WsRNcYRyiwCaxxbVQ492QUyG0isW7cOCxcubPMCrN6HMWHIC924cHrQWJIabOFRV1lZiQMHDvhd1xVMJQw8su9wslq4QTx8OPxkCxtolQlfr6qqCjU1NSI05ciHDQaDGmphveVrv/jii9i4caPIYvG7xfm+WKI6uy9uB0d57GUYGm+VsRJZUTeFjnHhkAI+B2efghlybOiMV//x4rpITA1x9McjgkcR5wYCXYN/53tiP5rZaiUPwcekpKQ08Sv4vOHQWGOVIedLg+1Vl8sV0bk27jBjaSl3ZLD35W+9rBlgGVOZeqaZNhLD0ZCuWpvw514YU35/bC0BmxZ9G2d4MltMLsZUJqu5jwT/NsN3i5bQ7AwbT8aU38b5MVnAyX/p/71JVxQe8brR+5iB/ZoQPkWM7RmVg9BkgLEjg3matrfLRN3jBOxqt9v9d9HXSYcGLLOVsFxFmB4Tb+OkL98i1+chYmxOVBKse0SE4UnGsu1tnMTSavIMfkk0fsN4SiTKXHMSwKEzY8hYivk4n+ezlhOFOd/3hO9TdtESXPKHsFvJGBojXjY2dFfradKJNEL+pxzWRf9rlMBeAOcUZFn+HWPHn9uAbUfrRvphKoH7Gu38KINrTHdEpQE3JJeMZ9qIhO+QRzWHiNnoi5G//yitgcB9jN0w0tz5BGwxBw/Gk+C3KsBG2zknwkEAAVtFRmopYfWmv5Etd0RxAvRNOuj3dJLpFKI9Qt8VXH+3ofeWkQkDTGaonnY8RvUdck1XED4nO0rKywFOepL8238i5v6GPhbRCScSyMPpQvx2q/hbhKxuItJZAnILbX9ImNSQ51QTaMLx/wQYAAGxc9TKFox/AAAAAElFTkSuQmCC',
	            'alt': true
	        })), React.createElement('div', { 'className': 'right' }, React.createElement('div', { 'className': 'container' }, React.createElement('div', { 'className': 'text' }, '\n                    This is a sample Settings view for widgets and pages created with ', React.createElement('a', {
	            'href': 'http://dev.wix.com',
	            'target': '#'
	        }, 'Wix\'s 3rd Party SDK'), ',\n                    compatible with Wix\'s product requirements.\n                    This boilerplate is aimed at saving time for developing the UI of your apps, and let the\n                    developer focus on developing logic.\n                '), React.createElement('div', { 'className': 'button' }, React.createElement(UI.button, {
	            'label': 'connect account',
	            'className': 'btn-primary'
	        }))))), React.createElement(UI.tabs.holder, {
	            'defaultTab': 'first',
	            'className': 'top',
	            'onChange': onChange1.bind(this)
	        }, React.createElement(UI.tabs.header, {}, React.createElement(UI.tabs.label, {
	            'htmlFor': 'first',
	            'className': 'first'
	        }, 'General Settings'), React.createElement(UI.tabs.label, {
	            'htmlFor': 'second',
	            'className': 'second'
	        }, 'Color Settings'), React.createElement(UI.tabs.label, {
	            'htmlFor': 'third',
	            'className': 'third'
	        }, 'Sync Options')), React.createElement(UI.tabs.content, {}, React.createElement(UI.tabs.tab, {
	            'name': 'first',
	            'className': 'my-custom-tab'
	        }, React.createElement('div', {}, React.createElement(UI.dropDownSelect, {
	            'wix-param': 'imageVisibility',
	            'style': { width: 240 },
	            'defaultValue': '1',
	            'onChange': onChange2.bind(this),
	            'label': 'Image visibility',
	            'options': [
	                {
	                    value: '1',
	                    label: 'Show Images',
	                    className: 'firstOne'
	                },
	                {
	                    value: '2',
	                    label: 'Hide Images',
	                    className: 'differentOne'
	                },
	                {
	                    value: '3',
	                    label: 'Show Images on Hover'
	                }
	            ],
	            'infoTitle': 'image visibility',
	            'infoText': 'image visibility'
	        })), React.createElement('div', { 'style': { marginBottom: '50px' } }, React.createElement(UI.dock, {
	            'defaultValue': 'TOP_LEFT',
	            'label': 'Fixed Position',
	            'onPreviewHover': onPreviewHover3.bind(this),
	            'onChange': onChange4.bind(this)
	        })), React.createElement(UI.sectionDividerLabeled, { 'label': 'Language Picker' }), React.createElement('div', {
	            'style': {
	                marginBottom: '50px',
	                width: '200px'
	            }
	        }, React.createElement(UI.languagePicker, {
	            'label': 'Language Picker',
	            'infoTitle': 'info title',
	            'infoText': 'info text',
	            'onChange': function (a) {
	                console.log(a);
	            }
	        })), React.createElement('div', {
	            'style': {
	                marginBottom: '50px',
	                width: '400px'
	            }
	        }, React.createElement(UI.slider, {
	            'style': { width: 300 },
	            'defaultValue': 100,
	            'label': 'Number of images',
	            'min': 0,
	            'max': 500,
	            'wix-param': 'sliderValue',
	            'onSlideEnd': onSlideEnd5.bind(this),
	            'onChange': onChange6.bind(this)
	        })), React.createElement('div', {
	            'style': {
	                marginBottom: '50px',
	                width: '200px'
	            }
	        }, React.createElement(UI.fontPicker, {
	            'label': 'Fonts',
	            'wix-param': 'myBodyFont',
	            'startWithTheme': 'Site Title',
	            'infoTitle': 'font picker',
	            'infoText': 'font picker',
	            'onChange': onChange7.bind(this)
	        })), React.createElement('div', {
	            'style': {
	                margin: '50px 0',
	                width: '200px'
	            }
	        }, React.createElement(UI.textInput, {
	            'validator': function (val) {
	                return val.length < 15;
	            },
	            'label': 'Email address',
	            'placeholder': 'john@doe.com',
	            'infoText': 'Knowledge is power, this is just a text info',
	            'invalidMessage': 'Invalid Input.',
	            'focus': false,
	            'onChange': onChange8.bind(this)
	        }))), React.createElement(UI.tabs.tab, { 'name': 'second' }, React.createElement('div', { 'style': { margin: '50px 0' } }, React.createElement(UI.colorPickerSlider, {
	            'label': 'Text Color',
	            'wix-param': 'myTextColor',
	            'startWithColor': 'color-22',
	            'startWithOpacity': 1,
	            'onChange': onChange9.bind(this)
	        }), React.createElement(UI.colorPickerSlider, {
	            'label': 'Background Color',
	            'wix-param': 'myBgColor',
	            'startWithOpacity': 0.5,
	            'onChange': onChange10.bind(this)
	        }))), React.createElement(UI.tabs.tab, { 'name': 'third' }, React.createElement('div', { 'style': { margin: '50px 0' } }, React.createElement(UI.teaserPopup, {
	            'text': 'some text',
	            ',': true,
	            'title': 'some title',
	            'gotItText': 'Got it',
	            'linkText': 'Learn more',
	            'learnMore': this.learnMore
	        }), React.createElement(UI.radioButtons, {
	            'label': 'How many images to sync?',
	            'wix-param': 'myRadioButtonsValue',
	            'defaultValue': '3',
	            'onClickPreview': onClickPreview11.bind(this),
	            'onMouseOverPreview': onMouseOverPreview12.bind(this),
	            'options': [
	                {
	                    value: '1',
	                    label: 'Sync 10 images',
	                    className: 'firstOne'
	                },
	                {
	                    value: '2',
	                    label: 'Sync 25 images',
	                    className: 'differentOne'
	                },
	                {
	                    value: '3',
	                    label: 'Sync 50 images'
	                }
	            ]
	        })), React.createElement('div', { 'style': { margin: '50px 0' } }, React.createElement(UI.toggleButtonsGroup, {
	            'title': 'Sync Meta Data?',
	            'defaultValue': [
	                1,
	                2
	            ],
	            'onChange': onChange13.bind(this),
	            'options': [
	                {
	                    value: 1,
	                    label: 'Image Meta',
	                    className: 'firstOne'
	                },
	                {
	                    value: 2,
	                    label: 'Image Alt',
	                    className: 'differentOne'
	                },
	                {
	                    value: 3,
	                    label: 'Image Link'
	                }
	            ]
	        }))))));
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 4 */
/*!********************!*\
  !*** external "_" ***!
  \********************/
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/*!*******************************!*\
  !*** ./js/wix-ui-react/ui.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var dock = __webpack_require__(/*! wix-ui-react/components/alignment/dock */ 6);
	var buttonsGroup = __webpack_require__(/*! wix-ui-react/components/switches/buttonsGroup */ 42);
	var button = __webpack_require__(/*! wix-ui-react/components/button/button */ 48);
	var colorPickerSlider = __webpack_require__(/*! wix-ui-react/components/colorSpace/colorPickerSlider */ 53);
	var checkbox = __webpack_require__(/*! wix-ui-react/components/switches/checkbox */ 71);
	var dropDown = __webpack_require__(/*! wix-ui-react/components/dropDown/dropDown */ 78);
	var dropDownSelect = __webpack_require__(/*! wix-ui-react/components/dropDown/dropDownSelect */ 90);
	var radioButtons = __webpack_require__(/*! wix-ui-react/components/switches/radioButtons */ 92);
	var tooltip = __webpack_require__(/*! wix-ui-react/components/tooltip/tooltip */ 98);
	var openedPanels = __webpack_require__(/*! wix-ui-react/components/panels/openedPanels */ 101);
	var languagePicker = __webpack_require__(/*! wix-ui-react/components/languagePicker/languagePicker */ 107);
	var slider = __webpack_require__(/*! wix-ui-react/components/slider/slider */ 108);
	var stepper = __webpack_require__(/*! wix-ui-react/components/stepper/stepper */ 112);
	var tabs = __webpack_require__(/*! wix-ui-react/components/tabs/tabs */ 116);
	var textInput = __webpack_require__(/*! wix-ui-react/components/textInput/textInput */ 124);
	var toggle = __webpack_require__(/*! wix-ui-react/components/switches/toggle */ 132);
	var toggleButtonsGroup = __webpack_require__(/*! wix-ui-react/components/switches/toggleButtonsGroup */ 138);
	var paletteDisplayer = __webpack_require__(/*! wix-ui-react/components/colorSpace/paletteDisplayer */ 140);
	var fontPicker = __webpack_require__(/*! wix-ui-react/components/fontPicker/fontPicker */ 148);
	var sectionDividerLabeled = __webpack_require__(/*! wix-ui-react/components/sectionDividerLabeled/sectionDividerLabeled */ 150);
	var teaserPopup = __webpack_require__(/*! wix-ui-react/components/teaserPopup/teaserPopup */ 155);

	__webpack_require__(/*! baseUI */ 161);

	module.exports = {
	    checkbox: checkbox,
	    dock: dock,
	    radioButtons: radioButtons,
	    tabs: tabs,
	    slider: slider,
	    stepper: stepper,
	    dropDown: dropDown,
	    dropDownSelect: dropDownSelect,
	    colorPickerSlider: colorPickerSlider,
	    button: button.button,
	    tooltip: tooltip.tooltips,
	    toggle: toggle,
	    buttonsGroup: buttonsGroup,
	    OpenedPanels: openedPanels,
	    languagePicker: languagePicker,
	    toggleButtonsGroup: toggleButtonsGroup,
	    textInput: textInput,
	    paletteDisplayer: paletteDisplayer,
	    fontPicker: fontPicker,
	    sectionDividerLabeled: sectionDividerLabeled.sectionDividerLabeled,
	    teaserPopup: teaserPopup
	};

/***/ },
/* 6 */
/*!******************************************************!*\
  !*** ./js/wix-ui-react/components/alignment/dock.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(/*! react */ 2);
	var _ = __webpack_require__(/*! lodash */ 4);
	var Wix = __webpack_require__(/*! Wix */ 7);
	var template = __webpack_require__(/*! wix-ui-react/components/alignment/dock.rt */ 8);
	__webpack_require__(/*! baseUI/controls/dock.scss */ 38);

	var dockDirections = ['TOP_LEFT', 'TOP', 'TOP_RIGHT', 'LEFT', 'RIGHT', 'BOTTOM_LEFT', 'BOTTOM', 'BOTTOM_RIGHT'];

	module.exports = React.createClass({

	    displayName: 'Dock',
	    propTypes: {
	        value: React.PropTypes.oneOf(_.values(dockDirections))
	    },

	    getInitialState: function getInitialState() {
	        return {
	            value: this.props.defaultValue
	        };
	    },

	    getValueLink: function getValueLink(valueName) {
	        var that = this;
	        return {
	            value: that.state[valueName],
	            requestChange: function requestChange(newValue) {
	                that.handleChange(newValue, valueName);
	            }
	        };
	    },

	    handleChange: function handleChange(newValue) {
	        this.setState({
	            value: newValue
	        }, function () {

	            var compId = Wix.Utils.getOrigCompId();

	            if (newValue === 'RIGHT') {
	                newValue = 'CENTER_RIGHT';
	            }
	            if (newValue === 'LEFT') {
	                newValue = 'CENTER_LEFT';
	            }
	            if (newValue === 'TOP') {
	                newValue = 'TOP_CENTER';
	            }
	            if (newValue === 'BOTTOM') {
	                newValue = 'BOTTOM_CENTER';
	            }

	            if (compId) {
	                Wix.Settings.setWindowPlacement(compId, Wix.WindowPlacement[newValue], 0, 0);
	            }
	        });

	        if (_.isFunction(this.props.onChange)) {
	            this.props.onChange.call(this, newValue);
	        }
	    },

	    render: template
	});

/***/ },
/* 7 */
/*!**********************!*\
  !*** external "Wix" ***!
  \**********************/
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ },
/* 8 */
/*!******************************************************!*\
  !*** ./js/wix-ui-react/components/alignment/dock.rt ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 2),
	    __webpack_require__(/*! lodash */ 4),
	    __webpack_require__(/*! baseUI/controls/dock */ 9)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, dock) {
	    'use strict';
	    return function () {
	        return React.createElement(dock, {
	            'label': this.props.label,
	            'onChange': this.handleChange,
	            'value': this.state.value,
	            'onPreviewHover': this.props.onPreviewHover
	        });
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 9 */
/*!************************************!*\
  !*** ./js/baseUI/controls/dock.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 2), __webpack_require__(/*! lodash */ 4), __webpack_require__(/*! baseUI/controls/dock.rt */ 10), __webpack_require__(/*! baseUI/controls/radioButtonsMixin */ 36)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, template, radioButtonsMixin) {
	    'use strict';

	    var dockDirections = ['TOP_LEFT', 'TOP', 'TOP_RIGHT', 'LEFT', 'RIGHT', 'BOTTOM_LEFT', 'BOTTOM', 'BOTTOM_RIGHT'];

	    return React.createClass({
	        displayName: 'dock',

	        propTypes: {
	            value: React.PropTypes.oneOf(_.values(dockDirections))
	        },

	        mixins: [radioButtonsMixin],

	        onDockMouseEnter: function onDockMouseEnter(direction) {
	            if (_.isFunction(this.props.onPreviewHover)) {
	                this.props.onPreviewHover(direction);
	            }
	        },

	        onDockChange: function onDockChange(direction) {
	            this.callOnChangeIfExists(direction);
	        },

	        render: template
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 10 */
/*!************************************!*\
  !*** ./js/baseUI/controls/dock.rt ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 2),
	    __webpack_require__(/*! lodash */ 4),
	    __webpack_require__(/*! baseUI/controls/infoIcon */ 11)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, infoIcon) {
	    'use strict';
	    return function () {
	        return React.createElement('div', {
	            'className': 'control-dock',
	            'onMouseLeave': this.props.onMouseLeave
	        }, this.hasLabel() && (this.props.infoText || this.props.infoText) ? React.createElement(infoIcon, {
	            'key': 'tooltip',
	            'title': this.props.infoTitle,
	            'text': this.props.infoText,
	            'size': 18
	        }) : null, React.createElement('label', { 'className': 'dock-label' }, this.getLabel()), React.createElement('div', { 'className': 'dock-corners-wrapper' }, React.createElement('label', {
	            'onMouseEnter': this.onDockMouseEnter.bind(null, 'TOP_LEFT'),
	            'onMouseLeave': this.props.onMouseLeave
	        }, React.createElement('input', {
	            'type': 'radio',
	            'name': this.getRadioGroupId(),
	            'onChange': this.onDockChange.bind(null, 'TOP_LEFT'),
	            'checked': this.props.value === 'TOP_LEFT',
	            'value': 'TOP_LEFT'
	        }), React.createElement('span', { 'className': 'square top left' })), React.createElement('label', {
	            'onMouseEnter': this.onDockMouseEnter.bind(null, 'TOP'),
	            'onMouseLeave': this.props.onMouseLeave
	        }, React.createElement('input', {
	            'type': 'radio',
	            'name': this.getRadioGroupId(),
	            'onChange': this.onDockChange.bind(null, 'TOP'),
	            'checked': this.props.value === 'TOP',
	            'value': 'TOP'
	        }), React.createElement('span', { 'className': 'square top' })), React.createElement('label', {
	            'onMouseEnter': this.onDockMouseEnter.bind(null, 'TOP_RIGHT'),
	            'onMouseLeave': this.props.onMouseLeave
	        }, React.createElement('input', {
	            'type': 'radio',
	            'name': this.getRadioGroupId(),
	            'onChange': this.onDockChange.bind(null, 'TOP_RIGHT'),
	            'checked': this.props.value === 'TOP_RIGHT',
	            'value': 'TOP_RIGHT'
	        }), React.createElement('span', { 'className': 'square top right' })), React.createElement('label', {
	            'onMouseEnter': this.onDockMouseEnter.bind(null, 'LEFT'),
	            'onMouseLeave': this.props.onMouseLeave
	        }, React.createElement('input', {
	            'type': 'radio',
	            'name': this.getRadioGroupId(),
	            'onChange': this.onDockChange.bind(null, 'LEFT'),
	            'checked': this.props.value === 'LEFT',
	            'value': 'LEFT'
	        }), React.createElement('span', { 'className': 'square left' })), React.createElement('label', {}, React.createElement('span', { 'className': 'square middle' })), React.createElement('label', {
	            'onMouseEnter': this.onDockMouseEnter.bind(null, 'RIGHT'),
	            'onMouseLeave': this.props.onMouseLeave
	        }, React.createElement('input', {
	            'type': 'radio',
	            'name': this.getRadioGroupId(),
	            'onChange': this.onDockChange.bind(null, 'RIGHT'),
	            'checked': this.props.value === 'RIGHT',
	            'value': 'RIGHT'
	        }), React.createElement('span', { 'className': 'square right' })), React.createElement('label', {
	            'onMouseEnter': this.onDockMouseEnter.bind(null, 'BOTTOM_LEFT'),
	            'onMouseLeave': this.props.onMouseLeave
	        }, React.createElement('input', {
	            'type': 'radio',
	            'name': this.getRadioGroupId(),
	            'onChange': this.onDockChange.bind(null, 'BOTTOM_LEFT'),
	            'checked': this.props.value === 'BOTTOM_LEFT',
	            'value': 'BOTTOM_LEFT'
	        }), React.createElement('span', { 'className': 'square bottom left' })), React.createElement('label', {
	            'onMouseEnter': this.onDockMouseEnter.bind(null, 'BOTTOM'),
	            'onMouseLeave': this.props.onMouseLeave
	        }, React.createElement('input', {
	            'type': 'radio',
	            'name': this.getRadioGroupId(),
	            'onChange': this.onDockChange.bind(null, 'BOTTOM'),
	            'checked': this.props.value === 'BOTTOM',
	            'value': 'BOTTOM'
	        }), React.createElement('span', { 'className': 'square bottom' })), React.createElement('label', {
	            'onMouseEnter': this.onDockMouseEnter.bind(null, 'BOTTOM_RIGHT'),
	            'onMouseLeave': this.props.onMouseLeave
	        }, React.createElement('input', {
	            'type': 'radio',
	            'name': this.getRadioGroupId(),
	            'onChange': this.onDockChange.bind(null, 'BOTTOM_RIGHT'),
	            'checked': this.props.value === 'BOTTOM_RIGHT',
	            'value': 'BOTTOM_RIGHT'
	        }), React.createElement('span', { 'className': 'square bottom right' })), React.createElement('div', { 'className': 'dashed horizontal' }), React.createElement('div', { 'className': 'dashed vertical' })));
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 11 */
/*!****************************************!*\
  !*** ./js/baseUI/controls/infoIcon.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 2), __webpack_require__(/*! lodash */ 4), __webpack_require__(/*! baseUI/framework/uiConstants */ 12), __webpack_require__(/*! baseUI/popovers/templates/imageAndTextTooltip/imageAndTextTooltip */ 13), __webpack_require__(/*! baseUI/mixins/classNameMixin */ 30), __webpack_require__(/*! baseUI/mixins/reportUIChangeMixin */ 31), __webpack_require__(/*! baseUI/controls/infoIcon.rt */ 32)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, uiConstants, imageAndTextTooltipTemplate, classNameMixin, reportUIChangeMixin, template) {
	    'use strict';

	    function getTooltipBoundsRect(dom) {
	        var node = dom;
	        while (node && node.parentElement && !node.dataset.tooltipBounds) {
	            node = node.parentElement;
	        }

	        if (node) {
	            return node.getBoundingClientRect();
	        }
	    }

	    return React.createClass({
	        displayName: 'infoIcon',
	        propTypes: {
	            title: React.PropTypes.string,
	            text: React.PropTypes.string.isRequired,
	            alignment: React.PropTypes.string,
	            fitToBounds: React.PropTypes.bool,
	            symbolName: React.PropTypes.string,
	            tooltipWidth: React.PropTypes.string,
	            propagate: React.PropTypes.bool
	        },
	        mixins: [classNameMixin, reportUIChangeMixin],
	        contextTypes: {
	            reportUIChange: React.PropTypes.func
	        },
	        getDefaultProps: function getDefaultProps() {
	            return {
	                alignment: uiConstants.TOOLTIP.ALIGNMENT.TOP,
	                fitToBounds: true,
	                symbolName: 'infoIcon'
	            };
	        },
	        getTooltipValue: function getTooltipValue() {
	            return React.createElement(imageAndTextTooltipTemplate, _.assign({}, this.props));
	        },
	        getTooltipsPanelBounds: function getTooltipsPanelBounds() {
	            var clientRect = getTooltipBoundsRect(this.getDOMNode());

	            return {
	                left: clientRect ? clientRect.left : 180,
	                width: clientRect ? clientRect.width : 500
	            };
	        },
	        onClick: function onClick(e) {
	            if (!this.props.propagate) {
	                e.stopPropagation();
	            }
	        },
	        handleMouseEnter: function handleMouseEnter() {
	            this.reportUIChange({ state: 'open', control_name: this.props.text });
	        },
	        handleMouseLeave: function handleMouseLeave() {
	            this.reportUIChange({ state: 'close', control_name: this.props.text });
	        },
	        render: template
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 12 */
/*!********************************************!*\
  !*** ./js/baseUI/framework/uiConstants.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    'use strict';

	    return {
	        gfppMargins: 16,
	        compPanelMargins: 24,
	        TOPBAR_HEIGHT: 48,

	        LEFTBAR_BTN_WIDTH_COLLAPSED: 48,

	        MOBILE_PREVIEW_TOP: 59,
	        MOBILE_PREVIEW_MODE_HEIGHT: 512,
	        MOBILE_PREVIEW_BOTTOM: 94,

	        ANCHOR_OFFSET_TOP: -12,
	        ANCHOR_HEIGHT: 25,
	        ANCHOR_WIDTH: 126,

	        COLOR_FORMATS: {
	            HEX: 'hex',
	            RGB: 'rgb',
	            HSB: 'hsb'
	        },

	        BUBBLE: {
	            DISTANCE_FROM_TARGET: 10,
	            MARGINS_FROM_WINDOW: 6
	        },

	        TOOLTIP: {
	            ALIGNMENT: {
	                TOP: 'top',
	                LEFT: 'left',
	                RIGHT: 'right',
	                BOTTOM: 'bottom'
	            },
	            TRIGGERS: {
	                CLICK: 'onClick',
	                MOUSE_ENTER: 'onMouseEnter',
	                MOUSE_LEAVE: 'onMouseLeave',
	                OUTER_CLICK: 'outerClick'
	            },
	            VALUE_TYPE: {
	                STRING: 'string',
	                CLASS: 'class',
	                TEMPLATE: 'template'
	            },
	            STYLE_TYPE: {
	                SMALL: 'small',
	                NORMAL: 'normal',
	                CONTENT_ONLY: 'contentOnly'
	            }
	        }
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 13 */
/*!*********************************************************************************!*\
  !*** ./js/baseUI/popovers/templates/imageAndTextTooltip/imageAndTextTooltip.js ***!
  \*********************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 2), __webpack_require__(/*! lodash */ 4), __webpack_require__(/*! core */ 14), __webpack_require__(/*! baseUI/popovers/templates/imageAndTextTooltip/imageAndTextTooltip.rt */ 16)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, core, template) {
	    'use strict';

	    return React.createClass({
	        displayName: 'imageAndTextTooltip',
	        mixins: [core.mixins.editorAPIMixin],
	        propTypes: {
	            title: React.PropTypes.string,
	            text: React.PropTypes.string,
	            image: React.PropTypes.string,
	            imageContainerStyle: React.PropTypes.object,
	            calculatedAlignment: React.PropTypes.string
	        },
	        render: template,
	        onLinkClick: function onLinkClick() {
	            if (this.props.linkAction) {
	                this.props.linkAction();
	            }
	        },
	        getImageContainerStyle: function getImageContainerStyle() {
	            return this.props.imageContainerStyle || {};
	        }
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 14 */
/*!********************!*\
  !*** ./js/core.js ***!
  \********************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! core/mixins/editorAPIMixin */ 15)], __WEBPACK_AMD_DEFINE_RESULT__ = function (editorAPIMixin) {
	    'use strict';
	    return {
	        mixins: {
	            editorAPIMixin: editorAPIMixin
	        },
	        bi: {}
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 15 */
/*!******************************************!*\
  !*** ./js/core/mixins/editorAPIMixin.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 2), __webpack_require__(/*! lodash */ 4)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _) {
	    'use strict';

	    return {
	        contextTypes: {
	            editorAPI: React.PropTypes.object
	        },
	        getEditorAPI: function getEditorAPI() {
	            return this.context.editorAPI || {
	                bi: _.noop
	            };
	        }
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 16 */
/*!*********************************************************************************!*\
  !*** ./js/baseUI/popovers/templates/imageAndTextTooltip/imageAndTextTooltip.rt ***!
  \*********************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 2),
	    __webpack_require__(/*! lodash */ 4),
	    __webpack_require__(/*! util */ 17),
	    __webpack_require__(/*! symbols */ 26),
	    __webpack_require__(/*! baseUI/framework/uiConstants */ 12)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, util, symbols, uiConstants) {
	    'use strict';
	    return function () {
	        return React.createElement('div', { 'className': 'imageAndTextTooltip' }, this.props.calculatedAlignment === uiConstants.TOOLTIP.ALIGNMENT.TOP && !!this.props.image ? React.createElement('div', {
	            'key': 'upperImage',
	            'className': 'image-container upper-image',
	            'style': this.getImageContainerStyle()
	        }, React.createElement(symbols.symbol, { 'name': this.props.image })) : null, React.createElement('div', { 'className': 'text-container ' + (!this.props.image ? 'text-no-image' : '') }, !!this.props.title ? React.createElement('div', {
	            'className': 'title',
	            'key': 'tooltipTitle'
	        }, util.translate(this.props.title)) : null, !!this.props.text ? React.createElement('div', {
	            'className': 'text',
	            'key': 'tooltipText'
	        }, util.translate(this.props.text)) : null, !!this.props.linkAction ? React.createElement('div', {
	            'className': 'learn-more',
	            'onClick': this.onLinkClick,
	            'key': 'learnMore'
	        }, util.translate(this.props.learnMoreText), '\n        ') : null), this.props.calculatedAlignment === uiConstants.TOOLTIP.ALIGNMENT.BOTTOM && !!this.props.image ? React.createElement('div', {
	            'key': 'lowerImage',
	            'className': 'image-container lower-image',
	            'style': this.getImageContainerStyle()
	        }, React.createElement(symbols.symbol, { 'name': this.props.image })) : null);
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 17 */
/*!********************!*\
  !*** ./js/util.js ***!
  \********************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! util/utils/classNames */ 18), __webpack_require__(/*! util/props/propTypesFilterMixin */ 19), __webpack_require__(/*! util/mixins/valueLinkMixin */ 20), __webpack_require__(/*! util/mixins/singlePassDOMReadWriteMixin */ 21), __webpack_require__(/*! util/math/math */ 22), __webpack_require__(/*! util/keyboardShortcuts/keyboardShortcuts */ 23), __webpack_require__(/*! overrides/utils */ 25)], __WEBPACK_AMD_DEFINE_RESULT__ = function (classNameUtils, propTypesFilterMixin, valueLinkMixin, singlePassDOMReadWriteMixin, math, keyboardShortcuts, utils) {

	    return {
	        inheritClassName: classNameUtils.inheritClassName,
	        propTypesFilterMixin: propTypesFilterMixin,
	        valueLinkMixin: valueLinkMixin,
	        translationMixin: utils.translationMixin,
	        media: utils.media,
	        keyboardShortcuts: keyboardShortcuts,
	        translate: function translate(text) {
	            return text;
	        },
	        singlePassDOMReadWriteMixin: singlePassDOMReadWriteMixin,
	        math: math
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 18 */
/*!*************************************!*\
  !*** ./js/util/utils/classNames.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    'use strict';

	    return {
	        inheritClassName: function inheritClassName(props, defaultClassName) {
	            return (defaultClassName ? defaultClassName : '') + (props.className ? ' ' + props.className : '');
	        }
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 19 */
/*!***********************************************!*\
  !*** ./js/util/props/propTypesFilterMixin.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 2), __webpack_require__(/*! lodash */ 4)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _) {
	    'use strict';

	    return {
	        /**
	         * @returns {Object} Own props, after filtering the props defined in propTypes of this and its mixins
	         */
	        filteredProps: function filteredProps() {
	            return _.omit(this.props, _.keys(this.constructor.propTypes));
	        },

	        /**
	         * This is a temporary function that substitutes `title` with `headerTitle` prop
	         * Since `title` is a valid HTML attribute it should not be used with rt-props as
	         * this will result in an unexpected `alt text` to appear when hovering the component.
	         *
	         * See JIRA Issue: https://jira.wixpress.com/browse/SE-4679
	         * @returns {Object} Own props, after filtering the props defined in propTypes of this and its mixins
	         */
	        getContentProps: function getContentProps() {
	            var filteredProps = this.filteredProps();
	            filteredProps.headerTitle = filteredProps.title;
	            return _.omit(filteredProps, 'title');
	        }
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 20 */
/*!******************************************!*\
  !*** ./js/util/mixins/valueLinkMixin.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 2)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React) {
	    'use strict';

	    var ERROR_DUPLICATE_VALUE_PROP = 'Cannot provide a valueLink and a value.';
	    var ERROR_DUPLICATE_ON_CHANGE_PROP = 'Cannot provide a valueLink and an onChange event.';

	    function verifyValueLinkProp(props) {
	        if (props.valueLink !== undefined) {
	            var valueLinkShapeError = React.PropTypes.shape({
	                value: React.PropTypes.any,
	                requestChange: React.PropTypes.func
	            }).apply(this, arguments);

	            if (valueLinkShapeError instanceof Error) {
	                return valueLinkShapeError;
	            }
	            if (props.value !== undefined) {
	                return new Error(ERROR_DUPLICATE_VALUE_PROP);
	            }
	            if (props.onChange !== undefined) {
	                return new Error(ERROR_DUPLICATE_ON_CHANGE_PROP);
	            }
	        }
	    }

	    return {
	        propTypes: {
	            value: React.PropTypes.any,
	            onChange: React.PropTypes.func,
	            valueLink: verifyValueLinkProp
	        },

	        getValueFromProps: function getValueFromProps(props) {
	            props = props || this.props;
	            return props.valueLink !== undefined ? props.valueLink.value : props.value;
	        },

	        callOnChangeIfExists: function callOnChangeIfExists(newVal, processedValueData) {
	            var onChange = this.props.valueLink ? this.props.valueLink.requestChange : this.props.onChange;
	            if (onChange) {
	                onChange(newVal, processedValueData);
	            }
	        }
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 21 */
/*!*******************************************************!*\
  !*** ./js/util/mixins/singlePassDOMReadWriteMixin.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * Created by avim on 4/16/2015.
	 */
	'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! lodash */ 4)], __WEBPACK_AMD_DEFINE_RESULT__ = function (_) {
	    'use strict';

	    var LIFECYCLE_PHASES = {
	        MOUNT: 'mount',
	        UPDATE: 'update'
	    };

	    var pendingCounter = 0;
	    var arrayOfCompsToMeasurePatch = [];

	    function addComponentToSinglePassDOM(comp, phase) {
	        pendingCounter++;
	        arrayOfCompsToMeasurePatch.push({
	            comp: comp,
	            phase: phase
	        });
	    }

	    function reportComponentReadyForSinglePassDOM() {
	        pendingCounter--;
	        if (pendingCounter === 0) {
	            var measurements = _.map(arrayOfCompsToMeasurePatch, function (obj) {
	                return obj.comp.measurePhase(obj.phase);
	            });
	            _.map(arrayOfCompsToMeasurePatch, function (obj, index) {
	                obj.comp.patchPhase(measurements[index], obj.phase);
	            });
	            arrayOfCompsToMeasurePatch = [];
	        }
	    }

	    return {
	        componentWillMount: function componentWillMount() {
	            addComponentToSinglePassDOM(this, LIFECYCLE_PHASES.MOUNT);
	        },
	        componentWillUpdate: function componentWillUpdate() {
	            addComponentToSinglePassDOM(this, LIFECYCLE_PHASES.UPDATE);
	        },
	        componentDidMount: reportComponentReadyForSinglePassDOM,
	        componentDidUpdate: reportComponentReadyForSinglePassDOM,
	        componentWillUnmount: function componentWillUnmount() {
	            arrayOfCompsToMeasurePatch = _.reject(arrayOfCompsToMeasurePatch, { comp: this });
	        },
	        LIFECYCLE_PHASES: LIFECYCLE_PHASES
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 22 */
/*!******************************!*\
  !*** ./js/util/math/math.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! lodash */ 4)], __WEBPACK_AMD_DEFINE_RESULT__ = function (_) {
	    'use strict';

	    function valueFromPercent(percent, min, max) {
	        if (percent > 100 || percent < 0 || max < min) {
	            console.error('percent is invalid of range or range error');
	            return null;
	        }
	        return min + (max - min) * percent / 100;
	    }

	    function percentFromValue(value, min, max) {
	        if (value > max || value < min || max < min) {
	            console.error('value is out of range or range error');
	            return null;
	        }
	        var range = max - min;
	        return 100 * (value - min) / range;
	    }

	    function ensureWithinLimits(value, min, max) {
	        min = _.isUndefined(min) ? value : min;
	        max = _.isUndefined(max) ? value : max;

	        if (min > max) {
	            max = min + 100;
	        }
	        //if (min > max){
	        //    throw 'min limit is greater than max limit';
	        //}

	        if (value < min) {
	            return min;
	        }
	        if (value > max) {
	            return max;
	        }

	        return value;
	    }

	    return {
	        valueFromPercent: valueFromPercent,
	        percentFromValue: percentFromValue,
	        ensureWithinLimits: ensureWithinLimits
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 23 */
/*!********************************************************!*\
  !*** ./js/util/keyboardShortcuts/keyboardShortcuts.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! lodash */ 4), __webpack_require__(/*! keyboardMaster */ 24)], __WEBPACK_AMD_DEFINE_RESULT__ = function (_, keyboardMaster) {
	    'use strict';

	    // Add shared contexts names in the Editor here, if you think they could be extended.
	    var SHARED_CONTEXTS = {
	        TOP_CONTEXT: 'all',
	        EDITOR: 'EDITOR',
	        PREVIEW: 'PREVIEW',
	        TOP_BAR: 'TOP_BAR',
	        MENU_BAR: 'MENU_BAR',
	        MODAL_PANEL: 'MODAL_PANEL',
	        AUTOMATIC: 'AUTOMATIC'
	    };

	    var SHARED_CONTEXTS_KEYBOARD_ACTIONS = {
	        TOP_CONTEXT: {},
	        EDITOR: {},
	        PREVIEW: {},
	        TOP_BAR: {}
	    };

	    var lastEnabledContext = null;
	    var DISABLED_CONTEXT = '!DISABLED!';
	    var DEFAULT_CONTEXT = SHARED_CONTEXTS.TOP_CONTEXT;

	    var currentContext = DEFAULT_CONTEXT;

	    var keyMaster = keyboardMaster.noConflict();

	    var specialKeys = {
	        space: 'space',
	        up: 'up',
	        down: 'down',
	        left: 'left',
	        right: 'right',
	        home: 'home',
	        end: 'end',
	        pageUp: 'pageup',
	        pageDown: 'pagedown',
	        del: 'del',
	        esc: 'esc',
	        enter: 'enter',
	        backspace: 'backspace',
	        tab: 'tab',
	        alt: 'alt',
	        option: 'option',
	        shift: 'shift',
	        ctrl: 'ctrl',
	        command: 'command'
	    };

	    function filter(event) {
	        var tagName = (event.target || event.srcElement).tagName;

	        if (tagName === 'INPUT') {
	            var isCtrlOrCmd = event.metaKey || event.ctrlKey;
	            var isZorY = event.keyCode === 90 || event.keyCode === 89;

	            // allow undo/redo in inputs
	            if (isCtrlOrCmd && isZorY) {
	                event.preventDefault();
	                return true;
	            }

	            // filter all other keyboard shortcuts
	            return false;
	        }

	        // ignore keypressed in any elements that support keyboard data input
	        return !(tagName === 'SELECT' || tagName === 'TEXTAREA');
	    }

	    function disable() {
	        lastEnabledContext = currentContext;
	        setCurrentContext(DISABLED_CONTEXT);
	    }

	    function enable() {
	        if (!areKeyboardShortcutsEnabled()) {
	            setContext(lastEnabledContext);
	            lastEnabledContext = null;
	        }
	    }

	    function areKeyboardShortcutsEnabled() {
	        return getCurrentContext() !== DISABLED_CONTEXT;
	    }

	    function registerContext(context, shortcuts) {
	        if (isValidContext(context) && shortcuts) {
	            if (SHARED_CONTEXTS_KEYBOARD_ACTIONS[context]) {
	                unregisterContext(context);
	            }
	            SHARED_CONTEXTS_KEYBOARD_ACTIONS[context] = shortcuts;
	            _.forOwn(shortcuts, function (shortcutAction, shortCutCombo) {
	                registerShortcut(shortCutCombo, context, shortcutAction);
	            });
	        }
	    }

	    function unregisterContext(context) {
	        if (isValidContext(context)) {
	            keyMaster.deleteScope(context);
	            SHARED_CONTEXTS_KEYBOARD_ACTIONS[context] = {};
	        }
	    }

	    function registerShortcut(shortcut, context, action) {
	        if (!_.isEmpty(shortcut) && action && isValidContext(context)) {
	            keyMaster(shortcut, context, action);
	        }
	    }

	    function isValidContext(context) {
	        return !_.isEmpty(context);
	    }

	    function clearContext() {
	        setCurrentContext(DEFAULT_CONTEXT);
	    }

	    function getCurrentContext() {
	        return currentContext;
	    }

	    function setCurrentContext(contextName) {
	        if (areKeyboardShortcutsEnabled()) {
	            setContext(contextName);
	        }
	    }

	    function setContext(contextName) {
	        currentContext = contextName;
	        keyMaster.setScope(contextName);
	    }

	    function extendContext(contextNameToExtend, extension) {
	        var target = {};
	        var extendedContext = SHARED_CONTEXTS_KEYBOARD_ACTIONS[contextNameToExtend] || {};
	        _.extend(target, extendedContext);
	        _.extend(target, extension);
	        return target;
	    }

	    keyMaster.filter = filter;

	    return {
	        CONTEXTS: SHARED_CONTEXTS,

	        disable: disable,
	        enable: enable,

	        isEnabled: areKeyboardShortcutsEnabled,

	        specialKeys: specialKeys,
	        extendContext: extendContext,
	        getContext: getCurrentContext,

	        setContext: setCurrentContext,

	        clearContext: clearContext,
	        registerContext: registerContext,
	        unregisterContext: unregisterContext
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 24 */
/*!****************************************!*\
  !*** ./js/keyboardmaster/keymaster.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	//     keymaster.js
	//     (c) 2011-2013 Thomas Fuchs
	//     keymaster.js may be freely distributed under the MIT license.

	;(function(global){
	  var k,
	    _handlers = {},
	    _mods = { 16: false, 18: false, 17: false, 91: false },
	    _scope = 'all',
	    // modifier keys
	    _MODIFIERS = {
	      '⇧': 16, shift: 16,
	      '⌥': 18, alt: 18, option: 18,
	      '⌃': 17, ctrl: 17, control: 17,
	      '⌘': 91, command: 91
	    },
	    // special keys
	    _MAP = {
	      backspace: 8, tab: 9, clear: 12,
	      enter: 13, 'return': 13,
	      esc: 27, escape: 27, space: 32,
	      left: 37, up: 38,
	      right: 39, down: 40,
	      del: 46, 'delete': 46,
	      home: 36, end: 35,
	      pageup: 33, pagedown: 34,
	      ',': 188, '.': 190, '/': 191,
	      '`': 192, '-': 189, '=': 187,
	      ';': 186, '\'': 222,
	      '[': 219, ']': 221, '\\': 220
	    },
	    code = function(x){
	      return _MAP[x] || x.toUpperCase().charCodeAt(0);
	    },
	    _downKeys = [];

	  for(k=1;k<20;k++) _MAP['f'+k] = 111+k;

	  // IE doesn't support Array#indexOf, so have a simple replacement
	  function index(array, item){
	    var i = array.length;
	    while(i--) if(array[i]===item) return i;
	    return -1;
	  }

	  // for comparing mods before unassignment
	  function compareArray(a1, a2) {
	    if (a1.length != a2.length) return false;
	    for (var i = 0; i < a1.length; i++) {
	        if (a1[i] !== a2[i]) return false;
	    }
	    return true;
	  }

	  var modifierMap = {
	      16:'shiftKey',
	      18:'altKey',
	      17:'ctrlKey',
	      91:'metaKey'
	  };
	  function updateModifierKey(event) {
	      for(k in _mods) _mods[k] = event[modifierMap[k]];
	  }

	  // handle keydown event
	  function dispatch(event) {
	    var key, handler, k, i, modifiersMatch, scope;
	    key = event.keyCode;

	    if (index(_downKeys, key) == -1) {
	        _downKeys.push(key);
	    }

	    // if a modifier key, set the key.<modifierkeyname> property to true and return
	    if(key == 93 || key == 224) key = 91; // right command on webkit, command on Gecko
	    if(key in _mods) {
	      _mods[key] = true;
	      // 'assignKey' from inside this closure is exported to window.key
	      for(k in _MODIFIERS) if(_MODIFIERS[k] == key) assignKey[k] = true;
	      return;
	    }
	    updateModifierKey(event);

	    // see if we need to ignore the keypress (filter() can can be overridden)
	    // by default ignore key presses if a select, textarea, or input is focused
	    if(!assignKey.filter.call(this, event)) return;

	    // abort if no potentially matching shortcuts found
	    if (!(key in _handlers)) return;

	    scope = getScope();

	    // for each potential shortcut
	    for (i = 0; i < _handlers[key].length; i++) {
	      handler = _handlers[key][i];

	      // see if it's in the current scope
	      if(handler.scope == scope || handler.scope == 'all'){
	        // check if modifiers match if any
	        modifiersMatch = handler.mods.length > 0;
	        for(k in _mods)
	          if((!_mods[k] && index(handler.mods, +k) > -1) ||
	            (_mods[k] && index(handler.mods, +k) == -1)) modifiersMatch = false;
	        // call the handler and stop the event if neccessary
	        if((handler.mods.length === 0 && !_mods[16] && !_mods[18] && !_mods[17] && !_mods[91]) || modifiersMatch){
	          if(handler.method(event, handler)===false){
	            if(event.preventDefault) event.preventDefault();
	              else event.returnValue = false;
	            if(event.stopPropagation) event.stopPropagation();
	            if(event.cancelBubble) event.cancelBubble = true;
	          }
	        }
	      }
	    }
	  }

	  // unset modifier keys on keyup
	  function clearModifier(event){
	    var key = event.keyCode, k,
	        i = index(_downKeys, key);

	    // remove key from _downKeys
	    if (i >= 0) {
	        _downKeys.splice(i, 1);
	    }

	    if(key == 93 || key == 224) key = 91;
	    if(key in _mods) {
	      _mods[key] = false;
	      for(k in _MODIFIERS) if(_MODIFIERS[k] == key) assignKey[k] = false;
	    }
	  }

	  function resetModifiers() {
	    for(k in _mods) _mods[k] = false;
	    for(k in _MODIFIERS) assignKey[k] = false;
	  }

	  // parse and assign shortcut
	  function assignKey(key, scope, method){
	    var keys, mods;
	    keys = getKeys(key);
	    if (method === undefined) {
	      method = scope;
	      scope = 'all';
	    }

	    // for each shortcut
	    for (var i = 0; i < keys.length; i++) {
	      // set modifier keys if any
	      mods = [];
	      key = keys[i].split('+');
	      if (key.length > 1){
	        mods = getMods(key);
	        key = [key[key.length-1]];
	      }
	      // convert to keycode and...
	      key = key[0];
	      key = code(key);
	      // ...store handler
	      if (!(key in _handlers)) _handlers[key] = [];
	      _handlers[key].push({ shortcut: keys[i], scope: scope, method: method, key: keys[i], mods: mods });
	    }
	  }

	  // unbind all handlers for given key in current scope
	  function unbindKey(key, scope) {
	    var multipleKeys, keys,
	      mods = [],
	      i, j, obj;

	    multipleKeys = getKeys(key);

	    for (j = 0; j < multipleKeys.length; j++) {
	      keys = multipleKeys[j].split('+');

	      if (keys.length > 1) {
	        mods = getMods(keys);
	      }

	      key = keys[keys.length - 1];
	      key = code(key);

	      if (scope === undefined) {
	        scope = getScope();
	      }
	      if (!_handlers[key]) {
	        return;
	      }
	      for (i = 0; i < _handlers[key].length; i++) {
	        obj = _handlers[key][i];
	        // only clear handlers if correct scope and mods match
	        if (obj.scope === scope && compareArray(obj.mods, mods)) {
	          _handlers[key][i] = {};
	        }
	      }
	    }
	  }

	  // Returns true if the key with code 'keyCode' is currently down
	  // Converts strings into key codes.
	  function isPressed(keyCode) {
	      if (typeof(keyCode)=='string') {
	        keyCode = code(keyCode);
	      }
	      return index(_downKeys, keyCode) != -1;
	  }

	  function getPressedKeyCodes() {
	      return _downKeys.slice(0);
	  }

	  function filter(event){
	    var tagName = (event.target || event.srcElement).tagName;
	    // ignore keypressed in any elements that support keyboard data input
	    return !(tagName == 'INPUT' || tagName == 'SELECT' || tagName == 'TEXTAREA');
	  }

	  // initialize key.<modifier> to false
	  for(k in _MODIFIERS) assignKey[k] = false;

	  // set current scope (default 'all')
	  function setScope(scope){ _scope = scope || 'all'; }
	  function getScope(){ return _scope || 'all'; }

	  // delete all handlers for a given scope
	  function deleteScope(scope){
	    var key, handlers, i;

	    for (key in _handlers) {
	      handlers = _handlers[key];
	      for (i = 0; i < handlers.length; ) {
	        if (handlers[i].scope === scope) handlers.splice(i, 1);
	        else i++;
	      }
	    }
	  }

	  // abstract key logic for assign and unassign
	  function getKeys(key) {
	    var keys;
	    key = key.replace(/\s/g, '');
	    keys = key.split(',');
	    if ((keys[keys.length - 1]) === '') {
	      keys[keys.length - 2] += ',';
	    }
	    return keys;
	  }

	  // abstract mods logic for assign and unassign
	  function getMods(key) {
	    var mods = key.slice(0, key.length - 1);
	    for (var mi = 0; mi < mods.length; mi++)
	    mods[mi] = _MODIFIERS[mods[mi]];
	    return mods;
	  }

	  // cross-browser events
	  function addEvent(object, event, method) {
	    if (object.addEventListener)
	      object.addEventListener(event, method, false);
	    else if(object.attachEvent)
	      object.attachEvent('on'+event, function(){ method(window.event); });
	  }

	  // set the handlers globally on document
	  addEvent(document, 'keydown', function(event) { dispatch(event); }); // Passing _scope to a callback to ensure it remains the same by execution. Fixes #48
	  addEvent(document, 'keyup', clearModifier);

	  // reset modifiers to false whenever the window is (re)focused.
	  addEvent(window, 'focus', resetModifiers);

	  // store previously defined key
	  var previousKey = global.key;

	  // restore previously defined key and return reference to our key object
	  function noConflict() {
	    var k = global.key;
	    global.key = previousKey;
	    return k;
	  }

	  // set window.key and window.key.set/get/deleteScope, and the default filter
	  global.key = assignKey;
	  global.key.setScope = setScope;
	  global.key.getScope = getScope;
	  global.key.deleteScope = deleteScope;
	  global.key.filter = filter;
	  global.key.isPressed = isPressed;
	  global.key.getPressedKeyCodes = getPressedKeyCodes;
	  global.key.noConflict = noConflict;
	  global.key.unbind = unbindKey;

	  if(true) module.exports = assignKey;

	})(this);


/***/ },
/* 25 */
/*!*******************************!*\
  !*** ./js/overrides/utils.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {

	    return {
	        translationMixin: {
	            translateIfNeeded: function translateIfNeeded(str) {
	                return str;
	            }
	        },
	        media: {
	            getMediaUrl: function getMediaUrl(item) {
	                return 'http://static.parastorage.com/services/santa-resources/resources/editor/' + item;
	            }
	        }
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 26 */
/*!***********************!*\
  !*** ./js/symbols.js ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! symbols/control/symbol */ 27), __webpack_require__(/*! symbols/data/symbols */ 28)], __WEBPACK_AMD_DEFINE_RESULT__ = function (symbol, symbolsData) {
	    'use strict';

	    return {
	        symbol: symbol,
	        symbolsData: symbolsData
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 27 */
/*!**************************************!*\
  !*** ./js/symbols/control/symbol.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 2), __webpack_require__(/*! lodash */ 4), __webpack_require__(/*! symbols/data/symbols */ 28), __webpack_require__(/*! symbols/control/symbol.rt */ 29)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, symbols, template) {
	    'use strict';

	    return React.createClass({
	        displayName: 'Symbol',
	        propTypes: {
	            name: React.PropTypes.string.isRequired,
	            className: React.PropTypes.string,
	            onClick: React.PropTypes.func,
	            style: React.PropTypes.object
	        },
	        getSvgDef: function getSvgDef() {
	            var ret = symbols[this.props.name];
	            if (!ret) {
	                console.error('SVG symbol %s does not exist', this.props.name);
	            }
	            return ret || { content: '', svg: {} };
	        },
	        // TODO: Move this into a mixin & search for all occurrences
	        getClassName: function getClassName(defaultClassName) {
	            return (defaultClassName ? defaultClassName : '') + (this.props.className ? ' ' + this.props.className : '');
	        },
	        render: template
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 28 */
/*!************************************!*\
  !*** ./js/symbols/data/symbols.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    "use strict";
	    return {
	        "arrowDown": {
	            "svg": {
	                "version": "1.1",
	                "id": "Layer_1",
	                "x": "0px",
	                "y": "0px",
	                "viewBox": "135.1 -517.4 1024 1024",
	                "style": {
	                    "enableBackground": "new 135.1 -517.4 1024 1024"
	                },
	                "width": "12px",
	                "height": "12px"
	            },
	            "content": "<path d=\"M137.3-195c0,17.4,7.4,34.7,19.8,47.1l441.4,409.1c27.3,24.8,71.9,24.8,99.2,0l438.9-429\r\n\tc27.3-24.8,27.3-66.9,0-91.7c-27.3-24.8-71.9-24.8-99.2,0L648.1,122.3L256.3-242.2c-27.3-24.8-71.9-24.8-99.2,0\r\n\tC144.7-227.3,137.3-212.4,137.3-195z\" ></path>"
	        },
	        "infoIcon": {
	            "svg": {
	                "preserveAspectRatio": "xMidYMid",
	                "viewBox": "1.5 1.5 18 18",
	                "width": "18",
	                "height": "18"
	            },
	            "content": "<g id=\"infoIconSvg\" ><circle cx=\"10.5\" cy=\"10.5\" r=\"8px\" ></circle><path d=\"M10.500,19.500 C5.529,19.500 1.500,15.471 1.500,10.500 C1.500,5.529 5.529,1.500 10.500,1.500 C15.471,1.500 19.500,5.529 19.500,10.500 C19.500,15.471 15.471,19.500 10.500,19.500 ZM2.500,10.500 C2.500,14.911 6.089,18.500 10.500,18.500 C14.911,18.500 18.500,14.911 18.500,10.500 C18.500,6.089 14.911,2.500 10.500,2.500 C6.089,2.500 2.500,6.089 2.500,10.500 ZM12.500,15.500 C12.500,15.500 8.500,15.500 8.500,15.500 C8.500,15.500 9.500,13.500 9.500,13.500 C9.500,13.500 9.500,13.500 9.500,13.500 C9.500,13.500 9.500,10.500 9.500,10.500 C9.500,10.500 8.500,10.500 8.500,10.500 C8.500,10.500 9.500,8.500 9.500,8.500 C9.500,8.500 11.500,8.500 11.500,8.500 C11.500,8.500 11.500,13.500 11.500,13.500 C11.500,13.500 11.500,13.500 11.500,13.500 C11.500,13.500 12.500,15.500 12.500,15.500 ZM9.500,5.500 C9.500,5.500 11.500,5.500 11.500,5.500 C11.500,5.500 11.500,7.500 11.500,7.500 C11.500,7.500 9.500,7.500 9.500,7.500 C9.500,7.500 9.500,5.500 9.500,5.500 Z\" id=\"path-1\" fill-rule=\"evenodd\" ></path></g>"
	        },
	        "firstTimeInfoBoxClose": {
	            "svg": {
	                "version": "1.1",
	                "id": "Layer_1",
	                "width": "18px",
	                "height": "18px",
	                "viewBox": "0 0 18 18"
	            },
	            "content": "<circle cx=\"9\" cy=\"9\" r=\"8\" fill=\"none\" ></circle><polyline points=\"5,5 13,13\" fill=\"none\" stroke-width=\"1px\" ></polyline><polyline points=\"13,5 5,13\" fill=\"none\" stroke-width=\"1px\" ></polyline>"
	        },
	        "firstTimeInfoBoxArrowRight": {
	            "svg": {
	                "version": "1.1",
	                "id": "Layer_1",
	                "width": "5px",
	                "height": "8px",
	                "viewBox": "0 0 5 8"
	            },
	            "content": "<polyline points=\"1,1 4,4 1,7\" fill=\"none\" stroke-width=\"1px\" ></polyline>"
	        },
	        "infoSmall": {
	            "svg": {
	                "width": "18px",
	                "height": "18px",
	                "viewBox": "0 0 18 18",
	                "version": "1.1"
	            },
	            "content": "<title >L_Info_Panel</title><desc >Created with Sketch.</desc><defs ></defs><g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\" ><path fill=\"#7a92a5\" d=\"M9,0 C4.029,0 0,4.029 0,9 C0,13.971 4.029,18 9,18 C13.971,18 18,13.971 18,9 C18,4.029 13.971,0 9,0 L9,0 Z M9,17 C4.589,17 1,13.411 1,9 C1,4.589 4.589,1 9,1 C13.411,1 17,4.589 17,9 C17,13.411 13.411,17 9,17 L9,17 Z M8,6 L10,6 L10,4 L8,4 L8,6 Z M10,12 L10,7 L8,7 L7,9 L8,9 L8,12 L7,13 L7,14 L11,14 L11,13 L10,12 L10,12 Z\" id=\"L_Info_Panel\" sketch:type=\"MSShapeGroup\" ></path></g>"
	        },
	        "checkbox": {
	            "svg": {
	                "width": "16px",
	                "height": "16px",
	                "viewBox": "0 0 16 16",
	                "version": "1.1"
	            },
	            "content": "<path class=\"bg\" d=\"M5,16 C2.66494118,16 0,13.3397647 0,11 L0,5 C0,2.66023529 2.66494118,0 5,0 L11,0 C13.3350588,0 16,2.66023529 16,5 L16,11 C16,13.3397647 13.3350588,16 11,16 L4.23529412,16\" ></path><path class=\"border\" d=\"M11.5555556,0.888888889 C13.5191111,0.888888889 15.1111111,2.48355556 15.1111111,4.45155556 L15.1111111,11.5484444 C15.1111111,13.5164444 13.5191111,15.1111111 11.5555556,15.1111111 L4.44444444,15.1111111 C2.48088889,15.1111111 0.888888889,13.5164444 0.888888889,11.5484444 L0.888888889,4.45155556 C0.888888889,2.48355556 2.48088889,0.888888889 4.44444444,0.888888889 L11.5555556,0.888888889 M11.5555556,0 L4.44444444,0 C1.99377778,0 0,1.99644444 0,4.45155556 L0,11.5484444 C0,14.0026667 1.99377778,16 4.44444444,16 L11.5555556,16 C14.0062222,16 16,14.0026667 16,11.5484444 L16,4.45155556 C16,1.99644444 14.0062222,0 11.5555556,0\" ></path><path class=\"check\" d=\"M4.00798263,8.34406543 C4.03898263,8.54906543 4.15298263,8.74406543 4.34198263,8.87806543 L7.12298263,10.8390654 C7.49798263,11.1050654 8.02998263,11.0340654 8.31398263,10.6810654 L11.8259826,6.29706543 C12.1119826,5.94106543 12.0379826,5.43406543 11.6619826,5.16506543 C11.2869826,4.89406543 10.7509826,4.96406543 10.4669826,5.32006543 L7.46698263,9.06506543 L5.36398263,7.58406543 C4.98698263,7.31706543 4.45198263,7.39006543 4.16998263,7.74706543 C4.02998263,7.92506543 3.97798263,8.14006543 4.00798263,8.34406543\" ></path><path class=\"minus\" d=\"M12,8 C12,8.552 11.6024,9 11.1112,9 L4.8888,9 C4.3984,9 4,8.552 4,8 C4,7.448 4.3984,7 4.8888,7 L11.1112,7 C11.6024,7 12,7.448 12,8\" ></path>"
	        },
	        "switch": {
	            "svg": {
	                "width": "50px",
	                "height": "28px",
	                "viewBox": "0 0 50 28",
	                "version": "1.1"
	            },
	            "content": "<defs ><filter id=\"thumb-shadow\" ><feGaussianBlur in=\"SourceAlpha\" stdDeviation=\"0.5\" ></feGaussianBlur><feOffset dx=\"0\" dy=\"1.5\" ></feOffset><feColorMatrix values=\"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.30 0\" type=\"matrix\" ></feColorMatrix><feMerge ><feMergeNode ></feMergeNode><feMergeNode in=\"SourceGraphic\" ></feMergeNode></feMerge></filter></defs><path class=\"st1\" d=\"M14,24.5 C7.659,24.5 2.5,19.341 2.5,13 C2.5,6.659 7.659,1.5 14,1.5 L35,1.5 C41.341,1.5 46.5,6.659 46.5,13 C46.5,19.341 41.341,24.5 35,24.5 L14,24.5\" ></path><path class=\"st2\" d=\"M35,2 C41.065,2 46,6.935 46,13 C46,19.065 41.065,24 35,24 L14,24 C7.935,24 3,19.065 3,13 C3,6.935 7.935,2 14,2 L35,2 M35,1 L14,1 C7.373,1 2,6.373 2,13 C2,19.627 7.373,25 14,25 L35,25 C41.627,25 47,19.627 47,13 C47,6.373 41.627,1 35,1\" ></path><g class=\"switch-thumb-regular\" transform=\"translate(0 0)\" ><path class=\"switch-thumb-circle\" d=\"M25,13.5 C25,19.299 20.075,24 14,24 C7.925,24 3,19.299 3,13.5 L3,12.5 C3,6.701 7.925,2 14,2 C20.075,2 25,6.701 25,12.5 L25,13.5\" ></path><path class=\"switch-thumb-check\" d=\"M10.0081965,13.3440654 C10.0391965,13.5490654 10.1531965,13.7440654 10.3421965,13.8780654 L13.1231965,15.8390654 C13.4991965,16.1050654 14.0301965,16.0340654 14.3141965,15.6810654 L17.8261965,11.2960654 C18.1111965,10.9410654 18.0381965,10.4340654 17.6621965,10.1650654 C17.2871965,9.89406543 16.7511965,9.96406543 16.4671965,10.3200654 L13.4671965,14.0640654 L11.3641965,12.5840654 C10.9871965,12.3170654 10.4521965,12.3900654 10.1701965,12.7470654 C10.0301965,12.9250654 9.97819652,13.1400654 10.0081965,13.3440654\" ></path><path class=\"switch-thumb-minus\" d=\"M19,13 C19,13.552 18.503,14 17.889,14 L10.111,14 C9.498,14 9,13.552 9,13 C9,12.448 9.498,12 10.111,12 L17.889,12 C18.503,12 19,12.448 19,13\" ></path></g><g class=\"switch-thumb-selected\" transform=\"translate(21 0)\" ><path class=\"switch-thumb-circle\" d=\"M25,13.5 C25,19.299 20.075,24 14,24 C7.925,24 3,19.299 3,13.5 L3,12.5 C3,6.701 7.925,2 14,2 C20.075,2 25,6.701 25,12.5 L25,13.5\" ></path><path class=\"switch-thumb-check\" d=\"M10.0081965,13.3440654 C10.0391965,13.5490654 10.1531965,13.7440654 10.3421965,13.8780654 L13.1231965,15.8390654 C13.4991965,16.1050654 14.0301965,16.0340654 14.3141965,15.6810654 L17.8261965,11.2960654 C18.1111965,10.9410654 18.0381965,10.4340654 17.6621965,10.1650654 C17.2871965,9.89406543 16.7511965,9.96406543 16.4671965,10.3200654 L13.4671965,14.0640654 L11.3641965,12.5840654 C10.9871965,12.3170654 10.4521965,12.3900654 10.1701965,12.7470654 C10.0301965,12.9250654 9.97819652,13.1400654 10.0081965,13.3440654\" ></path><path class=\"switch-thumb-minus\" d=\"M19,13 C19,13.552 18.503,14 17.889,14 L10.111,14 C9.498,14 9,13.552 9,13 C9,12.448 9.498,12 10.111,12 L17.889,12 C18.503,12 19,12.448 19,13\" ></path></g>"
	        },
	        "inputValidationError": {
	            "svg": {
	                "width": "25px",
	                "height": "25px",
	                "viewBox": "0 0 25 25"
	            },
	            "content": "<circle cx=\"13.00\" cy=\"12.00\" r=\"12.00\" ></circle><path fill=\"rgb(255,255,255)\" fill-rule=\"evenodd\" d=\"M 13 7C 13.55 7 14 7.45 14 8 14 8 14 13 14 13 14 13.55 13.55 14 13 14 12.45 14 12 13.55 12 13 12 13 12 8 12 8 12 7.45 12.45 7 13 7Z\" ></path><circle fill=\"rgb(255,255,255)\" cx=\"13.00\" cy=\"17.00\" r=\"1.00\" ></circle>"
	        },
	        "inputValidationSuccess": {
	            "svg": {
	                "width": "25px",
	                "height": "25px",
	                "viewBox": "0 0 25 25"
	            },
	            "content": "<circle cx=\"13.00\" cy=\"12.00\" r=\"12.00\" ></circle><path fill=\"rgb(255,255,255)\" fill-rule=\"evenodd\" d=\"M 17.38 10.91C 17.38 10.91 12.7 16.16 12.7 16.16 12.7 16.16 12.7 16.16 12.69 16.16 12.62 16.33 12.52 16.49 12.37 16.59 11.97 16.84 11.46 16.69 11.23 16.24 11.23 16.24 8.99 13.4 8.99 13.4 8.76 12.95 8.89 12.38 9.29 12.13 9.69 11.87 10.2 12.02 10.43 12.47 10.43 12.47 11.93 14.37 11.93 14.37 11.93 14.37 16.2 9.59 16.2 9.59 16.53 9.22 17.06 9.22 17.38 9.59 17.71 9.95 17.71 10.54 17.38 10.91Z\" ></path>"
	        }
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 29 */
/*!**************************************!*\
  !*** ./js/symbols/control/symbol.rt ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 2),
	    __webpack_require__(/*! lodash */ 4)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _) {
	    'use strict';
	    function mergeProps(inline, external) {
	        var res = _.assign({}, inline, external);
	        if (inline.hasOwnProperty('style')) {
	            res.style = _.defaults(res.style, inline.style);
	        }
	        if (inline.hasOwnProperty('className') && external.hasOwnProperty('className')) {
	            res.className = external.className + ' ' + inline.className;
	        }
	        return res;
	    }
	    function scopeDef2() {
	        var def = this.getSvgDef();
	        return React.createElement('svg', mergeProps({
	            'className': this.getClassName('symbol-' + this.props.name),
	            'style': this.props.style ? this.props.style : {},
	            'onClick': this.props.onClick,
	            'dangerouslySetInnerHTML': { __html: def.content }
	        }, def.svg));
	    }
	    return function () {
	        return scopeDef2.apply(this, []);
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 30 */
/*!********************************************!*\
  !*** ./js/baseUI/mixins/classNameMixin.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    'use strict';

	    return {
	        generateClassName: function generateClassName(className) {
	            className = className || '';
	            var additionalClassName = this.props.className;

	            if (additionalClassName) {
	                className += ' ' + additionalClassName;
	            }

	            return className;
	        }
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 31 */
/*!*************************************************!*\
  !*** ./js/baseUI/mixins/reportUIChangeMixin.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 2)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React) {
	    'use strict';
	    return {
	        contextTypes: {
	            reportUIChange: React.PropTypes.func
	        },
	        reportUIChange: function reportUIChange(changeEvent) {
	            if (this.context.reportUIChange) {
	                this.context.reportUIChange(this.constructor.displayName, this.props.instanceId || this.props.label, changeEvent);
	            }
	        }
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 32 */
/*!****************************************!*\
  !*** ./js/baseUI/controls/infoIcon.rt ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 2),
	    __webpack_require__(/*! lodash */ 4),
	    __webpack_require__(/*! baseUI/popovers/tooltip */ 33),
	    __webpack_require__(/*! symbols */ 26),
	    __webpack_require__(/*! baseUI/framework/uiConstants */ 12)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, tooltip, symbols, uiConstants) {
	    'use strict';
	    function onClick1(e) {
	        this.onClick(e);
	    }
	    return function () {
	        return React.createElement(tooltip, {
	            'value': this.getTooltipValue(),
	            'alignment': this.props.alignment,
	            'width': this.props.tooltipWidth
	        }, React.createElement('span', {
	            'className': this.generateClassName('info-icon'),
	            'onMouseEnter': this.handleMouseEnter,
	            'onMouseLeave': this.handleMouseLeave
	        }, React.createElement(symbols.symbol, {
	            'name': this.props.symbolName,
	            'onClick': onClick1.bind(this)
	        })));
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 33 */
/*!***************************************!*\
  !*** ./js/baseUI/popovers/tooltip.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 2), __webpack_require__(/*! lodash */ 4), __webpack_require__(/*! baseUI/framework/uiConstants */ 12), __webpack_require__(/*! baseUI/popovers/tooltipEventCatcher */ 34), __webpack_require__(/*! baseUI/popovers/tooltipManager */ 35)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, uiConstants, tooltipEventCatcher, tooltipManager) {
	    'use strict';

	    return React.createClass({
	        displayName: 'tooltip',
	        propTypes: {
	            id: React.PropTypes.string,
	            disabled: React.PropTypes.bool,
	            value: React.PropTypes.oneOfType([React.PropTypes.string.isRequired, React.PropTypes.node.isRequired, React.PropTypes.element.isRequired, React.PropTypes.shape({
	                classPath: React.PropTypes.string.isRequired,
	                props: React.PropTypes.object.isRequired
	            })]),
	            noArrow: React.PropTypes.bool,
	            width: React.PropTypes.string,
	            alignment: React.PropTypes.string,
	            delay: React.PropTypes.string,
	            interactive: React.PropTypes.bool,
	            openTriggers: React.PropTypes.arrayOf(React.PropTypes.oneOf(_.values(uiConstants.TOOLTIP.TRIGGERS))),
	            closeTriggers: React.PropTypes.arrayOf(React.PropTypes.oneOf(_.values(uiConstants.TOOLTIP.TRIGGERS))),
	            shouldTranslate: React.PropTypes.bool,
	            children: React.PropTypes.element.isRequired,
	            onOpen: React.PropTypes.func,
	            onClose: React.PropTypes.func,
	            styleType: React.PropTypes.oneOf(_.values(uiConstants.TOOLTIP.STYLE_TYPE)),
	            marginsFromWindow: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string])
	        },

	        getDefaultProps: function getDefaultProps() {
	            return {
	                disabled: false,
	                alignment: uiConstants.TOOLTIP.ALIGNMENT.TOP,
	                delay: '100',
	                width: '240px',
	                interactive: false,
	                openTriggers: [uiConstants.TOOLTIP.TRIGGERS.MOUSE_ENTER],
	                closeTriggers: [uiConstants.TOOLTIP.TRIGGERS.MOUSE_LEAVE, uiConstants.TOOLTIP.TRIGGERS.CLICK],
	                onOpen: _.noop,
	                onClose: _.noop,
	                marginsFromWindow: 6
	            };
	        },

	        getInitialState: function getInitialState() {
	            this.id = this.props.id || tooltipManager.generateId();
	            return null;
	        },

	        componentDidMount: function componentDidMount() {
	            this.forceUpdate();
	        },

	        componentWillUpdate: function componentWillUpdate(nextProps) {
	            tooltipManager.registerOrUpdateTooltip(this.id, this.getPresenterData(nextProps));
	        },

	        componentWillUnmount: function componentWillUnmount() {
	            tooltipManager.unRegisterTooltip(this.id);
	        },

	        showTooltip: function showTooltip() {
	            if (!this.props.disabled) {
	                this.wasHidden = false;
	                this.pendingShowDelay = setTimeout((function () {
	                    tooltipManager.show(this.id);
	                }).bind(this), this.props.delay);
	            }
	        },

	        hideTooltip: function hideTooltip() {
	            tooltipManager.hide(this.id);
	        },

	        toggleTooltip: function toggleTooltip() {
	            if (tooltipManager.isDisplayed(this.id)) {
	                this.hideTooltip();
	            } else {
	                this.showTooltip();
	            }
	        },

	        handleMouseLeave: function handleMouseLeave() {
	            clearTimeout(this.pendingShowDelay);
	            tooltipManager.notifyMouseLeave(this.id);
	        },

	        getPresenterData: function getPresenterData(props) {
	            props = props || this.props;
	            var presenterData = _.assign({}, _.omit(props, 'children'), {
	                targetNode: this.getDOMNode(),
	                id: this.id
	            });
	            return presenterData;
	        },

	        render: function render() {
	            var supportedShowEvents = {
	                onMouseEnter: this.showTooltip,
	                onClick: this.showTooltip
	            };

	            var supportedHideEvents = {
	                onMouseLeave: this.handleMouseLeave,
	                onClick: this.hideTooltip
	            };

	            var selectedShowEvents = _.pick(supportedShowEvents, this.props.openTriggers);
	            var selectedHideEvents = _.pick(supportedHideEvents, this.props.closeTriggers);
	            var selectedEvents = _.assign({}, selectedShowEvents, selectedHideEvents);

	            if (selectedShowEvents.onClick && selectedHideEvents.onClick) {
	                selectedEvents.onClick = this.toggleTooltip;
	            }

	            return React.createElement(tooltipEventCatcher, selectedEvents, this.props.children);
	        }
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 34 */
/*!***************************************************!*\
  !*** ./js/baseUI/popovers/tooltipEventCatcher.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! lodash */ 4), __webpack_require__(/*! react */ 2)], __WEBPACK_AMD_DEFINE_RESULT__ = function (_, React) {
	    'use strict';

	    return React.createClass({
	        displayName: 'tooltipEventCatcher',
	        propTypes: {
	            'children': React.PropTypes.element.isRequired
	        },

	        onEvent: function onEvent(eventName, evt) {
	            this.props[eventName](evt);
	            if (this.props.children.props[eventName]) {
	                this.props.children.props[eventName](evt);
	            }
	        },

	        render: function render() {
	            // get all event props (starting with 'on'), and add a proxy methods to them
	            var extendProps = _(this.props).pick(function (value, key) {
	                return key.indexOf('on') === 0;
	            }).mapValues(function (value, key) {
	                return this.onEvent.bind(this, key);
	            }, this).value();

	            return React.addons.cloneWithProps(React.Children.only(this.props.children), extendProps);
	        }
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 35 */
/*!**********************************************!*\
  !*** ./js/baseUI/popovers/tooltipManager.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! lodash */ 4)], __WEBPACK_AMD_DEFINE_RESULT__ = function (_) {
	    'use strict';

	    var registeredTooltips = {};
	    var tooltipRenderer = {
	        updateDisplayedTooltips: _.noop
	    };
	    var idsCounter = 0;

	    function getDisplayedTooltipsPresenterData() {
	        return _(registeredTooltips).filter('isDisplayed').pluck('presenterData').value();
	    }

	    var tooltipManager = {
	        generateId: function generateId() {
	            return 'tooltip_' + idsCounter++;
	        },

	        setTooltipRenderer: function setTooltipRenderer(containerInstance) {
	            tooltipRenderer = containerInstance;
	        },

	        registerOrUpdateTooltip: function registerOrUpdateTooltip(id, presenterData) {
	            registeredTooltips[id] = registeredTooltips[id] || {};
	            registeredTooltips[id].presenterData = _.assign({}, registeredTooltips[id].presenterData, presenterData);
	            if (registeredTooltips[id].isDisplayed) {
	                tooltipRenderer.updateDisplayedTooltips(getDisplayedTooltipsPresenterData());
	            }
	        },

	        unRegisterTooltip: function unRegisterTooltip(id) {
	            this.hide(id);
	            delete registeredTooltips[id];
	        },

	        isDisplayed: function isDisplayed(id) {
	            return registeredTooltips[id] && registeredTooltips[id].isDisplayed;
	        },

	        createTooltip: function createTooltip(showAfterCreation, params) {
	            params.id = params.id || this.generateId();
	            this.registerOrUpdateTooltip(params.id, params);
	            if (showAfterCreation) {
	                this.show(params.id);
	            }
	            return params.id;
	        },

	        show: function show(id) {
	            if (!registeredTooltips[id] || registeredTooltips[id].isDisplayed) {
	                return;
	            }

	            registeredTooltips[id].isDisplayed = true;
	            tooltipRenderer.updateDisplayedTooltips(getDisplayedTooltipsPresenterData());

	            if (registeredTooltips[id].presenterData.onOpen) {
	                registeredTooltips[id].presenterData.onOpen();
	            }
	        },

	        toggle: function toggle(id) {
	            if (!registeredTooltips[id]) {
	                return;
	            }

	            if (registeredTooltips[id].isDisplayed) {
	                this.hide(id);
	            } else {
	                this.show(id);
	            }
	        },

	        showForDuration: function showForDuration(id, duration) {
	            this.show(id);
	            setTimeout((function () {
	                this.hide(id);
	            }).bind(this), duration);
	        },

	        notifyMouseLeave: function notifyMouseLeave(id) {
	            var tooltip = registeredTooltips[id];
	            if (!tooltip || !tooltip.isDisplayed) {
	                return;
	            }
	            if (tooltip.presenterData.interactive) {
	                tooltip.presenterData.mouseLeftTargetNode = true;
	                tooltipRenderer.updateDisplayedTooltips(getDisplayedTooltipsPresenterData());
	            } else {
	                this.hide(id);
	            }
	        },

	        hide: function hide(id) {
	            var tooltip = registeredTooltips[id];
	            if (!this.isDisplayed(id)) {
	                return;
	            }
	            tooltip.isDisplayed = false;
	            tooltip.presenterData.mouseLeftTargetNode = false;
	            tooltipRenderer.updateDisplayedTooltips(getDisplayedTooltipsPresenterData());

	            if (tooltip.presenterData.onClose) {
	                tooltip.presenterData.onClose();
	            }
	        },

	        hideAll: function hideAll(callback) {
	            _.forEach(registeredTooltips, function (tooltip) {
	                tooltip.isDisplayed = false;
	            });
	            tooltipRenderer.updateDisplayedTooltips(getDisplayedTooltipsPresenterData(), callback);
	        }
	    };

	    return tooltipManager;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 36 */
/*!*************************************************!*\
  !*** ./js/baseUI/controls/radioButtonsMixin.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * Created by eitanr on 2/3/15.
	 */
	'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 2), __webpack_require__(/*! lodash */ 4), __webpack_require__(/*! baseUI/panelInputs/inputMixin */ 37), __webpack_require__(/*! baseUI/mixins/reportUIChangeMixin */ 31), __webpack_require__(/*! util */ 17)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, inputMixin, reportUIChangeMixin, util) {
	    'use strict';

	    var translationMixin = util.translationMixin;
	    var seq = 0;

	    return {
	        propTypes: {
	            options: React.PropTypes.arrayOf(React.PropTypes.shape({
	                value: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.bool]).isRequired,
	                className: React.PropTypes.string
	            }))
	        },
	        mixins: [inputMixin, reportUIChangeMixin, translationMixin],

	        getRadioGroupId: function getRadioGroupId() {
	            if (!this.groupId) {
	                this.groupId = 'rb_' + seq++;
	            }
	            return this.groupId;
	        },

	        handleChange: function handleChange(newSelectedValue, newSelectedType) {
	            this.callOnChangeIfExists(newSelectedValue, newSelectedType);
	            this.reportUIChange({ value: newSelectedValue });
	        }
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 37 */
/*!*********************************************!*\
  !*** ./js/baseUI/panelInputs/inputMixin.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 2), __webpack_require__(/*! lodash */ 4), __webpack_require__(/*! util */ 17)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, util) {
	    'use strict';

	    return {

	        mixins: [util.valueLinkMixin, util.propTypesFilterMixin],

	        propTypes: {
	            label: React.PropTypes.string,
	            disabled: React.PropTypes.bool
	        },

	        hasLabel: function hasLabel() {
	            return this.props.label !== undefined && this.props.label.trim().length > 0;
	        },

	        getLabel: function getLabel() {
	            return this.props.label !== undefined ? this.props.label : '';
	        },

	        isDisabled: function isDisabled() {
	            return this.props.disabled === true;
	        },

	        getClassName: function getClassName(defaultClassName) {
	            return util.inheritClassName(this.props, defaultClassName);
	        }
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 38 */
/*!**************************************!*\
  !*** ./js/baseUI/controls/dock.scss ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/sass-loader?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./dock.scss */ 39);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 41)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./dock.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./dock.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 39 */
/*!********************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./js/baseUI/controls/dock.scss ***!
  \********************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 40)();
	// imports


	// module
	exports.push([module.id, ".control-dock {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-size: 0;\n  position: relative; }\n  .control-dock:hover .info-icon {\n    opacity: 1; }\n  .control-dock .info-icon {\n    float: right;\n    opacity: 0; }\n  .control-dock .dock-label {\n    font-size: 14px;\n    left: 25px;\n    margin-bottom: 20px;\n    display: block;\n    color: #2b5672;\n    margin-top: 20px; }\n  .control-dock .dock-corners-wrapper {\n    position: relative;\n    margin-left: 0;\n    width: 185px; }\n  .control-dock label {\n    font-size: 0;\n    margin: 0;\n    display: inline-block; }\n    .control-dock label input {\n      display: none; }\n      .control-dock label input:checked + .top,\n      .control-dock label input:checked + .right,\n      .control-dock label input:checked + .bottom,\n      .control-dock label input:checked + .left {\n        border-color: #3899ec;\n        background: #d3edff; }\n    .control-dock label .square {\n      cursor: pointer;\n      box-sizing: border-box;\n      background: #eaf7ff;\n      margin: 0;\n      padding: 0;\n      width: 61px;\n      height: 43px;\n      display: block; }\n      .control-dock label .square.top {\n        margin-bottom: 1px;\n        margin-right: 1px;\n        border-top: 12px solid #b1ddf8; }\n        .control-dock label .square.top:hover {\n          border-top-color: #4eb7f5; }\n        .control-dock label .square.top.left {\n          border-top-left-radius: 5px; }\n        .control-dock label .square.top.right {\n          border-top-right-radius: 5px; }\n      .control-dock label .square.left {\n        border-left: 12px solid #b1ddf8;\n        margin-left: 0; }\n        .control-dock label .square.left:hover {\n          border-left-color: #4eb7f5; }\n      .control-dock label .square.middle {\n        background: white;\n        cursor: default;\n        margin-left: 1px;\n        margin-right: 1px; }\n      .control-dock label .square.right {\n        border-right: 12px solid #b1ddf8;\n        margin-right: 0; }\n        .control-dock label .square.right:hover {\n          border-right-color: #4eb7f5; }\n      .control-dock label .square.bottom {\n        margin-top: 1px;\n        margin-right: 1px;\n        border-bottom: 12px solid #b1ddf8; }\n        .control-dock label .square.bottom:hover {\n          border-bottom-color: #4eb7f5; }\n        .control-dock label .square.bottom.left {\n          border-bottom-left-radius: 5px; }\n        .control-dock label .square.bottom.right {\n          border-bottom-right-radius: 5px;\n          margin-right: 0; }\n  .control-dock .dashed {\n    position: absolute;\n    box-sizing: border-box;\n    pointer-events: none; }\n    .control-dock .dashed.horizontal {\n      border-top: 1px dotted #7fccf7;\n      border-bottom: 1px dotted #7fccf7;\n      height: 45px;\n      top: 43px;\n      left: 12px;\n      right: 12px; }\n    .control-dock .dashed.vertical {\n      border-left: 1px dotted #7fccf7;\n      border-right: 1px dotted #7fccf7;\n      width: 63px;\n      top: 12px;\n      bottom: 12px;\n      left: 61px; }\n", ""]);

	// exports


/***/ },
/* 40 */
/*!**************************************!*\
  !*** ./~/css-loader/lib/css-base.js ***!
  \**************************************/
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
/* 41 */
/*!*************************************!*\
  !*** ./~/style-loader/addStyles.js ***!
  \*************************************/
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
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

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

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
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
		var sourceMap = obj.sourceMap;

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
		var media = obj.media;
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
/* 42 */
/*!*************************************************************!*\
  !*** ./js/wix-ui-react/components/switches/buttonsGroup.js ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(/*! react */ 2);
	var _ = __webpack_require__(/*! lodash */ 4);
	var Wix = __webpack_require__(/*! Wix */ 7);
	var template = __webpack_require__(/*! wix-ui-react/components/switches/buttonsGroup.rt */ 43);
	__webpack_require__(/*! baseUI/controls/buttonsGroup.scss */ 46);

	module.exports = React.createClass({

	    displayName: 'ButtonsGroup',
	    propTypes: {
	        defaultValue: React.PropTypes.oneOfType([React.PropTypes.arrayOf(React.PropTypes.string), React.PropTypes.string]),
	        style: React.PropTypes.string
	    },

	    componentDidMount: function componentDidMount() {
	        if (Wix.Utils.getViewMode() !== 'standalone') {
	            var wixParam = this.props['wix-param'];
	            Wix.Styles.getStyleParams((function (styleParams, callback) {
	                var number = styleParams.numbers[wixParam] || { value: this.props.defaultValue };
	                this.setState({
	                    checked: _.isObject(number) ? number.value.toString() : number.toString()
	                }, callback);
	            }).bind(this));
	        }
	    },

	    getInitialState: function getInitialState() {
	        return {
	            checked: this.props.defaultValue
	        };
	    },

	    handleChange: function handleChange(newValue) {
	        this.setState({
	            checked: newValue
	        }, function () {
	            var wixParam = this.props['wix-param'];
	            if (wixParam) {
	                Wix.Styles.setNumberParam(wixParam, {
	                    value: newValue
	                });
	            }
	        });

	        if (_.isFunction(this.props.onChange)) {
	            this.props.onChange.call(this, newValue);
	        }
	    },

	    render: template
	});

/***/ },
/* 43 */
/*!*************************************************************!*\
  !*** ./js/wix-ui-react/components/switches/buttonsGroup.rt ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 2),
	    __webpack_require__(/*! lodash */ 4),
	    __webpack_require__(/*! baseUI/controls/buttonsGroup */ 44)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, buttonsGroup) {
	    'use strict';
	    return function () {
	        return React.createElement(buttonsGroup, {
	            'name': 'buttonsGroup',
	            'options': this.props.options,
	            'className': this.props.className,
	            'value': this.state.checked,
	            'onChange': this.handleChange
	        });
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 44 */
/*!********************************************!*\
  !*** ./js/baseUI/controls/buttonsGroup.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * Created by eitanr on 2/4/15.
	 */
	'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 2), __webpack_require__(/*! lodash */ 4), __webpack_require__(/*! baseUI/controls/radioButtonsMixin */ 36), __webpack_require__(/*! baseUI/controls/buttonsGroup.rt */ 45)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, radioMixin, template) {
	    'use strict';

	    return React.createClass({
	        displayName: 'ButtonsGroup',
	        PropTypes: {
	            options: React.PropTypes.array.isRequired,
	            align: React.PropTypes.string
	        },
	        mixins: [radioMixin],
	        render: template
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 45 */
/*!********************************************!*\
  !*** ./js/baseUI/controls/buttonsGroup.rt ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 2),
	    __webpack_require__(/*! lodash */ 4),
	    __webpack_require__(/*! baseUI/controls/infoIcon */ 11),
	    __webpack_require__(/*! util */ 17)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, infoIcon, util) {
	    'use strict';
	    function onChange1(selectedValue, option, optionIndex) {
	        this.handleChange(option.value);
	    }
	    function repeatOption2(selectedValue, option, optionIndex) {
	        return React.createElement('label', {
	            'key': option.value,
	            'className': option.className
	        }, React.createElement('input', {
	            'type': 'radio',
	            'name': this.getRadioGroupId(),
	            'value': option.value,
	            'checked': option.value === selectedValue,
	            'onChange': onChange1.bind(this, selectedValue, option, optionIndex)
	        }), React.createElement('span', {}, this.translateIfNeeded(option.label)));
	    }
	    function scopeSelectedValue3() {
	        var selectedValue = this.getValueFromProps(this.props);
	        return _.map(this.props.options, repeatOption2.bind(this, selectedValue));
	    }
	    return function () {
	        return React.createElement('div', { 'className': 'control-buttons-group' }, this.props.title ? React.createElement('p', { 'key': 'title' }, util.translate(this.props.title)) : null, this.props.title && (this.props.infoText || this.props.infoTitle) ? React.createElement(infoIcon, {
	            'key': 'infoIcon',
	            'text': this.props.infoText,
	            'title': this.props.infoTitle,
	            'size': 18
	        }) : null, React.createElement.apply(this, [
	            'div',
	            { 'className': 'group-buttons-container' + (this.props.align ? '-' + this.props.align : '') },
	            scopeSelectedValue3.apply(this, [])
	        ]));
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 46 */
/*!**********************************************!*\
  !*** ./js/baseUI/controls/buttonsGroup.scss ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/sass-loader?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./buttonsGroup.scss */ 47);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 41)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./buttonsGroup.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./buttonsGroup.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 47 */
/*!****************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./js/baseUI/controls/buttonsGroup.scss ***!
  \****************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 40)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n.control-buttons-group {\n  white-space: nowrap;\n  color: #2b5672;\n  position: relative;\n  font-family: HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n  font-size: 14px; }\n  .control-buttons-group p {\n    font-size: 14px;\n    color: #2b5672;\n    font-weight: 300;\n    margin-bottom: 15px;\n    margin-top: 0; }\n  .control-buttons-group .group-buttons-container-left {\n    text-align: left; }\n  .control-buttons-group .group-buttons-container-right {\n    text-align: right; }\n  .control-buttons-group .group-buttons-container-center {\n    text-align: center; }\n  .control-buttons-group .info-icon {\n    display: none;\n    position: absolute;\n    top: 0;\n    right: 0; }\n  .control-buttons-group:hover .info-icon {\n    display: inline-block; }\n  .control-buttons-group input {\n    display: none; }\n    .control-buttons-group input + span {\n      color: #3899ec;\n      cursor: pointer;\n      height: 36px;\n      background-color: #edf7ff;\n      display: inline-block;\n      position: relative;\n      white-space: nowrap;\n      line-height: 36px;\n      vertical-align: middle;\n      font-size: 14px;\n      padding: 0 14px;\n      max-width: 93px;\n      min-width: 74px;\n      text-overflow: ellipsis;\n      overflow: hidden;\n      text-align: center;\n      box-shadow: 0px 2px 0px 0px #d4e7fb; }\n    .control-buttons-group input:checked + span {\n      color: white;\n      position: relative;\n      top: 2px;\n      background-color: #3899ec;\n      box-shadow: inset 0px 2px 0px 0px rgba(0, 0, 0, 0.11); }\n  .control-buttons-group label {\n    display: inline-block; }\n    .control-buttons-group label input:not(:checked) + span:hover {\n      background-color: #d3edff; }\n    .control-buttons-group label:first-of-type span {\n      border-radius: 20px 0 0 20px; }\n    .control-buttons-group label:last-of-type span {\n      border-radius: 0 20px 20px 0; }\n", ""]);

	// exports


/***/ },
/* 48 */
/*!*****************************************************!*\
  !*** ./js/wix-ui-react/components/button/button.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var button = __webpack_require__(/*! baseUI/controls/button */ 49);
	__webpack_require__(/*! baseUI/controls/button.scss */ 51);

	module.exports = {
	    button: button
	};

/***/ },
/* 49 */
/*!**************************************!*\
  !*** ./js/baseUI/controls/button.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 2), __webpack_require__(/*! lodash */ 4), __webpack_require__(/*! baseUI/panelInputs/inputMixin */ 37), __webpack_require__(/*! util */ 17), __webpack_require__(/*! baseUI/controls/button.rt */ 50)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, inputMixin, util, template) {
	    'use strict';

	    return React.createClass({
	        displayName: 'Button',
	        mixins: [inputMixin, util.translationMixin],
	        propTypes: {
	            label: React.PropTypes.string,
	            className: React.PropTypes.string,
	            disabled: React.PropTypes.bool,
	            icon: React.PropTypes.string
	        },
	        render: template
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 50 */
/*!**************************************!*\
  !*** ./js/baseUI/controls/button.rt ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 2),
	    __webpack_require__(/*! lodash */ 4),
	    __webpack_require__(/*! symbols */ 26)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, symbols) {
	    'use strict';
	    function mergeProps(inline, external) {
	        var res = _.assign({}, inline, external);
	        if (inline.hasOwnProperty('style')) {
	            res.style = _.defaults(res.style, inline.style);
	        }
	        if (inline.hasOwnProperty('className') && external.hasOwnProperty('className')) {
	            res.className = external.className + ' ' + inline.className;
	        }
	        return res;
	    }
	    return function () {
	        return React.createElement('button', mergeProps({
	            'className': this.getClassName('control-button'),
	            'disabled': this.props.disabled ? 'disabled' : ''
	        }, this.filteredProps()), this.props.icon ? React.createElement(symbols.symbol, {
	            'key': 'symbol-' + this.props.icon,
	            'className': this.props.label ? 'symbol-with-label' : '',
	            'name': this.props.icon
	        }) : null, React.createElement('span', {}, this.translateIfNeeded(this.props.label)));
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 51 */
/*!****************************************!*\
  !*** ./js/baseUI/controls/button.scss ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/sass-loader?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./button.scss */ 52);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 41)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./button.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./button.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 52 */
/*!**********************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./js/baseUI/controls/button.scss ***!
  \**********************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 40)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n.control-button {\n  font-family: HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n  font-size: 16px;\n  height: 36px;\n  line-height: 16px;\n  padding: 0 24px;\n  border-radius: 18px;\n  text-align: center;\n  box-sizing: border-box;\n  border: 0;\n  outline: none;\n  background-color: #3899ec;\n  color: #fff;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden; }\n  .control-button svg {\n    background: transparent; }\n    .control-button svg * {\n      fill: #fff; }\n  .control-button:hover {\n    background-color: #4eb7f5; }\n  .control-button:active {\n    background-color: #3899ec; }\n  .control-button[disabled] {\n    color: #fff;\n    background-color: #bcbcbc; }\n  .control-button.btn-big {\n    font-family: HelveticaNeueW01-55Roma, HelveticaNeueW02-55Roma, HelveticaNeueW10-55Roma, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n    font-size: 18px; }\n  .control-button.btn-md {\n    font-family: HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n    font-size: 14px;\n    height: 30px;\n    line-height: 14px;\n    padding: 0 18px;\n    border-radius: 15px; }\n  .control-button.btn-sm {\n    font-family: HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n    font-size: 14px;\n    height: 24px;\n    line-height: 14px;\n    padding: 0 18px;\n    border-radius: 15px; }\n  .control-button.btn-back {\n    min-width: 67px;\n    height: 21px;\n    line-height: 21px;\n    color: #3899ec;\n    background-color: #eaf7ff;\n    font-weight: 300;\n    font-size: 13px;\n    margin: 15px 0px 15px 12px;\n    text-align: center; }\n    .control-button.btn-back:hover {\n      color: #3899ec;\n      background-color: #d3edff; }\n    .control-button.btn-back svg * {\n      fill: #3899ec; }\n  .control-button.btn-danger-primary {\n    background-color: #ee5951;\n    color: #fff; }\n    .control-button.btn-danger-primary:hover {\n      color: #fff;\n      background-color: #f1726b; }\n    .control-button.btn-danger-primary:active {\n      color: #fff;\n      background-color: #ee5951; }\n  .control-button.btn-danger-secondary {\n    background-color: #fce6e5;\n    color: #ee5951; }\n    .control-button.btn-danger-secondary:hover {\n      color: #ee5951;\n      background-color: #facdca; }\n    .control-button.btn-danger-secondary:active {\n      color: #ee5951;\n      background-color: #fce6e5; }\n    .control-button.btn-danger-secondary svg * {\n      fill: #ee5951; }\n  .control-button.btn-confirm-primary {\n    background-color: #3899ec;\n    color: #fff; }\n    .control-button.btn-confirm-primary:hover {\n      color: #fff;\n      background-color: #4eb7f5; }\n    .control-button.btn-confirm-primary:active {\n      color: #fff;\n      background-color: #3899ec; }\n    .control-button.btn-confirm-primary[disabled] {\n      color: #fff;\n      background-color: #bcbcbc; }\n  .control-button.btn-confirm-secondary {\n    background-color: #eaf7ff;\n    color: #3899ec; }\n    .control-button.btn-confirm-secondary:hover {\n      color: #3899ec;\n      background-color: #d3edff; }\n    .control-button.btn-confirm-secondary:active {\n      color: #3899ec;\n      background-color: #eaf7ff; }\n    .control-button.btn-confirm-secondary svg * {\n      fill: #3899ec; }\n    .control-button.btn-confirm-secondary[disabled] {\n      color: #bcbcbc;\n      background-color: #f0f0f0; }\n      .control-button.btn-confirm-secondary[disabled] svg * {\n        fill: #bcbcbc; }\n  .control-button.btn-text {\n    background: none;\n    border-radius: 0;\n    font-size: 18px;\n    color: #3899ec;\n    padding: 0; }\n    .control-button.btn-text:hover {\n      color: #3899ec;\n      text-decoration: underline; }\n  .control-button .symbol-with-label {\n    margin-right: 8px; }\n\n.button-wrapper-center {\n  text-align: center;\n  margin-bottom: 15px; }\n", ""]);

	// exports


/***/ },
/* 53 */
/*!********************************************************************!*\
  !*** ./js/wix-ui-react/components/colorSpace/colorPickerSlider.js ***!
  \********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(/*! react */ 2);
	var Wix = __webpack_require__(/*! Wix */ 7);
	var _ = __webpack_require__(/*! lodash */ 4);

	var template = __webpack_require__(/*! wix-ui-react/components/colorSpace/colorPickerSlider.rt */ 54);
	__webpack_require__(/*! baseUI/colorPicker/colorPickerInputWithOpacity.scss */ 65);
	__webpack_require__(/*! baseUI/colorPicker/colorPickerInput.scss */ 67);
	__webpack_require__(/*! baseUI/colorPicker/colorFormat.scss */ 69);

	module.exports = React.createClass({
	    displayName: 'ColorPickerSlider',

	    propTypes: {
	        label: React.PropTypes.string,
	        onChange: React.PropTypes.func,
	        startWithColor: React.PropTypes.string,
	        startWithOpacity: React.PropTypes.number
	    },

	    getDefaultProps: function getDefaultProps() {
	        return {
	            openColorPicker: this.openColorPicker
	        };
	    },
	    componentWillUnmount: function componentWillUnmount() {
	        document.removeEventListener('paletteChange', this.themeChangeHandler, false);
	    },
	    setComponentState: function setComponentState(alpha, color, name) {
	        this.setState({
	            colorWithOpacity: {
	                alpha: alpha,
	                color: color,
	                name: name
	            }
	        });
	    },
	    paletteChangeHandler: function paletteChangeHandler(event) {
	        var wixParam = this.props['wix-param'];
	        var colors = event.detail.colors;
	        var color = colors[wixParam];
	        if (color) {
	            var colorVal = this.rgb2hex(color.value || color.rgba);
	            if (this.props.onChange) {
	                this.props.onChange({
	                    color: colorVal,
	                    opacity: this.state.colorWithOpacity.alpha
	                });
	            }
	            this.setComponentState(this.state.colorWithOpacity.alpha, colorVal, this.state.colorWithOpacity.name);
	            var uiLibVal = {};
	            var rgba = this.convertHex(colorVal, this.state.colorWithOpacity.alpha);
	            uiLibVal.value = rgba;
	            if (!_.isEmpty(this.state.colorWithOpacity.name)) {
	                uiLibVal.themeName = this.state.colorWithOpacity.name;
	            }
	            Wix.Styles.setUILIBParamValue('colors', wixParam, uiLibVal);
	        }
	    },
	    componentDidMount: function componentDidMount() {
	        var wixParam = this.props['wix-param'];
	        document.addEventListener('paletteChange', this.paletteChangeHandler, false);

	        if (Wix.Utils.getViewMode() === 'standalone') {
	            this.setComponentState(this.props.startWithOpacity || 1, this.rgb2hex(this.props.startWithColor || '#3D9BE9'), '');
	        } else {
	            var colorName;
	            Wix.Styles.getSiteColors((function (siteColors) {
	                Wix.Styles.getStyleParams((function (styleParams) {
	                    var color = styleParams.colors[wixParam];
	                    if (color) {
	                        var colorVal = color.value || color.rgba;
	                        var alpha = colorVal ? parseFloat(this.getAlphFromRgba(colorVal)) : 1;
	                        colorName = _.result(_.find(siteColors, { reference: color.themeName }), 'name') || '';
	                        this.setComponentState(alpha, this.rgb2hex(colorVal), colorName);
	                    } else {
	                        colorName = _.result(_.find(siteColors, { reference: this.state.colorWithOpacity.name }), 'name') || '';
	                        this.setComponentState(parseFloat(this.state.colorWithOpacity.alpha), Wix.Styles.getColorByreference(this.state.colorWithOpacity.name).value, colorName);
	                    }
	                }).bind(this));
	            }).bind(this));
	        }
	    },

	    getInitialState: function getInitialState() {
	        return {
	            colorWithOpacity: {
	                alpha: this.props.startWithOpacity || 1,
	                color: '',
	                name: this.props.startWithColor || 'color-20'
	            }
	        };
	    },

	    openColorPicker: function openColorPicker(onChange, value, allowPaletteEditing, position) {
	        var wixParam = this.props['wix-param'];
	        Wix.Styles.openColorPicker({
	            left: position.left,
	            top: position.top,
	            wixParam: wixParam,
	            color: this.state.colorWithOpacity.color
	        }, (function (style) {
	            if (style.paletteChange) {
	                var themeEvent = document.createEvent('CustomEvent');
	                themeEvent.initCustomEvent('paletteChange', true, true, { colors: style.colors });
	                document.dispatchEvent(themeEvent);
	            } else if (style && !_.isEmpty(style)) {
	                var colorVal = this.rgb2hex(style.colorParam.value) || this.state.colorWithOpacity.color;
	                var rgba = this.convertHex(colorVal, this.state.colorWithOpacity.alpha);
	                var uiLibVal = {};
	                uiLibVal.value = rgba;
	                if (!_.isEmpty(style.colorParam.themeName)) {
	                    uiLibVal.themeName = style.colorParam.themeName;
	                }
	                this.setComponentState(this.state.colorWithOpacity.alpha, colorVal, style.colorParam.themeName || '');
	                Wix.Styles.setUILIBParamValue('colors', wixParam, uiLibVal);
	                if (this.props.onChange) {
	                    this.props.onChange({
	                        color: colorVal,
	                        opacity: this.state.colorWithOpacity.alpha
	                    });
	                }
	            }
	        }).bind(this));
	    },

	    getValueLink: function getValueLink(valueName) {
	        var that = this;
	        return {
	            value: that.state[valueName],
	            requestChange: function requestChange(newValue) {
	                that.handleChange(newValue, valueName);
	            }
	        };
	    },

	    handleChange: function handleChange(newValue) {
	        this.setComponentState(newValue.alpha, this.state.colorWithOpacity.color, this.state.colorWithOpacity.name);
	    },

	    handleSlideEnd: function handleSlideEnd() {
	        var rgba = this.convertHex(this.state.colorWithOpacity.color, this.state.colorWithOpacity.alpha);
	        var value = {
	            rgba: rgba,
	            opacity: this.state.colorWithOpacity.alpha
	        };
	        if (!_.isEmpty(this.state.colorWithOpacity.name)) {
	            value.color = {
	                name: this.state.colorWithOpacity.name
	            };
	        }
	        var wixParam = this.props['wix-param'];
	        Wix.Styles.setColorParam(wixParam, {
	            value: value
	        });

	        var uiLibVal = {};
	        uiLibVal.value = rgba;
	        if (!_.isEmpty(this.state.colorWithOpacity.name)) {
	            uiLibVal.themeName = this.state.colorWithOpacity.name;
	        }
	        Wix.Styles.setUILIBParamValue('colors', wixParam, uiLibVal);

	        if (this.props.onChange) {
	            this.props.onChange({
	                color: this.state.colorWithOpacity.color,
	                opacity: this.state.colorWithOpacity.alpha
	            });
	        }
	    },

	    convertHex: function convertHex(hex, opacity) {
	        var result;
	        if (_.contains(hex, 'rgba')) {
	            var tokens = hex.split(',');
	            tokens[3] = opacity + ')';
	            result = tokens.join(',');
	        } else {
	            hex = hex.replace('#', '');
	            var r = parseInt(hex.substring(0, 2), 16);
	            var g = parseInt(hex.substring(2, 4), 16);
	            var b = parseInt(hex.substring(4, 6), 16);

	            result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity + ')';
	        }

	        return result;
	    },

	    rgb2hex: function rgb2hex(rgb) {
	        if (_.contains(rgb, 'rgb')) {
	            rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
	            return rgb && rgb.length === 4 ? "#" + ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) + ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) + ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2) : '';
	        } else {
	            return rgb;
	        }
	    },

	    getAlphFromRgba: function getAlphFromRgba(rgba) {
	        if (_.isUndefined(rgba)) {
	            return 1;
	        }

	        if (!_.contains(rgba, 'rgba')) {
	            return 1;
	        }

	        if (_.contains(rgba, '#')) {
	            return 1;
	        }
	        var tokens = rgba.split(',');
	        var alpha = tokens[3];
	        return alpha.split(')')[0];
	    },

	    render: template
	});

/***/ },
/* 54 */
/*!********************************************************************!*\
  !*** ./js/wix-ui-react/components/colorSpace/colorPickerSlider.rt ***!
  \********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 2),
	    __webpack_require__(/*! lodash */ 4),
	    __webpack_require__(/*! baseUI/colorPicker/colorPickerInputWithOpacity */ 55)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, colorPickerInputWithOpacity) {
	    'use strict';
	    return function () {
	        return React.createElement(colorPickerInputWithOpacity, {
	            'label': this.props.label,
	            'valueLink': this.getValueLink('colorWithOpacity'),
	            'openColorPicker': this.openColorPicker,
	            'useMouseEvent': true,
	            'onSlideEnd': this.handleSlideEnd
	        });
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 55 */
/*!**************************************************************!*\
  !*** ./js/baseUI/colorPicker/colorPickerInputWithOpacity.js ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 2), __webpack_require__(/*! lodash */ 4), __webpack_require__(/*! util */ 17), __webpack_require__(/*! baseUI/colorPicker/colorPickerInputWithOpacity.rt */ 56)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, util, template) {
	    'use strict';

	    return React.createClass({
	        propTypes: {
	            label: React.PropTypes.string,
	            isSmallStepper: React.PropTypes.bool
	        },
	        getDefaultProps: function getDefaultProps() {
	            return {
	                isSmallStepper: false
	            };
	        },
	        mixins: [util.valueLinkMixin, util.propTypesFilterMixin, util.translationMixin],
	        displayName: 'colorPickerInputWithOpacity',
	        linkColor: function linkColor() {
	            return {
	                value: this.getValueFromProps().color,
	                requestChange: (function (color) {
	                    this.callOnChangeIfExists({ color: color, alpha: this.getValueFromProps().alpha });
	                }).bind(this)
	            };
	        },
	        linkOpacity: function linkOpacity() {
	            return {
	                value: this.getValueFromProps().alpha * 100,
	                requestChange: (function (alpha) {
	                    this.callOnChangeIfExists({ color: this.getValueFromProps().color, alpha: alpha / 100 });
	                    if (this.props.onChange) {
	                        this.props.onChange({ color: this.getValueFromProps().color, alpha: alpha / 100 });
	                    }
	                }).bind(this)
	            };
	        },
	        getPropsForColorInput: function getPropsForColorInput() {
	            var props = this.filteredProps();
	            props.opacity = this.getValueFromProps().alpha;
	            return props;
	        },
	        render: template
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 56 */
/*!**************************************************************!*\
  !*** ./js/baseUI/colorPicker/colorPickerInputWithOpacity.rt ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 2),
	    __webpack_require__(/*! lodash */ 4),
	    __webpack_require__(/*! baseUI/panelInputs/slider */ 57),
	    __webpack_require__(/*! baseUI/colorPicker/colorPickerInput */ 63)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, slider, colorPicker) {
	    'use strict';
	    return function () {
	        return React.createElement('div', { 'className': 'color-picker-input-with-opacity' }, this.props.label ? React.createElement('label', {
	            'key': 'label',
	            'className': _.keys(_.pick({
	                'color-picker-input-with-opacity-label': true,
	                disabled: this.props.disabled
	            }, _.identity)).join(' ')
	        }, this.translateIfNeeded(this.props.label)) : null, React.createElement('div', { 'className': 'color-picker-input-with-opacity-slider' }, React.createElement(slider, {
	            'isSmallStepper': this.props.isSmallStepper,
	            'disabled': this.props.disabled,
	            'units': '%',
	            'valueLink': this.linkOpacity(),
	            'onSlideEnd': this.props.onSlideEnd,
	            'min': 0,
	            'max': 100,
	            'step': 1
	        }), React.createElement(colorPicker, _.assign({}, {
	            'disabled': this.props.disabled,
	            'valueLink': this.linkColor()
	        }, this.getPropsForColorInput()))));
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 57 */
/*!*****************************************!*\
  !*** ./js/baseUI/panelInputs/slider.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ 58), __webpack_require__(/*! lodash */ 4), __webpack_require__(/*! react */ 2), __webpack_require__(/*! baseUI/panelInputs/inputMixin */ 37), __webpack_require__(/*! util */ 17), __webpack_require__(/*! baseUI/panelInputs/normalizeNumber */ 59), __webpack_require__(/*! baseUI/mixins/reportUIChangeMixin */ 31), __webpack_require__(/*! baseUI/panelInputs/slider.rt */ 60)], __WEBPACK_AMD_DEFINE_RESULT__ = function ($, _, React, inputMixin, util, normalizeNumber, reportUIChangeMixin, template) {
	    'use strict';

	    var sliderRadius = 8;

	    /**
	     * @property {number} min
	     * @property {number} max
	     * @property {number} step
	     * @property {string} units
	     * @property {string} defaultValue
	     */

	    var slider = React.createClass({
	        displayName: 'slider',
	        mixins: [inputMixin, util.translationMixin, reportUIChangeMixin],
	        contextTypes: {
	            reportUIChange: React.PropTypes.func
	        },
	        propTypes: {
	            min: React.PropTypes.number,
	            max: React.PropTypes.number,
	            stepperMin: React.PropTypes.number,
	            stepperMax: React.PropTypes.number,
	            units: React.PropTypes.string,
	            step: React.PropTypes.number,
	            defaultValue: React.PropTypes.number,
	            infoText: React.PropTypes.string,
	            infoTitle: React.PropTypes.string,
	            onSlideEnd: React.PropTypes.func,
	            isSmallStepper: React.PropTypes.bool
	        },

	        getDefaultProps: function getDefaultProps() {
	            return {
	                max: 100,
	                min: 0,
	                step: 1,
	                units: '',
	                isSmallStepper: false
	            };
	        },

	        getSliderValue: function getSliderValue(props) {
	            var value = this.getValueFromProps(props);
	            if (!_.isUndefined(value)) {
	                return parseFloat(value);
	            }
	            return value;
	        },
	        getInitialState: function getInitialState() {
	            this.sliderX = 0;
	            this.sliderWidth = 0;

	            var value = this.getSliderValue();
	            var defaultValue = this.props.defaultValue !== undefined ? Number(this.props.defaultValue) : this.props.min;
	            var finalizedValue = _.isNumber(value) ? value : defaultValue;

	            return { value: normalizeNumber(finalizedValue, this.props.min, this.props.max, this.props.step) };
	        },
	        /**
	         * @param {number} val
	         * @return {number}
	         */
	        getValueInPercent: function getValueInPercent() {
	            var value = this.state.value;
	            if (this.state.value > this.props.max) {
	                value = this.props.max;
	            } else if (this.state.value < this.props.min) {
	                value = this.props.min;
	            }
	            return Math.round((value - this.props.min) / (this.props.max - this.props.min) * 100);
	        },
	        /**
	         * @param {number} percent
	         * @return {*}
	         */
	        fromPercent: function fromPercent(percent) {
	            return this.props.min + (this.props.max - this.props.min) * percent / 100;
	        },
	        calcPositionOnSlider: function calcPositionOnSlider(mouseX) {
	            var percent = (mouseX - this.sliderX) / this.sliderWidth * 100;
	            return Math.min(Math.max(percent, 0), 100);
	        },

	        calcNewValueFromKnob: function calcNewValueFromKnob(mouseX) {
	            var pos = this.calcPositionOnSlider(mouseX);
	            var newVal = normalizeNumber(this.fromPercent(pos), this.props.min, this.props.max, this.props.step);
	            return newVal;
	        },

	        handleKnobPositionChange: function handleKnobPositionChange(e) {
	            var val = this.calcNewValueFromKnob(e.pageX - sliderRadius); // reducing sliderRadius is to compensate for slider width (so that mouse will be in the middle of knob)
	            this.handleChange(val);
	        },

	        mouseUp: function mouseUp() {
	            var doc = $(document);
	            $(document.body).removeClass('block-selection');
	            doc.off('mousemove', this.handleKnobPositionChange);
	            doc.off('mouseup', this.mouseUp);
	            this.reportUIChange({ value: this.state.value, value_change_origin: 'Slider' });
	            if (this.props.onSlideEnd) {
	                this.props.onSlideEnd();
	            }
	        },

	        mouseDown: function mouseDown(e) {
	            $(document.body).addClass('block-selection');
	            var doc = $(document);
	            doc.off('mousemove', this.handleKnobPositionChange);
	            doc.off('mouseup', this.mouseUp);

	            var sliderContainer = $(this.refs.slider.getDOMNode());

	            this.sliderX = sliderContainer.offset().left;
	            this.sliderWidth = sliderContainer.width() - 2 * sliderRadius; // this compensates for slider size

	            this.handleKnobPositionChange(e);

	            doc.on('mousemove', this.handleKnobPositionChange);
	            doc.on('mouseup', this.mouseUp);
	        },

	        handleChange: function handleChange(newVal) {
	            if (this.state.value !== newVal) {
	                this.setState({ value: newVal });
	                this.callOnChangeIfExists(newVal);
	            }
	        },

	        handleStepperChange: function handleStepperChange(newVal) {
	            newVal = normalizeNumber(newVal, this.getStepperMin(), this.getStepperMax(), this.props.step);
	            this.handleChange(newVal);
	            this.reportUIChange({ value: newVal, value_change_origin: 'Input' });
	        },

	        getStepperMax: function getStepperMax(optionalProps) {
	            var stepperMax;

	            if (optionalProps) {
	                stepperMax = optionalProps.stepperMax || optionalProps.max;
	            }

	            if (!stepperMax) {
	                stepperMax = this.props.stepperMax || this.props.max;
	            }

	            return stepperMax;
	        },

	        getStepperMin: function getStepperMin(optionalProps) {
	            var stepperMin;

	            if (optionalProps) {
	                stepperMin = optionalProps.stepperMin;
	                if (isNaN(stepperMin)) {
	                    stepperMin = optionalProps.min;
	                }
	            }

	            if (isNaN(stepperMin)) {
	                stepperMin = this.props.stepperMin;
	                if (isNaN(stepperMin)) {
	                    stepperMin = this.props.min;
	                }
	            }

	            return stepperMin;
	        },

	        componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	            var valueFromProps = this.getSliderValue(nextProps);
	            if (valueFromProps !== this.state.value) {
	                var newVal = normalizeNumber(valueFromProps, this.getStepperMin(nextProps), this.getStepperMax(nextProps), nextProps.step || this.props.step);
	                this.setState({ value: newVal });
	            }
	        },

	        getTopLevelProps: function getTopLevelProps() {
	            return _.omit(this.props, ['min', 'max', 'value', 'units', 'defaultValue', 'onChange', 'step']);
	        },

	        render: template
	    });

	    return slider;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 58 */
/*!********************!*\
  !*** external "$" ***!
  \********************/
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_58__;

/***/ },
/* 59 */
/*!**************************************************!*\
  !*** ./js/baseUI/panelInputs/normalizeNumber.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    'use strict';

	    function alignNumberToStep(num, step) {
	        if (num % step) {
	            num = Math.round(num / step) * step;
	        }
	        return num;
	    }

	    function fixNotANumber(num) {
	        if (isNaN(num)) {
	            num = 0;
	        }
	        return num;
	    }

	    function validateBoundaries(num, min, max) {
	        if (num > max) {
	            num = max;
	        } else if (num < min) {
	            num = min;
	        }
	        return num;
	    }

	    function limitDecimalPoint(num) {
	        if (num !== Math.round(num)) {
	            num = num.toFixed(2);

	            if (num.charAt(num.length - 1) === '0') {
	                num = num.slice(0, num.length - 1);
	            }
	        }
	        return Number(num);
	    }

	    function normalizeNumber(value, min, max, step) {
	        if (value === '') {
	            return min;
	        }
	        var num = Number(value);
	        num = fixNotANumber(num);
	        num = alignNumberToStep(num, step);
	        num = validateBoundaries(num, min, max);
	        num = limitDecimalPoint(num);
	        return num;
	    }

	    return normalizeNumber;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 60 */
/*!*****************************************!*\
  !*** ./js/baseUI/panelInputs/slider.rt ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 2),
	    __webpack_require__(/*! lodash */ 4),
	    __webpack_require__(/*! baseUI/panelInputs/stepper */ 61),
	    __webpack_require__(/*! baseUI/controls/infoIcon */ 11)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, stepper, infoIcon) {
	    'use strict';
	    return function () {
	        return React.createElement('div', _.assign({}, {
	            'className': _.keys(_.pick({
	                'input-slider': true,
	                'has-label': this.hasLabel(),
	                disabled: this.isDisabled()
	            }, _.identity)).join(' ')
	        }, this.getTopLevelProps()), React.createElement('label', { 'className': 'label' }, this.translateIfNeeded(this.getLabel())), this.hasLabel() && (this.props.infoText || this.props.infoText) ? React.createElement(infoIcon, {
	            'key': 'tooltip',
	            'title': this.props.infoTitle,
	            'text': this.props.infoText,
	            'size': 18
	        }) : null, React.createElement('div', { 'className': 'clearfix sliderArea' }, React.createElement('div', { 'className': 'sliderContainer' }, React.createElement(stepper, {
	            'className': _.keys(_.pick({ 'small': this.props.isSmallStepper }, _.identity)).join(' '),
	            'disabled': this.props.disabled,
	            'min': this.getStepperMin(),
	            'max': this.getStepperMax(),
	            'value': this.state.value,
	            'units': this.props.units,
	            'step': this.props.step,
	            'onChange': this.handleStepperChange
	        }), React.createElement('div', {
	            'className': 'slider',
	            'ref': 'slider',
	            'onMouseDown': this.mouseDown
	        }, React.createElement('div', { 'className': 'line' }), React.createElement('div', { 'className': 'knobContainer' }, React.createElement('div', {
	            'className': 'coloredLine',
	            'style': { width: 'calc(' + (this.getValueInPercent() + '% + 3px') + ')' }
	        }), React.createElement('div', {
	            'className': 'sliderKnob',
	            'style': { left: 'calc(' + (this.getValueInPercent() + '%') + ')' }
	        }))))));
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 61 */
/*!******************************************!*\
  !*** ./js/baseUI/panelInputs/stepper.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! lodash */ 4), __webpack_require__(/*! jquery */ 58), __webpack_require__(/*! react */ 2), __webpack_require__(/*! util */ 17), __webpack_require__(/*! baseUI/panelInputs/inputMixin */ 37), __webpack_require__(/*! baseUI/panelInputs/normalizeNumber */ 59), __webpack_require__(/*! baseUI/panelInputs/stepper.rt */ 62)], __WEBPACK_AMD_DEFINE_RESULT__ = function (_, $, React, util, inputMixin, normalizeNumber, template) {
	    'use strict';

	    var DOWN = 40;
	    var UP = 38;
	    var ENTER = 13;
	    var ESC = 27;

	    var stepper = React.createClass({

	        displayName: 'stepper',
	        mixins: [inputMixin],
	        propTypes: {
	            min: React.PropTypes.number,
	            max: React.PropTypes.number,
	            step: React.PropTypes.number,
	            units: React.PropTypes.string
	        },

	        getDefaultProps: function getDefaultProps() {
	            return {
	                max: 100,
	                min: 0,
	                step: 1,
	                units: ''
	            };
	        },

	        getInitialState: function getInitialState() {
	            var value = this.getValueFromProps();
	            return {
	                value: normalizeNumber(value !== undefined ? Number(value) : 0, this.props.min, this.props.max, this.props.step),
	                edited: false
	            };
	        },
	        handleKeyDown: function handleKeyDown(e) {
	            var keyCode = e.keyCode;
	            if (keyCode === ENTER) {
	                e.preventDefault();
	                this.refs.input.getDOMNode().blur();
	            }
	            if (keyCode === ESC) {
	                e.preventDefault();
	                this.handleCancel();
	            }
	            if (keyCode === UP) {
	                e.preventDefault();
	                this.changeValueByStep(true);
	            }
	            if (keyCode === DOWN) {
	                e.preventDefault();
	                this.changeValueByStep(false);
	            }
	        },

	        getWrapperClasses: function getWrapperClasses() {

	            var classes = {
	                'input-stepper': true,
	                'disabled': this.isDisabled(),
	                'edited': this.state.edited,
	                'has-units': this.props.units
	            };

	            if (this.props.className) {
	                classes[this.props.className] = true;
	            }

	            return classes;
	        },
	        changeValueByStep: function changeValueByStep(isIncrease) {

	            var newVal = isIncrease ? parseFloat(this.state.value) + this.props.step : this.state.value - this.props.step;
	            newVal = normalizeNumber(newVal, this.props.min, this.props.max, this.props.step);
	            this.acceptChanges(newVal);
	        },

	        isTemporaryValue: function isTemporaryValue(value) {
	            var temporaryValue = ['.', '-'];
	            return _.contains(temporaryValue, value);
	        },

	        handleChange: function handleChange(e) {

	            var enteredValue = e.target.value;

	            if (!/^-?[0-9]*(\.[0-9]*)?$/.test(enteredValue)) {
	                return;
	            }

	            this.setState({ value: enteredValue });
	        },
	        handleCancel: function handleCancel() {
	            var latestValue = this.getValueFromProps();
	            var self = this;
	            this.setState({ value: latestValue }, function () {
	                self.refs.input.getDOMNode().blur();
	            });
	        },

	        handleBlur: function handleBlur() {
	            this.setState({ edited: false });
	            if (this.props.disabled) {
	                return;
	            }

	            var newVal = normalizeNumber(this.state.value, this.props.min, this.props.max, this.props.step);
	            if (!this.isTemporaryValue(this.state.value)) {
	                this.acceptChanges(newVal);
	            } else {
	                this.acceptChanges(this.getValueFromProps());
	            }
	        },
	        getStepperValue: function getStepperValue(props) {
	            var value = this.getValueFromProps(props);
	            if (!_.isUndefined(value)) {
	                return parseFloat(value);
	            }
	            return value;
	        },
	        componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	            var valueFromProps = this.getStepperValue(nextProps);
	            if (valueFromProps !== this.state.value) {
	                var newVal = normalizeNumber(valueFromProps, isNaN(nextProps.min) ? this.props.min : nextProps.min, nextProps.max || this.props.max, nextProps.step || this.props.step);
	                this.setState({ value: newVal });
	            }
	        },

	        onFocus: function onFocus() {
	            var $input = $(this.refs.input.getDOMNode());
	            this.setState({ edited: true }, function () {
	                $input.select().one('mouseup', function (e) {
	                    e.preventDefault();
	                });
	            });
	        },
	        acceptChanges: function acceptChanges(value) {
	            this.setState({ value: value });
	            this.callOnChangeIfExists(value);
	        },

	        render: template
	    });

	    return stepper;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 62 */
/*!******************************************!*\
  !*** ./js/baseUI/panelInputs/stepper.rt ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 2),
	    __webpack_require__(/*! lodash */ 4),
	    __webpack_require__(/*! util */ 17)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, util) {
	    'use strict';
	    function onClick1() {
	        this.refs.input.getDOMNode().focus();
	    }
	    function onFocus2() {
	        this.onFocus();
	    }
	    function onBlur3() {
	        this.handleBlur();
	    }
	    return function () {
	        return React.createElement('div', {
	            'className': _.keys(_.pick(this.getWrapperClasses(), _.identity)).join(' '),
	            'onClick': onClick1.bind(this)
	        }, React.createElement('input', {
	            'ref': 'input',
	            'className': 'input',
	            'type': 'text',
	            'value': this.state.value,
	            'disabled': !!this.props.disabled,
	            'readOnly': !this.state.edited,
	            'maxLength': '8',
	            'step': this.props.step,
	            'onChange': this.handleChange,
	            'onKeyDown': this.handleKeyDown,
	            'onFocus': onFocus2.bind(this),
	            'onBlur': onBlur3.bind(this)
	        }), this.props.units ? React.createElement('span', {
	            'className': 'units',
	            'key': 'units'
	        }, this.props.units) : null);
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 63 */
/*!***************************************************!*\
  !*** ./js/baseUI/colorPicker/colorPickerInput.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 2), __webpack_require__(/*! lodash */ 4), __webpack_require__(/*! util */ 17), __webpack_require__(/*! baseUI/panelInputs/inputMixin */ 37), __webpack_require__(/*! baseUI/colorPicker/colorPickerInput.rt */ 64)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, util, inputMixin, template) {
	    'use strict';

	    return React.createClass({
	        mixins: [inputMixin],
	        displayName: 'colorPickerInput',
	        getInitialState: function getInitialState() {
	            return {
	                forceHighlight: false
	            };
	        },
	        propTypes: {
	            useMouseEvent: React.PropTypes.bool,
	            position: React.PropTypes.object,
	            openColorPicker: React.PropTypes.func.isRequired,
	            colorResolver: React.PropTypes.func, //so that we can support theme color pointers, e.g. 'color_9'
	            previewOnHover: React.PropTypes.bool // Defaults to true
	        },
	        getDefaultProps: function getDefaultProps() {
	            return {
	                colorResolver: _.identity //so that we don't need to pass resolveColor when using the colorpicker for basic colors
	            };
	        },
	        openColorPicker: function openColorPicker(event) {
	            this.setState({
	                forceHighlight: true
	            });
	            var position = this.props.position;
	            if (!position && this.props.useMouseEvent) {
	                position = { top: event.clientY, left: event.clientX };
	            }
	            this.props.openColorPicker(this.handleChange, this.getValueFromProps(), true, position, this.props.previewOnHover !== false, this.props.enableHistory, this.onColorPickerClose);
	        },
	        handleChange: function handleChange(newValue) {
	            this.callOnChangeIfExists(newValue);
	        },
	        resolveColor: function resolveColor() {
	            return this.props.colorResolver(this.getValueFromProps());
	        },
	        getOpacity: function getOpacity() {
	            var opacity = 1;
	            if (_.isNumber(this.props.opacity)) {
	                opacity = this.props.opacity;
	            }
	            return opacity;
	        },
	        unHighlight: function unHighlight() {
	            if (this.isMounted()) {
	                this.setState({
	                    forceHighlight: false
	                });
	            }
	        },
	        onColorPickerClose: function onColorPickerClose() {
	            if (this.isMounted()) {
	                // in case both color picker panel and input became unmounted at the same time
	                this.unHighlight();
	            }
	        },
	        render: template
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 64 */
/*!***************************************************!*\
  !*** ./js/baseUI/colorPicker/colorPickerInput.rt ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 2),
	    __webpack_require__(/*! lodash */ 4),
	    __webpack_require__(/*! util */ 17)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, util) {
	    'use strict';
	    return function () {
	        return React.createElement('div', {
	            'onClick': this.openColorPicker,
	            'className': this.getClassName('color-picker-input') + (this.props.label ? ' with-label' : '')
	        }, this.props.label ? React.createElement('label', {
	            'className': 'color-picker-label',
	            'key': 'colorPickerLabel'
	        }, util.translate(this.props.label)) : null, React.createElement('div', {
	            'className': _.keys(_.pick({
	                'color-picker-wrapper': true,
	                disabled: this.props.disabled,
	                colorPickerOpen: this.state.forceHighlight
	            }, _.identity)).join(' ')
	        }, React.createElement('div', {
	            'className': 'color-picker-color',
	            'style': {
	                backgroundColor: this.resolveColor(),
	                opacity: this.getOpacity()
	            }
	        })));
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 65 */
/*!****************************************************************!*\
  !*** ./js/baseUI/colorPicker/colorPickerInputWithOpacity.scss ***!
  \****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/sass-loader?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./colorPickerInputWithOpacity.scss */ 66);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 41)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./colorPickerInputWithOpacity.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./colorPickerInputWithOpacity.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 66 */
/*!**********************************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./js/baseUI/colorPicker/colorPickerInputWithOpacity.scss ***!
  \**********************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 40)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n.color-picker-input-with-opacity {\n  position: relative; }\n  .color-picker-input-with-opacity .color-picker-input-with-opacity-label {\n    display: block;\n    font-size: 14px;\n    color: #2b5672;\n    overflow: hidden;\n    font-family: HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n    text-overflow: ellipsis; }\n    .color-picker-input-with-opacity .color-picker-input-with-opacity-label.disabled {\n      opacity: 0.5; }\n  .color-picker-input-with-opacity .color-picker-input-with-opacity-slider {\n    position: relative; }\n  .color-picker-input-with-opacity .input-slider {\n    margin-right: 40px; }\n  .color-picker-input-with-opacity .color-picker-input {\n    position: absolute;\n    right: 0;\n    top: 2px; }\n", ""]);

	// exports


/***/ },
/* 67 */
/*!*****************************************************!*\
  !*** ./js/baseUI/colorPicker/colorPickerInput.scss ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/sass-loader?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./colorPickerInput.scss */ 68);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 41)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./colorPickerInput.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./colorPickerInput.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 68 */
/*!***********************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./js/baseUI/colorPicker/colorPickerInput.scss ***!
  \***********************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 40)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n.color-picker-input {\n  position: relative; }\n  .color-picker-input .color-picker-wrapper.disabled {\n    opacity: 0.4; }\n  .color-picker-input .color-picker-wrapper {\n    width: 30px;\n    height: 30px;\n    border: 1px solid #cacaca;\n    box-sizing: border-box;\n    border-radius: 8px;\n    background-size: 20px 20px;\n    background-image: linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%, #ccc), linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%, #ccc);\n    background-position: 5px 5px, 15px 15px;\n    position: relative;\n    cursor: pointer;\n    overflow: hidden; }\n    .color-picker-input .color-picker-wrapper .color-picker-color {\n      position: absolute;\n      top: 0;\n      left: 0;\n      bottom: 0;\n      right: 0; }\n    .color-picker-input .color-picker-wrapper:hover {\n      border: 2px solid #7fccf7; }\n    .color-picker-input .color-picker-wrapper.colorPickerOpen {\n      border: 2px solid #7fccf7; }\n  .color-picker-input .color-picker-label {\n    font-family: HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n    font-size: 14px;\n    color: #2b5672;\n    height: 30px;\n    line-height: 30px;\n    cursor: pointer; }\n    .color-picker-input .color-picker-label:hover + .color-picker-wrapper {\n      border: 2px solid #7fccf7; }\n    .color-picker-input .color-picker-label ~ .color-picker-wrapper {\n      position: absolute;\n      right: 0;\n      top: 0; }\n", ""]);

	// exports


/***/ },
/* 69 */
/*!************************************************!*\
  !*** ./js/baseUI/colorPicker/colorFormat.scss ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/sass-loader?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./colorFormat.scss */ 70);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 41)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./colorFormat.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./colorFormat.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 70 */
/*!******************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./js/baseUI/colorPicker/colorFormat.scss ***!
  \******************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 40)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n.color-format .color-values-wrapper {\n  position: relative;\n  margin: 18px 17px 12px 17px;\n  max-height: 24px; }\n  .color-format .color-values-wrapper .color-value-hex {\n    width: 175px;\n    margin: 0 auto 0 auto; }\n    .color-format .color-values-wrapper .color-value-hex .control-text-input input {\n      padding-left: 62px;\n      height: 24px;\n      line-height: 24px;\n      font-family: HelveticaNeueW01-55Roma, HelveticaNeueW02-55Roma, HelveticaNeueW10-55Roma, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n      font-size: 14px; }\n    .color-format .color-values-wrapper .color-value-hex .control-text-input::before {\n      content: \"#\";\n      position: absolute;\n      left: 55px;\n      top: 4px;\n      font-family: HelveticaNeueW01-55Roma, HelveticaNeueW02-55Roma, HelveticaNeueW10-55Roma, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n      font-size: 14px; }\n    .color-format .color-values-wrapper .color-value-hex .control-text-input .validation-icon {\n      top: 0; }\n  .color-format .color-values-wrapper .color-value-item {\n    position: relative;\n    display: inline-block;\n    width: 33%; }\n    .color-format .color-values-wrapper .color-value-item:nth-child(1) {\n      text-align: left; }\n    .color-format .color-values-wrapper .color-value-item:nth-child(2) {\n      text-align: center; }\n    .color-format .color-values-wrapper .color-value-item:nth-child(3) {\n      text-align: right; }\n    .color-format .color-values-wrapper .color-value-item .input-stepper {\n      width: 100%;\n      box-sizing: border-box; }\n      .color-format .color-values-wrapper .color-value-item .input-stepper input {\n        height: 24px;\n        line-height: 24px;\n        font-family: HelveticaNeueW01-55Roma, HelveticaNeueW02-55Roma, HelveticaNeueW10-55Roma, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n        font-size: 14px; }\n      .color-format .color-values-wrapper .color-value-item .input-stepper .units {\n        height: 24px;\n        line-height: 24px; }\n", ""]);

	// exports


/***/ },
/* 71 */
/*!*********************************************************!*\
  !*** ./js/wix-ui-react/components/switches/checkbox.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(/*! react */ 2);
	var _ = __webpack_require__(/*! lodash */ 4);
	var Wix = __webpack_require__(/*! Wix */ 7);
	__webpack_require__(/*! symbols/svg/toggles/checkbox.scss */ 72);
	var template = __webpack_require__(/*! wix-ui-react/components/switches/checkbox.rt */ 74);

	module.exports = React.createClass({

	    displayName: 'Checkbox',
	    propTypes: {
	        label: React.PropTypes.string,
	        defaultValue: React.PropTypes.string,
	        labelAfterSymbol: React.PropTypes.bool,
	        disabled: React.PropTypes.bool,
	        style: React.PropTypes.string
	    },

	    getInitialState: function getInitialState() {
	        var bool = false;
	        if (_.isString(this.props.defaultValue) && this.props.defaultValue === 'true') {
	            bool = true;
	        }
	        return {
	            checked: bool
	        };
	    },

	    enable: function enable() {
	        this.setProps({ disabled: false });
	    },

	    disable: function disable() {
	        this.setProps({ disabled: true });
	    },

	    componentDidMount: function componentDidMount() {
	        if (Wix.Utils.getViewMode() !== 'standalone') {
	            var wixParam = this.props['wix-param'];
	            Wix.Styles.getStyleParams((function (styleParams, callback) {
	                var bool = styleParams.booleans[wixParam];
	                if (_.isBoolean(bool)) {
	                    this.setState({
	                        checked: bool
	                    }, callback);
	                } else {
	                    var defaultValue = this.state.checked;
	                    this.setState({
	                        checked: defaultValue
	                    }, callback);
	                }
	            }).bind(this));
	        }
	    },

	    handleChange: function handleChange(newValue) {
	        this.setState({
	            checked: newValue
	        }, function () {
	            var wixParam = this.props['wix-param'];
	            if (wixParam) {
	                Wix.Styles.setBooleanParam(wixParam, {
	                    value: newValue
	                });
	            }
	        });

	        if (this.props.onChange && _.isFunction(this.props.onChange)) {
	            this.props.onChange.call(this, newValue);
	        }
	    },

	    render: template
	});

/***/ },
/* 72 */
/*!**********************************************!*\
  !*** ./js/symbols/svg/toggles/checkbox.scss ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(/*! !./../../../../~/css-loader!./../../../../~/sass-loader?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./checkbox.scss */ 73);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../../~/style-loader/addStyles.js */ 41)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./checkbox.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./checkbox.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 73 */
/*!****************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./js/symbols/svg/toggles/checkbox.scss ***!
  \****************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../../~/css-loader/lib/css-base.js */ 40)();
	// imports


	// module
	exports.push([module.id, ".control-checkbox .symbol-checkbox {\n  vertical-align: top; }\n  .control-checkbox .symbol-checkbox .bg {\n    fill: #fff; }\n  .control-checkbox .symbol-checkbox .border {\n    fill: #3899ec; }\n  .control-checkbox .symbol-checkbox .check,\n  .control-checkbox .symbol-checkbox .minus {\n    fill: transparent; }\n  .show-on-all-pages .border {\n    fill: #fb7d33; }\n\n.control-checkbox .label-checkbox {\n  color: #162d3d;\n  margin: 0 13px; }\n\n.control-checkbox .info-checkbox {\n  position: absolute;\n  right: 12px;\n  top: 1px; }\n\n.control-checkbox:hover .symbol-checkbox .bg {\n  fill: #d3edff; }\n\n.show-on-all-pages .bg {\n  fill: #fee5d6; }\n\n.control-checkbox:active .symbol-checkbox .bg {\n  fill: #fff; }\n\n.control-checkbox .input-checkbox:disabled ~ .symbol-checkbox {\n  pointer-events: none; }\n  .control-checkbox .input-checkbox:disabled ~ .symbol-checkbox .bg {\n    fill: #f0f0f0; }\n  .control-checkbox .input-checkbox:disabled ~ .symbol-checkbox .border {\n    fill: #e3e3e3; }\n\n.control-checkbox .input-checkbox:checked ~ .symbol-checkbox .bg,\n.control-checkbox .input-checkbox:checked ~ .symbol-checkbox .border {\n  fill: #3899ec; }\n\n.control-checkbox .input-checkbox:checked ~ .symbol-checkbox .check {\n  fill: #fff; }\n\n.control-checkbox .input-checkbox:checked ~ .symbol-checkbox .minus {\n  fill: transparent; }\n\n.show-on-all-pages .bg,\n.show-on-all-pages .border {\n  fill: #fb7d33; }\n\n.control-checkbox:hover .input-checkbox:not(:disabled):checked ~ .symbol-checkbox .bg,\n.control-checkbox:hover .input-checkbox:not(:disabled):checked ~ .symbol-checkbox .border {\n  fill: #4eb7f5; }\n\n.show-on-all-pages .bg,\n.show-on-all-pages .border {\n  fill: #fc975c; }\n\n.control-checkbox:active .input-checkbox:checked ~ .symbol-checkbox .bg,\n.control-checkbox:active .input-checkbox:checked ~ .symbol-checkbox .border {\n  fill: #3899ec; }\n\n.control-checkbox .input-checkbox:checked:disabled ~ .symbol-checkbox {\n  pointer-events: none; }\n  .control-checkbox .input-checkbox:checked:disabled ~ .symbol-checkbox .bg {\n    fill: #e3e3e3; }\n  .control-checkbox .input-checkbox:checked:disabled ~ .symbol-checkbox .border {\n    fill: #e0e0e0; }\n\n.control-checkbox .input-checkbox[data-indeterminate=\"true\"] ~ .symbol-checkbox .bg {\n  fill: #fff; }\n\n.control-checkbox .input-checkbox[data-indeterminate=\"true\"] ~ .symbol-checkbox .border,\n.control-checkbox .input-checkbox[data-indeterminate=\"true\"] ~ .symbol-checkbox .minus {\n  fill: #3899ec; }\n\n.control-checkbox .input-checkbox[data-indeterminate=\"true\"] ~ .symbol-checkbox .check {\n  fill: transparent; }\n\n.control-checkbox:hover .input-checkbox[data-indeterminate=\"true\"] ~ .symbol-checkbox .bg {\n  fill: #d3edff; }\n\n.control-checkbox:active .input-checkbox[data-indeterminate=\"true\"] ~ .symbol-checkbox .bg {\n  fill: #fff; }\n\n.control-checkbox .input-checkbox[data-indeterimnate=\"true\"]:disabled ~ .symbol-checkbox {\n  pointer-events: none; }\n  .control-checkbox .input-checkbox[data-indeterimnate=\"true\"]:disabled ~ .symbol-checkbox .bg {\n    fill: #e2e2e2; }\n  .control-checkbox .input-checkbox[data-indeterimnate=\"true\"]:disabled ~ .symbol-checkbox .border,\n  .control-checkbox .input-checkbox[data-indeterimnate=\"true\"]:disabled ~ .symbol-checkbox .minus {\n    fill: #e3e3e3; }\n", ""]);

	// exports


/***/ },
/* 74 */
/*!*********************************************************!*\
  !*** ./js/wix-ui-react/components/switches/checkbox.rt ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 2),
	    __webpack_require__(/*! lodash */ 4),
	    __webpack_require__(/*! baseUI/controls/toggle */ 75)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, toggle) {
	    'use strict';
	    return function () {
	        return React.createElement(toggle, {
	            'name': 'checkbox',
	            'label': this.props.label,
	            'labelAfterSymbol': this.props.labelAfterSymbol,
	            'disabled': this.props.disabled,
	            'className': this.props.className,
	            'value': this.state.checked,
	            'onChange': this.handleChange
	        });
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 75 */
/*!**************************************!*\
  !*** ./js/baseUI/controls/toggle.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 2), __webpack_require__(/*! lodash */ 4), __webpack_require__(/*! baseUI/controls/toggleMixin */ 76), __webpack_require__(/*! baseUI/controls/toggle.rt */ 77)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, booleanMixin, template) {
	    'use strict';

	    return React.createClass({
	        displayName: 'boolean',
	        propTypes: {
	            name: React.PropTypes.string,
	            label: React.PropTypes.string,
	            infoText: React.PropTypes.string,
	            infoTitle: React.PropTypes.string,
	            shouldDisplayInfoIcon: React.PropTypes.bool,
	            infoAlignment: React.PropTypes.string,
	            infoFitToBounds: React.PropTypes.bool,
	            disabled: React.PropTypes.bool,
	            labelAfterSymbol: React.PropTypes.bool,
	            shouldTranslate: React.PropTypes.bool
	        },
	        mixins: [booleanMixin],
	        getDefaultProps: function getDefaultProps() {
	            return {
	                name: 'switch'
	            };
	        },
	        render: template
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 76 */
/*!*******************************************!*\
  !*** ./js/baseUI/controls/toggleMixin.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 2), __webpack_require__(/*! baseUI/panelInputs/inputMixin */ 37), __webpack_require__(/*! util */ 17), __webpack_require__(/*! baseUI/mixins/reportUIChangeMixin */ 31)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, inputMixin, util, reportUIChangeMixin) {
	    'use strict';

	    var translationMixin = util.translationMixin;

	    return {
	        mixins: [inputMixin, reportUIChangeMixin, translationMixin],
	        contextTypes: {
	            reportUIChange: React.PropTypes.func
	        },
	        handleChange: function handleChange() {
	            var newVal = !this.getValueFromProps(this.props);
	            this.reportUIChange({ value: newVal });
	            this.callOnChangeIfExists(newVal);
	        }
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 77 */
/*!**************************************!*\
  !*** ./js/baseUI/controls/toggle.rt ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 2),
	    __webpack_require__(/*! lodash */ 4),
	    __webpack_require__(/*! symbols */ 26),
	    __webpack_require__(/*! util */ 17)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, symbols, util) {
	    'use strict';
	    function onChange1(e) {
	        this.handleChange(e);
	    }
	    return function () {
	        return React.createElement('label', { 'className': 'boolean-control ' + this.getClassName('control-' + this.props.name) }, React.createElement('input', {
	            'className': 'input-' + this.props.name,
	            'type': 'checkbox',
	            'checked': this.getValueFromProps(this.props),
	            'disabled': !!this.props.disabled,
	            'data-indeterminate': !!this.props.indeterminate,
	            'onChange': onChange1.bind(this)
	        }), this.props.label && !this.props.labelAfterSymbol ? React.createElement('span', {
	            'key': 'labelBefore',
	            'className': 'label label-' + this.props.name
	        }, this.translateIfNeeded(this.props.label)) : null, React.createElement(symbols.symbol, { 'name': this.props.name }), this.props.label && this.props.labelAfterSymbol ? React.createElement('span', {
	            'key': 'labelAfter',
	            'className': 'label label-' + this.props.name
	        }, this.translateIfNeeded(this.props.label)) : null, this.props.shouldDisplayInfoIcon ? React.createElement(infoIcon, {
	            'className': 'info-' + this.props.name,
	            'key': 'infoIcon',
	            'title': this.props.infoTitle,
	            'text': this.props.infoText,
	            'alignment': this.props.infoAlignment,
	            'fitToBounds': this.props.infoFitToBounds
	        }) : null);
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 78 */
/*!*********************************************************!*\
  !*** ./js/wix-ui-react/components/dropDown/dropDown.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var dropDownOption = __webpack_require__(/*! baseUI/panelInputs/dropDown/option */ 79);
	var dropDownOptions = __webpack_require__(/*! baseUI/panelInputs/dropDown/options */ 81);
	var dropDownSelect = __webpack_require__(/*! baseUI/panelInputs/dropDown/select */ 84);

	__webpack_require__(/*! baseUI/panelInputs/dropDown/dropDown.scss */ 88);

	module.exports = {
	    select: dropDownSelect,
	    option: dropDownOption,
	    options: dropDownOptions
	};

/***/ },
/* 79 */
/*!**************************************************!*\
  !*** ./js/baseUI/panelInputs/dropDown/option.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 2), __webpack_require__(/*! util */ 17), __webpack_require__(/*! baseUI/mixins/classNameMixin */ 30), __webpack_require__(/*! baseUI/panelInputs/dropDown/dropdownManager */ 80)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, util, classNameMixin, dropdownManager) {
	    'use strict';

	    return React.createClass({
	        displayName: 'option',

	        mixins: [classNameMixin, util.translationMixin],

	        propTypes: {
	            value: React.PropTypes.any,
	            index: React.PropTypes.number,
	            autotranslate: React.PropTypes.bool
	        },

	        getDefaultProps: function getDefaultProps() {
	            return {
	                type: 'option'
	            };
	        },

	        getInitialState: function getInitialState() {
	            return {
	                selected: dropdownManager.getSelectedIndex() === this.props.index,
	                hovered: this.props.hovered
	            };
	        },

	        componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	            var newVal = nextProps.value;
	            var nextState = {};

	            if (this.props.value !== newVal) {
	                nextState.value = newVal;
	            }

	            nextState.selected = dropdownManager.getSelectedIndex() === this.props.index;
	            this.setState(nextState);
	        },

	        select: function select() {
	            dropdownManager.select(this);
	        },

	        getData: function getData() {
	            return {
	                value: this.props.value,
	                index: this.props.index,
	                content: this.content
	            };
	        },

	        hover: function hover() {
	            this.setState({
	                hovered: true
	            });
	        },

	        unhover: function unhover() {
	            this.setState({
	                hovered: false
	            });
	        },

	        onMouseEnter: function onMouseEnter() {
	            dropdownManager.setHovered(this);
	        },

	        render: function render() {
	            var className = 'option';

	            this.content = this.props.children || '';

	            if (this.state.selected) {
	                className += ' selected';
	            } else if (this.state.hovered || this.props.hovered) {
	                className += ' hovered';
	            }

	            if (this.props.autotranslate && typeof this.content === 'string') {
	                this.content = this.translateIfNeeded(this.content.trim());
	            }

	            dropdownManager.addOption(this);

	            return React.DOM.li({
	                onClick: this.select,
	                className: this.generateClassName(className),
	                style: this.props.style,
	                onMouseEnter: this.onMouseEnter,
	                onMouseLeave: this.unhover
	            }, this.content);
	        }
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 80 */
/*!***********************************************************!*\
  !*** ./js/baseUI/panelInputs/dropDown/dropdownManager.js ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! lodash */ 4)], __WEBPACK_AMD_DEFINE_RESULT__ = function (_) {
	    'use strict';

	    var state = {
	        optionsComponent: null,
	        selectedIndex: null,
	        currentDropdown: null,
	        currentOptionsList: null,
	        hoveredOption: null,
	        isOptionsVisible: false // synchronous state, which shows the options visibility. Added due to a setState in React is async
	    };

	    return {
	        INDENT_FROM_EDGE: 12,
	        defaultScrollSpeed: 5,
	        MIN_LIST_HEIGHT: 180,
	        keyboardContext: 'dropdown',

	        controlKeys: [27, // esc
	        32, // space
	        13, // enter
	        38, // arrow up
	        40 // arrow down
	        ],

	        setState: function setState(name, value) {
	            if (typeof name === 'string') {
	                state[name] = value;
	            } else if (typeof name === 'object') {
	                _.forEach(name, function (val, prop) {
	                    state[prop] = val;
	                });
	            }

	            return state;
	        },

	        reset: function reset() {
	            this.setState({
	                optionsComponent: null,
	                selectedIndex: null,
	                currentDropdown: null,
	                currentOptionsList: null,
	                hoveredOption: null,
	                isOptionsVisible: false
	            });
	        },

	        registerOptionsComponent: function registerOptionsComponent(optsComp) {
	            return this.setState('optionsComponent', optsComp);
	        },

	        addOption: function addOption(option) {
	            if (state.currentOptionsList.indexOf(option) === -1) {
	                state.currentOptionsList.push(option);
	            }
	        },

	        toggle: function toggle(dropdownComponent) {
	            var optsComp = state.optionsComponent;

	            if (optsComp) {
	                var isOptionsHidden = !state.isOptionsVisible;

	                if (isOptionsHidden) {
	                    if (dropdownComponent) {
	                        var dropdownData = dropdownComponent.getData();

	                        this.setState({
	                            selectedIndex: dropdownData.selectedIndex,
	                            currentDropdown: dropdownComponent,
	                            currentOptionsList: [],
	                            isOptionsVisible: true
	                        });

	                        dropdownComponent.setExpanded(isOptionsHidden);
	                        optsComp.show(dropdownData);
	                    }
	                } else {
	                    if (dropdownComponent) {
	                        dropdownComponent.setExpanded(isOptionsHidden);
	                    } else if (state.currentDropdown) {
	                        state.currentDropdown.setExpanded(isOptionsHidden);
	                    }

	                    this.hide();
	                }
	            }
	        },

	        hide: function hide() {
	            this.setState('isOptionsVisible', false);
	            state.optionsComponent.hide();
	        },

	        getOptionsLocation: function getOptionsLocation() {
	            var optsComp = state.optionsComponent;
	            var dropdownComponent = state.currentDropdown;

	            //TODO: test and refactor
	            return dropdownComponent.getOptionsLocation(dropdownComponent.getDDEl(), optsComp.getOptionsListEl(), optsComp.getSelectedEl(dropdownComponent.state.selectedIndex), optsComp.getFooterEl());
	        },

	        select: function select(option) {
	            this.toggle();
	            state.currentDropdown.setSelected(option.getData());
	        },

	        getScrollData: function getScrollData(deltaY) {
	            var optionsComp = state.optionsComponent;
	            var currentDropdown = state.currentDropdown;

	            return currentDropdown.getScrollData ? currentDropdown.getScrollData(deltaY, optionsComp.getOptionsEl(), optionsComp.getOptionsListEl()) : null;
	        },

	        getViewportHeight: function getViewportHeight() {
	            return document.documentElement.clientHeight;
	        },

	        getSelectedIndex: function getSelectedIndex() {
	            return state.selectedIndex;
	        },

	        focusDropdown: function focusDropdown() {
	            if (state.currentDropdown && state.currentDropdown.isMounted()) {
	                state.currentDropdown.focus();
	            }
	        },

	        setHovered: function setHovered(option) {
	            if (state.hoveredOption) {
	                state.hoveredOption.unhover();
	            }

	            if (option) {
	                option.hover();
	            }

	            this.setState('hoveredOption', option);
	        },

	        getKeyboardHandlers: function getKeyboardHandlers() {
	            var self = this;

	            var preventNative = function preventNative(e) {
	                e.preventDefault();
	                e.stopPropagation();
	            };

	            var escape = function escape(e) {
	                self.toggle();
	                preventNative(e);
	            };

	            var select = function select(e) {
	                if (state.hoveredOption) {
	                    self.select(state.hoveredOption);
	                }

	                preventNative(e);
	            };

	            var hover = function hover(e) {
	                var keyCode = e.keyCode;

	                if (keyCode === 38 || keyCode === 40) {
	                    var hoveredOptIndex;
	                    var nextHoveredIndex;

	                    hoveredOptIndex = state.hoveredOption ? state.hoveredOption.props.index : state.selectedIndex;

	                    if (keyCode === 38) {
	                        nextHoveredIndex = hoveredOptIndex - 1;
	                    } else {
	                        nextHoveredIndex = hoveredOptIndex + 1;
	                    }

	                    if (nextHoveredIndex >= 0 && nextHoveredIndex < state.currentOptionsList.length) {
	                        self.setHovered(state.currentOptionsList[nextHoveredIndex]);
	                    }
	                }

	                preventNative(e);
	            };

	            return {
	                esc: escape,
	                enter: select,
	                space: select,
	                up: hover,
	                down: hover,
	                backspace: preventNative
	            };
	        },

	        isExpanded: function isExpanded(dropdown) {
	            return state.currentDropdown === dropdown && state.isOptionsVisible;
	        },

	        getFocusedElement: function getFocusedElement() {
	            return document.activeElement;
	        },

	        focus: function focus(el) {
	            var isOptions = el === state.optionsComponent.getOptionsEl();
	            var ddFocusEl = state.currentDropdown.getFocusEl();

	            if (isOptions && ddFocusEl) {
	                ddFocusEl.focus();
	            } else {
	                el.focus();
	            }
	        },

	        blur: function blur() {
	            if (state.currentDropdown.getFocusEl() !== this.getFocusedElement()) {
	                this.toggle();
	            }
	        }
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 81 */
/*!***************************************************!*\
  !*** ./js/baseUI/panelInputs/dropDown/options.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 2), __webpack_require__(/*! lodash */ 4), __webpack_require__(/*! util */ 17), __webpack_require__(/*! baseUI/panelInputs/dropDown/dropdownManager */ 80), __webpack_require__(/*! baseUI/panelInputs/dropDown/cacheMixin */ 82), __webpack_require__(/*! baseUI/panelInputs/dropDown/options.rt */ 83)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, util, dropdownManager, cacheMixin, template) {
	    'use strict';

	    var keyboardShortcuts = util.keyboardShortcuts;

	    function hasClass(className, el) {
	        return el.classList.contains(className);
	    }

	    function hasBottomOverflow(el) {
	        return el.offsetHeight + el.scrollTop + 1 < el.scrollHeight; // + 1 is a hack
	    }

	    function hasTopOverflow(el) {
	        return el.scrollTop > 0;
	    }

	    return React.createClass({
	        displayName: 'options',

	        mixins: [cacheMixin],

	        preventBlur: false,

	        render: template,

	        getInitialState: function getInitialState() {
	            this.updateCache({
	                optionalClasses: null,
	                initialKeyboardContext: '',
	                optionsElStyle: null
	            });

	            return {
	                visible: false,
	                className: '',
	                showScrollBar: false
	            };
	        },

	        getWindow: function getWindow() {
	            // this needed because of tests and phantom strange bug
	            return window;
	        },

	        componentDidMount: function componentDidMount() {
	            var windowObj = this.getWindow();

	            dropdownManager.registerOptionsComponent(this);
	            keyboardShortcuts.registerContext(dropdownManager.keyboardContext, dropdownManager.getKeyboardHandlers());

	            this.onWindowResize = (function () {
	                if (this.state.visible) {
	                    this.locate(dropdownManager.getOptionsLocation());

	                    if (!this.state.showScrollBar) {
	                        this.toggleScrollArrows();
	                    }
	                }
	            }).bind(this);

	            this.onWindowScroll = (function () {
	                if (this.state.visible) {
	                    this.hide();
	                }
	            }).bind(this);

	            windowObj.addEventListener('resize', this.onWindowResize);
	            windowObj.addEventListener('scroll', this.onWindowScroll);
	        },

	        shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
	            return nextState.visible !== undefined && nextState.visible !== this.state.visible || nextState.className !== undefined && nextState.className !== this.state.className;
	        },

	        componentDidUpdate: function componentDidUpdate() {
	            var optionsEl = this.getOptionsEl();

	            if (this.state.visible) {
	                this.locate(dropdownManager.getOptionsLocation());

	                if (this.state.showScrollBar) {
	                    this.hideScrollArrows();
	                } else {
	                    this.toggleScrollArrows();
	                }

	                dropdownManager.focus(optionsEl);
	            } else {
	                var optionalClasses = this.getCached('optionalClasses');

	                if (optionalClasses && optionalClasses.length) {
	                    optionalClasses.forEach(function (optionalClass) {
	                        optionsEl.classList.remove(optionalClass);
	                    });

	                    this.updateCache('optionalClasses', null);
	                }
	            }
	        },

	        componentWillUnmount: function componentWillUnmount() {
	            var windowObj = this.getWindow();

	            windowObj.removeEventListener('resize', this.onWindowResize);
	            windowObj.removeEventListener('scroll', this.onWindowScroll);
	            keyboardShortcuts.unregisterContext(dropdownManager.keyboardContext);
	        },

	        show: function show(dropdownData) {
	            this.updateCache({
	                options: dropdownData.options,
	                initialKeyboardContext: keyboardShortcuts.getContext(),
	                footer: dropdownData.footer
	            });

	            keyboardShortcuts.setContext(dropdownManager.keyboardContext);

	            this.setState({
	                visible: true,
	                className: dropdownData.className,
	                showScrollBar: dropdownData.showScrollBar
	            });

	            this.disableBrowserScroll();
	        },

	        hide: function hide() {
	            this.setState({ visible: false });
	            this.enableBrowserScroll();
	            this.resetOptionsElStyle();
	            dropdownManager.focusDropdown();
	            dropdownManager.setHovered(null);

	            if (keyboardShortcuts.getContext() === dropdownManager.keyboardContext) {
	                keyboardShortcuts.setContext(this.getCached('initialKeyboardContext'));
	            }
	        },

	        getOptionsListEl: function getOptionsListEl() {
	            return this.refs.list.getDOMNode();
	        },

	        getOptionsEl: function getOptionsEl() {
	            return this.refs.options.getDOMNode();
	        },

	        getSelectedEl: function getSelectedEl(selectedOptionIndex) {
	            return this.getOptionsListEl().children[selectedOptionIndex];
	        },

	        getFooterEl: function getFooterEl() {
	            var footer = this.refs.footer;

	            if (footer) {
	                return footer.getDOMNode();
	            }

	            return null;
	        },

	        locate: function locate(location) {
	            var optionsEl = this.getOptionsEl();
	            var optionalClasses = location.optionalClasses;
	            var toCache = {};

	            _.forEach(location.style, function (value, prop) {
	                optionsEl.style.setProperty(prop, value + 'px');
	            });

	            toCache.optionsElStyle = location.style;
	            this.getOptionsListEl().scrollTop = location.scrollTop || 0;

	            if (optionalClasses && optionalClasses.length) {
	                optionalClasses.forEach(function (optionalClass) {
	                    optionsEl.classList.add(optionalClass);
	                });

	                toCache.optionalClasses = optionalClasses;
	            }

	            this.updateCache(toCache);
	        },

	        toggleScrollArrows: function toggleScrollArrows() {
	            var listEl = this.getOptionsListEl();
	            var optionsEl = this.getOptionsEl();
	            var hasUpClass = hasClass('up', optionsEl);
	            var hasDownClass = hasClass('down', optionsEl);
	            var hasScrollClass = hasClass('scroll', optionsEl);
	            var hasListTopOverflow = hasTopOverflow(listEl);
	            var hasListBottomOverflow = hasBottomOverflow(listEl);

	            if ((hasListTopOverflow || hasListBottomOverflow) && !hasScrollClass) {
	                optionsEl.classList.add('scroll');
	            } else if (!hasListTopOverflow && !hasListBottomOverflow && hasScrollClass) {
	                optionsEl.classList.remove('scroll');
	            }

	            if (hasListTopOverflow && !hasUpClass) {
	                optionsEl.classList.add('up');
	            } else if (hasUpClass && !hasListTopOverflow) {
	                optionsEl.classList.remove('up');
	            }

	            if (hasListBottomOverflow && !hasDownClass) {
	                optionsEl.classList.add('down');
	            } else if (hasDownClass && !hasListBottomOverflow) {
	                optionsEl.classList.remove('down');
	            }
	        },

	        hideScrollArrows: function hideScrollArrows() {
	            var optionsEl = this.getOptionsEl();

	            if (hasClass('up', optionsEl)) {
	                optionsEl.classList.remove('up');
	            }

	            if (hasClass('down', optionsEl)) {
	                optionsEl.classList.remove('down');
	            }
	        },

	        wheelScroll: function wheelScroll(e) {
	            this.scroll(dropdownManager.getScrollData(e.deltaY));
	        },

	        scroll: function scroll(scrollData) {
	            if (scrollData) {
	                if (scrollData.edge) {
	                    this.getOptionsEl().style.setProperty(scrollData.edge, scrollData.distance + 'px');
	                } else {
	                    this.getOptionsListEl().scrollTop += scrollData.distance;
	                }

	                if (!this.state.showScrollBar) {
	                    this.toggleScrollArrows();
	                }
	            }
	        },

	        scrollTo: function scrollTo(direction) {
	            this.scroll(dropdownManager.getScrollData(direction * dropdownManager.defaultScrollSpeed));
	            this.scrollAnimationFrame = window.requestAnimationFrame(this.scrollTo.bind(this, direction));
	        },

	        stopScrollAnimation: function stopScrollAnimation() {
	            window.cancelAnimationFrame(this.scrollAnimationFrame);
	        },

	        disableBrowserScrollKeys: function disableBrowserScrollKeys(e) {
	            var keys = [37, 38, 39, 40];

	            keys.some(function (key) {
	                var isScrollKey = e.keyCode === key;

	                if (isScrollKey) {
	                    e.preventDefault();
	                }

	                return isScrollKey;
	            });
	        },

	        disableBrowserScroll: function disableBrowserScroll() {
	            document.onkeydown = this.disableBrowserScrollKeys;

	            window.onwheel = window.onmousewheel = function (e) {
	                e.preventDefault();
	            };
	        },

	        enableBrowserScroll: function enableBrowserScroll() {
	            window.onwheel = window.onmousewheel = document.onkeydown = null;
	        },

	        onMouseLeave: function onMouseLeave() {
	            dropdownManager.setHovered(null);
	        },

	        resetOptionsElStyle: function resetOptionsElStyle() {
	            var optionsEl = this.getOptionsEl();

	            _.forEach(this.getCached('optionsElStyle'), function (value, name) {
	                optionsEl.style.setProperty(name, '');
	            });
	        },

	        onBlur: function onBlur() {
	            if (this.state.visible && !this.preventBlur) {
	                dropdownManager.blur();
	            }
	        },

	        disableBlur: function disableBlur() {
	            // blur is disabled if it was fired by one of the children of the options
	            this.preventBlur = true;
	        },

	        enableBlur: function enableBlur() {
	            // blur is enabled in order to handle outside options clicks
	            this.preventBlur = false;
	        }
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 82 */
/*!******************************************************!*\
  !*** ./js/baseUI/panelInputs/dropDown/cacheMixin.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! lodash */ 4)], __WEBPACK_AMD_DEFINE_RESULT__ = function (_) {
	    'use strict';

	    return {
	        cache: null,

	        resetCache: function resetCache() {
	            this.cache = null;
	        },

	        updateCache: function updateCache(name, value) {
	            if (!this.cache) {
	                this.cache = {};
	            }

	            if (typeof name === 'string') {
	                this.cache[name] = value;
	            } else if (typeof name === 'object') {
	                _.forEach(name, function (val, prop) {
	                    this.cache[prop] = val;
	                }, this);
	            }

	            return this.cache;
	        },

	        getCached: function getCached(name) {
	            if (this.cache) {
	                return this.cache[name];
	            }
	        }
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 83 */
/*!***************************************************!*\
  !*** ./js/baseUI/panelInputs/dropDown/options.rt ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 2),
	    __webpack_require__(/*! lodash */ 4),
	    __webpack_require__(/*! symbols */ 26)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, symbols) {
	    'use strict';
	    function onMouseEnter1(direction) {
	        this.scrollTo(-1);
	    }
	    function onMouseEnter2(direction) {
	        this.scrollTo(1);
	    }
	    return function () {
	        return React.createElement('section', { 'className': 'dropdown-options ' + this.state.className + ' ' + (this.state.visible ? 'expanded' : '') }, React.createElement('div', {
	            'className': 'options',
	            'ref': 'options',
	            'onWheel': this.wheelScroll,
	            'tabIndex': '0',
	            'onBlur': this.onBlur,
	            'onMouseLeave': this.onMouseLeave,
	            'onMouseDown': this.disableBlur,
	            'onMouseUp': this.enableBlur
	        }, React.createElement('i', {
	            'className': 'top arrow',
	            'onMouseEnter': onMouseEnter1.bind(this),
	            'onMouseLeave': this.stopScrollAnimation
	        }, React.createElement(symbols.symbol, { 'name': 'arrowDown' })), React.createElement('ol', {
	            'className': 'list',
	            'ref': 'list'
	        }, this.getCached('options')), this.getCached('footer') ? React.createElement('footer', {
	            'ref': 'footer',
	            'key': 'options-footer'
	        }, this.getCached('footer')) : null, React.createElement('i', {
	            'className': 'bottom arrow',
	            'onMouseEnter': onMouseEnter2.bind(this),
	            'onMouseLeave': this.stopScrollAnimation
	        }, React.createElement(symbols.symbol, { 'name': 'arrowDown' }))));
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 84 */
/*!**************************************************!*\
  !*** ./js/baseUI/panelInputs/dropDown/select.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 2), __webpack_require__(/*! lodash */ 4), __webpack_require__(/*! baseUI/panelInputs/dropDown/dropDownMixin */ 85), __webpack_require__(/*! baseUI/panelInputs/dropDown/dropdownManager */ 80), __webpack_require__(/*! baseUI/panelInputs/dropDown/select.rt */ 87)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, dropDownMixin, dropdownManager, selectTemplate) {
	    'use strict';

	    var indentFromEdge = dropdownManager.INDENT_FROM_EDGE;

	    function getAllowedPosition(currentOptionsPosition, deltaY, listEl) {
	        var newPosition = currentOptionsPosition - Math.abs(deltaY);

	        if (Math.abs(newPosition) < indentFromEdge) {
	            newPosition = indentFromEdge;
	        } else {
	            var maxDistanceFromEdge = dropdownManager.getViewportHeight() - indentFromEdge - listEl.scrollHeight;

	            if (maxDistanceFromEdge < indentFromEdge) {
	                maxDistanceFromEdge = indentFromEdge;
	            }

	            if (newPosition < maxDistanceFromEdge) {
	                newPosition = maxDistanceFromEdge;
	            }
	        }

	        return newPosition;
	    }

	    function shouldMoveEdge(currentOptionsPosition) {
	        return currentOptionsPosition > indentFromEdge;
	    }

	    function getOptionsTopPos(ddBoundingClientRect, selectedOptionEl) {
	        return selectedOptionEl ? ddBoundingClientRect.top - selectedOptionEl.offsetTop : ddBoundingClientRect.top;
	    }

	    function getOptionsBottomPos(ddBoundingClientRect, listEl, selectedOptionEl) {
	        return dropdownManager.getViewportHeight() - getOptionsTopPos(ddBoundingClientRect, selectedOptionEl) - listEl.scrollHeight;
	    }

	    function getOptionsVerticalPositions(currentSideName, ddBoundingClientRect, listEl) {
	        var ddDistanceToEdge;
	        var sides = {};
	        var oppositeSide;
	        var ddTopPos = ddBoundingClientRect.top;
	        var isTopSide = currentSideName === 'top';

	        if (isTopSide) {
	            ddDistanceToEdge = ddTopPos + ddBoundingClientRect.height;
	        } else {
	            ddDistanceToEdge = dropdownManager.getViewportHeight() - ddTopPos;
	        }

	        if (ddDistanceToEdge < dropdownManager.MIN_LIST_HEIGHT + indentFromEdge) {
	            if (isTopSide) {
	                oppositeSide = dropdownManager.getViewportHeight() - (ddDistanceToEdge + listEl.scrollHeight);
	            } else {
	                oppositeSide = ddTopPos - listEl.scrollHeight;
	            }

	            if (oppositeSide < indentFromEdge) {
	                oppositeSide = indentFromEdge;
	            }
	        } else {
	            ddDistanceToEdge = indentFromEdge;
	        }

	        sides.currentSide = ddDistanceToEdge;
	        sides.oppositeSide = oppositeSide;

	        return sides;
	    }

	    return React.createClass({
	        displayName: 'select',
	        mixins: [dropDownMixin],
	        className: 'select',

	        getDefaultProps: function getDefaultProps() {
	            return {
	                toggleIcon: true,
	                template: selectTemplate,
	                autotranslate: true,
	                setSelectedAnyway: false
	            };
	        },

	        getOptionsLocation: function getOptionsLocation(ddEl, listEl, selectedEl) {
	            var ddBoundingClientRect = ddEl.getBoundingClientRect();
	            var top = getOptionsTopPos(ddBoundingClientRect, selectedEl);
	            var bottom = getOptionsBottomPos(ddBoundingClientRect, listEl, selectedEl);
	            var isTopOverflow = top < indentFromEdge;
	            var isBottomOverflow = bottom < indentFromEdge;
	            var isBothOverflow = isTopOverflow && isBottomOverflow;
	            var scrollDistance = 0;
	            var width = Number(this.props.optionsWidth) || ddBoundingClientRect.width;
	            var sides;

	            if (isTopOverflow || isBothOverflow) {
	                scrollDistance = -top + indentFromEdge;
	            }

	            if (isTopOverflow && !isBottomOverflow) {
	                sides = getOptionsVerticalPositions('top', ddBoundingClientRect, listEl);
	                top = sides.currentSide;

	                if (sides.oppositeSide) {
	                    bottom = sides.oppositeSide;
	                }
	            } else if (isBottomOverflow && !isTopOverflow) {
	                sides = getOptionsVerticalPositions('bottom', ddBoundingClientRect, listEl);
	                bottom = sides.currentSide;

	                if (sides.oppositeSide) {
	                    top = sides.oppositeSide;
	                }
	            } else if (isTopOverflow && isBottomOverflow) {
	                top = indentFromEdge;
	                bottom = indentFromEdge;
	            }

	            return {
	                style: {
	                    top: top,
	                    bottom: bottom,
	                    left: ddBoundingClientRect.left,
	                    width: width
	                },

	                scrollTop: scrollDistance
	            };
	        },

	        getScrollData: function getScrollData(deltaY, optionsEl, listEl) {
	            var optionsElRect = optionsEl.getBoundingClientRect();
	            var edge;
	            var currentOptionsPosition;
	            var hasOverflow = optionsElRect.height < listEl.scrollHeight;
	            var scrollData = { distance: 0 };

	            if (hasOverflow) {
	                if (deltaY > 0) {
	                    edge = 'top';
	                    currentOptionsPosition = Math.floor(optionsElRect.top);
	                } else {
	                    edge = 'bottom';
	                    currentOptionsPosition = Math.floor(dropdownManager.getViewportHeight() - optionsElRect.bottom);
	                }

	                if (shouldMoveEdge(currentOptionsPosition)) {
	                    scrollData.distance = getAllowedPosition(currentOptionsPosition, deltaY, listEl);
	                    scrollData.edge = edge;
	                } else {
	                    scrollData.distance = deltaY;
	                }
	            }

	            return scrollData;
	        }
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 85 */
/*!*********************************************************!*\
  !*** ./js/baseUI/panelInputs/dropDown/dropDownMixin.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 2), __webpack_require__(/*! lodash */ 4), __webpack_require__(/*! util */ 17), __webpack_require__(/*! baseUI/panelInputs/inputMixin */ 37), __webpack_require__(/*! baseUI/panelInputs/dropDown/dropdownManager */ 80), __webpack_require__(/*! baseUI/panelInputs/dropDown/cacheMixin */ 82), __webpack_require__(/*! baseUI/mixins/reportUIChangeMixin */ 31), __webpack_require__(/*! baseUI/panelInputs/dropDown/dropDown.rt */ 86)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, util, inputMixin, dropdownManager, cacheMixin, reportUIChangeMixin, template) {
	    'use strict';

	    function getSelectedIndex(options, value) {
	        var selectedIndex = 0;

	        options.some(function (child, i) {
	            var isSelected = child.props.value === value;

	            if (isSelected) {
	                selectedIndex = i;
	            }

	            return isSelected;
	        });

	        return selectedIndex;
	    }

	    var TOGGLE_KEY_CODES = [32, 38, 40];

	    return {
	        mixins: [inputMixin, cacheMixin, util.translationMixin, reportUIChangeMixin],

	        propTypes: {
	            label: React.PropTypes.string,
	            tabIndex: React.PropTypes.number,
	            scrollSpeed: React.PropTypes.number,
	            toggleIcon: React.PropTypes.bool,
	            template: React.PropTypes.func,
	            autotranslate: React.PropTypes.bool,
	            infoText: React.PropTypes.string,
	            setSelectedAnyway: React.PropTypes.bool
	        },

	        render: template,

	        getInitialState: function getInitialState() {
	            var value = this.getValueFromProps();
	            var optionsData = this.getOptionsData(value, this.props.children);
	            var options = optionsData.options;
	            var selectedIndex = optionsData.selectedIndex;

	            this.updateCache({
	                selectedContent: this.getSelectedContent(selectedIndex, options),
	                options: options,
	                footer: optionsData.footer
	            });

	            return {
	                value: value,
	                selectedIndex: selectedIndex,
	                expanded: false
	            };
	        },

	        componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	            var newVal = this.getValueFromProps(nextProps);

	            if (nextProps.children !== this.props.children) {
	                var optionsData = this.getOptionsData(newVal, nextProps.children);

	                this.updateCache({
	                    selectedContent: this.getSelectedContent(optionsData.selectedIndex, optionsData.options),
	                    options: optionsData.options,
	                    footer: optionsData.footer
	                });

	                this.setState({ selectedIndex: optionsData.selectedIndex });
	            }

	            if (this.getValueFromProps() !== newVal) {
	                var options = this.getCached('options');
	                var selectedIndex = getSelectedIndex(options, newVal);

	                this.updateCache('selectedContent', this.getSelectedContent(selectedIndex, options));

	                this.setState({
	                    value: newVal,
	                    selectedIndex: selectedIndex
	                });
	            }
	        },

	        componentWillUnmount: function componentWillUnmount() {
	            dropdownManager.hide();
	        },

	        getSelectedContent: function getSelectedContent(selectedIndex, children) {
	            var content = children[selectedIndex].props.children || '';

	            if (this.props.autotranslate && typeof content === 'string') {
	                content = this.translateIfNeeded(content.trim());
	            }

	            return content;
	        },

	        getOptionsData: function getOptionsData(value, children) {
	            var autotranslate = this.props.autotranslate;
	            var optionIndex = 0;

	            var optionsData = {
	                options: [],
	                footer: null
	            };
	            var filteredChildren = _(children).flattenDeep().filter(React.isValidElement).value();

	            React.Children.forEach(filteredChildren, function (child) {
	                if (child) {
	                    if (child.props.type === 'footer') {
	                        optionsData.footer = child;
	                    } else {
	                        var optionClone;

	                        var newProps = {
	                            key: 'option-' + optionIndex,
	                            index: optionIndex,
	                            autotranslate: autotranslate
	                        };

	                        //set selected index to the first child with value === value
	                        if (optionsData.selectedIndex === undefined && value === child.props.value) {
	                            optionsData.selectedIndex = optionIndex;
	                        }

	                        optionClone = React.addons.cloneWithProps(child, newProps);
	                        optionsData.options.push(optionClone);

	                        optionIndex++;
	                    }
	                }
	            });

	            //if we didn't find any child to be selected, select the first option
	            if (!optionsData.selectedIndex) {
	                optionsData.selectedIndex = 0;
	            }

	            return optionsData;
	        },

	        getData: function getData() {
	            return {
	                options: this.getCached('options'),
	                footer: this.getCached('footer'),
	                selectedIndex: this.state.selectedIndex,
	                className: this.className,
	                showScrollBar: this.props.showScrollBar
	            };
	        },

	        getDDClassName: function getDDClassName() {
	            var addClassName = '';

	            if (this.className) {
	                addClassName += ' ' + this.className;
	            }

	            if (this.props.className) {
	                addClassName += ' ' + this.props.className;
	            }

	            if (this.state.expanded) {
	                addClassName += ' expanded';
	            }

	            if (this.props.showScroll) {
	                addClassName += ' show-scroll';
	            }

	            if (this.props.disabled) {
	                addClassName += ' disabled';
	            }

	            return addClassName.trim();
	        },

	        getDDEl: function getDDEl() {
	            return this.refs.dropdown.getDOMNode();
	        },

	        getOnChange: function getOnChange(newValue) {
	            return this.callOnChangeIfExists.bind(this, newValue);
	        },

	        setSelected: function setSelected(optionData) {
	            var newValue = optionData.value;
	            var newIndex = optionData.index;

	            if (this.props.setSelectedAnyway || this.state.value !== newValue || this.state.selectedIndex !== newIndex) {
	                this.reportUIChange({ value: newValue });
	                this.updateCache('selectedContent', optionData.content);

	                this.setState({
	                    value: newValue,
	                    selectedIndex: newIndex
	                }, this.getOnChange(newValue));
	            }
	        },

	        toggle: function toggle(event) {
	            if (!this.props.disabled && this.props.onClick) {
	                this.props.onClick(event);
	            } else if (!this.props.disabled) {
	                dropdownManager.toggle(this);
	                this.preventBlur = true;
	            }
	        },

	        onKeyDown: function onKeyDown(e) {
	            if (TOGGLE_KEY_CODES.indexOf(e.keyCode) > -1) {
	                this.toggle(e);
	                e.preventDefault();
	                e.stopPropagation();
	            }
	        },

	        focus: function focus() {
	            if (this.isMounted()) {
	                this.getDOMNode().focus();
	            }
	        },

	        isExpanded: function isExpanded() {
	            return dropdownManager.isExpanded(this);
	        },

	        setExpanded: function setExpanded(isExpanded) {
	            this.setState({ expanded: isExpanded });
	        },

	        getFocusEl: function getFocusEl() {
	            var focusElement = this.refs.focusElement;

	            if (focusElement) {
	                return focusElement.getDOMNode();
	            }
	        } //,

	        //onBlur: function(){
	        //    if (!this.preventBlur){
	        //        dropdownManager.blur();
	        //    } else {
	        //        this.preventBlur = false;
	        //    }
	        //}
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 86 */
/*!****************************************************!*\
  !*** ./js/baseUI/panelInputs/dropDown/dropDown.rt ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 2),
	    __webpack_require__(/*! lodash */ 4),
	    __webpack_require__(/*! symbols */ 26),
	    __webpack_require__(/*! baseUI/controls/infoIcon */ 11)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, symbols, infoIcon) {
	    'use strict';
	    return function () {
	        return React.createElement('div', {
	            'className': 'dropdown ' + this.getDDClassName(),
	            'style': this.props.style,
	            'tabIndex': this.props.tabIndex || 0,
	            'onKeyDown': this.onKeyDown
	        }, this.hasLabel() ? React.createElement('label', { 'key': 'dropdownLabel' }, this.translateIfNeeded(this.getLabel())) : null, this.hasLabel() && (this.props.infoText || this.props.infoTitle) ? React.createElement(infoIcon, {
	            'key': 'infoIcon',
	            'text': this.props.infoText,
	            'title': this.props.infoTitle
	        }) : null, React.createElement('div', {
	            'className': 'dd',
	            'ref': 'dropdown',
	            'onClick': this.toggle
	        }    /* tabindex="0" */
	             /* onBlur="{this.onBlur}" */, React.createElement('div', {
	            'className': 'selected-container',
	            'ref': 'selectedContainer'
	        }, this.props.template.call(this)), this.props.toggleIcon ? React.createElement('i', {
	            'key': 'toggleIcon',
	            'className': 'expand arrow'
	        }, React.createElement(symbols.symbol, { 'name': this.props.customDropDownIcon ? this.props.customDropDownIcon : 'arrowDown' })) : null));
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 87 */
/*!**************************************************!*\
  !*** ./js/baseUI/panelInputs/dropDown/select.rt ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 2),
	    __webpack_require__(/*! lodash */ 4)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _) {
	    'use strict';
	    return function () {
	        return React.createElement('div', { 'className': 'selected' }, this.getCached('selectedContent'));
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 88 */
/*!******************************************************!*\
  !*** ./js/baseUI/panelInputs/dropDown/dropDown.scss ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(/*! !./../../../../~/css-loader!./../../../../~/sass-loader?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./dropDown.scss */ 89);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../../~/style-loader/addStyles.js */ 41)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./dropDown.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./dropDown.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 89 */
/*!************************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./js/baseUI/panelInputs/dropDown/dropDown.scss ***!
  \************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../../~/css-loader/lib/css-base.js */ 40)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\ndiv.dropdown {\n  font-family: HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n  font-size: 16px;\n  position: relative; }\n  div.dropdown .info-icon {\n    line-height: 0;\n    opacity: 0;\n    position: absolute;\n    right: 12px;\n    top: 18px;\n    transition-property: opacity;\n    transition-duration: .15s; }\n  div.dropdown:hover .info-icon {\n    opacity: 1; }\n  div.dropdown * {\n    margin: 0;\n    padding: 0; }\n  div.dropdown > label {\n    display: none;\n    font-weight: 300;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap; }\n  div.dropdown > div.dd {\n    position: relative; }\n    div.dropdown > div.dd > div.selected-container {\n      box-sizing: border-box;\n      color: #162d3d;\n      font-size: 18px;\n      height: 36px;\n      line-height: 36px;\n      min-height: 36px;\n      overflow: hidden;\n      padding-right: 30px;\n      position: relative;\n      text-overflow: ellipsis;\n      white-space: nowrap; }\n    div.dropdown > div.dd i.arrow .symbol-arrowDown {\n      fill: #3899ec;\n      left: 50%;\n      position: absolute;\n      top: 50%;\n      transform: translate(-50%, -50%); }\n  div.dropdown:focus {\n    outline: none; }\n  div.dropdown.context-menu:not(.disabled) > div.dd, div.dropdown.select:not(.disabled) > div.dd, div.dropdown.combobox:not(.disabled) > div.dd {\n    cursor: pointer; }\n  div.dropdown.select > label, div.dropdown.combobox > label {\n    color: #2b5672;\n    display: inline-block;\n    font-size: 14px;\n    line-height: 18px;\n    margin-bottom: 3px;\n    text-align: left; }\n  div.dropdown.select > .info-icon, div.dropdown.combobox > .info-icon {\n    float: right;\n    margin-right: 3px;\n    position: static; }\n  div.dropdown.select:not(.disabled):hover > div.dd > div.selected-container > i.expand.arrow, div.dropdown.combobox:not(.disabled):hover > div.dd > div.selected-container > i.expand.arrow {\n    opacity: 1; }\n  div.dropdown.select:not(.disabled):hover > div.dd > div.selected-container > div.selected, div.dropdown.combobox:not(.disabled):hover > div.dd > div.selected-container > div.selected {\n    color: #3899ec; }\n  div.dropdown.select > div.dd > div.selected-container > div.selected, div.dropdown.combobox > div.dd > div.selected-container > div.selected {\n    overflow: inherit;\n    text-overflow: inherit; }\n  div.dropdown.select > div.dd > i.expand.arrow, div.dropdown.combobox > div.dd > i.expand.arrow {\n    border: 2px solid #3899ec;\n    border-radius: 50%;\n    content: '';\n    display: block;\n    height: 22px;\n    opacity: .6;\n    right: 0;\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    width: 22px; }\n  div.dropdown.context-menu {\n    width: 24px;\n    height: 24px;\n    border: 1px solid #000;\n    border-radius: 50%;\n    line-height: 24px;\n    text-align: center; }\n    div.dropdown.context-menu > div.dd {\n      height: 100%; }\n      div.dropdown.context-menu > div.dd > div.selected-container {\n        height: 30px;\n        line-height: 30px;\n        min-height: 30px; }\n  div.dropdown.disabled > div.dd > div.selected-container {\n    color: #7a7a7a; }\n  div.dropdown.disabled.select label {\n    color: #939393; }\n  div.dropdown.disabled.select > .dd > i.expand.arrow {\n    border-color: #bcbcbc;\n    opacity: .6; }\n    div.dropdown.disabled.select > .dd > i.expand.arrow > .symbol-arrowDown {\n      fill: #bcbcbc; }\n    div.dropdown.disabled.select > .dd > i.expand.arrow:hover {\n      background-color: transparent; }\n      div.dropdown.disabled.select > .dd > i.expand.arrow:hover > .symbol-arrowDown {\n        fill: #bcbcbc; }\n\nsection.dropdown-options {\n  left: 0;\n  position: absolute;\n  top: 0; }\n  section.dropdown-options * {\n    margin: 0;\n    padding: 0; }\n  section.dropdown-options > div.options {\n    background-color: #fff;\n    border-radius: 8px;\n    box-shadow: 0 0 22px 0 rgba(22, 45, 61, 0.26);\n    display: none;\n    flex-direction: column;\n    max-height: 100%;\n    position: fixed; }\n    section.dropdown-options > div.options:focus {\n      outline: none; }\n    section.dropdown-options > div.options > ol.list {\n      display: block;\n      flex-grow: 1;\n      max-height: 100%;\n      overflow: hidden; }\n      section.dropdown-options > div.options > ol.list > li.option {\n        box-sizing: border-box;\n        cursor: pointer;\n        display: block;\n        font-size: 14px;\n        line-height: 36px;\n        padding: 0 20px;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        overflow: hidden;\n        position: relative; }\n        section.dropdown-options > div.options > ol.list > li.option:not(.separator) {\n          height: 36px; }\n          section.dropdown-options > div.options > ol.list > li.option:not(.separator).hovered {\n            background-color: #eaf7ff; }\n        section.dropdown-options > div.options > ol.list > li.option.level1 {\n          padding-left: 30px; }\n        section.dropdown-options > div.options > ol.list > li.option.level2 {\n          padding-left: 40px; }\n        section.dropdown-options > div.options > ol.list > li.option.level2 {\n          padding-left: 50px; }\n    section.dropdown-options > div.options > i.arrow {\n      background-color: rgba(255, 255, 255, 0.93);\n      display: block;\n      font-size: 8px;\n      height: 36px;\n      left: 0;\n      opacity: .6;\n      position: absolute;\n      width: 100%;\n      visibility: hidden;\n      z-index: 1; }\n      section.dropdown-options > div.options > i.arrow > .symbol-arrowDown {\n        fill: #3899ec;\n        left: 50%;\n        position: absolute;\n        top: 50%;\n        transform: translate(-50%, -50%); }\n      section.dropdown-options > div.options > i.arrow:hover > .symbol-arrowDown {\n        opacity: 1; }\n    section.dropdown-options > div.options > i.top.arrow {\n      top: 0;\n      transform: rotateX(180deg); }\n    section.dropdown-options > div.options > i.bottom.arrow {\n      bottom: 0; }\n    section.dropdown-options > div.options > footer {\n      flex-shrink: 0; }\n  section.dropdown-options.expanded {\n    height: 100vh;\n    width: 100%;\n    z-index: 9998 !important; }\n    section.dropdown-options.expanded > div.options {\n      display: flex !important; }\n      section.dropdown-options.expanded > div.options.scroll.up > i.top.arrow,\n      section.dropdown-options.expanded > div.options.scroll.down > i.bottom.arrow {\n        visibility: visible; }\n      section.dropdown-options.expanded > div.options > ol.list {\n        will-change: transform, scroll-position; }\n  section.dropdown-options.select > div.options {\n    overflow: hidden; }\n    section.dropdown-options.select > div.options > ol.list > li.option:first-child {\n      border-radius: 8px 8px 0 0; }\n    section.dropdown-options.select > div.options > ol.list > li.option:last-child {\n      border-radius: 0 0 8px 8px; }\n    section.dropdown-options.select > div.options > ol.list > li.option.selected {\n      background-color: #3899ec;\n      color: #fff; }\n  section.dropdown-options.context-menu > div.options > ol.list {\n    box-sizing: border-box;\n    padding: 10px 0; }\n    section.dropdown-options.context-menu > div.options > ol.list > li.option.selected:hover:not(.separator) {\n      background-color: #eaf7ff; }\n  section.dropdown-options.context-menu > div.options.tag-triangle:before {\n    margin-left: -5px;\n    left: 50%; }\n  section.dropdown-options.combobox > div.options {\n    overflow: hidden; }\n    section.dropdown-options.combobox > div.options > ol.list {\n      overflow-y: auto; }\n      section.dropdown-options.combobox > div.options > ol.list > li.option.selected {\n        background-color: #3899ec;\n        color: #fff; }\n    section.dropdown-options.combobox > div.options > footer {\n      font-family: HelveticaNeueW01-55Roma, HelveticaNeueW02-55Roma, HelveticaNeueW10-55Roma, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n      font-size: 14px;\n      background-color: #fff;\n      box-shadow: 0 -1px 23px 0 #fff;\n      color: #3899ec;\n      line-height: 35px;\n      height: 35px;\n      padding: 0 20px;\n      z-index: 0; }\n      section.dropdown-options.combobox > div.options > footer span {\n        cursor: pointer; }\n", ""]);

	// exports


/***/ },
/* 90 */
/*!***************************************************************!*\
  !*** ./js/wix-ui-react/components/dropDown/dropDownSelect.js ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(/*! react */ 2);
	var _ = __webpack_require__(/*! lodash */ 4);
	var Wix = __webpack_require__(/*! Wix */ 7);
	var template = __webpack_require__(/*! wix-ui-react/components/dropDown/dropDown.rt */ 91);
	__webpack_require__(/*! baseUI/panelInputs/dropDown/dropDown.scss */ 88);

	module.exports = React.createClass({

	    displayName: 'DropDown',
	    propTypes: {
	        label: React.PropTypes.string,
	        options: React.PropTypes.arrayOf(React.PropTypes.shape({
	            value: React.PropTypes.string.isRequired,
	            label: React.PropTypes.string.isRequired,
	            className: React.PropTypes.string,
	            type: React.PropTypes.string
	        })).isRequired
	    },

	    getInitialState: function getInitialState() {
	        return {
	            value: this.props.defaultValue
	        };
	    },

	    componentDidMount: function componentDidMount() {
	        if (Wix.Utils.getViewMode() !== 'standalone') {
	            var wixParam = this.props['wix-param'];
	            if (wixParam) {
	                Wix.Styles.getStyleParams((function (styleParams, callback) {
	                    var num = styleParams.numbers[wixParam];
	                    if (_.isNumber(num)) {
	                        this.setState({
	                            value: num.toString()
	                        }, callback);
	                    }
	                }).bind(this));
	            }
	        }
	    },

	    getValueLink: function getValueLink(valueName) {
	        var that = this;
	        return {
	            value: that.state[valueName],
	            requestChange: function requestChange(newValue) {
	                that.handleChange(newValue, valueName);
	            }
	        };
	    },

	    handleChange: function handleChange(newValue, valueName) {
	        this.setState({
	            value: newValue
	        }, function () {
	            var wixParam = this.props['wix-param'];
	            if (wixParam) {
	                Wix.Styles.setNumberParam(wixParam, {
	                    value: newValue
	                });
	            }
	        });

	        if (this.props.onChange && _.isFunction(this.props.onChange)) {
	            this.props.onChange.call(this, newValue);
	        }
	    },
	    render: template
	});

/***/ },
/* 91 */
/*!*********************************************************!*\
  !*** ./js/wix-ui-react/components/dropDown/dropDown.rt ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 2),
	    __webpack_require__(/*! lodash */ 4),
	    __webpack_require__(/*! baseUI/panelInputs/dropDown/select */ 84),
	    __webpack_require__(/*! baseUI/panelInputs/dropDown/option */ 79)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, dropDownSelect, dropDownOption) {
	    'use strict';
	    function repeatOption1(option, optionIndex) {
	        return React.createElement(dropDownOption, { 'value': option.value }, option.label);
	    }
	    return function () {
	        return React.createElement.apply(this, [
	            dropDownSelect,
	            {
	                'infoTitle': this.props.infoTitle,
	                'style': this.props.style,
	                'infoText': this.props.infoText,
	                'label': this.props.label,
	                'valueLink': this.getValueLink('value')
	            },
	            _.map(this.props.options, repeatOption1.bind(this))
	        ]);
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 92 */
/*!*************************************************************!*\
  !*** ./js/wix-ui-react/components/switches/radioButtons.js ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	__webpack_require__(/*! baseUI/controls/radioButtons.scss */ 93);

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 2), __webpack_require__(/*! lodash */ 4), __webpack_require__(/*! Wix */ 7), __webpack_require__(/*! baseUI/controls/radioButtonsMixin */ 36), __webpack_require__(/*! wix-ui-react/components/switches/radioButtons.rt */ 95)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, Wix, radioMixin, template) {
	    'use strict';

	    return React.createClass({
	        displayName: 'RadioButtons',
	        mixins: [radioMixin],
	        propTypes: {
	            label: React.PropTypes.string,
	            disabled: React.PropTypes.bool,
	            options: React.PropTypes.arrayOf(React.PropTypes.shape({
	                value: React.PropTypes.string.isRequired,
	                label: React.PropTypes.string.isRequired,
	                className: React.PropTypes.string,
	                type: React.PropTypes.string
	            })),
	            infoText: React.PropTypes.string,
	            infoTitle: React.PropTypes.string,
	            defaultValue: React.PropTypes.string
	        },
	        onClick: function onClick() {
	            if (this.props && this.props.onClickPreview) {
	                this.props.onClickPreview(this.props);
	            }
	        },
	        onMouseOver: function onMouseOver() {
	            if (this.props && this.props.onMouseOverPreview) {
	                this.props.onMouseOverPreview(this.props);
	            }
	        },
	        getInitialState: function getInitialState() {
	            return {
	                value: this.props.defaultValue || this.props.options && this.props.options[0].value
	            };
	        },
	        componentDidMount: function componentDidMount() {
	            var wixParam = this.props['wix-param'];
	            if (Wix.Utils.getViewMode() !== 'standalone' && wixParam) {
	                Wix.Styles.getStyleParams((function (styleParams, callback) {
	                    var number = styleParams.numbers[wixParam] || { value: this.props.value || this.props.defaultValue || this.props.options[0].value };
	                    this.setState({
	                        value: _.isObject(number) ? number.value : "" + number
	                    }, callback);
	                }).bind(this));
	            }
	        },
	        getValueLink: function getValueLink(valueName) {
	            var that = this;
	            return {
	                value: that.state[valueName],
	                requestChange: function requestChange(newValue) {
	                    that.handleChangeInner(newValue, valueName);
	                }
	            };
	        },
	        handleChangeInner: function handleChangeInner(newValue, valueName, callback) {
	            var stateToSet = {};
	            stateToSet[valueName] = newValue;
	            this.setState(stateToSet, function () {
	                var wixParam = this.props['wix-param'];
	                if (wixParam) {
	                    Wix.Styles.setNumberParam(wixParam, {
	                        value: newValue
	                    });
	                }
	                if (_.isFunction(callback)) {
	                    callback();
	                }
	            });

	            if (_.isFunction(this.props.onClickPreview)) {
	                this.props.onClickPreview.call(this, newValue);
	            }
	        },
	        enable: function enable() {
	            this.setProps({ disabled: false });
	        },
	        disable: function disable() {
	            this.setProps({ disabled: true });
	        },
	        render: template
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 93 */
/*!**********************************************!*\
  !*** ./js/baseUI/controls/radioButtons.scss ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/sass-loader?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./radioButtons.scss */ 94);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 41)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./radioButtons.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./radioButtons.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 94 */
/*!****************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./js/baseUI/controls/radioButtons.scss ***!
  \****************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 40)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n.control-radio-buttons {\n  box-sizing: border-box;\n  position: relative; }\n  .control-radio-buttons .info-icon {\n    position: absolute;\n    top: 0;\n    right: 0;\n    opacity: 0;\n    transition-property: opacity;\n    transition-duration: .15s; }\n  .control-radio-buttons:hover .info-icon {\n    opacity: 1; }\n  .control-radio-buttons div {\n    margin-bottom: 14px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    font-family: HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n    font-size: 14px;\n    color: #2b5672; }\n  .control-radio-buttons label {\n    display: block;\n    margin: 0 0 13px 1px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n    .control-radio-buttons label:last-child {\n      margin-bottom: 0; }\n  .control-radio-buttons span:nth-of-type(2) {\n    position: relative;\n    top: -4px;\n    display: inline;\n    color: #162d3d;\n    margin-left: 12px;\n    font-family: HelveticaNeueW01-55Roma, HelveticaNeueW02-55Roma, HelveticaNeueW10-55Roma, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n    font-size: 14px; }\n  .control-radio-buttons input {\n    display: none; }\n    .control-radio-buttons input + span {\n      border-radius: 50%;\n      display: inline-block;\n      height: 17px;\n      width: 17px;\n      box-shadow: inset 0 0 0 1px #3899ec;\n      transition-property: background-color, border-width;\n      transition-duration: .15s;\n      box-sizing: border-box; }\n    .control-radio-buttons input:checked + span {\n      background-color: #3899ec;\n      box-shadow: inset 0 0 0 1px #3899ec, inset 0 0 0 2px #fff; }\n  .control-radio-buttons.disabled span:nth-of-type(2) {\n    color: #939393; }\n  .control-radio-buttons.disabled input + span {\n    box-shadow: inset 0 0 0 1px #bcbcbc; }\n  .control-radio-buttons.disabled input:checked + span {\n    background-color: #bcbcbc;\n    box-shadow: inset 0 0 0 1px #bcbcbc, inset 0 0 0 2px #fff; }\n  .control-radio-buttons:not(.disabled) label {\n    cursor: pointer; }\n    .control-radio-buttons:not(.disabled) label:hover input:not(:checked) + span {\n      background-color: #d3edff; }\n", ""]);

	// exports


/***/ },
/* 95 */
/*!*************************************************************!*\
  !*** ./js/wix-ui-react/components/switches/radioButtons.rt ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 2),
	    __webpack_require__(/*! lodash */ 4),
	    __webpack_require__(/*! baseUI/controls/radioButtons */ 96)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, radioButtons) {
	    'use strict';
	    return function () {
	        return React.createElement(radioButtons, {
	            'valueLink': this.getValueLink('value'),
	            'options': this.props.options,
	            'disabled': this.props.disabled,
	            'infoText': this.props.infoText,
	            'infoTitle': this.props.infoTitle,
	            'label': this.props.label,
	            'onMouseOverPreview': this.props.onMouseOverPreview,
	            'onClickPreview': this.props.onClickPreview
	        });
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 96 */
/*!********************************************!*\
  !*** ./js/baseUI/controls/radioButtons.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 2), __webpack_require__(/*! lodash */ 4), __webpack_require__(/*! baseUI/controls/radioButtonsMixin */ 36), __webpack_require__(/*! baseUI/controls/radioButtons.rt */ 97)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, radioMixin, template) {
	    'use strict';

	    return React.createClass({
	        displayName: 'RadioButtons',
	        mixins: [radioMixin],
	        propTypes: {
	            label: React.PropTypes.string,
	            disabled: React.PropTypes.bool,
	            options: React.PropTypes.arrayOf(React.PropTypes.shape({
	                value: React.PropTypes.string.isRequired,
	                label: React.PropTypes.string.isRequired,
	                className: React.PropTypes.string,
	                type: React.PropTypes.string
	            })),
	            infoText: React.PropTypes.string,
	            infoTitle: React.PropTypes.string
	        },
	        onClick: function onClick() {
	            if (this.props && this.props.onClickPreview) {
	                this.props.onClickPreview(this.props);
	            }
	        },
	        onMouseOver: function onMouseOver() {
	            if (this.props && this.props.onMouseOverPreview) {
	                this.props.onMouseOverPreview(this.props);
	            }
	        },
	        render: template
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 97 */
/*!********************************************!*\
  !*** ./js/baseUI/controls/radioButtons.rt ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 2),
	    __webpack_require__(/*! lodash */ 4),
	    __webpack_require__(/*! baseUI/controls/infoIcon */ 11)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, infoIcon) {
	    'use strict';
	    function onChange1(selectedValue, option, optionIndex) {
	        this.handleChange(option.value, option.type);
	    }
	    function repeatOption2(selectedValue, option, optionIndex) {
	        return React.createElement('label', {
	            'className': option.className,
	            'onMouseOver': this.onMouseOver,
	            'key': 'option-' + option.value
	        }, React.createElement('input', {
	            'type': 'radio',
	            'name': this.getRadioGroupId(),
	            'value': option.value,
	            'disabled': this.props.disabled,
	            'checked': option.value === selectedValue,
	            'onChange': onChange1.bind(this, selectedValue, option, optionIndex)
	        }), React.createElement('span', {}), React.createElement('span', { 'onClick': this.onClick }, this.translateIfNeeded(option.label)));
	    }
	    function scopeSelectedValue3() {
	        var selectedValue = this.getValueFromProps(this.props);
	        return _.map(this.props.options, repeatOption2.bind(this, selectedValue));
	    }
	    return function () {
	        return React.createElement.apply(this, [
	            'div',
	            { 'className': 'control-radio-buttons' + (this.props.disabled ? ' disabled' : '') },
	            this.props.infoText ? React.createElement(infoIcon, {
	                'key': 'infoIcon',
	                'text': this.props.infoText,
	                'title': this.props.infoTitle
	            }) : null,
	            this.props.label ? React.createElement('div', { 'key': 'label' }, this.translateIfNeeded(this.props.label)) : null,
	            scopeSelectedValue3.apply(this, [])
	        ]);
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 98 */
/*!*******************************************************!*\
  !*** ./js/wix-ui-react/components/tooltip/tooltip.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var tooltips = __webpack_require__(/*! baseUI/popovers/tooltip */ 33);
	__webpack_require__(/*! baseUI/popovers/tooltips.scss */ 99);

	module.exports = {
	    tooltips: tooltips
	};

/***/ },
/* 99 */
/*!******************************************!*\
  !*** ./js/baseUI/popovers/tooltips.scss ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/sass-loader?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./tooltips.scss */ 100);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 41)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./tooltips.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./tooltips.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 100 */
/*!************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./js/baseUI/popovers/tooltips.scss ***!
  \************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 40)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n.tooltip-presenter {\n  z-index: 9999;\n  position: fixed;\n  left: 0;\n  top: 0;\n  background-color: #fff;\n  box-shadow: 0 0 18px 0 rgba(22, 45, 61, 0.27);\n  border-radius: 8px; }\n  .tooltip-presenter .arrow {\n    transform: rotate(45deg);\n    background-color: #fff; }\n    .tooltip-presenter .arrow:after {\n      content: '';\n      z-index: -1;\n      position: absolute;\n      top: calc(100% - 1px);\n      left: 0;\n      width: 100%;\n      height: 1px;\n      box-shadow: 0 2px 4px 0 rgba(22, 45, 61, 0.27); }\n    .tooltip-presenter .arrow:before {\n      content: '';\n      z-index: -1;\n      position: absolute;\n      top: 0;\n      left: calc(100% - 1px);\n      width: 1px;\n      height: 100%;\n      box-shadow: 2px 0px 4px 0 rgba(22, 45, 61, 0.27); }\n  .tooltip-presenter.alignment-bottom .arrow:after {\n    top: 0;\n    left: 0;\n    box-shadow: 0 -2px 4px 0 rgba(22, 45, 61, 0.27); }\n  .tooltip-presenter.alignment-bottom .arrow:before {\n    top: 0;\n    left: 0;\n    box-shadow: -2px 0px 4px 0 rgba(22, 45, 61, 0.27); }\n  .tooltip-presenter.alignment-right .arrow:after {\n    top: calc(100% - 1px);\n    left: 0;\n    box-shadow: 0 2px 4px 0 rgba(22, 45, 61, 0.27); }\n  .tooltip-presenter.alignment-right .arrow:before {\n    top: 0;\n    left: 0;\n    box-shadow: -2px 0px 4px 0 rgba(22, 45, 61, 0.27); }\n  .tooltip-presenter.alignment-left .arrow:after {\n    top: 0;\n    left: 0;\n    box-shadow: 0 -2px 4px 0 rgba(22, 45, 61, 0.27); }\n  .tooltip-presenter.alignment-left .arrow:before {\n    top: 0;\n    left: calc(100% - 1px);\n    box-shadow: 2px 0px 4px 0 rgba(22, 45, 61, 0.27); }\n  .tooltip-presenter .content-wrapper {\n    position: relative;\n    color: #2b5672;\n    font-family: HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n    font-size: 14px; }\n  .tooltip-presenter.normal-tooltip .content-wrapper {\n    padding: 18px;\n    font-family: HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n    font-size: 14px;\n    color: #2b5672; }\n  .tooltip-presenter.small-tooltip .content-wrapper {\n    padding: 12px; }\n  .tooltip-presenter .content {\n    word-wrap: break-word; }\n\n.imageAndTextTooltip {\n  white-space: normal; }\n  .imageAndTextTooltip .text-container {\n    padding: 24px; }\n    .imageAndTextTooltip .text-container .title {\n      font-family: HelveticaNeueW01-55Roma, HelveticaNeueW02-55Roma, HelveticaNeueW10-55Roma, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n      font-size: 18px;\n      color: #2b5672;\n      margin-bottom: 12px; }\n    .imageAndTextTooltip .text-container .text {\n      font-family: HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n      font-size: 14px;\n      color: #2b5672; }\n    .imageAndTextTooltip .text-container .learn-more {\n      cursor: pointer;\n      color: #3899ec;\n      font-family: HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n      font-size: 14px;\n      margin-top: 10px; }\n      .imageAndTextTooltip .text-container .learn-more :hover {\n        text-decoration: underline; }\n    .imageAndTextTooltip .text-container.text-no-image {\n      padding: 18px; }\n  .imageAndTextTooltip .image-container {\n    background-color: #3899ec;\n    text-align: center;\n    left: 0;\n    right: 0; }\n    .imageAndTextTooltip .image-container.upper-image {\n      border-top-left-radius: 8px;\n      border-top-right-radius: 8px; }\n    .imageAndTextTooltip .image-container.lower-image {\n      border-bottom-left-radius: 8px;\n      border-bottom-right-radius: 8px; }\n    .imageAndTextTooltip .image-container svg {\n      margin-top: 22px;\n      margin-bottom: 22px; }\n\n.titleBodyAndLinkTooltip {\n  white-space: normal;\n  max-width: 300px;\n  padding: 18px; }\n  .titleBodyAndLinkTooltip .title {\n    font-family: HelveticaNeueW01-55Roma, HelveticaNeueW02-55Roma, HelveticaNeueW10-55Roma, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n    font-size: 18px;\n    color: #2b5672;\n    margin-bottom: 6px; }\n  .titleBodyAndLinkTooltip .text {\n    font-family: HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n    font-size: 14px;\n    color: #2b5672; }\n  .titleBodyAndLinkTooltip .link {\n    font-family: HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n    font-size: 14px;\n    color: #3899ec;\n    cursor: pointer;\n    margin-top: 11px; }\n    .titleBodyAndLinkTooltip .link :hover {\n      text-decoration: underline; }\n\n.keyboardShortcutTooltip .label {\n  font-family: HelveticaNeueW01-55Roma, HelveticaNeueW02-55Roma, HelveticaNeueW10-55Roma, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n  font-size: 14px;\n  color: #2b5672; }\n\n.keyboardShortcutTooltip .shortcut {\n  font-family: HelveticaNeueW01-55Roma, HelveticaNeueW02-55Roma, HelveticaNeueW10-55Roma, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n  font-size: 12px;\n  color: #7a92a5;\n  margin-left: 2px; }\n\n.tooltips-layer {\n  top: 0;\n  left: 0; }\n", ""]);

	// exports


/***/ },
/* 101 */
/*!***********************************************************!*\
  !*** ./js/wix-ui-react/components/panels/openedPanels.js ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(/*! react */ 2);
	var _ = __webpack_require__(/*! lodash */ 4);
	var template = __webpack_require__(/*! wix-ui-react/components/panels/openedPanels.rt */ 102);
	var panelsManagerFactory = __webpack_require__(/*! panels/panelManager/panelManagerFactory */ 105);

	module.exports = React.createClass({

	    displayName: 'OpenedPanels',

	    getOpenedPanels: function getOpenedPanels() {
	        var op = panelsManagerFactory.getManager().getOpenPanels();
	        var comps = _.map(op, function (item) {
	            return item.comp;
	        });
	        return comps;
	    },

	    getInitialState: function getInitialState() {
	        this.initPanelManager();

	        return {
	            openPanels: this.getOpenedPanels()
	        };
	    },

	    onPanelsUpdated: function onPanelsUpdated() {
	        this.setState({
	            openPanels: this.getOpenedPanels()
	        });
	    },

	    initPanelManager: function initPanelManager() {
	        panelsManagerFactory.getManager().registerObserver(this.onPanelsUpdated);
	    },

	    render: template
	});

/***/ },
/* 102 */
/*!***********************************************************!*\
  !*** ./js/wix-ui-react/components/panels/openedPanels.rt ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 2),
	    __webpack_require__(/*! lodash */ 4),
	    __webpack_require__(/*! wix-ui-react/components/panels/basicPanel */ 103)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, BasicPanel) {
	    'use strict';
	    function repeatPanel1(panel, panelIndex) {
	        return React.createElement(BasicPanel, panel.props, '\n       ', panel, '\n    ');
	    }
	    return function () {
	        return React.createElement.apply(this, [
	            'div',
	            { 'className': 'opened-panels' },
	            _.map(this.state.openPanels, repeatPanel1.bind(this))
	        ]);
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 103 */
/*!*********************************************************!*\
  !*** ./js/wix-ui-react/components/panels/basicPanel.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(/*! react */ 2);
	var template = __webpack_require__(/*! wix-ui-react/components/panels/basicPanel.rt */ 104);

	module.exports = React.createClass({

	    displayName: 'Panel',
	    getStyle: function getStyle() {
	        return {
	            zIndex: 1700,
	            top: 30,
	            left: 100,
	            position: 'absolute',
	            width: 210,
	            height: 325,
	            borderRadius: 10,
	            overflow: 'hidden',
	            boxShadow: '2px 2px 10px 2px rgba(10,20,30,0.3)',
	            textAlign: 'center',
	            backgroundColor: '#fff' //'rgba(248, 245, 236, 0.2)'
	        };
	    },

	    render: template
	});

/***/ },
/* 104 */
/*!*********************************************************!*\
  !*** ./js/wix-ui-react/components/panels/basicPanel.rt ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 2),
	    __webpack_require__(/*! lodash */ 4)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _) {
	    'use strict';
	    return function () {
	        return React.createElement('div', { 'style': this.getStyle() }, '\n    ', this.props.children, '\n');
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 105 */
/*!*******************************************************!*\
  !*** ./js/panels/panelManager/panelManagerFactory.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! panels/panelManager/panelManager */ 106)], __WEBPACK_AMD_DEFINE_RESULT__ = function (PanelManagerClass) {
	    'use strict';

	    var manager = null;

	    return {
	        getManager: function getManager() {
	            manager = manager || new PanelManagerClass();
	            return manager;
	        }
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 106 */
/*!************************************************!*\
  !*** ./js/panels/panelManager/panelManager.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! lodash */ 4)], __WEBPACK_AMD_DEFINE_RESULT__ = function (_) {
	    'use strict';

	    function panelManager() {

	        var openedPanels = [];
	        var panelUpdatesObservers = [];

	        /**
	         * Sole point of update for the openedPanels. Other methods MUST NOT change the opened panels array directly!
	         * @private
	         * @param newOpenedPanels
	         */
	        function updateOpenPanels(newOpenedPanels) {
	            openedPanels = newOpenedPanels;
	            notifyObservers();
	        }

	        function notifyObservers() {
	            _.forEach(panelUpdatesObservers, function (observer) {
	                observer();
	            });
	        }

	        function createPanelProps(panelName, panelProps) {
	            return _.assign({}, panelProps, {
	                panelName: panelName,
	                key: panelName + _.uniqueId()
	            });
	        }

	        return {
	            /**
	             * Open a panel
	             * @param panelName the package export path of the panel i.e. "compPanels.panels.SiteButton.settingsPanel"
	             * @param {object} [panelProps] props that will be passed on to the requested panel when created (according to the panel's declared PropTypes i.e. "title", "position" etc.)
	             * @param {boolean} [leavePanelsOpen] if other panels should remain open when opening the current panel. by default all panels should close
	             */
	            openPanel: function openPanel(panelName, panelClass, panelProps, leavePanelsOpen) {
	                if (!leavePanelsOpen) {
	                    this.closeAllPanels();
	                }
	                var currentInstance = _.find(openedPanels, { name: panelName });
	                if (currentInstance && currentInstance.singleInstance) {
	                    this.updatePanelProps(panelName, panelProps);
	                    return;
	                }
	                var props = createPanelProps(panelName, panelProps);
	                var panelDescriptor = {
	                    name: panelName,
	                    comp: React.createElement(panelClass, props),
	                    props: props
	                };
	                updateOpenPanels(openedPanels.concat(panelDescriptor));
	            },

	            /**
	             * Close an open panel that has the provided package export path
	             * @param panelName the package export path of the panel i.e. "compPanels.panels.SiteButton.settingsPanel"
	             */
	            closePanelByName: function closePanelByName(panelName) {
	                updateOpenPanels(_.reject(openedPanels, { name: panelName }));
	            },

	            /**
	             * Close all panels that were chronologically opened after the provided one (not inclusive!)
	             * @param panelName the package export path of the panel i.e. "compPanels.panels.SiteButton.settingsPanel"
	             */
	            closePanelsOpenedAfter: function closePanelsOpenedAfter(panelName) {
	                var panelIndex = _.findIndex(this.getOpenPanels(), { name: panelName });
	                updateOpenPanels(_.take(this.getOpenPanels(), panelIndex + 1));
	            },
	            /**
	             * Close all open panels
	             */
	            closeAllPanels: function closeAllPanels() {
	                updateOpenPanels([]);
	            },
	            /**
	             * Get an array of open panels descriptors
	             *
	             * @typedef {Object} PanelDescriptor
	             * @property {string} name the package export path of the panel i.e. "compPanels.panels.SiteButton.settingsPanel"
	             * @property {string} frameType type of frame, according to the frame's declared displayName
	             * @property {string} props props that are passed on to the panel
	             *
	             * @return {Array.<PanelDescriptor>}
	             */
	            getOpenPanels: function getOpenPanels() {
	                return _.clone(openedPanels);
	            },

	            /**
	             * Register an observer to be called on updates of the open panels' state
	             *
	             * @callback panelObserver
	             *
	             * @param {panelObserver} observer the observer-function to be called on update
	             */
	            registerObserver: function registerObserver(observer) {
	                panelUpdatesObservers.push(observer);
	            },

	            /**
	             * Un Register an observer
	             *
	             * @param {panelObserver} observer the observer-function that was register using registerObserver
	             */
	            unregisterObserver: function unregisterObserver(observer) {
	                var observerIndex = _.indexOf(panelUpdatesObservers, observer);
	                if (observerIndex > -1) {
	                    panelUpdatesObservers.splice(observerIndex, 1);
	                }
	            },

	            /**
	             * Update panel props
	             *
	             * @param {string} panelName
	             * @param {Object} props
	             */
	            updatePanelProps: function updatePanelProps(panelName, props) {
	                var updatedOpenPanels = this.getOpenPanels();
	                var panels = _.filter(updatedOpenPanels, { name: panelName });
	                _.forEach(panels, function (panel) {
	                    _.merge(panel.props, props);
	                    updateOpenPanels(updatedOpenPanels);
	                }, this);
	            }
	        };
	    }

	    return panelManager;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 107 */
/*!*********************************************************************!*\
  !*** ./js/wix-ui-react/components/languagePicker/languagePicker.js ***!
  \*********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(/*! react */ 2);
	var dropDown = __webpack_require__(/*! wix-ui-react/components/dropDown/dropDown */ 78);
	__webpack_require__(/*! baseUI/panelInputs/dropDown/dropDown.scss */ 88);

	module.exports = React.createClass({

	    displayName: 'languagePicker',
	    mixins: [React.addons.LinkedStateMixin],
	    getInitialState: function getInitialState() {
	        return {
	            languages: [{ symbol: 'En', native: 'English' }, { symbol: 'Da', native: 'Dansk' }, { symbol: 'De', native: 'Deutsch' }, { symbol: 'Es', native: 'Español' }, { symbol: 'Fr', native: 'Français' }, { symbol: 'It', native: 'Italiano' }, { symbol: 'Nl', native: 'Nederlands' }, { symbol: 'No', native: 'Norsk' }, { symbol: 'Pl', native: 'Polski' }, { symbol: 'Pt', native: 'Português' }, { symbol: 'Ru', native: 'Русский' }, { symbol: 'Sv', native: 'Svenska' }, { symbol: 'Ja', native: '日本語' }, { symbol: 'Ko', native: '한국어' }, { symbol: 'Tr', native: 'Türkçe' }, { symbol: 'He', native: 'עברית' }]
	        };
	    },

	    render: function render() {
	        function repeatLangs(lang) {
	            return React.createElement(dropDown.option, { value: lang }, lang.native);
	        }
	        return React.createElement(dropDown.select, {
	            'value': this.props.value,
	            'valueLink': this.props.valueLink,
	            'onChange': this.props.onChange,
	            'label': this.props.label,
	            'customDropDownIcon': 'arrowDown', // TODO: use a world icon or something
	            'infoTitle': this.props.infoTitle,
	            'infoText': this.props.infoText || 'here you can select language'

	        }, _.map(this.state.languages, repeatLangs.bind(this)));
	    }
	});

/***/ },
/* 108 */
/*!*****************************************************!*\
  !*** ./js/wix-ui-react/components/slider/slider.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Wix = __webpack_require__(/*! Wix */ 7);

	var template = __webpack_require__(/*! wix-ui-react/components/slider/slider.rt */ 109);
	__webpack_require__(/*! baseUI/panelInputs/slider.scss */ 110);

	module.exports = React.createClass({

	    displayName: 'Slider',
	    propTypes: {
	        label: React.PropTypes.string,
	        defaultValue: React.PropTypes.number,
	        min: React.PropTypes.number,
	        max: React.PropTypes.number,
	        units: React.PropTypes.string,
	        onSlideEnd: React.PropTypes.func,
	        onChange: React.PropTypes.func
	    },

	    getInitialState: function getInitialState() {
	        return {
	            value: this.props.defaultValue
	        };
	    },

	    componentDidMount: function componentDidMount() {
	        if (Wix.Utils.getViewMode() !== 'standalone') {
	            var wixParam = this.props['wix-param'];
	            if (wixParam) {
	                Wix.Styles.getStyleParams((function (styleParams) {
	                    var num = styleParams.numbers[wixParam] || this.props.defaultValue || 0;
	                    this.setState({
	                        value: Number(num || num.value)
	                    });
	                }).bind(this));
	            }
	        }
	    },

	    handleSlideEnd: function handleSlideEnd() {
	        var newValue = this.state.value;

	        if (this.props.onSlideEnd) {
	            this.props.onSlideEnd.call(this, newValue);
	        }
	    },

	    handleChange: function handleChange(newValue) {
	        this.setState({
	            value: newValue
	        });

	        if (Wix.Utils.getViewMode() !== 'standalone') {
	            var wixParam = this.props['wix-param'];
	            if (wixParam) {
	                Wix.Styles.setNumberParam(wixParam, {
	                    value: newValue
	                });
	            }
	        }

	        if (this.props.onChange) {
	            this.props.onChange.call(this, newValue);
	        }
	    },

	    render: template
	});

/***/ },
/* 109 */
/*!*****************************************************!*\
  !*** ./js/wix-ui-react/components/slider/slider.rt ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 2),
	    __webpack_require__(/*! lodash */ 4),
	    __webpack_require__(/*! baseUI/panelInputs/slider */ 57)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, slider) {
	    'use strict';
	    return function () {
	        return React.createElement(slider, {
	            'label': this.props.label,
	            'min': this.props.min,
	            'max': this.props.max,
	            'value': this.state.value,
	            'onChange': this.handleChange,
	            'onSlideEnd': this.handleSlideEnd,
	            'units': this.props.units
	        });
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 110 */
/*!*******************************************!*\
  !*** ./js/baseUI/panelInputs/slider.scss ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/sass-loader?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./slider.scss */ 111);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 41)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./slider.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./slider.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 111 */
/*!*************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./js/baseUI/panelInputs/slider.scss ***!
  \*************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 40)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n.input-slider {\n  position: relative; }\n  .input-slider > label {\n    display: none; }\n  .input-slider.has-label > label {\n    display: block;\n    margin-bottom: 5px;\n    font-size: 14px;\n    color: #2b5672;\n    font-family: HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n    font-size: 14px;\n    text-align: left;\n    font-weight: 300;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap; }\n  .input-slider .info-icon {\n    display: none;\n    position: absolute;\n    top: 0;\n    right: 0px; }\n  .input-slider .sliderArea {\n    position: relative; }\n  .input-slider .slider {\n    position: relative;\n    height: 36px;\n    margin: 0 81px 0 0;\n    padding-top: 3px; }\n    .input-slider .slider .line {\n      position: absolute;\n      top: 17px;\n      left: 0;\n      height: 6px;\n      width: 100%;\n      background-color: #d3edff;\n      border-radius: 3px;\n      box-shadow: inset 0 1px 0 0 #c0e1f2;\n      cursor: pointer; }\n    .input-slider .slider .knobContainer {\n      margin-right: 16px;\n      position: relative; }\n    .input-slider .slider .coloredLine {\n      position: absolute;\n      top: 14px;\n      left: 0;\n      height: 6px;\n      background-color: #3899ec;\n      border-radius: 3px;\n      box-shadow: inset 0 1px 0 0 #3899ec;\n      will-change: width;\n      cursor: pointer; }\n    .input-slider .slider .sliderKnob {\n      position: absolute;\n      content: '';\n      top: 9px;\n      display: inline-block;\n      border-radius: 50%;\n      background-color: #fff;\n      box-shadow: 0px 1px 3px 0px rgba(52, 94, 151, 0.6);\n      width: 16px;\n      height: 16px;\n      cursor: pointer;\n      will-change: left;\n      transition: box-shadow 0.25s ease-in-out 0s; }\n      .input-slider .slider .sliderKnob:after {\n        position: absolute;\n        content: '';\n        display: inline-block;\n        border-radius: 50%;\n        background-color: #3899ec;\n        width: 8px;\n        height: 8px;\n        left: 4px;\n        top: 4px;\n        cursor: pointer; }\n      .input-slider .slider .sliderKnob:hover {\n        box-shadow: 0px 1px 2px 2px rgba(138, 209, 250, 0.58); }\n  .input-slider .input-stepper {\n    position: absolute;\n    right: 0; }\n    .input-slider .input-stepper .input {\n      text-align: right; }\n  .input-slider:hover .input-stepper, .input-slider:hover .input-stepper > * {\n    background-color: #eaf7ff; }\n  .input-slider:hover .info-icon {\n    display: inline-block; }\n  .input-slider.disabled {\n    opacity: .5; }\n", ""]);

	// exports


/***/ },
/* 112 */
/*!*******************************************************!*\
  !*** ./js/wix-ui-react/components/stepper/stepper.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var template = __webpack_require__(/*! wix-ui-react/components/stepper/stepper.rt */ 113);
	__webpack_require__(/*! baseUI/panelInputs/stepper.scss */ 114);

	module.exports = React.createClass({

	    displayName: 'Stepper',
	    propTypes: {
	        min: React.PropTypes.number,
	        max: React.PropTypes.number,
	        step: React.PropTypes.number,
	        units: React.PropTypes.string
	    },

	    getInitialState: function getInitialState() {
	        return {
	            value: this.props.defaultValue
	        };
	    },

	    render: template
	});

/***/ },
/* 113 */
/*!*******************************************************!*\
  !*** ./js/wix-ui-react/components/stepper/stepper.rt ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 2),
	    __webpack_require__(/*! lodash */ 4),
	    __webpack_require__(/*! baseUI/panelInputs/stepper */ 61)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, stepper) {
	    'use strict';
	    return function () {
	        return React.createElement(stepper, {
	            'step': this.props.step,
	            'min': this.props.min,
	            'max': this.props.max,
	            'units': this.props.units,
	            'value': this.props.defaultValue,
	            'onChange': this.props.onChange
	        });
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 114 */
/*!********************************************!*\
  !*** ./js/baseUI/panelInputs/stepper.scss ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/sass-loader?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./stepper.scss */ 115);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 41)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./stepper.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./stepper.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 115 */
/*!**************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./js/baseUI/panelInputs/stepper.scss ***!
  \**************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 40)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n.input-stepper {\n  border-radius: 8px;\n  border: 1px solid transparent;\n  width: 56px;\n  padding: 0 6px;\n  position: relative;\n  text-align: left;\n  display: inline-block; }\n  .input-stepper:after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    border: 1px solid transparent;\n    border-radius: 8px;\n    pointer-events: none; }\n  .input-stepper.edited:after {\n    border-color: #9cccf6;\n    box-shadow: inset 0px 0px 3px 0px rgba(0, 90, 132, 0.25); }\n  html .input-stepper:not(.disabled):hover,\n  .input-stepper:not(.disabled):hover > input,\n  .input-stepper:not(.disabled):hover > .units,\n  .input-stepper:not(.disabled) > input:focus {\n    background-color: #d3edff;\n    color: #2b5672;\n    cursor: pointer; }\n  .input-stepper:not(.disabled):hover:after {\n    border-color: #d3edff; }\n  .input-stepper.edited {\n    background-color: transparent !important; }\n    .input-stepper.edited > input {\n      background-color: transparent !important;\n      cursor: text !important; }\n  .input-stepper:not(.edited) > input {\n    cursor: default; }\n    .input-stepper:not(.edited) > input::selection {\n      background-color: transparent; }\n  .input-stepper .input {\n    border: none;\n    outline: none;\n    text-align: center;\n    font-family: HelveticaNeueW01-55Roma, HelveticaNeueW02-55Roma, HelveticaNeueW10-55Roma, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n    font-size: 18px;\n    height: 36px;\n    line-height: 36px;\n    padding: 0 7px;\n    width: calc(100% - 14px);\n    display: inline-block;\n    color: #162d3d; }\n    .input-stepper .input::selection {\n      background-color: #eaf7ff; }\n  .input-stepper.has-units .input {\n    width: 70%;\n    padding: 0;\n    text-align: right;\n    display: inline-block; }\n  .input-stepper .units {\n    line-height: 36px;\n    height: 36px;\n    width: 1%;\n    display: inline-block;\n    white-space: nowrap;\n    padding: 0 7px 0 1px; }\n  .input-stepper.edited .units {\n    visibility: hidden; }\n  .input-stepper.disabled {\n    opacity: 0.5; }\n    .input-stepper.disabled > input {\n      color: #7a7a7a;\n      background: transparent; }\n    .input-stepper.disabled .units {\n      color: #7a7a7a; }\n\n.input-stepper.small {\n  width: 45px;\n  padding: 2px 2px 2px 0; }\n  .input-stepper.small .units {\n    height: 18px;\n    line-height: 18px;\n    font-size: 12px; }\n  .input-stepper.small > input {\n    font-size: 12px;\n    height: 18px;\n    line-height: 18px; }\n", ""]);

	// exports


/***/ },
/* 116 */
/*!*************************************************!*\
  !*** ./js/wix-ui-react/components/tabs/tabs.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var tabHolder = __webpack_require__(/*! baseUI/tabs/tabHolder */ 117);
	var tabLabel = __webpack_require__(/*! baseUI/tabs/tabLabel */ 118);
	var tabHeader = __webpack_require__(/*! baseUI/tabs/tabHeader */ 119);
	var tabContent = __webpack_require__(/*! baseUI/tabs/tabContent */ 120);
	var tab = __webpack_require__(/*! baseUI/tabs/tab */ 121);
	__webpack_require__(/*! wix-ui-react/components/tabs/tabs-ui-lib.scss */ 122);

	module.exports = {
	    holder: tabHolder,
	    header: tabHeader,
	    label: tabLabel,
	    content: tabContent,
	    tab: tab
	};

/***/ },
/* 117 */
/*!*************************************!*\
  !*** ./js/baseUI/tabs/tabHolder.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 2), __webpack_require__(/*! baseUI/panelInputs/inputMixin */ 37), __webpack_require__(/*! baseUI/mixins/classNameMixin */ 30)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, inputMixin, classNameMixin) {
	    'use strict';

	    return React.createClass({
	        mixins: [inputMixin, classNameMixin],

	        displayName: 'tabs',

	        propTypes: {
	            className: React.PropTypes.string,
	            style: React.PropTypes.object,
	            defaultTab: React.PropTypes.any
	        },

	        getInitialState: function getInitialState() {
	            return {
	                value: this.getValueFromProps(this.props) !== undefined ? this.getValueFromProps(this.props) : this.props.defaultTab
	            };
	        },

	        componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	            var newVal = this.getValueFromProps(nextProps);

	            if (newVal !== undefined && this.state.value !== newVal) {
	                this.setState({ value: newVal });
	            }
	        },

	        setSelected: function setSelected(value) {
	            this.callOnChangeIfExists(value);
	            this.setState({ value: value });
	        },

	        generateChildren: function generateChildren() {
	            var children = [];

	            React.Children.forEach(this.props.children, function (child) {
	                var type = child.props.type;

	                if (type === 'tabHeader') {
	                    children.push(React.addons.cloneWithProps(child, {
	                        setSelected: this.setSelected,
	                        value: this.state.value,
	                        key: 'tab-header'
	                    }));
	                } else if (type === 'tabContent') {
	                    children.push(React.addons.cloneWithProps(child, {
	                        value: this.state.value,
	                        key: 'tab-content'
	                    }));
	                } else {
	                    children.push(child);
	                }
	            }, this);

	            return children;
	        },

	        render: function render() {
	            return React.DOM.section({
	                className: this.generateClassName('tabs'),
	                style: this.props.style
	            }, this.generateChildren());
	        }
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 118 */
/*!************************************!*\
  !*** ./js/baseUI/tabs/tabLabel.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 2), __webpack_require__(/*! baseUI/mixins/classNameMixin */ 30)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, classNameMixin) {
	    'use strict';

	    return React.createClass({
	        displayName: 'tabLabel',

	        mixins: [classNameMixin],

	        getDefaultProps: function getDefaultProps() {
	            return {
	                type: this.displayName
	            };
	        },

	        setSelected: function setSelected() {
	            var props = this.props;
	            var value = typeof props['for'] !== 'undefined' ? props['for'] : props.htmlFor;
	            props.setSelected(value);
	        },

	        render: function render() {
	            return React.DOM.li({
	                onClick: this.setSelected,
	                className: this.generateClassName('tab-label ' + (this.props.selected ? 'selected' : '')),
	                style: this.props.style
	            }, this.props.children);
	        }
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 119 */
/*!*************************************!*\
  !*** ./js/baseUI/tabs/tabHeader.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 2), __webpack_require__(/*! baseUI/mixins/classNameMixin */ 30)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, classNameMixin) {
	    'use strict';

	    return React.createClass({
	        mixins: [classNameMixin],

	        displayName: 'tabHeader',
	        childrenList: [],
	        i: 1,

	        getInitialState: function getInitialState() {
	            return {
	                showMore: false
	            };
	        },

	        getDefaultProps: function getDefaultProps() {
	            return {
	                type: this.displayName
	            };
	        },

	        showMore: function showMore() {
	            this.setState({ showMore: true });
	        },

	        createLabel: function createLabel(elem, i) {
	            return React.addons.cloneWithProps(elem, {
	                setSelected: this.props.setSelected,
	                selected: elem.props['for'] !== undefined ? this.props.value === elem.props['for'] : this.props.value === elem.props.htmlFor,
	                key: 'tab-label ' + i
	            });
	        },

	        createShowMoreLabel: function createShowMoreLabel(elem) {
	            return React.addons.cloneWithProps(elem, {
	                showMore: this.showMore,
	                key: 'tab-show-more-label'
	            });
	        },

	        addChild: function addChild(child) {
	            if (!child) {
	                return false;
	            }
	            var type = child.props.type;
	            var showMore = type === 'tabShowMoreLabel' && !this.state.showMore;

	            if (type === 'tabLabel') {
	                this.childrenList.push(this.createLabel(child, this.i));
	                this.i++; //eslint-disable-line space-unary-ops
	            } else if (showMore) {
	                    this.childrenList.push(this.createShowMoreLabel(child));
	                }

	            return showMore;
	        },

	        generateChildren: function generateChildren() {
	            var currentChildren = this.props.children;
	            this.i = 1;
	            this.childrenList = [];

	            if (currentChildren.constructor === Array) {
	                currentChildren.some(this.addChild, this);
	            } else if (currentChildren.constructor === Object) {
	                // the only child
	                this.addChild(currentChildren);
	            }

	            return this.childrenList;
	        },

	        render: function render() {
	            return React.DOM.ul({
	                className: this.generateClassName('tab-header'),
	                style: this.props.style
	            }, this.generateChildren());
	        }
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 120 */
/*!**************************************!*\
  !*** ./js/baseUI/tabs/tabContent.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 2), __webpack_require__(/*! baseUI/mixins/classNameMixin */ 30)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, classNameMixin) {
	    'use strict';

	    return React.createClass({
	        mixins: [classNameMixin],

	        displayName: 'tabContent',

	        getDefaultProps: function getDefaultProps() {
	            return {
	                type: this.displayName
	            };
	        },

	        getSelectedTab: function getSelectedTab() {
	            var children = this.props.children;
	            var i = 1;
	            var currentTab = false;
	            var selected = this.props.value;

	            if (children.constructor === Array) {
	                children.some(function (child) {
	                    if (!child) {
	                        return false;
	                    }
	                    var type = child.props.type;

	                    if (type === 'tab') {
	                        if (selected === child.props.name) {
	                            currentTab = child;
	                        }

	                        i++;
	                    }

	                    return Boolean(currentTab);
	                }, this);
	            } else if (children.constructor === Object) {
	                // the only child
	                currentTab = selected === children.props.name ? children : null;
	            }

	            return currentTab;
	        },

	        render: function render() {
	            return React.DOM.section({
	                className: this.generateClassName('tab-content ' + this.props.value),
	                style: this.props.style
	            }, this.getSelectedTab());
	        }
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 121 */
/*!*******************************!*\
  !*** ./js/baseUI/tabs/tab.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 2), __webpack_require__(/*! baseUI/mixins/classNameMixin */ 30)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, classNameMixin) {
	    'use strict';

	    return React.createClass({
	        displayName: 'tab',

	        mixins: [classNameMixin],

	        getDefaultProps: function getDefaultProps() {
	            return {
	                type: this.displayName
	            };
	        },

	        render: function render() {
	            return React.createElement('div', {
	                className: this.generateClassName('tab'),
	                style: this.props.style
	            }, this.props.children);
	        }
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 122 */
/*!**********************************************************!*\
  !*** ./js/wix-ui-react/components/tabs/tabs-ui-lib.scss ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(/*! !./../../../../~/css-loader!./../../../../~/sass-loader?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./tabs-ui-lib.scss */ 123);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../../~/style-loader/addStyles.js */ 41)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./tabs-ui-lib.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./tabs-ui-lib.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 123 */
/*!****************************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./js/wix-ui-react/components/tabs/tabs-ui-lib.scss ***!
  \****************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../../~/css-loader/lib/css-base.js */ 40)();
	// imports


	// module
	exports.push([module.id, "section.tabs {\n  overflow: hidden;\n  position: relative; }\n  section.tabs > ul.tab-header > li.tab-label {\n    cursor: pointer;\n    display: block; }\n  section.tabs > section.tab-content {\n    position: relative; }\n  section.tabs.left {\n    display: flex; }\n    section.tabs.left > section.tab-content {\n      align-self: stretch; }\n  section.tabs.top > ul.tab-header {\n    display: block;\n    overflow: hidden;\n    width: 100%; }\n    section.tabs.top > ul.tab-header > li.tab-label {\n      float: left; }\n  section.tabs.radio > ul.tab-header > li.tab-label {\n    line-height: 16px;\n    margin-bottom: 15px;\n    padding-left: 32px;\n    position: relative; }\n    section.tabs.radio > ul.tab-header > li.tab-label:before, section.tabs.radio > ul.tab-header > li.tab-label:after {\n      content: '';\n      border-radius: 50%;\n      display: block;\n      position: absolute; }\n    section.tabs.radio > ul.tab-header > li.tab-label:before {\n      border: 1px solid #3899ec;\n      box-sizing: border-box;\n      height: 16px;\n      left: 5px;\n      width: 16px;\n      top: calc(50% - 8px); }\n    section.tabs.radio > ul.tab-header > li.tab-label.selected:after {\n      background-color: #3899ec;\n      height: 12px;\n      left: 7px;\n      width: 12px;\n      top: calc(50% - 6px); }\n\nsection.tabs.top > ul.tab-header {\n  display: flex; }\n\nsection.tabs {\n  border: 1px solid #d9e1e8;\n  border-radius: 8px; }\n  section.tabs > ul.tab-header {\n    width: 472px;\n    min-height: 47px;\n    display: flex; }\n    section.tabs > ul.tab-header > li.tab-label {\n      flex-grow: 1;\n      border: 1px solid #d9e1e8;\n      border-top: 0;\n      box-sizing: border-box;\n      position: relative;\n      margin-left: -1px;\n      background-color: #eaf7ff;\n      height: 47px;\n      line-height: 47px;\n      text-align: center;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      padding: 0 10px; }\n      section.tabs > ul.tab-header > li.tab-label:last-child {\n        border-right: 0; }\n      section.tabs > ul.tab-header > li.tab-label:hover {\n        background-color: #d3edff;\n        border-bottom: 1px solid #d3edff; }\n      section.tabs > ul.tab-header > li.tab-label.selected {\n        border-bottom: 1px solid #fff;\n        background-color: #fff;\n        color: #2b5672; }\n  section.tabs > section.tab-content .tabs {\n    border-bottom: 0; }\n    section.tabs > section.tab-content .tabs .tab-header > .tab-label {\n      border-bottom: 1px solid #d9e1e8;\n      padding-bottom: 15px; }\n      section.tabs > section.tab-content .tabs .tab-header > .tab-label:last-child {\n        border-bottom: 0; }\n      section.tabs > section.tab-content .tabs .tab-header > .tab-label:before {\n        top: 0; }\n      section.tabs > section.tab-content .tabs .tab-header > .tab-label:after {\n        top: 2px; }\n", ""]);

	// exports


/***/ },
/* 124 */
/*!***********************************************************!*\
  !*** ./js/wix-ui-react/components/textInput/textInput.js ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 2), __webpack_require__(/*! lodash */ 4), __webpack_require__(/*! baseUI/panelInputs/textInputSync */ 125), __webpack_require__(/*! baseUI/panelInputs/textInputAsync */ 129), __webpack_require__(/*! wix-ui-react/components/textInput/textInput.rt */ 131)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, textInputSync, textInputAsync, template) {
	    'use strict';

	    return React.createClass({
	        displayName: 'textInput',
	        propTypes: {
	            label: React.PropTypes.string,
	            type: React.PropTypes.string,
	            placeholder: React.PropTypes.string,
	            defaultText: React.PropTypes.string,
	            maxLength: React.PropTypes.number,
	            className: React.PropTypes.string,
	            isMultiLine: React.PropTypes.bool,
	            infoText: React.PropTypes.string,
	            infoTitle: React.PropTypes.string,
	            onChangeInValidationStatus: React.PropTypes.func,
	            validateOnBlurOnly: React.PropTypes.bool
	        },
	        getInputComponent: function getInputComponent() {
	            if (this.props.validateOnBlurOnly) {
	                return textInputAsync;
	            }
	            return textInputSync;
	        },
	        getPropsForInputComponent: function getPropsForInputComponent() {
	            var props = _.clone(this.props);
	            props.textAreaClass = 'textarea';
	            return props;
	        },
	        isValueValid: function isValueValid() {
	            return this.refs.inputComp.isValid();
	        },
	        focus: function focus() {
	            this.refs.inputComp.focus();
	        },
	        getValue: function getValue() {
	            this.refs.inputComp.lastValidValue;
	        },
	        setValue: function setValue(newValue) {
	            this.refs.inputComp.setState({
	                value: newValue
	            });
	        },
	        render: template
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 125 */
/*!************************************************!*\
  !*** ./js/baseUI/panelInputs/textInputSync.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! lodash */ 4), __webpack_require__(/*! jquery */ 58), __webpack_require__(/*! react */ 2), __webpack_require__(/*! util */ 17), __webpack_require__(/*! baseUI/mixins/inputFocusMixin */ 126), __webpack_require__(/*! baseUI/panelInputs/inputMixin */ 37), __webpack_require__(/*! baseUI/panelInputs/inputValidationMixin */ 127), __webpack_require__(/*! baseUI/popovers/tooltipManager */ 35), __webpack_require__(/*! baseUI/panelInputs/textInputCommon.rt */ 128)], __WEBPACK_AMD_DEFINE_RESULT__ = function (_, $, React, util, inputFocusMixin, inputMixin, inputValidationMixin, tooltipManager, template) {
	    'use strict';

	    var SUCCESS_DURATION = 1000;
	    var TEXT_INPUT_TOOLTIP_ERROR = 'text-input-sync-validation-error-';
	    var KEYS = {
	        ESC: 27,
	        ENTER: 13
	    };

	    return React.createClass({
	        displayName: 'textInputSync',
	        mixins: [React.addons.LinkedStateMixin, inputFocusMixin, inputMixin, inputValidationMixin, util.translationMixin, util.blockOuterScrollMixin],
	        propTypes: {
	            label: React.PropTypes.string,
	            type: React.PropTypes.string,
	            placeholder: React.PropTypes.string,
	            defaultText: React.PropTypes.string,
	            maxLength: React.PropTypes.number,
	            focus: React.PropTypes.bool,
	            className: React.PropTypes.string,
	            isMultiLine: React.PropTypes.bool,
	            infoText: React.PropTypes.string,
	            infoTitle: React.PropTypes.string,
	            onChangeInValidationStatus: React.PropTypes.func,
	            textAreaClass: React.PropTypes.string
	        },
	        getInitialState: function getInitialState() {
	            var value = this.getInitialValue();
	            //todo Shimi_Liderman 7/6/15 20:55 should validate initial value? if not valid what is the initial lastValidValue?
	            this.lastValidValue = value;
	            return {
	                value: value,
	                isFocused: false
	            };
	        },
	        getInitialValue: function getInitialValue() {
	            var valueFromProps = this.getValueFromProps();
	            return valueFromProps ? valueFromProps : this.translateIfNeeded(this.props.defaultText) || '';
	        },
	        getWrapperClasses: function getWrapperClasses() {
	            var isValid = this.isValid(this.state.value);
	            var classes = {
	                'control-text-input': true,
	                'success': isValid && this.shouldDisplaySuccessIndicator,
	                'error': !isValid,
	                'instant-error': !isValid,
	                'is-disabled': this.isDisabled(),
	                'focused': this.state.isFocused,
	                'has-label': this.props.label
	            };

	            if (this.props.className) {
	                classes[this.props.className] = true;
	            }

	            return classes;
	        },
	        getInputElementClass: function getInputElementClass() {
	            return this.props.isMultiLine ? 'textarea' : 'input';
	        },
	        getTooltipId: function getTooltipId() {
	            if (!this.uniqueTooltipId) {
	                this.uniqueTooltipId = TEXT_INPUT_TOOLTIP_ERROR + _.uniqueId();
	            }

	            return this.uniqueTooltipId;
	        },
	        hasValueBeenChangedByUser: function hasValueBeenChangedByUser(value) {
	            return value !== this.valueOnFocus;
	        },
	        scrollInputToTopIfNeeded: function scrollInputToTopIfNeeded() {
	            if (this.props.isMultiLine) {
	                this.refs.input.getDOMNode().scrollTop = 0;
	            }
	        },
	        componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	            var nextValue = this.getValueFromProps(nextProps);
	            if (nextValue !== this.getValueFromProps() && nextValue !== this.state.value && this.isValid(nextValue)) {
	                this.setState({ value: nextValue });
	                this.lastValidValue = nextValue;
	                this.valueOnFocus = nextValue;
	            }
	        },
	        componentWillUpdate: function componentWillUpdate(nextProps, nextState) {
	            var self = this;
	            if (shouldDisplaySuccessIndicator()) {
	                this.shouldDisplaySuccessIndicator = true;
	                setTimeout(hideSuccessIndicator, SUCCESS_DURATION);
	            }

	            function shouldDisplaySuccessIndicator() {
	                return !nextState.isFocused && self.state.isFocused && self.hasValueBeenChangedByUser(nextState.value) && self.isValid(nextState.value);
	            }

	            function hideSuccessIndicator() {
	                if (self.isMounted()) {
	                    self.shouldDisplaySuccessIndicator = false;
	                    self.forceUpdate();
	                }
	            }
	        },
	        componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
	            var hasGainedFocus = !prevState.isFocused && this.state.isFocused;
	            var hasLostFocus = prevState.isFocused && !this.state.isFocused;

	            this.handleAutoFocusIfNeeded(prevProps);

	            if (hasGainedFocus) {
	                this.selectContent();
	                this.valueOnFocus = this.lastValidValue;
	            } else if (hasLostFocus) {
	                this.scrollInputToTopIfNeeded();
	            }

	            var value = this.state.value;
	            if (prevState.value !== value) {
	                var isValid = this.isValid(value);
	                if (isValid) {
	                    this.lastValidValue = value;
	                    if (value !== this.getValueFromProps()) {
	                        // value was not changed as a result of a new value passed in props
	                        this.callOnChangeIfExists(value);
	                    }
	                    tooltipManager.hide(this.getTooltipId());
	                } else {
	                    tooltipManager.show(this.getTooltipId());
	                }

	                if (this.props.onChangeInValidationStatus) {
	                    this.props.onChangeInValidationStatus(isValid);
	                }
	            }
	        },
	        selectContent: function selectContent() {
	            var $input = $(this.refs.input.getDOMNode());
	            $input.select().one('mouseup', function (e) {
	                e.preventDefault();
	            });
	        },
	        handleCancel: function handleCancel() {
	            var self = this;
	            this.lastValidValue = this.valueOnFocus;
	            this.setState({ value: this.valueOnFocus }, function () {
	                $(self.refs.input.getDOMNode()).blur();
	            });
	        },
	        handleKeyDown: function handleKeyDown(evt) {
	            var keyCode = evt.keyCode;
	            switch (keyCode) {
	                case KEYS.ESC:
	                    //esc
	                    this.handleCancel();
	                    break;
	                case KEYS.ENTER:
	                    //enter
	                    if (!this.props.isMultiLine) {
	                        $(this.refs.input.getDOMNode()).blur();
	                    }
	                    break;
	            }
	        },
	        render: template
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 126 */
/*!*********************************************!*\
  !*** ./js/baseUI/mixins/inputFocusMixin.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ 58)], __WEBPACK_AMD_DEFINE_RESULT__ = function ($) {
	    'use strict';

	    return {
	        focus: function focus() {
	            $(this.refs.input.getDOMNode()).focus();
	        },
	        handleAutoFocusIfNeeded: function handleAutoFocusIfNeeded(prevProps) {
	            // this is needed because autoFocus does not work with input in panels, and neither does focusing on componentDidMount or on first componentDidUpdate
	            var isFocused = this.state.isFocused;
	            var isAutoFocusRequested = !!this.props.focus;

	            if (isAutoFocusRequested && !isFocused) {
	                var hasAutoFocusJustBeenRequested = !prevProps.focus && isAutoFocusRequested;

	                if (hasAutoFocusJustBeenRequested || !this.wasFocusedBefore) {
	                    this.wasFocusedBefore = false;
	                    var $input = $(this.refs.input.getDOMNode());
	                    $input.focus();
	                }
	            } else if (isAutoFocusRequested && isFocused) {
	                this.wasFocusedBefore = true;
	            }
	        }
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 127 */
/*!*******************************************************!*\
  !*** ./js/baseUI/panelInputs/inputValidationMixin.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 2), __webpack_require__(/*! lodash */ 4)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _) {
	    'use strict';

	    return {
	        propTypes: {
	            validator: React.PropTypes.oneOfType([React.PropTypes.func, React.PropTypes.arrayOf(React.PropTypes.func)]),
	            invalidMessage: React.PropTypes.oneOfType([React.PropTypes.func, React.PropTypes.string])
	        },

	        /**
	         * Returns true if ALL validation functions return true
	         * @param value
	         * @returns {boolean}
	         */
	        isValid: function isValid(value) {
	            if (!this.hasValidator()) {
	                return true;
	            }

	            value = arguments.length === 0 ? this.state.value : value;

	            if (_.isArray(this.props.validator)) {
	                return _.every(this.props.validator, function (validator) {
	                    return validator(value);
	                });
	            }
	            return this.props.validator(value);
	        },

	        hasValidator: function hasValidator() {
	            return !!this.props.validator;
	        },

	        /**
	         * Returns the invalid message
	         * @returns {string}
	         */
	        getInvalidMessage: function getInvalidMessage() {
	            return _.isFunction(this.props.invalidMessage) ? this.props.invalidMessage() : this.props.invalidMessage;
	        }
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 128 */
/*!**************************************************!*\
  !*** ./js/baseUI/panelInputs/textInputCommon.rt ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 2),
	    __webpack_require__(/*! lodash */ 4),
	    __webpack_require__(/*! baseUI/popovers/tooltip */ 33),
	    __webpack_require__(/*! baseUI/framework/uiConstants */ 12),
	    __webpack_require__(/*! symbols */ 26),
	    __webpack_require__(/*! baseUI/controls/infoIcon */ 11)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, tooltip, uiConstants, symbols, infoIcon) {
	    'use strict';
	    function onFocus1(inputClass) {
	        this.setState({ isFocused: true });
	    }
	    function onBlur2(inputClass) {
	        this.setState({ isFocused: false });
	    }
	    function scopeInputClass3() {
	        var inputClass = this.getInputElementClass();
	        return React.createElement('div', _.assign({}, { 'className': _.keys(_.pick(this.getWrapperClasses(), _.identity)).join(' ') }, this.filteredProps()), this.hasLabel() ? React.createElement('label', { 'key': 'textInputControlTitle' }, this.translateIfNeeded(this.getLabel())) : null, this.hasLabel() && (this.props.infoText || this.props.infoTitle) ? React.createElement(infoIcon, {
	            'key': 'infoIcon',
	            'text': this.props.infoText,
	            'title': this.props.infoTitle,
	            'size': 18
	        }) : null, React.createElement(inputClass, {
	            'ref': 'input',
	            'type': this.props.type || 'text',
	            'className': this.props.isMultiLine ? this.props.textAreaClass : '',
	            'valueLink': this.linkState('value'),
	            'onWheel': this.handleWheel,
	            'disabled': this.isDisabled(),
	            'placeholder': this.translateIfNeeded(this.props.placeholder) || '',
	            'maxLength': this.props.maxLength,
	            'spellCheck': false,
	            'autoFocus': this.props.focus,
	            'onKeyDown': this.handleKeyDown,
	            'onFocus': onFocus1.bind(this, inputClass),
	            'onBlur': onBlur2.bind(this, inputClass)
	        }), React.createElement(tooltip, {
	            'id': this.getTooltipId(),
	            'value': this.getInvalidMessage(),
	            'width': '300px',
	            'styleType': uiConstants.TOOLTIP.STYLE_TYPE.SMALL,
	            'openTriggers': [],
	            'closeTriggers': []
	        }, React.createElement('span', {
	            'className': 'validation-icon validation-icon-error',
	            'onClick': this.selectContent
	        }, React.createElement(symbols.symbol, { 'name': 'inputValidationError' }))), React.createElement('span', { 'className': 'validation-icon validation-icon-success' }, React.createElement(symbols.symbol, { 'name': 'inputValidationSuccess' })));
	    }
	    return function () {
	        return scopeInputClass3.apply(this, []);
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 129 */
/*!*************************************************!*\
  !*** ./js/baseUI/panelInputs/textInputAsync.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! lodash */ 4), __webpack_require__(/*! jquery */ 58), __webpack_require__(/*! react */ 2), __webpack_require__(/*! util */ 17), __webpack_require__(/*! baseUI/panelInputs/inputMixin */ 37), __webpack_require__(/*! baseUI/mixins/inputFocusMixin */ 126), __webpack_require__(/*! baseUI/panelInputs/inputValidationMixin */ 127), __webpack_require__(/*! baseUI/panelInputs/inputValidationAsyncMixin */ 130), __webpack_require__(/*! baseUI/popovers/tooltipManager */ 35), __webpack_require__(/*! baseUI/panelInputs/textInputCommon.rt */ 128)], __WEBPACK_AMD_DEFINE_RESULT__ = function (_, $, React, util, inputMixin, inputFocusMixin, inputValidationMixin, inputValidationAsyncMixin, tooltipManager, template) {
	    'use strict';

	    var SUCCESS_DURATION = 1000;
	    var TEXT_INPUT_TOOLTIP_ERROR = 'text-input-async-validation-error-';
	    var KEYS = {
	        ESC: 27,
	        ENTER: 13
	    };

	    return React.createClass({
	        displayName: 'textInputAsync',
	        mixins: [React.addons.LinkedStateMixin, inputMixin, inputFocusMixin, inputValidationMixin, inputValidationAsyncMixin, util.translationMixin, util.blockOuterScrollMixin],
	        propTypes: {
	            label: React.PropTypes.string,
	            type: React.PropTypes.string,
	            placeholder: React.PropTypes.string,
	            defaultText: React.PropTypes.string,
	            maxLength: React.PropTypes.number,
	            focus: React.PropTypes.bool,
	            className: React.PropTypes.string,
	            isMultiLine: React.PropTypes.bool,
	            infoText: React.PropTypes.string,
	            infoTitle: React.PropTypes.string,
	            onChangeInValidationStatus: React.PropTypes.func,
	            textAreaClass: React.PropTypes.string
	        },
	        ValidationStatus: {
	            NONE: 'none',
	            SUCCESS: 'success',
	            ERROR: 'error'
	        },
	        getInitialState: function getInitialState() {
	            var value = this.getInitialValue();
	            //todo Shimi_Liderman 7/6/15 20:55 should validate initial value? if not valid what is the initial lastValidValue?
	            this.lastValidValue = value;
	            return {
	                value: value,
	                validationStatus: this.ValidationStatus.NONE,
	                isFocused: false
	            };
	        },
	        getInitialValue: function getInitialValue() {
	            var valueFromProps = this.getValueFromProps();
	            return valueFromProps ? valueFromProps : this.translateIfNeeded(this.props.defaultText) || '';
	        },
	        getWrapperClasses: function getWrapperClasses() {
	            var classes = {
	                'control-text-input': true,
	                'success': this.state.validationStatus === this.ValidationStatus.SUCCESS,
	                'error': this.state.validationStatus === this.ValidationStatus.ERROR,
	                'is-disabled': this.isDisabled(),
	                'focused': this.state.isFocused,
	                'has-label': this.props.label
	            };

	            if (this.props.className) {
	                classes[this.props.className] = true;
	            }

	            return classes;
	        },
	        getInputElementClass: function getInputElementClass() {
	            return this.props.isMultiLine ? 'textarea' : 'input';
	        },
	        getTooltipId: function getTooltipId() {
	            if (!this.uniqueTooltipId) {
	                this.uniqueTooltipId = TEXT_INPUT_TOOLTIP_ERROR + _.uniqueId();
	            }

	            return this.uniqueTooltipId;
	        },
	        hasValueBeenChangedByUser: function hasValueBeenChangedByUser(value) {
	            return value !== this.lastValidValue;
	        },
	        onValidationSuccess: function onValidationSuccess(value, result) {
	            if (this.isMounted()) {
	                this.successResultObject = result;
	                this.setState({ validationStatus: this.ValidationStatus.SUCCESS });
	            } else {
	                this.callOnChangeIfExists(value, this.successResultObject);
	            }
	        },
	        onValidationFailure: function onValidationFailure() {
	            if (this.isMounted()) {
	                this.setState({ validationStatus: this.ValidationStatus.ERROR });
	            }
	        },
	        validate: function validate(value, onSuccess, onFailure) {
	            if (this.isValid(value)) {
	                this.isAsyncValid(value, onSuccess, onFailure);
	            } else {
	                onFailure(this.getInvalidMessage());
	            }
	        },
	        hideSuccessIndicator: function hideSuccessIndicator() {
	            if (this.isMounted()) {
	                this.setState({ validationStatus: this.ValidationStatus.NONE });
	            }
	        },
	        onValueValid: function onValueValid(value) {
	            setTimeout(this.hideSuccessIndicator, SUCCESS_DURATION);
	            tooltipManager.hide(this.getTooltipId());
	            this.lastValidValue = value;
	            this.callOnChangeIfExists(value, this.successResultObject);
	        },
	        toggleErrorTooltip: function toggleErrorTooltip() {
	            var isFocused = this.state.isFocused;
	            var validationStatus = this.state.validationStatus;
	            var tooltipId = this.getTooltipId();

	            if (!isFocused && validationStatus === this.ValidationStatus.ERROR) {
	                tooltipManager.show(tooltipId);
	            } else {
	                tooltipManager.hide(tooltipId);
	            }
	        },
	        scrollInputToTopIfNeeded: function scrollInputToTopIfNeeded() {
	            if (this.props.isMultiLine) {
	                this.refs.input.getDOMNode().scrollTop = 0;
	            }
	        },
	        componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	            var nextValue = this.getValueFromProps(nextProps);
	            if (nextValue !== this.getValueFromProps() && nextValue !== this.state.value) {
	                this.lastValidValue = nextValue;
	                this.setState({ value: nextValue });
	            }
	        },
	        componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
	            var value = this.state.value;
	            var validationStatus = this.state.validationStatus;
	            var hasGainedFocus = !prevState.isFocused && this.state.isFocused;
	            var hasLostFocus = prevState.isFocused && !this.state.isFocused;
	            var hasValidationStatusChanged = prevState.validationStatus !== validationStatus;

	            this.handleAutoFocusIfNeeded(prevProps);

	            this.toggleErrorTooltip();

	            if (hasGainedFocus) {
	                this.selectContent();
	            } else if (hasLostFocus) {
	                this.scrollInputToTopIfNeeded();
	                if (this.hasValueBeenChangedByUser(value)) {
	                    this.validate(value, this.onValidationSuccess.bind(this, value), this.onValidationFailure);
	                }
	            }

	            if (hasValidationStatusChanged && validationStatus === this.ValidationStatus.SUCCESS) {
	                this.onValueValid(value);
	            }
	        },
	        selectContent: function selectContent() {
	            var $input = $(this.refs.input.getDOMNode());
	            $input.select().one('mouseup', function (e) {
	                e.preventDefault();
	            });
	        },
	        handleCancel: function handleCancel() {
	            var self = this;
	            this.setState({ value: this.lastValidValue, validationStatus: this.ValidationStatus.NONE }, function () {
	                $(self.refs.input.getDOMNode()).blur();
	            });
	        },
	        handleKeyDown: function handleKeyDown(evt) {
	            var keyCode = evt.keyCode;
	            switch (keyCode) {
	                case KEYS.ESC:
	                    //esc
	                    this.handleCancel();
	                    break;
	                case KEYS.ENTER:
	                    //enter
	                    if (!this.props.isMultiLine) {
	                        $(this.refs.input.getDOMNode()).blur();
	                    }
	                    break;
	            }
	        },
	        render: template
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 130 */
/*!************************************************************!*\
  !*** ./js/baseUI/panelInputs/inputValidationAsyncMixin.js ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 2), __webpack_require__(/*! lodash */ 4)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _) {
	    'use strict';

	    return {
	        propTypes: {
	            asyncValidator: React.PropTypes.oneOfType([React.PropTypes.func, React.PropTypes.arrayOf(React.PropTypes.objectOf(React.PropTypes.func)), React.PropTypes.arrayOf(React.PropTypes.func)])
	        },

	        /**
	         * @param value
	         * @param onSuccess
	         * @param onError
	         */
	        isAsyncValid: function isAsyncValid(value, onSuccess, onError) {
	            if (!this.hasAsyncValidator()) {
	                onSuccess();
	            }

	            if (_.isFunction(this.props.asyncValidator)) {
	                this.props.asyncValidator(value, onSuccess, onError);
	            } else {
	                var successCounter = _.size(this.props.asyncValidator);
	                var successResults = {};
	                var hasFailedValidation = false;

	                _.forEach(this.props.asyncValidator, function (validatorFunc, validatorName) {
	                    var onValidatorSuccess = function onValidatorSuccess(result) {
	                        if (result) {
	                            successResults[validatorName] = result;
	                        }

	                        successCounter--;
	                        if (successCounter === 0) {
	                            onSuccess(successResults);
	                        }
	                    };

	                    var onValidatorError = function onValidatorError(errorMessage) {
	                        if (hasFailedValidation) {
	                            return;
	                        }
	                        hasFailedValidation = true;
	                        onError(errorMessage);
	                    };

	                    validatorFunc(value, onValidatorSuccess, onValidatorError);
	                });
	            }
	        },

	        hasAsyncValidator: function hasAsyncValidator() {
	            return !!this.props.asyncValidator;
	        }
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 131 */
/*!***********************************************************!*\
  !*** ./js/wix-ui-react/components/textInput/textInput.rt ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 2),
	    __webpack_require__(/*! lodash */ 4)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _) {
	    'use strict';
	    function scopeInputComp1() {
	        var inputComp = this.getInputComponent();
	        return React.createElement(inputComp, _.assign({}, { 'ref': 'inputComp' }, this.getPropsForInputComponent()));
	    }
	    return function () {
	        return scopeInputComp1.apply(this, []);
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 132 */
/*!*******************************************************!*\
  !*** ./js/wix-ui-react/components/switches/toggle.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(/*! react */ 2);
	var _ = __webpack_require__(/*! lodash */ 4);
	var template = __webpack_require__(/*! wix-ui-react/components/switches/toggle.rt */ 133);
	__webpack_require__(/*! baseUI/controls/toggle.scss */ 134);
	__webpack_require__(/*! symbols/svg/toggles/switch.scss */ 136);

	module.exports = React.createClass({

	    displayName: 'Toggle',
	    propTypes: {
	        label: React.PropTypes.string,
	        defaultValue: React.PropTypes.bool,
	        labelAfterSymbol: React.PropTypes.bool,
	        disabled: React.PropTypes.bool,
	        onChange: React.PropTypes.func,
	        style: React.PropTypes.string
	    },

	    getInitialState: function getInitialState() {
	        return {
	            checked: this.props.defaultValue || false
	        };
	    },

	    handleChange: function handleChange(newValue) {
	        this.setState({
	            checked: newValue
	        });
	        if (_.isFunction(this.props.onChange)) {
	            this.props.onChange.call(this, newValue);
	        }
	        if (_.isFunction(this.props.on_change)) {
	            this.props.on_change.call(this, newValue);
	        }
	    },

	    render: template
	});

/***/ },
/* 133 */
/*!*******************************************************!*\
  !*** ./js/wix-ui-react/components/switches/toggle.rt ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 2),
	    __webpack_require__(/*! lodash */ 4),
	    __webpack_require__(/*! baseUI/controls/toggle */ 75)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, toggle) {
	    'use strict';
	    return function () {
	        return React.createElement(toggle, {
	            'name': 'switch',
	            'label': this.props.label,
	            'labelAfterSymbol': this.props.labelAfterSymbol,
	            'disabled': this.props.disabled,
	            'className': this.props.className,
	            'value': this.state.checked,
	            'onChange': this.handleChange
	        });
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 134 */
/*!****************************************!*\
  !*** ./js/baseUI/controls/toggle.scss ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/sass-loader?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./toggle.scss */ 135);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 41)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./toggle.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./toggle.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 135 */
/*!**********************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./js/baseUI/controls/toggle.scss ***!
  \**********************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 40)();
	// imports


	// module
	exports.push([module.id, ".boolean-control {\n  overflow: hidden; }\n  .boolean-control input {\n    display: none; }\n    .boolean-control input ~ svg,\n    .boolean-control input ~ .label {\n      cursor: pointer; }\n    .boolean-control input:disabled ~ svg,\n    .boolean-control input:disabled ~ .label {\n      cursor: default; }\n  .boolean-control span.label {\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    display: inline-block; }\n", ""]);

	// exports


/***/ },
/* 136 */
/*!********************************************!*\
  !*** ./js/symbols/svg/toggles/switch.scss ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(/*! !./../../../../~/css-loader!./../../../../~/sass-loader?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./switch.scss */ 137);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../../~/style-loader/addStyles.js */ 41)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./switch.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./switch.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 137 */
/*!**************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./js/symbols/svg/toggles/switch.scss ***!
  \**************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../../~/css-loader/lib/css-base.js */ 40)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n.control-switch .symbol-switch {\n  float: right; }\n  .control-switch .symbol-switch .st1 {\n    fill: #d3edff; }\n    .show-on-all-pages {\n      fill: #fee5d6; }\n  .control-switch .symbol-switch .st2 {\n    fill: #b1ddf8; }\n    .show-on-all-pages {\n      fill: #fed8c1; }\n  .control-switch .symbol-switch .switch-thumb-circle {\n    fill: #fff; }\n  .control-switch .symbol-switch .switch-thumb-minus {\n    fill: #b1ddf8; }\n    .show-on-all-pages {\n      fill: #fed8c1; }\n  .control-switch .symbol-switch .switch-thumb-check {\n    fill: none; }\n  .control-switch .symbol-switch .switch-thumb-regular {\n    visibility: visible; }\n  .control-switch .symbol-switch .switch-thumb-selected {\n    visibility: hidden; }\n\n.control-switch .label-switch {\n  color: #2b5672;\n  font-size: 14px;\n  line-height: 1.8;\n  font-family: HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif; }\n\n.control-switch:hover .symbol-switch .st1 {\n  fill: #b1ddf8; }\n  .show-on-all-pages {\n    fill: #fed8c1; }\n\n.control-switch .input-switch:disabled ~ .symbol-switch {\n  pointer-events: none; }\n  .control-switch .input-switch:disabled ~ .symbol-switch .st1 {\n    fill: #ececec; }\n  .control-switch .input-switch:disabled ~ .symbol-switch .st2 {\n    fill: #e3e3e3; }\n  .control-switch .input-switch:disabled ~ .symbol-switch .switch-thumb-circle {\n    filter: none; }\n  .control-switch .input-switch:disabled ~ .symbol-switch .switch-thumb-minus {\n    fill: #e3e3e3; }\n  .control-switch .input-switch:disabled ~ .symbol-switch .switch-thumb-check {\n    fill: none; }\n\n.control-switch .input-switch:checked ~ .symbol-switch .st1,\n.control-switch .input-switch:checked ~ .symbol-switch .st2 {\n  fill: #3899ec; }\n  .show-on-all-pages {\n    fill: #fb7d33; }\n\n.control-switch .input-switch:checked ~ .symbol-switch .switch-thumb-circle {\n  fill: #fff; }\n\n.control-switch .input-switch:checked ~ .symbol-switch .switch-thumb-minus {\n  fill: none; }\n\n.control-switch .input-switch:checked ~ .symbol-switch .switch-thumb-check {\n  fill: #3899ec; }\n  .show-on-all-pages {\n    fill: #fb7d33; }\n\n.control-switch .input-switch:checked ~ .symbol-switch .switch-thumb-regular {\n  visibility: hidden; }\n\n.control-switch .input-switch:checked ~ .symbol-switch .switch-thumb-selected {\n  visibility: visible; }\n\n.control-switch:hover .input-switch:not(:disabled):checked ~ .symbol-switch .st1,\n.control-switch:hover .input-switch:not(:disabled):checked ~ .symbol-switch .st2 {\n  fill: #4eb7f5; }\n  .show-on-all-pages {\n    fill: #fc975c; }\n\n.control-switch:hover .input-switch:not(:disabled):checked ~ .symbol-switch .switch-thumb-check {\n  fill: #4eb7f5; }\n  .show-on-all-pages {\n    fill: #fb7d33; }\n\n.control-switch .input-switch:checked:disabled ~ .symbol-switch {\n  pointer-events: none; }\n  .control-switch .input-switch:checked:disabled ~ .symbol-switch .st1 {\n    fill: #ececec; }\n  .control-switch .input-switch:checked:disabled ~ .symbol-switch .st2 {\n    fill: #e3e3e3; }\n  .control-switch .input-switch:checked:disabled ~ .symbol-switch .switch-thumb-circle {\n    filter: none; }\n  .control-switch .input-switch:checked:disabled ~ .symbol-switch .switch-thumb-minus {\n    fill: none; }\n  .control-switch .input-switch:checked:disabled ~ .symbol-switch .switch-thumb-check {\n    fill: #e3e3e3; }\n", ""]);

	// exports


/***/ },
/* 138 */
/*!*******************************************************************!*\
  !*** ./js/wix-ui-react/components/switches/toggleButtonsGroup.js ***!
  \*******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(/*! react */ 2);
	var template = __webpack_require__(/*! wix-ui-react/components/switches/toggleButtonsGroup.rt */ 139);
	__webpack_require__(/*! baseUI/controls/buttonsGroup.scss */ 46);

	module.exports = React.createClass({

	    displayName: 'ToggleButtonsGroup',
	    propTypes: {
	        options: React.PropTypes.array.isRequired,
	        style: React.PropTypes.string
	    },

	    getInitialState: function getInitialState() {
	        return {
	            checked: this.props.defaultValue || []
	        };
	    },

	    handleChange: function handleChange(newValue) {
	        var that = this;
	        this.setState({
	            checked: _.xor([newValue], this.state.checked)
	        }, function () {
	            if (that.props.onChange) {
	                that.props.onChange.call(that, that.state.checked);
	            }
	        });
	    },

	    render: template
	});

/***/ },
/* 139 */
/*!*******************************************************************!*\
  !*** ./js/wix-ui-react/components/switches/toggleButtonsGroup.rt ***!
  \*******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 2),
	    __webpack_require__(/*! lodash */ 4),
	    __webpack_require__(/*! baseUI/controls/infoIcon */ 11)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, infoIcon) {
	    'use strict';
	    function onChange1(option, optionIndex) {
	        this.handleChange(option.value);
	    }
	    function repeatOption2(option, optionIndex) {
	        return React.createElement('label', {
	            'key': option.value,
	            'className': option.className
	        }, React.createElement('input', {
	            'type': 'checkbox',
	            'value': option.value,
	            'checked': _(this.state.checked).contains(option.value),
	            'onChange': onChange1.bind(this, option, optionIndex)
	        }), React.createElement('span', {}, option.label));
	    }
	    return function () {
	        return React.createElement('div', { 'className': 'control-buttons-group' }, this.props.title ? React.createElement('p', { 'key': 'title' }, this.props.title) : null, this.props.title && (this.props.infoText || this.props.infoTitle) ? React.createElement(infoIcon, {
	            'key': 'infoIcon',
	            'text': this.props.infoText,
	            'title': this.props.infoTitle,
	            'size': 18
	        }) : null, React.createElement.apply(this, [
	            'div',
	            { 'className': 'group-buttons-container' + (this.props.align ? '-' + this.props.align : '') },
	            _.map(this.props.options, repeatOption2.bind(this))
	        ]));
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 140 */
/*!*******************************************************************!*\
  !*** ./js/wix-ui-react/components/colorSpace/paletteDisplayer.js ***!
  \*******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(/*! react */ 2);
	var template = __webpack_require__(/*! wix-ui-react/components/colorSpace/paletteDisplayer.rt */ 141);
	__webpack_require__(/*! baseUI/colorPicker/palettesList.scss */ 144);
	__webpack_require__(/*! baseUI/colorPicker/paletteDisplayer.scss */ 146);

	module.exports = React.createClass({

	    displayName: 'paletteDisplayer',
	    mixins: [React.addons.LinkedStateMixin],
	    propTypes: {
	        label: React.PropTypes.string,
	        defaultValue: React.PropTypes.bool,
	        onChange: React.PropTypes.func,
	        onClick: React.PropTypes.func
	    },

	    getDefaultProps: function getDefaultProps() {
	        return {
	            openColorPicker: this.handleClick
	        };
	    },

	    getThemeColors: function getThemeColors() {
	        if (this.props.palette) {
	            return this.props.palette;
	        }
	        return {
	            color_0: '#ffffff',
	            color_1: '#FFFFFF',
	            color_2: '#000000',
	            color_3: '237,28,36,1',
	            color_4: '0,136,203,1',
	            color_5: '255,203,5,1',
	            color_6: '114,114,114,1',
	            color_7: '176,176,176,1',
	            color_8: '255,255,255,1',
	            color_9: '114,114,114,1',
	            color_10: '176,176,176,1',
	            color_11: '#FFFFFF',
	            color_12: '#CCCCCC',
	            color_13: '#A0A09F',
	            color_14: '#605E5E',
	            color_15: '#2F2E2E',
	            color_16: '#BAE9FF',
	            color_17: '#97DEFF',
	            color_18: '#30BDFF',
	            color_19: '#207EA9',
	            color_20: '#103F54',
	            color_21: '#B6E8E3',
	            color_22: '#8DD1CA',
	            color_23: '#41BAAE',
	            color_24: '#2B7C74',
	            color_25: '#163E3A',
	            color_26: '#F4C0AF',
	            color_27: '#E99F86',
	            color_28: '#DE5021',
	            color_29: '#943616',
	            color_30: '#4A1B0B',
	            color_31: '#F4EAB1',
	            color_32: '#E9DB89',
	            color_33: '#DEC328',
	            color_34: '#94821B',
	            color_35: '#4A410D'
	        };
	    },

	    render: template
	});

/***/ },
/* 141 */
/*!*******************************************************************!*\
  !*** ./js/wix-ui-react/components/colorSpace/paletteDisplayer.rt ***!
  \*******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 2),
	    __webpack_require__(/*! lodash */ 4),
	    __webpack_require__(/*! baseUI/colorPicker/paletteDisplayer */ 142)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, paletteDisplayer) {
	    'use strict';
	    return function () {
	        return React.createElement(paletteDisplayer, {
	            'isSelectable': true,
	            'value': 'color_0',
	            'palette': this.getThemeColors(),
	            'onPreview': this.props.onPreview
	        });
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 142 */
/*!***************************************************!*\
  !*** ./js/baseUI/colorPicker/paletteDisplayer.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 2), __webpack_require__(/*! lodash */ 4), __webpack_require__(/*! core */ 14), __webpack_require__(/*! util */ 17), __webpack_require__(/*! baseUI/colorPicker/paletteDisplayer.rt */ 143)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, core, util, template) {
	    'use strict';

	    function invertMatrix(matrix, rows, cols) {
	        var result = [];
	        var total = rows * cols;

	        for (var mod = 0; mod < rows; mod++) {
	            for (var index = mod; index < total; index += rows) {
	                result.push(matrix[index]);
	            }
	        }

	        return result;
	    }

	    return React.createClass({
	        displayName: 'paletteDisplayer',
	        mixins: [core.mixins.editorAPIMixin, util.valueLinkMixin, util.propTypesFilterMixin],
	        propTypes: {
	            palette: React.PropTypes.objectOf(React.PropTypes.string).isRequired,
	            isSelectable: React.PropTypes.bool,
	            onPreview: React.PropTypes.func
	        },
	        getColors: function getColors() {
	            var result = [];
	            _.forEach(this.props.palette, function (colorValue, colorSymbol) {
	                var colorIndex = parseInt(/color_(\d+)/.exec(colorSymbol)[1], 10);
	                if (colorIndex >= 11) {
	                    result.push({ symbol: colorSymbol, value: colorValue });
	                }
	            });

	            return invertMatrix(result, 5, result.length / 5);
	        },
	        getOptionClasses: function getOptionClasses(colorObj) {
	            return {
	                'palette-color-option': true,
	                'white-option': util.colors.getDistanceToWhite(colorObj.value) < 3,
	                'option-selected': this.getValueFromProps() === colorObj.symbol,
	                'selectable': this.props.isSelectable
	            };
	        },
	        previewColor: function previewColor(color) {
	            if (this.props.isSelectable && this.props.onPreview) {
	                this.props.onPreview(color);
	            }
	        },
	        selectColor: function selectColor(color, colorIndex) {
	            this.getEditorAPI().bi.event(core.bi.events.colorPicker.CHANGE_SITE_COLORS_LINK_CLICKED, {
	                index_selected_color: colorIndex
	            });
	            if (this.props.isSelectable) {
	                this.callOnChangeIfExists(color);
	            }
	        },
	        selectColorAndClose: function selectColorAndClose(color) {
	            if (this.props.isSelectable) {
	                this.callOnChangeIfExists(color, true);
	            }
	        },
	        render: template
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 143 */
/*!***************************************************!*\
  !*** ./js/baseUI/colorPicker/paletteDisplayer.rt ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 2),
	    __webpack_require__(/*! lodash */ 4)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _) {
	    'use strict';
	    function onMouseOut1() {
	        this.previewColor(this.getValueFromProps());
	    }
	    function mergeProps(inline, external) {
	        var res = _.assign({}, inline, external);
	        if (inline.hasOwnProperty('style')) {
	            res.style = _.defaults(res.style, inline.style);
	        }
	        if (inline.hasOwnProperty('className') && external.hasOwnProperty('className')) {
	            res.className = external.className + ' ' + inline.className;
	        }
	        return res;
	    }
	    function onClick3(colorObj, colorObjIndex) {
	        this.selectColor(colorObj.symbol, colorObjIndex);
	    }
	    function onMouseEnter4(colorObj, colorObjIndex) {
	        this.previewColor(colorObj.symbol);
	    }
	    function repeatColorObj5(colorObj, colorObjIndex) {
	        return React.createElement('div', {
	            'key': 'paletteColor-' + colorObjIndex,
	            'className': _.keys(_.pick(this.getOptionClasses(colorObj), _.identity)).join(' '),
	            'onClick': onClick3.bind(this, colorObj, colorObjIndex),
	            'onDoubleClick': this.selectColorAndClose.bind(this, colorObj.symbol),
	            'onMouseEnter': onMouseEnter4.bind(this, colorObj, colorObjIndex),
	            'style': { backgroundColor: colorObj.value }
	        });
	    }
	    return function () {
	        return React.createElement.apply(this, [
	            'div',
	            mergeProps({
	                'className': 'palette-displayer',
	                'onMouseOut': onMouseOut1.bind(this)
	            }, this.filteredProps()),
	            _.map(this.getColors(), repeatColorObj5.bind(this))
	        ]);
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 144 */
/*!*************************************************!*\
  !*** ./js/baseUI/colorPicker/palettesList.scss ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/sass-loader?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./palettesList.scss */ 145);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 41)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./palettesList.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./palettesList.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 145 */
/*!*******************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./js/baseUI/colorPicker/palettesList.scss ***!
  \*******************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 40)();
	// imports


	// module
	exports.push([module.id, ".palettes-list {\n  position: relative;\n  width: 138px;\n  height: 100%;\n  text-align: center; }\n  .palettes-list .palette-options {\n    display: inline;\n    vertical-align: top; }\n    .palettes-list .palette-options .palette-option-wrapper {\n      padding: 3px 0;\n      display: inline-block;\n      cursor: pointer; }\n      .palettes-list .palette-options .palette-option-wrapper:hover .palette-option {\n        border-color: #d3edff;\n        transition-duration: 0.4s;\n        transition-property: border-color; }\n      .palettes-list .palette-options .palette-option-wrapper .palette-option {\n        position: relative;\n        display: inline-block;\n        height: 24px;\n        line-height: 24px;\n        border: 1px solid transparent;\n        font-size: 0;\n        padding: 3px; }\n        .palettes-list .palette-options .palette-option-wrapper .palette-option.selected {\n          border-color: #3899ec; }\n          .palettes-list .palette-options .palette-option-wrapper .palette-option.selected:before {\n            position: absolute;\n            content: '';\n            font-size: initial;\n            left: -11px;\n            cursor: initial;\n            width: 0;\n            height: 0;\n            border-right: 6px solid #3899ec;\n            border-top: 6px solid transparent;\n            border-bottom: 6px solid transparent;\n            top: 9px; }\n        .palettes-list .palette-options .palette-option-wrapper .palette-option .palette-option-color {\n          display: inline-block;\n          width: 18px;\n          height: 100%; }\n          .palettes-list .palette-options .palette-option-wrapper .palette-option .palette-option-color.white-color {\n            box-sizing: border-box;\n            border: 1px solid #ccc; }\n", ""]);

	// exports


/***/ },
/* 146 */
/*!*****************************************************!*\
  !*** ./js/baseUI/colorPicker/paletteDisplayer.scss ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/sass-loader?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./paletteDisplayer.scss */ 147);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 41)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./paletteDisplayer.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./paletteDisplayer.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 147 */
/*!***********************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./js/baseUI/colorPicker/paletteDisplayer.scss ***!
  \***********************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 40)();
	// imports


	// module
	exports.push([module.id, ".palette-displayer {\n  width: 210px; }\n  .palette-displayer .palette-color-option {\n    display: inline-block;\n    vertical-align: top;\n    position: relative;\n    width: 42px;\n    height: 24px; }\n    .palette-displayer .palette-color-option.white-option {\n      box-sizing: border-box;\n      border: 1px solid #ccc; }\n    .palette-displayer .palette-color-option.selectable {\n      cursor: pointer; }\n      .palette-displayer .palette-color-option.selectable.option-selected::after {\n        content: \"\";\n        position: absolute;\n        width: 46px;\n        height: 28px;\n        background-color: inherit;\n        top: -1px;\n        left: -2px;\n        z-index: 1;\n        box-sizing: border-box;\n        border: 1px solid #fff;\n        box-shadow: 0px 0px 7px 0px rgba(22, 45, 61, 0.44);\n        z-index: 2; }\n      .palette-displayer .palette-color-option.selectable:not(.option-selected):hover::after {\n        content: \"\";\n        position: absolute;\n        width: 46px;\n        height: 28px;\n        background-color: inherit;\n        top: -1px;\n        left: -2px;\n        z-index: 1; }\n      .palette-displayer .palette-color-option.selectable.white-option.option-selected::after {\n        content: \"\";\n        position: absolute;\n        box-sizing: border-box;\n        border: 1px solid #ccc;\n        width: 46px;\n        height: 28px;\n        background-color: inherit;\n        top: -2px;\n        left: -3px;\n        z-index: 1;\n        z-index: 2; }\n      .palette-displayer .palette-color-option.selectable.white-option:not(.option-selected):hover::after {\n        content: \"\";\n        position: absolute;\n        box-sizing: border-box;\n        border: 1px solid #ccc;\n        width: 46px;\n        height: 28px;\n        background-color: inherit;\n        top: -2px;\n        left: -3px;\n        z-index: 1;\n        border: 1px solid #fff;\n        box-shadow: 0px 0px 7px 0px rgba(22, 45, 61, 0.44); }\n", ""]);

	// exports


/***/ },
/* 148 */
/*!*************************************************************!*\
  !*** ./js/wix-ui-react/components/fontPicker/fontPicker.js ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(/*! react */ 2);
	var Wix = __webpack_require__(/*! Wix */ 7);
	var template = __webpack_require__(/*! wix-ui-react/components/fontPicker/fontPicker.rt */ 149);

	module.exports = React.createClass({

	    displayName: 'FontPicker',
	    propTypes: {
	        infoTitle: React.PropTypes.string,
	        infoText: React.PropTypes.string,
	        startWithTheme: React.PropTypes.string
	    },

	    defaultTheme: 'Site Title',
	    componentDidMount: function componentDidMount() {
	        if (Wix.Utils.getViewMode() === 'editor') {
	            var wixParam = this.props['wix-param'];
	            Wix.Styles.getStyleParams((function (styleParams) {
	                if (styleParams && styleParams.fonts) {
	                    var font = styleParams.fonts[wixParam] || {};
	                    this.setState({
	                        value: font.displayName || font.preset || this.props.startWithFont || this.defaultTheme
	                    });
	                }
	            }).bind(this));
	        }
	    },

	    getInitialState: function getInitialState() {
	        return {
	            value: this.props.startWithTheme || this.defaultTheme
	        };
	    },

	    onFontClick: function onFontClick(event) {
	        var _this = this;
	        var wixParam = this.props['wix-param'];
	        var title = this.props.title;
	        Wix.Styles.openFontPicker({
	            title: title,
	            left: event.clientX,
	            top: event.clientY,
	            wixParam: wixParam,
	            startWithTheme: this.state.value
	        }, (function (style) {
	            if (this.props.onChange) {
	                this.props.onChange(style.fontParam);
	            }
	            _this.setState({
	                value: style.fontParam.displayName || 'Custom'
	            });
	            Wix.Styles.setUILIBParamValue('fonts', wixParam, style.fontParam);
	        }).bind(this));
	    },

	    render: template
	});

/***/ },
/* 149 */
/*!*************************************************************!*\
  !*** ./js/wix-ui-react/components/fontPicker/fontPicker.rt ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 2),
	    __webpack_require__(/*! lodash */ 4),
	    __webpack_require__(/*! wix-ui-react/components/dropDown/dropDown */ 78)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, dropDown) {
	    'use strict';
	    return function () {
	        return React.createElement(dropDown.select, {
	            'label': this.props.label,
	            'wix-param': 'myBodyFont',
	            'infoTitle': this.props.infoTitle,
	            'infoText': this.props.infoText,
	            'onClick': this.onFontClick
	        }, React.createElement(dropDown.option, { 'value': 'show' }, this.state.value), React.createElement(dropDown.option, { 'value': 'hide' }, 'Foo'));
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 150 */
/*!***********************************************************************************!*\
  !*** ./js/wix-ui-react/components/sectionDividerLabeled/sectionDividerLabeled.js ***!
  \***********************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var sectionDividerLabeled = __webpack_require__(/*! baseUI/controls/sectionDividerLabeledC06 */ 151);
	__webpack_require__(/*! baseUI/controls/sectionDividerLabeledC06.scss */ 153);

	module.exports = {
	    sectionDividerLabeled: sectionDividerLabeled
	};

/***/ },
/* 151 */
/*!********************************************************!*\
  !*** ./js/baseUI/controls/sectionDividerLabeledC06.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 2), __webpack_require__(/*! lodash */ 4), __webpack_require__(/*! baseUI/controls/sectionDividerLabeledC06.rt */ 152)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, template) {
	    'use strict';

	    return React.createClass({
	        displayName: 'sectionDividerLabeledC06',
	        propTypes: {
	            label: React.PropTypes.string,
	            infoText: React.PropTypes.string
	        },
	        render: template
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 152 */
/*!********************************************************!*\
  !*** ./js/baseUI/controls/sectionDividerLabeledC06.rt ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 2),
	    __webpack_require__(/*! lodash */ 4),
	    __webpack_require__(/*! util */ 17),
	    __webpack_require__(/*! baseUI/controls/infoIcon */ 11)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, util, infoIcon) {
	    'use strict';
	    return function () {
	        return React.createElement('div', { 'className': 'control-section-divider labeled' }, util.translate(this.props.label), '\r\n    ', this.props.infoText ? React.createElement(infoIcon, {
	            'key': 'icon',
	            'size': 18,
	            'text': this.props.infoText,
	            'fitToBoundsWidth': false
	        }) : null);
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 153 */
/*!**********************************************************!*\
  !*** ./js/baseUI/controls/sectionDividerLabeledC06.scss ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/sass-loader?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./sectionDividerLabeledC06.scss */ 154);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 41)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./sectionDividerLabeledC06.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./sectionDividerLabeledC06.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 154 */
/*!****************************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./js/baseUI/controls/sectionDividerLabeledC06.scss ***!
  \****************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 40)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n.control-section-divider {\n  height: 42px;\n  box-sizing: border-box;\n  background-color: #f0f3f5;\n  width: 100%; }\n  .control-section-divider.labeled {\n    line-height: 42px;\n    position: relative;\n    text-align: center;\n    cursor: default;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    color: #2b5672;\n    font-family: HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n    font-size: 16px;\n    padding: 0 42px; }\n    .control-section-divider.labeled .info-icon {\n      position: absolute;\n      right: 12px;\n      top: 12px;\n      line-height: 0;\n      opacity: 0;\n      transition-property: opacity;\n      transition-duration: .15s; }\n    .control-section-divider.labeled:hover .info-icon {\n      opacity: 1; }\n", ""]);

	// exports


/***/ },
/* 155 */
/*!***************************************************************!*\
  !*** ./js/wix-ui-react/components/teaserPopup/teaserPopup.js ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var template = __webpack_require__(/*! wix-ui-react/components/teaserPopup/teaserPopup.rt */ 156);
	__webpack_require__(/*! baseUI/panelInputs/firstTimeInfoBox.scss */ 159);
	var _ = __webpack_require__(/*! lodash */ 4);

	module.exports = React.createClass({
	    displayName: 'TeaserPopup',
	    propTypes: {
	        text: React.PropTypes.string,
	        title: React.PropTypes.string,
	        linkText: React.PropTypes.string,
	        gotItText: React.PropTypes.string,
	        learnMore: React.PropTypes.func
	    },
	    userPrefs: function userPrefs() {
	        return {
	            site: {
	                get: function get() {
	                    return false;
	                },
	                set: _.noop
	            }
	        };
	    },
	    biLearnMore: _.noop,
	    biClose: _.noop,
	    biLearnMore: _.noop,

	    render: template
	});

/***/ },
/* 156 */
/*!***************************************************************!*\
  !*** ./js/wix-ui-react/components/teaserPopup/teaserPopup.rt ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 2),
	    __webpack_require__(/*! lodash */ 4),
	    __webpack_require__(/*! baseUI/panelInputs/firstTimeInfoBox */ 157)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, firstTimeInfoBox) {
	    'use strict';
	    return function () {
	        return React.createElement(firstTimeInfoBox, {
	            'text': this.props.text,
	            'title': this.props.title,
	            ',': true,
	            'id': this.props.id,
	            'learnMore': this.props.learnMore,
	            'linkText': this.props.linkText,
	            'gotItText': this.props.gotItText,
	            'biClose': this.biClose,
	            'biLearnMore': this.biLearnMore,
	            'userPrefs': this.userPrefs()
	        });
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 157 */
/*!***************************************************!*\
  !*** ./js/baseUI/panelInputs/firstTimeInfoBox.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 2), __webpack_require__(/*! lodash */ 4), __webpack_require__(/*! baseUI/panelInputs/firstTimeInfoBox.rt */ 158)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, template) {
	    'use strict';

	    return React.createClass({
	        displayName: 'firstTimeInfoBox',
	        getInitialState: function getInitialState() {
	            return {
	                close: false
	            };
	        },
	        propTypes: {
	            id: React.PropTypes.string.isRequired,
	            text: React.PropTypes.string.isRequired,
	            hide: React.PropTypes.bool,
	            title: React.PropTypes.string,
	            linkText: React.PropTypes.string,
	            image: React.PropTypes.string,
	            video: React.PropTypes.string,
	            context: React.PropTypes.oneOf(['header', 'section', 'settings', 'left-panel', 'pages-panel']),
	            userPrefs: React.PropTypes.object.isRequired,
	            onFirstTimeInfoBoxHeightChange: React.PropTypes.func,
	            biLearnMore: React.PropTypes.func.isRequired,
	            learnMore: React.PropTypes.func,
	            biClose: React.PropTypes.func.isRequired
	        },
	        getDefaultProps: function getDefaultProps() {
	            return {
	                context: 'header',
	                hide: false
	            };
	        },
	        componentDidMount: function componentDidMount() {
	            if (this.props.onFirstTimeInfoBoxHeightChange) {
	                this.props.onFirstTimeInfoBoxHeightChange(this.getDOMNode() ? this.getDOMNode().offsetHeight : 0);
	            }
	        },
	        shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
	            return !(_.isEqual(this.props, nextProps) && _.isEqual(this.state, nextState));
	        },
	        shouldShowTeaser: function shouldShowTeaser() {
	            return !this.props.userPrefs.site.get('closed_teaser_' + this.props.id);
	        },
	        close: function close() {
	            this.props.userPrefs.site.set('closed_teaser_' + this.props.id, true);
	            this.getDOMNode().style.display = 'none';
	            this.setState({ close: true });
	            if (this.props.onFirstTimeInfoBoxHeightChange) {
	                this.props.onFirstTimeInfoBoxHeightChange();
	            }
	            this.props.biClose({ panel_name: this.props.id });
	        },
	        link: function link() {
	            if (this.props.learnMore) {
	                this.props.learnMore();
	                this.props.biLearnMore({ panel_name: this.props.id });
	            }
	        },
	        render: template
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 158 */
/*!***************************************************!*\
  !*** ./js/baseUI/panelInputs/firstTimeInfoBox.rt ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 2),
	    __webpack_require__(/*! lodash */ 4),
	    __webpack_require__(/*! util */ 17),
	    __webpack_require__(/*! baseUI/controls/button */ 49),
	    __webpack_require__(/*! symbols */ 26)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, util, UIButton, symbols) {
	    'use strict';
	    return function () {
	        return this.shouldShowTeaser() ? React.createElement('div', {
	            'className': util.inheritClassName(this.props, 'first-time-info-box') + ' in-' + this.props.context,
	            'key': this.props.id
	        }, React.createElement('div', { 'className': 'pointer' }), React.createElement('div', { 'className': 'top-line' }, React.createElement('div', {
	            'className': 'close',
	            'onClick': this.close.bind(this, 'x')
	        }, React.createElement(symbols.symbol, { 'name': 'firstTimeInfoBoxClose' }))), React.createElement('div', { 'className': 'content ' + (!!this.props.linkText ? 'has-link' : 'no-link') }, !!this.props.title ? React.createElement('div', {
	            'className': 'title',
	            'key': 'title'
	        }, util.translate(this.props.title)) : null, React.createElement('div', { 'className': 'text' }, util.translate(this.props.text))), React.createElement('div', { 'className': 'bottom-line' }, !!this.props.linkText ? React.createElement(UIButton, {
	            'label': this.props.linkText,
	            'className': 'link no-margin btn-sm btn-text',
	            'onClick': this.link,
	            'key': 'learnMoreButton'
	        }) : null, !!this.props.linkText ? React.createElement(symbols.symbol, {
	            'className': 'arrow',
	            'name': 'firstTimeInfoBoxArrowRight',
	            'onClick': this.link,
	            'key': 'learnMoreSymbol'
	        }) : null, React.createElement('div', { 'className': 'space' }), React.createElement(UIButton, {
	            'label': this.props.gotItText,
	            'className': 'got-it btn-back',
	            'onClick': this.close.bind(this, 'gotit')
	        }))) : null;
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 159 */
/*!*****************************************************!*\
  !*** ./js/baseUI/panelInputs/firstTimeInfoBox.scss ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/sass-loader?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./firstTimeInfoBox.scss */ 160);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 41)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./firstTimeInfoBox.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./firstTimeInfoBox.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 160 */
/*!***********************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./js/baseUI/panelInputs/firstTimeInfoBox.scss ***!
  \***********************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 40)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n.first-time-info-box {\n  position: relative;\n  background-color: #fff;\n  border-radius: 8px;\n  box-shadow: 0 0 8px 0 rgba(22, 45, 61, 0.18);\n  border: 1px solid transparent; }\n  .first-time-info-box.in-header {\n    margin: 24px 24px 3px; }\n    .first-time-info-box.in-header .pointer {\n      right: 16px; }\n  .first-time-info-box.in-section {\n    margin: 24px 0 0; }\n    .first-time-info-box.in-section .pointer {\n      right: 10px; }\n  .first-time-info-box.in-settings {\n    margin: 12px 12px 0; }\n    .first-time-info-box.in-settings .pointer {\n      right: 28px; }\n  .first-time-info-box.in-left-panel {\n    margin: 12px 20px 0; }\n    .first-time-info-box.in-left-panel .pointer {\n      right: 34px; }\n  .first-time-info-box.in-pages-panel {\n    margin: 0 12px 4px; }\n    .first-time-info-box.in-pages-panel .pointer {\n      display: none; }\n  .first-time-info-box .pointer {\n    display: none;\n    top: -11px;\n    position: absolute;\n    border-left: 10px solid transparent;\n    border-right: 10px solid transparent;\n    border-bottom: 10px solid #fff; }\n  .first-time-info-box .content {\n    text-align: left;\n    margin: -2px 34px 17px 23px; }\n    .first-time-info-box .content .title {\n      font-family: HelveticaNeueW01-55Roma, HelveticaNeueW02-55Roma, HelveticaNeueW10-55Roma, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n      font-size: 18px;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      color: #2b5672;\n      margin-bottom: 12px; }\n    .first-time-info-box .content .text {\n      font-family: HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n      font-size: 14px;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      color: #2b5672; }\n  .first-time-info-box .bottom-line {\n    text-align: right;\n    margin: 0 23px 19px 23px;\n    display: flex;\n    align-items: center; }\n    .first-time-info-box .bottom-line .link {\n      height: 14px;\n      line-height: 14px;\n      font-size: 14px;\n      padding: 0;\n      margin: 0;\n      border-radius: 0; }\n    .first-time-info-box .bottom-line .arrow {\n      cursor: pointer;\n      position: relative;\n      padding-left: 9px; }\n      .first-time-info-box .bottom-line .arrow polyline {\n        stroke: #3899ec; }\n    .first-time-info-box .bottom-line .space {\n      flex: 1; }\n    .first-time-info-box .bottom-line .got-it {\n      margin: 0;\n      text-align: center;\n      padding: 0 14px; }\n      .first-time-info-box .bottom-line .got-it:hover {\n        background-color: #b1ddf8; }\n  .first-time-info-box .top-line {\n    text-align: right;\n    margin-top: 8px;\n    margin-right: 8px;\n    height: 18px; }\n    .first-time-info-box .top-line .close {\n      cursor: pointer;\n      display: inline-block; }\n      .first-time-info-box .top-line .close polyline {\n        stroke: #3899ec; }\n", ""]);

	// exports


/***/ },
/* 161 */
/*!**********************!*\
  !*** ./js/baseUI.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(/*! baseUI/base/reset.scss */ 162);
	__webpack_require__(/*! baseUI/base/normalize.scss */ 164);
	__webpack_require__(/*! baseUI/controls/infoIcon.scss */ 166);
	__webpack_require__(/*! baseUI/controls/horizontalTabsArrowed.scss */ 168);
	__webpack_require__(/*! baseUI/panelInputs/stepper.scss */ 114);
	__webpack_require__(/*! baseUI/panelInputs/textInput.scss */ 170);

	var init = __webpack_require__(/*! init */ 172);
	init.createRoot();

/***/ },
/* 162 */
/*!***********************************!*\
  !*** ./js/baseUI/base/reset.scss ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/sass-loader?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./reset.scss */ 163);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 41)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./reset.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./reset.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 163 */
/*!*****************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./js/baseUI/base/reset.scss ***!
  \*****************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 40)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\nbody {\n  font-family: HelveticaNeueW01-55Roma, HelveticaNeueW02-55Roma, HelveticaNeueW10-55Roma, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n  font-size: 14px;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-rendering: optimizeLegibility; }\n\nul,\nli {\n  list-style: none;\n  margin: 0;\n  padding: 0; }\n\n*:not(input):not(textarea) {\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n[data-z-counter] {\n  z-index: 0; }\n\n[data-z-counter='0'] {\n  z-index: auto; }\n", ""]);

	// exports


/***/ },
/* 164 */
/*!***************************************!*\
  !*** ./js/baseUI/base/normalize.scss ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/sass-loader?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./normalize.scss */ 165);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 41)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./normalize.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./normalize.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 165 */
/*!*********************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./js/baseUI/base/normalize.scss ***!
  \*********************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 40)();
	// imports


	// module
	exports.push([module.id, "html {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\nbody {\n  margin: 0; }\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block; }\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */ }\n\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n[hidden],\ntemplate {\n  display: none; }\n\na {\n  background-color: transparent; }\n\na:active,\na:hover {\n  outline: 0; }\n\nabbr[title] {\n  border-bottom: 1px dotted; }\n\nb,\nstrong {\n  font-weight: bold; }\n\ndfn {\n  font-style: italic; }\n\nh1 {\n  font-size: 2em;\n  margin: .67em 0; }\n\nsmall {\n  font-size: 80%; }\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsup {\n  top: -0.5em; }\n\nsub {\n  bottom: -0.25em; }\n\nimg {\n  border: 0; }\n\nsvg:not(:root) {\n  overflow: hidden; }\n\nfigure {\n  margin: 1em 40px; }\n\nhr {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n  height: 0; }\n\npre {\n  overflow: auto; }\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  margin: 0;\n  /* 3 */ }\n\nbutton {\n  overflow: visible; }\n\nbutton,\nselect {\n  text-transform: none; }\n\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */ }\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default; }\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\ninput {\n  line-height: normal; }\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\ninput[type=\"number\"]::-webkit-inner-spin-button, input[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box;\n  /* 2 */\n  box-sizing: content-box; }\n\ninput[type=\"search\"]::-webkit-search-cancel-button, input[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\ntextarea {\n  overflow: auto; }\n\noptgroup {\n  font-weight: bold; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntd,\nth {\n  padding: 0; }\n", ""]);

	// exports


/***/ },
/* 166 */
/*!******************************************!*\
  !*** ./js/baseUI/controls/infoIcon.scss ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/sass-loader?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./infoIcon.scss */ 167);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 41)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./infoIcon.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./infoIcon.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 167 */
/*!************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./js/baseUI/controls/infoIcon.scss ***!
  \************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 40)();
	// imports


	// module
	exports.push([module.id, ".info-icon {\n  cursor: pointer;\n  border-radius: 50%;\n  display: inline-block;\n  width: 18px;\n  height: 18px; }\n  .info-icon svg circle {\n    fill: transparent; }\n  .info-icon svg path {\n    fill: #7a92a5; }\n  .info-icon svg:hover path {\n    fill: #3899ec; }\n", ""]);

	// exports


/***/ },
/* 168 */
/*!*******************************************************!*\
  !*** ./js/baseUI/controls/horizontalTabsArrowed.scss ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/sass-loader?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./horizontalTabsArrowed.scss */ 169);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 41)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./horizontalTabsArrowed.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./horizontalTabsArrowed.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 169 */
/*!*************************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./js/baseUI/controls/horizontalTabsArrowed.scss ***!
  \*************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 40)();
	// imports


	// module
	exports.push([module.id, ".control-tabs-horizontal.arrowed {\n  box-shadow: inset 0 -2px 0 0 rgba(0, 0, 0, 0.05);\n  font-size: 0; }\n  .control-tabs-horizontal.arrowed label {\n    height: 52px;\n    line-height: 52px;\n    text-align: center;\n    cursor: pointer;\n    display: inline-block; }\n    .control-tabs-horizontal.arrowed label:hover .tab-decorator {\n      border-bottom: solid 3px #7fccf7; }\n    .control-tabs-horizontal.arrowed label:first-child:nth-last-child(1),\n    .control-tabs-horizontal.arrowed label:first-child:nth-last-child(1) ~ label {\n      width: 100%; }\n    .control-tabs-horizontal.arrowed label:first-child:nth-last-child(2),\n    .control-tabs-horizontal.arrowed label:first-child:nth-last-child(2) ~ label {\n      width: 50%; }\n    .control-tabs-horizontal.arrowed label:first-child:nth-last-child(3),\n    .control-tabs-horizontal.arrowed label:first-child:nth-last-child(3) ~ label {\n      width: 33.33333%; }\n    .control-tabs-horizontal.arrowed label:first-child:nth-last-child(4),\n    .control-tabs-horizontal.arrowed label:first-child:nth-last-child(4) ~ label {\n      width: 25%; }\n  .control-tabs-horizontal.arrowed input {\n    display: none; }\n    .control-tabs-horizontal.arrowed input + .tab-decorator {\n      display: block;\n      font-size: 14px;\n      box-sizing: border-box;\n      color: #09e;\n      border-bottom: solid 3px transparent;\n      transition-property: border-color;\n      transition-duration: 0.4s;\n      position: relative;\n      padding-left: 6px;\n      padding-right: 6px;\n      height: 52px; }\n      .control-tabs-horizontal.arrowed input + .tab-decorator:after {\n        content: '';\n        width: 0;\n        height: 0;\n        border: solid;\n        border-color: transparent transparent #09e;\n        border-width: 0 9px 7px;\n        position: absolute;\n        bottom: -3px;\n        left: calc(50% - 9px);\n        opacity: 0;\n        transition-property: opacity;\n        transition-duration: 0.4s; }\n      .control-tabs-horizontal.arrowed input + .tab-decorator span {\n        display: table-cell;\n        width: 33.3%;\n        vertical-align: middle;\n        text-align: center;\n        height: 49px;\n        white-space: normal;\n        text-overflow: ellipsis;\n        overflow: hidden; }\n    .control-tabs-horizontal.arrowed input:checked + .tab-decorator {\n      border-bottom-color: #0099ef;\n      color: #2b5672; }\n      .control-tabs-horizontal.arrowed input:checked + .tab-decorator:after {\n        opacity: 1; }\n", ""]);

	// exports


/***/ },
/* 170 */
/*!**********************************************!*\
  !*** ./js/baseUI/panelInputs/textInput.scss ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/sass-loader?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./textInput.scss */ 171);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 41)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./textInput.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./textInput.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 171 */
/*!****************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader?functions=selector-parse&root=c:/Users/milak/projects/editor-ui-lib/js!./js/baseUI/panelInputs/textInput.scss ***!
  \****************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 40)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n.control-text-input {\n  position: relative;\n  text-align: left;\n  display: inline-block;\n  width: 100%; }\n  .control-text-input > label {\n    font-weight: 300;\n    color: #2b5672;\n    font-family: HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n    font-size: 14px;\n    text-align: left;\n    display: block;\n    overflow: hidden;\n    line-height: 18px;\n    max-height: 34px;\n    padding: 7px 30px 6px 0px; }\n  .control-text-input .info-icon {\n    display: none;\n    position: absolute;\n    top: 0;\n    right: 0px; }\n  .control-text-input:hover .info-icon {\n    display: inline-block; }\n  .control-text-input input, .control-text-input textarea {\n    font-family: HelveticaNeueW01-55Roma, HelveticaNeueW02-55Roma, HelveticaNeueW10-55Roma, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n    font-size: 18px;\n    display: block;\n    box-sizing: border-box;\n    width: 100%;\n    height: 36px;\n    padding: 0px 11px 0px;\n    border: 1px solid transparent;\n    outline: none;\n    border-radius: 8px;\n    color: #162d3d;\n    text-align: left;\n    text-overflow: ellipsis; }\n    .control-text-input input::placeholder, .control-text-input textarea::placeholder {\n      color: #b6c1cd; }\n  .control-text-input textarea {\n    height: 100px;\n    resize: none;\n    overflow: hidden;\n    padding: 10px 24px 10px 10px;\n    transition: height 200ms ease; }\n  .control-text-input:not(.is-disabled):hover > input, .control-text-input:not(.is-disabled):hover > textarea {\n    background-color: #eaf7ff;\n    color: #2b5672;\n    cursor: pointer; }\n  .control-text-input:not(.is-disabled) input:hover, .control-text-input:not(.is-disabled) textarea:hover {\n    background-color: #d3edff;\n    color: #2b5672; }\n    .control-text-input:not(.is-disabled) input:hover::placeholder, .control-text-input:not(.is-disabled) textarea:hover::placeholder {\n      color: #2b5672; }\n  .control-text-input:not(.is-disabled) input:focus, .control-text-input:not(.is-disabled) textarea:focus {\n    background-color: transparent;\n    border: 1px solid #4eb7f5;\n    box-shadow: inset 0px 0px 3px 0px rgba(0, 90, 132, 0.25); }\n    .control-text-input:not(.is-disabled) input:focus::placeholder, .control-text-input:not(.is-disabled) textarea:focus::placeholder {\n      color: #b6c1cd; }\n    .control-text-input:not(.is-disabled) input:focus::selection, .control-text-input:not(.is-disabled) textarea:focus::selection {\n      background-color: #eaf7ff; }\n    .control-text-input:not(.is-disabled) input:focus:hover, .control-text-input:not(.is-disabled) textarea:focus:hover {\n      cursor: text; }\n  .control-text-input:not(.is-disabled) textarea:focus {\n    overflow: auto;\n    height: 132px; }\n  .control-text-input:not(.is-disabled) textarea.textarea-firefox {\n    height: 110px; }\n    .control-text-input:not(.is-disabled) textarea.textarea-firefox:focus {\n      height: 142px; }\n  .control-text-input.error:not(.focused) .validation-icon-error {\n    visibility: visible; }\n  .control-text-input.error:not(.focused) input, .control-text-input.error:not(.focused) textarea {\n    width: calc(100% - 43px);\n    padding-right: 0; }\n  .control-text-input.success:not(.focused) .validation-icon-success {\n    visibility: visible; }\n  .control-text-input.success:not(.focused) input, .control-text-input.success:not(.focused) textarea {\n    width: calc(100% - 43px);\n    padding-right: 0; }\n  .control-text-input.instant-error.validation-icon-error {\n    visibility: visible; }\n  .control-text-input.instant-error input:focus, .control-text-input.instant-error textarea:focus {\n    border: 1px solid #ee5951; }\n  .control-text-input.instant-error:not(.focused).validation-icon-error {\n    visibility: hidden; }\n  .control-text-input.is-disabled > label {\n    color: #939393; }\n  .control-text-input.is-disabled input, .control-text-input.is-disabled textarea {\n    color: #b6c1cd;\n    background-color: transparent; }\n  .control-text-input.has-label .validation-icon {\n    top: 37px; }\n  .control-text-input .validation-icon {\n    position: absolute;\n    right: 12px;\n    top: 9px;\n    cursor: pointer;\n    visibility: hidden;\n    font-size: 0; }\n    .control-text-input .validation-icon .symbol-inputValidationError {\n      fill: #ee5951; }\n    .control-text-input .validation-icon .symbol-inputValidationSuccess {\n      fill: #60bc57; }\n", ""]);

	// exports


/***/ },
/* 172 */
/*!********************!*\
  !*** ./js/init.js ***!
  \********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(/*! react */ 2);
	var options = __webpack_require__(/*! baseUI/panelInputs/dropDown/options */ 81);
	var openedPanels = __webpack_require__(/*! wix-ui-react/components/panels/openedPanels */ 101);
	var tooltipsRenderer = __webpack_require__(/*! baseUI/popovers/tooltipsRenderer */ 173);

	module.exports = {
	    createRoot: function createRoot(callback) {
	        var element = React.createElement('div', {}, React.createElement(options, {}), React.createElement(tooltipsRenderer, {}), React.createElement(openedPanels, {}));

	        var uiLibContainer = document.createElement('div');
	        uiLibContainer.id = 'ui-lib';
	        document.getElementsByTagName('body')[0].appendChild(uiLibContainer);
	        React.render(element, uiLibContainer, callback);
	    }
	};

/***/ },
/* 173 */
/*!************************************************!*\
  !*** ./js/baseUI/popovers/tooltipsRenderer.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 2), __webpack_require__(/*! lodash */ 4), __webpack_require__(/*! baseUI/popovers/tooltipManager */ 35), __webpack_require__(/*! baseUI/popovers/tooltipsRenderer.rt */ 174)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, tooltipManager, template) {
	    'use strict';

	    return React.createClass({
	        displayName: 'tooltipsRenderer',

	        getInitialState: function getInitialState() {
	            return {
	                presentedTooltips: []
	            };
	        },

	        componentWillMount: function componentWillMount() {
	            tooltipManager.setTooltipRenderer(this);
	        },

	        updateDisplayedTooltips: function updateDisplayedTooltips(presentersArr, callback) {
	            this.setState({
	                presentedTooltips: presentersArr
	            }, callback);
	        },

	        render: template
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 174 */
/*!************************************************!*\
  !*** ./js/baseUI/popovers/tooltipsRenderer.rt ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 2),
	    __webpack_require__(/*! lodash */ 4),
	    __webpack_require__(/*! baseUI/popovers/bubble */ 175),
	    __webpack_require__(/*! baseUI/popovers/tooltipPresenter */ 178)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, bubble, tooltipPresenter) {
	    'use strict';
	    function repeatTooltipData1(tooltipData, tooltipDataIndex) {
	        return React.createElement(tooltipPresenter, _.assign({}, { 'key': tooltipData.id }, tooltipData));
	    }
	    return function () {
	        return React.createElement.apply(this, [
	            'div',
	            { 'className': 'tooltips-layer' }    /* <UA.tooltipAnimation> */,
	            _.map(this.state.presentedTooltips, repeatTooltipData1.bind(this))    /* </UA.tooltipAnimation> */
	        ]);
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 175 */
/*!**************************************!*\
  !*** ./js/baseUI/popovers/bubble.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 2), __webpack_require__(/*! lodash */ 4), __webpack_require__(/*! jquery */ 58), __webpack_require__(/*! core */ 14), __webpack_require__(/*! util */ 17), __webpack_require__(/*! baseUI/framework/uiConstants */ 12), __webpack_require__(/*! baseUI/mixins/positionRelativeToElementMixin */ 176), __webpack_require__(/*! baseUI/popovers/bubble.rt */ 177)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, $, core, util, uiConstants, positionRelativeToElementMixin, template) {
	    'use strict';

	    var distanceFromTarget = uiConstants.BUBBLE.DISTANCE_FROM_TARGET;

	    function getValueType(value) {
	        if (_.isString(value)) {
	            return uiConstants.TOOLTIP.VALUE_TYPE.STRING;
	        } else if (value && value.classPath && value.props) {
	            return uiConstants.TOOLTIP.VALUE_TYPE.CLASS;
	        }
	        return uiConstants.TOOLTIP.VALUE_TYPE.TEMPLATE;
	    }

	    return React.createClass({
	        mixins: [util.translationMixin, util.outerClickMixin, positionRelativeToElementMixin],
	        displayName: 'bubble',
	        propTypes: {
	            'value': React.PropTypes.oneOfType([React.PropTypes.string.isRequired, React.PropTypes.element.isRequired, React.PropTypes.shape({
	                classPath: React.PropTypes.string,
	                props: React.PropTypes.object
	            }).isRequired]),
	            targetNode: React.PropTypes.object,
	            mouseLeftTargetNode: React.PropTypes.bool,
	            closeTriggers: React.PropTypes.arrayOf(React.PropTypes.oneOf(_.values(uiConstants.TOOLTIP.TRIGGERS))),
	            width: React.PropTypes.string,
	            noArrow: React.PropTypes.bool,
	            styleType: React.PropTypes.oneOf(_.values(uiConstants.TOOLTIP.STYLE_TYPE)),
	            marginsFromWindow: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
	            hideMethod: React.PropTypes.func,
	            timeoutForMouseOverBubble: React.PropTypes.number
	        },

	        getInitialState: function getInitialState() {
	            return {
	                measured: false
	            };
	        },

	        getDefaultProps: function getDefaultProps() {
	            return {
	                timeoutForMouseOverBubble: 150
	            };
	        },

	        getClasses: function getClasses() {
	            var classes = {
	                'tooltip-presenter': true
	            };

	            classes['alignment-' + this.calculatedAlignment] = true;

	            var valueType = getValueType(this.props.value);

	            if (valueType !== uiConstants.TOOLTIP.VALUE_TYPE.STRING && !this.props.styleType) {
	                classes['content-only'] = true;
	            } else {
	                switch (this.props.styleType) {
	                    case uiConstants.TOOLTIP.STYLE_TYPE.SMALL:
	                        classes['small-tooltip'] = true;
	                        break;
	                    case uiConstants.TOOLTIP.STYLE_TYPE.CONTENT_ONLY:
	                        classes['content-only'] = true;
	                        break;
	                    default:
	                        classes['normal-tooltip'] = true;
	                        break;
	                }
	            }

	            return classes;
	        },

	        onOuterClick: function onOuterClick(evt) {
	            var clickedNode = evt.target;
	            if (_.contains(this.props.closeTriggers, uiConstants.TOOLTIP.TRIGGERS.OUTER_CLICK)) {
	                while (clickedNode) {
	                    if (clickedNode === this.props.targetNode) {
	                        return;
	                    }
	                    clickedNode = clickedNode.parentElement || clickedNode.parentNode;
	                }
	                this.hide();
	            }
	        },

	        componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	            if (nextProps.mouseLeftTargetNode) {
	                this.hideAfterDelayIfMouseNotOverBubble();
	            }
	        },

	        hide: function hide() {
	            this.props.hideMethod();
	        },

	        hideAfterDelayIfMouseNotOverBubble: function hideAfterDelayIfMouseNotOverBubble() {
	            setTimeout((function () {
	                if (!this.mouseOverBubble) {
	                    this.hide();
	                }
	            }).bind(this), this.props.timeoutForMouseOverBubble);
	        },

	        onMouseLeave: function onMouseLeave() {
	            this.mouseOverBubble = false;
	            if (_.contains(this.props.closeTriggers, uiConstants.TOOLTIP.TRIGGERS.MOUSE_LEAVE)) {
	                this.hideAfterDelayIfMouseNotOverBubble();
	            }
	        },

	        onMouseEnter: function onMouseEnter() {
	            this.mouseOverBubble = true;
	        },

	        getContent: function getContent() {
	            var value = this.props.value;
	            var valueType = getValueType(value);

	            switch (valueType) {
	                case uiConstants.TOOLTIP.VALUE_TYPE.STRING:
	                    return React.createElement('div', {
	                        className: 'content',
	                        children: this.translateIfNeeded(value)
	                    });
	                case uiConstants.TOOLTIP.VALUE_TYPE.CLASS:
	                    return React.createElement(core.lazyComponent, _.assign({
	                        'moduleName': value.classPath,
	                        onLoad: this.onContentLoaded
	                    }, _.assign({}, value.props, { calculatedAlignment: this.calculatedAlignment })));
	                case uiConstants.TOOLTIP.VALUE_TYPE.TEMPLATE:
	                    return this.props.value;
	            }
	        },

	        onContentLoaded: function onContentLoaded() {
	            this.forceUpdate();
	        },

	        getArrowStyle: function getArrowStyle() {
	            if (!this.calculatedAlignment || !this.isMounted() || this.props.noArrow) {
	                return {
	                    display: 'none'
	                };
	            }

	            var arrowSize = this.props.styleType === uiConstants.TOOLTIP.STYLE_TYPE.SMALL ? 8 : 10;
	            var targetLayout = this.props.targetNode.getBoundingClientRect();
	            var arrowTop, arrowLeft;
	            switch (this.calculatedAlignment) {
	                case uiConstants.TOOLTIP.ALIGNMENT.TOP:
	                    arrowTop = targetLayout.top - distanceFromTarget - arrowSize / 2;
	                    arrowLeft = targetLayout.left + (targetLayout.width - arrowSize) / 2;
	                    break;
	                case uiConstants.TOOLTIP.ALIGNMENT.BOTTOM:
	                    arrowTop = targetLayout.top + targetLayout.height + distanceFromTarget - arrowSize / 2;
	                    arrowLeft = targetLayout.left + (targetLayout.width - arrowSize) / 2;
	                    break;
	                case uiConstants.TOOLTIP.ALIGNMENT.LEFT:
	                    arrowTop = targetLayout.top + (targetLayout.height - arrowSize) / 2;
	                    arrowLeft = targetLayout.left - distanceFromTarget - arrowSize / 2;
	                    break;
	                case uiConstants.TOOLTIP.ALIGNMENT.RIGHT:
	                    arrowTop = targetLayout.top + (targetLayout.height - arrowSize) / 2;
	                    arrowLeft = targetLayout.left + targetLayout.width + distanceFromTarget - arrowSize / 2;
	                    break;
	            }
	            var $bubbleNode = $(this.getDOMNode());
	            var fixedPositionTopDelta = $bubbleNode.offset().top - $(window).scrollTop() - parseInt($bubbleNode.css('top'), 10);
	            var fixedPositionLeftDelta = $bubbleNode.offset().left - parseInt($bubbleNode.css('left'), 10);
	            return {
	                position: 'fixed',
	                top: arrowTop - fixedPositionTopDelta,
	                left: arrowLeft - fixedPositionLeftDelta,
	                height: arrowSize,
	                width: arrowSize
	            };
	        },

	        render: template
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 176 */
/*!************************************************************!*\
  !*** ./js/baseUI/mixins/positionRelativeToElementMixin.js ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! lodash */ 4), __webpack_require__(/*! react */ 2), __webpack_require__(/*! jquery */ 58), __webpack_require__(/*! util */ 17), __webpack_require__(/*! baseUI/framework/uiConstants */ 12)], __WEBPACK_AMD_DEFINE_RESULT__ = function (_, React, $, util, uiConstants) {
	    'use strict';

	    var verticalAlignments = [uiConstants.TOOLTIP.ALIGNMENT.BOTTOM, uiConstants.TOOLTIP.ALIGNMENT.TOP];
	    var distanceFromTarget = uiConstants.BUBBLE.DISTANCE_FROM_TARGET;

	    function getWindowSize() {
	        return {
	            width: $(window).width(),
	            height: $(window).height()
	        };
	    }

	    return {
	        mixins: [util.singlePassDOMReadWriteMixin],

	        PropTypes: {
	            alignment: React.PropTypes.oneOf(_.values(uiConstants.TOOLTIP.ALIGNMENT)),
	            overridePositionAdjustments: React.PropTypes.shape({
	                type: React.PropTypes.oneOf(_.values(uiConstants.TOOLTIP.ALIGNMENT)).isRequired,
	                value: React.PropTypes.number.isRequired
	            })
	        },

	        getInitialState: function getInitialState() {
	            this.calculatedAlignment = null;
	            return {};
	        },

	        getDefaultProps: function getDefaultProps() {
	            return {
	                alignment: uiConstants.TOOLTIP.ALIGNMENT.TOP
	            };
	        },

	        getPosition: function getPosition() {
	            var isVerticalAlignment = _.contains(verticalAlignments, this.props.alignment);
	            var position = {
	                top: 0,
	                left: 0
	            };
	            if (isVerticalAlignment) {
	                position.top = this.getTopInVerticalAlignment();
	                position.left = this.getLeftInVerticalAlignment();
	            } else {
	                position.top = this.getTopInHorizontalAlignment();
	                position.left = this.getLeftInHorizontalAlignment();
	            }

	            position.top += $(window).scrollTop();
	            return position;
	        },

	        getLayouts: function getLayouts() {
	            var windowSize = getWindowSize();
	            var targetLayout = this.props.targetNode.getBoundingClientRect();
	            var selfLayout = this.getDOMNode().getBoundingClientRect();

	            return {
	                window: windowSize,
	                target: targetLayout,
	                self: selfLayout
	            };
	        },

	        getTopInVerticalAlignment: function getTopInVerticalAlignment() {
	            var layouts = this.getLayouts();
	            var result = 0;

	            var canFitAboveTarget = layouts.target.top - distanceFromTarget - layouts.self.height > 0;
	            var canFitBelowTarget = layouts.target.bottom + distanceFromTarget + layouts.self.height < layouts.window.height;
	            var isTopAlignment = this.props.alignment === uiConstants.TOOLTIP.ALIGNMENT.TOP;
	            var isBottomAlignment = this.props.alignment === uiConstants.TOOLTIP.ALIGNMENT.BOTTOM;

	            var shouldPositionAboveTarget = isTopAlignment && canFitAboveTarget || isBottomAlignment && !canFitBelowTarget;

	            if (shouldPositionAboveTarget) {
	                result = layouts.target.top - distanceFromTarget - layouts.self.height;
	                this.updateCalculatedAlignmentAndRender(uiConstants.TOOLTIP.ALIGNMENT.TOP);
	            } else {
	                result = layouts.target.bottom + distanceFromTarget;
	                this.updateCalculatedAlignmentAndRender(uiConstants.TOOLTIP.ALIGNMENT.BOTTOM);
	            }

	            return result;
	        },

	        getLeftInVerticalAlignment: function getLeftInVerticalAlignment() {
	            var result;
	            var layouts = this.getLayouts();
	            var targetCenterX = Math.floor(layouts.target.left + layouts.target.width / 2);
	            var leftPosCenteredOnTarget = targetCenterX - layouts.self.width / 2;

	            var leftPosToUse = this.applyLeftRightOverridePositionAdjustments() || leftPosCenteredOnTarget;

	            var maxAllowedLeft = layouts.window.width - this.props.marginsFromWindow - layouts.self.width;
	            var minAllowedLeft = this.props.marginsFromWindow;
	            var leftAdjustedToScreen = util.math.ensureWithinLimits(leftPosToUse, minAllowedLeft, maxAllowedLeft);

	            result = leftAdjustedToScreen;

	            return result;
	        },

	        getTopInHorizontalAlignment: function getTopInHorizontalAlignment() {
	            var result;
	            var layouts = this.getLayouts();

	            var targetCenterY = Math.floor(layouts.target.top + layouts.target.height / 2);
	            var topPosCenteredOnTarget = targetCenterY - layouts.self.height / 2;

	            var topPosToUse = this.applyTopBottomOverridePositionAdjustments() || topPosCenteredOnTarget;

	            var maxAllowedTop = layouts.window.height - this.props.marginsFromWindow - layouts.self.height;
	            var minAllowedTop = this.props.marginsFromWindow;
	            result = util.math.ensureWithinLimits(topPosToUse, minAllowedTop, maxAllowedTop);

	            return result;
	        },

	        getLeftInHorizontalAlignment: function getLeftInHorizontalAlignment() {
	            var layouts = this.getLayouts();
	            var result = 0;

	            var canFitLeftOfTarget = layouts.target.left - distanceFromTarget - layouts.self.width > 0;
	            var canFitRightOfTarget = layouts.target.right + distanceFromTarget + layouts.self.width < layouts.window.width;
	            var isLeftAlignment = this.props.alignment === uiConstants.TOOLTIP.ALIGNMENT.LEFT;
	            var isRightAlignment = this.props.alignment === uiConstants.TOOLTIP.ALIGNMENT.RIGHT;

	            var shouldPositionLeftOfTarget = isLeftAlignment && canFitLeftOfTarget || isRightAlignment && !canFitRightOfTarget;

	            if (shouldPositionLeftOfTarget) {
	                result = layouts.target.left - distanceFromTarget - layouts.self.width;
	                this.updateCalculatedAlignmentAndRender(uiConstants.TOOLTIP.ALIGNMENT.LEFT);
	            } else {
	                result = layouts.target.right + distanceFromTarget;
	                this.updateCalculatedAlignmentAndRender(uiConstants.TOOLTIP.ALIGNMENT.RIGHT);
	            }

	            return result;
	        },

	        applyLeftRightOverridePositionAdjustments: function applyLeftRightOverridePositionAdjustments() {
	            var layouts = this.getLayouts();
	            var overridePositionAdjustments = this.props.overridePositionAdjustments;
	            var targetCenterX = Math.floor(layouts.target.left + layouts.target.width / 2);

	            if (overridePositionAdjustments && overridePositionAdjustments.type === uiConstants.TOOLTIP.ALIGNMENT.LEFT) {
	                return targetCenterX - overridePositionAdjustments.value;
	            } else if (overridePositionAdjustments && overridePositionAdjustments.type === uiConstants.TOOLTIP.ALIGNMENT.RIGHT) {
	                return targetCenterX + overridePositionAdjustments.value - layouts.self.width;
	            }

	            return null;
	        },

	        applyTopBottomOverridePositionAdjustments: function applyTopBottomOverridePositionAdjustments() {
	            var layouts = this.getLayouts();
	            var overridePositionAdjustments = this.props.overridePositionAdjustments;
	            var targetCenterY = Math.floor(layouts.target.top + layouts.target.height / 2);

	            if (overridePositionAdjustments && overridePositionAdjustments.type === uiConstants.TOOLTIP.ALIGNMENT.TOP) {
	                return targetCenterY - overridePositionAdjustments.value;
	            } else if (overridePositionAdjustments && overridePositionAdjustments.type === uiConstants.TOOLTIP.ALIGNMENT.BOTTOM) {
	                return targetCenterY + overridePositionAdjustments.value - layouts.self.height;
	            }

	            return null;
	        },

	        updateCalculatedAlignmentAndRender: function updateCalculatedAlignmentAndRender(alignment) {
	            if (this.calculatedAlignment !== alignment) {
	                this.calculatedAlignment = alignment;
	                this.forceUpdate();
	            }
	        },

	        measurePhase: function measurePhase() {
	            return this.getPosition();
	        },

	        patchPhase: function patchPhase(position) {
	            var style = {
	                top: position.top,
	                left: position.left
	            };
	            var domNode = this.getDOMNode();
	            $(domNode).offset(style);
	        }

	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 177 */
/*!**************************************!*\
  !*** ./js/baseUI/popovers/bubble.rt ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 2),
	    __webpack_require__(/*! lodash */ 4)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _) {
	    'use strict';
	    return function () {
	        return React.createElement('div', {
	            'className': _.keys(_.pick(this.getClasses(), _.identity)).join(' '),
	            'style': { maxWidth: this.props.width },
	            'onMouseLeave': this.onMouseLeave,
	            'onMouseEnter': this.onMouseEnter
	        }, React.createElement('div', {
	            'className': 'arrow',
	            'style': this.getArrowStyle()
	        }), React.createElement('div', { 'className': 'content-wrapper' }, this.getContent()));
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 178 */
/*!************************************************!*\
  !*** ./js/baseUI/popovers/tooltipPresenter.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 2), __webpack_require__(/*! lodash */ 4), __webpack_require__(/*! baseUI/popovers/tooltipManager */ 35), __webpack_require__(/*! baseUI/popovers/tooltipPresenter.rt */ 179)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, tooltipManager, template) {
	    'use strict';

	    return React.createClass({
	        displayName: 'tooltipPresenter',
	        propTypes: {
	            id: React.PropTypes.string
	        },
	        getBubbleProps: function getBubbleProps() {
	            return _.assign({}, this.props, {
	                hideMethod: tooltipManager.hide.bind(tooltipManager, this.props.id)
	            });
	        },
	        render: template
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 179 */
/*!************************************************!*\
  !*** ./js/baseUI/popovers/tooltipPresenter.rt ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 2),
	    __webpack_require__(/*! lodash */ 4),
	    __webpack_require__(/*! baseUI/popovers/bubble */ 175)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, bubble) {
	    'use strict';
	    return function () {
	        return React.createElement(bubble, this.getBubbleProps());
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }
/******/ ])
});
;