import React, { Component } from 'react';
import './search.css';
import '../../fonts/font-awesome.min.css';
import katong from '../../images/katong.png';
export default class Search extends Component {
    render() {
        return (
            <div >
                <div className="search">
                <div className="seach-l">
                    <span>当前位置:</span>
                    <span className="address"><a href="###">雁塔区高新九号广场(西北大学桃园校区东)</a></span>
                    <span className="tapaddress"><a href="https://www.ele.me/home/">[切换地址]</a></span>
                </div>
                <div className="seach-r">
                    <div className="place-search">
                        <a className="place-search-btn"><span className="fa fa-search" onClick={this.props.onClick.bind(this)}></span></a>
                        <input placeholder="搜索商家,美食..." value={this.props.value} className="place-search-input" onChange={this.props.onChange.bind(this)}/>
                    </div>
                </div>
                </div>
                <div className='place-tab'>
                    <div className="place-fetchtakeout ng-isolate-scope" >
                        <img src={katong} alt="卡通动画"/>
                    </div>
                </div>
            </div>
        );
    }
    return
}
