import React, { Component } from 'react';
import './navlist.css';
import data from '../ProductList/menu.json';

export default class Store extends Component {
     constructor(props){
         super(props);

         this.state={
             twodata:[],
             twodata2:[],
         }
     }
    ProductData(twovalue){
        this.setState({twodata: twovalue});
    }
    DetailData(datapic){
        this.setState({twodata2: datapic});
    }
    render() {
        return (
            <div>
                <div className="store">
                    <span className="excavator-filter-name">商家分类:</span>
                    <div className="list-top">
                    <a className="excavator-filter-item" href="javascript:">全部商家</a>
                    {
                        data.data.map(item=>{
                            var twovalue=item.con;
                              return (
                                  <a className="excavator-filter-item" href="javascript:" onClick={(value) =>{this.ProductData(twovalue)}} twonav={item.con}>{item.onetit}</a>
                                  )
                           } )
                    }
                    </div>
                    <div className="twonav">
                    {
                        this.state.twodata.map(item=>{
                            var datapic=item.datapic;
                        return (
                            <a className="excavator-filter-item" href="javascript:" onClick={(value)=>{this.DetailData(datapic)}}>{item.name}</a>
                        )
                    })
                  }
                    </div>
                </div>
            </div>
        );
    }
}
