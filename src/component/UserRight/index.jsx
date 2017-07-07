import React, { Component } from 'react';
import './index.css';
import '../../fonts/font-awesome.min.css';
import bsStore from '../../store/fetch-npm-node'
export default class Userright extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // pageSize 个数
            pageSize:3,
            // currentPage 页码
            currentPage:1,
            // pageLength 总页码
            pageLength:10,
        };
        this.initData(this.state.pageSize,this.state.currentPage);
    }
    //初始化
    initData(pageSize,currentPage){
        bsStore.getOrder(pageSize,this.state.currentPage)
            .then(res =>{
                res.json().then(data => {
                   console.log(data);
                });
            })
    }

    // 点击前一页
    PreClick(){
        console.log(1);
     if(this.state.currentPage > 1){
         this.setState({'currentPage':this.state.currentPage-1});
         bsStore.getOrder(this.state.pageSize,this.state.currentPage)
             .then(res =>{
                 res.json().then(data => {
                     console.log(data);
                 });
             })
     }
    }

    // 点击后一页
    NextClick(){
        console.log(2);
    if(this.state.pageLength<10){
        this.setState({'currentPage':this.state.currentPage+1});
        bsStore.getOrder(this.state.pageSize,this.state.currentPage)
            .then(res =>{
                res.json().then(data => {
                    console.log(data);
                });
            })
    }
    }

    render() {
        return (
            <div className="profile-panel">
                <div  className="user-top">
                <div className="profile-info">
                        <div className="profile-avatarwrap">
                            <img src={require("../../images/user.jpg")} />
                        </div>
                        <div className="profile-perosondata">
                            <h3 className="profile-name">晚上好，<strong>45c5aaed7</strong></h3>
                            <p className="profile-tips">晚饭叫外卖，不吸油烟，不洗碗筷！</p>
                            <p className="profile-security">账户安全：<span className="high">高</span><a href="###">查看详情</a></p>
                            <p className="profile-othermessage">
                                <a href="javaScript:"><span className="fa fa-mobile"></span></a>
                                <a href="javaScript:"><span className="fa fa-envelope-o"></span></a>
                            </p>
                        </div>
                    </div>
                    <div className="profile-infoitem profile-space">
                        <a href="javaScript():">
                            <p className="name">我的红包</p>
                            <p className="profile-infoitem-number"><span className="number">3</span>个</p>
                        </a>
                    </div>
                <div className="profile-infoitem profile-space">
                    <a href="javaScript:">
                        <p className="name">我的积分</p>
                        <p className="profile-infoitem-jifen "><span className="number">0</span>分</p>
                    </a>
                </div>
                <div className="profile-infoitem profile-space">
                    <a href="javaScript:">
                        <p className="name">账户余额</p>
                        <p className="profile-infoitem-money"><span className="number">0.00</span>元</p>
                    </a>
                </div>
                </div>
                <div className="profile-order">
                    <div className="tabnavigation">
                        <a className="tabnavigation-navitem active">最近订单</a>
                        <a className="tabnavigation-rightitem profile-allorder" href="javaScript():">查看全部订单</a>
                    </div>
                    <ul className="orderblock">
                        <li  className="orderblock-item">
                            <div className="orderblock-shop">
                                <div className="orderblock-shop-l"><a href="javascript:"><img src={require("../../images/w.png")} /></a></div>
                                <div className="orderblock-shop-r">
                                    <h2><a href="Javascript:">魏家凉皮（高新店）</a></h2>
                                    <p className="shop-detail">肉夹馍1份 / 皮蛋瘦肉粥1份</p>
                                    <p className="shop-total"><a href="Javascript:">共<span>4</span>个菜品></a></p>
                                </div>
                            </div>
                            <div className="orderblock-time">
                                <p>17-07-07</p>
                                <p>09-26</p>
                            </div>
                            <div className="orderblock-money">
                                <p>￥29:00</p>
                                <p>在线支付</p>
                            </div>
                            <div className="orderblock-detail">
                                <p>订单已支付</p>
                                <p><a href="Javascript:">订单详情</a></p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="chart-page">
                    <div className="many-span">
                    <span>{this.state.currentPage}/{this.state.pageLength}</span>
                    <span style={{"background":'red'}} onClick={()=>{this.PreClick()}}>&lt;</span>
                    <span  style={{"background":'pink'}}onClick={()=>{this.NextClick()}}>&gt;</span>
                    </div>
                </div>
                <div className="food-footprint">
                    <div className="tabnavigation">
                        <a className="tabnavigation-navitem active">美食足迹</a>
                        <a className="collect" href="javaScript():">我的收藏</a>
                    </div>
                    <div className="nearest-goods">
                        <a className="nearest-goods-pic">
                             <img src={require("../../images/sc.jpeg")} />
                            <p>39分钟</p>
                        </a>
                        <a className="nearest-goods-detail">
                            <h2>螺鼎记螺蛳粉</h2>
                            <p>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <span className="shownum">月售444单</span></p>
                            <p className="Delivery-fee">配送费￥4</p>
                            <div>
                                <i className="shop-zhun">准</i>
                                <i className="shop-bao">保</i>
                            </div>
                        </a>
                    </div>
                </div>
                </div>
        );
    }
}
