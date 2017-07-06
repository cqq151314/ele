import React, { Component} from 'react';
import './loadding.css';
export default class Loadding extends Component {
    render() {
        return (
            <div>
                <div className="loadding" style={{"display":this.props.style}}>Loadding......</div>
            </div>
        );
    }
}