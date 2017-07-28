import React from 'react';
import './index.css';
function Loading(props) {
    return (
        <div className="loadingBox" style={{"display": props.style}}>
            <div className="loading">正在载入数据。。。</div>
        </div>
    );
}
export default  Loading;