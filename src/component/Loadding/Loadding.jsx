import React, { Component} from 'react';
import './loadding.css';
export default class Loadding extends Component {
    render() {
        return (
            <div className="loaddingBox">
                <div className="loadding" style={{"display":this.props.style}}>正在载入数据。。。</div>
            </div>
        );
    }
}