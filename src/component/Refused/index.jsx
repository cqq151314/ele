import React, { Component } from 'react';
import './index.css';
import '../../fonts/font-awesome.min.css';
export default class Refused extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div>
            <div className="refaused">
                <h2 className="refaused-title">退单记录</h2>
                <div className="refaused-box">暂无记录，现在就去<a href="/">订餐</a>吧</div>
            </div>
            </div>

        );
    }
}
