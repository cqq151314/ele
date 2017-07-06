import React, { Component } from 'react';
import './productlist.css';
import data from './picdata.json';
import   '../NavList/NavList.jsx';
export default class ProductList extends Component {
    constructor(props){
        super(props);
        this.state={
            picurl:data.data,

        }
    }
    render() {
;        return (
            <div>
                <div className="box .clearfix">
                    {
                        this.state.boxData.map(item=>{
                            return (
                                <a href="###" target="_blank" className="rstblock" id={item.id}>
                                    <div className="rstblock-logo">
                                        <img width="70" height="70" alt="汉堡王（西安高新店）" src={require("../../images/hbw.jpg")} className="rstblock-logo-icon" />
                                        <span>{item.time}分钟</span>
                                        <div className="elemeicon elemeicon-premiumsign rstblock-logo-premiumsign"></div>
                                    </div>
                                    <div className="rstblock-content">
                                        <div className="rstblock-title">{item.title}</div>
                                        <div className="starrating">
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="rstblock-monthsales">{item.sales}</span>
                                        </div>
                                        <div className="rstblock-cost">{item.Deliveryfee}</div>
                                        <div className="rstblock-activity">
                                            <i className="mycolor" style={{'display':item.zhun===''? 'none' : ''}}>{item.zhun}</i>
                                            <i style={{'display':item.bao===''? 'none' : ''}}>{item.bao}</i>
                                            <i style={{'display':item.piao===''? 'none' : ''}}>{item.piao}</i>
                                        </div>
                                    </div>
                                    {/*遮罩层*/}
                                    <div className="pop">
                                        <p className="pop-title">{item.title}</p>
                                        <div className="icon" style={{'display':item.zhun===''? 'none' : ''}}> <i className="mycolor">{item.zhun}</i><span>准时必达，超时秒赔</span></div>
                                        <div className="icon" style={{'display':item.bao===''? 'none' : ''}}> <i>{item.bao}</i><span>已加入“外卖宝”计划，食品安全有保障</span></div>
                                        <div  className="icon iconthree" style={{'display':item.piao===''? 'none' : ''}}> <i>{item.piao}</i><span>该商家支持开发票，请在下单时填写好发票抬头</span></div>
                                        <p className="usetime"><span>{item.Deliveryfee}</span><span>|</span><span>平均{item.time}分钟送达</span></p>
                                        <p className="article">{item.detail}</p>
                                    </div>
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
