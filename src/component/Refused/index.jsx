import React, { Component } from 'react';
import './index.css';
import '../../fonts/font-awesome.min.css';
import bsStore from '../../store/fetch-npm-node';
import Loadding from '../Loadding/Loadding';
export default class Refused extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //  显示/隐藏
            loaddingDisplay:"block",
        };

    }
    // 初始化,根据页码和每页显示的个数请求数据
    initData(){
        this.setState({"loaddingDisplay":'block'});
            bsStore.refusedData()
                .then(res =>{
                    res.json().then(data => {
                    });
                    this.setState({"loaddingDisplay":'none'});
                });
    }
    // 组件渲染后初始化数据
    componentDidMount(){
        this.initData();
    }
    render() {
        return (
            <div>
            <div className="refaused" style={{"display":this.state.loaddingDisplay === 'none'?'block':'none'}}>
                <h2 className="refaused-title">退单记录</h2>
                <div className="refaused-box">暂无记录，现在就去<a href="/">订餐</a>吧</div>
            </div>
                <Loadding style={this.state.loaddingDisplay} />
            </div>

        );
    }
}
