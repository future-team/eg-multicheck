import React, { Component ,PropTypes} from 'react';
import ReactDom from 'react/lib/ReactDOM';
import {Input,Dialog,Toast,Icon, LabelGroup, Label, CheckboxGroup} from 'eagle-ui';
import {Head,Footer} from 'gfs-head'
import EgMultiSelect from '../../src/index.js'

class Demo extends  Component {
    constructor(props){
        super(props)
        this.state = {
            file: [],
            activeIndex:0,
            checkBoxValue: false
        }
    }
    labelChoose(val){
        console.log('labelChoose', val)
    }
    checkboxCallback(val){
        console.log('checkboxCallback', val)
    }
    selectCallback(val, dom){
        console.log(val, dom)
    }
    render(){
        return (
            <div>
                <LabelGroup className="eg-multiselect-parent" title='行政区：' defaultChecked='全部' clickCallback={::this.labelChoose} >
                    <Label>全部</Label>
                    <Label>卢湾区</Label>
                    <Label>徐汇区</Label>
                    <Label>静安区</Label>
                    <Label>长宁区</Label>
                    <Label>闵行区</Label>
                    <Label>浦东新区</Label>
                    <Label>黄埔区</Label>
                </LabelGroup>
                <EgMultiSelect title='商  圈：'>
                    <Input label="不限" type="checkbox" checked value="12"/>
                    <Input label="万达广场" type="checkbox" checked value="12"/>
                    <Input label="龙之梦商圈" type="checkbox" value="44"/>
                    <Input label="飞飞商圈"  type="checkbox" getValueCallback={function(val,dom){console.log(val,dom)}} value="apple"  />
                    <Input label="啵啵商圈"  type="checkbox" onChange={this.checkboxCallback.bind(this)} getValueCallback={function(val,dom){console.log(val,dom)}} checked={this.state.checkBoxValue} value="banana"  />
                </EgMultiSelect>
                <LabelGroup title='行政区：' defaultChecked='全部' clickCallback={this.show} >
                    <Label>全部</Label>
                    <Label>卢湾区</Label>
                    <Label>徐汇区</Label>
                    <Label>静安区</Label>
                    <Label>长宁区</Label>
                    <Label>闵行区</Label>
                    <Label>浦东新区</Label>
                    <Label>黄浦区</Label>
                    <Label>普陀区</Label>
                    <Label>闸北区</Label>
                    <Label>虹口区</Label>
                    <Label>杨浦区</Label>
                    <Label>宝山区</Label>
                </LabelGroup>
            </div>
        )
    }
}

ReactDom.render(
    <Demo/>,
    document.getElementById('root')
);
ReactDom.render(
    <Head titles={[{title: '博客', href: 'http://uedfamily.com/'},
            {title: '关于我们', href: 'http://uedfamily.com/about/'},
            {title: '更多组件', href: 'http://uedfamily.com/framework/'}]}/>,
    document.getElementById('head')
);
ReactDom.render(
    <Footer/>,
    document.getElementById('footer')
);