import React, { Component } from 'react';
import './index.css';
import bsStore from '../../store/fetch-npm-node';
export default class Balance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // 是否选中
            checked:"全部",
            // 时间 是否选中
            timeChecked:'',
            // 数据
            data:[],
        }
        this.initData();
    }
    // 初始化
    initData(){
        bsStore.getBalance()
            .then(res =>{
                res.json().then(data => {
                    this.setState({"data":data});
                });
            });
    }

    // 点击分类，分类选项切换
    classcifyClick(e){
        this.setState({"checked":e.target.innerHTML});
        if(e.target.innerHTML === "全部"){
            this.setState({"timeChecked":""});
            bsStore.getBalance()
                .then(res =>{
                    res.json().then(data => {
                        this.setState({"data":data});
                    });
                });
        }else{
            if(this.state.timeChecked === ""){
                bsStore.getBalance(e.target.innerHTML)
                    .then(res =>{
                        res.json().then(data => {
                            this.setState({"data":data});
                        });
                    });
            }else{
                bsStore.getBalance(e.target.innerHTML,this.state.timeChecked )
                    .then(res =>{
                        res.json().then(data => {
                            this.setState({"data":data});
                        });
                    });
            }

        }
    }
    // 点击时间，时间切换
    timeClick(e){
        this.setState({"timeChecked":e.target.innerHTML});
        bsStore.getBalance(this.state.checked,e.target.innerHTML)
            .then(res =>{
                res.json().then(data => {
                    this.setState({"data":data});
                });
            });
    }
    render() {
        return (
            <div>
                <div className="balance-box">
                    <h2 className="balance-title">账户余额</h2>
                    <div className="count-money">
                        <p className="count-detail"><span>当前账户余额:</span><span><i>0</i>元</span><span>提现</span></p>
                    </div>
                    <p className="count-icon">账户资产明细</p>
                    <div className="classification">
                        <ul>
                            <li>分类</li>
                            <li onClick={(e)=>{this.classcifyClick(e)}} className={this.state.checked === '全部'?"balance-active":""}>全部</li>
                            <li onClick={(e)=>{this.classcifyClick(e)}} className={this.state.checked === '充值'?"balance-active":""}>充值</li>
                            <li onClick={(e)=>{this.classcifyClick(e)}} className={this.state.checked === '余额消费'?"balance-active":""}>余额消费</li>
                            <li onClick={(e)=>{this.classcifyClick(e)}} className={this.state.checked === '第三方支付消费'?"balance-active":""}>第三方支付消费</li>
                            <li  onClick={(e)=>{this.classcifyClick(e)}} className={this.state.checked === '支付失败退款'?"balance-active":""} >支付失败退款</li>
                            <li  onClick={(e)=>{this.classcifyClick(e)}} className={this.state.checked === '订单退款'?"balance-active":""} >订单退款</li>
                            <li onClick={(e)=>{this.classcifyClick(e)}} className={this.state.checked === '提现'?"balance-active":""}>提现</li>
                        </ul>
                    </div>
                    <div className="classification">
                        <ul>
                            <li>时间</li>
                            <li onClick={(e)=>{this.timeClick(e)}} className={this.state.timeChecked === '今天'?"balance-active":""}>今天</li>
                            <li onClick={(e)=>{this.timeClick(e)}} className={this.state.timeChecked === '近7天'?"balance-active":""}>近7天</li>
                            <li onClick={(e)=>{this.timeClick(e)}} className={this.state.timeChecked === '近15天'?"balance-active":""}>近15天</li>
                            <li onClick={(e)=>{this.timeClick(e)}} className={this.state.timeChecked === '1个月'?"balance-active":""}>1个月</li>
                        </ul>
                    </div>
                    <div className="balance-list-title">
                        <span>创建时间</span>
                        <span>交易类型</span>
                        <span>金额变更</span>
                        <span>余额</span>
                    </div>
                    <div className="balance-list">
                        {
                            this.state.data.map(item =>{
                                return(
                                    <ul key={item.id}>
                                        <li>{item.createtime}</li>
                                        <li>{item.type}</li>
                                        <li>{item.changemoney}</li>
                                        <li>{item.totalmoney}</li>
                                    </ul>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}
