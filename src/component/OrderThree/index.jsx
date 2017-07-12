import React, { Component } from 'react';
import './index.css';
import '../../fonts/font-awesome.min.css';
import bsStore from '../../store/fetch-npm-node';
import {Link} from 'react-router-dom'
export default class UserRight extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // pageSize 个数
            pageSize:10,
            // 页码
            currentPage:1,
            // 数据长度
            datalength:3,
            // 数据
            data:[],
            // 分页列表
            pageList:[],
            // 当前点击的索引
            currentIndex:1,
        };
    }

    /**
     *  初始化,根据页码和每页显示的个数请求数据
     *  @param currentPage  当前页码
     *  @param pageSize  每页显示商品个数
     */
    initData(currentPage,pageSize){
        let listData=[];
        for(let i=1;i<=this.state.datalength;i++){
            listData.push(i);
            this.setState({pageList:listData});
        }
        bsStore.getOrder(this.state.currentPage,pageSize)
            .then(res =>{
                res.json().then(data => {
                    this.setState({"data":data});
                });
            });
    }

    /**
     *  点击分页获取数据
     *  @param  currentPage  第几页
     */
    getPageData(currentPage){
        this.setState({"currentIndex":currentPage});
        bsStore.getOrder(currentPage,this.state.pageSize)
            .then(res =>{
                res.json().then(data => {
                    this.setState({"data":data});
                });
            });
    }

    /**
     *  根据ID获取具体的商品信息
     *  @param id   商品ID
     */
    getDataDetail(id){
        bsStore.getIDData(id)
            .then(res =>{
                res.json().then(data => {
                 // console.log(data);
                });
            });
    }
     // 组件渲染后初始化数据
    componentDidMount(){
        this.initData(this.state.currentPage,this.state.pageSize);
    }

    render() {
        return (
            <div className="profile-three">
                <h2 className="threeOrder-title">近三个月订单</h2>
                <div className="order-pic"></div>
                <p className="pic-title">热门话题，随时关注订单状态</p>
                <div className="order-list">
                    <ul>
                        <ul className="shoplist-title">
                            <li>下单时间</li>
                            <li>订单内容</li>
                            <li></li>
                            <li>支付金额（元）</li>
                            <li>状态</li>
                            <li>操作</li>
                        </ul>
                        {
                            this.state.data.map(item =>{
                                return (
                                    <li className="shop-item" key={item.id} id={item.id}>
                                        <ul className="shop-item-even">
                                            <li className="order-time">
                                                <p>07-07</p>
                                                <p>11:10</p>
                                            </li>
                                            <li className="order-icon">
                                                <img src={require("../../images/w.png")} alt=""/>
                                            </li>
                                            <li  className="order-detail" >
                                                <h3>{item.title}</h3>
                                                <p>腊肠1份 / 花甲1份 等 4 个菜品</p>
                                                <p>订单号: 1210029040805317659</p>
                                            </li>
                                            <li className="order-money">
                                                <h3 >27.01</h3>
                                                <p>在线支付</p>
                                            </li>
                                            <li  className="order-status">
                                                <p>订单已取消</p>
                                            </li>
                                            <li className="order-backagain">
                                                <p><Link to={"/profile/orderThree/id/"+ item.id } onClick={()=>{this.getDataDetail(item.id)}}>订单详情</Link></p>
                                                <p><a href="###">再来一份</a></p>
                                            </li>
                                        </ul>
                                    </li>

                                )
                            })
                        }
                    </ul>
                    <div className="order-page">
                        <ul>
                            {
                                this.state.pageList.map((item) =>{
                                    return (
                                        <li  key={item} style={{"background":this.state.currentIndex === item ? "#0089dc":"#FFF","color":this.state.currentIndex === item ? "#fff":"#000"}} onClick={()=>{this.getPageData(item)}}>{item}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
