(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react/lib/ReactDOM"), require("eagle-ui"), require("eagle-ui/lib/utils/Component"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react/lib/ReactDOM", "eagle-ui", "eagle-ui/lib/utils/Component"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("react/lib/ReactDOM"), require("eagle-ui"), require("eagle-ui/lib/utils/Component")) : factory(root["React"], root["ReactDom"], root["Eagleui"], root["Component"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _reactLibReactDOM = __webpack_require__(4);
	
	var _reactLibReactDOM2 = _interopRequireDefault(_reactLibReactDOM);
	
	var _eagleUi = __webpack_require__(5);
	
	var _eagleUiLibUtilsComponent = __webpack_require__(6);
	
	var _eagleUiLibUtilsComponent2 = _interopRequireDefault(_eagleUiLibUtilsComponent);
	
	__webpack_require__(7);
	
	var EgMultiCheck = (function (_Component) {
	    _inherits(EgMultiCheck, _Component);
	
	    _createClass(EgMultiCheck, null, [{
	        key: 'propTypes',
	        value: {
	            /**
	             * 标签组左侧标题
	             * @property title
	             * @type String
	             * */
	            title: _react.PropTypes.string,
	
	            /**
	             * 点击后触发的回调
	             * @property checkCallback
	             * @type Function
	             * @default function(){}
	             */
	            checkCallback: _react.PropTypes.func,
	
	            /**
	             * 默认选中的项，取值为选中Input的值
	             * @property defaultChecked
	             * @type String Integer
	             * */
	            defaultChecked: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number, _react.PropTypes.array]),
	            /**
	             * 间距，label集合与左边title的间距
	             * @property spacing
	             * @type Integer
	             * */
	            spacing: _react.PropTypes.number,
	            children: _react.PropTypes.any
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            classPrefix: 'multicheck-group',
	            defaultChecked: ''
	        },
	        enumerable: true
	    }]);
	
	    function EgMultiCheck(props, context) {
	        _classCallCheck(this, EgMultiCheck);
	
	        _Component.call(this, props, context);
	        this.setDefaultState({
	            // 数组
	            checked: this.props.defaultChecked,
	            itemStyle: {
	                marginLeft: this.props.spacing + 'px'
	            },
	            forceUpdate: false
	        });
	        this.isInit = true;
	        this.titleObj = this.uniqueId();
	        this.itemObj = this.uniqueId();
	        this.checks = [];
	    }
	
	    /**
	     * onChange 的事件拦截
	     * @param {any} callback 
	     * @param {any} value 
	     * @param {any} text 
	     * @param {any} target 
	     * @param {any} active 
	     */
	
	    EgMultiCheck.prototype.onChangeHandler = function onChangeHandler() /*callback, target, index*/{}
	    // callback && callback(target)
	
	    /**
	     * getValueCallback 的事件拦截
	     * @param {any} callback 
	     * @param {any} value 
	     * @param {any} dom 
	     */
	    ;
	
	    EgMultiCheck.prototype.getValueHandler = function getValueHandler(callback, index, value, dom) {
	        var checked = dom.checked;
	
	        // update checks
	        this.checks[index]['checked'] = checked;
	        if (checked) {
	            // 如果是全选 去掉其他的选中状态
	            if (index == 0) {
	                this.checks.forEach(function (item, index) {
	                    index != 0 && (item.checked = false);
	                });
	            } else {
	                // 如果是选中了子项，全选的状态去掉
	                this.checks[0]['checked'] = false;
	            }
	        }
	        var values = [];
	        if (index == 0 && checked) {
	            values = [value];
	        } else {
	            this.checks.map(function (item) {
	                if (item.checked) values.push(item.value);
	            });
	        }
	        // callback && callback(values, dom)
	        this.props.checkCallback && this.props.checkCallback(values);
	        // 更新选中的状态
	        this.setState({
	            forceUpdate: true
	        });
	    };
	
	    // 渲染title
	
	    EgMultiCheck.prototype.renderTitle = function renderTitle() {
	        var title = this.props.title;
	        var html = [];
	        if (title) {
	            html.push(_react2['default'].createElement(
	                'div',
	                { className: 'title', key: title, ref: this.titleObj },
	                title
	            ));
	        }
	        return html;
	    };
	
	    EgMultiCheck.prototype.loadedCallback = function loadedCallback() {
	        // 在没有设置 spacing 的情况下设置margin-left
	        var offsetV = _reactLibReactDOM2['default'].findDOMNode(this.refs[this.titleObj]);
	        if (offsetV && !this.props.spacing) {
	            var cssStr = 'margin-left:' + (offsetV.offsetWidth + 30) + 'px;';
	            _reactLibReactDOM2['default'].findDOMNode(this.refs[this.itemObj]).style.cssText = cssStr;
	        }
	    };
	
	    EgMultiCheck.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        // 判断 defaultChecked 是否有变化
	        var prevDefaultChecked = (this.props.defaultChecked || '').toString();
	        var nextDefaultChecked = (nextProps.defaultChecked || '').toString();
	        if (prevDefaultChecked != nextDefaultChecked) {
	            this.setState({
	                forceUpdate: false,
	                checked: nextProps.defaultChecked
	            });
	        } else {
	            this.setState({
	                forceUpdate: this.state.forceUpdate,
	                checked: nextProps.defaultChecked
	            });
	        }
	    };
	
	    /**
	     * check type
	     * @param obj
	     * @param type
	     * @returns {boolean}
	     */
	
	    EgMultiCheck.prototype.checkType = function checkType(obj, type) {
	        return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase() === type;
	    };
	
	    // 如果发生点击之后了，就需要取checks里的值
	    // 初始化的话则取checked的值
	
	    EgMultiCheck.prototype.checkChecked = function checkChecked(value) {
	        var _state = this.state;
	        var checked = _state.checked;
	        var forceUpdate = _state.forceUpdate;
	
	        // merge this.checks
	        var cks = [];
	        this.checks.map(function (item) {
	            if (item.checked) {
	                cks.push(item.value);
	            }
	        });
	        if (forceUpdate) {
	            var ck = false;
	            cks.map(function (val) {
	                if (val == value) ck = true;
	            });
	            return ck;
	        } else {
	            if (this.checkType(checked, 'string')) {
	                return value == checked;
	            }
	            if (this.checkType(checked, 'array')) {
	                var ck = false;
	                checked.map(function (val) {
	                    if (val == value) ck = true;
	                });
	                return ck;
	            }
	        }
	    };
	
	    EgMultiCheck.prototype.render = function render() {
	        var _this = this;
	        var checks = [];
	        /**
	         * key 重复，使用component生成唯一key
	         * */
	        var options = _react2['default'].Children.map(this.props.children, function (option, index) {
	            var _option$props = option.props;
	            var onChange = _option$props.onChange;
	            var // 废弃input上的事件
	            getValueCallback = _option$props.getValueCallback;
	            var // 废弃input上的事件
	            children = _option$props.children;
	            var value = _option$props.value;
	
	            var other = _objectWithoutProperties(_option$props, ['onChange', 'getValueCallback', 'children', 'value']);
	
	            var uuid = _this.uniqueId();
	            var checked = _this.checkChecked(value);
	            checks.push({
	                index: index,
	                value: value,
	                refs: uuid,
	                checked: checked
	            });
	            return _react2['default'].createElement(
	                _eagleUi.Input,
	                _extends({}, other, {
	                    ref: uuid,
	                    key: _this.uniqueId(),
	                    value: value,
	                    checked: checked,
	                    onChange: _this.onChangeHandler.bind(_this, onChange ? onChange : _this.props.onChange, index),
	                    getValueCallback: _this.getValueHandler.bind(_this, getValueCallback ? getValueCallback : function () {}, index)
	                }),
	                children
	            );
	        }, this);
	        // 保存当前的按钮状态
	        this.checks = checks;
	        return _react2['default'].createElement(
	            'div',
	            { className: _classnames2['default'](this.getProperty(), 'clearfix') },
	            this.renderTitle(),
	            _react2['default'].createElement(
	                'div',
	                { className: 'item-box clearfix', ref: this.itemObj, style: this.state.itemStyle },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'item-list' },
	                    options
	                )
	            )
	        );
	    };
	
	    return EgMultiCheck;
	})(_eagleUiLibUtilsComponent2['default']);
	
	exports['default'] = EgMultiCheck;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(8);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/less-loader/index.js!./index.less", function() {
				var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/less-loader/index.js!./index.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports
	
	
	// module
	exports.push([module.id, ".eg-multicheck-group {\n  padding: 10px 0;\n  border-bottom: 1px solid #eeeeee;\n}\n.eg-multicheck-group .title {\n  float: left;\n  padding: 2px 4px;\n  color: #989898;\n}\n.eg-multicheck-group .item-box {\n  overflow: hidden;\n}\n.eg-multicheck-group .item-box .item-list {\n  width: auto;\n}\n.eg-multicheck-group .item-box .item-list .eg-input {\n  border: 1px solid transparent;\n  margin-right: 10px;\n}\n.eg-multicheck-group .item-box .item-list .checkbox:first-child {\n  padding: 2px 4px;\n}\n.eg-multicheck-group .item-box .item-list .checkbox:first-child .input-icon {\n  display: none;\n}\n.eg-multicheck-group .item-box .item-list .checkbox:first-child.active {\n  background: #FFF0EB;\n  border: 1px solid #FF6633!important;\n  border-radius: 4px!important;\n  color: #FF6633;\n}\n.eg-multicheck-wrap {\n  border-bottom: 1px solid #eeeeee;\n}\n.eg-multicheck-wrap .title {\n  font-weight: bold;\n  color: #333;\n}\n.eg-multicheck-wrap .eg-label-group {\n  padding: 9px 0;\n  overflow: visible;\n}\n.eg-multicheck-wrap .eg-label-group .item-list {\n  width: auto;\n}\n.eg-multicheck-wrap .eg-label-group .item-box {\n  overflow: visible;\n}\n.eg-multicheck-wrap .eg-label-group .eg-label {\n  border-right: initial!important;\n  text-decoration: none;\n}\n.eg-multicheck-wrap .eg-label-group .eg-label-active {\n  position: relative;\n  background: #FFF0EB;\n  border: 1px solid #FF6633!important;\n  border-radius: 4px!important;\n  color: #FF6633;\n}\n.eg-multicheck-wrap .eg-label-group .eg-label-active:after {\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  content: ' ';\n  width: 0;\n  height: 0;\n  margin-bottom: -10px;\n  border-style: solid;\n  border-color: transparent;\n  border-top-width: 6px;\n  border-bottom-width: 6px;\n  border-left-width: 5px;\n  border-right-width: 5px;\n  border-bottom-color: #F9F9F9;\n}\n.eg-multicheck-wrap .eg-label-group + .eg-multicheck-group {\n  background: #F9F9F9;\n  border-bottom: 0;\n}\n.eg-multicheck-wrap .eg-label-group + .eg-multicheck-group .title {\n  font-weight: normal;\n  color: #989898;\n}\n", ""]);
	
	// exports


/***/ },
/* 9 */
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
/* 10 */
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


/***/ }
/******/ ])
});
;