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

	/**
	 * Created by mac on 15/9/7.
	 */
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
	
	//import ReactDom from 'react-dom';
	
	var _reactLibReactDOM = __webpack_require__(4);
	
	var _reactLibReactDOM2 = _interopRequireDefault(_reactLibReactDOM);
	
	var _eagleUi = __webpack_require__(5);
	
	var _eagleUiLibUtilsComponent = __webpack_require__(6);
	
	var _eagleUiLibUtilsComponent2 = _interopRequireDefault(_eagleUiLibUtilsComponent);
	
	var EgMultiSelect = (function (_Component) {
	    _inherits(EgMultiSelect, _Component);
	
	    _createClass(EgMultiSelect, null, [{
	        key: 'propTypes',
	        value: {
	            /**
	             * 标签组左侧标题
	             * @property title
	             * @type String
	             * */
	            title: _react.PropTypes.string,
	            /**
	             * 标签组展现形式{form|simple|default}
	             * @property egType
	             * @type String
	             * @default default
	             * */
	            egType: _react.PropTypes.oneOf(['simple', 'form', 'default']),
	            /**
	             * 点击后触发的回调，所有label会被继承
	             * @property activeCallback
	             * @type Function
	             * */
	            activeCallback: _react.PropTypes.func,
	            /**
	             * 默认选中的项，取值为选中标签的文案
	             * @property defaultChecked
	             * @type String Integer
	             * */
	            defaultChecked: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
	            /**
	             * 间距，label集合与左边title的间距
	             * @property spacing
	             * @type Integer
	             * */
	            spacing: _react.PropTypes.number
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            classPrefix: 'label-group',
	            simple: false
	        },
	        enumerable: true
	    }]);
	
	    function EgMultiSelect(props, context) {
	        _classCallCheck(this, EgMultiSelect);
	
	        _Component.call(this, props, context);
	
	        this.setDefaultState({
	            checked: this.props.defaultChecked,
	            itemStyle: {
	                marginLeft: this.props.spacing + 'px'
	            }
	        });
	
	        this.isInit = true;
	
	        this.titleObj = this.uniqueId();
	        this.itemObj = this.uniqueId();
	    }
	
	    EgMultiSelect.prototype.activeHandler = function activeHandler(callback, value, text, target, active) {
	        //debugger;
	
	        if (this.state.checked != target.innerHTML) {
	            this.setState({
	                checked: text
	            });
	            callback && callback(value, text, target, active);
	        }
	    };
	
	    EgMultiSelect.prototype.renderTitle = function renderTitle() {
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
	
	    EgMultiSelect.prototype.loadedCallback = function loadedCallback() {
	
	        var offsetV = _reactLibReactDOM2['default'].findDOMNode(this.refs[this.titleObj]),
	            itemStyle = {};
	
	        if (offsetV && !this.props.spacing) {
	            var cssStr = 'margin-left:' + (offsetV.offsetWidth + 30) + 'px;';
	            _reactLibReactDOM2['default'].findDOMNode(this.refs[this.itemObj]).style.cssText = cssStr;
	        }
	    };
	
	    EgMultiSelect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        var checkedText = nextProps.defaultChecked;
	        if (this.state.checked !== checkedText) {
	            this.setState({
	                checked: checkedText
	            });
	        }
	    };
	
	    EgMultiSelect.prototype.render = function render() {
	        var _this2 = this;
	
	        var _this = this;
	        /**
	         * key 重复，使用component生成唯一key
	         * */
	        var options = _react2['default'].Children.map(this.props.children, function (option, index) {
	            var _option$props = option.props;
	            var activeCallback = _option$props.activeCallback;
	            var url = _option$props.url;
	            var children = _option$props.children;
	            var value = _option$props.value;
	
	            var other = _objectWithoutProperties(_option$props, ['activeCallback', 'url', 'children', 'value']);
	
	            return _react2['default'].createElement(
	                _eagleUi.Label,
	                _extends({}, other, {
	                    //key={children+index}
	                    key: _this.uniqueId(),
	                    url: url ? url : _this.props.url,
	                    value: value ? value : children,
	                    activeCallback: _this.activeHandler.bind(_this, activeCallback ? activeCallback : _this.props.activeCallback),
	                    active: _this2.props.egType ? false : children === _this.state.checked }),
	                children
	            );
	        }, this);
	
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
	
	    return EgMultiSelect;
	})(_eagleUiLibUtilsComponent2['default']);
	
	exports['default'] = EgMultiSelect;
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

/***/ }
/******/ ])
});
;