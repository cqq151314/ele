import React, { Component } from 'react';
import './index.css';
import '../../fonts/font-awesome.min.css';
import bsStore from '../../store/fetch-npm-node'
export default class OrderDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // 数据
            detailData:[],
        };
        this.initData(window.location.pathname.split('id/')[1]);
    }
    /**
     *  初始化商品数据
     *  @param  id  商品ID
     */
    initData(id){
        bsStore.getIDData(id)
            .then(res =>{
                res.json().then(data => {
                    this.setState({"detailData":data[0]})
                });
            });
        }
    render() {
        return (
            <div className="Order-detail">
                <h2 className="Order-detail-title">订单详情</h2>
                <ul className="Order-detail-states">
                    <li>等待支付<span className="Order-detail-states-squree"></span></li>
                    <li>等待接单<span className="Order-detail-states-squree"></span></li>
                    <li>等待送达<span className="Order-detail-states-squree"></span></li>
                </ul>
                <div className="Order-detail-pay">
                    <div className="detail-pay-l">
                        <p>等待支付</p>
                        <p>逾期未支付订单将自动取消</p>
                    </div>
                    <ul className="detail-pay-r">
                        <li><a href="###">取消订单</a></li>
                        <li><a href="###">再来一单</a></li>
                        <li><a href="###">去支付</a></li>
                    </ul>
                </div>
                <div className="detail-products">
                    <div className="detail-products-l">
                        <img  src={require("../../images/small.png")} alt=""/>
                        <div className="detail-products-l-title">
                            <p>{this.state.detailData.title}</p>
                            <p>订单号：1210220373998275</p>
                        </div>
                    </div>
                    <div className="detail-products-m">
                        <p>商家电话：029-88691021</p>
                    </div>
                    <div className="detail-products-r">
                        <a><span className="fa fa-star-o"></span>已收藏</a>
                        <a><span className="fa fa-star-o"></span>投诉</a>
                    </div>
                </div>
                <div className="orderprogress-cardlist">
                    <div className="orderprogress-cardlist-l">
                        <div className="orderprogress-item"><span>菜品</span><span>数量</span><span>小计(元)</span></div>
                        <div className="orderprogress-item"><span>阿香番茄米线</span><span>1</span><span>31.00</span></div>
                        <div className="orderprogress-item"><span>餐盒</span><span>&nbsp;</span><span>3.00</span></div>
                        <div className="orderprogress-item"><span>配送费</span><span>&nbsp;</span><span>3.00</span></div>
                        <p className="total"><span>实际支付：</span><span>37.00</span></p>
                    </div>
                    <div className="orderprogress-cardlist-r">
                        <p className="deliverytitle">配送方式</p>
                        <p>配送方式：蜂鸟专送</p>
                        <p>送达时间：尽快送出</p>
                        <p>联系人：陈清清女士</p>
                        <p>联系电话：18729316055</p>
                        <p>收货地址：蓝溪国际大厦20楼输运</p>
                        <p>发票信息：无发票</p>
                        <p>备注信息：无备注</p>
                    </div>
                </div>
                <div className="footer-xian"></div>
            </div>
        )
    }
}
