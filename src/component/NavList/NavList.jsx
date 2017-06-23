import React, { Component, PropTypes } from 'react';
import './navlist.css';
import '../ProductList/productlist.css';
import bsStore from '../../store/fetch-npm-node'
export default class Store extends Component {
        static propType = {
            dataSource: PropTypes.array,
            // boxData: PropTypes.array,
        };
         constructor(props){
             super(props);
             this.state={
                 //全部数据
                 dataSource:[],
                 // 第一层数据
                 oneData: [],
                 // 第二层数据
                 twoData: [],
                 // 第三层数据
                 boxData: [],
                 //索引
                 index:'',
             };
             this.initData();
             this.getData= this.getData.bind(this);
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
    getData(id){
        bsStore.getData(id)
            .then(res =>{
                res.json().then(data => {
                    this.setState({'boxData': data});
                    this.setState({"twoData":data})
                });
            })
    }
    render() {
        return (
            <div>
                <div className="store">
                    <span className="excavator-filter-name">商品分类:</span>
                    <div className="list-top">
                        <a className="excavator-filter-item" href="javascript:">全部商家</a>
                        {
                            this.state.dataSource.map(item =>{
                               return (
                                   <a className="excavator-filter-item" href="javascript:" id={item.id}  onClick={(index) =>{this.getData(item.id)}}>{item.title}</a>
                               )
                            })
                        }
                    </div>
                    {/*第二层数据*/}
                    <div className="list-bottom">
                        <a className="active" href="javascript:">全部</a>
                        {
                            this.state.twoData.map(item =>{
                                return (
                                    <a  href="javascript:" id={item.id}  onClick={(index) =>{this.getData(item.id)}}>{item.name}</a>
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
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}
