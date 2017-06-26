import React, { Component, PropTypes } from 'react';
import './navlist.css';
import '../ProductList/productlist.css';
import bsStore from '../../store/fetch-npm-node'
export default class Store extends Component {
        static propType = {
            dataSource: PropTypes.array,
        };
         constructor(props){
             super(props);
             this.state={
                 //全部数据
                 dataSource:[],
                 //导航数据
                 titleSource:[],
                 // 第一层数据
                 oneData: [],
                 // 第二层数据
                 twoData: [],
                 // 第三层数据
                 boxData: [],
                 //索引
                 index:'',
                 // 产品选中
                 checked:'false',
                 // 导航选中颜色切花
                 background:"#fff",
                 // 字体颜色
                 color:"#666",
                 //是否选中
                 display:"none",
                 // 二级导航背景
                 background2:"#fff",
                 // 二级导航字体颜色
                 color2:"#666",
             };
                 //初始化数据
                 this.initData();
         }

    //初始化数据
    initData(){
        bsStore.getData()
            .then(res =>{
                res.json().then(data => {
                    this.setState({'dataSource': data});
                    this.setState({'boxData': data});
                    this.setState({'index': data.id});
                });
            })
    }
    //获取数据
    getData(type){
        bsStore.getData(type)
            .then(res =>{
                res.json().then(data => {
                    this.setState({'boxData': data});
                    this.setState({"twoData":data})
                    this.setState({"background":'#fff'});
                    this.setState({"color":'#666'});
                    this.setState({"background2":'#0089dc'});
                    this.setState({"color2":'#fff'});
                    this.setState({"display":"inline-block"})
                });
            })
    }
    //点击全部商家
    getData2(type){
        bsStore.getData(type)
            .then(res =>{
                res.json().then(data => {
                    this.setState({'boxData': data});
                    this.setState({"twoData":data})
                    this.setState({"display":"none"})
                });
            })
    }
    //点击子导航获取数据
    getData3(type2){
        bsStore.getData3(type2)
            .then(res =>{
                res.json().then(data => {
                    this.setState({'boxData': data});
                    this.setState({"twoData":data})
                    this.setState({"display":"none"})
                });
            })
    }
    //改变样式
    currentf(){
        this.setState({"background":'#0089dc'});
        this.setState({"color":'#fff'});
    }
    render() {

        return (
            <div>
                <div className="store">
                    <span className="excavator-filter-name">商品分类:</span>
                    <div className="list-top">
                        <a className="excavator-filter-item" href="javascript:" style={{"background":this.state.background,"color":this.state.color}} onClick={() =>{this.getData2();this.currentf()}}>全部商家</a>
                        {
                            this.state.dataSource.map(item=>{
                               return (
                                   <a className="excavator-filter-item"  href="javascript:" id={item.id} onClick={(index) =>{this.getData(item.type)}}>{item.onetit}</a>
                               )
                            })
                        }
                    </div>
                    {/*第二层数据*/}
                    <div className="list-bottom">
                        <a className="active" href="javascript:" style={{"display":this.state.display,"background":this.state.background2,"color":this.state.color2}}>全部</a>
                        {
                            this.state.twoData.map(item =>{
                                return (
                                    <a  href="javascript:" style={{"display":this.state.display}} id={item.id}  onClick={(index) =>{this.getData3(item.type2)}}>{item.twotit}</a>
                                )
                            })
                        }
                    </div>
                </div>
                {/*第三层数据*/}
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
        );
    }
}
