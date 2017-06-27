import React, { Component, PropTypes} from 'react';
import './searchlist.css';
import Search from '../Search/Search';
import '../../fonts/font-awesome.min.css';
import bsStore from '../../store/fetch-npm-node'
export default class SearchList extends Component {
    constructor(props) {
        super(props);
        this.state={
            //控制提示图像的显示隐藏
            display:this.props.display,
        }
    }
    render() {
        return (
              <div>
                <ul className="listBox">
                    {
                        this.props.listData===undefined ? this.setState({'display':'block'}):this.props.listData.map(item=>{
                         return (
                             <li className="listBox-li">
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
                    <img  alt="没有数据啦" src={require("../../images/tishi.png")} className="nodata" style={{"display":this.state.display}}/>
                </ul>
            </div>
        );
    }
}
