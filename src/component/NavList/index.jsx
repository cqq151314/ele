import React, { Component} from 'react';
import './index.css';
import Loading from '../Loading';
import bsStore from '../../store/fetch-npm-node'
export default class Store extends Component {
    constructor(props){
        super(props);
        this.state = {
            //索引
            index: '',
            // 第一层导航数据
            types: [],
            // 第二层导航数据
            sub_types: [],
            // 第三层数据
            boxData: [],
            // 导航选中颜色切花
            background: "#fff",
            // 字体颜色
            color: "#666",
            //控制导航的显示隐藏
            display: 'block',
            //控制loading的显示隐藏
            loadingDisplay: "none",
            // 当前选中的下标
            current: -1
        };
    }
    componentDidMount(){
        this.initData();
    }
    //初始化数据
    initData(){
        bsStore.getTypes()
            .then(res =>{
                res.json().then(data => {
                    this.setState({'types': data});
                });
            });
        bsStore.getData()
            .then(res =>{
                res.json().then(data => {
                    this.setState({'dataSource': data});
                    this.setState({'boxData': data});
                    this.setState({'index': data.id});
                });
            })
    }
    //获取数据
    getData(type){
        this.setState({"loadingDisplay":'block'});
        setTimeout(()=>{  bsStore.getData(type)
            .then(res =>{
                res.json().then(data => {
                    this.setState({'boxData': data});
                    this.setState({"background":'#fff'});
                    this.setState({"color":'#666'});
                    this.setState({'display':'block'});
                    this.setState({"loadingDisplay":'none'})
                });
            })},1000)
    }
    //点击获取全部数据
    getData2(type){
        this.setState({"loadingDisplay":'block'});
        setTimeout(()=>{  bsStore.getData(type)
            .then(res =>{
                res.json().then(data => {
                    this.setState({'boxData': data});
                    this.setState({"background":'#0089dc'});
                    this.setState({"color":'#fff'});
                    this.setState({'display':'none'})
                    this.setState({"loadingDisplay":'none'})
                });
            })},500)
    }
    getSubType(item) {
        this.setState({'sub_types': item.sub_categories});
    }
    render() {
        return (
            <div>
                <div className="store">
                    <span className="excavator-filter-name">商品分类:</span>
                    <div className="list-top">
                        <a className="excavator-filter-item" href="###" style={{"background":this.state.background,"color":this.state.color}} onClick={() =>{this.getData2()}}>全部商家</a>
                        {
                            this.state.types.map((item,index) =>{
                                return (
                                    <a className="excavator-filter-item" href="###"  style={{"color": index === this.state.current ? '#fff' : '#666'}} id={item.id}  key={item.id}  onClick={(e) =>{this.setState({ current: index });this.getSubType(item,index);this.getData(item.id+''+index)}}>{item.name}</a>
                                )
                            })
                        }
                    </div>
                    {/*第二层数据*/}
                    <div className="list-bottom" style={{'display':this.state.display}}>
                        {
                            this.state.sub_types.map(item =>{
                                return (
                                    <a  href="###" id={item.id} key={item.id} className="changecolor" onClick={() =>{this.getData(item.id)}}>{item.name}</a>
                                )
                            })
                        }
                    </div>
                </div>
                {/*第三层数据*/}
                <div className="box clearfix" style={{"display":this.state.loadingDisplay==='none'?'block':'none'}}>
                    {
                        this.state.boxData.map((item,index)=>{
                            return (
                                <a href="###"  className="rstblock" key={item.id} id={item.id}>
                                    <div className="rstblock-logo">
                                        <img width="70" height="70" alt="汉堡王（西安高新店）" src={require("../../images/"+index+".jpg")} className="rstblock-logo-icon" />
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
                                    {/*遮罩层*/}
                                    <div className="pop">
                                        <p className="pop-title">{item.title}</p>
                                        <div className="icon" style={{'display':item.zhun===''? 'none' : ''}}> <i className="mycolor">{item.zhun}</i><span>准时必达，超时秒赔</span></div>
                                        <div className="icon" style={{'display':item.bao===''? 'none' : ''}}> <i>{item.bao}</i><span>已加入“外卖宝”计划，食品安全有保障</span></div>
                                        <div  className="icon iconthree" style={{'display':item.piao===''? 'none' : ''}}> <i>{item.piao}</i><span>该商家支持开发票，请在下单时填写好发票抬头</span></div>
                                        <p className="usetime"><span>{item.Deliveryfee}</span><span>|</span><span>平均{item.time}分钟送达</span></p>
                                        <p className="article">{item.detail}</p>
                                    </div>
                                </a>
                            )
                        })
                    }
                </div>
                <Loading style={this.state.loadingDisplay} />
            </div>
        );
    }
}