import React, { Component} from 'react';
import bsStore from '../../store/fetch-npm-node'
import Search from '../../component/Search/Search';
import  NavList from '../../component/NavList/NavList.jsx';
import  SearchList from '../../component/SearchList/SearchList';
class IndexCenter extends Component {
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
                    <div>
                        <Search onChange={this.onChange.bind(this)} onClick={this.onClick.bind(this)} value={this.state.value} show={this.state.show}/>
                        {
                            this.state.display==='block'? <NavList style={{"display":"none"}}/> :<SearchList listData={this.state.listData} style={{"display":"none"}} display={this.state.display}/>
                        }
                    </div>
        );
    }
}
export default IndexCenter;
