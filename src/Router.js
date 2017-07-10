import React, { Component} from 'react';
import { BrowserRouter, Route, } from 'react-router-dom'
import profile from './component/UserCenter/index'
import App from './App'
import Header from './component/Header/Header'
class MyRouter extends Component {
    render(){
                return (
                    <BrowserRouter>
                        <div>
                            <Route path='/profile' component={profile} />
                            <Route path="/shops/:id" component={Header} />
                            <Route exact path='/' component={App} />
                        </div>
                    </BrowserRouter>
                );
            }
    }
export default MyRouter;
