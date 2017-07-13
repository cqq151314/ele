import React, { Component } from 'react';
import PropTypes from 'prop-types';
import bsStore from '../../store/fetch-npm-node';
import './index.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import '../../fonts/font-awesome.min.css';
// import Test from '../Test/index';
import Ubrated from '../Unrated/index';
import Refused from '../Refused/index';
import OrderDetail from '../OrderDetail/index'
import '../UserLeft/index.css'
import Search from '../Search/Search'
import UserRight from '../UserRight/index'
import orderThree from '../OrderThree/index'
import {BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
export default class profile extends Component {
    static propType = {
        listData: PropTypes.array,
    };
    constructor(props){
        super(props);
        this.state={
            //定义搜素列表数据
            listData:[],
            // 显示隐藏状态
            display:"block",
            // 控制文本框的显示隐藏
            show:'none',
            //value的值
            value:"",
            // 地址后面的状态
            myState:'',
            // 控制导航字体颜色变化
            myClolor:"",
        };
        this.handClick = this.handClick.bind(this);
    }

    /**
     *  input框输入值发生改变获取数据
     *  @param e  事件对象
     */
    onChange(e) {
        this.setState({'value': e.target.value});
        this.getData(e, e.target.value);
    }

    //点击事件
    onClick(e){
        this.state.value===""? this.setState({"display":"block"}): this.setState({"display":"none"}); this.getData(e,this.state.value);
    }

    /**
     *  获取数据
     *  @param e  事件对象
     *  @param keywords  获取数据时所需要的关键字
     */
    getData(e, keywords){
        bsStore.getKwordsData(keywords)
            .then(res =>{
                res.json().then(data => {
                    this.setState({'listData': data});
                });
            })
    }
    // 处理点击事件
    handClick(e){
        this.setState({onClick:!this.state.onClick});
        this.setState({myState:e.target.innerHTML});
    }
    render() {
        return (
            <Router>
                <div>
                <Header />
                <Search  state={this.state.myState} onChange={this.onChange.bind(this)} onClick={this.onClick.bind(this)} value={this.state.value} show={this.state.show}/>
                <div className="userCenter">
                    <ul className="profile-sidebar" style={{'marginTop':"0"}} >
                        <li className="profile-sidebar">
                            <h2 className="profile-sidebar-sectiontitle">
                                <NavLink to="/profile/center/" activeStyle={{color: '##0089dc'}}><span className="fa fa-home"></span><span onClick={(e)=>{this.handClick(e)}}>个人中心</span></NavLink>
                            </h2>
                        </li>
                        <li  className="profile-sidebar">
                            <h2 className="profile-sidebar-sectiontitle">
                                <span className="fa fa-file-text-o"></span>我的订单
                            </h2>
                            <ul>
                                <li><NavLink to="/profile/orderThree/"  activeStyle={{color: '#0089dc'}} onClick={(e)=>{this.handClick(e)}}>近三个月订单</NavLink></li>
                                <li><NavLink to="/profile/untated/"  activeStyle={{color: '#0089dc'}} onClick={(e)=>{this.handClick(e)}}>待评价订单</NavLink></li>
                                <li><NavLink to="/profile/refused/" activeStyle={{color: '#0089dc'}}  onClick={(e)=>{this.handClick(e)}}>退单记录</NavLink></li>
                            </ul>
                        </li>
                        <li  className="profile-sidebar">
                            <h2 className="profile-sidebar-sectiontitle">
                                <span className="fa fa-money"></span>我的资产
                            </h2>
                            <ul>
                                <li><a href="javascript:void(0)" >我的红包</a></li>
                                <li><a href="javascript:void(0)">账户余额</a></li>
                                <li><a href="javascript:void(0)">我的积分</a></li>
                            </ul>
                        </li>
                        <li  className="profile-sidebar">
                            <h2 className="profile-sidebar-sectiontitle">
                                <span className="fa fa-user-md"></span>我的资料
                            </h2>
                            <ul>
                                <li><a href="javascript:void(0)">个人资料</a></li>
                                <li><a href="javascript:void(0)">地址管理</a></li>
                                <li><a href="javascript:void(0)">安全中心</a></li>
                                <li><a href="javascript:void(0)">修改密码</a></li>
                            </ul>
                        </li>
                        <li  className="profile-sidebar">
                            <h2 className="profile-sidebar-sectiontitle">
                                <span className="fa fa-star-o"></span>我的收藏
                            </h2>
                        </li>
                    </ul>
                    <Route exact path="/profile" component={UserRight}/>
                    <Route path="/profile/center/" component={UserRight}/>
                    <Route exact path="/profile/orderThree/" component={orderThree}/>
                    <Route path="/profile/untated/" component={Ubrated}/>
                    <Route path="/profile/refused/" component={Refused}/>
                    <Route exact path="/profile/orderThree/id/:id" component={OrderDetail}/>
                    <Route exact path="/profile/order/id/:id" component={OrderDetail}/>
                </div>
                <Footer />
                </div>
            </Router>
        );
    }
}
