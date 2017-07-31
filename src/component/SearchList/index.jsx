import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import '../../fonts/font-awesome.min.css';

function SearchList(props) {
    return (
        <div>
            <ul className="listBox">
                {
                    props.listData === undefined ? "" : props.listData.map(item=>{
                            return (
                                <li className="listBox-li" key={item.id}>
                                    <h4 className="typo-h5">
                                        <a  className="title" href="###">{item.title}</a>
                                        <div className="rstblock-activity">
                                        </div>
                                    </h4>
                                    <div className="li-bottom">
                                        <div className="star">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <div className="sail">{item.sales}</div>
                                        <div className="xian"></div>
                                        <div className="spendtime">平均{item.time}分钟送达</div>
                                    </div>
                                </li>
                            )
                        })
                }
                <img  alt="没有数据啦" src={require("../../images/tishi.png")} className="nodata" style={{"display" : props.listData===undefined ? "none":"block"}}/>
            </ul>
        </div>
    );
}
SearchList.PropTypes = {
    listData: PropTypes.array,
};
SearchList.defaultProps = {
    listData:[],
};
export default SearchList;