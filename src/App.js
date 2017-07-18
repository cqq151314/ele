import React, { Component} from 'react';
import PropTypes from 'prop-types';
import './App.css';
import bsStore from './store/fetch-npm-node'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './component/Header/Header.jsx';
import UserCenter from './component/UserCenter/index'
import IndexCenter from './component/IndexCenter/index'
import Footer from './component/Footer/Footer'
class App extends Component {
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
            show:'show',
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
    render(){
        return (
            <div className="App">
                <Router>
                    <div>
                        <Header />
                            <Route exact path="/" component={IndexCenter}/>
                            <div className="center">
                                <Route exact path="/Profile" component={UserCenter}/>
                                <Route exact path="/Profile/*" component={UserCenter}/>
                            </div>
                        <Footer/>
                    </div>
                </Router>
            </div>
        );
    }
    }
export default App;
