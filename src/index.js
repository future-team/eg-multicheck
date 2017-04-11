import React,{PropTypes} from 'react'
import classnames from 'classnames'
import ReactDom from 'react/lib/ReactDOM'
import {Input} from 'eagle-ui'
import Component from 'eagle-ui/lib/utils/Component'
import '../css/index.less'

export default class EgMultiCheck extends Component{
    static propTypes = {
        /**
         * 标签组左侧标题
         * @property title
         * @type String
         * */
        title:PropTypes.string,
        
        /**
         * 点击后触发的回调
         * @property checkCallback
         * @type Function
         * @default function(){}
         */
        checkCallback: PropTypes.func,

        /**
         * 默认选中的项，取值为选中Input的值
         * @property defaultChecked
         * @type String Integer
         * */
        defaultChecked:PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.array
        ]),
        /**
         * 间距，label集合与左边title的间距
         * @property spacing
         * @type Integer
         * */
        spacing:PropTypes.number,
        children: PropTypes.any
    };
    static defaultProps = {
        classPrefix:'multicheck-group',
        defaultChecked: ''
    };
    constructor(props, context) {
        super(props, context)
        this.setDefaultState({
            // 数组
            checked: this.props.defaultChecked,
            itemStyle:{
                marginLeft:this.props.spacing+'px'
            },
            forceUpdate: false
        })
        this.isInit = true
        this.titleObj = this.uniqueId()
        this.itemObj = this.uniqueId()
        this.checks = []
    }
    /**
     * onChange 的事件拦截
     * @param {any} callback 
     * @param {any} value 
     * @param {any} text 
     * @param {any} target 
     * @param {any} active 
     */
    onChangeHandler(/*callback, target, index*/){
        // callback && callback(target)
    }
    /**
     * getValueCallback 的事件拦截
     * @param {any} callback 
     * @param {any} value 
     * @param {any} dom 
     */
    getValueHandler(callback, index, value, dom){
        const {checked} = dom
        // update checks
        this.checks[index]['checked'] = checked
        if(checked){
            // 如果是全选 去掉其他的选中状态
            if(index == 0){
                this.checks.forEach((item, index)=>{
                    index != 0 && (item.checked = false)
                })
            }else{// 如果是选中了子项，全选的状态去掉
                this.checks[0]['checked'] = false
            }
        }
        let values = []
        if(index == 0 && checked){
            values = [value]
        }else{
            this.checks.map((item)=>{
                if(item.checked) values.push(item.value)
            })
        }
        // callback && callback(values, dom)
        this.props.checkCallback && this.props.checkCallback(values)
        // 更新选中的状态
        this.setState({
            forceUpdate: true
        })
    }
    // 渲染title
    renderTitle(){
        let {title} = this.props,
            html = []
        if(title){
            html.push(
                <div className="title" key={title} ref={this.titleObj}>{title}</div>
            )
        }
        return html
    }
    loadedCallback(){
        // 在没有设置 spacing 的情况下设置margin-left
        let offsetV = ReactDom.findDOMNode(this.refs[this.titleObj] )
        if(offsetV && !this.props.spacing){
            let cssStr = `margin-left:${offsetV.offsetWidth+30}px;`
            ReactDom.findDOMNode(this.refs[this.itemObj] ).style.cssText = cssStr
        }
    }
    componentWillReceiveProps(nextProps) {
        // 判断 defaultChecked 是否有变化
        const prevDefaultChecked = (this.props.defaultChecked||'').toString()
        const nextDefaultChecked = (nextProps.defaultChecked||'').toString()
        if(prevDefaultChecked != nextDefaultChecked){
            this.setState({
                forceUpdate: false,
                checked: nextProps.defaultChecked
            })
        }else{
            this.setState({
                forceUpdate: this.state.forceUpdate,
                checked: nextProps.defaultChecked
            })
        }
    }
    /**
     * check type
     * @param obj
     * @param type
     * @returns {boolean}
     */
    checkType(obj, type) {
        return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase() === type
    }
    // 如果发生点击之后了，就需要取checks里的值
    // 初始化的话则取checked的值
    checkChecked(value){
        const { checked, forceUpdate } = this.state
        // merge this.checks
        let cks = []
        this.checks.map((item)=>{
            if(item.checked){
                cks.push(item.value) 
            }
        })
        if(forceUpdate){
            let ck = false
            cks.map((val)=>{
                if(val == value) ck=true
            })
            return ck
        }else{
            if(this.checkType(checked, 'string')){
                return value == checked
            }
            if(this.checkType(checked, 'array')){
                let ck = false
                checked.map((val)=>{
                    if(val == value) ck=true
                })
                return ck
            }
        }
    }
    render(){
        let _this = this
        let checks = []
        /**
         * key 重复，使用component生成唯一key
         * */
        let options = React.Children.map(this.props.children, (option, index)=>{
            let {
                onChange,// 废弃input上的事件
                getValueCallback,// 废弃input上的事件
                children,
                value,
                ...other,
            } = option.props
            const uuid = _this.uniqueId()
            const checked = _this.checkChecked(value)
            checks.push({
                index: index,
                value: value,
                refs: uuid,
                checked: checked
            })
            return <Input
                {...other}
                ref={uuid}
                key={_this.uniqueId()}
                value={value}
                checked={checked}
                onChange={_this.onChangeHandler.bind(_this, onChange ? onChange:_this.props.onChange, index)}
                getValueCallback={_this.getValueHandler.bind(_this, getValueCallback? getValueCallback : function(){}, index)}
                >{children}</Input>
        },this)
        // 保存当前的按钮状态
        this.checks = checks
        return (
            <div className={classnames(
                this.getProperty(),
                'clearfix'
            )}>{this.renderTitle()}<div className="item-box clearfix" ref={this.itemObj}  style={this.state.itemStyle}><div className="item-list">{options}</div></div></div>
        )
    }
}