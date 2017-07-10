import React, { Component } from 'react';
import PropTypes from 'prop-types';
import bsStore from '../../store/fetch-npm-node';
import './index.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import '../../fonts/font-awesome.min.css';
import '../UserLeft/index.css'
import Search from '../Search/Search'
import UserRight from '../UserRight/index'
import orderThree from '../OrderThree/index'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
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
        }
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
    render() {
        return (
            <Router>
                <div>
                <Header />
                <Search onChange={this.onChange.bind(this)} onClick={this.onClick.bind(this)} value={this.state.value} show={this.state.show}/>
                <div className="userCenter">
                    <ul className="profile-sidebar" style={{'marginTop':"0"}} >
                        <li className="profile-sidebar">
                            <h2 className="profile-sidebar-sectiontitle">
                                <Link to="/profile/center/"><span className="fa fa-home"></span>个人中心</Link>
                            </h2>
                        </li>
                        <li  className="profile-sidebar">
                            <h2 className="profile-sidebar-sectiontitle">
                                <span className="fa fa-file-text-o"></span>我的订单
                            </h2>
                            <ul>
                                <li><Link to="/profile/orderThree/">近三个月订单</Link></li>
                                <li><Link to="/profile/untated/">待评价订单</Link></li>
                                <li><Link to="/profile/refused/">退单记录</Link></li>
                            </ul>
                        </li>
                        <li  className="profile-sidebar">
                            <h2 className="profile-sidebar-sectiontitle">
                                <span className="fa fa-money"></span>我的资产
                            </h2>
                            <ul>
                                <li><a href="###">我的红包</a></li>
                                <li><a href="###">账户余额</a></li>
                                <li><a href="###">我的积分</a></li>
                            </ul>
                        </li>
                        <li  className="profile-sidebar">
                            <h2 className="profile-sidebar-sectiontitle">
                                <span className="fa fa-user-md"></span>我的资料
                            </h2>
                            <ul>
                                <li><a href="###">个人资料</a></li>
                                <li><a href="###">地址管理</a></li>
                                <li><a href="###">安全中心</a></li>
                                <li><a href="###">修改密码</a></li>
                            </ul>
                        </li>
                        <li  className="profile-sidebar">
                            <h2 className="profile-sidebar-sectiontitle">
                                <span className="fa fa-star-o"></span>我的收藏
                            </h2>
                        </li>
                    </ul>
                    <Route exact path="/profile" component={UserRight}/>
                    <Route  path="/profile/center/" component={UserRight}/>
                    <Route  path="/profile/orderThree/" component={orderThree}/>
                    <Route path="/profile/untated/" component={Footer}/>
                    <Route path="/profile/refused/" component={Footer}/>
                </div>
                <Footer />
                </div>
            </Router>
        );
    }
}
