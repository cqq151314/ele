import React, { Component } from 'react';
import './header.css';
import logo from '../../images/logo.jpg';
import '../../fonts/font-awesome.min.css';
export default class Header extends Component {
    render() {
        return (
            <div>
                <div className="App-header">
                    <div className="App-header-con">
                        <div className="App-header-con-l">
                            <h1>
                                <img src={logo} className="App-logo" alt="logo" />
                            </h1>
                            <a href="###"  className="header-a  header-hover">首页</a>
                            <a href="###"  className="header-a">我的订单</a>
                            <a href="###"  className="header-a">加盟合作</a>
                        </div>
                        <div className="App-header-con-r">
                            <nav>
                                <div>
                                    <a href="###" className="server"><span className="fa fa-futbol-o"></span>服务中心</a>
                                    <a href="###">规则中心</a>
                                    <a href="###" className="mashow"><span  className='fa fa-mobile'></span>手机应用
                                        <div className="dropbox topbar-mobile-dropbox">
                                            <span>扫一扫, 手机订餐更方便</span>
                                            <img  src={require("../../images/ma.png")} alt="扫一扫下载饿了么手机 App" />
                                        </div>
                                    </a>
                                </div>
                                <a href="###" className="header-login"><span className='fa fa-user'></span>登录/注册</a>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
