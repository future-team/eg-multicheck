import React, { Component ,PropTypes} from 'react';
import ReactDom from 'react/lib/ReactDOM';
import {Input, Button, LabelGroup, Label} from 'eagle-ui';
import {Head,Footer} from 'gfs-head'
import EgMultiCheck from '../../src/index.js'

class Demo extends  Component {
    constructor(props){
        super(props)
        this.state = {
            checkBoxValue: false,
            checks: "",
            circle: [],
            checkeds: '',
            disabled: false
        }
    }
    labelChoose(val){
        const data1 = [
            {
                name: '万达广场',
                value:'wd',
            },
            {
                name: '龙之梦商圈',
                value:'lzm',
            },
            {
                name: '飞飞商圈',
                value: 'ff',
            },
            {
                name: '啵啵商圈',
                value: 'bb',
            }
        ]
        const data2 = [
            {
                name: '陆家嘴',
                value: 'ljz',
            },
            {
                name: '八佰伴',
                value: 'bbb',
            },
            {
                name: '国金大厦',
                value: 'gj',
            },
            {
                name: '外滩',
                value: 'wt',
            }
        ]
        if(val == '浦东新区'){
            this.setState({
                circle: data1,
                checkeds: ['lzm']
            })
        }else{
            this.setState({
                circle: data2,
                checkeds: ['gj']
            })
        }
    }
    multiCheck(values) {
        //
        console.log('multiCheck', values)
    }
    checkboxCallback(val){
        console.log('checkboxCallback', val)
    }
    selectCallback(val, dom){
        console.log(val, dom)
    }
    btnClick(){
        this.setState({
            checks:['A', 'C'],
            disabled: true
        })
    }
    renderChild(){
        const {circle, checkeds} = this.state
        return (<EgMultiCheck title='商  圈：' defaultChecked={checkeds} checkCallback={this.multiCheck.bind(this)} spacing={100}>
            <Input label="不限" type="checkbox" value="all"/>
            {
                circle.map((item, index)=>{
                    return <Input key={index} label={item.name} type="checkbox" value={item.value}/>
                })
            }
        </EgMultiCheck>) 
    }
    render(){
        const {circle, disabled} = this.state
        return (
            <div>
                <Button onClick={this.btnClick.bind(this)} disabled={disabled}>改变「门店分级」的状态</Button>
                <br/>
                <br/>
                <div className="eg-multicheck-wrap">
                    <LabelGroup title='行政区：' defaultChecked='闵行区' activeCallback={this.labelChoose.bind(this)} spacing={100}>
                        <Label>全部</Label>
                        <Label>卢湾区</Label>
                        <Label>徐汇区</Label>
                        <Label>静安区</Label>
                        <Label>长宁区</Label>
                        <Label>闵行区</Label>
                        <Label>浦东新区</Label>
                        <Label>黄埔区</Label>
                    </LabelGroup>
                    {circle.length>0 && this.renderChild()}
                </div>
                <EgMultiCheck title='频道：' defaultChecked='0' checkCallback={this.multiCheck.bind(this)}>
                    <Input label="不限" type="checkbox" value="0"/>
                    <Input label="丽人" type="checkbox" value="1"/>
                </EgMultiCheck>
                <EgMultiCheck title='门店分级：' defaultChecked={this.state.checks} checkCallback={this.multiCheck.bind(this)} spacing={100}>
                    <Input label="不限" type="checkbox" value="12"/>
                    <Input label="K级" type="checkbox" value="K"/>
                    <Input label="A级" type="checkbox" value="A"/>
                    <Input label="B级" type="checkbox" value="B" onChange={this.checkboxCallback.bind(this)} getValueCallback={function(val,dom){console.log(val,dom)}} checked={this.state.checkBoxValue}/>
                    <Input label="C级" type="checkbox" value="C"/>
                </EgMultiCheck>
                <EgMultiCheck title='历史合作：' defaultChecked={['4', '5', '6']} checkCallback={this.multiCheck.bind(this)}>
                    <Input label="不限" type="checkbox" value="0"/>
                    <Input label="丽人" type="checkbox" value="1"/>
                    <Input label="闪惠" type="checkbox" value="2"/>
                    <Input label="关键词" type="checkbox" value="3"/>
                    <Input label="预定" type="checkbox" value="4"/>
                    <Input label="CPU" type="checkbox" value="5"/>
                    <Input label="商户通" type="checkbox" value="6"/>
                </EgMultiCheck>
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