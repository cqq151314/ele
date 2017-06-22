import React, { Component } from 'react';
require('es6-promise').polyfill();
require('isomorphic-fetch');
require('../../fetch-npm-node');
import './productlist.css';
import data from './picdata.json';
import   '../Store/Store.jsx';
export default class ProductList extends Component {
    constructor(props){
        super(props);
        this.state={
            picurl:data.data,

        }
    }
    // fetch('../../../picdata.json')
    //    .then(function(response) {
    //     console.log(response); // data 就是一个JavaScript object
    //    });
    render() {
;        return (
            <div>
                <div className="box .clearfix">
                    {
                     data.data.map(item=>{
                         console.log(this.props.twodata2)
                         return (
                            <a href="###" target="_blank" className="rstblock" id={item.id}>
                                <div className="rstblock-logo">
                                    <img width="70" height="70" alt="汉堡王（西安高新店）" src={require("../../images/hbw.jpg")} className="rstblock-logo-icon" />
                                    <span>{item.time}分钟</span>
                                    <div className="elemeicon elemeicon-premiumsign rstblock-logo-premiumsign"></div>
                                </div>
                                <div className="rstblock-content">
                                    <div className="rstblock-title">{item.title}</div>
                                    <div className="starrating">
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="rstblock-monthsales">{item.sales}</span>
                                    </div>
                                    <div className="rstblock-cost">{item.Deliveryfee}</div>
                                    <div className="rstblock-activity">
                                        <i className="mycolor" style={{'display':item.zhun===''? 'none' : ''}}>{item.zhun}</i>
                                        <i style={{'display':item.bao===''? 'none' : ''}}>{item.bao}</i>
                                        <i style={{'display':item.piao===''? 'none' : ''}}>{item.piao}</i>
                                    </div>
                                </div>
                            </a>
                         )
                        })
                    }
                </div>
            </div>
        )
    }
}
