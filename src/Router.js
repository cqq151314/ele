import React, { Component} from 'react';
import { BrowserRouter, Router, Route, } from 'react-router-dom'
import profile from './component/UserCenter/index'
import App from './App'
class MyRouter extends Component {
    render(){
                return (
                    <BrowserRouter>
                        <div>
                            <Route path='/profile' component={profile} />
                            <Route exact path='/' component={App} />
                        </div>
                    </BrowserRouter>
                );
            }
    }
export default MyRouter;
