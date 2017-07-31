import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import '../../fonts/font-awesome.min.css';
import katong from '../../images/katong.png';
function Search(props) {
    return (
        <div>
            <div className="search">
                <div className="seach-l">
                    <span>当前位置:</span>
                    <span className="address"><a href="###">雁塔区高新九号广场(西北大学桃园校区东)</a></span>
                    <span className="tapaddress"><a href="https://www.ele.me/home/">[切换地址]&nbsp;&nbsp;</a></span>
                    <span className="address">》&nbsp;&nbsp;{props.state}</span>
                </div>
                <div className="seach-r">
                    <div className="place-search" style={{display: props.show}}>
                        <a className="place-search-btn"><span className = "fa fa-search" onClick = {props.onClick.bind(this)}></span></a>
                        <input placeholder="搜索商家,美食..." value = {props.value} className = "place-search-input" onChange = {props.onChange.bind(this)} />
                    </div>
                </div>
            </div>
            <div className='place-tab'  style={{display: props.show}}>
                <div className="place-fetchtakeout ng-isolate-scope" >
                    <img src={katong} alt="卡通动画" />
                </div>
            </div>
        </div>
    );
}
Search.PropTypes = {
    state: PropTypes.string,
    value: PropTypes.string,
    show: PropTypes.func,
    onClick: PropTypes.func,
}.isRequired;
Search.defaultProps = {};
export default Search;