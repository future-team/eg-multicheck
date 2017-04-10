import React,{PropTypes} from 'react'
import classnames from 'classnames'
import ReactDom from 'react/lib/ReactDOM'
import {Input} from 'eagle-ui'
import Component from 'eagle-ui/lib/utils/Component'
import '../css/index.less'

export default class EgMultiSelect extends Component{
    static propTypes = {
        /**
         * 标签组左侧标题
         * @property title
         * @type String
         * */
        title:PropTypes.string,
        /**
         * 标签组展现形式{form|simple|default}
         * @property egType
         * @type String
         * @default default
         * */
        egType:PropTypes.oneOf(['simple', 'form','default']),
        /**
         * 点击后触发的回调，所有label会被继承
         * @property activeCallback
         * @type Function
         * */
        activeCallback:PropTypes.func,
        /**
         * 默认选中的项，取值为选中标签的文案
         * @property defaultChecked
         * @type String Integer
         * */
        defaultChecked:PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        /**
         * 间距，label集合与左边title的间距
         * @property spacing
         * @type Integer
         * */
        spacing:PropTypes.number
    };
    static defaultProps = {
        classPrefix:'multi-select-group',
        simple:false
    };
    constructor(props, context) {
        super(props, context)

        this.setDefaultState({
            checked:this.props.defaultChecked,
            itemStyle:{
                marginLeft:this.props.spacing+'px'
            }
        })
        console.log('this.props.spacing', this.props.spacing)
        this.isInit = true
        this.titleObj = this.uniqueId()
        this.itemObj = this.uniqueId()
    }
    /**
     * onChange 的事件拦截
     * @param {any} callback 
     * @param {any} value 
     * @param {any} text 
     * @param {any} target 
     * @param {any} active 
     * 
     * @memberOf EgMultiSelect
     */
    onChangeHandler(callback, target){
        console.log('onChangeHandler', target)
        // 做状态的收集
        callback && callback(target)
    }
    /**
     * getValueCallback 的事件拦截
     * @param {any} callback 
     * @param {any} value 
     * @param {any} dom 
     * 
     * @memberOf EgMultiSelect
     */
    getValueHandler(callback, value, dom){
        console.log('getValueHandler', value, dom)
        // 状态收集
        callback && callback(value, dom)
    }
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
        let offsetV = ReactDom.findDOMNode(this.refs[this.titleObj] )
        if(offsetV && !this.props.spacing){
            let cssStr = `margin-left:${offsetV.offsetWidth+30}px;`
            ReactDom.findDOMNode(this.refs[this.itemObj] ).style.cssText = cssStr
        }
    }
    componentWillReceiveProps(nextProps) {
        let checkedText=nextProps.defaultChecked
        if(this.state.checked!==checkedText){
            this.setState({
                checked:checkedText
            })
        }
    }
    render(){
        let _this = this
        /**
         * key 重复，使用component生成唯一key
         * */
        let options = React.Children.map(this.props.children,(option)=>{
            let {
                onChange,
                getValueCallback,
                url,
                children,
                value,
                ...other,
            } = option.props
            
            return <Input
                {...other}
                key={_this.uniqueId()}
                onChange={_this.onChangeHandler.bind(_this, onChange ? onChange:_this.props.onChange)}
                getValueCallback={_this.getValueHandler.bind(_this, getValueCallback? getValueCallback : function(){})}
                >{children}</Input>
        },this)

        return (
            <div className={classnames(
                this.getProperty(),
                'clearfix'
            )}>
                {this.renderTitle()}
                <div className="item-box clearfix" ref={this.itemObj}>
                    <div className="item-list">{options}</div>
                </div>
            </div>
        )
    }
}