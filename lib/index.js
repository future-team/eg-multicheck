'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactLibReactDOM = require('react/lib/ReactDOM');

var _reactLibReactDOM2 = _interopRequireDefault(_reactLibReactDOM);

var _eagleUi = require('eagle-ui');

var _eagleUiLibUtilsComponent = require('eagle-ui/lib/utils/Component');

var _eagleUiLibUtilsComponent2 = _interopRequireDefault(_eagleUiLibUtilsComponent);

require('../css/index.less');

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