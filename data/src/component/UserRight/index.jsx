import React, { Component } from 'react';
import './index.css';
import '../../fonts/font-awesome.min.css';
export default class Userright extends Component {
    // static propType = {
    //     listData: PropTypes.array,
    // };
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

                </div>
                </div>
        );
    }
}
