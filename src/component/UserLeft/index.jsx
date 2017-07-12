import React, { Component } from 'react';
import './index.css';
import '../../fonts/font-awesome.min.css';
export default class UserLeft extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div >
                <ul className="profile-sidebar" style={{'marginTop':"0"}} >
                    <li className="profile-sidebar">
                        <h2 className="profile-sidebar-sectiontitle">
                            <span className="fa fa-home"></span>个人中心
                        </h2>
                    </li>
                    <li  className="profile-sidebar">
                        <h2 className="profile-sidebar-sectiontitle">
                            <span className="fa fa-file-text-o"></span>我的订单
                        </h2>
                        <ul>
                            <li><a href="/1">近三个月订单</a></li>
                            <li><a href="/2">待评价订单</a></li>
                            <li><a href="/3">退单记录</a></li>
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
            </div>
        );
    }
}
