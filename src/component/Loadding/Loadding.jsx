import React, { Component} from 'react';
import './loadding.css';
export default class Loadding extends Component {
    render() {
        return (
            <div className="loaddingBox" style={{"display":this.props.style}}>
                <div className="loadding">正在载入数据。。。</div>
            </div>
        );
    }
}