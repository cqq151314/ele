import React, { Component } from 'react';
import PropTypes from 'prop-types';
import bsStore from '../../store/fetch-npm-node';
import './index.css';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import '../../fonts/font-awesome.min.css';
import Search from '../Search/Search'
import UserLeft from '../UserLeft/index'
import Right from '../UserRight/index'
export default class profile extends Component {
    static propType = {
        listData: PropTypes.array,
    };
    constructor(props){
        super(props);
        this.state={
            //定义搜素列表数据
            listData:[],
            // 显示隐藏状态
            display:"block",
            // 控制文本框的显示隐藏
            show:'none',
            //value的值
            value:"",
        }
    }
    /**
     *  input框输入值发生改变获取数据
     *  @param e  事件对象
     */
    onChange(e) {
        this.setState({'value': e.target.value});
        this.getData(e, e.target.value);
    }
    //点击事件
    onClick(e){
        this.state.value===""? this.setState({"display":"block"}): this.setState({"display":"none"}); this.getData(e,this.state.value);
    }
    /**
     *  获取数据
     *  @param e  事件对象
     *  @param keywords  获取数据时所需要的关键字
     */
    getData(e, keywords){
        bsStore.getKwordsData(keywords)
            .then(res =>{
                res.json().then(data => {
                    this.setState({'listData': data});
                });
            })
    }

    render() {
        return (
            <div>
               <Header />
                <Search onChange={this.onChange.bind(this)} onClick={this.onClick.bind(this)} value={this.state.value} show={this.state.show}/>
                <div className="userCenter">
                    <UserLeft />
                    <Right />
                </div>
                <Footer />
            </div>
        );
    }
}
