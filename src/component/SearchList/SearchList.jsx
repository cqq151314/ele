import React, { Component } from 'react';
import './searchlist.css';
import '../../fonts/font-awesome.min.css';
export default class SearchList extends Component {
    render() {
        return (
              <div>
                <ul className="listBox">
                    {
                        this.props.listData===undefined ? "":this.props.listData.map(item=>{
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
                    <img  alt="没有数据啦" src={require("../../images/tishi.png")} className="nodata" style={{"display":this.props.listData===undefined ? "none":"block"}}/>
                </ul>
            </div>
        );
    }
}
