import React, { Component } from 'react';
import './index.css';
import bsStore from '../../store/fetch-npm-node';
export default class HongBao extends Component {
    constructor(props){
        super(props);
        this.state={
            // 可用红包
            effective:true,
            // 过期红包
            unavailableClick:false,
            // 可用红包数据
            data:[],
            // 过期红包数据
            historyData:[],
        };
    }
    // 初始化
    initData(){
        bsStore.getHongBao()
            .then(res =>{
                res.json().then(data => {
                    // 存放未过期红包数据
                    let arr=[];
                    // 存放过期红包数据
                    let arr2=[];
                     for( let i=0;i<data.length;i++){
                         if(data[i].end_date >(new Date().toLocaleDateString()+"T"+new Date().toLocaleTimeString()+"+0800")){
                             arr.push(data[i]);
                         }else{
                             arr2.push(data[i]);
                         }
                     }
                    this.setState({"data":arr});
                    this.setState({"historyData":arr2});
                });
            });

    }
    // 可用红包和历史红包进行切换
    effectiveClick(){
        this.setState({"effective":true});
        this.setState({"unavailableClick":false});
    }
    // 不可用红包
    unavailableClick(){
        this.setState({"effective":false});
        this.setState({"unavailableClick":true});
    }
    componentDidMount(){
        this.initData();
    }
    render() {
        return (
            <div>
                <div className="hongbao-box">
                    <h2 className="hongbao-nav">
                        <a href="###" className={this.state.effective === true ? "hongbao-active":'' } onClick={()=>{this.effectiveClick()}}>可用红包</a>
                        <a href="###" className={this.state.unavailableClick === true ? "hongbao-active":''} onClick={()=>{this.unavailableClick()}}>历史红包</a>
                    </h2>
                    <ul className="hongbao-list-available" style={{"display":this.state.effective === true ? "block":'none'}}>
                        {
                            this.state.data.map(item =>{
                                return (
                                    <li key={item.id}>
                                        <div className="hongbao-li-left">
                                            <span><i>￥</i><i>{item.amount}</i><i>.0</i></span>
                                            <p>{item.description[0]}</p>
                                        </div>
                                        <div className="hongbao-li-right">
                                            <h2 className="hongbao-name">普通红包</h2>
                                            <p>仅限手机客户端使用</p>
                                            <p>{item.description[1]}</p>
                                            <p>{item.description[2]}</p>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <ul className="hongbao-list-unavailable"  style={{"display":this.state.unavailableClick === true ? "block":'none'}}>
                        {
                            this.state.historyData.map(item =>{
                                return (
                                    <li key={item.id}>
                                        <div className="hongbao-li-left">
                                            <span><i>￥</i><i>{item.amount}</i><i>.0</i></span>
                                            <p>{item.description[0]}</p>
                                        </div>
                                        <div className="hongbao-li-right">
                                            <h2 className="hongbao-name">普通红包</h2>
                                            <p>仅限手机客户端使用</p>
                                            <p>{item.description[1]}</p>
                                            <p>{item.description[2]}</p>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}
