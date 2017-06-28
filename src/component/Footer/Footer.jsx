import React, { Component } from 'react';
import './footer.css';
import ftpic from '../../images/picp_bg.e373b3.jpg';
export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className="footer">
                    <div className="footer-link">
                        <h3>用户帮助</h3>
                        <a href="http://www.ele.me" target="_blank" rel="noopener noreferrer">服务中心</a>
                        <a href="http://www.ele.me" target="_blank" rel="noopener noreferrer">常见问题</a>
                        <a href="http://www.ele.me" target="_blank" rel="noopener noreferrer">在线客服</a>
                    </div>
                    <div className="footer-link">
                        <h3>商务合作</h3>
                        <a href="http://www.ele.me" target="_blank" rel="noopener noreferrer">我要开店</a>
                        <a href="http://www.ele.me" target="_blank" rel="noopener noreferrer">加盟指南</a>
                        <a href="http://www.ele.me" target="_blank" rel="noopener noreferrer">市场合作</a>
                        <a href="http://www.ele.me" target="_blank" rel="noopener noreferrer">开放平台</a>
                    </div>
                    <div className="footer-link">
                        <h3>关于我们</h3>
                        <a href="http://www.ele.me" target="_blank" rel="noopener noreferrer">饿了么介绍</a>
                        <a href="http://www.ele.me" target="_blank" rel="noopener noreferrer">加入我们</a>
                        <a href="http://www.ele.me" target="_blank" rel="noopener noreferrer">联系我们</a>
                        <a href="http://www.ele.me" target="_blank" rel="noopener noreferrer">规则中心</a>
                    </div>
                    <div className="footer-contect">
                        <div className="footer-contect-item">24小时客服热线：<a href="###">10105757</a></div>
                        <div className="footer-contect-item">意见反馈：<a href="###">feedback@ele.me</a></div>
                        <div className="footer-contect-item">关注我们：<a href="###"><span className="fa fa-weixin"></span><span className="fa fa-weibo"></span></a></div>
                    </div>
                    <div className="footer-mobile">
                        <a href="https://h.ele.me/landing" target="_blank" rel="noopener noreferrer">
                            <img src="//faas.elemecdn.com/desktop/media/img/appqc.95e532.png" className="footer-mobile-icon" alt="扫一扫下载饿了么手机 App" />
                        </a>
                        <div className="footer-mobile-content">
                            <h3>下载手机版</h3>
                            <p>扫一扫,手机订餐方便</p>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <h5 className="owner">所有方：上海拉扎斯信息科技有限公司</h5>
                        <p>增值电信业务许可证 : <a href="http://www.shca.gov.cn/" target="_blank" rel="noopener noreferrer">沪B2-20150033</a> |
                            <a href="http://www.miibeian.gov.cn/" target="_blank" rel="noopener noreferrer">沪ICP备 09007032</a> |
                            <a href="http://www.sgs.gov.cn/lz/licenseLink.do?method=licenceView&amp;entyId=20120305173227823" target="_blank" rel="noopener noreferrer">上海工商行政管理</a>
                            Copyright ©2008-2017 ele.me, All Rights Reserved.
                        </p>
                    </div>
                    <div className="footer-police">
                        <a href="http://www.zx110.org/picp/?sn=310100103568"  target="_blank" rel="noopener noreferrer">
                            <img alt="已通过沪公网备案，备案号 310100103568" src={ftpic} /></a>
                    </div>
                </div>
            </div>
        );
    }
}
